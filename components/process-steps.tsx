"use client";

import { motion } from "framer-motion";

import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

interface ProcessStepsProps {
  className?: string;
}

const steps = [
  {
    id: "01",
    title: "Nezávazná a diskrétní schůzka",
    description:
      "Poznáme se a probereme vaši situaci i cíle. Nic se tím nespouští – jen získáte jasnější obrázek o svých možnostech.",
  },
  {
    id: "02",
    title: "Posouzení situace a návrh řešení",
    description:
      "Zmapujeme firmu, rodinný kontext a hodnotu. Navrhneme cestu na míru – ať je to prodej, předání, nebo růst hodnoty.",
  },
  {
    id: "03",
    title: "Realizace krok za krokem",
    description:
      "Provedeme vás celým procesem od přípravy po podpis. Vy rozhodujete, my hlídáme detaily, čísla i diskrétnost.",
  },
];

const ProcessSteps = ({ className }: ProcessStepsProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Jak to probíhá
          </p>
          <h2 className="text-4xl font-semibold md:text-6xl">
            <FadeInText text="Tři kroky k jasnému plánu" />
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Rozhodnutí o firmě nemusíte udělat dnes. První krok je jen
            rozhovor – nezávazný a naprosto důvěrný.
          </p>
        </div>

        <div className="grid border-y md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative p-8 md:p-10",
                idx > 0 && "border-t md:border-t-0 md:border-l",
              )}
            >
              <span className="absolute top-4 left-5 text-xs text-muted-foreground/70">
                {step.id}
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold md:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProcessSteps };
