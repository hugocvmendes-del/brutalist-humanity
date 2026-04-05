import FixedNav from "@/components/FixedNav";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ArtGallery from "@/components/ArtGallery";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => (
  <main>
    <FixedNav />
    <HeroSection />
    <MarqueeStrip
      text="RESPEITO · INTEGRIDADE · PESSOAS · ÉTICA · TRANSPARÊNCIA"
      className="border-y-2 border-foreground bg-mustard text-mustard-foreground"
    />
    <AboutSection />
    <ServicesSection />
    <MarqueeStrip
      text="DIREITOS HUMANOS · COMPLIANCE · PROTEÇÃO DE DADOS · CANAL DE ÉTICA"
      className="border-y-2 border-foreground bg-warm text-warm-foreground"
    />
    <ArtGallery />
    <NewsletterSection />
    <ContactSection />
    <footer className="section-padding bg-foreground py-8 text-center text-sm text-background uppercase tracking-widest">
      © 2026 Humana — Todos os direitos reservados
    </footer>
  </main>
);

export default Index;
