"use client";

import { useTranslations } from "@/lib/i18n";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
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
          </div>

          {/* Right column — image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://photos5.appleinsider.com/gallery/61880-128116-download-xl.jpg"
                alt="KIHause"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4">
              <div className="text-4xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-slate-500 mt-1">{t.about.stat}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
