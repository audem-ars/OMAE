// site/src/App.jsx
export default function App() {
  return (
    <div>
      {/* Top nav */}
      <header style={{padding: '20px 24px', borderBottom: '1px solid #eee', position: 'sticky', top: 0, background: '#fff', zIndex: 10}}>
        <nav style={{display:'flex', alignItems:'center', justifyContent:'space-between', maxWidth: 1100, margin: '0 auto'}}>
          <a href="#top" style={{textDecoration:'none', fontWeight:700, fontSize:18}}>OMAE</a>
          <div style={{display:'flex', gap:16}}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="top" style={{maxWidth: 1100, margin:'0 auto', padding:'48px 24px'}}>
        <section style={{display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:32, alignItems:'center'}}>
          <div>
            <h1 style={{fontSize:48, lineHeight:1.1, margin:'0 0 12px'}}>Do more, faster.</h1>
            <p style={{fontSize:20, color:'#444', margin:'0 0 24px'}}>
              Ship like a team twice your size. Realtime collaboration, blazing previews, and zero-config deploys.
            </p>
            <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <a href="#pricing" style={btnPrimary}>Get Started</a>
              <a href="#features" style={btnGhost}>See Features</a>
            </div>
            <div style={{marginTop:18, opacity:.7, fontSize:14}}>
              <strong>Trusted by</strong> — YouTube • Stripe • Figma • Linear • Vercel • OpenAI
            </div>
          </div>

          {/* Hero image (restored) */}
          <div style={{borderRadius:16, overflow:'hidden', boxShadow:'0 10px 30px rgba(0,0,0,0.08)'}}>
            <img
              src="https://images.unsplash.com/photo-1551281044-8e8d0d8f1d49?q=80&w=1400&auto=format&fit=crop"
              alt="Product screenshot"
              style={{display:'block', width:'100%', height:'auto'}}
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{paddingTop:64}}>
          <h2 style={{fontSize:32, margin:'0 0 16px'}}>Everything you need to move fast</h2>
          <p style={{color:'#555', margin:'0 0 24px'}}>Simple, powerful tools that scale with your team.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:16}}>
            <FeatureCard title="Realtime collaboration" text="Edit together, comment in context, never lose track." />
            <FeatureCard title="Blazing previews" text="Every commit gets a live URL you can share instantly." />
            <FeatureCard title="Zero-config deploys" text="Connect your repo and ship to production automatically." />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" style={{paddingTop:64}}>
          <h2 style={{fontSize:32, margin:'0 0 8px'}}>Simple, transparent pricing</h2>
          <p style={{color:'#555', margin:'0 0 24px'}}>Start free. Upgrade when you need to.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:16}}>
            <PriceCard
              plan="Starter"
              price="$0"
              bullets={["Unlimited previews", "Community support", "1 project"]}
              ctaText="Get Started"
              ctaHref="#signup"
            />
            <PriceCard
              plan="Pro"
              price="$29/mo"
              bullets={["Team collaboration", "Custom domains", "Unlimited projects"]}
              featured
              ctaText="Start Pro"
              ctaHref="#signup"
            />
            <PriceCard
              plan="Enterprise"
              price="Let’s talk"
              bullets={["SAML SSO", "VPC & on-prem", "Dedicated support"]}
              ctaText="Contact Sales"
              ctaHref="#contact"
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{paddingTop:64}}>
          <h2 style={{fontSize:32, margin:'0 0 16px'}}>FAQs</h2>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:12}}>
            <li><Q q="Can I deploy anywhere?" a="Yes—GitHub Pages by default; any CDN with manual upload." /></li>
            <li><Q q="Do you have a free tier?" a="Starter is free forever for individuals." /></li>
            <li><Q q="Is it fast?" a="Built with Vite and edge caching—instant previews." /></li>
            <li><Q q="Do you support teams?" a="Pro and Enterprise include roles, SSO, and audit logs." /></li>
          </ul>
        </section>

        {/* Hidden anchors */}
        <div id="signup" style={{paddingTop:64}}>
          <h3>Sign up</h3>
          <p>Plug in your sign-up flow here (form, link, or modal).</p>
        </div>
        <div id="contact" style={{paddingTop:32}}>
          <h3>Contact Sales</h3>
          <p>Email <a href="mailto:sales@example.com">sales@example.com</a> or add your form here.</p>
        </div>
      </main>

      <footer style={{padding:'32px 24px', borderTop:'1px solid #eee', marginTop:48}}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <span>© {new Date().getFullYear()} OMAE</span>
          <div style={{display:'flex', gap:16}}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const btnPrimary = {
  display:'inline-block',
  background:'#111',
  color:'#fff',
  padding:'10px 16px',
  borderRadius:8,
  textDecoration:'none',
  fontWeight:600
};
const btnGhost = {
  display:'inline-block',
  background:'transparent',
  color:'#111',
  padding:'10px 16px',
  border:'1px solid #ddd',
  borderRadius:8,
  textDecoration:'none',
  fontWeight:600
};

function Card({children, style}) {
  return (
    <div style={{border:'1px solid #eee', borderRadius:12, padding:16, ...style}}>
      {children}
    </div>
  );
}

function FeatureCard({title, text}) {
  return (
    <Card>
      <h3 style={{margin:'0 0 8px'}}>{title}</h3>
      <p style={{margin:0, color:'#555'}}>{text}</p>
    </Card>
  );
}

function PriceCard({plan, price, bullets, featured, ctaText, ctaHref}) {
  return (
    <Card style={{borderColor: featured ? '#111' : '#eee'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <h3 style={{margin:0}}>{plan}</h3>
        <strong>{price}</strong>
      </div>
      <ul style={{margin:'12px 0', paddingLeft:18}}>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href={ctaHref} style={{...btnPrimary, width:'100%', textAlign:'center'}}>{ctaText}</a>
    </Card>
  );
}

function Q({q, a}) {
  return (
    <details style={{border:'1px solid #eee', borderRadius:8, padding:12}}>
      <summary style={{cursor:'pointer', fontWeight:600}}>{q}</summary>
      <div style={{marginTop:8, color:'#555'}}>{a}</div>
    </details>
  );
}
