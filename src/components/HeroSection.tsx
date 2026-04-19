import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section id="hero" className="snap-start h-screen flex flex-col items-center justify-center section-padding text-center text-foreground bg-background overflow-hidden relative z-10">
    {/* Signature line - appears first */}
    <motion.p
      className="mb-4 text-foreground/70 text-base md:text-lg tracking-[0.3em]"
      style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      Soluções em integridade
    </motion.p>

    {/* Giant logo - appears second, more prominent */}
    <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw]">
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: "hsl(var(--background))", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: [0.16, 0.77, 0.4, 0.98], delay: 1.0 }}
      />
      <img
        src={logoImg}
        alt="Humana"
        className="w-full h-auto"
      />
    </div>
  </section>
);

export default HeroSection;
