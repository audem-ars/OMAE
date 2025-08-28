export default function App() {
  const studio = "/OMAE/apps/studio/";

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Nav */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200 z-30">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold text-xl tracking-tight">Acme</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <a href={studio} className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50">
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Do more, faster.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Ship like a team twice your size. Real-time collaboration, lightning-fast previews, zero-config deploys.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={studio} className="rounded-xl bg-black text-white px-5 py-3 font-medium">
                Get Started
              </a>
              <a href="#features" className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-50">
                See Features
              </a>
            </div>
          </div>

          {/* Hero image (external, no asset pipeline needed) */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
              alt="Dashboard preview"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        {/* Logos */}
        <section className="py-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 grayscale opacity-80">
            {["YouTube","Stripe","Figma","Linear","Vercel","OpenAI"].map((n) => (
              <div key={n} className="text-center text-sm">{n}</div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold">Everything you need to move fast</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div><h3 className="font-semibold">Realtime collaboration</h3><p className="text-slate-600 mt-2">Edit together, comment in context, and never lose track.</p></div>
            <div><h3 className="font-semibold">Blazing previews</h3><p className="text-slate-600 mt-2">Each commit gets its own live URL. Share instantly.</p></div>
            <div><h3 className="font-semibold">Zero-config deploys</h3><p className="text-slate-600 mt-2">Connect your repo and ship to production automatically.</p></div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold">Simple, transparent pricing</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {name:"Starter", price:"$0", features:["Unlimited previews","Community support","1 project"]},
              {name:"Pro", price:"$29/mo", features:["Team collaboration","Custom domains","Unlimited projects"]},
              {name:"Enterprise", price:"Let’s talk", features:["SAML SSO","VPC & on-prem","Dedicated support"]},
            ].map(t => (
              <div key={t.name} className="rounded-2xl border p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">{t.name}</h3>
                  <div className="text-lg">{t.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {t.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <a href={studio} className="mt-6 inline-block w-full text-center rounded-xl bg-black text-white px-4 py-2 font-medium">
                  {t.name === "Pro" ? "Start Pro" : t.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Can I deploy anywhere?</h3>
              <p className="text-slate-600 mt-2">Yes—GitHub Pages by default, any CDN with manual upload.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you have a free tier?</h3>
              <p className="text-slate-600 mt-2">Starter is free forever for individuals.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is it fast?</h3>
              <p className="text-slate-600 mt-2">Built with Vite and edge caching—instant previews.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you support teams?</h3>
              <p className="text-slate-600 mt-2">Pro & Enterprise include roles, SSO, audit logs.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
          © {new Date().getFullYear()} Acme. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
