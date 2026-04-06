import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="section-padding bg-warm text-warm-foreground">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <h2 className="mb-4 text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter">
            FALE
            <br />
            <span className="text-mustard">CONOSCO</span>
          </h2>
          <p className="mb-12 opacity-80 text-lg">
            Vamos conversar. Envie uma mensagem ou nos encontre nas redes.
          </p>
        </AnimatedSection>

        {sent ? (
          <AnimatedSection>
            <div className="border-2 border-warm-foreground p-12 text-center">
              <p className="text-xl font-bold">MENSAGEM ENVIADA ✓</p>
              <p className="mt-2 opacity-80">Entraremos em contato em breve.</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" placeholder="Nome" required className="w-full border-b-2 border-warm-foreground bg-transparent py-3 text-warm-foreground placeholder:opacity-50 focus:outline-none focus:border-mustard" />
              <input type="email" placeholder="E-mail" required className="w-full border-b-2 border-warm-foreground bg-transparent py-3 text-warm-foreground placeholder:opacity-50 focus:outline-none focus:border-mustard" />
              <textarea placeholder="Mensagem" required rows={4} className="w-full border-b-2 border-warm-foreground bg-transparent py-3 text-warm-foreground placeholder:opacity-50 focus:outline-none focus:border-mustard resize-none" />
              <button type="submit" className="brutalist-btn w-full border-warm-foreground hover:bg-mustard hover:text-mustard-foreground hover:border-mustard">
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
              className="border-b-2 border-warm-foreground pb-1 transition-colors hover:text-mustard hover:border-mustard"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/humana"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-warm-foreground pb-1 transition-colors hover:text-mustard hover:border-mustard"
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
