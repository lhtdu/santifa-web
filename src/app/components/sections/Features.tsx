"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const features = [
  {
    tag: "OPERATIONS",
    title: "eBay & Etsy Operations",
    desc: "We run your store like it's our own — because we only make money when you do. Listings, orders, customer messages, ads, returns — all handled by a real team, checked daily.",
    items: ["Listing & SEO", "Order Fulfillment", "Customer Service", "Promoted Listings / Etsy Ads", "Account Health & Compliance", "Daily Reporting & P&L"],
    color: "#ef4d23",
  },
  {
    tag: "DESIGN",
    title: "POD Design",
    desc: "Custom print-on-demand designs that sell. We research trends, create compelling artwork, and optimize for conversions — so your POD store stands out.",
    items: ["Trend Research & Analysis", "Custom Artwork Design", "Niche-specific Designs", "Listing Image Design", "Seasonal & Holiday Collections"],
    color: "#a78bfa",
  },
  {
    tag: "ADS",
    title: "Video Ads Creative",
    desc: "AI-powered video ads for Meta (Facebook & Instagram). We create VSL and AI UGC creatives that hook, convert, and scale — delivered in 24-36 hours.",
    items: ["VSL Scripts & Videos", "AI UGC Creatives", "Hook Variations", "Meta Ads Specialist", "24-36h Turnaround"],
    color: "#34d399",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 sm:py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ef4d23]/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Three services. One team.{" "}
            <span className="gradient-text">Built for ecom sellers</span>.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.tag}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group hover:border-[#ef4d23]/30 transition-all duration-500 flex flex-col"
            >
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 w-fit"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                {feature.tag}
              </span>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                {feature.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                {feature.desc}
              </p>

              <ul className="space-y-2 mb-6">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: feature.color }} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/TPtYyRLiU7yE3nzAA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-medium transition-colors opacity-70 hover:opacity-100 mt-auto"
                style={{ color: feature.color }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
