# OMAe — Ultra Plus (FULL-FAT) — One Repo
Free-first, one-click builder:
- Python Executor + DAG Playbooks
- Studio (React/Vite) to dispatch GitHub Actions
- 7 templates (landing, map, chat, gallery, CSV dashboard, docs, SaaS dashboard)
- GitHub Pages + Dispatch workflows
- QA config (Playwright + Lighthouse)
- Offline finance/research stubs

## Deploy (free, GitHub Pages)
1) Create a repo, upload these files, default branch = main.
2) Settings → Pages → Source: GitHub Actions (accept workflow runs).
3) Visit: https://<owner>.github.io/<repo>/apps/studio/ (after first push).
4) In Studio, enter owner/repo and a token (repo + workflow scope). Pick a pipeline and Run.
Artifacts:
- Candidate site: /apps/candidate/
- Current site (when you promote later): /apps/current/
- Reports & zips: /releases/

## Pipelines
site_template, site_dashboard_csv, site_prompt, site_inspire_rebuild,
docs_generate, email_console, research_report, market_monitor, options_analyzer, portfolio_caps_etf
