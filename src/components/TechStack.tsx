"use client";

import { useTranslations } from "@/lib/i18n";
import { Cpu, Brain, Shield } from "lucide-react";

export default function TechStack() {
  const t = useTranslations();

  const cards = [
    {
      icon: Cpu,
      title: t.techStack.hardware.title,
      desc: t.techStack.hardware.desc,
    },
    {
      icon: Brain,
      title: t.techStack.llms.title,
      desc: t.techStack.llms.desc,
    },
    {
      icon: Shield,
      title: t.techStack.network.title,
      desc: t.techStack.network.desc,
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
            {t.techStack.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {t.techStack.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.techStack.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
