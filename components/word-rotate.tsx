"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  /** How long each word stays visible (ms) */
  duration?: number;
  className?: string;
}

/** Magic UI–style rotating word: cycles through words with a vertical fade. */
const WordRotate = ({ words, duration = 2800, className }: WordRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className="inline-grid overflow-hidden py-1 align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: "60%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-60%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn("inline-block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export { WordRotate };
