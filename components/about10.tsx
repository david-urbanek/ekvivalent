"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const profile = {
  title: "ekvivalent s.r.o.",
  subtitle: "M&A poradenství pro rodinné firmy",
  bio: `Stojíme za Ekvivalentem s jedním cílem: pomáhat majitelům rodinných a vlastnicky řízených firem zvládat klíčové momenty jejich podnikání. Disponujeme letitými zkušenostmi v oblasti M&A, corporate finance, private equity a strategického řízení – a víme, že rozhodnutí o prodeji, koupi nebo předání podniku nejsou jen finanční, ale často i velmi osobní.`,
  vision: `Ve své práci propojujeme strukturovaný investiční přístup s porozuměním každodenní realitě řízení firem a dlouhodobé odpovědnosti jejich vlastníků. Podíleli jsme se jak na transakčních procesech, tak na přímém řízení a rozvoji společností – vždy z pohledu investora i managementu zároveň.`,
  outro: `Diskrétnost a dlouhodobé partnerství jsou základem naší práce. Rádi si s vámi promluvíme o vašich cílech a najdeme řešení na míru.`,
  team: [
    {
      id: "01",
      item: "Jan Hevessy",
      type: "Zakladatel & Managing Partner",
      credentials: ["Oxford · Private Equity", "Wharton · Family Wealth Management", "Columbia Business School"],
      bio: "Více než 20 let zkušeností v private equity, M&A a strategickém řízení firem. Působil jako CEO Dürr Systems Czech Republic, Managing Director Minority Investments a CEO SPILBERK investiční fond SICAV. Specializuje se na akvizice, restrukturalizace a tvorbu hodnoty v rodinných a vlastnicky řízených firmách.",
    },
  ],
};

interface About10Props {
  className?: string;
}

const About10 = ({ className }: About10Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="sticky top-20 md:p-6">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary">
                    <span className="text-xs font-bold text-primary-foreground uppercase tracking-tight">EKV</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{profile.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav>
                <div className="py-4">
                  <a href="#kontakt" className="group flex p-0 text-start text-xl font-medium hover:bg-transparent sm:text-2xl">
                    <span className="border-b-2 border-border pb-0.5 transition-colors">
                      Kontaktujte nás
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:p-6">
            <div className="max-w-4xl">
              <motion.h1 {...fadeUp()} className="mb-12 text-7xl font-semibold">O nás</motion.h1>

              <div className="space-y-12">
                <motion.p {...fadeUp(0.05)} className="w-full text-2xl leading-[36px] font-medium md:max-w-2xl">
                  {profile.bio}
                </motion.p>

                <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium">Rozumíme transakcím i realitě řízení firem</h2>
                  <p className="leading-relaxed">{profile.vision}</p>
                </motion.div>

                <motion.div
                  {...fadeUp(0.05)}
                  className="my-12 overflow-hidden rounded-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Jan Hevessy – Ekvivalent"
                    className="w-full object-cover"
                  />
                </motion.div>

                <motion.div {...fadeUp(0.05)}>
                  <h2 className="mb-8 text-2xl font-medium">Tým</h2>
                  <div className="space-y-0">
                    {profile.team.map(({ id, item, type, credentials, bio }) => (
                      <div key={id} className="border-b py-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-sm text-muted-foreground">{id}</span>
                            <span className="text-lg font-medium">{item}</span>
                          </div>
                          <span className="text-sm text-muted-foreground shrink-0">{type}</span>
                        </div>
                        {bio && (
                          <p className="ml-10 text-sm text-muted-foreground leading-relaxed mb-3">{bio}</p>
                        )}
                        {credentials && (
                          <div className="ml-10 flex flex-wrap gap-2">
                            {credentials.map((c) => (
                              <span key={c} className="text-xs border rounded-full px-3 py-1 text-muted-foreground">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.05)} className="mt-16">
                  <p className="leading-relaxed">{profile.outro}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About10 };
