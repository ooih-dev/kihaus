"use client";

import { useTranslations } from "@/lib/i18n";

export default function HowItWorks() {
  const t = useTranslations();

  return (
    <section id="ablauf" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
            {t.process.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.process.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.process.description}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {t.process.steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-emerald-400">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
