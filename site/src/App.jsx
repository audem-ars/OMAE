// site/src/App.jsx
import React from "react";

export default function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #0b0f14;
          --bg-soft: #0f141b;
          --card: #121821;
          --text: #e9eef5;
          --muted: #9fb0c6;
          --brand: #4f8cff;
          --brand-2: #7a5cff;
          --ok: #22c55e;
          --ring: rgba(79,140,255,.35);
          --shadow: 0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.03);
        }
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
          background: radial-gradient(1200px 600px at 80% -10%, rgba(124,58,237,.25), transparent 60%),
                      radial-gradient(1000px 500px at -10% 10%, rgba(79,140,255,.25), transparent 60%),
                      var(--bg);
          color: var(--text);
          scroll-behavior: smooth;
        }
        a { color: inherit; text-decoration: none; }
        .container { width: min(1100px, 90vw); margin: 0 auto; }
        .nav { position: sticky; top: 0; z-index: 40; backdrop-filter: saturate(140%) blur(8px);
               background: linear-gradient(180deg, rgba(15,20,27,.9), rgba(15,20,27,.65));
               border-bottom: 1px solid rgba(255,255,255,.06); }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; padding: 14px 0; }
        .brand { display:flex; align-items:center; gap:10px; font-weight:700; letter-spacing:.4px; }
        .badge { width:28px; height:28px; display:grid; place-items:center;
                 background: linear-gradient(135deg, var(--brand), var(--brand-2));
                 color:#fff; border-radius:8px; font-weight:900; box-shadow: var(--shadow); }
        .links { display:flex; gap:18px; align-items:center; }
        .links a { color: var(--muted); font-weight:600; font-size:14px; }
        .links a:hover { color: var(--text); }
        .btn { display:inline-flex; align-items:center; justify-content:center; padding: 10px 16px;
               border-radius: 10px; font-weight:700; gap:8px; border: 1px solid rgba(255,255,255,.08);
               background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
               box-shadow: var(--shadow); color: var(--text); }
        .btn:hover { border-color: rgba(255,255,255,.14); transform: translateY(-1px); }
        .btn-primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); border: none; color: white; }
        .btn-ghost { background: transparent; border-color: rgba(255,255,255,.12); }
        .hero { padding: 84px 0 30px; text-align:center; }
        .hero h1 { font-size: clamp(36px, 6.5vw, 64px); line-height: 1.02; margin: 8px 0 14px; letter-spacing: -0.02em; }
        .hero p { color: var(--muted); font-size: clamp(16px, 2.4vw, 20px); max-width: 800px; margin: 0 auto 26px; }
        .hero-cta { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top: 8px; }
        .logo-row { margin-top: 36px; color: var(--muted); font-size: 13px; display:flex;
                    justify-content:center; gap:18px; flex-wrap:wrap; opacity: .9; }
        /* === "Solid image" preview card === */
        .hero-art-wrap { display:flex; justify-content:center; margin-top: 36px; }
        .hero-art {
          width: min(980px, 92vw);
          height: clamp(220px, 36vw, 420px);
          border-radius: 18px;
          background:
            radial-gradient(800px 200px at 10% 0%, rgba(124,58,237,.25), transparent 60%),
            radial-gradient(800px 200px at 90% 0%, rgba(79,140,255,.25), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }
        .hero-art::after {
          content: "";
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 100%),
            linear-gradient(0deg, rgba(255,255,255,.06) 0 1px, transparent 1px 100%);
          background-size: 40px 40px;
          opacity: .35;
          pointer-events: none;
        }
        .section { padding: 64px 0; }
        .section h2 { font-size: clamp(26px, 4vw, 36px); margin: 0 0 10px; }
        .muted { color: var(--muted); }
        .cards { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; margin-top: 26px; }
        @media (max-width: 900px) { .cards { grid-template-columns: 1fr; } }
        .card { background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
                border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 20px; box-shadow: var(--shadow); }
        .kicker { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
        .feature { display:flex; gap:14px; align-items:flex-start; }
        .dot { width:10px; height:10px; border-radius:50%; background: linear-gradient(135deg, var(--brand), var(--brand-2));
               margin-top: 8px; box-shadow: 0 0 0 4px var(--ring); }
        .price-cards { margin-top: 28px; }
        .price-tag { font-size: 36px; font-weight: 800; letter-spacing: -.02em; }
        .price-col .kicker { margin-bottom: 8px; }
        .ul { list-style:none; padding:0; margin:14px 0 0; display:grid; gap:8px; color: var(--muted); }
        .ul li { display:flex; gap:10px; align-items:flex-start; }
        .check { color: var(--ok); font-weight:900; }
        .footer { border-top: 1px solid rgba(255,255,255,.08); color: var(--muted); padding: 22px 0 40px; margin-top: 40px; }
        .pill { display:inline-flex; align-items:center; gap:8px; padding: 6px 10px; border-radius: 999px;
                background: rgba(124,58,237,.12); color: #d7c7ff; border:1px solid rgba(255,255,255,.08); }
        .notice { margin-top: 14px; font-size: 13px; color: var(--muted); }
      `}</style>

      {/* NAV */}
      <div className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="badge">A</span>
            <span>Acme</span>
          </div>
          <nav className="links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn-primary" href="/OMAE/apps/studio/">Get Started</a>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <header className="container hero">
        <div>
          <span className="pill">Do more, faster.</span>
          <h1>Ship like a team twice your size.</h1>
          <p>Acme is the all-in-one platform to plan, build, and launch. Real-time collaboration, lightning-fast previews, and zero-config deploys.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/OMAE/apps/studio/">Get Started</a>
            <a className="btn btn-ghost" href="#features">See Features</a>
          </div>
          <div className="logo-row">
            <span>YouTube</span>·<span>Stripe</span>·<span>Figma</span>·<span>Linear</span>·<span>Vercel</span>·<span>OpenAI</span>
          </div>

          {/* Solid “image” preview */}
          <div className="hero-art-wrap">
            <div className="hero-art" />
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="container section">
        <div style={{ textAlign: "center" }}>
          <div className="kicker">Everything you need to move fast</div>
          <h2>Build together, preview instantly, deploy on autopilot.</h2>
          <p className="muted">Designed for product teams that value speed without sacrificing quality.</p>
        </div>

        <div className="cards" style={{ marginTop: 24 }}>
          <article className="card feature">
            <div className="dot" /><div><h3>Realtime collaboration</h3><p className="muted">Edit together, comment in context, and never lose track.</p></div>
          </article>
          <article className="card feature">
            <div className="dot" /><div><h3>Blazing previews</h3><p className="muted">Every commit gets a shareable live URL backed by edge caching.</p></div>
          </article>
          <article className="card feature">
            <div className="dot" /><div><h3>Zero-config deploys</h3><p className="muted">Connect your repo and ship to production automatically.</p></div>
          </article>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container section price-cards">
        <div style={{ textAlign: "center" }}>
          <div className="kicker">Simple, transparent pricing</div>
          <h2>Start free. Grow as you go.</h2>
        </div>

        <div className="cards" style={{ marginTop: 24 }}>
          <article className="card price-col">
            <div className="kicker">Starter</div>
            <div className="price-tag">$0</div>
            <ul className="ul">
              <li><span className="check">✓</span> Unlimited previews</li>
              <li><span className="check">✓</span> Community support</li>
              <li><span className="check">✓</span> 1 project</li>
            </ul>
            <div style={{ marginTop: 16 }}><a className="btn" href="/OMAE/apps/studio/">Get Started</a></div>
          </article>

          <article className="card price-col" style={{ borderColor: "rgba(79,140,255,.45)" }}>
            <div className="kicker">Pro</div>
            <div className="price-tag">$29/mo</div>
            <ul className="ul">
              <li><span className="check">✓</span> Team collaboration</li>
              <li><span className="check">✓</span> Custom domains</li>
              <li><span className="check">✓</span> Unlimited projects</li>
            </ul>
            <div style={{ marginTop: 16 }}><a className="btn btn-primary" href="/OMAE/apps/studio/">Start Pro</a></div>
          </article>

          <article className="card price-col">
            <div className="kicker">Enterprise</div>
            <div className="price-tag">Let’s talk</div>
            <ul className="ul">
              <li><span className="check">✓</span> SAML SSO</li>
              <li><span className="check">✓</span> VPC & on-prem</li>
              <li><span className="check">✓</span> Dedicated support</li>
            </ul>
            <div style={{ marginTop: 16 }}><a className="btn" href="/OMAE/apps/studio/">Contact Sales</a></div>
          </article>
        </div>

        <p className="notice">Deploys default to GitHub Pages; you can export to any CDN.</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="container section">
        <div style={{ textAlign: "center" }}>
          <div className="kicker">FAQs</div>
          <h2>Answers to common questions</h2>
        </div>

        <div className="cards" style={{ marginTop: 24 }}>
          <article className="card"><h3>Can I deploy anywhere?</h3><p className="muted">Yes — GitHub Pages by default, or any CDN via manual upload.</p></article>
          <article className="card"><h3>Do you have a free tier?</h3><p className="muted">Starter is free forever for individuals.</p></article>
          <article className="card"><h3>Is it fast?</h3><p className="muted">Built with Vite and edge caching — previews are instant.</p></article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div className="brand"><span className="badge">A</span><span>Acme</span></div>
          <div className="links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="btn" href="/OMAE/apps/studio/">Get Started</a>
          </div>
        </div>
      </footer>
    </>
  );
}
