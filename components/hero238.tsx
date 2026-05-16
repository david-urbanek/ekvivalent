"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Handshake, Shield, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
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
  const trustSignals = [
    { icon: TrendingUp, title: "Růst hodnoty" },
    { icon: Building2, title: "Rodinné firmy" },
    { icon: Shield, title: "Diskrétnost" },
    { icon: Handshake, title: "Partnerský přístup" },
  ];

  return (
    <section
      className={cn("min-h-[600px] overflow-hidden lg:h-svh lg:max-h-[1200px]", className)}
    >
      <AuroraBackground>
        <div className="relative container flex h-full flex-col py-32 lg:flex-row">
          <motion.div
            className="mt-auto space-y-12 lg:w-1/2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="mt-3 max-w-xl text-5xl font-medium font-semibold tracking-tighter lg:text-6xl"
            >
              Rozumíme rodinným firmám. Pomáháme jim růst.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground leading-relaxed">
              Zvyšujeme hodnotu rodinných firem a pomáháme jejich majitelům s dlouhodobým růstem a úspěšnou generační obměnou.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <Button render={<a href="#kontakt" />} nativeButton={false}>Mám zájem o konzultaci</Button>
              <Button variant="ghost" render={<a href="#sluzby" />} nativeButton={false}>
                Zjistit více <ArrowRight />
              </Button>
            </motion.div>
            <motion.ul variants={fadeUp} className="mt-20 flex flex-wrap gap-4">
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <li key={signal.title} className="flex items-center gap-2">
                    <Icon className="size-4" />
                    <span className="text-sm">{signal.title}</span>
                    {index !== trustSignals.length - 1 && (
                      <div className="ml-2 size-1 rounded-full bg-foreground" />
                    )}
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 bottom-0 max-w-[260px] rounded-2xl bg-primary p-6 text-sm text-secondary"
            >
              <p className="mb-2 font-semibold text-base">Diskrétnost a partnerství</p>
              <p className="text-muted-foreground leading-relaxed">
                Každý případ řešíme s maximální diskrétností a dlouhodobým závazkem vůči vašim cílům.
              </p>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export { Hero238 };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/aurora-background.json
// Modified so we could change the aurora animate class and colors

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-[#f3f7ff] text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#ddeeff_10%,#4a8ab8_15%,#b8d8f0_20%,#fff_25%,#7bafd4_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

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
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `pointer-events-none absolute -inset-[10px] animate-aurora-background [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] opacity-60 blur-[10px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,var(--gray-400)_15%,var(--gray-200)_20%,var(--white)_25%,var(--gray-800)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:animate-aurora-background after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:mix-blend-multiply after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
