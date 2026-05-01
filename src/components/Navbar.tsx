"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#projects" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F15533] to-[#D94420] flex items-center justify-center font-bold text-white text-lg group-hover:shadow-lg group-hover:shadow-orange-100 transition-all duration-300 group-hover:scale-105">
              S
            </div>
            <span className="text-[#0f172a] font-bold text-xl tracking-tight">
              logo<span className="text-[#F15533]">.io</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[#475569] hover:text-[#F15533] transition-colors duration-200 relative group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#F15533] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+84939959941"
              className="text-sm text-[#64748B] hover:text-[#F15533] transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone size={14} />
              (+84) 939 959 941
            </a>
            <a
              href="https://forms.gle/TPtYyRLiU7yE3nzAA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#F15533] hover:bg-[#D94420] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#334155] p-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-[#f1f5f9]" />
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#f1f5f9] overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#475569] hover:text-[#F15533] transition-colors py-2.5 text-sm font-medium border-b border-[#f8fafc] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-[#f1f5f9] mt-2 pt-4 flex flex-col gap-3">
            <a href="tel:+84939959941" className="text-sm text-[#64748B] flex items-center gap-2">
              <Phone size={14} /> (+84) 939 959 941
            </a>
            <a
              href="https://forms.gle/TPtYyRLiU7yE3nzAA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#F15533] text-white font-semibold text-sm rounded-lg text-center"
            >
              Book a Call
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
