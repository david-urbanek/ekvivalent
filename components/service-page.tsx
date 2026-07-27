"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { AuroraBackground } from "@/components/aurora-background";
import { Button } from "@/components/ui/button";
import { FadeInText } from "@/components/fade-in-text";
import { getServicePage } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.85, delay, ease },
});

const ServicePage = ({ slug }: { slug: string }) => {
  const data = getServicePage(slug);
  if (!data) return null;
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[440px] flex-col overflow-hidden lg:h-[60svh] lg:max-h-[720px]">
        <AuroraBackground />
        <div className="relative container flex flex-1 flex-col items-center justify-center py-28 text-center">
          <div className="flex max-w-3xl flex-col items-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-sm font-medium tracking-wider text-muted-foreground uppercase"
            >
              Služby
            </motion.p>
            <h1 className="text-5xl font-semibold tracking-tighter text-balance lg:text-6xl">
              <FadeInText text={data.title} immediate delay={0.25} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              {data.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease }}
            >
              <Button
                className="h-11 rounded-full px-6 text-base"
                render={<a href="/#kontakt" />}
                nativeButton={false}
              >
                Domluvit si schůzku
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Situace / Řešení / Výsledek */}
      {data.highlights && (
        <section className="pt-4 pb-10">
          <div className="container">
            {/* Hairline strip — same visual language as the client reference cells */}
            <div className="grid border-y md:grid-cols-3">
              {data.highlights.map((h, idx) => (
                <motion.div
                  key={h.label}
                  {...fadeUp(idx * 0.08)}
                  className={cn(
                    "relative p-8 md:p-10",
                    idx > 0 && "border-t md:border-t-0 md:border-l",
                  )}
                >
                  <span className="absolute top-4 left-5 text-xs text-muted-foreground/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 mb-2 text-sm font-bold tracking-wider text-[#5985fb] uppercase">
                    {h.label}
                  </p>
                  <p className="leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Intro with image */}
      <section className="py-16">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp()}>
              <h2 className="mb-6 text-4xl font-medium md:text-5xl">
                <FadeInText text={data.intro.heading} />
              </h2>
              <p className="leading-relaxed text-muted-foreground md:text-lg">
                {data.intro.text}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="relative h-72 overflow-hidden rounded-2xl border md:h-96">
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5985fb]/40 via-[#7bafd4]/15 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16">
        <div className="container">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
              Co nabízíme
            </p>
            <h2 className="mb-4 text-4xl font-medium md:text-5xl">
              <FadeInText text="S čím vám pomůžeme" />
            </h2>
            <p className="max-w-xl text-muted-foreground">{data.offeringsSubtitle}</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {data.offerings.map((offering, idx) => {
              const wide = idx === 0 || idx === 3;
              const filled = idx === 0;
              return (
                <motion.div
                  key={offering.title}
                  {...fadeUp(idx * 0.08)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-8 transition-colors md:p-10",
                    wide && "md:col-span-2",
                    filled
                      ? "border-transparent bg-gradient-to-t from-[#82a7fa] via-[#5985fb] to-[#3d63dd] text-white"
                      : wide
                        ? "bento-dark border-transparent"
                        : "bg-card hover:border-foreground/25",
                  )}
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
                  <div className={cn("relative flex h-full flex-col", wide && "md:flex-row md:items-center md:gap-10")}>
                    {!wide && (
                      <img
                        src={offering.icon}
                        alt=""
                        className="mb-5 size-24 object-contain"
                      />
                    )}
                    <div>
                      <h3 className={cn("mb-2 text-2xl font-semibold md:text-3xl", wide && "text-white")}>
                        {offering.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm leading-relaxed",
                          wide ? "text-white/80" : "text-muted-foreground",
                        )}
                      >
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
            <motion.div {...fadeUp()} className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                  Náš proces
                </p>
                <h2 className="mb-5 text-4xl font-medium md:text-5xl">
                  <FadeInText text="Strukturovaný a ověřený postup" />
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Každý krok má jasný cíl a výstup – vy máte celou dobu přehled
                  o tom, kde proces je a co následuje.
                </p>
              </div>
            </motion.div>
            <div className="lg:col-span-3">
              {data.process.map((step, idx) => (
                <motion.div
                  key={step.id}
                  {...fadeUp(idx * 0.05)}
                  className="flex gap-6 border-b py-7 first:pt-0 last:border-b-0"
                >
                  <span className="font-mono text-sm text-muted-foreground">{step.id}</span>
                  <div>
                    <h3 className="mb-1.5 text-2xl font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeUp()}
            className="bento-dark relative overflow-hidden rounded-2xl px-8 py-16 text-center md:px-16 md:py-20"
          >
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-balance md:text-5xl">
              <FadeInText text="Pojďme si promluvit o vašich cílech" />
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl leading-relaxed text-white/85 md:text-lg">
              Rádi vám připravíme řešení přesně na míru vaší situaci.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-11 w-full rounded-full bg-white px-6 text-base text-neutral-900 hover:bg-neutral-200 [a]:hover:bg-neutral-200 sm:w-auto"
                render={<a href="/#kontakt" />}
                nativeButton={false}
              >
                Domluvte si nezávaznou schůzku
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Button>
              <Button
                variant="ghost"
                className="h-11 w-full rounded-full border-white/40 px-6 text-base text-white hover:border-white hover:bg-white hover:text-neutral-900 sm:w-auto"
                render={<a href="/#sluzby" />}
                nativeButton={false}
              >
                Všechny služby{" "}
                <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { ServicePage };
