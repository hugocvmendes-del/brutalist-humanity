import { motion } from "framer-motion";
import { FolderSearch, Shield, CheckCircle, Award } from "lucide-react";

const pillars = [
  { icon: FolderSearch, title: "Mapeamento de riscos", desc: "Identifique onde sua empresa está exposta" },
  { icon: Shield, title: "Programa de Integridade", desc: "Construa uma cultura sólida e auditável" },
  { icon: CheckCircle, title: "Cumprimento de normas", desc: "NR-1, LGPD, legislação trabalhista e mais" },
  { icon: Award, title: "Selos e certificações", desc: "Apoio para aderir a certificações reconhecidas pelo mercado" },
];

const SuppliersSection = () => (
  <section className="snap-start min-h-screen flex items-center bg-transparent section-padding overflow-hidden text-dark-zone-heading">
    <div className="w-full max-w-4xl mx-auto">
      {/* Left — text content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8"
      >
        <div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] tracking-tighter mb-4 text-dark-zone-heading">
            IMPULSIONAMOS SEU CRESCIMENTO COM
            <br />
            <span className="text-dark-zone-accent">INTEGRIDADE.</span>
          </h2>
          <p className="text-dark-zone-body text-lg max-w-md">
            Para <strong className="text-dark-zone-heading font-semibold">pequenas</strong> e <strong className="text-dark-zone-heading font-semibold">médias</strong> empresas que querem crescer de forma <strong className="text-dark-zone-heading font-semibold">segura</strong> e garantir espaço nas <strong className="text-dark-zone-heading font-semibold">cadeias de grandes empresas</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-dark-zone">
                  <Icon className="w-5 h-5 text-dark-zone-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider mb-1 text-dark-zone-heading">{p.title}</p>
                  <p className="text-sm text-dark-zone-body leading-snug">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="btn-on-dark self-start"
        >
          Conheça nossos serviços
        </motion.a>
      </motion.div>

    </div>
  </section>
);

export default SuppliersSection;
