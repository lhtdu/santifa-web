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
    <section id="faq" className="py-24 px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Frequently Asked Questions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            FAQ It Up! Your curiosity meets our{" "}
            <span className="gradient-text">expertise</span>!
          </h2>
          <p className="text-[#94a3b8]">
            We've gathered all the important info right here. Explore our FAQs and find the answers you need.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-20">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-[#F15533]/40 bg-white"
                  : "border-[#f1f5f9] bg-white hover:border-[#F15533]/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`text-sm font-medium pr-4 transition-colors ${openIndex === i ? "text-[#F15533]" : "text-[#334155]"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-all duration-300 ${openIndex === i ? "text-[#F15533] rotate-180" : "text-[#94a3b8]"}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 animate-slide-down">
                  <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Form */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
            Need a custom quote?
          </h3>
          <p className="text-[#64748B] mb-8">
            Don't let your ideas sit idle—slide into our inbox and let's make magic!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white border border-[#e2e8f0] text-[#334155] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#F15533]/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#F15533] hover:bg-[#D94420] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 flex items-center justify-center gap-2 group"
            >
              {submitted ? "Sent!" : "Submit"}
              <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
