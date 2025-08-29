// site/src/App.jsx
import React from "react";

export default function App() {
  return (
    <main className="min-h-screen text-slate-900 bg-white">
      <header className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <a href="./" className="text-xl font-semibold tracking-tight">OMAE</a>
        <nav className="flex gap-6 text-sm">
          <a href="#features" className="hover:opacity-70">Features</a>
          <a href="#pricing" className="hover:opacity-70">Pricing</a>
          <a href="#faq" className="hover:opacity-70">FAQ</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Do more, faster.</h1>
          <p className="mt-4 text-lg text-slate-600">Ship like a team twice your size. Realtime collaboration, blazing previews, and zero-config deploys.</p>
          <div className="mt-6 flex gap-3">
            <a href="#pricing" className="inline-block rounded-md bg-black text-white px-5 py-3 text-sm font-medium">Get Started</a>
            <a href="#features" className="inline-block rounded-md border border-slate-300 px-5 py-3 text-sm font-medium">See Features</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
            <span>Works with</span>
            <span>GitHub Pages</span>
            <span>Vite</span>
            <span>Playwright</span>
          </div>
        </div>

        <div className="w-full">
          <img
            alt="Product"
            className="w-full rounded-xl shadow-xl"
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop"
          />
        </div>
      </section>

      <section id="features" className="bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Realtime collaboration</h3>
            <p className="mt-2 text-slate-600">Edit together, comment in context, and never lose track.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Blazing previews</h3>
            <p className="mt-2 text-slate-600">Every commit gets a live URL you can share instantly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Zero-config deploys</h3>
            <p className="mt-2 text-slate-600">Connect your repo and ship to production automatically.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Simple, transparent pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-semibold">Starter</div>
            <div className="mt-2 text-3xl font-extrabold">$0</div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Unlimited previews</li>
              <li>Community support</li>
              <li>1 project</li>
            </ul>
            <a href="#faq" className="mt-6 inline-block rounded-md bg-black text-white px-4 py-2 text-sm">Get Started</a>
          </div>
          <div className="rounded-2xl border-2 border-black p-6">
            <div className="text-sm font-semibold">Pro</div>
            <div className="mt-2 text-3xl font-extrabold">$29/mo</div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Team collaboration</li>
              <li>Custom domains</li>
              <li>Unlimited projects</li>
            </ul>
            <a href="#faq" className="mt-6 inline-block rounded-md bg-black text-white px-4 py-2 text-sm">Start Pro</a>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-semibold">Enterprise</div>
            <div className="mt-2 text-3xl font-extrabold">Let’s talk</div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>SAML SSO</li>
              <li>VPC & on-prem</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#faq" className="mt-6 inline-block rounded-md bg-black text-white px-4 py-2 text-sm">Contact Sales</a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center">FAQs</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="font-semibold">Can I deploy anywhere?</div>
            <p className="text-slate-600">Yes — GitHub Pages by default, any CDN with manual upload.</p>
          </div>
          <div>
            <div className="font-semibold">Do you have a free tier?</div>
            <p className="text-slate-600">Starter is free forever for individuals.</p>
          </div>
          <div>
            <div className="font-semibold">Is it fast?</div>
            <p className="text-slate-600">Built with Vite and edge caching — instant previews.</p>
          </div>
          <div>
            <div className="font-semibold">Do you support teams?</div>
            <p className="text-slate-600">Pro and Enterprise include roles, SSO, and audit logs.</p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        <div>© {new Date().getFullYear()} OMAE</div>
      </footer>
    </main>
  );
}
