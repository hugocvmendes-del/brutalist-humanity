import { motion } from "framer-motion";
import thumbsUp from "@/assets/thumbs-up-line.png";

const CorporateSection = () => (
  <section className="relative snap-start min-h-screen flex items-center bg-transparent section-padding overflow-hidden text-dark-zone-heading">
    {/* Thumbs up drawing from the right */}
    <motion.img
      src={thumbsUp}
      alt=""
      loading="lazy"
      width={1024}
      height={512}
      className="absolute right-0 top-[1%] w-[clamp(260px,38vw,520px)] opacity-100 pointer-events-none hidden md:block brightness-0 invert"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    />

    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10"
      >
        <h2 className="text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.9] tracking-tighter text-left text-dark-zone-heading">
          PROTEGEMOS SUA
          <br />
          <span className="text-dark-zone-accent">REPUTAÇÃO.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-dark-zone-body text-[clamp(1.25rem,2.4vw,2rem)] leading-snug max-w-3xl"
        >
          Para <strong className="text-dark-zone-heading font-semibold">Médias</strong> e{" "}
          <strong className="text-dark-zone-heading font-semibold">Grandes</strong> empresas que querem ter uma cadeia de fornecimento{" "}
          <strong className="text-dark-zone-heading font-semibold">segura</strong> e{" "}
          <strong className="text-dark-zone-heading font-semibold">confiável</strong>.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default CorporateSection;
