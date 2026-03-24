"use client";

import { useTranslations } from "@/lib/i18n";

export default function HowItWorks() {
  const t = useTranslations();

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.process.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-lg text-slate-500">
            {t.process.description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-accent-400" />

          <div className="space-y-12 lg:space-y-0">
            {t.process.steps.map((s, i) => (
              <div
                key={i}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-12 ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                <div
                  className={`${
                    i % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-5xl font-bold text-primary-100">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-md">
                    {s.desc}
                  </p>
                </div>

                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
