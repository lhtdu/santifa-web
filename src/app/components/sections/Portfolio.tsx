"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    tags: ["EBAY", "OPERATIONS", "DROPSHIPPING"],
    title: "eBay Store — $12.8K/month, $39.7K/90 days",
    desc: "A dropshipping operation scaled from scratch to consistent $12.8K/month revenue in 90 days. Full inventory management, listing optimization, and Meta ads handled by our team.",
    metrics: ["$12.8K/mo Revenue", "$39.7K/90 Days", "200+ Orders/Month", "+340% Growth"],
    expanded: "Our team took over a struggling eBay dropshipping account with minimal listings and poor visibility. Within 90 days, we scaled to consistent $12.8K/month by implementing aggressive product research, listing optimization, competitive pricing strategy, and Meta ad campaigns.",
    image: "/img/track1.avif",
    imageFallback: "/img/track1.png",
    imageAlt: "eBay store dashboard showing $12.8K monthly revenue growth",
  },
  {
    tags: ["ETSY", "POD", "DESIGN"],
    title: "$34,226 revenue / 6 months · 2,705 orders · 7.4% conversion · +434% visits YoY",
    desc: "Print-on-demand Etsy store with custom designs, optimized listings, and strategic ad spend. Multiplied traffic year-over-year while maintaining healthy conversion rates.",
    metrics: ["$34.2K Revenue", "2,705 Orders", "7.4% Conversion", "+434% Traffic YoY"],
    expanded: "Starting from an Etsy POD store with underperforming listings, our team redesigned the product catalog with conversion-optimized artwork, rewritten descriptions with SEO-rich keywords, and a strategic approach to Etsy Ads. Over 6 months, scaled from scattered sales to $34,226 in revenue.",
    image: "/img/track2.avif",
    imageFallback: "/img/track2.png",
    imageAlt: "Etsy POD store with 7.4% conversion rate and $34.2K revenue",
  },
  {
    tags: ["VSL", "AI UGC", "AI Creative"],
    title: "AI-powered ad creatives — delivered in 24h so you can test new ideas immediately",
    desc: "Fast-turnaround video ad creatives using AI tools. VSL scripts, UGC-style ads, and hook variations delivered at scale for rapid creative testing.",
    metrics: ["24h Turnaround", "VSL Scripts", "AI UGC Format", "A/B Testing Ready"],
    expanded: "Our ad creative team produced high-volume AI-assisted video content for multiple ecommerce clients, generating hundreds of creative variations for Meta testing. Each batch delivered within 24-36 hours with multiple hook angles, UGC-style presentations, and VSL formats.",
    image: "/img/track3.avif",
    imageFallback: "/img/track3.png",
    imageAlt: "AI-generated UGC video ad creatives for Meta testing",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.from(".portfolio-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".portfolio-header", start: "top 85%" },
      });

      // Cards stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.7,
          delay: i * 0.12,
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ef4d23]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#34d399]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="portfolio-header text-center mb-12">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Track Record</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            Real numbers from{" "}
            <span className="gradient-text">real operations</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="bg-white rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden hover:border-[#ef4d23]/30 hover:shadow-lg transition-all"
            >
              <div className="w-full aspect-[16/9] overflow-hidden bg-gray-50">
                <picture>
                  <source srcSet={p.image} type="image/avif" />
                  <img
                    src={p.imageFallback}
                    alt={p.imageAlt}
                    width={600}
                    height={338}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>

              <div className="p-5 pb-4 border-b border-gray-50">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[#0b0f1a] font-bold text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </div>

              <div className="px-5 py-3.5 grid grid-cols-2 gap-2">
                {p.metrics.map((m) => (
                  <div key={m} className="flex items-center gap-1.5">
                    <TrendingUp size={11} className="text-[#ef4d23] flex-shrink-0" />
                    <span className="text-xs text-gray-600">{m}</span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-500 hover:border-[#ef4d23]/30 hover:text-[#ef4d23] transition-all"
                >
                  <span>{expanded === i ? "Collapse Details" : "Expand Details"}</span>
                  <ChevronDown size={14} className={`transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                </button>
                {expanded === i && (
                  <div className="mt-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-500 leading-relaxed">{p.expanded}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
