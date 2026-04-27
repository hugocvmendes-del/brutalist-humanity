import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useLang } from "../context/LangContext";

type Word = {
  text: string;
  accent?: boolean;
  breakAfter?: boolean;
};

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
  const { t } = useLang();
  const words = t.scrollReveal.words as readonly Word[];
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("main-scroll"));
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: container ? { current: container } : undefined,
    offset: ["start end", "end start"],
  });

  const start = 0.2;
  const end = 0.8;
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

