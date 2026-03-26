"use client";

import { useState } from "react";
import { useTranslations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [pkg, setPkg] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `${t.whatsappModal.form.name}: ${name}\n${t.whatsappModal.form.package}: ${pkg}\n${t.whatsappModal.form.message}: ${message}`;
    window.open(
      `https://wa.me/491776525804?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setOpen(false);
  };

  return (
    <>
      {/* FAB — mobile only */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 transition-colors"
          aria-label="Open WhatsApp contact"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="whatsapp-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-t-2xl p-6 w-full max-w-lg mx-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {t.whatsappModal.title}
                  </h3>
                  <p className="text-sm text-slate-500">{t.whatsappModal.subtitle}</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors ml-4 flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t.whatsappModal.form.name}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.whatsappModal.form.namePlaceholder}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                {/* Package select */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t.whatsappModal.form.package}
                  </label>
                  <select
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">{t.whatsappModal.form.packagePlaceholder}</option>
                    <option value={t.whatsappModal.form.options.A}>
                      {t.whatsappModal.form.options.A}
                    </option>
                    <option value={t.whatsappModal.form.options.B}>
                      {t.whatsappModal.form.options.B}
                    </option>
                    <option value={t.whatsappModal.form.options.C}>
                      {t.whatsappModal.form.options.C}
                    </option>
                    <option value={t.whatsappModal.form.options.consultation}>
                      {t.whatsappModal.form.options.consultation}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {t.whatsappModal.form.message}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.whatsappModal.form.messagePlaceholder}
                    rows={3}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-emerald-500 text-white rounded-xl w-full py-3 font-semibold hover:bg-emerald-600 transition-colors"
                >
                  {t.whatsappModal.form.submit}
                </button>

                {/* Privacy note */}
                <p className="text-xs text-slate-400 text-center">
                  {t.whatsappModal.form.privacy}
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
