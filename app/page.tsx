import { Navbar8 } from "@/components/navbar8";
import { Hero238 } from "@/components/hero238";
import { Faq15 } from "@/components/faq15";
import { Services14 } from "@/components/services14";
import { About10 } from "@/components/about10";
import { Contact34 } from "@/components/contact34";
import { Footer5 } from "@/components/footer5";

export default function Home() {
  return (
    <>
      <Navbar8 />
      <main>
        <Hero238 />
        <section id="proc-ekvivalent" className="py-20"><Faq15 className="py-0" /></section>
        <section id="sluzby" className="py-20"><Services14 className="py-0" /></section>
        <section id="o-nas" className="py-20"><About10 className="py-0" /></section>
        <section id="kontakt" className="py-20"><Contact34 className="py-0" /></section>
      </main>
      <Footer5 className="py-20" />
    </>
  );
}
