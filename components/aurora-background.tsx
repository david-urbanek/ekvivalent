"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

// Modified aurora from Aceternity UI (npx shadcn@latest add
// https://ui.aceternity.com/registry/aurora-background.json) — custom colors and animate class
const AuroraBackground = ({ className }: AuroraBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-[#f3f7ff]", className)}>
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

export { AuroraBackground };
