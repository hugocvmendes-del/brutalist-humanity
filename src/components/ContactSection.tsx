import { useState, useEffect, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    (window as any).__preencherContato = (texto: string) => {
      setMensagem(texto);
    };
    return () => {
      delete (window as any).__preencherContato;
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="min-h-screen flex items-center section-padding overflow-hidden"
      style={{ background: "transparent", paddingTop: "clamp(6vh, 10vh, 14vh)" }}
    >
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <h2
            className="mb-4 text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] tracking-tighter"
            style={{ color: "#1A0A00" }}
          >
            FALE
            <br />
            <span style={{ color: "#6B3016" }}>CONOSCO</span>
          </h2>
          <p className="mb-12 text-lg" style={{ color: "#3D1C08" }}>
            Vamos conversar. Envie uma mensagem ou nos encontre nas redes.
          </p>
        </AnimatedSection>

        {sent ? (
          <AnimatedSection>
            <div
              className="border-2 p-12 text-center bg-light-zone-card backdrop-blur-sm"
              style={{ borderColor: "rgba(26, 10, 0, 0.3)" }}
            >
              <p className="text-xl font-bold" style={{ color: "#1A0A00" }}>MENSAGEM ENVIADA ✓</p>
              <p className="mt-2" style={{ color: "#3D1C08" }}>Entraremos em contato em breve.</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                placeholder="Nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016]"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016]"
              />
              <textarea
                id="contact-message"
                placeholder="Mensagem"
                required
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016] resize-none"
              />
              <button type="submit" className="btn-on-light w-full">
                Enviar
              </button>
            </form>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.3}>
          <div
            className="mt-16 flex gap-8 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#1A0A00" }}
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-[#1A0A00] pb-1 transition-colors hover:text-[#6B3016] hover:border-[#6B3016]"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/humana"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-[#1A0A00] pb-1 transition-colors hover:text-[#6B3016] hover:border-[#6B3016]"
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
