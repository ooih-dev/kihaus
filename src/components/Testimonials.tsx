"use client";

import { useTranslations } from "@/lib/i18n";

export default function Testimonials() {
  const t = useTranslations();
  const items = t.testimonials.items;

  return (
    <section id="erfahrungen" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
            {t.testimonials.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.testimonials.description}
          </p>
        </div>
      </div>

      <div className="flex animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="w-[400px] flex-shrink-0 mx-3">
            <div className="w-[400px] bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-600 italic leading-relaxed mb-4">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{item.company}</p>
                <p className="text-sm text-slate-500 mt-0.5">{item.size}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-slate-400">{item.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                    {item.package}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
