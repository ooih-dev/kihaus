import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack";
import Privacy from "@/components/Privacy";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <HowItWorks />
        <Pricing />
        <TechStack />
        <Privacy />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SocialProof />
      <Footer />
    </>
  );
}
