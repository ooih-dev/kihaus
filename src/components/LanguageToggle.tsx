"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="rounded-full bg-slate-100 p-0.5 flex gap-0.5">
      <button
        onClick={() => setLocale("de")}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
          locale === "de"
            ? "bg-primary-600 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
          locale === "en"
            ? "bg-primary-600 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
