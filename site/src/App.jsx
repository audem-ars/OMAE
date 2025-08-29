import React from "react";

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <header className="max-w-6xl mx-auto px-6 py-12">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">OMAE</div>
          <div className="space-x-6 text-sm">
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Do more, faster.
            </h1>
            <p className="mt-4 text-slate-600">
              Ship like a team twice your size. Plan, build, and launch with instant previews and zero-config deploys.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-black text-white font-medium">
                Get Started
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg border border-slate-300 font-medium">
                See Features
              </a>
            </div>
          </div>

          <div className="w-full">
            <img
              alt="Product preview"
              className="w-full rounded-2xl shadow-xl"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section id="features" className="mt-24">
          <h2 className="text-3xl font-bold">Everything you need to move fast</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Feature title="Realtime collaboration" desc="Edit together, comment in context, never lose track." />
            <Feature title="Blazing previews" desc="Each commit gets its own live URL. Share instantly." />
            <Feature title="Zero-config deploys" desc="Connect your repo and ship automatically." />
          </div>
        </section>

        <section id="logos" className="mt-16 opacity-80 text-sm">
          <p>Used by teams at YouTube, Stripe, Figma, Linear, Vercel, OpenAI</p>
        </section>

        <section id="pricing" className="mt-24">
          <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Plan name="Starter" price="$0" cta="Get Started" />
            <Plan name="Pro" price="$29/mo" cta="Start Pro" />
            <Plan name="Enterprise" price="Let’s talk" cta="Contact Sales" />
          </div>
        </section>

        <section id="faq" className="mt-24">
          <h2 className="text-3xl font-bold">FAQs</h2>
          <div className="mt-6 space-y-4 text-slate-700">
            <p><strong>Can I deploy anywhere?</strong> Yes — GitHub Pages by default or any CDN via manual upload.</p>
            <p><strong>Do you have a free tier?</strong> Starter is free for individuals.</p>
            <p><strong>Is it fast?</strong> Built with Vite and edge caching for instant previews.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} OMAE
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function Plan({ name, price, cta }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 flex flex-col">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-3xl font-bold mt-2">{price}</div>
      <a href="#pricing" className="mt-6 px-4 py-2 rounded-lg bg-black text-white text-center">
        {cta}
      </a>
    </div>
  );
}
