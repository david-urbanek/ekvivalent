import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SITE_URL } from "@/lib/site";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ekvivalent – M&A poradenství pro rodinné firmy",
  description:
    "Pomáháme majitelům rodinných firem s prodejem, generační obměnou a růstem hodnoty. Diskrétně, s více než 20 lety zkušeností v M&A a private equity.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Ekvivalent",
    title: "Ekvivalent – M&A poradenství pro rodinné firmy",
    description:
      "Pomáháme majitelům rodinných firem s prodejem, generační obměnou a růstem hodnoty. Diskrétně, s více než 20 lety zkušeností v M&A a private equity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekvivalent – M&A poradenství pro rodinné firmy",
    description:
      "Pomáháme majitelům rodinných firem s prodejem, generační obměnou a růstem hodnoty.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
