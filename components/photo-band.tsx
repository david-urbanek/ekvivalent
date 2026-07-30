"use client";

import { motion } from "framer-motion";

interface PhotoBandProps {
  className?: string;
}

/** Decorative band — modern architecture photo. */
const PhotoBand = ({ className }: PhotoBandProps) => {
  return (
    <div className={className}>
      <div className="relative h-96 overflow-hidden rounded-2xl border md:h-[34rem]">
        <motion.img
          src="/industry-park.png"
          alt=""
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export { PhotoBand };
