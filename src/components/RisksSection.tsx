import { motion } from "framer-motion";
import { Scale, Link2Off, ShieldOff } from "lucide-react";
import { useLang } from "@/context/LangContext";

const icons = [Scale, Link2Off, ShieldOff];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const RisksSection = () => {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent section-padding overflow-hidden text-dark-zone-heading">
      <motion.h2
        className="text-[clamp(2rem,5vw,3.5rem)] tracking-tighter text-right mb-16 max-w-3xl ml-auto text-dark-zone-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        {t.risks.heading1}
        <br />
        <span className="text-dark-zone-accent">
          {t.risks.heading2}
          <br />
          {t.risks.heading3}
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-6xl mb-16">
        {t.risks.cards.map((r, i) => {
          const Icon = icons[i];
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
};

export default RisksSection;
