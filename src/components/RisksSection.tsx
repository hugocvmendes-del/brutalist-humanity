import { motion } from "framer-motion";
import { Scale, Link2Off, ShieldOff } from "lucide-react";
import handPointing from "@/assets/hand-line-white.png";

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
    sub: "+169 novos incluídos em 2024",
    icon: Link2Off,
    title: "Trabalho Escravo",
  },
  {
    stat: "2%",
    label: "do faturamento — teto da multa a ser aplicada pela ANPD em infrações de dados pessoais",
    sub: "Fonte: Lei Geral de Proteção de Dados (LGPD)",
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
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent section-padding overflow-hidden text-dark-zone-heading">


    <motion.h2
      className="text-[clamp(2rem,5vw,3.5rem)] tracking-tighter text-right mb-16 max-w-3xl ml-auto text-dark-zone-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      Os riscos existem.
      <br />
      <span className="text-dark-zone-accent">
        Não deixe que eles impactem
        <br />
        negativamente seu negócio
      </span>
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
            className="border border-dark-zone bg-dark-zone-card p-8 lg:p-10 flex flex-col gap-4 transition-colors duration-300 hover:border-[#C9853A]/60"
          >
            <Icon className="w-8 h-8 text-dark-zone-accent" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-widest text-dark-zone-body">
              {r.title}
            </p>
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tighter text-dark-zone-heading">
              {r.stat}
            </p>
            <p className="text-sm leading-snug text-dark-zone-heading">{r.label}</p>
            <p className="text-xs text-dark-zone-body leading-relaxed mt-auto">
              {r.sub}
            </p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default RisksSection;
