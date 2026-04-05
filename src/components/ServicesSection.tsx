import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "DIREITOS HUMANOS", desc: "Mapeamento e avaliação de risco." },
  { title: "PROGRAMA DE INTEGRIDADE", desc: "Implementação de governança e práticas que impulsionem a cultura de integridade na empresa." },
  { title: "PROTEÇÃO DE DADOS PESSOAIS", desc: "Mapeamento e revisão de atividade de processamento de dados." },
  { title: "CANAL DE ÉTICA", desc: "Implementação de canais e fluxos de investigação para mapear e corrigir desvios." },
  { title: "TREINAMENTOS", desc: "Treinamentos de integridade para todos os níveis para garantir a compreensão de temas e políticas de integridade." },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding bg-warm-light">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="mb-16 text-2xl md:text-4xl">O QUE FAZEMOS</h2>
      </AnimatedSection>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="brutalist-card h-full">
              <h3 className="mb-4 text-xl">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
