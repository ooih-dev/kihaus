"use client";

import { useState } from "react";
import { useTranslations } from "@/lib/i18n";
import PackageModal from "@/components/PackageModal";

export default function Pricing() {
  const t = useTranslations();
  const [selectedPackage, setSelectedPackage] = useState<"A" | "B" | "C" | null>(null);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.packages.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.packages.title.split("Keine Abos.").length > 1 ? (
              <>
                {t.packages.title.split("Keine Abos.")[0]}
                <span className="gradient-text">Keine Abos.</span>
              </>
            ) : (
              t.packages.title
            )}
          </h2>
          <p className="text-lg text-slate-500">{t.packages.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(["A", "B", "C"] as const).map((key) => {
            const pkg = t.packages.list[key];
            const isPopular = key === "B";
            return (
              <div
                key={key}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-gradient-to-b from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-600/30 scale-[1.02] ring-4 ring-primary-300/20"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-500 text-white text-xs font-bold uppercase tracking-wider">
                    {t.packages.popular}
                  </div>
                )}

                <div className={`text-sm font-medium mb-1 ${isPopular ? "text-primary-200" : "text-primary-600"}`}>
                  Paket {key}
                </div>
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-sm mb-6 ${isPopular ? "text-primary-200" : "text-slate-500"}`}>
                  {pkg.target}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className={`text-lg ${isPopular ? "text-primary-200" : "text-slate-500"}`}>
                    {pkg.priceRange}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? "text-accent-400" : "text-accent-500"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={`text-sm ${isPopular ? "text-white/90" : "text-slate-600"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(key)}
                  className={`w-full text-center py-2.5 rounded-xl font-semibold transition-all mb-3 text-sm ${
                    isPopular
                      ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      : "bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200"
                  }`}
                >
                  {t.packages.learnMore}
                </button>

                <a
                  href="/#contact"
                  className={`text-center py-3.5 rounded-xl font-semibold transition-all ${
                    isPopular
                      ? "bg-white text-primary-700 hover:bg-primary-50"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  {t.packages.requestNow}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-100 border border-slate-200">
            <div className="text-left">
              <div className="font-semibold text-slate-900">
                {t.packages.byod.title}
              </div>
              <p className="text-sm text-slate-500">{t.packages.byod.desc}</p>
            </div>
            <a
              href="/#contact"
              className="flex-shrink-0 px-5 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              {t.packages.byod.cta}
            </a>
          </div>
        </div>
      </div>

      <PackageModal
        packageKey={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </section>
  );
}
