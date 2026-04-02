import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section className="section-padding flex min-h-screen flex-col items-center justify-center text-center">
    <motion.img
      src={logoImg}
      alt="Humana"
      width={400}
      height={120}
      className="mb-12 w-64 md:w-96"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.h1
      className="mb-8 max-w-3xl text-3xl md:text-5xl lg:text-6xl leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      SOLUÇÕES QUE CONECTAM PESSOAS
    </motion.h1>
    <motion.p
      className="mb-12 max-w-xl text-muted-foreground text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Humanizamos processos. Transformamos relações.
    </motion.p>
    <motion.a
      href="#contato"
      className="brutalist-btn"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Entre em contato
    </motion.a>
  </section>
);

export default HeroSection;
