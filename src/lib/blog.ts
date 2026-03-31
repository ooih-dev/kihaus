export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  targetPackage: "a" | "b" | "c" | "d";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "anthropic-ipo-analyse-2026",
    title: "Anthropic IPO: Der 380-Milliarden-Dollar-KI-Riese geht an die Börse — Rakete oder Rohrkrepierer?",
    description: "Eine analytische Tiefenanalyse des möglicherweise größten Tech-Börsengangs 2026. Umsatz-Charts, Szenario-Analyse, historische Vergleiche und worauf das Smart Money achtet.",
    date: "2026-03-31",
    readingTime: "10 Min.",
    category: "Analyse",
    tags: ["Anthropic IPO", "Claude AI Börsengang", "KI Aktie 2026", "Anthropic Bewertung", "Tech IPO Analyse", "KI Investment", "OpenAI vs Anthropic"],
    targetPackage: "b",
  },
  {
    slug: "anthropic-ipo-analysis-2026",
    title: "Anthropic IPO: The $380B AI Giant Goes Public — Will It Moon or Melt?",
    description: "An analytical deep-dive into what could be the biggest tech IPO of 2026. Revenue charts, scenario analysis, historical comparisons, and what smart money is watching.",
    date: "2026-03-31",
    readingTime: "10 Min.",
    category: "Analysis",
    tags: ["Anthropic IPO", "Claude AI IPO", "AI stock 2026", "Anthropic valuation", "tech IPO analysis", "AI investment", "OpenAI vs Anthropic"],
    targetPackage: "b",
  },
  {
    slug: "chatgpt-datenschutz-risiko-kanzlei",
    title: "Warum ChatGPT für Ihre Kanzlei ein Datenschutz-Risiko ist",
    description: "Jede Eingabe in ChatGPT verlässt Ihr Büro. Mandantennamen, Aktenzeichen, vertrauliche Sachverhalte — alles landet auf US-Servern. Warum das für Kanzleien problematisch ist.",
    date: "2026-03-27",
    readingTime: "5 Min.",
    category: "Datenschutz",
    tags: ["ChatGPT Kanzlei", "DSGVO Anwalt", "KI Datenschutz", "anwaltliche Schweigepflicht", "lokale KI Kanzlei"],
    targetPackage: "c",
  },
  {
    slug: "was-ist-lokales-ki-modell",
    title: "Was ist ein lokales KI-Modell? Einfach erklärt",
    description: "KI-Systeme können direkt auf einem Gerät in Ihrem Büro laufen — ganz ohne Internet und Cloud. Was das bedeutet und warum es für Unternehmen die bessere Wahl ist.",
    date: "2026-03-27",
    readingTime: "4 Min.",
    category: "Grundlagen",
    tags: ["lokales KI-Modell", "KI ohne Cloud", "KI erklärt", "private KI", "DSGVO KI"],
    targetPackage: "a",
  },
  {
    slug: "warum-ki-in-berlin-selbst-hosten",
    title: "Warum ich meine KI in Berlin selbst hoste",
    description:
      "Jeden Tag schicken Berliner Professionals ihre vertraulichen Daten an Server in den USA. Warum ich aufgehört habe — und wie Sie das auch können.",
    date: "2026-03-15",
    readingTime: "6 Min.",
    category: "Datenschutz",
    tags: ["private KI Berlin", "KI selbst hosten", "lokale KI", "Datenschutz KI", "DSGVO"],
    targetPackage: "b",
  },
  {
    slug: "ki-fuer-anwaelte-und-aerzte",
    title: "KI für Anwälte und Ärzte — ohne Cloud",
    description:
      "ChatGPT in der Kanzlei? Das kann gegen § 203 StGB verstoßen. So nutzen Berliner Anwälte und Ärzte KI — vollständig lokal und rechtskonform.",
    date: "2026-03-12",
    readingTime: "7 Min.",
    category: "Branche",
    tags: ["KI für Anwälte", "KI für Ärzte", "Berufsgeheimnis", "§ 203 StGB", "DSGVO KI Arzt"],
    targetPackage: "c",
  },
  {
    slug: "mac-mini-private-ki-zentrale",
    title: "Mac mini als private KI-Zentrale einrichten",
    description:
      "Der M4 Pro Mac mini ist die perfekte Hardware für Ihre lokale KI. Welche Specs Sie brauchen, was die Installation umfasst — und wo die meisten scheitern.",
    date: "2026-03-08",
    readingTime: "8 Min.",
    category: "Anleitung",
    tags: ["Mac mini KI", "Ollama Mac mini", "lokale KI Mac", "private KI Zentrale", "KI einrichten"],
    targetPackage: "a",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug);
}
