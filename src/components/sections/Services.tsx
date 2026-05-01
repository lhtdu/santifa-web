"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ShoppingBag, Palette, Video, Check } from "lucide-react";

const services = [
  {
    id: "ecom",
    icon: ShoppingBag,
    label: "eBay & Etsy Operations",
    title: "eBay & Etsy Operations",
    desc: "We run your store like it's our own — because we only make money when you do. Listings, orders, customer messages, ads, returns — all handled by a real team, checked daily, reported to you every morning.",
    features: ["Listing & SEO", "Order Fulfillment", "Customer Service", "Promoted Listings / Etsy Ads", "Account Health & Compliance", "Daily Reporting & P&L", "Returns & Disputes"],
    highlight: "All-day, every-day management",
  },
  {
    id: "pod",
    icon: Palette,
    label: "POD Design",
    title: "POD Design",
    desc: "Custom print-on-demand designs that sell. We research trends, create compelling artwork, and optimize for conversions — so your POD store stands out in a crowded market.",
    features: ["Trend Research & Analysis", "Custom Artwork Design", "Niche-specific Designs", "Listing Image Design", "Seasonal & Holiday Collections", "File Format Delivery"],
    highlight: "Designs that convert visitors into buyers",
  },
  {
    id: "ads",
    icon: Video,
    label: "Video Ads Creative",
    title: "Video Ads Creative",
    desc: "AI-powered video ads for Meta (Facebook & Instagram). We create VSL and AI UGC creatives that hook, convert, and scale — delivered in 24-36 hours so you can test fast and iterate faster.",
    features: ["VSL Scripts & Videos", "AI UGC Creatives", "Hook Variations", "Meta Ads Specialist", "24-36h Turnaround", "Win Bonus Available"],
    highlight: "Hook, convert, scale — 24-36 hours",
  },
];

const reviews = [
  "Best decision we ever made!",
  "These folks get it...",
  "They're like digital magicians!",
  "A total game-changer for us!",
  "I can't stop recommending them!",
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  const active = services[activeService];
  const Icon = active.icon;

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Our services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Three services. One team.{" "}
            <span className="gradient-text">Built for ecom sellers</span>.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {services.map((s, i) => {
            const SI = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => { setActiveService(i); setOpenFeature(null); }}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  activeService === i
                    ? "bg-[#F15533] border-[#F15533] text-white shadow-lg shadow-orange-100"
                    : "bg-white border-[#e2e8f0] text-[#475569] hover:border-[#F15533]/40 hover:text-[#F15533]"
                }`}
              >
                <SI size={18} />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <div className="w-14 h-14 rounded-2xl bg-[#FEE8E4] flex items-center justify-center mb-6">
              <Icon size={26} className="text-[#F15533]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">{active.title}</h3>
            <p className="text-[#64748B] leading-relaxed mb-6 text-sm sm:text-base">{active.desc}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEE8E4] border border-[#F15533]/20">
              <Check size={14} className="text-[#F15533]" />
              <span className="text-sm text-[#F15533] font-semibold">{active.highlight}</span>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-2">
            {active.features.map((feature) => (
              <div key={feature} className="border border-[#e2e8f0] rounded-xl overflow-hidden bg-white hover:border-[#F15533]/20 transition-colors">
                <button
                  onClick={() => setOpenFeature(openFeature === feature ? null : feature)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8fafc] transition-colors"
                >
                  <span className="text-sm text-[#334155] font-medium">{feature}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#94a3b8] transition-transform duration-300 ${openFeature === feature ? "rotate-180" : ""}`}
                  />
                </button>
                {openFeature === feature && (
                  <div className="px-5 pb-4 text-xs text-[#94a3b8] leading-relaxed animate-slide-down">
                    Comprehensive coverage for this aspect of your business. Managed by our dedicated team with daily monitoring and reporting.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Marquee */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-white border border-[#f1f5f9] p-6">
          <div className="flex animate-marquee gap-5 w-max">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEE8E4] border border-[#F15533]/10">
                <span className="text-[#F15533]">★</span>
                <span className="text-sm text-[#334155] whitespace-nowrap font-medium">{review}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
