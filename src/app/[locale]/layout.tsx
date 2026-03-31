import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const locales = ["de", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale) ? (locale as Locale) : "de";

  return (
    <I18nProvider defaultLocale={safeLocale}>
      {children}
    </I18nProvider>
  );
}
