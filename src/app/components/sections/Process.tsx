"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, FileText, Users, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "1", icon: Phone, title: "Discovery Call", desc: "30-minute call to understand your business — whether you need store operations, POD design, or video ads. We identify quick wins and recommend the right service mix. Free, no commitment." },
  { num: "2", icon: FileText, title: "Audit & Proposal", desc: "We audit your accounts, review your current creatives or listings, and deliver a custom proposal within 48 hours — with scope, team assignment, and pricing." },
  { num: "3", icon: Users, title: "Onboarding", desc: "Your dedicated team is assigned and SOPs are customized. You provide access and briefs, we handle setup. For store ops: account access. For design: niche brief. For video ads: product + brand assets." },
  { num: "4", icon: Rocket, title: "Operate & Scale", desc: "We're live. Daily operations running, designs delivering, ads producing. You receive daily reports, weekly summaries, and monthly business reviews. We iterate based on data — always improving." },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const compareRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.from(".process-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".process-header", start: "top 85%" },
      });

      // Steps stagger
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        gsap.from(step, {
          opacity: 0,
          y: 40,
          scale: 0.96,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: step, start: "top 88%" },
        });
      });

      // Comparison cards
      compareRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          x: i === 0 ? -30 : 30,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#ef4d23]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-[#a78bfa]/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="process-header text-center mb-14">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Our Work Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            From idea to impact—our process makes it{" "}
            <span className="gradient-text">easy, exciting, and effective</span>!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="rounded-2xl border-2 border-dashed border-gray-200 p-5 hover:border-[#ef4d23]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fee8e4] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#ef4d23] transition-all duration-300">
                  <Icon size={18} className="text-[#ef4d23] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-[#0b0f1a] font-bold text-base mb-2">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0f1a]">
            Hiring a VA is a gamble. Hiring us is a system.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div
            ref={(el) => { if (el) compareRef.current[0] = el; }}
            className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-7"
          >
            <h4 className="text-gray-500 font-extrabold text-base uppercase tracking-wider mb-5">Solo VAs<br />Freelancers</h4>
            <ul className="space-y-2.5">
              {["One person, no backup", "Disappear without notice", "You manage every task", "Inconsistent quality", "No reporting", "Flat fee regardless of results", "Only does what you tell them", "One skill (listing OR CS OR design)", "No compliance monitoring", "Just another freelancer"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                  <span className="text-red-400 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => { if (el) compareRef.current[1] = el; }}
            className="rounded-2xl border-2 border-dashed border-[#ef4d23]/20 bg-white p-7 relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ef4d23]/20 to-transparent" />
            <img src="/img/logo-stf.png" alt="logo" className="inline-block h-20 align-middle" />
            <ul className="space-y-2.5">
              {["Managed team with coverage", "SOPs + backup for every role", "You manage outcomes, not people", "QA review on every deliverable", "Daily, weekly, monthly reports", "Profit share = aligned incentives", "Proactive optimization & strategy", "Full-service: ops + design + video", "Daily account health checks", "Long-term operations partner"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="text-[#ef4d23] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
