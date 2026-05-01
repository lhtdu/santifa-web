"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#projects" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const mobileLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#projects" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

function SantifaLogo() {
  return (
    <img src="/img/logo-stf.png" alt="Santifa" className="w-full h-full object-contain object-center" />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNavClick("#hero")} className="flex items-center">
            <div className="w-[128px] h-[128px] overflow-hidden flex items-center justify-center">
              <img src="/img/logo-stf.png" alt="Santifa" className="w-full h-full object-contain object-center" style={{ display: "block", width: "100%", height: "100%" }} />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] text-gray-500 hover:text-[#ef4d23] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://forms.gle/TPtYyRLiU7yE3nzAA"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#ef4d23] hover:bg-[#d94420] text-white rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors"
            >
              Book a Call
            </a>
            <a
              href="https://forms.gle/TPtYyRLiU7yE3nzAA"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center gap-1.5 bg-[#ef4d23] hover:bg-[#d94420] text-white rounded-lg px-3 py-2 text-[12px] font-semibold transition-colors"
            >
              Book
            </a>
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-100 px-4 py-3"
          >
            <nav className="flex flex-col gap-0.5">
              {mobileLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between px-3 py-2.5 text-[14px] text-gray-600 hover:text-[#ef4d23] hover:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  {link.label}
                  <ChevronRight size={14} className="text-gray-400" />
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
