"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Lokale KI-Installation",
    titleEn: "Local AI Installation",
    description:
      "Wir richten Ihre private KI komplett auf Ihrem eigenen Gerät ein — Mac mini, MacBook Pro oder bestehende Hardware.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "100% Datenschutz",
    titleEn: "100% Data Privacy",
    description:
      "Ihre Daten verlassen nie Ihr Gerät. Keine Cloud, keine API-Aufrufe, kein Datenabfluss — vollständig DSGVO-konform.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "WhatsApp & Telegram Bot",
    titleEn: "WhatsApp & Telegram Bot",
    description:
      "Ihre KI antwortet direkt über WhatsApp oder Telegram — so einfach wie eine Nachricht an einen Freund.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Workflow-Automatisierung",
    titleEn: "Workflow Automation",
    description:
      "Individuelle Automatisierungen für Ihr Business: E-Mail-Entwürfe, Wettbewerbsanalyse, Content-Erstellung und mehr.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Sicherer Fernzugriff",
    titleEn: "Secure Remote Access",
    description:
      "Via Tailscale greifen Sie sicher von überall auf Ihre KI zu — ohne Ihre Daten dem offenen Internet auszusetzen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Wartung & Support",
    titleEn: "Maintenance & Support",
    description:
      "Optionale vierteljährliche Wartung: Updates, Sicherheitsaudits, Backup Ihrer KI-Konfiguration und Priority-Support.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            Unsere Leistungen
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Alles für Ihre{" "}
            <span className="gradient-text">private KI</span>
          </h2>
          <p className="text-lg text-slate-500">
            Von der Hardware-Beratung bis zur laufenden Wartung — wir liefern
            Ihr schlüsselfertiges KI-System direkt in Berlin.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
