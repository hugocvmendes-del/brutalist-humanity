import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ArtGallery from "@/components/ArtGallery";

const Index = () => (
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ArtGallery />
    <ContactSection />
    <footer className="section-padding border-t-2 border-foreground py-8 text-center text-sm text-muted-foreground uppercase tracking-widest">
      © 2026 Humana — Todos os direitos reservados
    </footer>
  </main>
);

export default Index;
