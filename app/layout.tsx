import type { Metadata } from "next";
import { EB_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klein & Schwarz-Wohlers | Rechtsanwälte Bremen",
  description: "Spezialisiertes Verkehrs- und Versicherungsrecht in Bremen. Defense Counsel für Versicherungsunternehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${ebGaramond.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}