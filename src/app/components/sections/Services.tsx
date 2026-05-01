"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShoppingBag, Palette, Video, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "ecom",
    icon: ShoppingBag,
    color: "#ef4d23",
    tag: "OPERATIONS",
    title: "eBay & Etsy Operations",
    desc: "We run your store like it's our own — because we only make money when you do. Listings, orders, customer messages, ads, returns — all handled by a real team, checked daily, reported to you every morning.",
    features: ["Listing & SEO", "Order Fulfillment", "Customer Service", "Promoted Listings / Etsy Ads", "Account Health & Compliance", "Daily Reporting & P&L", "Returns & Disputes"],
  },
  {
    id: "pod",
    icon: Palette,
    color: "#a78bfa",
    tag: "DESIGN",
    title: "POD Design",
    desc: "Custom print-on-demand designs that sell. We research trends, create compelling artwork, and optimize for conversions — so your POD store stands out in a crowded market.",
    features: ["Trend Research & Analysis", "Custom Artwork Design", "Niche-specific Designs", "Listing Image Design", "Seasonal & Holiday Collections", "File Format Delivery"],
  },
  {
    id: "ads",
    icon: Video,
    color: "#34d399",
    tag: "ADS",
    title: "Video Ads Creative",
    desc: "AI-powered video ads for Meta (Facebook & Instagram). We create VSL and AI UGC creatives that hook, convert, and scale — delivered in 24-36 hours so you can test fast and iterate faster.",
    features: ["VSL Scripts & Videos", "AI UGC Creatives", "Hook Variations", "Meta Ads Specialist", "24-36h Turnaround", "Win Bonus Available"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.from(".services-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".services-header", start: "top 85%" },
      });

      // Cards stagger
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 0.6,
          delay: i * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-white relative">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ef4d23]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#a78bfa]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-14">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Our services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a]">
            Three services. One team.{" "}
            <span className="gradient-text">Built for ecom sellers</span>.
          </h2>
        </div>

        {/* 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="rounded-2xl border border-dashed border-gray-200 bg-white p-5 hover:border-[#ef4d23]/40 hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Top: icon + tag + title + desc */}
                <div className="mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${s.color}15` }}>
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                    style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  >
                    {s.tag}
                  </span>
                  <h3 className="text-[#0b0f1a] font-bold text-base mb-1.5">{s.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
                </div>

                {/* Features as pill tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {s.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border"
                      style={{
                        borderColor: `${s.color}30`,
                        color: s.color,
                        backgroundColor: `${s.color}08`,
                      }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* View Details */}
                <a
                  href="https://forms.gle/TPtYyRLiU7yE3nzAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium transition-all hover:gap-2.5"
                  style={{ color: s.color }}
                >
                  View Details
                  <ArrowRight size={13} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
