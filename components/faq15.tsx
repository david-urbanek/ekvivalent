"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Building2, Handshake, Layers, Shield } from "lucide-react";

import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

interface FaqItem {
  icon: LucideIcon;
  heading: string;
  description: string;
}

interface Faq15Props {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
  className?: string;
}

const defaultItems: FaqItem[] = [
  {
    icon: Building2,
    heading: "Rozumíme rodinným firmám",
    description:
      "Víme, že ve hře není jen byznys, ale i rodina, vztahy a jméno, které firmu desítky let nese. Sami z tohoto prostředí pocházíme – a proto řešíme čísla i emoce, které k nim patří.",
  },
  {
    icon: Layers,
    heading: "Provedeme vás celým procesem",
    description:
      "Prodej nebo předání firmy většina majitelů řeší poprvé v životě. My ten proces známe do detailu – od ocenění přes vyjednávání až po podpis. Vy se můžete dál věnovat firmě.",
  },
  {
    icon: Handshake,
    heading: "Nástupnictví bez konfliktů",
    description:
      "Generační obměna je nejčastější moment, kdy rodinná firma klopýtne. Pomůžeme nastavit předání tak, aby bylo férové pro rodinu a bezpečné pro firmu – ať nástupce je, nebo není.",
  },
  {
    icon: Shield,
    heading: "Diskrétnost jako základ",
    description:
      "O záměru prodat nesmí předčasně vědět zaměstnanci, konkurence ani obchodní partneři. Celý proces vedeme důvěrně a informace pouštíme jen tomu, komu skutečně patří.",
  },
];

const Faq15 = ({
  title = "Proč Ekvivalent?",
  subtitle = "Prodej nebo předání firmy uděláte jednou za život. My jsme takových kroků doprovodili desítky – a víme, co v nich rozhoduje.",
  items = defaultItems,
  className,
}: Faq15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-center text-4xl font-semibold md:text-6xl lg:mx-14"
          >
            <FadeInText text={title} />
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mt-4 text-center text-muted-foreground md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex flex-col gap-2.5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5985fb] to-[#b8d8f0]">
                    <item.icon className="size-5 text-white" />
                  </div>
                  <h3 className="font-semibold md:text-lg">{item.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Faq15 };
