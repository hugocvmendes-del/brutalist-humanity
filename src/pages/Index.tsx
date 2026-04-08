import FixedNav from "@/components/FixedNav";
import HeroSection from "@/components/HeroSection";
import RisksSection from "@/components/RisksSection";
import CorporateSection from "@/components/CorporateSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => (
  <main className="snap-y snap-mandatory">
    <FixedNav />
    <section className="snap-start">
      <HeroSection />
    </section>
    <RisksSection />
    <CorporateSection />
    <AboutSection />
    <ServicesSection />
    <NewsletterSection />
    <ContactSection />
    <footer className="section-padding bg-foreground py-8 text-center text-sm text-background uppercase tracking-widest">
      © 2026 Humana — Todos os direitos reservados
    </footer>
  </main>
);

export default Index;
