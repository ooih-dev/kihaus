"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              Kostenloses Erstgespräch
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Bereit für Ihre{" "}
              <span className="gradient-text">eigene KI?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Schreiben Sie uns — wir melden uns innerhalb von 4 Stunden für ein
              unverbindliches Erstgespräch. Alles bleibt unter uns, selbstverständlich.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">E-Mail</div>
                  <a href="mailto:hallo@spreeki.de" className="text-primary-600 hover:underline">
                    hallo@spreeki.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Standort</div>
                  <p className="text-slate-500">Berlin, Deutschland</p>
                  <p className="text-sm text-slate-400">Vor-Ort Installation in ganz Berlin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Antwortzeit</div>
                  <p className="text-slate-500">Innerhalb von 4 Stunden</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="rounded-2xl bg-slate-50 border border-slate-200 p-8 space-y-5"
              action="https://formspree.io/f/placeholder"
              method="POST"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Gewünschtes Paket
                </label>
                <select
                  id="package"
                  name="package"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Bitte auswählen...</option>
                  <option value="a">Paket A — Berlin Basics (€1.500–€2.000)</option>
                  <option value="b">Paket B — Business Brains (€3.500–€4.000)</option>
                  <option value="c">Paket C — Datenschutz Special (€4.000–€5.000)</option>
                  <option value="d">Paket D — Bring Your Own Device (ab €300)</option>
                  <option value="unsure">Noch unsicher — Beratung gewünscht</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Erzählen Sie uns kurz, was Sie vorhaben..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
              >
                Nachricht senden
              </button>

              <p className="text-xs text-slate-400 text-center">
                Ihre Daten werden nur für die Kontaktaufnahme verwendet. Kein Spam, versprochen.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
