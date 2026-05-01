"use client";

import { useEffect, useRef, useState } from "react";

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

const stats = [
  {
    number: 150,
    suffix: "+",
    label: "Accounts Managed",
    desc: "eBay and Etsy accounts operated across multiple niches, models, and markets.",
  },
  {
    number: 300,
    suffix: "k+",
    prefix: "$",
    label: "Monthly GMV Fulfilled",
    desc: "In orders processed and fulfilled daily by our operations and fulfillment team.",
  },
  {
    number: 7,
    suffix: "+",
    label: "Years Track Record",
    desc: "Continuous fulfillment operations with multi-supplier coordination and zero downtime.",
  },
];

export default function StatsCards() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const accounts = useCountUp(150, 2000, started);
  const gmv = useCountUp(300, 2000, started);
  const years = useCountUp(7, 1500, started);

  const counts = [accounts, gmv, years];

  return (
    <div ref={ref} className="w-full px-4 sm:px-6 py-12 sm:py-16 relative">
      {/* Decorative elements */}
      <div
        data-speed="0.4"
        data-lag="0.2"
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#ef4d23]/5 rounded-full blur-[80px] pointer-events-none"
      />
      <div
        data-speed="0.6"
        data-lag="0.3"
        className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#ef4d23]/3 rounded-full blur-[60px] pointer-events-none"
      />
      <div className="max-w-[960px] mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">
            What We've Achieved
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            Operating <span className="text-[#ef4d23]">stores</span>, scaling <span className="text-[#ef4d23]">revenue</span>, and fulfilling orders.{" "}
            Let&apos;s <span className="text-[#ef4d23]">grow</span> your ecom together.
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm">
            Four steps. Zero confusion. A clear path from our first conversation to your store scaling.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 pb-8 flex flex-col gap-3 border border-dashed border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-card-enter"
              style={{
                minHeight: "220px",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Number */}
              <div
                className={`leading-none -mt-1 ${started ? "animate-number-pop" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15 + 0.3}s` }}
              >
                {stat.prefix && <span className="text-[44px] sm:text-[56px] font-bold text-[#0b0f1a]">{stat.prefix}</span>}
                <span className="text-[44px] sm:text-[56px] font-bold text-[#0b0f1a]">{counts[i]}</span>
                <span className="text-[44px] sm:text-[56px] font-bold text-[#ef4d23]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-[15px] font-semibold text-[#0b0f1a]">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-[13px] text-neutral-500 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
