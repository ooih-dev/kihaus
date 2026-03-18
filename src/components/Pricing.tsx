"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Berlin Basics",
    tag: "Paket A",
    price: "1.500 – 2.000",
    target: "Tech-savvy Einzelpersonen",
    popular: false,
    features: [
      "Hardware-Beratung (Mac mini / Laptop)",
      "Vollständige KI-Installation & Konfiguration",
      "WhatsApp / Telegram Bot eingerichtet",
      "Web-Suche, Kalender, E-Mail-Entwurf",
      "Datenschutz-Walkthrough (30 Min.)",
      "Persönlicher Setup-Guide (PDF)",
      "1h Post-Setup Support",
    ],
  },
  {
    name: "Business Brains",
    tag: "Paket B",
    price: "3.500 – 4.000",
    target: "Freelancer, Startups & Agenturen",
    popular: true,
    features: [
      "Alles aus Paket A",
      "Slack / Teams / Discord Integration",
      "2–3 individuelle Workflow-Automatisierungen",
      "Tailscale sicherer Fernzugriff",
      "Wettbewerbs- & Content-Skills",
      "DSGVO-Compliance Kurzgutachten",
      "Vierteljährliche Wartung (€250/Quartal)",
    ],
  },
  {
    name: "Datenschutz Special",
    tag: "Paket C",
    price: "4.000 – 5.000",
    target: "Anwälte, Ärzte, Journalisten, HR",
    popular: false,
    features: [
      "Alles aus Paket B",
      "100% Offline LLM (Llama 3 / Mistral)",
      "Zero API-Aufrufe — komplett lokal",
      "Mac mini 64 GB+ RAM Spezifikation",
      "Schriftliche Datenschutz-Erklärung",
      "30 Tage Priority Support",
      "Compliance-Dokumentation",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            Transparente Preise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Einmalige Setup-Gebühr.{" "}
            <span className="gradient-text">Keine Abos.</span>
          </h2>
          <p className="text-lg text-slate-500">
            Alle Pakete sind einmalige Installations-Gebühren. Hardware wird separat beschafft.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-600/30 scale-[1.02] ring-4 ring-primary-300/20"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-500 text-white text-xs font-bold uppercase tracking-wider">
                  Beliebteste Wahl
                </div>
              )}

              <div className={`text-sm font-medium mb-1 ${pkg.popular ? "text-primary-200" : "text-primary-600"}`}>
                {pkg.tag}
              </div>
              <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
              <p className={`text-sm mb-6 ${pkg.popular ? "text-primary-200" : "text-slate-500"}`}>
                {pkg.target}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">€{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-accent-400" : "text-accent-500"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${pkg.popular ? "text-white/90" : "text-slate-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 rounded-xl font-semibold transition-all ${
                  pkg.popular
                    ? "bg-white text-primary-700 hover:bg-primary-50"
                    : "bg-primary-600 text-white hover:bg-primary-700"
                }`}
              >
                Jetzt anfragen
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* BYOD mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-100 border border-slate-200">
            <div className="text-left">
              <div className="font-semibold text-slate-900">
                Bring Your Own Device — ab €300
              </div>
              <p className="text-sm text-slate-500">
                Sie haben bereits ein MacBook Pro oder Windows-PC? Schnell-Setup ab €300.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-5 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              Details
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
