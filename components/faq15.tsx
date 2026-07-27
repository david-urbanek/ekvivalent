"use client";

import { motion } from "framer-motion";

import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

interface FaqItem {
  icon: string;
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
    icon: "/icons/home.webp",
    heading: "Rozumíme rodinným firmám",
    description:
      "Víme, že ve hře není jen byznys, ale i rodina, vztahy a jméno, které firmu desítky let nese. Sami z tohoto prostředí pocházíme – a proto řešíme čísla i emoce, které k nim patří.",
  },
  {
    icon: "/icons/folder.webp",
    heading: "Provedeme vás celým procesem",
    description:
      "Prodej nebo předání firmy většina majitelů řeší poprvé v životě. My ten proces známe do detailu – od ocenění přes vyjednávání až po podpis. Vy se můžete dál věnovat firmě.",
  },
  {
    icon: "/icons/profile.webp",
    heading: "Nástupnictví bez konfliktů",
    description:
      "Generační obměna je nejčastější moment, kdy rodinná firma klopýtne. Pomůžeme nastavit předání tak, aby bylo férové pro rodinu a bezpečné pro firmu – ať nástupce je, nebo není.",
  },
  {
    icon: "/icons/message.webp",
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
        <div className="mx-auto max-w-5xl">
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
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {items.map((item, idx) => {
              const wide = idx === 0 || idx === 3;
              const filled = idx === 0;
              return (
                <motion.li
                  key={idx}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-8 transition-colors md:p-10",
                    wide && "md:col-span-2",
                    filled
                      ? "border-transparent bg-gradient-to-t from-[#82a7fa] via-[#5985fb] to-[#3d63dd] text-white"
                      : wide
                        ? "bento-dark border-transparent"
                        : "bg-card hover:border-foreground/25",
                  )}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  {filled && (
                    <div className="bento-aurora pointer-events-none absolute -inset-3" />
                  )}
                  <span
                    className={cn(
                      "absolute top-4 left-5 font-mono text-xs",
                      wide ? "text-white/45" : "text-muted-foreground/70",
                    )}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={cn(
                      "relative flex h-full flex-col gap-2.5",
                      wide && "md:flex-row md:items-center md:gap-10",
                    )}
                  >
                    {!wide && (
                      <img
                        src={item.icon}
                        alt=""
                        className="mb-1 size-28 object-contain"
                      />
                    )}
                    <div className="flex flex-col gap-2.5">
                      <h3
                        className={cn(
                          "text-2xl font-semibold md:text-3xl",
                          wide && "text-white",
                        )}
                      >
                        {item.heading}
                      </h3>
                      <p
                        className={cn(
                          "text-sm md:text-base",
                          wide ? "text-white/80" : "text-muted-foreground",
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Faq15 };
