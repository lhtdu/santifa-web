"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

const projects = [
  {
    tags: ["EBAY", "OPERATIONS", "DROPSHIPPING"],
    title: "eBay Store — $12.8K/month, $39.7K/90 days",
    desc: "A dropshipping operation scaled from scratch to consistent $12.8K/month revenue in 90 days. Full inventory management, listing optimization, and Meta ads handled by our team.",
    metrics: ["$12.8K/mo Revenue", "$39.7K/90 Days", "200+ Orders/Month", "+340% Growth"],
    expanded: "Our team took over a struggling eBay dropshipping account with minimal listings and poor visibility. Within 90 days, we scaled to consistent $12.8K/month by implementing aggressive product research, listing optimization, competitive pricing strategy, and Meta ad campaigns that drove qualified traffic.",
  },
  {
    tags: ["ETSY", "POD", "DESIGN"],
    title: "$34,226 revenue / 6 months · 2,705 orders · 7.4% conversion · +434% visits YoY",
    desc: "Print-on-demand Etsy store with custom designs, optimized listings, and strategic ad spend. Multiplied traffic year-over-year while maintaining healthy conversion rates.",
    metrics: ["$34.2K Revenue", "2,705 Orders", "7.4% Conversion", "+434% Traffic YoY"],
    expanded: "Starting from an Etsy POD store with underperforming listings, our team redesigned the product catalog with conversion-optimized artwork, rewritten descriptions with SEO-rich keywords, and a strategic approach to Etsy Ads. Over 6 months, we scaled from scattered sales to $34,226 in revenue.",
  },
  {
    tags: ["VSL", "AI UGC", "AI SLOP VIDEOS"],
    title: "AI-powered ad creatives — delivered in 24h so you can test new ideas immediately",
    desc: "Fast-turnaround video ad creatives using AI tools. VSL scripts, UGC-style ads, and hook variations delivered at scale for rapid creative testing.",
    metrics: ["24h Turnaround", "VSL Scripts", "AI UGC Format", "A/B Testing Ready"],
    expanded: "Our ad creative team produced high-volume AI-assisted video content for multiple ecommerce clients, generating hundreds of creative variations for Meta testing. Each batch delivered within 24-36 hours with multiple hook angles, UGC-style presentations, and VSL formats.",
  },
];

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Track Record</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a]">
            Real numbers from{" "}
            <span className="gradient-text">real operations</span>.
          </h2>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#f1f5f9] hover:border-[#F15533]/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-50 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="p-6 pb-4 border-b border-[#f8fafc]">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#f8fafc] text-[#64748B] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[#0f172a] font-bold text-sm leading-snug mb-3 group-hover:text-[#F15533] transition-colors">{project.title}</h3>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{project.desc}</p>
              </div>

              <div className="px-6 py-4 grid grid-cols-2 gap-2">
                {project.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-[#F15533] flex-shrink-0" />
                    <span className="text-xs text-[#64748B]">{metric}</span>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#64748B] hover:border-[#F15533]/30 hover:text-[#F15533] transition-all duration-200"
                >
                  <span>{expandedProject === i ? "Collapse Details" : "Expand Details"}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${expandedProject === i ? "rotate-180" : ""}`} />
                </button>

                {expandedProject === i && (
                  <div className="mt-4 p-4 rounded-xl bg-[#f8fafc] border border-[#f1f5f9] animate-slide-down">
                    <p className="text-xs text-[#64748B] leading-relaxed">{project.expanded}</p>
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
