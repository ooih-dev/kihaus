"use client";

import { useTranslations } from "@/lib/i18n";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/kihause-logo.png" alt="KIHause" className="h-8" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              {t.footer.description}
            </p>
            <p className="text-sm">
              <a href="mailto:hallo@kihause.de" className="text-emerald-400 hover:text-emerald-300 transition">
                hallo@kihause.de
              </a>
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.solutions}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#leistungen" className="hover:text-white transition">{t.nav.services}</a></li>
              <li><a href="/#pakete" className="hover:text-white transition">{t.nav.packages}</a></li>
              <li><a href="/#ablauf" className="hover:text-white transition">{t.nav.howItWorks}</a></li>
              <li><a href="/#datenschutz" className="hover:text-white transition">{t.nav.process}</a></li>
              <li><a href="/#kontakt" className="hover:text-white transition">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition">{t.footer.imprint}</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition">{t.footer.privacy}</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} KIHause. Berlin, Deutschland.</p>
          <p className="text-slate-500">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
