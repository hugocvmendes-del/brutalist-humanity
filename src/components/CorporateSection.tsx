import { motion } from "framer-motion";
import { Search, AlertTriangle, Map, Handshake } from "lucide-react";
import thumbsUp from "@/assets/thumbs-up-line.png";

const services = [
  { icon: Search, text: "Análise de riscos na cadeia de fornecimento" },
  { icon: AlertTriangle, text: "Identificação de vulnerabilidades em direitos humanos e integridade" },
  { icon: Map, text: "Planos de atuação personalizados por risco" },
  { icon: Handshake, text: "Desenvolvimento de fornecedores: apoio para que eles cresçam com você" },
];

const CorporateSection = () => (
  <section className="relative snap-start min-h-screen flex items-center bg-secondary section-padding overflow-hidden">
    {/* Thumbs up drawing from the right */}
    <motion.img
      src={thumbsUp}
      alt=""
      loading="lazy"
      width={1024}
      height={512}
      className="absolute right-0 top-[5%] w-[clamp(260px,38vw,520px)] opacity-100 pointer-events-none hidden md:block"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    />

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
          <h2 className="text-[clamp(1.5rem,4vw,3rem)] leading-[0.9] tracking-tighter mb-4 text-left">
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

    </div>
  </section>
);

export default CorporateSection;
