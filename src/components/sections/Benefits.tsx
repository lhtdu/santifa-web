"use client";

import { useState } from "react";
import { Shield, Eye, Users, TrendingUp, Unlock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Your money stays yours.",
    desc: "We never touch your payout, your login, or your 2FA. We only get access to do the work — nothing more.",
  },
  {
    icon: Eye,
    title: "We check your store every single day.",
    desc: "If something goes wrong — a policy warning, a bad review, a metric dropping — we catch it before it hurts you.",
  },
  {
    icon: Users,
    title: "One team, every need covered.",
    desc: "Need help running your store today? Done. Need designs next month? Same team. Video ads after that? Still us.",
  },
  {
    icon: TrendingUp,
    title: "We get paid when you make money.",
    desc: "If your store has a slow month, you pay less. If it booms, we share the win. That's how it should work.",
  },
  {
    icon: Unlock,
    title: "No yearly contracts. No tricks.",
    desc: "Stay because it works, not because you're stuck. 30 days notice and you're free.",
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section id="benefits" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Benefits</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            See why partnering with us is the{" "}
            <span className="gradient-text">smartest move</span>.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-500 cursor-pointer border ${
                  isActive
                    ? "bg-white border-[#F15533]/30 shadow-lg shadow-orange-50 -translate-y-1"
                    : "bg-white border-[#f1f5f9] hover:border-[#F15533]/20 hover:shadow-md hover:-translate-y-1"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(isActive ? -1 : i)}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isActive ? "bg-[#FEE8E4]" : "bg-[#f8fafc]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-[#F15533]" : "text-[#64748B]"}
                  />
                </div>
                <h3 className={`text-sm font-bold mb-2 leading-snug transition-colors ${isActive ? "text-[#F15533]" : "text-[#334155]"}`}>
                  {benefit.title}
                </h3>
                <p className={`text-xs leading-relaxed transition-all duration-500 ${
                  isActive ? "text-[#64748B] max-h-16 opacity-100" : "text-[#94a3b8] max-h-0 opacity-0 overflow-hidden sm:max-h-0 sm:opacity-0"
                }`}>
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Detail */}
        <div className={`bg-white rounded-2xl p-7 border border-[#f1f5f9] transition-all duration-500 ${
          activeIndex >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#FEE8E4] flex items-center justify-center flex-shrink-0">
              {(() => {
                const Icon = benefits[activeIndex]?.icon;
                return Icon ? <Icon size={24} className="text-[#F15533]" /> : null;
              })()}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1">{benefits[activeIndex]?.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{benefits[activeIndex]?.desc}</p>
            </div>
          </div>
        </div>

        {/* Grow Together */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            We don't just work together—{" "}
            <span className="gradient-text">we grow together</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}
