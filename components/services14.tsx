"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceProps = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Zvýšení hodnoty firmy",
    description:
      "Strategické poradenství a optimalizace procesů pro růst ziskovosti a hodnoty vaší firmy.",
    bullets: [
      "Strategické poradenství",
      "Optimalizace procesů",
      "Příprava na růst",
      "Zvýšení ziskovosti",
    ],
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "#kontakt",
  },
  {
    title: "Prodej firmy",
    description:
      "Komplexní doprovod celým procesem prodeje – od valuace až po úspěšné dokončení transakce.",
    bullets: [
      "Příprava firmy na prodej",
      "Valuace",
      "Hledání kupujících",
      "Doprovod procesem",
    ],
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "#kontakt",
  },
  {
    title: "Koupě firmy",
    description:
      "Vyhledání vhodných příležitostí, due diligence a strukturování transakce.",
    bullets: [
      "Due diligence",
      "Vyhledání příležitostí",
      "Strukturování transakce",
      "Post-merger integrace",
    ],
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "#kontakt",
  },
  {
    title: "Management Buy-Out",
    description:
      "Pomoc manažerům s převzetím firmy včetně financování a právního doprovodu.",
    bullets: [
      "Pomoc manažerům",
      "Financování MBO",
      "Právní struktura",
      "Podpora při jednání",
    ],
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "#kontakt",
  },
];

interface Services14Props {
  className?: string;
}

const Services14 = ({ className }: Services14Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl">
            Naše služby
          </h2>
          <p className="max-w-xl text-base tracking-tight text-muted-foreground">
            Firma funguje, ale její hodnota neodpovídá plnému potenciálu.
            Pomůžeme vám to změnit – od strategie až po úspěšné dokončení
            transakce.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <span className="mb-3 inline-block font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="size-3.5 shrink-0 text-foreground" />
                        <span className="text-xs font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="w-fit"
                    render={<a href={service.url} />}
                    nativeButton={false}
                  >
                    Zjistit více <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services14 };
