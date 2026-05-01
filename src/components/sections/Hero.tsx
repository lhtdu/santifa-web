"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  const accounts = useCountUp(200, 2000, started);
  const gmv = useCountUp(300, 2000, started);
  const years = useCountUp(7, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Top decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#FEE8E4]/60 via-[#FEE8E4]/30 to-transparent rounded-b-full" />

      {/* Left floating shape */}
      <div className="absolute left-8 top-1/3 w-48 h-48 animate-float-slow hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="#F15533" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.15"/>
          <circle cx="100" cy="100" r="50" stroke="#F15533" strokeWidth="0.5" opacity="0.1"/>
        </svg>
      </div>

      {/* Right floating shape */}
      <div className="absolute right-8 top-1/4 w-40 h-40 animate-float-slow-alt hidden lg:block">
        <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
          <rect x="20" y="20" width="120" height="120" rx="20" stroke="#F15533" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.1" transform="rotate(15 80 80)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#f1f5f9] shadow-sm mb-10 animate-fade-in-up">
          <span className="w-2 h-2 bg-[#F15533] rounded-full animate-pulse" />
          <span className="text-sm text-[#475569] font-medium">200+ accounts managed · $300K+ monthly GMV · 7+ years track record</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0f172a] leading-[1.08] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
          Ecommerce operations,
          <br />
          creative, and growth —{" "}
          <span className="gradient-text">fully handled</span>
        </h1>

        {/* Sub */}
        <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.16s" }}>
          Full-service ecom operations, POD design, and Meta ad creatives — under one roof.
          You own the business, we run the engine.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.24s" }}>
          <a
            href="https://forms.gle/TPtYyRLiU7yE3nzAA"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#F15533] hover:bg-[#D94420] text-white font-bold text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-1 flex items-center gap-2.5"
          >
            Book a Free Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white border-2 border-[#e2e8f0] hover:border-[#F15533] text-[#334155] hover:text-[#F15533] font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2.5"
          >
            Explore Services
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.32s" }}>
          <div className="h-px bg-gradient-to-r from-transparent via-[#f1f5f9] to-transparent" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { number: accounts, suffix: "+", label: "Accounts Managed" },
            { number: gmv, suffix: "K+", prefix: "$", label: "Monthly GMV Fulfilled" },
            { number: years, suffix: "+", label: "Years Track Record" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#f1f5f9] hover:border-[#F15533]/30 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1 group cursor-default"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-1 group-hover:text-[#F15533] transition-colors">
                {stat.prefix || ""}{stat.number}{stat.suffix}
              </div>
              <div className="text-sm font-semibold text-[#F15533]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-12 text-[#94a3b8] text-sm animate-fade-in-up" style={{ animationDelay: "0.48s" }}>
          Operating stores, scaling revenue, and fulfilling orders. Let's grow your ecom together.
        </p>
      </div>
    </section>
  );
}
