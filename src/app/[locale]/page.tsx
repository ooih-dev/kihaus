import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Sectors from "@/components/Sectors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import WhatsAppFab from "@/components/WhatsAppFab";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return createMetadata({
    title: isEn
      ? "KIHause — Private AI Concierge Berlin"
      : "KIHause — Private KI Concierge Berlin",
    description: isEn
      ? "Your own AI — on your device, in Berlin. No cloud. No compromises. Premium private AI installation & consulting."
      : "Ihre eigene KI — auf Ihrem Gerät, in Berlin. Keine Cloud. Keine Kompromisse. Premium private AI installation & consulting.",
    path: `/${locale}`,
    alternates: {
      canonical: `https://kihause.de/${locale}`,
      languages: {
        de: "https://kihause.de/de",
        en: "https://kihause.de/en",
        "x-default": "https://kihause.de/de",
      },
    },
  });
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Privacy />
        <About />
        <TechStack />
        <Sectors />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <SocialProof />
      <WhatsAppFab />
      <Footer />
    </>
  );
}
