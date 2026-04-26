import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";
import { useLang } from "@/context/LangContext";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section id="hero" className="snap-start h-screen flex flex-col items-center justify-center section-padding text-center text-foreground overflow-hidden relative z-10" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Logo - appears first, prominent */}
      <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mb-6">
        <motion.div
          className="absolute inset-0 z-10"
          style={{ background: "#FFFFFF", transformOrigin: "right" }}
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

      {/* Signature line - below logo, refined minimal */}
      <motion.p
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "rgba(26, 10, 0, 0.45)" }}
        className="text-[11px] md:text-[13px] tracking-[0.5em] uppercase mt-2 text-center w-[55%] md:w-[50%] lg:w-[45%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.1 }}
      >
        {t.hero.tagline}
      </motion.p>
    </section>
  );
};

export default HeroSection;
