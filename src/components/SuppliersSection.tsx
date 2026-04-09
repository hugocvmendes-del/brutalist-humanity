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
      {/* Left — text content */}
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

      {/* Right — continuation of supply chain from CorporateSection */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full max-w-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Entry points from top — mirroring CorporateSection bottom nodes */}
          <g stroke="hsl(var(--teal-foreground))" strokeWidth="1" opacity="0.15">
            {/* From top-left entry (140,0) branching down */}
            <line x1="140" y1="0" x2="140" y2="40" />
            <line x1="200" y1="0" x2="200" y2="40" />
            <line x1="300" y1="0" x2="300" y2="40" />
            <line x1="360" y1="0" x2="360" y2="40" />

            {/* Second tier connections */}
            <line x1="140" y1="40" x2="80" y2="130" />
            <line x1="140" y1="40" x2="170" y2="140" />
            <line x1="200" y1="40" x2="170" y2="140" />
            <line x1="200" y1="40" x2="250" y2="120" />
            <line x1="300" y1="40" x2="250" y2="120" />
            <line x1="300" y1="40" x2="340" y2="135" />
            <line x1="360" y1="40" x2="340" y2="135" />
            <line x1="360" y1="40" x2="430" y2="125" />

            {/* Cross connections */}
            <line x1="80" y1="130" x2="170" y2="140" />
            <line x1="250" y1="120" x2="340" y2="135" />

            {/* Third tier — PME clusters */}
            <line x1="80" y1="130" x2="45" y2="240" />
            <line x1="80" y1="130" x2="110" y2="235" />
            <line x1="170" y1="140" x2="150" y2="250" />
            <line x1="170" y1="140" x2="210" y2="245" />
            <line x1="250" y1="120" x2="270" y2="240" />
            <line x1="340" y1="135" x2="320" y2="250" />
            <line x1="340" y1="135" x2="380" y2="240" />
            <line x1="430" y1="125" x2="440" y2="235" />
            <line x1="430" y1="125" x2="470" y2="245" />

            {/* Cross connections tier 3 */}
            <line x1="110" y1="235" x2="150" y2="250" />
            <line x1="210" y1="245" x2="270" y2="240" />
            <line x1="380" y1="240" x2="440" y2="235" />

            {/* Fourth tier — leaf nodes */}
            <line x1="45" y1="240" x2="30" y2="340" />
            <line x1="45" y1="240" x2="70" y2="350" />
            <line x1="110" y1="235" x2="100" y2="345" />
            <line x1="150" y1="250" x2="135" y2="355" />
            <line x1="150" y1="250" x2="175" y2="340" />
            <line x1="210" y1="245" x2="220" y2="350" />
            <line x1="270" y1="240" x2="260" y2="345" />
            <line x1="270" y1="240" x2="295" y2="355" />
            <line x1="320" y1="250" x2="310" y2="350" />
            <line x1="380" y1="240" x2="370" y2="345" />
            <line x1="380" y1="240" x2="405" y2="355" />
            <line x1="440" y1="235" x2="450" y2="340" />
            <line x1="470" y1="245" x2="480" y2="350" />

            {/* Smallest tips */}
            <line x1="30" y1="340" x2="20" y2="420" />
            <line x1="70" y1="350" x2="55" y2="430" />
            <line x1="100" y1="345" x2="90" y2="425" />
            <line x1="175" y1="340" x2="185" y2="420" />
            <line x1="220" y1="350" x2="230" y2="430" />
            <line x1="295" y1="355" x2="290" y2="435" />
            <line x1="370" y1="345" x2="360" y2="425" />
            <line x1="405" y1="355" x2="415" y2="430" />
            <line x1="450" y1="340" x2="460" y2="420" />
            <line x1="480" y1="350" x2="485" y2="430" />
          </g>

          {/* Top entry nodes (faded, connecting to corporate section) */}
          {[
            { cx: 140, cy: 0, r: 7 },
            { cx: 200, cy: 0, r: 7 },
            { cx: 300, cy: 0, r: 7 },
            { cx: 360, cy: 0, r: 7 },
          ].map((n, i) => (
            <circle key={`entry-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill="hsl(var(--teal-foreground))" opacity="0.15" />
          ))}

          {/* Second tier branch nodes */}
          {[
            { cx: 80, cy: 130, r: 10 },
            { cx: 170, cy: 140, r: 9 },
            { cx: 250, cy: 120, r: 11 },
            { cx: 340, cy: 135, r: 9 },
            { cx: 430, cy: 125, r: 10 },
          ].map((n, i) => (
            <circle key={`branch-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill="hsl(var(--teal-foreground))" opacity="0.18" />
          ))}

          {/* PME nodes — mustard, varied sizes */}
          {[
            { cx: 45, cy: 240, r: 12 },
            { cx: 110, cy: 235, r: 10 },
            { cx: 150, cy: 250, r: 13 },
            { cx: 210, cy: 245, r: 11 },
            { cx: 270, cy: 240, r: 14 },
            { cx: 320, cy: 250, r: 10 },
            { cx: 380, cy: 240, r: 12 },
            { cx: 440, cy: 235, r: 11 },
            { cx: 470, cy: 245, r: 9 },
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
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
            />
          ))}

          {/* Leaf nodes — smaller mustard */}
          {[
            { cx: 30, cy: 340, r: 7 },
            { cx: 70, cy: 350, r: 6 },
            { cx: 100, cy: 345, r: 8 },
            { cx: 135, cy: 355, r: 6 },
            { cx: 175, cy: 340, r: 7 },
            { cx: 220, cy: 350, r: 8 },
            { cx: 260, cy: 345, r: 6 },
            { cx: 295, cy: 355, r: 7 },
            { cx: 310, cy: 350, r: 6 },
            { cx: 370, cy: 345, r: 7 },
            { cx: 405, cy: 355, r: 8 },
            { cx: 450, cy: 340, r: 6 },
            { cx: 480, cy: 350, r: 7 },
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
              transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
            />
          ))}

          {/* Smallest tips */}
          {[
            { cx: 20, cy: 420, r: 4 },
            { cx: 55, cy: 430, r: 5 },
            { cx: 90, cy: 425, r: 4 },
            { cx: 185, cy: 420, r: 5 },
            { cx: 230, cy: 430, r: 4 },
            { cx: 290, cy: 435, r: 5 },
            { cx: 360, cy: 425, r: 4 },
            { cx: 415, cy: 430, r: 5 },
            { cx: 460, cy: 420, r: 4 },
            { cx: 485, cy: 430, r: 3 },
          ].map((n, i) => (
            <motion.circle
              key={`tip-${i}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="hsl(var(--mustard))"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 + Math.random() * 0.25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.3 + i * 0.04 }}
            />
          ))}

          {/* Accent rings on key PME nodes */}
          <circle cx="270" cy="240" r="22" stroke="hsl(var(--mustard))" strokeWidth="0.8" opacity="0.25" />
          <circle cx="150" cy="250" r="20" stroke="hsl(var(--mustard))" strokeWidth="0.8" opacity="0.2" />
          <circle cx="380" cy="240" r="19" stroke="hsl(var(--mustard))" strokeWidth="0.6" opacity="0.15" />
        </svg>
      </motion.div>
    </div>
  </section>
);

export default SuppliersSection;
