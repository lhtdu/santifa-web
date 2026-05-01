"use client";

import { Phone, FileText, Users, Rocket } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Discovery Call",
    desc: "30-minute call to understand your business — whether you need store operations, POD design, or video ads. We identify quick wins and recommend the right service mix. Free, no commitment.",
  },
  {
    num: "2",
    icon: FileText,
    title: "Audit & Proposal",
    desc: "We audit your accounts, review your current creatives or listings, and deliver a custom proposal within 48 hours — with scope, team assignment, and pricing.",
  },
  {
    num: "3",
    icon: Users,
    title: "Onboarding",
    desc: "Your dedicated team is assigned and SOPs are customized. You provide access and briefs, we handle setup. For store ops: account access. For design: niche brief. For video ads: product + brand assets.",
  },
  {
    num: "4",
    icon: Rocket,
    title: "Operate & Scale",
    desc: "We're live. Daily operations running, designs delivering, ads producing. You receive daily reports, weekly summaries, and monthly business reviews. We iterate based on data — always improving.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#F15533] text-xs font-bold uppercase tracking-widest mb-4">Our Work Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            From idea to impact—{" "}
            <span className="gradient-text">our process makes it easy</span>!
          </h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto">
            Four steps. Zero confusion. A clear path from our first conversation to your store scaling.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-[calc(50%-2.5rem)] h-0.5 bg-gradient-to-r from-[#F15533]/20 to-transparent z-0" />
                )}
                <div className="relative bg-white rounded-2xl border border-[#f1f5f9] p-6 hover:border-[#F15533]/30 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FEE8E4] flex items-center justify-center relative group-hover:bg-[#FEE8E4] transition-colors">
                      <Icon size={22} className="text-[#F15533]" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-[#F15533] text-[#F15533] text-xs font-bold flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#0f172a] font-bold text-lg mb-3 group-hover:text-[#F15533] transition-colors">{step.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Santifa */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a]">
              Hiring a VA is a gamble.{" "}
              <span className="gradient-text">Hiring us is a system</span>.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#f1f5f9] bg-[#f8fafc] p-8">
              <h4 className="text-[#94a3b8] font-semibold text-xs uppercase tracking-wider mb-6">Solo VAs / Freelancers</h4>
              <ul className="space-y-3">
                {["One person, no backup", "Disappear without notice", "You manage every task", "Inconsistent quality", "No reporting", "Flat fee regardless of results", "Only does what you tell them", "One skill (listing OR CS OR design)", "No compliance monitoring", "Just another freelancer"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#F15533]/30 bg-white p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F15533]/20 to-transparent" />
              <h4 className="text-[#F15533] font-semibold text-xs uppercase tracking-wider mb-6">Santifa</h4>
              <ul className="space-y-3">
                {["Managed team with coverage", "SOPs + backup for every role", "You manage outcomes, not people", "QA review on every deliverable", "Daily, weekly, monthly reports", "Profit share = aligned incentives", "Proactive optimization & strategy", "Full-service: ops + design + video", "Daily account health checks", "Long-term operations partner"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155]">
                    <span className="text-[#F15533] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
