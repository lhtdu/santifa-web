"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    linkedin: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    youtube: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  };
  return icons[type] || null;
};

const socials = [
  { type: "linkedin", href: "https://linkedin.com/", label: "Linkedin" },
  { type: "facebook", href: "https://facebook.com/", label: "Facebook" },
  { type: "twitter", href: "https://twitter.com/", label: "Twitter" },
  { type: "instagram", href: "https://instagram.com/", label: "Instagram" },
  { type: "youtube", href: "https://youtube.com/", label: "Youtube" },
];

const footerLinks = [
  { section: "Navigation", items: [{ label: "Services", href: "#services" }, { label: "Results", href: "#projects" }, { label: "How It Works", href: "#process" }, { label: "FAQ", href: "#faq" }] },
  { section: "Company", items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Contact", href: "#faq" }] },
  { section: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Cookie Policy", href: "#" }] },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && href !== "#") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionRef = useRef<HTMLElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".footer-brand", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        scrollTrigger: { trigger: ".footer-brand", start: "top 90%" },
      });

      colRefs.current.forEach((col, i) => {
        if (!col) return;
        gsap.from(col, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: i * 0.08,
          scrollTrigger: { trigger: col, start: "top 90%" },
        });
      });

      gsap.from(".footer-bottom", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        scrollTrigger: { trigger: ".footer-bottom", start: "top 95%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="footer-brand lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-[122px] h-[54px] overflow-hidden flex items-center justify-center">
                <img src="/img/logo-stf.png" alt="Santifa" className="w-full h-full object-contain object-center" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Everything your store needs. Under one roof.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: "(+84) 939 959 941" },
                { icon: Mail, text: "winston@santifa.io" },
                { icon: MapPin, text: "02 Ton Duc Thang, Saigon Ward, HCMC, Vietnam" },
                { icon: Clock, text: "Mon to Sun: 24/7" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-gray-500">
                  <Icon size={13} className="mt-0.5 text-[#ef4d23] flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={section.section} ref={(el) => { colRefs.current[i] = el; }}>
              <h4 className="text-[#0b0f1a] font-semibold text-sm mb-4">{section.section}</h4>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={(e) => handleNav(e, item.href)} className="text-sm text-gray-500 hover:text-[#ef4d23] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">©Santifa.io — All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ type, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#ef4d23] hover:border-[#ef4d23]/30 transition-all hover:-translate-y-0.5"
                aria-label={label}
              >
                <SocialIcon type={type} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 w-10 h-10 rounded-full bg-[#ef4d23] text-white shadow-lg shadow-orange-100 hover:bg-[#d94420] transition-all hover:-translate-y-1 hover:shadow-xl z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
