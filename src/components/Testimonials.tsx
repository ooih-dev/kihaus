"use client";

import { useTranslations } from "@/lib/i18n";
import { Star } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations();

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.testimonials.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="border-t border-slate-100 mt-4 pt-4">
                <p className="font-semibold text-slate-900">{item.company}</p>
                <p className="text-sm text-slate-500 mt-0.5">{item.size}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-slate-400">{item.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 font-medium">
                    {item.package}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
