"use client";

import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "eBay Automated",
    price: "$200",
    period: "/month",
    badge: "Start from",
    tagline: "From 1-3 accounts, under $3000 revenue",
    features: ["Product Research & Listing", "Customer Service", "Fulfillment", "Handle returns & refunds", "Risk account monitoring", "Growth Strategy Consultant"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Etsy Automated",
    price: "$300",
    period: "/month",
    badge: "Start from",
    tagline: "Businesses aiming to improve visibility and climb search engine rankings steadily.",
    features: ["Regular Updates & Maintenance", "Security Monitoring and Bug Fixes", "Performance Optimization", "Plugin and Theme Updates", "Monthly Backup & Recovery", "Comprehensive SEO Strategy", "Keyword Research & Implementation", "Monthly Performance Report", "Local SEO Optimization", "Up to 3 Backlink Opportunities/Month", "Content Optimization", "Technical SEO Audit", "Schema Markup Integration"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Ad Creative Package",
    price: "$20",
    period: "/minute",
    badge: "Per minute",
    tagline: "High-converting ad videos designed to help you test, launch, and scale your products.",
    features: ["Hook-focused editing (optimized for ads)", "Subtitles + clean cuts", "Basic motion & pacing optimization", "AI B-roll integration (if needed)", "1 Revision per video", "Ready-to-run format (TikTok / Meta)"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
  },
  {
    name: "Custom Package",
    price: "$400",
    period: "/project",
    badge: "Starting from",
    tagline: "Businesses with unique needs that require a customized, holistic approach.",
    features: ["Comprehensive Business Analysis", "Custom Strategy Development", "Dedicated Account Manager", "Monthly Check-ins & Adjustments", "Advanced Analytics and Reporting", "Campaign Management (Google, FB, IG)", "Personalized Training for Your Team", "Direct Support via Email or Phone"],
    cta: "Get started",
    ctaLink: "https://forms.gle/TPtYyRLiU7yE3nzAA",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Three services. One team.{" "}
            <span className="gradient-text">Pick what you need</span>.
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col transition-all duration-300 border h-full ${
                plan.highlight
                  ? "bg-[#F15533] border-[#F15533] text-white relative overflow-hidden shadow-xl shadow-orange-100"
                  : "bg-white border-[#f1f5f9] hover:border-[#F15533]/30 hover:shadow-lg hover:shadow-orange-50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F15533]" />
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? "text-white/70" : "text-[#94a3b8]"}`}>{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#0f172a]"}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-white/70" : "text-[#94a3b8]"}`}>{plan.period}</span>
                </div>
                <p className={`text-xs leading-relaxed ${plan.highlight ? "text-white/80" : "text-[#64748B]"}`}>{plan.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={14} className={`${plan.highlight ? "text-white" : "text-[#F15533]"} mt-0.5 flex-shrink-0`} />
                    <span className={`text-xs leading-relaxed ${plan.highlight ? "text-white/90" : "text-[#64748B]"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group mt-auto ${
                  plan.highlight
                    ? "bg-white text-[#F15533] hover:bg-[#FEE8E4] hover:-translate-y-0.5"
                    : "bg-[#f8fafc] hover:bg-[#F15533] text-[#334155] hover:text-white border border-[#e2e8f0] hover:border-transparent"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
