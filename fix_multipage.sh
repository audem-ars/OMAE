set -euo pipefail

# Go to repo root
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

# 1) Find the module script used by site/index.html (source-time entry)
ENTRY_SRC="$(perl -ne 'if (/<script[^>]*type="module"[^>]*src="([^"]+)"/i){print $1; exit}' site/index.html || true)"
if [ -z "${ENTRY_SRC:-}" ]; then
  echo "Could not find <script type=\"module\" src=\"...\"> in site/index.html"
  exit 1
fi
echo "Using entry: $ENTRY_SRC"

# 2) Create/overwrite site/get-started.html that uses the SAME entry
cat > site/get-started.html <<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Get Started – OMAE</title>
  </head>
  <body>
    <header style="max-width:960px;margin:2rem auto 1rem;padding:0 1rem;">
      <a href="./" aria-label="Back to home">← Back</a>
      <h1 style="margin:.5rem 0 0;">Get Started</h1>
      <p style="opacity:.75;margin:.5rem 0 0;">Follow these steps to set things up.</p>
    </header>
    <main style="max-width:960px;margin:0 auto;padding:0 1rem 3rem;">
      <ol>
        <li>Connect your account</li>
        <li>Create your first workspace</li>
        <li>Invite a teammate</li>
      </ol>
      <p><a href="./" style="display:inline-block;padding:.6rem 1rem;border:1px solid #aaa;border-radius:.5rem;text-decoration:none;">Open the App</a></p>
    </main>
    <script type="module" src="$ENTRY_SRC"></script>
  </body>
</html>
HTML

# 3) Vite multipage config (index + get-started) with relative assets for /docs hosting
cat > site/vite.config.js <<'JS'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        getStarted: resolve(__dirname, 'get-started.html'),
      }
    }
  }
})
JS

# 4) Build (use npm install, not ci)
pushd site >/dev/null
npm install
npm run build
popd >/dev/null

# 5) Deploy dist to docs/apps/current and docs/apps/publish/current (+404 fallbacks)
rm -rf docs/apps/current docs/apps/publish/current
mkdir -p docs/apps/current docs/apps/publish/current
rsync -a site/dist/ docs/apps/current/
rsync -a site/dist/ docs/apps/publish/current/
cp docs/apps/current/index.html docs/apps/current/404.html
cp docs/apps/publish/current/index.html docs/apps/publish/current/404.html

# 6) Commit, rebase, push (simple message)
git add -A site docs
git commit -m "deploy multipage: index + get-started; relative base; copy dist to docs" || true
git pull --rebase origin main || { git rebase --abort || true; echo "Rebase failed. Resolve conflicts, then rerun."; exit 1; }
git push origin HEAD:main
