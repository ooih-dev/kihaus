import type { Metadata } from "next";

const SITE_URL = "https://kihause.de";
const SITE_NAME = "KIHause";
const DEFAULT_DESCRIPTION =
  "Ihre eigene KI — auf Ihrem Gerät, in Berlin. Keine Cloud. Keine Kompromisse. Premium private AI installation & consulting for Berlin professionals.";

export function createMetadata(overrides?: Partial<Metadata> & { path?: string }): Metadata {
  const { path, ...rest } = overrides || {};

  const title = rest?.title
    ? `${rest.title} | ${SITE_NAME}`
    : `${SITE_NAME} — Private AI Concierge Berlin`;

  const description =
    (rest?.description as string) || DEFAULT_DESCRIPTION;

  const canonicalUrl = path ? `${SITE_URL}${path}` : SITE_URL;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    keywords: [
      "Private KI Berlin",
      "lokale KI",
      "DSGVO KI Assistent",
      "AI Installation Berlin",
      "Künstliche Intelligenz Berlin",
      "Mac mini KI einrichten",
      "private AI setup",
      "GDPR compliant AI",
      "KIHause",
      "Datenschutz KI",
      "self-hosted AI Berlin",
      "KI für Anwälte",
      "KI für Ärzte",
      "lokale KI Berlin",
      "private AI Berlin",
      "KI ohne Cloud",
    ],
    authors: [{ name: "KIHause" }],
    creator: "KIHause",
    publisher: "KIHause",
    formatDetection: {
      email: true,
      telephone: true,
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      alternateLocale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "KIHause — Private AI Concierge Berlin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    ...rest,
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KIHause",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "+491776525804",
  email: "hallo@kihause.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Berlin",
  },
  priceRange: "€300 - €5000",
  serviceType: [
    "AI Installation",
    "AI Consulting",
    "Private AI Setup",
    "GDPR Compliant AI",
  ],
  knowsLanguage: ["de", "en"],
};
