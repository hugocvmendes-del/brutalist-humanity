import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section id="hero" className="snap-start h-screen flex flex-col items-center justify-center section-padding text-center text-foreground bg-background overflow-hidden relative z-10">
    {/* Logo - appears first, prominent */}
    <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mb-6">
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: "hsl(var(--background))", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: [0.16, 0.77, 0.4, 0.98], delay: 0.4 }}
      />
      <img
        src={logoImg}
        alt="Humana"
        className="w-full h-auto"
      />
    </div>

    {/* Signature line - below logo, brutalist minimal */}
    <motion.p
      className="text-foreground/50 text-xs md:text-sm tracking-[0.2em] uppercase mt-2"
      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.8 }}
    >
      Soluções em integridade
    </motion.p>
  </section>
);

export default HeroSection;
