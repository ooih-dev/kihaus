"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Erstgespräch",
    description:
      "In einem 45-minütigen Video-Call besprechen wir Ihre Anforderungen, empfehlen das passende Paket und klären die Hardware-Frage.",
  },
  {
    step: "02",
    title: "Vorbereitung",
    description:
      "Wir erstellen Ihren individuellen Werkvertrag, konfigurieren Ihre Skills und bereiten alles für die Installation vor.",
  },
  {
    step: "03",
    title: "Vor-Ort Installation",
    description:
      "Wir kommen zu Ihnen nach Berlin, installieren Ihre KI, konfigurieren alle Kanäle und testen das gesamte System.",
  },
  {
    step: "04",
    title: "Einweisung & Übergabe",
    description:
      "Sie erhalten eine persönliche Einweisung und einen gedruckten Setup-Guide. Danach gehört die KI ganz Ihnen.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            In 4 Schritten
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            So bekommen Sie Ihre{" "}
            <span className="gradient-text">eigene KI</span>
          </h2>
          <p className="text-lg text-slate-500">
            Von der ersten Anfrage bis zur fertigen KI — in der Regel innerhalb einer Woche.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-accent-400" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:py-12 ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                <div
                  className={`${
                    i % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-5xl font-bold text-primary-100">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-md">
                    {s.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
