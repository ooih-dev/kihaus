"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary-50 to-accent-400/10 animate-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              100% lokal — 100% DSGVO-konform
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Ihre eigene{" "}
              <span className="gradient-text">KI</span>
              <br />
              <span className="text-slate-400">in Berlin.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-lg mb-8 leading-relaxed">
              Wir installieren Ihre private KI direkt auf Ihrem Gerät. Keine
              Cloud. Keine Kompromisse. Vollständig DSGVO-konform —{" "}
              <strong>Ihre Daten verlassen nie Ihr Büro.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
              >
                Jetzt Beratung anfragen
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-lg hover:border-primary-300 hover:text-primary-700 transition-all"
              >
                So funktioniert&apos;s
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                DSGVO-konform
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Vor-Ort in Berlin
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Keine Abo-Kosten
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal mockup */}
              <div className="rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/30 overflow-hidden pulse-glow">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    SpreeKI — Lokale KI
                  </span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="text-slate-400">
                    <span className="text-accent-400">$</span> spreeki status
                  </div>
                  <div className="text-slate-300">
                    <span className="text-primary-400">System:</span> Mac mini M4 Pro
                  </div>
                  <div className="text-slate-300">
                    <span className="text-primary-400">Modell:</span> Llama 3.2 (lokal)
                  </div>
                  <div className="text-slate-300">
                    <span className="text-primary-400">Status:</span>{" "}
                    <span className="text-accent-400">Aktiv</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-primary-400">Datenschutz:</span>{" "}
                    <span className="text-accent-400">100% lokal</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-primary-400">Cloud-Verbindung:</span>{" "}
                    <span className="text-red-400">Keine</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700">
                    <span className="text-slate-400">
                      <span className="text-accent-400">$</span> Fragen Sie Ihre KI...
                    </span>
                    <span className="inline-block w-2 h-4 bg-accent-400 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white shadow-lg border border-slate-100 text-sm font-medium"
              >
                <span className="text-accent-500 mr-1">&#9679;</span> DSGVO Konform
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white shadow-lg border border-slate-100 text-sm font-medium"
              >
                <span className="text-primary-500 mr-1">&#9679;</span> Berlin, DE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
