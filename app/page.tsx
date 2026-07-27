import { Navbar8 } from "@/components/navbar8";
import { Hero238 } from "@/components/hero238";
import { StatsStrip } from "@/components/stats-strip";
import { ProcessSteps } from "@/components/process-steps";
import { PhotoBand } from "@/components/photo-band";
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
        {/* border-t closes the bottom edge of the hero's reference strip */}
        <div className="border-t">
          <StatsStrip />
          <section id="proc-ekvivalent" className="py-20"><Faq15 className="py-0" /></section>
          <section id="sluzby" className="py-20"><Services14 className="py-0" /></section>
          <section id="jak-to-probiha" className="py-0"><ProcessSteps className="py-20" /></section>
          {/* Decorative band — rounded, aligned with the section content width */}
          <div className="container">
            <PhotoBand />
          </div>
          <section id="o-nas" className="py-20"><About10 className="py-0" /></section>
          <section id="kontakt" className="py-20"><Contact34 className="py-0" /></section>
        </div>
      </main>
      <Footer5 className="py-20" />
    </>
  );
}
