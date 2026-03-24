"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Locale = "de" | "en";

const translations = {
  de: {
    nav: {
      services: "Leistungen",
      packages: "Pakete",
      howItWorks: "So funktioniert's",
      testimonials: "Erfahrungen",
      blog: "Blog",
      cta: "Kostenlos beraten",
      process: "Ablauf",
      contact: "Kontakt",
    },
    hero: {
      badge: "100% lokal — 100% DSGVO-konform",
      title: "Ihre eigene KI",
      titleCity: "in Berlin.",
      description:
        "Wir installieren Ihre private KI direkt auf Ihrem Gerät. Keine Cloud. Keine Kompromisse. Vollständig DSGVO-konform — Ihre Daten verlassen nie Ihr Büro.",
      ctaPrimary: "Jetzt Beratung anfragen",
      ctaSecondary: "So funktioniert's",
      features: {
        dsgvo: "DSGVO-konform",
        location: "Vor-Ort in Berlin",
        noAbo: "Keine Abo-Kosten",
      },
      terminal: {
        title: "KIHause — Lokale KI",
        status: "Aktiv",
        privacy: "100% lokal",
        cloud: "Keine",
        placeholder: "Fragen Sie Ihre KI...",
      },
    },
    services: {
      badge: "Unsere Leistungen",
      title: "Alles für Ihre private KI",
      description:
        "Von der Hardware-Beratung bis zur laufenden Wartung — wir liefern Ihr schlüsselfertiges KI-System direkt in Berlin.",
      items: [
        {
          title: "Lokale KI-Installation",
          desc: "Wir richten Ihre private KI komplett auf Ihrem eigenen Gerät ein — Mac mini, MacBook Pro oder bestehende Hardware.",
        },
        {
          title: "100% Datenschutz",
          desc: "Ihre Daten verlassen nie Ihr Gerät. Keine Cloud, keine API-Aufrufe, kein Datenabfluss — vollständig DSGVO-konform.",
        },
        {
          title: "WhatsApp & Telegram Bot",
          desc: "Ihre KI antwortet direkt über WhatsApp oder Telegram — so einfach wie eine Nachricht an einen Freund.",
        },
        {
          title: "Workflow-Automatisierung",
          desc: "Individuelle Automatisierungen für Ihr Business: E-Mail-Entwürfe, Wettbewerbsanalyse, Content-Erstellung und mehr.",
        },
        {
          title: "Sicherer Fernzugriff",
          desc: "Via Tailscale greifen Sie sicher von überall auf Ihre KI zu — ohne Ihre Daten dem offenen Internet auszusetzen.",
        },
        {
          title: "Wartung & Support",
          desc: "Optionale vierteljährliche Wartung: Updates, Sicherheitsaudits, Backup Ihrer KI-Konfiguration und Priority-Support.",
        },
      ],
    },
    process: {
      badge: "In 4 Schritten",
      title: "So bekommen Sie Ihre eigene KI",
      description:
        "Von der ersten Anfrage bis zur fertigen KI — in der Regel innerhalb einer Woche.",
      steps: [
        {
          step: "01",
          title: "Erstgespräch",
          desc: "In einem 45-minütigen Video-Call besprechen wir Ihre Anforderungen, empfehlen das passende Paket und klären die Hardware-Frage.",
        },
        {
          step: "02",
          title: "Vorbereitung",
          desc: "Wir erstellen Ihren individuellen Werkvertrag, konfigurieren Ihre Skills und bereiten alles für die Installation vor.",
        },
        {
          step: "03",
          title: "Vor-Ort Installation",
          desc: "Wir kommen zu Ihnen nach Berlin, installieren Ihre KI, konfigurieren alle Kanäle und testen das gesamte System.",
        },
        {
          step: "04",
          title: "Einweisung & Übergabe",
          desc: "Sie erhalten eine persönliche Einweisung und einen gedruckten Setup-Guide. Danach gehört die KI ganz Ihnen.",
        },
      ],
    },
    packages: {
      badge: "Transparente Preise",
      title: "Einmalige Setup-Gebühr. Keine Abos.",
      description:
        "Alle Pakete sind einmalige Installations-Gebühren. Hardware wird separat beschafft.",
      popular: "Beliebteste Wahl",
      learnMore: "Mehr erfahren!",
      requestNow: "Jetzt anfragen",
      byod: {
        title: "Bring Your Own Device — ab €300",
        desc: "Sie haben bereits ein MacBook Pro oder Windows-PC? Schnell-Setup ab €300.",
        cta: "Details",
      },
      list: {
        A: {
          name: "Berlin Basics",
          target: "Tech-savvy Einzelpersonen",
          price: "€1.500",
          priceRange: "– 2.000",
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
        B: {
          name: "Business Brains",
          target: "Freelancer, Startups & Agenturen",
          price: "€3.500",
          priceRange: "– 4.000",
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
        C: {
          name: "Datenschutz Special",
          target: "Anwälte, Ärzte, Journalisten, HR",
          price: "€4.000",
          priceRange: "– 5.000",
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
      },
    },
    packageDetails: {
      A: {
        title: "Paket A: Berlin Basics",
        subtitle: "Der perfekte Einstieg in die private KI",
        description:
          "Dieses Paket richtet sich an technikaffine Einzelpersonen, die die volle Kontrolle über ihre Daten behalten möchten, ohne auf den Komfort moderner KI zu verzichten.",
        marketingPitch:
          "Schluss mit dem mulmigen Gefühl bei ChatGPT. Holen Sie sich die Kontrolle über Ihre Daten zurück.",
        idealFor: ["Soloselbstständige", "Berater", "Privatanwender"],
        roi: "Spart ca. 5-8 Stunden pro Woche bei Routineaufgaben.",
        workflow: [
          { title: "Ihre Eingabe", desc: "Via WhatsApp oder Mac" },
          { title: "Lokale KI", desc: "Verarbeitung auf Ihrem Gerät" },
          { title: "Ergebnis", desc: "100% privat & sicher" },
        ],
        features: [
          {
            title: "Hardware-Beratung",
            desc: "Wir analysieren Ihr Setup und empfehlen exakt die Hardware, die Sie benötigen.",
          },
          {
            title: "WhatsApp & Telegram Bot",
            desc: "Ihre KI ist immer in der Hosentasche dabei.",
          },
          {
            title: "Web-Suche & Kalender",
            desc: "Die KI kann aktuelle Informationen abrufen und Termine verwalten.",
          },
        ],
        useCasesTitle: "Typische Anwendungsfälle",
        useCases: [
          "Sicheres Verfassen von E-Mails ohne Datenabfluss an US-Server.",
          "Zusammenfassen von lokalen PDF-Dokumenten und Verträgen.",
          "Brainstorming und Ideengenerierung von unterwegs via Messenger.",
        ],
      },
      B: {
        title: "Paket B: Business Brains",
        subtitle: "Für Freelancer, Startups & Agenturen",
        description: "Machen Sie die KI zu Ihrem produktivsten Mitarbeiter.",
        marketingPitch:
          "Skalieren Sie Ihre Agentur oder Ihr Startup, ohne die Personalkosten zu sprengen.",
        idealFor: ["Marketing-Agenturen", "Startups", "KMUs", "Consultants"],
        roi: "Automatisiert bis zu 40% der textbasierten Team-Workflows.",
        workflow: [
          { title: "Team-Input", desc: "Via Slack, Teams oder Voice" },
          { title: "KI-Verarbeitung", desc: "Lokaler Server im Büro" },
          { title: "Automatisierung", desc: "E-Mails, PDFs, Analysen" },
        ],
        features: [
          {
            title: "Team-Integration (Slack/Teams)",
            desc: "Die KI wird als Bot in Ihren Firmen-Chat integriert.",
          },
          {
            title: "3 Individuelle Workflow-Automatisierungen",
            desc: "Wir programmieren maßgeschneiderte Skripte für Ihre Prozesse.",
          },
          {
            title: "Tailscale Fernzugriff",
            desc: "Sicherer VPN-Zugriff auf Ihre KI von überall auf der Welt.",
          },
        ],
        useCasesTitle: "Beispiele für Workflow-Automatisierungen",
        useCases: [
          "Wettbewerbsanalyse: Die KI crawlt wöchentlich die Websites Ihrer Konkurrenten.",
          "Content-Maschine: Sie sprechen ein Voice-Memo ein, die KI erstellt Blogpost, LinkedIn und Newsletter.",
          "Support-Triage: Eingehende Kunden-E-Mails werden lokal analysiert und kategorisiert.",
        ],
      },
      C: {
        title: "Paket C: Datenschutz Special",
        subtitle: "Maximale Sicherheit für sensible Berufe",
        description:
          "Entwickelt für Anwälte, Ärzte, HR-Abteilungen und Journalisten.",
        marketingPitch:
          "Für Berufsgeheimnisträger gibt es keine Kompromisse.",
        idealFor: ["Kanzleien & Notare", "Ärzte & Kliniken", "HR-Abteilungen"],
        roi: "100% Rechtssicherheit & Schutz vor Datenlecks.",
        workflow: [
          { title: "Sensible Daten", desc: "Patientenakten, Verträge" },
          { title: "Offline KI", desc: "Zero API-Calls nach außen" },
          { title: "Sicheres Ergebnis", desc: "Lokal & verschlüsselt" },
        ],
        features: [
          {
            title: "100% Offline LLM",
            desc: "Das System benötigt absolut keine Internetverbindung.",
          },
          {
            title: "High-End Hardware Spezifikation",
            desc: "Mac Studio oder Mac mini mit 64GB+ RAM.",
          },
          {
            title: "Compliance-Dokumentation",
            desc: "Schriftliche, anwaltlich geprüfte Dokumentation über die Datenflüsse.",
          },
        ],
        useCasesTitle: "Typische Anwendungsfälle",
        useCases: [
          "Kanzleien: Sicheres Zusammenfassen von Prozessakten und Entwurf von Schriftsätzen.",
          "Ärzte & Kliniken: Lokale Transkription von Patientengesprächen.",
          "Personalabteilungen: Automatisierte Auswertung von Bewerbungsunterlagen.",
        ],
      },
    },
    packageModal: {
      howItWorks: "Wie es funktioniert",
      close: "Schließen",
      perfectFor: "Perfekt für:",
      roi: "Ihr Mehrwert (ROI):",
      whatsIncluded: "Was ist enthalten?",
      inquire: "Jetzt anfragen",
    },
    comparison: {
      badge: "Datenschutz ist kein Feature — es ist das Fundament",
      title: "Cloud-KI vs. KIHause",
      quote:
        '"Wo gehen meine Daten hin?" — Bei KIHause ist die Antwort immer: Nirgendwohin.',
      rows: [
        {
          label: "Ihre Daten",
          cloud: "Server in den USA",
          local: "Auf Ihrem Gerät in Berlin",
        },
        {
          label: "DSGVO",
          cloud: "Fragliche Compliance",
          local: "100% konform by Design",
        },
        {
          label: "Datenzugriff",
          cloud: "Anbieter kann mitlesen",
          local: "Nur Sie haben Zugriff",
        },
        {
          label: "Internetpflicht",
          cloud: "Immer online nötig",
          local: "Paket C: komplett offline",
        },
        {
          label: "Kosten",
          cloud: "Monatliches Abo",
          local: "Einmalige Setup-Gebühr",
        },
        {
          label: "Kontrolle",
          cloud: "Anbieter entscheidet",
          local: "Sie entscheiden alles",
        },
      ],
      founderQuote:
        '"Jede Installation, die ich durchführe, besteht den Datenschutz-Test by Design. Die KI läuft auf Ihrer Hardware. Ihre Gespräche werden nur in Ihrem Zuhause oder Büro gespeichert. Es gibt keinen API-Call nach Amerika."',
      founderTitle: "KIHause Gründer",
    },
    about: {
      badge: "Über uns",
      title: "Lokale Expertise aus dem Herzen Berlins",
      p1: "Wir sind ein Team aus IT-Sicherheitsexperten und KI-Enthusiasten. Unser Ziel ist es, die immense Kraft der künstlichen Intelligenz für mittelständische Unternehmen, Kanzleien und Praxen nutzbar zu machen – ohne dabei die Datenhoheit aus der Hand zu geben.",
      p2: "Wir glauben, dass Datenschutz und modernste Technologie kein Widerspruch sein müssen. Mit KIHause bringen wir die Server-Infrastruktur dorthin zurück, wo sie hingehört: in Ihre eigenen Räumlichkeiten.",
      stat: "Inhabergeführt & Unabhängig",
    },
    techStack: {
      badge: "Technologie",
      title: "Unter der Haube Ihrer KI",
      description:
        "Leistungsstarke Hardware trifft auf führende Open-Source-Modelle.",
      hardware: {
        title: "Apple Silicon Hardware",
        desc: "Wir setzen bevorzugt auf Mac mini M4 Pro oder Mac Studio Modelle. Die Unified Memory Architektur von Apple ist derzeit ungeschlagen für das effiziente, lokale Ausführen großer Sprachmodelle.",
      },
      llms: {
        title: "Open-Source LLMs",
        desc: "Ihre KI wird von modernsten Open-Weights-Modellen wie Llama 3.2 (Meta) oder Mistral angetrieben. Diese Modelle bieten ChatGPT-ähnliche Leistung, laufen aber komplett offline.",
      },
      network: {
        title: "Sicheres Netzwerk",
        desc: "Der Fernzugriff wird über ein verschlüsseltes Tailscale-Netzwerk (WireGuard) realisiert. Keine offenen Ports, keine Angriffsfläche.",
      },
    },
    sectors: {
      badge: "Einsatzgebiete",
      title: "Wer profitiert am meisten?",
      description:
        "Eine lokale KI ist besonders dort wertvoll, wo sensible Daten verarbeitet werden.",
      items: [
        {
          title: "Kanzleien & Notare",
          desc: "Zusammenfassung von Akten, Entwurf von Schriftsätzen und Recherche unter strikter Einhaltung der anwaltlichen Schweigepflicht.",
        },
        {
          title: "Agenturen & Berater",
          desc: "Brainstorming, Texterstellung und Analyse von Kundendaten, ohne dass NDAs verletzt werden.",
        },
        {
          title: "Ärzte & Kliniken",
          desc: "Unterstützung bei der Arztbrieferstellung und Auswertung von Patientenakten. 100% DSGVO-konform.",
        },
        {
          title: "Personalabteilungen (HR)",
          desc: "Sicheres Sichten von Bewerbungsunterlagen und Auswerten von Mitarbeiterumfragen.",
        },
      ],
    },
    testimonials: {
      badge: "Erfahrungen",
      title: "Das sagen unsere Kunden",
      description: "Erfolgreiche Projekte und zufriedene Teams.",
      items: [
        {
          text: "Dank dem Berlin Basics Paket haben wir endlich einen sicheren, lokalen Chatbot für unsere sensiblen Mandantendaten.",
          company: "Name vertraulich",
          size: "Kanzlei, 5-10 Mitarbeiter",
          date: "März 2026",
          package: "Paket A: Berlin Basics",
        },
        {
          text: "Das Business Brains Paket hat unsere Content-Produktion revolutioniert.",
          company: "Name vertraulich",
          size: "Marketing-Agentur, 10-20 Mitarbeiter",
          date: "Februar 2026",
          package: "Paket B: Business Brains",
        },
        {
          text: "Mit dem Datenschutz Special verarbeiten wir zehntausende Dokumente lokal.",
          company: "Name vertraulich",
          size: "Industrieunternehmen, 50+ Mitarbeiter",
          date: "Januar 2026",
          package: "Paket C: Datenschutz Special",
        },
        {
          text: "Unsere Entwickler nutzen den lokalen Copilot täglich. Keine Latenz, absolute Datensicherheit.",
          company: "Name vertraulich",
          size: "Software-Boutique, 15 Mitarbeiter",
          date: "Dezember 2025",
          package: "Paket B: Business Brains",
        },
        {
          text: "Als Soloselbstständiger spare ich ca. 8 Stunden pro Woche bei Recherche und Texterstellung.",
          company: "Name vertraulich",
          size: "Unternehmensberatung, 1 Mitarbeiter",
          date: "März 2026",
          package: "Paket A: Berlin Basics",
        },
      ],
    },
    blog: {
      badge: "Aktuelles & Insights",
      title: "Neues aus dem KI-Labor",
      description:
        "Erfahren Sie mehr über lokale KI, Datenschutz und sichere Technologie.",
      readMore: "Weiterlesen",
      posts: [
        {
          category: "Branchen-Insights",
          date: "20. März 2026",
          title: "Warum lokale KI der neue Standard für Kanzleien wird",
          desc: "Mandantendaten in der Cloud? Für viele Kanzleien ein No-Go.",
        },
        {
          category: "Datenschutz",
          date: "15. März 2026",
          title: "Datenschutz-Mythen rund um ChatGPT & Co.",
          desc: '"Die Daten werden doch anonymisiert" – ein gefährlicher Irrtum.',
        },
        {
          category: "Hardware",
          date: "10. März 2026",
          title: "Hardware für KI: Was Sie wirklich im Büro brauchen",
          desc: "Von Mac Studio bis zu dedizierten Linux-Workstations.",
        },
      ],
    },
    contact: {
      badge: "Kostenloses Erstgespräch",
      title: "Bereit für Ihre eigene KI?",
      description:
        "Schreiben Sie uns — wir melden uns innerhalb von 4 Stunden.",
      email: "E-Mail",
      location: "Standort",
      locationDesc: "Berlin, Deutschland",
      locationSub: "Vor-Ort Installation in ganz Berlin",
      whatsapp: "WhatsApp",
      whatsappSub: "Antwort innerhalb von 4 Stunden",
      form: {
        name: "Name *",
        namePlaceholder: "Ihr Name",
        email: "E-Mail *",
        emailPlaceholder: "ihre@email.de",
        package: "Gewünschtes Paket",
        packagePlaceholder: "Bitte auswählen...",
        message: "Ihre Nachricht",
        messagePlaceholder: "Erzählen Sie uns kurz, was Sie vorhaben...",
        submit: "Via WhatsApp senden",
        privacy:
          "Ihre Daten werden nur für die Kontaktaufnahme verwendet. Kein Spam, versprochen.",
        options: {
          A: "Paket A: Berlin Basics",
          B: "Paket B: Business Brains",
          C: "Paket C: Datenschutz Special",
          BYOD: "Bring Your Own Device",
          consultation: "Allgemeine Beratung",
        },
      },
    },
    footer: {
      description:
        "Ihre eigene KI — auf Ihrem Gerät, in Berlin. Keine Cloud. Keine Kompromisse. Premium Private AI Installation & Consulting.",
      privacy: "Datenschutzerklärung",
      solutions: "Lösungen",
      legal: "Rechtliches",
      imprint: "Impressum",
      hosting: "Host KI in Berlin",
      specialists: "KI für Anwälte & Ärzte",
      macmini: "Mac mini KI-Zentrale",
      rights: "Alle Rechte vorbehalten.",
      tagline: "Ihre Daten. Ihre Hardware. Ihre KI.",
    },
    conversion: {
      justPurchased: "hat gerade",
      from: "aus",
      purchased: "gekauft",
      packageA: "Paket A: Berlin Basics",
      packageB: "Paket B: Business Brains",
      packageC: "Paket C: Datenschutz Special",
      consultation: "Allgemeine Beratung",
      timeAgo: "gerade eben",
    },
  },
  en: {
    nav: {
      services: "Services",
      packages: "Packages",
      howItWorks: "How it works",
      testimonials: "Testimonials",
      blog: "Blog",
      cta: "Free Consultation",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      badge: "100% local — 100% GDPR-compliant",
      title: "Your own AI",
      titleCity: "in Berlin.",
      description:
        "We install your private AI directly on your device. No cloud. No compromises. Fully GDPR-compliant — your data never leaves your office.",
      ctaPrimary: "Request consultation now",
      ctaSecondary: "How it works",
      features: {
        dsgvo: "GDPR-compliant",
        location: "On-site in Berlin",
        noAbo: "No subscription costs",
      },
      terminal: {
        title: "KIHause — Local AI",
        status: "Active",
        privacy: "100% local",
        cloud: "None",
        placeholder: "Ask your AI...",
      },
    },
    services: {
      badge: "Our Services",
      title: "Everything for your private AI",
      description:
        "From hardware consulting to ongoing maintenance — we deliver your turnkey AI system directly in Berlin.",
      items: [
        {
          title: "Local AI Installation",
          desc: "We set up your private AI completely on your own device — Mac mini, MacBook Pro, or existing hardware.",
        },
        {
          title: "100% Data Privacy",
          desc: "Your data never leaves your device. No cloud, no API calls, no data drain — fully GDPR-compliant.",
        },
        {
          title: "WhatsApp & Telegram Bot",
          desc: "Your AI responds directly via WhatsApp or Telegram — as easy as messaging a friend.",
        },
        {
          title: "Workflow Automation",
          desc: "Individual automations for your business: email drafts, competitor analysis, content creation, and more.",
        },
        {
          title: "Secure Remote Access",
          desc: "Access your AI safely from anywhere via Tailscale — without exposing your data to the open internet.",
        },
        {
          title: "Maintenance & Support",
          desc: "Optional quarterly maintenance: updates, security audits, backup of your AI configuration, and priority support.",
        },
      ],
    },
    process: {
      badge: "In 4 Steps",
      title: "How to get your own AI",
      description:
        "From the first inquiry to the finished AI — usually within a week.",
      steps: [
        {
          step: "01",
          title: "Initial Consultation",
          desc: "In a 45-minute video call, we discuss your requirements, recommend the right package, and clarify hardware questions.",
        },
        {
          step: "02",
          title: "Preparation",
          desc: "We create your individual service contract, configure your skills, and prepare everything for installation.",
        },
        {
          step: "03",
          title: "On-site Installation",
          desc: "We come to you in Berlin, install your AI, configure all channels, and test the entire system.",
        },
        {
          step: "04",
          title: "Training & Handover",
          desc: "You receive personal training and a printed setup guide. After that, the AI is all yours.",
        },
      ],
    },
    packages: {
      badge: "Transparent Pricing",
      title: "One-time setup fee. No subscriptions.",
      description:
        "All packages are one-time installation fees. Hardware is purchased separately.",
      popular: "Most Popular Choice",
      learnMore: "Learn more!",
      requestNow: "Request now",
      byod: {
        title: "Bring Your Own Device — from €300",
        desc: "Already have a MacBook Pro or Windows PC? Quick setup from €300.",
        cta: "Details",
      },
      list: {
        A: {
          name: "Berlin Basics",
          target: "Tech-savvy individuals",
          price: "€1,500",
          priceRange: "– 2,000",
          features: [
            "Hardware consulting (Mac mini / Laptop)",
            "Full AI installation & configuration",
            "WhatsApp / Telegram Bot set up",
            "Web search, calendar, email drafting",
            "Data privacy walkthrough (30 min.)",
            "Personal setup guide (PDF)",
            "1h post-setup support",
          ],
        },
        B: {
          name: "Business Brains",
          target: "Freelancers, Startups & Agencies",
          price: "€3,500",
          priceRange: "– 4,000",
          features: [
            "Everything from Package A",
            "Slack / Teams / Discord integration",
            "2–3 individual workflow automations",
            "Tailscale secure remote access",
            "Competitor & content skills",
            "Short GDPR compliance report",
            "Quarterly maintenance (€250/quarter)",
          ],
        },
        C: {
          name: "Privacy Special",
          target: "Lawyers, Doctors, Journalists, HR",
          price: "€4,000",
          priceRange: "– 5,000",
          features: [
            "Everything from Package B",
            "100% Offline LLM (Llama 3 / Mistral)",
            "Zero API calls — completely local",
            "Mac mini 64 GB+ RAM specification",
            "Written data privacy statement",
            "30 days priority support",
            "Compliance documentation",
          ],
        },
      },
    },
    packageDetails: {
      A: {
        title: "Package A: Berlin Basics",
        subtitle: "The perfect entry into private AI",
        description:
          "This package is aimed at tech-savvy individuals who want to retain full control over their data without sacrificing the convenience of modern AI.",
        marketingPitch:
          "Stop the uneasy feeling with ChatGPT. Take back control of your data.",
        idealFor: ["Solo entrepreneurs", "Consultants", "Private users"],
        roi: "Saves approx. 5-8 hours per week on routine tasks.",
        workflow: [
          { title: "Your Input", desc: "Via WhatsApp or Mac" },
          { title: "Local AI", desc: "Processing on your device" },
          { title: "Result", desc: "100% private & secure" },
        ],
        features: [
          {
            title: "Hardware Consulting",
            desc: "We analyze your setup and recommend exactly the hardware you need.",
          },
          {
            title: "WhatsApp & Telegram Bot",
            desc: "Your AI is always in your pocket.",
          },
          {
            title: "Web Search & Calendar",
            desc: "The AI can retrieve current information and manage appointments.",
          },
        ],
        useCasesTitle: "Typical Use Cases",
        useCases: [
          "Secure email drafting without data leakage to US servers.",
          "Summarizing local PDF documents and contracts.",
          "Brainstorming and idea generation on the go via messenger.",
        ],
      },
      B: {
        title: "Package B: Business Brains",
        subtitle: "For Freelancers, Startups & Agencies",
        description: "Make AI your most productive employee.",
        marketingPitch:
          "Scale your agency or startup without breaking the payroll.",
        idealFor: ["Marketing agencies", "Startups", "SMEs", "Consultants"],
        roi: "Automates up to 40% of text-based team workflows.",
        workflow: [
          { title: "Team Input", desc: "Via Slack, Teams or Voice" },
          { title: "AI Processing", desc: "Local server in the office" },
          { title: "Automation", desc: "Emails, PDFs, analyses" },
        ],
        features: [
          {
            title: "Team Integration (Slack/Teams)",
            desc: "The AI is integrated as a bot into your company chat.",
          },
          {
            title: "3 Individual Workflow Automations",
            desc: "We program custom scripts tailored to your processes.",
          },
          {
            title: "Tailscale Remote Access",
            desc: "Secure VPN access to your AI from anywhere in the world.",
          },
        ],
        useCasesTitle: "Examples of Workflow Automations",
        useCases: [
          "Competitor analysis: The AI crawls your competitors' websites weekly.",
          "Content machine: You record a voice memo, the AI creates blog post, LinkedIn and newsletter.",
          "Support triage: Incoming customer emails are analyzed and categorized locally.",
        ],
      },
      C: {
        title: "Package C: Privacy Special",
        subtitle: "Maximum security for sensitive professions",
        description:
          "Designed for lawyers, doctors, HR departments, and journalists.",
        marketingPitch:
          "For professionals bound by confidentiality, there are no compromises.",
        idealFor: ["Law firms & Notaries", "Doctors & Clinics", "HR departments"],
        roi: "100% legal certainty & protection against data leaks.",
        workflow: [
          { title: "Sensitive Data", desc: "Patient files, contracts" },
          { title: "Offline AI", desc: "Zero API calls to the outside" },
          { title: "Secure Result", desc: "Local & encrypted" },
        ],
        features: [
          {
            title: "100% Offline LLM",
            desc: "The system requires absolutely no internet connection.",
          },
          {
            title: "High-End Hardware Specification",
            desc: "Mac Studio or Mac mini with 64GB+ RAM.",
          },
          {
            title: "Compliance Documentation",
            desc: "Written, legally reviewed documentation of data flows.",
          },
        ],
        useCasesTitle: "Typical Use Cases",
        useCases: [
          "Law firms: Secure summarization of case files and drafting of pleadings.",
          "Doctors & Clinics: Local transcription of patient consultations.",
          "HR departments: Automated evaluation of application documents.",
        ],
      },
    },
    packageModal: {
      howItWorks: "How it works",
      close: "Close",
      perfectFor: "Perfect for:",
      roi: "Your Added Value (ROI):",
      whatsIncluded: "What's included?",
      inquire: "Inquire now",
    },
    comparison: {
      badge: "Privacy is not a feature — it is the foundation",
      title: "Cloud AI vs. KIHause",
      quote:
        '"Where does my data go?" — At KIHause, the answer is always: Nowhere.',
      rows: [
        {
          label: "Your Data",
          cloud: "Servers in the USA",
          local: "On your device in Berlin",
        },
        {
          label: "GDPR",
          cloud: "Questionable compliance",
          local: "100% compliant by design",
        },
        {
          label: "Data Access",
          cloud: "Provider can read along",
          local: "Only you have access",
        },
        {
          label: "Internet Requirement",
          cloud: "Always online needed",
          local: "Package C: completely offline",
        },
        {
          label: "Costs",
          cloud: "Monthly subscription",
          local: "One-time setup fee",
        },
        {
          label: "Control",
          cloud: "Provider decides",
          local: "You decide everything",
        },
      ],
      founderQuote:
        '"Every installation I perform passes the privacy-by-design test. The AI runs on your hardware. Your conversations are stored only in your home or office. There is no API call to America."',
      founderTitle: "KIHause Founder",
    },
    about: {
      badge: "About Us",
      title: "Local expertise from the heart of Berlin",
      p1: "We are a team of IT security experts and AI enthusiasts. Our goal is to make the immense power of artificial intelligence usable for medium-sized companies, law firms, and practices – without giving up data sovereignty.",
      p2: "We believe that data privacy and state-of-the-art technology do not have to be a contradiction. With KIHause, we bring the server infrastructure back to where it belongs: to your own premises.",
      stat: "Owner-managed & Independent",
    },
    techStack: {
      badge: "Technology",
      title: "Under the hood of your AI",
      description: "Powerful hardware meets leading open-source models.",
      hardware: {
        title: "Apple Silicon Hardware",
        desc: "We prefer Mac mini M4 Pro or Mac Studio models. Apple's Unified Memory architecture is currently unbeaten for efficient, local execution of large language models.",
      },
      llms: {
        title: "Open-Source LLMs",
        desc: "Your AI is powered by state-of-the-art open-weights models like Llama 3.2 (Meta) or Mistral. These models offer ChatGPT-like performance but run completely offline.",
      },
      network: {
        title: "Secure Network",
        desc: "Remote access is realized via an encrypted Tailscale network (WireGuard). No open ports on your router, no attack surface.",
      },
    },
    sectors: {
      badge: "Areas of Application",
      title: "Who benefits most?",
      description:
        "A local AI is particularly valuable where sensitive data is processed.",
      items: [
        {
          title: "Law Firms & Notaries",
          desc: "Summarizing files, drafting pleadings, and researching internal documents in strict compliance with attorney-client privilege.",
        },
        {
          title: "Agencies & Consultants",
          desc: "Brainstorming, text creation, and analysis of client data without violating NDAs.",
        },
        {
          title: "Doctors & Clinics",
          desc: "Support in creating medical reports and evaluating patient files. 100% GDPR-compliant.",
        },
        {
          title: "Human Resources (HR)",
          desc: "Secure screening of application documents and evaluation of internal employee surveys.",
        },
      ],
    },
    testimonials: {
      badge: "Experiences",
      title: "What our customers say",
      description: "Successful projects and satisfied teams.",
      items: [
        {
          text: "Thanks to the Berlin Basics package, we finally have a secure, local chatbot for our sensitive client data.",
          company: "Name confidential",
          size: "Law firm, 5-10 employees",
          date: "March 2026",
          package: "Package A: Berlin Basics",
        },
        {
          text: "Business Brains has revolutionized our content production.",
          company: "Name confidential",
          size: "Marketing agency, 10-20 employees",
          date: "February 2026",
          package: "Package B: Business Brains",
        },
        {
          text: "With Privacy Special we process tens of thousands of documents locally.",
          company: "Name confidential",
          size: "Industrial company, 50+ employees",
          date: "January 2026",
          package: "Package C: Privacy Special",
        },
        {
          text: "Our developers use the local Copilot daily. No latency, absolute data security.",
          company: "Name confidential",
          size: "Software boutique, 15 employees",
          date: "December 2025",
          package: "Package B: Business Brains",
        },
        {
          text: "As a solo entrepreneur I save about 8 hours per week on research and content creation.",
          company: "Name confidential",
          size: "Management consulting, 1 employee",
          date: "March 2026",
          package: "Package A: Berlin Basics",
        },
      ],
    },
    blog: {
      badge: "News & Insights",
      title: "News from the AI Lab",
      description:
        "Learn more about local AI, data privacy, and secure technology.",
      readMore: "Read more",
      posts: [
        {
          category: "Industry Insights",
          date: "March 20, 2026",
          title: "Why local AI is becoming the new standard for law firms",
          desc: "Client data in the cloud? For many law firms, a no-go.",
        },
        {
          category: "Data Privacy",
          date: "March 15, 2026",
          title: "Privacy myths about ChatGPT & Co.",
          desc: '"The data is anonymized anyway" — a dangerous misconception.',
        },
        {
          category: "Hardware",
          date: "March 10, 2026",
          title: "Hardware for AI: What you really need in the office",
          desc: "From Mac Studio to dedicated Linux workstations.",
        },
      ],
    },
    contact: {
      badge: "Free Initial Consultation",
      title: "Ready for your own AI?",
      description: "Write to us — we will get back within 4 hours.",
      email: "Email",
      location: "Location",
      locationDesc: "Berlin, Germany",
      locationSub: "On-site installation throughout Berlin",
      whatsapp: "WhatsApp",
      whatsappSub: "Response within 4 hours",
      form: {
        name: "Name *",
        namePlaceholder: "Your name",
        email: "Email *",
        emailPlaceholder: "your@email.com",
        package: "Desired package",
        packagePlaceholder: "Please select...",
        message: "Your message",
        messagePlaceholder: "Tell us briefly what you have in mind...",
        submit: "Send via WhatsApp",
        privacy:
          "Your data will only be used for contact purposes. No spam, we promise.",
        options: {
          A: "Package A: Berlin Basics",
          B: "Package B: Business Brains",
          C: "Package C: Privacy Special",
          BYOD: "Bring Your Own Device",
          consultation: "General Consultation",
        },
      },
    },
    footer: {
      description:
        "Your own AI — on your device, in Berlin. No cloud. No compromises. Premium Private AI Installation & Consulting.",
      privacy: "Privacy Policy",
      solutions: "Solutions",
      legal: "Legal",
      imprint: "Imprint",
      hosting: "Host AI in Berlin",
      specialists: "AI for Lawyers & Doctors",
      macmini: "Mac mini AI Hub",
      rights: "All rights reserved.",
      tagline: "Your data. Your hardware. Your AI.",
    },
    conversion: {
      justPurchased: "just purchased",
      from: "from",
      purchased: "",
      packageA: "Package A: Berlin Basics",
      packageB: "Package B: Business Brains",
      packageC: "Package C: Privacy Special",
      consultation: "General Consultation",
      timeAgo: "just now",
    },
  },
} as const;

export type Translations = typeof translations.de;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const stored = localStorage.getItem("kihause-lang") as Locale | null;
    if (stored === "de" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = "de";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("kihause-lang", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = translations[locale] as Translations;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(): Translations {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslations must be used within an I18nProvider");
  }
  return context.t;
}

export function useLanguage(): { locale: Locale; setLocale: (locale: Locale) => void } {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLanguage must be used within an I18nProvider");
  }
  return { locale: context.locale, setLocale: context.setLocale };
}
