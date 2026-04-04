import FixedNav from "@/components/FixedNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ArtGallery from "@/components/ArtGallery";

const Index = () => (
  <main>
    <FixedNav />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ArtGallery />
    <ContactSection />
    <footer className="section-padding bg-warm py-8 text-center text-sm text-warm-foreground uppercase tracking-widest">
      © 2026 Humana — Todos os direitos reservados
    </footer>
  </main>
);

export default Index;
