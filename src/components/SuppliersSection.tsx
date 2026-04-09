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
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Left — text content (aligned like CorporateSection) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8"
      >
        <div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter mb-4">
            IMPULSIONAMOS SEU CRESCIMENTO COM
            <br />
            <span className="text-mustard">INTEGRIDADE.</span>
          </h2>
          <p className="text-teal-muted text-lg max-w-md">
            Para <strong className="text-teal-foreground font-semibold">pequenas</strong> e <strong className="text-teal-foreground font-semibold">médias</strong> empresas que querem crescer de forma <strong className="text-teal-foreground font-semibold">segura</strong> e garantir espaço nas <strong className="text-teal-foreground font-semibold">cadeias de grandes empresas</strong>.
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
                <div className="mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-teal-muted/30">
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
          className="px-8 py-4 font-bold uppercase tracking-widest text-sm bg-teal-foreground text-teal border-2 border-teal-foreground transition-all duration-200 hover:bg-mustard hover:text-mustard-foreground hover:border-mustard self-start"
        >
          Conheça nossos serviços
        </motion.a>
      </motion.div>

      {/* Right — organic supply chain continuation (asymmetric, smaller nodes = PMEs) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 560"
          className="w-full max-w-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic connection lines — asymmetric branching from top */}
          <g stroke="hsl(var(--teal-foreground))" strokeWidth="1" opacity="0.2">
            {/* Main trunk coming from top (continuing from corporate section above) */}
            <path d="M 220 0 Q 210 40 200 70" />
            <path d="M 280 0 Q 290 35 300 65" />

            {/* Branch to left cluster */}
            <path d="M 200 70 Q 160 120 120 160" />
            <path d="M 120 160 Q 80 210 60 270" />
            <path d="M 120 160 Q 140 220 150 280" />
            <path d="M 60 270 Q 50 320 70 370" />
            <path d="M 60 270 Q 30 310 40 360" />
            <path d="M 150 280 Q 130 330 120 390" />
            <path d="M 150 280 Q 170 340 190 380" />

            {/* Branch to right cluster */}
            <path d="M 300 65 Q 340 110 370 160" />
            <path d="M 370 160 Q 410 220 430 280" />
            <path d="M 370 160 Q 350 230 330 290" />
            <path d="M 430 280 Q 450 340 440 400" />
            <path d="M 430 280 Q 460 330 470 380" />
            <path d="M 330 290 Q 310 350 290 410" />
            <path d="M 330 290 Q 360 350 380 400" />

            {/* Cross connections (organic web feel) */}
            <path d="M 150 280 Q 240 260 330 290" />
            <path d="M 120 390 Q 200 420 290 410" />
            <path d="M 70 370 Q 120 430 190 380" />

            {/* Extra small branches */}
            <path d="M 70 370 Q 60 420 80 460" />
            <path d="M 40 360 Q 25 400 35 440" />
            <path d="M 120 390 Q 100 440 110 480" />
            <path d="M 190 380 Q 200 430 210 470" />
            <path d="M 290 410 Q 280 460 270 500" />
            <path d="M 380 400 Q 390 450 400 490" />
            <path d="M 440 400 Q 430 450 420 500" />
            <path d="M 470 380 Q 480 430 475 470" />
          </g>

          {/* Entry points from top (connecting to corporate section's tree) */}
          {[
            { cx: 220, cy: 10, r: 5 },
            { cx: 280, cy: 10, r: 5 },
          ].map((n, i) => (
            <circle key={`top-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill="hsl(var(--teal-foreground))" opacity="0.25" />
          ))}

          {/* Mid-level branch nodes */}
          {[
            { cx: 200, cy: 70, r: 8 },
            { cx: 300, cy: 65, r: 7 },
            { cx: 120, cy: 160, r: 9 },
            { cx: 370, cy: 160, r: 8 },
          ].map((n, i) => (
            <circle key={`mid-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill="hsl(var(--teal-foreground))" opacity="0.18" />
          ))}

          {/* PME nodes — small/medium empresas (highlighted, varied sizes for organic feel) */}
          {[
            { cx: 60, cy: 270, r: 11 },
            { cx: 150, cy: 280, r: 13 },
            { cx: 330, cy: 290, r: 12 },
            { cx: 430, cy: 280, r: 10 },
            { cx: 70, cy: 370, r: 9 },
            { cx: 40, cy: 360, r: 7 },
            { cx: 120, cy: 390, r: 11 },
            { cx: 190, cy: 380, r: 10 },
            { cx: 290, cy: 410, r: 12 },
            { cx: 380, cy: 400, r: 9 },
            { cx: 440, cy: 400, r: 11 },
            { cx: 470, cy: 380, r: 7 },
          ].map((n, i) => (
            <motion.circle
              key={`pme-${i}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="hsl(var(--mustard))"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7 + Math.random() * 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            />
          ))}

          {/* Smallest leaf nodes — the tips of the chain */}
          {[
            { cx: 80, cy: 460, r: 5 },
            { cx: 35, cy: 440, r: 4 },
            { cx: 110, cy: 480, r: 6 },
            { cx: 210, cy: 470, r: 5 },
            { cx: 270, cy: 500, r: 6 },
            { cx: 400, cy: 490, r: 5 },
            { cx: 420, cy: 500, r: 4 },
            { cx: 475, cy: 470, r: 5 },
          ].map((n, i) => (
            <motion.circle
              key={`leaf-${i}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="hsl(var(--mustard))"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 + Math.random() * 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.06 }}
            />
          ))}

          {/* Accent rings on a few key PME nodes */}
          <circle cx="150" cy="280" r="20" stroke="hsl(var(--mustard))" strokeWidth="0.8" opacity="0.25" />
          <circle cx="290" cy="410" r="19" stroke="hsl(var(--mustard))" strokeWidth="0.8" opacity="0.2" />
          <circle cx="60" cy="270" r="18" stroke="hsl(var(--mustard))" strokeWidth="0.6" opacity="0.15" />
        </svg>
      </motion.div>
    </div>
  </section>
);

export default SuppliersSection;
