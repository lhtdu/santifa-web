import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Santifa.io",
  description: "Join the Santifa team. We're hiring ecommerce operators, designers, and ad creatives.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">
            Join the team <span className="gradient-text">behind the scenes</span>.
          </h1>
          <p className="text-gray-500 max-w-xl">
            We hire sharp operators, designers, and ad creatives who want to do the best work of their
            careers — for clients who care about craft.
          </p>
        </header>

        <section className="space-y-6">
          <div className="rounded-2xl border border-dashed border-gray-200 p-6">
            <h2 className="text-xl font-bold text-[#0b0f1a] mb-2">Ecommerce Operations Specialist</h2>
            <p className="text-sm text-gray-500 mb-4">Full-time · Ho Chi Minh City · Hybrid</p>
            <p className="text-sm text-gray-600 mb-4">
              Manage eBay and Etsy stores end-to-end: listings, customer service, fulfillment coordination,
              and growth experimentation. 2+ years experience required.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-gray-200 p-6">
            <h2 className="text-xl font-bold text-[#0b0f1a] mb-2">POD Designer</h2>
            <p className="text-sm text-gray-500 mb-4">Full-time · Ho Chi Minh City · Hybrid</p>
            <p className="text-sm text-gray-600 mb-4">
              Create print-on-demand designs that convert. Strong portfolio of POD or merch designs
              required. Familiarity with Etsy trends a plus.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-gray-200 p-6">
            <h2 className="text-xl font-bold text-[#0b0f1a] mb-2">Video Ad Editor</h2>
            <p className="text-sm text-gray-500 mb-4">Full-time · Remote · Vietnam</p>
            <p className="text-sm text-gray-600 mb-4">
              Edit short-form video ads for Meta (Facebook & Instagram). Comfort with AI-assisted tools,
              fast turnaround, and a sharp eye for hooks.
            </p>
          </div>

          <div className="rounded-2xl bg-[#fef8f6] border border-[#ef4d23]/20 rounded-2xl p-6 mt-8">
            <p className="text-sm text-gray-700">
              Don't see your role? Send your portfolio and a short intro to
              <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline ml-1">winston@santifa.io</a>.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
