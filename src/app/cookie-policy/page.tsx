import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Santifa.io",
  description: "How Santifa uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 prose prose-neutral">
        <header className="mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">Cookie Policy</h1>
          <p className="text-sm text-gray-400">Last updated: January 2026</p>
        </header>

        <section className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            This Cookie Policy explains how Santifa.io uses cookies and similar technologies on our website.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help us
            provide you with a better experience and understand how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the site.</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant ads and measure ad performance.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Disabling certain cookies may affect
            website functionality.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">Contact</h2>
          <p>
            For questions about our use of cookies, contact
            <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline"> winston@santifa.io</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
