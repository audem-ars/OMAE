import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", lineHeight:1.4}}>
      <header style={{padding:"16px 24px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontWeight:700}}>OMAE</div>
        <nav style={{display:"flex", gap:16}}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section style={{padding:"64px 24px", textAlign:"center"}}>
          <h1 style={{fontSize:40, margin:"0 0 12px"}}>Do more, faster.</h1>
          <p style={{opacity:.8, margin:"0 0 24px"}}>Ship like a team twice your size.</p>
          <div style={{display:"flex", gap:12, justifyContent:"center"}}>
            <a href="#features" style={{padding:"12px 18px", borderRadius:8, background:"#111", color:"#fff", textDecoration:"none"}}>See Features</a>
            <a href="#pricing" style={{padding:"12px 18px", borderRadius:8, border:"1px solid #ddd", textDecoration:"none"}}>Get Started</a>
          </div>

          <div style={{marginTop:40, display:"flex", justifyContent:"center"}}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
              alt="Product preview"
              style={{maxWidth:900, width:"100%", borderRadius:16, boxShadow:"0 10px 30px rgba(0,0,0,.12)"}}
            />
          </div>
        </section>

        <section id="features" style={{padding:"56px 24px", maxWidth:960, margin:"0 auto"}}>
          <h2 style={{fontSize:28, marginBottom:12}}>Everything you need to move fast</h2>
          <ul style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:16, padding:0, listStyle:"none"}}>
            <li style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <strong>Realtime collaboration</strong>
              <p style={{marginTop:8, opacity:.8}}>Edit together, comment in context, never lose track.</p>
            </li>
            <li style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <strong>Blazing previews</strong>
              <p style={{marginTop:8, opacity:.8}}>Each commit gets a live URL. Share instantly.</p>
            </li>
            <li style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <strong>Zero-config deploys</strong>
              <p style={{marginTop:8, opacity:.8}}>Connect your repo and ship automatically.</p>
            </li>
          </ul>
        </section>

        <section id="pricing" style={{padding:"56px 24px", maxWidth:960, margin:"0 auto"}}>
          <h2 style={{fontSize:28, marginBottom:12}}>Simple, transparent pricing</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:16}}>
            <div style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <h3>Starter</h3>
              <p style={{fontSize:24, margin:"8px 0"}}>$0</p>
              <a href="#contact" style={{display:"inline-block", marginTop:8, padding:"10px 14px", borderRadius:8, border:"1px solid #ddd", textDecoration:"none"}}>Get Started</a>
            </div>
            <div style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <h3>Pro</h3>
              <p style={{fontSize:24, margin:"8px 0"}}>$29/mo</p>
              <a href="#contact" style={{display:"inline-block", marginTop:8, padding:"10px 14px", borderRadius:8, border:"1px solid #ddd", textDecoration:"none"}}>Start Pro</a>
            </div>
            <div style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
              <h3>Enterprise</h3>
              <p style={{fontSize:24, margin:"8px 0"}}>Let’s talk</p>
              <a href="#contact" style={{display:"inline-block", marginTop:8, padding:"10px 14px", borderRadius:8, border:"1px solid #ddd", textDecoration:"none"}}>Contact Sales</a>
            </div>
          </div>
        </section>

        <section id="faq" style={{padding:"56px 24px", maxWidth:960, margin:"0 auto"}}>
          <h2 style={{fontSize:28, marginBottom:12}}>FAQs</h2>
          <details style={{padding:16, border:"1px solid #eee", borderRadius:12, marginBottom:8}}>
            <summary>Can I deploy anywhere?</summary>
            <p style={{marginTop:8, opacity:.8}}>Yes — GitHub Pages by default, any CDN with manual upload.</p>
          </details>
          <details style={{padding:16, border:"1px solid #eee", borderRadius:12, marginBottom:8}}>
            <summary>Do you have a free tier?</summary>
            <p style={{marginTop:8, opacity:.8}}>Starter is free forever for individuals.</p>
          </details>
          <details style={{padding:16, border:"1px solid #eee", borderRadius:12}}>
            <summary>Is it fast?</summary>
            <p style={{marginTop:8, opacity:.8}}>Built with Vite and edge caching — instant previews.</p>
          </details>
        </section>

        <section id="contact" style={{padding:"56px 24px", textAlign:"center"}}>
          <h2 style={{fontSize:28, marginBottom:12}}>Ready?</h2>
          <a href="#pricing" style={{padding:"12px 18px", borderRadius:8, background:"#111", color:"#fff", textDecoration:"none"}}>Choose a plan</a>
        </section>
      </main>

      <footer style={{padding:"32px 24px", textAlign:"center", opacity:.7}}>
        © {new Date().getFullYear()} OMAE
      </footer>
    </div>
  );
}
