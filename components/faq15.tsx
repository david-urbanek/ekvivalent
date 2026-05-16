"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Building2, Handshake, Layers, Shield } from "lucide-react";

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
      "Pocházíme z prostředí rodinných a vlastnicky řízených firem. Chápeme jejich jedinečné výzvy, mezilidské vztahy i příležitosti – nejen jako poradci, ale jako lidé, kteří tím sami prošli.",
  },
  {
    icon: Layers,
    heading: "Komplexní servis od A do Z",
    description:
      "Od prvotní analýzy a valuace až po úspěšné dokončení transakce – provázíme vás celou cestou bez mezer a zbytečných překvapení. Jeden tým, jeden proces, jeden cíl.",
  },
  {
    icon: Handshake,
    heading: "Dlouhodobé partnerství",
    description:
      "Nejsme poradci na jedno použití. Budujeme vztahy postavené na důvěře, které přetrvají i po uzavření transakce. Váš úspěch je naší referencí.",
  },
  {
    icon: Shield,
    heading: "Diskrétnost jako základ",
    description:
      "Každý případ řešíme s maximální diskrétností. Vaše firemní informace jsou v bezpečí – tak, jak to u rodinných firem vždy musí být.",
  },
];

const Faq15 = ({
  title = "Proč Ekvivalent?",
  subtitle = "Nejsme běžná poradenská firma. Pocházíme z rodinných firem a rozumíme jejich jedinečným výzvám.",
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
            className="text-center text-3xl font-semibold md:text-5xl lg:mx-14"
          >
            {title}
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
                <div className="flex items-center gap-2 md:gap-2.5">
                  <item.icon className="size-5 shrink-0 md:size-6" />
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
