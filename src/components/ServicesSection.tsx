import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "DIREITOS HUMANOS", desc: "Mapeamento e avaliação de risco.", span: "md:col-span-2 md:row-span-2" },
  { title: "PROGRAMA DE INTEGRIDADE", desc: "Implementação de governança e práticas que impulsionem a cultura de integridade na empresa.", span: "md:col-span-1" },
  { title: "PROTEÇÃO DE DADOS PESSOAIS", desc: "Mapeamento e revisão de atividade de processamento de dados.", span: "md:col-span-1" },
  { title: "CANAL DE ÉTICA", desc: "Implementação de canais e fluxos de investigação para mapear e corrigir desvios.", span: "md:col-span-1" },
  { title: "TREINAMENTOS", desc: "Treinamentos de integridade para todos os níveis para garantir a compreensão de temas e políticas de integridade.", span: "md:col-span-2" },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding bg-warm-light">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="mb-4 text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter">
          O QUE
          <br />
          <span className="text-mustard">FAZEMOS</span>
        </h2>
        <div className="mb-16 h-1 w-24 bg-mustard" />
      </AnimatedSection>
      <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(200px,auto)]">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08} className={s.span}>
            <div className="brutalist-card h-full flex flex-col justify-end">
              <h3 className="mb-3 text-xl md:text-2xl">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
