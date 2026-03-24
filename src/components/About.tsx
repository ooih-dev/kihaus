"use client";

import { useTranslations } from "@/lib/i18n";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.about.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {t.about.title}
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-5">
            {t.about.p1}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {t.about.p2}
          </p>

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm">
            {t.about.stat}
          </span>
        </div>
      </div>
    </section>
  );
}
