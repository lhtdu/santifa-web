import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Santifa.io",
  description: "Learn about Santifa, our mission, and our team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">
            Built by operators, <span className="gradient-text">for operators</span>.
          </h1>
        </header>

        <section className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            Santifa is a managed ecommerce operations team based in Ho Chi Minh City, Vietnam. For over
            7 years, we've helped sellers scale on eBay, Etsy, and beyond — handling listings, fulfillment,
            customer service, design, and ads so our clients can focus on growth.
          </p>

          <p>
            We started this agency because we saw too many talented sellers burning out trying to do
            everything themselves. We built the team we wished we had: SOPs, backup coverage, daily
            reporting, and a profit-share model that aligns our incentives with yours.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">Our Mission</h2>
          <p>
            To give ecommerce operators the operational backbone of a large brand, without the overhead
            of building an in-house team.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">Where We Work</h2>
          <p>
            02 Ton Duc Thang, Saigon Ward, Ho Chi Minh City, Vietnam. We operate on US business hours
            so your store is always covered.
          </p>
        </section>
      </article>
    </main>
  );
}
