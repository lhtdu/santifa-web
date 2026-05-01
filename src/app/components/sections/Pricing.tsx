"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "eBay & Etsy Automated",
    badge: "Start from",
    price: "$250",
    period: "/month",
    tagline: "Full operations management for both platforms — listings, orders, customer service, and growth strategy.",
    features: ["Product Research & Listing", "Customer Service", "Fulfillment", "Handle Returns & Refunds", "Risk Account Monitoring", "Growth Strategy Consultant", "Multi-Platform Sync"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Order Processing",
    badge: "Starting from",
    price: "$300",
    period: "/month",
    tagline: "Dedicated order processing and fulfillment handling so you can focus on scaling your business.",
    features: ["Order Import & Validation", "Tracking Updates", "Return & Exchange Handling", "Daily Order Reports", "Priority Support"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Ad Creative Package",
    badge: "Per video",
    price: "$20",
    period: "/video",
    tagline: "High-converting ad videos designed to help you test, launch, and scale your products.",
    features: ["Hook-focused editing (optimized for ads)", "Subtitles + clean cuts", "Basic motion & pacing optimization", "AI B-roll integration (if needed)", "1 Revision per video", "Ready-to-run format (TikTok / Meta)"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Custom Package",
    badge: "Starting from",
    price: "$400",
    period: "/project",
    tagline: "Businesses with unique needs that require a customized, holistic approach to their digital strategy.",
    features: ["Comprehensive Business Analysis", "Custom Strategy Development", "Dedicated Account Manager", "Monthly Check-ins & Adjustments", "Advanced Analytics and Reporting", "Campaign Management for Paid Ads", "Personalized Training for Your Team", "Direct Support via Email or Phone"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
    highlight: true,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".pricing-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".pricing-header", start: "top 85%" },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          delay: i * 0.08,
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative background */}
      <div
        data-speed="0.2"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4d23]/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="pricing-header text-center mb-12">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            Three services. One team.{" "}
            <span className="gradient-text">Pick what you need</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`rounded-2xl p-5 flex flex-col h-full border border-dashed border-gray-300 transition-all ${
                plan.highlight
                  ? "bg-[#ef4d23] border-[#ef4d23] text-white shadow-xl shadow-orange-100 relative overflow-hidden"
                  : "bg-white border-gray-200 hover:border-[#ef4d23]/40 hover:shadow-lg"
              }`}
            >
              {plan.highlight && <div className="absolute top-0 left-0 right-0 h-1 bg-[#ef4d23]" />}

              <div className="mb-5">
                <p className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#0b0f1a]"}`}>{plan.price}</span>
                  <span className={`text-sm mb-0.5 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <p className={`text-[11px] ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.badge}</p>
                <p className={`text-xs leading-relaxed mt-1 ${plan.highlight ? "text-white/80" : "text-gray-500"}`}>{plan.tagline}</p>
              </div>

              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={13} className={`${plan.highlight ? "text-white" : "text-[#ef4d23]"} mt-0.5 flex-shrink-0`} />
                    <span className={`text-xs leading-relaxed ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all mt-auto ${
                  plan.highlight
                    ? "bg-white text-[#ef4d23] hover:bg-[#fee8e4]"
                    : "bg-gray-50 hover:bg-[#ef4d23] text-gray-700 hover:text-white border border-gray-200 hover:border-transparent"
                }`}
              >
                {plan.cta}
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
