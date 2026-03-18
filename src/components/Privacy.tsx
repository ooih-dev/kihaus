"use client";

import { motion } from "framer-motion";

const comparisons = [
  { feature: "Ihre Daten", cloud: "Server in den USA", spreeki: "Auf Ihrem Gerät in Berlin" },
  { feature: "DSGVO", cloud: "Fragliche Compliance", spreeki: "100% konform by Design" },
  { feature: "Datenzugriff", cloud: "Anbieter kann mitlesen", spreeki: "Nur Sie haben Zugriff" },
  { feature: "Internetpflicht", cloud: "Immer online nötig", spreeki: "Paket C: komplett offline" },
  { feature: "Kosten", cloud: "Monatliches Abo", spreeki: "Einmalige Setup-Gebühr" },
  { feature: "Kontrolle", cloud: "Anbieter entscheidet", spreeki: "Sie entscheiden alles" },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-300 text-sm font-medium mb-4">
            Datenschutz ist kein Feature — es ist das Fundament
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Cloud-KI vs.{" "}
            <span className="gradient-text">SpreeKI</span>
          </h2>
          <p className="text-lg text-slate-400">
            &ldquo;Wo gehen meine Daten hin?&rdquo; — Bei SpreeKI ist die Antwort immer: Nirgendwohin.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-slate-700">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-800">
              <div className="p-4 text-sm font-medium text-slate-400" />
              <div className="p-4 text-sm font-semibold text-red-400 text-center">
                Cloud-KI (ChatGPT & Co.)
              </div>
              <div className="p-4 text-sm font-semibold text-accent-400 text-center">
                SpreeKI (Lokal)
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${
                  i % 2 === 0 ? "bg-slate-800/50" : "bg-slate-800/30"
                }`}
              >
                <div className="p-4 text-sm font-medium text-white">
                  {c.feature}
                </div>
                <div className="p-4 text-sm text-slate-400 text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{c.cloud}</span>
                </div>
                <div className="p-4 text-sm text-white text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{c.spreeki}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-xl italic text-slate-300 leading-relaxed">
            &ldquo;Jede Installation, die ich durchführe, besteht den Datenschutz-Test by Design.
            Die KI läuft auf Ihrer Hardware. Ihre Gespräche werden nur in Ihrem Zuhause
            oder Büro gespeichert. Es gibt keinen API-Call nach Amerika.&rdquo;
          </p>
          <footer className="mt-4 text-primary-400 font-medium">
            — SpreeKI Gründer
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
