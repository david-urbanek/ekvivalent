"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { AuroraBackground } from "@/components/aurora-background";
import { Button } from "@/components/ui/button";
import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.85, delay, ease },
});

const ownerQuestions = [
  "Kdo firmu převezme?",
  "Co když děti nechtějí?",
  "Jak zajistit spravedlnost v rodině?",
  "Jak ochránit hodnotu firmy?",
];

const challenges = [
  {
    icon: "/icons/home.webp",
    title: "Rodinné dynamiky",
    description:
      "Zvládnutí citových a rodinných vztahů během předání firmy – aby rozhodnutí o firmě nerozdělila rodinu.",
  },
  {
    icon: "/icons/share.webp",
    title: "Férovost a spravedlnost",
    description:
      "Zajištění férového řešení pro všechny členy rodiny – i pro ty, kteří ve firmě aktivně nepůsobí.",
  },
  {
    icon: "/icons/receipt.webp",
    title: "Právní a daňové aspekty",
    description:
      "Optimální strukturování předání z právního a daňového hlediska, bez zbytečných rizik a nákladů.",
  },
  {
    icon: "/icons/analytics.webp",
    title: "Kontinuita podnikání",
    description:
      "Zachování hodnoty firmy a vztahů se zákazníky, dodavateli i zaměstnanci během celého přechodu.",
  },
];

const solutions = [
  {
    icon: "/icons/message.webp",
    title: "Rodinná strategie",
    description:
      "Facilitace otevřené komunikace a vytvoření jasné vize pro budoucnost firmy.",
  },
  {
    icon: "/icons/folder.webp",
    title: "Právní a daňové aspekty",
    description:
      "Spolupráce s právníky a daňovými poradci pro hladký přechod.",
  },
  {
    icon: "/icons/profile.webp",
    title: "Příprava nástupců",
    description: "Program rozvoje a mentoringu pro další generaci.",
  },
  {
    icon: "/icons/menu.webp",
    title: "Governance",
    description: "Nastavení rodinné governance a jasných pravidel řízení.",
  },
  {
    icon: "/icons/wallet.webp",
    title: "Valuace a strukturování",
    description:
      "Profesionální ocenění a optimální nastavení vlastnické struktury.",
  },
  {
    icon: "/icons/send.webp",
    title: "Dlouhodobý doprovod",
    description:
      "Podpora i po předání firmy pro zajištění úspěšné integrace.",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Posouzení situace",
    description: "Analýza současné situace firmy, rodiny a připravenosti nástupců.",
  },
  {
    id: "02",
    title: "Strategické plánování",
    description: "Vytvoření plánu generační obměny s časovou osou a milníky.",
  },
  {
    id: "03",
    title: "Příprava nástupců",
    description: "Rozvoj dovedností a zkušeností budoucího vedení.",
  },
  {
    id: "04",
    title: "Ocenění a valuace",
    description: "Ocenění firmy a nastavení optimální vlastnické struktury.",
  },
  {
    id: "05",
    title: "Implementace",
    description: "Postupné předávání odpovědností a řízení.",
  },
  {
    id: "06",
    title: "Monitoring a podpora",
    description: "Průběžné sledování procesu a podpora při výzvách.",
  },
];

interface GenerationalChangeProps {
  className?: string;
}

const GenerationalChange = ({ className }: GenerationalChangeProps) => {
  return (
    <div className={cn(className)}>
      {/* Hero */}
      <section className="relative flex min-h-[480px] flex-col overflow-hidden lg:h-[70svh] lg:max-h-[800px]">
        <AuroraBackground />
        <div className="relative container flex flex-1 flex-col items-center justify-center py-28 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
            className="flex max-w-3xl flex-col items-center space-y-8"
          >
            <h1 className="text-5xl font-semibold tracking-tighter text-balance lg:text-7xl">
              <FadeInText text="Generační obměna" immediate delay={0.2} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Generační obměna není jen o číslech. Je o vztazích, odpovědnosti
              a budoucnosti firmy.
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
          </motion.div>
        </div>
      </section>

      {/* Intro + statistics + owner questions */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp()}>
              <h2 className="mb-6 text-4xl font-medium md:text-5xl">
                <FadeInText text="Generační obměna bez ztráty hodnoty" />
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Generační obměna je jednou z nejdůležitějších a zároveň
                nejcitlivějších fází v životě rodinné firmy. Statistiky
                ukazují, že jen zlomek firem ji zvládne bez ztráty hodnoty.
              </p>
              <p className="mb-10 leading-relaxed text-muted-foreground">
                Pomáháme rodinným firmám úspěšně projít tímto klíčovým
                procesem a zajistit kontinuitu podnikání pro další generaci.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border p-6">
                  <p className="bento-number text-5xl font-semibold tracking-tight">
                    1/3
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    rodinných firem úspěšně přechází do druhé generace
                  </p>
                </div>
                <div className="rounded-2xl border p-6">
                  <p className="bento-number text-5xl font-semibold tracking-tight">
                    12 %
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    firem se podaří předat až do třetí generace
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="flex flex-col justify-center">
              <div className="rounded-2xl border bg-card p-8 md:p-10">
                <p className="mb-6 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                  Majitel si klade tyto otázky
                </p>
                <ul className="space-y-5">
                  {ownerQuestions.map((q) => (
                    <li key={q} className="border-b pb-5 last:border-b-0 last:pb-0">
                      <span className="text-lg font-medium">{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-muted-foreground">
                  Pomáháme tyto otázky řešit s respektem k firmě i rodině.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key challenges */}
      <section className="py-20">
        <div className="container">
          <motion.div {...fadeUp()} className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-semibold md:text-6xl">
              <FadeInText text="Klíčové výzvy" />
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Generační obměna přináší jedinečné výzvy, které je třeba citlivě
              řešit.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {challenges.map((challenge, idx) => {
              const wide = idx === 0 || idx === 3;
              const filled = idx === 0;
              return (
                <motion.div
                  key={challenge.title}
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
                        src={challenge.icon}
                        alt=""
                        className="mb-5 size-24 object-contain"
                      />
                    )}
                    <div>
                      <h3 className={cn("mb-2 text-2xl font-semibold md:text-3xl", wide && "text-white")}>
                        {challenge.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm leading-relaxed",
                          wide ? "text-white/80" : "text-muted-foreground",
                        )}
                      >
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative photo band */}
      <div className="container py-10">
        <div className="relative h-[28rem] overflow-hidden rounded-2xl border md:h-[36rem]">
          <motion.img
            src="/pipeline.jpg"
            alt=""
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Solutions */}
      <section className="py-20">
        <div className="container">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
              Naše řešení
            </p>
            <h2 className="mb-4 text-4xl font-medium md:text-6xl">
              <FadeInText text="Komplexní přístup k úspěšné obměně" />
            </h2>
          </motion.div>
          <div className="overflow-hidden">
            <div className="-mt-px -ml-px grid sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, idx) => (
                <motion.div
                  key={solution.title}
                  {...fadeUp(idx * 0.06)}
                  className="relative border-t border-l p-8 md:p-10"
                >
                  <span className="absolute top-4 left-5 font-mono text-xs text-muted-foreground/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <img src={solution.icon} alt="" className="mb-4 size-20 object-contain" />
                  <h3 className="mb-2 text-2xl font-semibold">{solution.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
            <motion.div {...fadeUp()} className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                  Proces
                </p>
                <h2 className="mb-5 text-4xl font-medium md:text-5xl">
                  <FadeInText text="Proces generační obměny" />
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  Strukturovaný přístup k úspěšnému předání firmy. Generační
                  obměna není jednorázová událost, ale dlouhodobý proces,
                  který obvykle trvá 2–5 let i déle.
                </p>
                <div className="overflow-hidden rounded-2xl border">
                  <img
                    src="/yellow-pipeline.png"
                    alt=""
                    className="h-56 w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <div className="lg:col-span-3">
              {processSteps.map((step, idx) => (
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

      {/* Early preparation + CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            {...fadeUp()}
            className="bento-dark relative overflow-hidden rounded-2xl px-8 py-16 text-center md:px-16 md:py-20"
          >
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-balance md:text-5xl">
              <FadeInText text="Včasná příprava je klíčová" />
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl leading-relaxed text-white/85 md:text-lg">
              Čím dříve začnete s přípravou, tím hladší bude přechod a větší
              šance na úspěch. Pomůžeme vám naplánovat a úspěšně realizovat
              předání firmy další generaci.
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
                Naše služby{" "}
                <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { GenerationalChange };
