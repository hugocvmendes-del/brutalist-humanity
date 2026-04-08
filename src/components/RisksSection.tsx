import { motion } from "framer-motion";
import { Scale, Link2Off, ShieldOff } from "lucide-react";

const risks = [
  {
    stat: "142.828",
    label: "novas ações de assédio moral em 2025",
    sub: "+22% em relação a 2024 · Fonte: TST/CSJT",
    icon: Scale,
    title: "Assédio no Trabalho",
  },
  {
    stat: "613",
    label: "empresas na Lista Suja do MTE (abril/2026)",
    sub: "+169 novos incluídos · BYD e outros nomes de destaque",
    icon: Link2Off,
    title: "Trabalho Escravo",
  },
  {
    stat: "R$ 6,75 mi",
    label: "custo médio de uma violação de dados no Brasil",
    sub: "Multa LGPD pode chegar a R$ 50 mi por infração · Fonte: IBM 2024",
    icon: ShieldOff,
    title: "Violação de Dados",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const RisksSection = () => (
  <section className="snap-start min-h-screen flex flex-col items-center justify-center bg-dark-surface text-dark-surface-foreground section-padding">
    <motion.h2
      className="text-[clamp(1.5rem,4vw,3rem)] tracking-tighter text-center mb-16 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      Os riscos que sua empresa{" "}
      <span className="text-mustard">não pode ignorar</span>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-6xl mb-16">
      {risks.map((r, i) => {
        const Icon = r.icon;
        return (
          <motion.div
            key={r.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="border border-dark-surface-muted/30 p-8 lg:p-10 flex flex-col gap-4 hover:border-mustard/60 transition-colors duration-300"
          >
            <Icon className="w-8 h-8 text-mustard" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-widest text-dark-surface-muted">
              {r.title}
            </p>
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tighter">
              {r.stat}
            </p>
            <p className="text-sm leading-snug">{r.label}</p>
            <p className="text-xs text-dark-surface-muted leading-relaxed mt-auto">
              {r.sub}
            </p>
          </motion.div>
        );
      })}
    </div>

    <motion.p
      className="text-[clamp(1.2rem,3vw,2rem)] font-bold tracking-tight text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      Sua empresa está protegida?
    </motion.p>
  </section>
);

export default RisksSection;
