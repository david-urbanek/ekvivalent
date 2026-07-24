"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInText } from "@/components/fade-in-text";
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
      "Firma šlape, ale stojí a padá s vámi? Snížíme závislost na majiteli, zprofesionalizujeme řízení a připravíme firmu na růst – i na den, kdy ji jednou budete předávat.",
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
      "Prodáváte celoživotní dílo – a chcete, aby přežilo i bez vás. Najdeme kupce, který na vaši práci naváže, a pohlídáme, abyste neprodávali pod cenou ani pod tlakem.",
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
      "Chcete růst rychleji, než dovolí organický vývoj? Najdeme akviziční cíl, který k vaší firmě sedí, prověříme ho a nastavíme transakci tak, aby dávala smysl i za pět let.",
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
      "Když v rodině nástupce není, může firmu převzít management, který ji zná. Pomůžeme s financováním i strukturou převzetí, aby bylo férové pro obě strany.",
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
          <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Služby
          </p>
          <h2 className="mb-4 text-4xl font-medium text-foreground md:text-6xl">
            <FadeInText text="Naše služby" />
          </h2>
          <p className="max-w-xl text-base tracking-tight text-muted-foreground">
            Ať firmu předáváte dětem, prodáváte, nebo chcete, aby příští
            generaci předala víc, než jste zdědili vy – provedeme vás od
            prvního rozhodnutí po podpis.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-colors hover:border-foreground/25 md:flex-row"
            >
              <div className="relative h-64 shrink-0 overflow-hidden md:h-auto md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8 md:p-12">
                <div>
                  <span className="mb-3 inline-block font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-2xl font-semibold lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="size-4 shrink-0 text-[#5985fb]" />
                        <span className="text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <Button
                    variant="ghost"
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
