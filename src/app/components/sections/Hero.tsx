"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen pt-16 overflow-hidden bg-white">
      {/* Background blobs — desktop only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div
          data-speed="0.3"
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fee8e4] rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/4"
        />
        <div
          data-speed="0.5"
          data-lag="0.3"
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fee8e4] rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/4"
        />
      </div>

      {/* Main 2-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[calc(100vh-8rem)]">

          {/* Left column — text content */}
          <div className="flex flex-col items-start text-left">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#0b0f1a] max-w-xl"
              style={{ fontSize: "clamp(36px, 5.5vw, 58px)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.025em" }}
            >
              Ecommerce operations,{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }} className="gradient-text">
                creative
              </span>
              , and growth —{" "}
              <span className="gradient-text">fully handled</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-gray-500 max-w-lg mt-5"
              style={{ fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.7 }}
            >
              Full-service ecom operations, POD design, and Meta ad creatives — under one roof.
              You own the business, we run the engine.
            </motion.p>

            {/* CTA + Stats combined */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <motion.a
                  href="https://forms.gle/TPtYyRLiU7yE3nzAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#ef4d23] hover:bg-[#d94420] text-white rounded-full px-7 py-3 text-[14px] font-semibold transition-colors shadow-lg shadow-orange-100 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Free Call
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full px-6 py-3 text-[14px] font-medium border border-gray-200 transition-colors hover:border-gray-300 hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Services
                  <ArrowRight size={16} />
                </motion.a>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4].map((s) => (
                    <svg key={s} className="w-4 h-4 text-[#ef4d23] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 text-[#ef4d23]" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star-orange">
                        <stop offset="50%" stopColor="#ef4d23" />
                        <stop offset="50%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star-orange)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">200+ accounts managed · $300K+ monthly GMV · 7+ years track record</span>
              </div>
            </motion.div>
          </div>

          {/* Right column — Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Hero portrait image */}
            <div className="relative w-full max-w-[480px] mx-auto">
              <img
                src="/img/hero-portrait.png"
                alt="Santifa Hero"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
