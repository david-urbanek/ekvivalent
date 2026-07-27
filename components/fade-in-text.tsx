"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FadeInTextProps {
  text: string;
  className?: string;
  /** Applied to each word span — needed e.g. for bg-clip-text gradients,
   * which break when applied to an ancestor of transformed elements */
  wordClassName?: string;
  /** Delay before the first word appears (seconds) */
  delay?: number;
  /** Animate on mount instead of on scroll into view */
  immediate?: boolean;
}

const container = (delay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

const word = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Staggered word-by-word fade-in for headings. */
const FadeInText = ({ text, className, wordClassName, delay = 0, immediate = false }: FadeInTextProps) => {
  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={container(delay)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-80px" } })}
    >
      {text.split(" ").flatMap((w, i, words) => [
        <motion.span key={`w-${i}`} variants={word} className={cn("inline-block", wordClassName)}>
          {w}
        </motion.span>,
        // Plain text node (not part of the non-wrapping span above) so the
        // browser has an actual line-break opportunity between words.
        i < words.length - 1 ? " " : null,
      ])}
    </motion.span>
  );
};

export { FadeInText };
