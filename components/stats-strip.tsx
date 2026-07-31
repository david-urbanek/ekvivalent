"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface StatsStripProps {
  className?: string;
}

// TODO: nahradit reálnými čísly firmy
const stats = [
  {
    value: 20,
    suffix: "+",
    label: "let zkušeností v M&A, private equity a řízení firem",
  },
  {
    value: 20,
    suffix: "+",
    label: "doprovozených transakcí a strategických projektů",
  },
  {
    value: 100,
    suffix: " %",
    label: "diskrétnost – informace pouštíme jen tomu, komu patří",
  },
];

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

/** Full-bleed hairline band with animated key numbers — aligns with the reference strip grid. */
const StatsStrip = ({ className }: StatsStripProps) => {
  return (
    <div className={cn("border-b", className)}>
      <div className="grid md:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "flex flex-col items-center gap-3 px-8 py-14 text-center",
              idx > 0 && "border-t md:border-t-0 md:border-l",
            )}
          >
            <span className="bento-number text-6xl font-semibold tracking-tight md:text-7xl">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </span>
            <span className="max-w-xs text-sm text-muted-foreground">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { StatsStrip };
