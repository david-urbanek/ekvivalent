import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar8 } from "@/components/navbar8";
import { ServicePage } from "@/components/service-page";
import { Footer5 } from "@/components/footer5";
import { getServicePage, servicePages } from "@/lib/services-data";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getServicePage(slug);
  if (!data) return {};
  return {
    title: `${data.title} | Ekvivalent`,
    description: data.intro.text,
  };
}

export default async function SluzbaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getServicePage(slug);
  if (!data) notFound();

  return (
    <>
      <Navbar8 />
      <main>
        <ServicePage slug={slug} />
      </main>
      <Footer5 className="py-20" />
    </>
  );
}
