"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users, TrendingUp, X } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

interface PackageModalProps {
  packageKey: "A" | "B" | "C" | null;
  onClose: () => void;
}

export default function PackageModal({ packageKey, onClose }: PackageModalProps) {
  const t = useTranslations();

  return (
    <AnimatePresence>
      {packageKey !== null && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-50 overflow-y-auto flex items-start justify-center py-12 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label={t.packageModal.close}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-1">
                {t.packageDetails[packageKey].title}
              </h2>
              <p className="text-primary-200 text-sm mb-4">
                {t.packageDetails[packageKey].subtitle}
              </p>
              <p className="text-white/90 text-base italic">
                {t.packageDetails[packageKey].marketingPitch}
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Perfect for + ROI */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary-50 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-primary-700 font-semibold mb-3">
                    <Users className="w-4 h-4" />
                    <span>{t.packageModal.perfectFor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.packageDetails[packageKey].idealFor.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span>{t.packageModal.roi}</span>
                  </div>
                  <p className="text-slate-700 text-sm">
                    {t.packageDetails[packageKey].roi}
                  </p>
                </div>
              </div>

              {/* How it works */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5">
                  {t.packageModal.howItWorks}
                </h3>
                <div className="flex items-start gap-2">
                  {t.packageDetails[packageKey].workflow.map(
                    (step: { title: string; desc: string }, i: number, arr: readonly { title: string; desc: string }[]) => (
                      <div key={i} className="flex items-start gap-2 flex-1">
                        <div className="flex flex-col items-center flex-1">
                          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white font-bold text-sm flex-shrink-0">
                            {i + 1}
                          </div>
                          <div className="mt-3 text-center">
                            <p className="font-semibold text-slate-900 text-sm">
                              {step.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                          </div>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="flex-shrink-0 mt-4">
                            <ArrowRight className="w-5 h-5 text-slate-300" />
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* What's included */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t.packageModal.whatsIncluded}
                </h3>
                <div className="space-y-3">
                  {t.packageDetails[packageKey].features.map(
                    (feat: { title: string; desc: string }, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">
                            {feat.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{feat.desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Use cases */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t.packageDetails[packageKey].useCasesTitle}
                </h3>
                <ul className="space-y-2">
                  {t.packageDetails[packageKey].useCases.map(
                    (uc: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        {uc}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Footer actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition text-sm"
                >
                  {t.packageModal.close}
                </button>
                <a
                  href="#kontakt"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-primary-600 text-white font-semibold text-center hover:bg-primary-700 transition text-sm"
                >
                  {t.packageModal.inquire}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
