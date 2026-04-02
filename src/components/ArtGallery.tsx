import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

const artworks = [
  { src: art1, alt: "Traços em tinta" },
  { src: art2, alt: "Formas orgânicas" },
  { src: art3, alt: "Linha contínua" },
  { src: art4, alt: "Conexão humana" },
  { src: art5, alt: "Escultura circular" },
  { src: art6, alt: "Tinta e movimento" },
];

const ArtGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="arte" className="section-padding bg-secondary">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="mb-16 text-2xl md:text-4xl">ARTE HUMANA</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {artworks.map((art, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <button
                onClick={() => setSelected(i)}
                className="brutalist-border block w-full overflow-hidden focus:outline-none"
              >
                <img
                  src={art.src}
                  alt={art.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={artworks[selected].src}
              alt={artworks[selected].alt}
              className="max-h-[85vh] max-w-full object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 text-2xl font-bold tracking-widest"
            >
              FECHAR ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtGallery;
