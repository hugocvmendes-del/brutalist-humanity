import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

const MarqueeStrip = ({ text, className = "" }: Props) => {
  const repeated = Array(8).fill(text).join(" · ");

  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <motion.div
        className="inline-block text-sm font-bold uppercase tracking-[0.3em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <span>{repeated} · {repeated}</span>
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
