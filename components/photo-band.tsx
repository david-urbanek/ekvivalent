"use client";

import { motion } from "framer-motion";

import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

interface PhotoBandProps {
  className?: string;
}

/** Decorative band — heading + modern architecture photo with a blue gradient wash. */
const PhotoBand = ({ className }: PhotoBandProps) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <h2 className="text-4xl font-semibold md:text-6xl">
          <FadeInText text="Hodnota, která přetrvá generace" />
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg">
          Firmu budujete roky, často celý život. Naší prací je, aby její
          hodnota rostla dál – ať už ji předáváte další generaci, nebo
          připravujete na prodej.
        </p>
      </motion.div>
      <div className="relative h-96 overflow-hidden rounded-2xl border md:h-[34rem]">
        <motion.img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt=""
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5985fb]/50 via-[#7bafd4]/25 to-transparent" />
      </div>
    </div>
  );
};

export { PhotoBand };
