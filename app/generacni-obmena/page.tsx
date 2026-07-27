import type { Metadata } from "next";

import { Navbar8 } from "@/components/navbar8";
import { GenerationalChange } from "@/components/generational-change";
import { Footer5 } from "@/components/footer5";

export const metadata: Metadata = {
  title: "Generační obměna | Ekvivalent",
  description:
    "Pomáháme rodinným firmám úspěšně projít generační obměnou a zajistit kontinuitu podnikání pro další generaci.",
};

export default function GeneracniObmenaPage() {
  return (
    <>
      <Navbar8 />
      <main>
        <GenerationalChange />
      </main>
      <Footer5 className="py-20" />
    </>
  );
}
