"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Handshake, Shield, TrendingUp } from "lucide-react";
import { useRef, useState } from "react";
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

const chartPoints = [
  { x: 32,  y: 65, year: "2018", value: "170 M" },
  { x: 71,  y: 61, year: "2019", value: "192 M" },
  { x: 110, y: 63, year: "2020", value: "183 M" },
  { x: 150, y: 55, year: "2021", value: "215 M" },
  { x: 189, y: 43, year: "2022", value: "260 M" },
  { x: 228, y: 27, year: "2023", value: "318 M" },
  { x: 268, y: 5,  year: "2024", value: "400 M" },
];
const linePoints = chartPoints.map(({ x, y }) => `${x},${y}`).join(" ");
const fillPoints = [...chartPoints.map(({ x, y }) => `${x},${y}`), "268,80", "32,80"].join(" ");

const barData = [
  { x: 8,   h: 22, label: "2020" },
  { x: 47,  h: 30, label: "2021" },
  { x: 86,  h: 39, label: "2022" },
  { x: 125, h: 49, label: "2023" },
  { x: 164, h: 60, label: "2024" },
];

const AreaChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * 276;
    let nearest = 0;
    let minDist = Infinity;
    chartPoints.forEach(({ x }, i) => {
      const d = Math.abs(x - svgX);
      if (d < minDist) { minDist = d; nearest = i; }
    });
    setHovered(nearest);
  };

  const pt = hovered !== null ? chartPoints[hovered] : null;
  const tipX = pt ? (pt.x > 200 ? pt.x - 64 : pt.x + 8) : 0;
  const tipY = pt ? (pt.y < 20 ? pt.y + 8 : pt.y - 26) : 0;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 276 80"
      className="w-full h-full cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
    >
      <defs>
        <linearGradient id="hero-area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5985fb" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#5985fb" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <text x="28" y="9"  textAnchor="end" fontSize="7" fill="#94a3b8">420M</text>
      <text x="28" y="30" textAnchor="end" fontSize="7" fill="#94a3b8">270M</text>
      <text x="28" y="56" textAnchor="end" fontSize="7" fill="#94a3b8">120M</text>
      <line x1="32" y1="6"  x2="268" y2="6"  stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="32" y1="27" x2="268" y2="27" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="32" y1="53" x2="268" y2="53" stroke="#e2e8f0" strokeWidth="0.5" />
      <polygon points={fillPoints} fill="url(#hero-area-fill)" />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#5985fb"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {hovered !== chartPoints.length - 1 && (
        <>
          <circle cx="268" cy="5" r="7"   fill="#5985fb" fillOpacity="0.15" />
          <circle cx="268" cy="5" r="3.5" fill="#5985fb" />
        </>
      )}
      {pt && (
        <g>
          <line
            x1={pt.x} y1="0" x2={pt.x} y2="80"
            stroke="#5985fb" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.35"
          />
          <circle cx={pt.x} cy={pt.y} r="8"   fill="#5985fb" fillOpacity="0.12" />
          <circle cx={pt.x} cy={pt.y} r="3.5" fill="#5985fb" />
          <rect x={tipX} y={tipY} width="58" height="18" rx="4" fill="#0f172a" opacity="0.82" />
          <text
            x={tipX + 29} y={tipY + 12}
            textAnchor="middle" fontSize="7" fill="white" fontWeight="600"
          >
            {pt.year} · {pt.value}
          </text>
        </g>
      )}
    </svg>
  );
};

const BentoCharts = () => (
  <div className="grid grid-cols-2 grid-rows-[3fr_2fr] gap-3 h-[440px] p-6">
    {/* Area chart — value over time */}
    <div className="col-span-2 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm p-5 flex flex-col">
      <div className="flex items-start justify-between mb-3 shrink-0">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Hodnota podniku
          </p>
          <p className="text-lg font-semibold tracking-tight mt-0.5">+248 % za 6 let</p>
        </div>
        <span className="text-[11px] text-emerald-600 bg-emerald-50/80 px-2.5 py-0.5 rounded-full font-semibold shrink-0">
          ▲ 28 % YoY
        </span>
      </div>
      <div className="flex-1 min-h-0">
        <AreaChart />
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 mt-2 pl-8 shrink-0">
        <span>2018</span>
        <span>2020</span>
        <span>2022</span>
        <span>2024</span>
      </div>
    </div>

    {/* Bar chart — EBITDA */}
    <div className="rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm p-4 flex flex-col">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 shrink-0">
        EBITDA marže
      </p>
      <p className="text-sm font-semibold tracking-tight mt-0.5 mb-2 shrink-0">Meziroční růst</p>
      <div className="flex-1 min-h-0">
        <svg viewBox="0 0 204 72" className="w-full h-full">
          <defs>
            <linearGradient id="hero-bar-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5985fb" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          {barData.map((bar) => (
            <g key={bar.x}>
              <rect
                x={bar.x} y={62 - bar.h}
                width="30" height={bar.h}
                rx="5" fill="url(#hero-bar-fill)"
              />
              <text x={bar.x + 15} y="72" textAnchor="middle" fontSize="7.5" fill="#94a3b8">
                {bar.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>

    {/* 12 let zkušeností */}
    <div className="rounded-2xl bg-gradient-to-br from-[#4a78f0]/80 to-[#7bafd4]/80 backdrop-blur-sm shadow-sm p-4 text-white flex flex-col justify-between">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/55">
        Zkušenosti
      </p>
      <div>
        <p className="text-4xl font-bold tracking-tighter leading-none">
          12 <span className="text-xl font-semibold">let</span>
        </p>
        <p className="text-[11px] text-white/65 mt-1.5">s rodinnými firmami</p>
      </div>
      <p className="text-[10px] text-white/35">ekvivalent advisory</p>
    </div>
  </div>
);

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

          {/* Right side — bento charts, hidden on mobile, vertically centered */}
          <div className="relative hidden md:flex items-center self-center w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <BentoCharts />
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
