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
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                KH
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                KIHause
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              {t.footer.description}
            </p>
            <p className="text-sm">
              <a href="mailto:hallo@kihause.de" className="text-primary-400 hover:text-primary-300 transition">
                hallo@kihause.de
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-white transition">{t.nav.services}</a></li>
              <li><a href="/#pricing" className="hover:text-white transition">{t.nav.packages}</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition">{t.nav.howItWorks}</a></li>
              <li><a href="/#privacy" className="hover:text-white transition">{t.nav.process}</a></li>
              <li><a href="/#contact" className="hover:text-white transition">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Blog + Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Blog</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog/warum-ki-in-berlin-selbst-hosten" className="hover:text-white transition">{t.footer.hosting}</a></li>
              <li><a href="/blog/ki-fuer-anwaelte-und-aerzte" className="hover:text-white transition">{t.footer.specialists}</a></li>
              <li><a href="/blog/mac-mini-private-ki-zentrale" className="hover:text-white transition">{t.footer.macmini}</a></li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/impressum" className="hover:text-white transition">{t.footer.imprint}</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition">{t.footer.privacy}</a></li>
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
