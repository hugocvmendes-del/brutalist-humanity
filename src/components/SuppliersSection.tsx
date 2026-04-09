import { motion } from "framer-motion";
import { FolderSearch, Shield, CheckCircle, Award } from "lucide-react";

const pillars = [
  { icon: FolderSearch, title: "Mapeamento de riscos", desc: "Identifique onde sua empresa está exposta" },
  { icon: Shield, title: "Programa de Integridade", desc: "Construa uma cultura sólida e auditável" },
  { icon: CheckCircle, title: "Cumprimento de normas", desc: "NR-1, LGPD, legislação trabalhista e mais" },
  { icon: Award, title: "Selos e certificações", desc: "Apoio para aderir a certificações reconhecidas pelo mercado" },
];

const SuppliersSection = () => (
  <section className="snap-start min-h-screen flex items-center bg-teal text-teal-foreground section-padding overflow-hidden">
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] tracking-tighter mb-4">
          Apoiamos seu crescimento{" "}
          <span className="text-mustard">com integridade.</span>
        </h2>
        <p className="text-teal-muted text-lg">
          Para pequenas e médias empresas que querem crescer de forma segura e garantir espaço nas cadeias de grandes empresas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="border border-teal-muted/20 p-8 text-left flex gap-5 items-start hover:border-mustard/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-teal-muted/30">
                <Icon className="w-5 h-5 text-mustard" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-1">{p.title}</p>
                <p className="text-sm text-teal-muted leading-snug">{p.desc}</p>
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
        className="px-8 py-4 font-bold uppercase tracking-widest text-sm bg-teal-foreground text-teal border-2 border-teal-foreground transition-all duration-200 hover:bg-mustard hover:text-mustard-foreground hover:border-mustard"
      >
        Conheça nossos serviços
      </motion.a>
    </div>
  </section>
);

export default SuppliersSection;
