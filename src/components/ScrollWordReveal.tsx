import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Word = {
  text: string;
  accent?: boolean;
  breakAfter?: boolean;
};

const words: Word[] = [
  { text: "Sua" },
  { text: "empresa", breakAfter: true },
  { text: "está", accent: true, breakAfter: true },
  { text: "protegida?" },
];

const RevealWord = ({
  word,
  progress,
  range,
}: {
  word: Word;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] ${
        word.accent ? "text-dark-zone-accent" : "text-dark-zone-heading"
      }`}
    >
      {word.text}
    </motion.span>
  );
};

const ScrollWordReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reveal window: between 25% and 75% of the section's scroll
  const start = 0.25;
  const end = 0.75;
  const step = (end - start) / words.length;

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] bg-transparent"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center section-padding">
        <h2 className="text-[clamp(3rem,11vw,9rem)] font-bold leading-[0.95] tracking-tighter text-center max-w-[95vw]">
          {words.map((w, i) => {
            const range: [number, number] = [
              start + i * step,
              start + (i + 1) * step,
            ];
            return (
              <span key={i}>
                <RevealWord word={w} progress={scrollYProgress} range={range} />
                {w.breakAfter && <br />}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
};

export default ScrollWordReveal;
