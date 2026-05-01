"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const milestones = [
  { number: 200, suffix: "+", label: "Accounts Managed", color: "#ef4d23" },
  { number: 300, prefix: "$", suffix: "K+", label: "Monthly GMV", color: "#a78bfa" },
  { number: 7, suffix: "+", label: "Years Track Record", color: "#34d399" },
  { number: 34, prefix: "$", suffix: "K+", label: "Revenue (6 months)", color: "#fbbf24" },
];

const steps = [
  { num: "1", title: "Discovery Call", desc: "30-minute call to understand your business needs. Free, no commitment." },
  { num: "2", title: "Audit & Proposal", desc: "Custom proposal within 48 hours with scope, team, and pricing." },
  { num: "3", title: "Onboarding", desc: "Dedicated team assigned, SOPs customized, setup begins." },
  { num: "4", title: "Operate & Scale", desc: "Daily operations running. You receive daily reports and weekly summaries." },
];

export default function Milestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ef4d23]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Track Record</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Real numbers from{" "}
            <span className="gradient-text">real operations</span>.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {milestones.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="glass rounded-2xl p-6 text-center relative overflow-hidden group hover:border-[#ef4d23]/30 transition-all duration-500"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: stat.color }}
              />
              <div className="relative z-10">
                <div
                  className="text-4xl sm:text-5xl font-bold mb-1"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 40px ${stat.color}40`,
                  }}
                >
                  {stat.prefix || ""}{stat.number}{stat.suffix}
                </div>
                <div className="text-[12px] text-neutral-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: EASE }}
              className="glass rounded-2xl p-5 border border-white/[0.06]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ef4d23]/10 flex items-center justify-center">
                  <span className="text-[#ef4d23] font-bold text-sm">{step.num}</span>
                </div>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1.5">{step.title}</h4>
              <p className="text-neutral-500 text-[12px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
