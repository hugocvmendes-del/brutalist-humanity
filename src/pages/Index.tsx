import FixedNav from "@/components/FixedNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => (
  <main>
    <FixedNav />
    <HeroSection />
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
