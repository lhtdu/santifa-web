"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    image: "/img/Benefits1.png",
    title: "Your money stays yours.",
    desc: "We never touch your payout, your login, or your 2FA. We only get access to do the work — nothing more.",
  },
  {
    image: "/img/Benefits2.png",
    title: "We check your store every single day.",
    desc: "If something goes wrong — a policy warning, a bad review, a metric dropping — we catch it before it hurts you.",
  },
  {
    image: "/img/Benefits3.png",
    title: "One team, every need covered.",
    desc: "Need help running your store today? Done. Need designs next month? Same team. Video ads after that? Still us. No need to find and manage different people.",
  },
  {
    image: "/img/Benefits4.png",
    title: "We get paid when you make money.",
    desc: "If your store has a slow month, you pay less. If it booms, we share the win. That's how it should work.",
  },
  {
    image: "/img/Benefits5.png",
    title: "No yearly contracts. No tricks.",
    desc: "Stay because it works, not because you're stuck. 30 days notice and you're free.",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.from(".benefits-header", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        scrollTrigger: { trigger: ".benefits-header", start: "top 85%" },
      });

      // Cards stagger with scale
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: "top 88%" },
        });

        // Animate dashed border on hover
        gsap.to(card, {
          borderColor: "rgba(239, 77, 35, 0.4)",
          boxShadow: "0 8px 30px rgba(239, 77, 35, 0.08)",
          duration: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        });
      });

      // Tagline
      gsap.from(".benefits-tagline", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: { trigger: ".benefits-tagline", start: "top 88%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ef4d23]/5 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#a78bfa]/5 rounded-full blur-[80px] pointer-events-none"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="benefits-header text-center mb-14">
          <p className="text-[#ef4d23] text-[11px] font-bold uppercase tracking-widest mb-3">Benefits</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-3">
            See why partnering with us is the{" "}
            <span className="gradient-text">smartest move</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {benefits.map((b, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="bg-white rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden hover:border-[#ef4d23]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full overflow-hidden rounded-t-2xl">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-tagline text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b0f1a]">
            We don&apos;t just work together—{" "}
            <span className="gradient-text">we grow together</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}
