"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "How is this different from hiring a VA?", a: "A VA is one person doing tasks. We are a managed team with SOPs, quality control, and backup coverage. You don't manage individuals — you manage outcomes." },
  { q: "Can I cancel anytime?", a: "Yes. Month-to-month after 30 days. Cancel with 30 days notice. No long-term lock-in." },
  { q: "Where is your team based?", a: "Vietnam, working US business hours. Senior talent at lower cost with rigorous SOPs and management." },
  { q: "Can I customize the packages you offer?", a: "Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success." },
  { q: "How does pricing work?", a: "Flat fee and gross profit share. We're incentivized to grow your revenue AND protect your margins. Contact us for a custom quote." },
  { q: "Can you work with my existing suppliers?", a: "Yes. You maintain all supplier relationships. We handle the operational layer: ordering, coordination, and tracking." },
  { q: "How do I get started?", a: "It's easy! Just click that shiny 'Contact Us' button, shoot us a message, or give us a call. We'll grab coffee (virtually or in-person) and start brainstorming magic together." },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(""); }, 3000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.from(".faq-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".faq-header", start: "top 85%" },
      });

      // FAQ items stagger
      faqsRef.current.forEach((faq, i) => {
        if (!faq) return;
        gsap.from(faq, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: i * 0.06,
          scrollTrigger: { trigger: faq, start: "top 90%" },
        });
      });

      // CTA
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ef4d23]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="faq-header text-center mb-12">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Frequently Asked Questions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            FAQ It Up! Your curiosity meets our{" "}
            <span className="gradient-text">expertise</span>—let&apos;s clear things up!
          </h2>
        </div>

        <div className="space-y-2 mb-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => { if (el) faqsRef.current[i] = el; }}
              className={`rounded-xl border-2 border-dashed border-gray-200 overflow-hidden transition-colors ${
                openIndex === i
                  ? "border-[#ef4d23]/30 bg-[#fef8f6]"
                  : "border-gray-200 bg-white hover:border-[#ef4d23]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className={`text-sm font-medium pr-4 transition-colors ${openIndex === i ? "text-[#ef4d23]" : "text-gray-700"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 transition-all duration-300 ${openIndex === i ? "text-[#ef4d23] rotate-180" : "text-gray-400"}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 border-t border-[#ef4d23]/10">
                  <p className="text-sm text-gray-500 leading-relaxed pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b0f1a] mb-2">Need a custom quote?</h3>
          <p className="text-gray-500 text-sm mb-6">Don&apos;t let your ideas sit idle—slide into our inbox and let&apos;s make magic!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-[#ef4d23]/50 transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#ef4d23] hover:bg-[#d94420] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-100 hover:shadow-lg"
            >
              {submitted ? "Sent!" : "Submit"}
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
