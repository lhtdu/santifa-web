"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-card", {
        opacity: 0,
        scale: 0.97,
        duration: 0.6,
        scrollTrigger: { trigger: ".cta-card", start: "top 85%" },
      });

      gsap.from(".cta-heading", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: { trigger: ".cta-heading", start: "top 85%" },
      });

      gsap.from(".cta-sub", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.15,
        scrollTrigger: { trigger: ".cta-sub", start: "top 85%" },
      });

      gsap.from(".cta-buttons", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: { trigger: ".cta-buttons", start: "top 85%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 px-4 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative background */}
      <div
        data-speed="0.3"
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#ef4d23]/8 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        data-speed="0.5"
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#ef4d23]/5 rounded-full blur-[80px] pointer-events-none"
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="cta-card bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-dashed border-gray-300 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ef4d23]/30 to-transparent" />

          <h2 className="cta-heading text-3xl sm:text-4xl font-bold text-[#0b0f1a] mb-4">
            Ready to <span className="gradient-text">grow your ecom</span>?
          </h2>

          <p className="cta-sub text-gray-500 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Let's talk about what's working, what's not, and how we can help you scale. No commitment, just clarity.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://forms.gle/TPtYyRLiU7yE3nzAA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#ef4d23] hover:bg-[#d94420] text-white rounded-full px-7 py-3 text-[14px] font-semibold transition-colors shadow-lg shadow-orange-100 hover:shadow-xl"
            >
              Book a Free Call
              <ChevronRight size={16} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-[14px] font-medium transition-colors"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
