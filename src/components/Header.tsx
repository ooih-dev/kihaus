"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Leistungen", labelEn: "Services" },
  { href: "#pricing", label: "Pakete", labelEn: "Packages" },
  { href: "#how-it-works", label: "So funktioniert's", labelEn: "How It Works" },
  { href: "#privacy", label: "Datenschutz", labelEn: "Privacy" },
  { href: "#contact", label: "Kontakt", labelEn: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
            SK
          </div>
          <span className="text-xl font-bold tracking-tight">
            Spree<span className="gradient-text">KI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
          >
            Kostenlos beraten
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-primary-600 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold"
              >
                Kostenlos beraten
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
