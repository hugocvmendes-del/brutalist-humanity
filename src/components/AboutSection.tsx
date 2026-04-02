import AnimatedSection from "./AnimatedSection";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => (
  <section id="sobre" className="section-padding">
    <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
      <AnimatedSection>
        <h2 className="mb-8 text-2xl md:text-4xl">SOBRE NÓS</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed text-lg">
          Somos uma equipe apaixonada por criar conexões genuínas entre marcas e pessoas. 
          Acreditamos que cada projeto é uma oportunidade de transformar o comum em extraordinário, 
          colocando sempre o ser humano no centro de tudo.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Nossa abordagem combina estratégia, criatividade e empatia para entregar 
          soluções que realmente fazem a diferença na vida das pessoas.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="brutalist-border overflow-hidden">
          <img
            src={aboutPhoto}
            alt="Equipe Humana"
            width={800}
            height={1024}
            loading="lazy"
            className="w-full object-cover grayscale"
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
