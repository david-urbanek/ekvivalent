export interface ServiceOffering {
  /** Path to a glass icon in /public/icons */
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  /** Optional Situace / Řešení / Výsledek strip under the hero */
  highlights?: { label: string; text: string }[];
  intro: { heading: string; text: string };
  offeringsSubtitle: string;
  offerings: ServiceOffering[];
  process: ServiceProcessStep[];
  image: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "zvyseni-hodnoty-firmy",
    title: "Zvýšení hodnoty firmy",
    tagline: "Od strategie k měřitelné hodnotě.",
    highlights: [
      {
        label: "Situace",
        text: "Firma funguje, ale její hodnota neodpovídá potenciálu.",
      },
      {
        label: "Řešení",
        text: "Pomáháme majitelům identifikovat klíčové faktory hodnoty a připravit firmu na další fázi růstu nebo prodej.",
      },
      {
        label: "Výsledek",
        text: "Vyšší ziskovost, lepší řiditelnost a silnější vyjednávací pozice.",
      },
    ],
    intro: {
      heading: "Od strategie k měřitelné hodnotě",
      text: "Pomáháme rodinným firmám maximalizovat jejich hodnotu prostřednictvím strategického poradenství, optimalizace procesů a přípravy na další fázi růstu nebo prodeje.",
    },
    offeringsSubtitle: "Komplexní podpora růstu a hodnoty rodinných firem.",
    offerings: [
      {
        icon: "/icons/analytics.webp",
        title: "Strategické poradenství",
        description: "Identifikace růstových příležitostí a vytvoření dlouhodobé strategie.",
      },
      {
        icon: "/icons/menu.webp",
        title: "Optimalizace procesů",
        description: "Zefektivnění operací a snížení nákladů při zachování kvality.",
      },
      {
        icon: "/icons/send.webp",
        title: "Příprava na růst nebo prodej",
        description: "Posílení pozice firmy pro další expanzi nebo výhodnou transakci.",
      },
      {
        icon: "/icons/wallet.webp",
        title: "Zvýšení ziskovosti",
        description: "Implementace opatření pro trvalé zvýšení marží a cash flow.",
      },
    ],
    process: [
      { id: "01", title: "Zmapování reality", description: "Důkladná analýza současného stavu firmy." },
      { id: "02", title: "Odhalení potenciálu", description: "Identifikace klíčových příležitostí pro růst." },
      { id: "03", title: "Plán na 90 dní", description: "Vypracování akčního plánu." },
      { id: "04", title: "Řízená realizace", description: "Implementace změn s průběžným monitoringem." },
      { id: "05", title: "Výsledky a škálování", description: "Měření výsledků a kontinuální optimalizace." },
    ],
    image: "/automation.png",
  },
  {
    slug: "prodej-firmy",
    title: "Prodej firmy",
    tagline: "Komplexní doprovod celým procesem prodeje.",
    intro: {
      heading: "Příprava firmy na úspěšný prodej",
      text: "Doprovázíme vás od přípravy firmy na prodej, přes valuaci a hledání kupujících, až po úspěšné dokončení transakce. Zajistíme vám férovou cenu a hladký průběh celého procesu.",
    },
    offeringsSubtitle: "Komplexní podpora při prodeji rodinné firmy.",
    offerings: [
      {
        icon: "/icons/folder.webp",
        title: "Příprava firmy na prodej",
        description: "Optimalizace firmy pro dosažení maximální hodnoty.",
      },
      {
        icon: "/icons/receipt.webp",
        title: "Valuace",
        description: "Profesionální ocenění firmy založené na ověřených metodikách.",
      },
      {
        icon: "/icons/search.webp",
        title: "Hledání kupujících",
        description: "Diskrétní vyhledání a oslovení vhodných strategických i finančních investorů.",
      },
      {
        icon: "/icons/send.webp",
        title: "Doprovod celým procesem",
        description: "Od vyjednávání podmínek až po podpis smluv a předání firmy.",
      },
    ],
    process: [
      { id: "01", title: "Příprava a ocenění", description: "Přípravná fáze a valuace firmy." },
      { id: "02", title: "Prodejní dokumentace", description: "Vytvoření prodejních materiálů." },
      { id: "03", title: "Oslovení investorů", description: "Identifikace a oslovení potenciálních kupujících." },
      { id: "04", title: "Due diligence", description: "Řízení procesu due diligence." },
      { id: "05", title: "Vyjednávání podmínek", description: "Vyjednávání podmínek transakce." },
      { id: "06", title: "Uzavření transakce", description: "Uzavření smlouvy a předání firmy." },
    ],
    image: "/yellow-building.png",
  },
  {
    slug: "koupe-firmy",
    title: "Koupě firmy",
    tagline: "Vyhledávání a akvizice perspektivních příležitostí.",
    intro: {
      heading: "Strukturovaný proces akvizice",
      text: "Pomáháme investorům a strategickým kupujícím najít vhodné rodinné firmy, provést due diligence a strukturovat transakci tak, aby byla úspěšná.",
    },
    offeringsSubtitle: "Komplexní podpora při akvizici rodinných firem.",
    offerings: [
      {
        icon: "/icons/search.webp",
        title: "Vyhledávání příležitostí",
        description: "Aktivní vyhledávání firem odpovídajících vašim investičním kritériím.",
      },
      {
        icon: "/icons/folder.webp",
        title: "Due diligence",
        description: "Komplexní prověření finanční, právní a provozní stránky cílové společnosti.",
      },
      {
        icon: "/icons/credit-card.webp",
        title: "Strukturovaná transakce",
        description: "Optimální nastavení právní a finanční struktury akvizice.",
      },
      {
        icon: "/icons/add.webp",
        title: "Post-merger integrace",
        description: "Podpora při integraci akvizice do vašeho portfolia.",
      },
    ],
    process: [
      { id: "01", title: "Investiční kritéria", description: "Definice investičních kritérií." },
      { id: "02", title: "Vyhledávání cílů", description: "Vyhledání vhodných cílů." },
      { id: "03", title: "Předběžné hodnocení", description: "Předběžné hodnocení a kontakt s majiteli." },
      { id: "04", title: "Due diligence", description: "Řízení procesu due diligence." },
      { id: "05", title: "Vyjednávání transakce", description: "Vyjednání a uzavření transakce." },
      { id: "06", title: "Post-akviziční integrace", description: "Podpora při integraci." },
    ],
    image: "/industry-hall.png",
  },
  {
    slug: "management-buy-out",
    title: "Management Buy-Out",
    tagline: "Pomáháme manažerům převzít firmu.",
    intro: {
      heading: "Podpora management buy-out transakcí",
      text: "Podporujeme management při převzetí firmy od současných majitelů. Pomáháme s financováním, právním strukturováním a jednáním s majiteli.",
    },
    offeringsSubtitle: "Komplexní podpora při management buy-out transakcích.",
    offerings: [
      {
        icon: "/icons/profile.webp",
        title: "Pomoc manažerům převzít firmu",
        description: "Kompletní doprovod managementu při převzetí firmy od současných majitelů.",
      },
      {
        icon: "/icons/wallet.webp",
        title: "Financování MBO",
        description: "Zajištění a strukturování financování odkupu firmy.",
      },
      {
        icon: "/icons/receipt.webp",
        title: "Právní a daňová struktura",
        description: "Nastavení optimální struktury transakce z právního a daňového hlediska.",
      },
      {
        icon: "/icons/message.webp",
        title: "Podpora při jednáních",
        description: "Facilitace jednání mezi managementem a současnými majiteli.",
      },
    ],
    process: [
      { id: "01", title: "Posouzení proveditelnosti", description: "Konzultace s managementem a posouzení proveditelnosti." },
      { id: "02", title: "Valuace a modelování", description: "Valuace a finanční modelování." },
      { id: "03", title: "Finanční struktura", description: "Příprava financování." },
      { id: "04", title: "Vyjednávání s majiteli", description: "Vyjednání podmínek s majiteli." },
      { id: "05", title: "Struktura transakce", description: "Strukturování transakce." },
      { id: "06", title: "Uzavření a implementace", description: "Uzavření a implementace MBO." },
    ],
    image: "/industry-hall-outside.png",
  },
];

export const getServicePage = (slug: string) =>
  servicePages.find((s) => s.slug === slug);
