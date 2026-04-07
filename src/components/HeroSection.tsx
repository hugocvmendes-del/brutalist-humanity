import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
    {/* Giant background logo */}
    <motion.img
      src={logoImg}
      alt=""
      aria-hidden
      className="absolute inset-0 w-[110vw] max-w-none h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] select-none pointer-events-none"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.07, scale: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center px-6">
      <motion.h1
        className="max-w-5xl text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tighter"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      >
        O QUE NOS MOVE
        <br />
        <span className="text-mustard drop-shadow-[0_2px_12px_hsl(var(--mustard)/0.4)]">
          SÃO AS PESSOAS
        </span>
      </motion.h1>

      <motion.p
        className="mt-8 mb-12 max-w-xl text-muted-foreground text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        Soluções em direitos humanos e integridade
      </motion.p>

      <motion.a
        href="#contato"
        className="brutalist-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.0 }}
      >
        Entre em contato
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
