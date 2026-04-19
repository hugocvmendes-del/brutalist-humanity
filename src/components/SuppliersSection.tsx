import { motion } from "framer-motion";
import flexArm from "@/assets/flex-arm-line.png";

const SuppliersSection = () => (
  <section className="relative snap-start min-h-screen flex items-center bg-transparent section-padding overflow-hidden text-dark-zone-heading">
    {/* Flex arm drawing entering from the left, trailing off the canvas */}
    <motion.img
      src={flexArm}
      alt=""
      loading="lazy"
      width={1024}
      height={768}
      className="absolute -left-[8%] top-[8%] w-[clamp(280px,42vw,560px)] pointer-events-none hidden md:block brightness-0 invert"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    />

    <div className="w-full max-w-5xl mx-auto flex justify-end">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10 items-end text-right max-w-2xl"
      >
        <h2 className="text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.9] tracking-tighter text-dark-zone-heading">
          IMPULSIONAMOS
          <br />
          SEU CRESCIMENTO COM{" "}
          <span className="text-dark-zone-accent">INTEGRIDADE.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-dark-zone-body text-[clamp(1.25rem,2.4vw,2rem)] leading-snug"
        >
          Para <strong className="text-dark-zone-heading font-semibold">pequenas</strong> e{" "}
          <strong className="text-dark-zone-heading font-semibold">médias</strong> empresas que querem crescer de forma{" "}
          <strong className="text-dark-zone-heading font-semibold">segura</strong> e garantir espaço nas{" "}
          <strong className="text-dark-zone-heading font-semibold">cadeias de grandes empresas</strong>.
        </motion.p>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="btn-on-dark"
        >
          Saiba como
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default SuppliersSection;
