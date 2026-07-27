"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { AuroraBackground } from "@/components/aurora-background";
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
                  className="text-[#5985fb]"
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
          <motion.div
            variants={fadeUp}
            className="flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          >
            <Button
              className="h-11 w-full rounded-full px-6 text-base sm:w-auto"
              render={<a href="#kontakt" />}
              nativeButton={false}
            >
              Mám zájem o konzultaci
            </Button>
            <Button
              variant="ghost"
              className="h-11 w-full rounded-full px-6 text-base sm:w-auto"
              render={<a href="#sluzby" />}
              nativeButton={false}
            >
              Zjistit více{" "}
              <ArrowRight className="transition-transform group-hover/button:translate-x-0.5" />
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
