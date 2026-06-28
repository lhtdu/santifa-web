import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Santifa.io",
  description: "Terms and conditions for using Santifa's services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 prose prose-neutral">
        <header className="mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: January 2026</p>
        </header>

        <section className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            By accessing or using Santifa.io's services, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">1. Services</h2>
          <p>
            Santifa provides ecommerce operations management, POD design, and video ad creative services
            for online sellers. Specific deliverables and timelines are outlined in your custom proposal
            or service agreement.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">2. Account Access & Confidentiality</h2>
          <p>
            Where required for service delivery, clients grant Santifa limited access to specified
            accounts (eBay, Etsy, Meta, etc.). We will never access payout settings, change passwords,
            or perform actions outside the agreed scope. All access credentials are stored securely and
            access is logged.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">3. Payment Terms</h2>
          <p>
            Payment terms, including fees, billing cycles, and profit-share arrangements, are specified
            in your service agreement. Late payments may result in suspension of services.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">4. Cancellation</h2>
          <p>
            Either party may terminate the service agreement with 30 days written notice. No refunds for
            partial months, but no long-term lock-in.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">5. Limitation of Liability</h2>
          <p>
            Santifa is not liable for losses arising from marketplace policy changes, account suspensions
            outside our control, supplier issues, or factors beyond our reasonable control.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">6. Contact</h2>
          <p>
            Questions about these terms? Contact
            <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline"> winston@santifa.io</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
