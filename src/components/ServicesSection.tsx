import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "ESTRATÉGIA", desc: "Planejamento centrado no ser humano para resultados que importam." },
  { title: "DESIGN", desc: "Identidades visuais que comunicam essência e criam conexão." },
  { title: "CONSULTORIA", desc: "Diagnóstico e soluções personalizadas para transformar processos." },
  { title: "COMUNICAÇÃO", desc: "Narrativas autênticas que aproximam marcas de pessoas." },
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
