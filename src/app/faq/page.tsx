"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const faqs = [
  {
    category: "Allgemein",
    questions: [
      {
        q: "Was genau ist lokale KI?",
        a: "Lokale KI bedeutet, dass ein leistungsfähiges KI-Modell (z.B. Llama, Mistral) direkt auf Ihrer Hardware läuft — auf einem Mac mini, MacBook Pro oder Windows-PC in Ihrem Büro. Ihre Daten verlassen nie Ihr Gerät. Keine Cloud, keine externen Server, keine API-Aufrufe.",
      },
      {
        q: "Wie unterscheidet sich das von ChatGPT?",
        a: "Bei ChatGPT werden alle Ihre Eingaben an Server in den USA gesendet und dort verarbeitet. Bei KIHause bleibt alles lokal: Ihre Fragen, Dokumente und Antworten existieren nur auf Ihrem eigenen Gerät. Das ist besonders relevant für Unternehmen mit Vertraulichkeits- und Compliance-Anforderungen.",
      },
      {
        q: "Für wen ist KIHause gedacht?",
        a: "KIHause richtet sich an Unternehmen, Freiberufler und Praxen in Deutschland, die KI nutzen möchten, ohne Daten an Cloud-Anbieter zu senden. Besonders geeignet für Anwaltskanzleien, Arztpraxen, Agenturen, HR-Abteilungen und alle, die mit vertraulichen Daten arbeiten.",
      },
    ],
  },
  {
    category: "Hardware & Technik",
    questions: [
      {
        q: "Welche Hardware brauche ich?",
        a: "Für die meisten Anwendungsfälle empfehlen wir einen Apple Mac mini mit M4-Chip und mindestens 32 GB RAM (ideal: 64 GB). Alternativ funktionieren auch MacBook Pro oder leistungsstarke Windows-PCs mit ausreichend Arbeitsspeicher. Wir beraten Sie im Erstgespräch zur optimalen Konfiguration.",
      },
      {
        q: "Kann ich meine vorhandene Hardware nutzen?",
        a: "Ja! Mit unserem BYOD-Paket (Bring Your Own Device) ab €300 installieren wir die KI auf Ihrem bestehenden Mac oder PC, sofern die Hardware die Mindestanforderungen erfüllt. Im Erstgespräch prüfen wir, ob Ihr Gerät geeignet ist.",
      },
      {
        q: "Wie schnell ist eine lokale KI im Vergleich zur Cloud?",
        a: "Auf aktueller Hardware (z.B. Mac mini M4, 64 GB RAM) generiert eine lokale KI Antworten in Echtzeit — vergleichbar mit Cloud-Diensten. Für die meisten Business-Anwendungen (E-Mail-Entwurf, Zusammenfassungen, Recherche) bemerken Sie keinen Unterschied.",
      },
      {
        q: "Brauche ich eine Internetverbindung?",
        a: "Für die KI-Kernfunktion: Nein. Das Modell läuft komplett offline. Für optionale Features wie Web-Suche, WhatsApp-/Telegram-Bot oder Kalender-Integration ist eine Internetverbindung erforderlich.",
      },
    ],
  },
  {
    category: "Datenschutz & DSGVO",
    questions: [
      {
        q: "Ist die Lösung DSGVO-konform?",
        a: "Ja, vollständig. Da alle Daten lokal auf Ihrem Gerät verarbeitet werden und keine Übertragung an Dritte stattfindet, erfüllen Sie automatisch die strengsten Anforderungen der DSGVO. Es gibt keinen Auftragsverarbeiter, keine Drittlandübermittlung und kein Risiko eines Datenabflusses.",
      },
      {
        q: "Kann ich das für Mandanten-/Patientendaten nutzen?",
        a: "Ja. Gerade für Berufsgeheimnisträger (Anwälte, Ärzte, Steuerberater) ist lokale KI die einzige Möglichkeit, KI rechtssicher mit vertraulichen Daten zu nutzen. Mit unserem Paket C erhalten Sie zusätzlich eine schriftliche Datenschutz-Erklärung und Compliance-Dokumentation.",
      },
      {
        q: "Werden meine Daten zum Training verwendet?",
        a: "Nein, niemals. Das KI-Modell läuft lokal und sendet keine Daten nach außen. Ihre Eingaben werden nicht zum Training verwendet, nicht gespeichert und nicht an Dritte weitergegeben.",
      },
    ],
  },
  {
    category: "Service & Support",
    questions: [
      {
        q: "Wie läuft die Installation ab?",
        a: "Nach einem Erstgespräch (45 Min., per Video) kommen wir direkt zu Ihnen nach Berlin. Wir installieren die KI, konfigurieren alle gewünschten Kanäle (WhatsApp, Telegram, Slack etc.), testen das System und geben Ihnen eine persönliche Einweisung. In der Regel sind wir innerhalb einer Woche fertig.",
      },
      {
        q: "Bieten Sie laufenden Support an?",
        a: "Ja. In den Paketen B und C ist vierteljährliche Wartung enthalten (Updates, Sicherheitsaudits, Backup). Zusätzlich bieten wir Priority-Support per WhatsApp und E-Mail. Paket A enthält 1 Stunde Post-Setup-Support.",
      },
      {
        q: "Was kostet das?",
        a: "Unsere Pakete starten bei €1.500 (Berlin Basics) bis €5.000 (Datenschutz Special). Es handelt sich um einmalige Setup-Gebühren — keine Abos, keine monatlichen Kosten. Hardware wird separat beschafft. Details finden Sie auf unserer Preisseite.",
      },
      {
        q: "Installieren Sie auch außerhalb von Berlin?",
        a: "Aktuell bieten wir Vor-Ort-Installation primär in Berlin und Umgebung an. Für andere Standorte in Deutschland können wir Remote-Installation und -Support anbieten. Kontaktieren Sie uns für individuelle Lösungen.",
      },
    ],
  },
  {
    category: "Integrationen",
    questions: [
      {
        q: "Welche Integrationen sind möglich?",
        a: "WhatsApp, Telegram, Slack, Microsoft Teams, Discord, E-Mail, Google Kalender, Web-Suche und viele mehr. Wir richten im Paket B/C individuelle Workflow-Automatisierungen ein — z.B. automatische E-Mail-Entwürfe, Wettbewerbsanalyse oder Content-Erstellung.",
      },
      {
        q: "Kann ich von unterwegs auf meine KI zugreifen?",
        a: "Ja, über Tailscale — ein sicheres VPN, das Ihre KI-Verbindung verschlüsselt, ohne Ihre Daten dem offenen Internet auszusetzen. So nutzen Sie Ihre lokale KI sicher von überall — ohne Cloud-Umweg.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-slate-900 group-hover:text-emerald-600 transition-colors pr-4">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-slate-600 leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
              Häufige Fragen
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              FAQ
            </h1>
            <p className="text-lg text-slate-500">
              Alles, was Sie über lokale KI, Datenschutz und unseren Service
              wissen müssen.
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-semibold text-emerald-600 mb-4">
                  {section.category}
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 px-6">
                  {section.questions.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 mb-6">
              Ihre Frage ist nicht dabei? Kontaktieren Sie uns direkt!
            </p>
            <a
              href="https://wa.me/491776525804?text=Hallo%20KIHause!%20Ich%20habe%20eine%20Frage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Via WhatsApp fragen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
