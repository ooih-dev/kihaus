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
  {
    slug: "dsgvo-ki-arztpraxis",
    title: "DSGVO-konforme KI für Arztpraxen: Patientendaten sicher verwalten",
    description:
      "Patientendaten in ChatGPT eingeben? Das ist ein schwerwiegender Datenschutzverstoß. Wie Arztpraxen KI nutzen können — vollständig lokal, ohne Cloud und ohne DSGVO-Risiko.",
    date: "2026-03-28",
    readingTime: "6 Min.",
    category: "Branche",
    tags: ["KI Arztpraxis", "DSGVO Gesundheitsdaten", "lokale KI Arzt", "Patientendaten Datenschutz", "KI Praxis DSGVO"],
    targetPackage: "c",
  },
  {
    slug: "ki-agentur-ohne-datenleck",
    title: "KI in der Agentur: Kreativ arbeiten ohne Datenleck",
    description:
      "Agenturen nutzen KI täglich — und geben dabei Kundendaten, NDAs und unveröffentlichte Kampagnen an Cloud-Server weiter. Wie Sie KI nutzen und Ihre Kunden schützen.",
    date: "2026-03-28",
    readingTime: "5 Min.",
    category: "Branche",
    tags: ["KI Agentur", "DSGVO Agentur", "lokale KI Marketing", "Kundendaten Schutz", "private KI Agentur"],
    targetPackage: "b",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug);
}
