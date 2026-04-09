import { motion } from "framer-motion";
import { Search, AlertTriangle, Map, Handshake } from "lucide-react";

const services = [
  { icon: Search, text: "Análise de riscos na cadeia de fornecimento" },
  { icon: AlertTriangle, text: "Identificação de vulnerabilidades em direitos humanos e integridade" },
  { icon: Map, text: "Planos de atuação personalizados por risco" },
  { icon: Handshake, text: "Desenvolvimento de fornecedores: apoio para que eles cresçam com você" },
];

const CorporateSection = () => (
  <section className="snap-start min-h-screen flex items-center bg-secondary section-padding overflow-hidden">
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
            PROTEGEMOS SUA
            <br />
            <span className="text-mustard">REPUTAÇÃO.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Para <strong className="text-foreground font-semibold">Médias</strong> e <strong className="text-foreground font-semibold">Grandes</strong> empresas que querem ter uma cadeia de fornecimento <strong className="text-foreground font-semibold">segura</strong> e <strong className="text-foreground font-semibold">confiável</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10">
                  <Icon className="w-5 h-5 text-mustard" strokeWidth={1.5} />
                </div>
                <p className="text-sm leading-snug">{s.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href="#servicos"
          className="brutalist-btn self-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Conheça nossos serviços
        </motion.a>
      </motion.div>

      {/* Right — abstract supply chain network illustration */}
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
          {/* Connection lines */}
          <g stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.15">
            <line x1="250" y1="80" x2="140" y2="200" />
            <line x1="250" y1="80" x2="360" y2="200" />
            <line x1="140" y1="200" x2="80" y2="340" />
            <line x1="140" y1="200" x2="200" y2="340" />
            <line x1="360" y1="200" x2="300" y2="340" />
            <line x1="360" y1="200" x2="420" y2="340" />
            <line x1="80" y1="340" x2="140" y2="440" />
            <line x1="200" y1="340" x2="200" y2="440" />
            <line x1="300" y1="340" x2="300" y2="440" />
            <line x1="420" y1="340" x2="360" y2="440" />
            <line x1="140" y1="200" x2="360" y2="200" />
            <line x1="200" y1="340" x2="300" y2="340" />
          </g>

          {/* Nodes */}
          {[
            { cx: 250, cy: 80, r: 18 },
            { cx: 140, cy: 200, r: 14 },
            { cx: 360, cy: 200, r: 14 },
            { cx: 80, cy: 340, r: 10 },
            { cx: 200, cy: 340, r: 10 },
            { cx: 300, cy: 340, r: 10 },
            { cx: 420, cy: 340, r: 10 },
            { cx: 140, cy: 440, r: 7 },
            { cx: 200, cy: 440, r: 7 },
            { cx: 300, cy: 440, r: 7 },
            { cx: 360, cy: 440, r: 7 },
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={i === 0 ? "hsl(var(--mustard))" : "hsl(var(--foreground))"}
              opacity={i === 0 ? 0.9 : 0.12 + i * 0.03}
            />
          ))}

          {/* Accent rings on main node */}
          <circle cx="250" cy="80" r="28" stroke="hsl(var(--mustard))" strokeWidth="1" opacity="0.3" />
          <circle cx="250" cy="80" r="40" stroke="hsl(var(--mustard))" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </motion.div>
    </div>
  </section>
);

export default CorporateSection;
