"use client";

import { useTranslations } from "@/lib/i18n";
import { Scale, Palette, Heart, Users } from "lucide-react";

export default function Sectors() {
  const t = useTranslations();

  const icons = [Scale, Palette, Heart, Users];

  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.sectors.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.sectors.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.sectors.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.sectors.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
