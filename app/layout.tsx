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
  metadataBase: new URL("https://www.klein-schwarz-wohlers.de"),
  title: "Klein & Schwarz-Wohlers - Rechtsanwälte in Bremen - Sylvia Schwarz-Wohlers, Volker Wohlers",
  description:
    "Klein & Schwarz-Wohlers - Rechtsanwälte in Bremen: Sylvia Schwarz-Wohlers, Volker Wohlers. Schwerpunkte: Verkehrsrecht, Versicherungsrecht.",
  keywords: [
    "Klein",
    "Schwarz-Wohlers",
    "Wohlers",
    "Sylvia Schwarz-Wohlers",
    "Volker Wohlers",
    "Rechtsanwalt",
    "Rechtsanwälte",
    "Notar",
    "Bremen",
    "Berliner Freiheit",
    "Verkehrsrecht",
    "Versicherungsrecht",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.klein-schwarz-wohlers.de/",
    siteName: "Klein & Schwarz-Wohlers",
    title: "Klein & Schwarz-Wohlers - Rechtsanwälte in Bremen",
    description:
      "Rechtsanwälte in Bremen mit Schwerpunkten Verkehrsrecht und Versicherungsrecht.",
  },
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