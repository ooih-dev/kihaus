import type { Metadata } from "next";

const SITE_URL = "https://spreeki.de";
const SITE_NAME = "SpreeKI";
const DEFAULT_DESCRIPTION =
  "Ihre eigene KI — auf Ihrem Gerät, in Berlin. Keine Cloud. Keine Kompromisse. Premium private AI installation & consulting for Berlin professionals.";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = overrides?.title
    ? `${overrides.title} | ${SITE_NAME}`
    : `${SITE_NAME} — Private AI Concierge Berlin`;

  const description =
    (overrides?.description as string) || DEFAULT_DESCRIPTION;

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
      "SpreeKI",
      "Datenschutz KI",
      "self-hosted AI Berlin",
      "OpenClaw Berlin",
    ],
    authors: [{ name: "SpreeKI" }],
    creator: "SpreeKI",
    publisher: "SpreeKI",
    formatDetection: {
      email: true,
      telephone: true,
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      alternateLocale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "SpreeKI — Private AI Concierge Berlin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
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
      canonical: SITE_URL,
      languages: {
        "de-DE": `${SITE_URL}/de`,
        "en-US": `${SITE_URL}/en`,
      },
    },
    ...overrides,
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SpreeKI",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "",
  email: "hallo@spreeki.de",
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
