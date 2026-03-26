"use client";

import { useTranslations } from "@/lib/i18n";

export default function Privacy() {
  const t = useTranslations();

  return (
    <section id="datenschutz" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-4">
            {t.comparison.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.comparison.title.split("KIHause").length > 1 ? (
              <>
                {t.comparison.title.split("KIHause")[0]}
                <span className="gradient-text">KIHause</span>
                {t.comparison.title.split("KIHause")[1]}
              </>
            ) : (
              t.comparison.title
            )}
          </h2>
          <p className="text-lg text-slate-400">
            {t.comparison.quote}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-700">
            <div className="grid grid-cols-3 bg-slate-800">
              <div className="p-4 text-sm font-medium text-slate-400" />
              <div className="p-4 text-sm font-semibold text-red-400 text-center">
                Cloud-KI (ChatGPT & Co.)
              </div>
              <div className="p-4 text-sm font-semibold text-accent-400 text-center">
                KIHause (Lokal)
              </div>
            </div>

            {t.comparison.rows.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? "bg-slate-800/50" : "bg-slate-800/30"
                }`}
              >
                <div className="p-4 text-sm font-medium text-white">
                  {c.label}
                </div>
                <div className="p-4 text-sm text-slate-400 text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{c.cloud}</span>
                </div>
                <div className="p-4 text-sm text-white text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{c.local}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-xl italic text-slate-300 leading-relaxed">
            {t.comparison.founderQuote}
          </p>
          <footer className="mt-4 text-primary-400 font-medium">
            — {t.comparison.founderTitle}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
