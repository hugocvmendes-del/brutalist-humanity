import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <h2 className="mb-4 text-2xl md:text-4xl">CONTATO</h2>
          <p className="mb-12 text-muted-foreground text-lg">
            Vamos conversar. Envie uma mensagem ou nos encontre nas redes.
          </p>
        </AnimatedSection>

        {sent ? (
          <AnimatedSection>
            <div className="brutalist-border p-12 text-center">
              <p className="text-xl font-bold">MENSAGEM ENVIADA ✓</p>
              <p className="mt-2 text-muted-foreground">Entraremos em contato em breve.</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" placeholder="Nome" required className="brutalist-input" />
              <input type="email" placeholder="E-mail" required className="brutalist-input" />
              <textarea placeholder="Mensagem" required rows={4} className="brutalist-input resize-none" />
              <button type="submit" className="brutalist-btn w-full">
                Enviar
              </button>
            </form>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.3}>
          <div className="mt-16 flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-foreground pb-1 transition-colors hover:text-muted-foreground"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/humana"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-foreground pb-1 transition-colors hover:text-muted-foreground"
            >
              Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
