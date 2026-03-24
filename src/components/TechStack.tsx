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
    <section id="tech-stack" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {t.techStack.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.techStack.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.techStack.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
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
