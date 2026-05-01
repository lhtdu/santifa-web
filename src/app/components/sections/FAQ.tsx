"use client";

import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const faqs = [
  { q: "How is this different from hiring a VA?", a: "A VA is one person doing tasks. We are a managed team with SOPs, quality control, and backup coverage. You don't manage individuals — you manage outcomes." },
  { q: "Can I cancel anytime?", a: "Yes. Month-to-month after 30 days. Cancel with 30 days notice. No long-term lock-in." },
  { q: "Where is your team based?", a: "Vietnam, working US business hours. Senior talent at lower cost with rigorous SOPs and management." },
  { q: "Can I customize the packages you offer?", a: "Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success." },
  { q: "How does pricing work?", a: "Flat fee and gross profit share. We're incentivized to grow your revenue AND protect your margins. Contact us for a custom quote." },
  { q: "Can you work with my existing suppliers?", a: "Yes. You maintain all supplier relationships. We handle the operational layer: ordering, coordination, and tracking." },
  { q: "How do I get started?", a: "It's easy! Just click that shiny 'Contact Us' button, shoot us a message, or give us a call. We'll grab coffee (virtually or in-person) and start brainstorming magic together." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(""); }, 3000);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ef4d23] text-xs font-bold uppercase tracking-widest mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b0f1a] mb-3">
            FAQ It Up! Your curiosity meets our{" "}
            <span className="gradient-text">expertise</span>!
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 mb-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 border-dashed border-gray-200 transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-[#ef4d23]/40 bg-[#f5f2ee]"
                  : "border-gray-200 bg-white hover:border-[#ef4d23]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className={`text-sm font-medium pr-4 transition-colors ${openIndex === i ? "text-[#ef4d23]" : "text-neutral-700"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 transition-all duration-300 ${openIndex === i ? "text-[#ef4d23] rotate-180" : "text-neutral-400"}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 animate-slide-down">
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Form */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b0f1a] mb-3">
            Need a custom quote?
          </h3>
          <p className="text-neutral-500 text-sm mb-6">
            Don't let your ideas sit idle—slide into our inbox and let's make magic!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-[#f5f2ee] border border-neutral-200 text-neutral-700 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#ef4d23]/50 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#ef4d23] hover:bg-[#d94420] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2 group"
            >
              {submitted ? "Sent!" : "Submit"}
              <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
