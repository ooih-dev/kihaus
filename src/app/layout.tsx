import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createMetadata, jsonLd } from "@/lib/seo";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="BH2R059J1AAkQhalQQaIBuc5hVUF0nFne34vNME-G3U" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/kihause-logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/kihause-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
