"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLanguage } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import BlogStories from "@/components/BlogStories";

export default function Header() {
  const t = useTranslations();
  const { locale } = useLanguage();
  const prefix = `/${locale}`;
  const navLinks = [
    { href: `${prefix}/#leistungen`, label: t.nav.services },
    { href: `${prefix}/#pakete`, label: t.nav.packages },
    { href: `${prefix}/#ablauf`, label: t.nav.howItWorks },
    { href: `${prefix}/#erfahrungen`, label: t.nav.testimonials },
    { href: `${prefix}/blog`, label: t.nav.blog, isBlog: true },
    { href: `${prefix}/#kontakt`, label: t.nav.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen || storiesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, storiesOpen]);

  const handleMobileLink = (link: { href: string; isBlog?: boolean }) => {
    if (link.isBlog) {
      setMobileOpen(false);
      // Quick transition to stories
      setTimeout(() => setStoriesOpen(true), 80);
      return;
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href={prefix} className="flex items-center gap-2 group">
            <img src="/kihause-logo.png" alt="KIHause" className="h-8" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-emerald-600">KI</span>Hause
            </span>
          </a>

          {/* Desktop nav — unchanged */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle />
            <a
              href={`${prefix}/#kontakt`}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 relative z-[70]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2 bg-white" : "bg-slate-800"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? "opacity-0 bg-white" : "bg-slate-800"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-slate-800"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-slate-950 lg:hidden"
          >
            {/* Subtle grid background for tech feel */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Menu content */}
            <div className="relative h-full flex flex-col justify-between px-8 pt-24 pb-10">
              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.02 + i * 0.03, duration: 0.2, ease: "easeOut" }}
                  >
                    <a
                      href={link.isBlog ? undefined : link.href}
                      onClick={(e) => {
                        if (link.isBlog) {
                          e.preventDefault();
                        }
                        handleMobileLink(link);
                      }}
                      className="group flex items-center justify-between py-4 border-b border-white/5 cursor-pointer"
                    >
                      <span className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {link.label}
                      </span>
                      {link.isBlog ? (
                        <span className="text-xs font-mono text-emerald-500/60 tracking-wider uppercase">
                          stories
                        </span>
                      ) : (
                        <svg
                          className="w-5 h-5 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Bottom section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
                className="flex flex-col gap-5"
              >
                <LanguageToggle />

                <a
                  href={`${prefix}/#kontakt`}
                  onClick={() => setMobileOpen(false)}
                  className="text-center px-6 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-lg hover:bg-emerald-400 transition-colors"
                >
                  {t.nav.cta}
                </a>

                {/* Tech decoration */}
                <div className="flex items-center gap-3 text-xs font-mono text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>kihause.de // {locale.toUpperCase()}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog stories overlay */}
      <BlogStories
        open={storiesOpen}
        onClose={() => setStoriesOpen(false)}
        locale={locale}
      />
    </>
  );
}
