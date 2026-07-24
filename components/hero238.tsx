"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInText } from "@/components/fade-in-text";
import { LogoStrip } from "@/components/logo-strip";
import { WordRotate } from "@/components/word-rotate";
import { cn } from "@/lib/utils";

interface Hero238Props {
  className?: string;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

// Modified aurora from Aceternity UI (npx shadcn@latest add
// https://ui.aceternity.com/registry/aurora-background.json) — custom colors and animate class
const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f3f7ff]">
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--gray-200": "#5985fb",
            "--gray-400": "#7293fa",
            "--gray-800": "#7bb8e1",
            "--black": "#ddeeff",
            "--white": "#fff",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] animate-aurora-background [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] opacity-60 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,var(--gray-400)_15%,var(--gray-200)_20%,var(--white)_25%,var(--gray-800)_30%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:animate-aurora-background after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:mix-blend-multiply after:content-[""]`,
            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        ></div>
      </div>
      {/* Blend into the white page below */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
};

const Hero238 = ({ className }: Hero238Props) => {
  return (
    <section
      className={cn(
        "relative flex min-h-[600px] flex-col overflow-hidden lg:h-svh lg:max-h-[1100px]",
        className,
      )}
    >
      <AuroraBackground />
      <div className="relative container flex flex-1 flex-col items-center justify-center py-32 text-center">
        <motion.div
          className="flex max-w-3xl flex-col items-center space-y-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl font-semibold tracking-tighter text-balance lg:text-7xl">
            <FadeInText text="Rozumíme rodinným firmám." immediate delay={0.4} className="block" />
            <span className="block lg:whitespace-nowrap">
              <FadeInText text="Pomáháme jim" immediate delay={0.9} />{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.2, ease }}
                className="inline-block"
              >
                <WordRotate
                  words={["růst.", "uspět.", "vzkvétat."]}
                  className="text-[#4a78f0]"
                />
              </motion.span>
            </span>
          </h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Prodej firmy, předání další generaci nebo vstup investora –
            provedeme vás rozhodnutími, která majitel dělá jen jednou za život.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <Button
              className="h-11 rounded-full px-6 text-base"
              render={<a href="#kontakt" />}
              nativeButton={false}
            >
              Mám zájem o konzultaci
            </Button>
            <Button
              variant="ghost"
              className="h-11 rounded-full px-6 text-base"
              render={<a href="#sluzby" />}
              nativeButton={false}
            >
              Zjistit více <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Client references anchored to the hero's bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4, ease }}
        className="relative border-t bg-white/30 backdrop-blur-sm"
      >
        <LogoStrip />
      </motion.div>
    </section>
  );
};

export { Hero238 };
