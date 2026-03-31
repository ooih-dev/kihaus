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
