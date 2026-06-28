import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Santifa.io",
  description: "How Santifa collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 prose prose-neutral">
        <header className="mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b0f1a] mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: January 2026</p>
        </header>

        <section className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
          <p>
            This Privacy Policy describes how Santifa.io ("we", "our", or "us") collects, uses, and protects
            information that you provide when using our website and services.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">1. Information We Collect</h2>
          <p>
            We collect information you voluntarily provide when contacting us, requesting a quote, or
            signing up for our services. This may include your name, email address, phone number, business
            details, and information about your ecommerce operations.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Communicate with you about your account and projects</li>
            <li>Send you relevant updates, marketing, and promotional materials (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. Access to
            client accounts and sensitive data is restricted to authorized team members under strict
            confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">4. Third-Party Services</h2>
          <p>
            We may use third-party services (analytics, payment processors, communication tools) that
            have their own privacy policies. We only share data necessary for these services to function.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us at
            <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline"> winston@santifa.io</a>
            to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold text-[#0b0f1a] pt-4">6. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, contact us at
            <a href="mailto:winston@santifa.io" className="text-[#ef4d23] hover:underline"> winston@santifa.io</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
