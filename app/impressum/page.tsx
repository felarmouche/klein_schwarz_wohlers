"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-ksw-warm selection:bg-ksw-blue/10 selection:text-ksw-blue pb-24">
      {/* Header Area */}
      <div className="pt-32 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-b border-ksw-blue/10">
        <FadeIn>
          <h1 className="font-serif text-[clamp(32px,5vw,56px)] text-ksw-blue leading-tight">
            Impressum
          </h1>
        </FadeIn>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-ksw-gray/40 mb-2">Rechtliches</span>
              <div className="flex flex-col border-l-2 border-ksw-blue/10">
                <span className="pl-4 py-2 text-sm font-semibold text-ksw-blue border-l-2 border-ksw-blue -ml-[2px]">
                  Impressum
                </span>
                <Link 
                  href="/datenschutz" 
                  className="pl-4 py-2 text-sm font-medium text-ksw-gray/60 hover:text-ksw-blue transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-8 lg:col-start-5 space-y-16">
            
            <FadeIn>
              {/* Sektion: Pflichtangaben */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-ksw-gray/50 mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="font-serif text-lg text-ksw-blue leading-snug mb-4">
                    Rechtsanwälte Dettlev Klein und Sylvia Schwarz-Wohlers <br/>
                    <span className="italic opacity-80">Partnerschaftsgesellschaft</span>
                  </p>
                  <p className="text-ksw-gray text-sm leading-relaxed">
                    Berliner Freiheit 3<br />
                    28327 Bremen
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-ksw-gray/50 mb-4">Kontakt</h2>
                  <ul className="text-sm text-ksw-gray space-y-3">
                    <li className="flex justify-between border-b border-ksw-blue/5 pb-2">
                      <span className="font-semibold text-ksw-blue">Telefon</span>
                      <span>0421 / 44 49 49</span>
                    </li>
                    <li className="flex justify-between border-b border-ksw-blue/5 pb-2">
                      <span className="font-semibold text-ksw-blue">Telefax</span>
                      <span>0421 / 44 48 32</span>
                    </li>
                    <li className="flex justify-between border-b border-ksw-blue/5 pb-2">
                      <span className="font-semibold text-ksw-blue">E-Mail</span>
                      <a href="mailto:info@klein-schwarz-wohlers.de" className="hover:text-ksw-blue underline decoration-ksw-blue/30">info@klein-schwarz-wohlers.de</a>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Sektion: Register & Kammer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-ksw-blue/10">
                <LegalBlock title="Register & Steuer">
                  <p>Amtsgericht Bremen, PR 106</p>
                  <p>Steuernummer: 460/165/00591</p>
                </LegalBlock>
                
                <LegalBlock title="Kammerzugehörigkeit">
                   <p className="mb-2">Sylvia Schwarz-Wohlers, Volker Wohlers und Susanne Katterbach sind Mitglieder der:</p>
                   <a href="https://www.rak-bremen.de/" target="_blank" rel="nofollow" className="text-ksw-blue hover:underline">Hanseatische Rechtsanwaltskammer Bremen</a>
                </LegalBlock>
              </div>

              <div className="mt-10 pt-10 border-t border-ksw-blue/10">
                 <LegalBlock title="Berufshaftpflichtversicherung">
                    <p className="mb-2 text-sm">Räumlicher Geltungsbereich: Europaweit</p>
                    <p className="font-medium text-ksw-blue">Landschaftliche Brandkasse Hannover</p>
                    <p className="text-sm">Schiffgraben 4, 30159 Hannover</p>
                 </LegalBlock>
              </div>
              
               <div className="mt-10">
                 <LegalBlock title="Streitbeilegung">
                    <p>Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://www.ec.europa.eu/consumers/odr" className="text-ksw-blue hover:underline">www.ec.europa.eu/consumers/odr</a></p>
                 </LegalBlock>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Sektion: Haftungsausschluss (Kleingedrucktes) */}
              <div className="bg-white/50 p-8 rounded-sm border border-ksw-blue/5 space-y-8 mt-8">
                <DisclaimerBlock title="Haftung für Inhalte">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                </DisclaimerBlock>

                <DisclaimerBlock title="Haftung für Links">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </DisclaimerBlock>

                <DisclaimerBlock title="Urheberrecht">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
                </DisclaimerBlock>
                
                <div className="text-[10px] text-ksw-gray/40 uppercase tracking-wider">
                    Quelle: <a href="https://www.e-recht24.de" className="hover:text-ksw-blue">eRecht24</a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </main>
  );
}

// Kleine Hilfskomponenten für Sauberkeit
function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-ksw-gray/50 mb-3">{title}</h3>
      <div className="text-sm text-ksw-gray leading-relaxed">{children}</div>
    </div>
  );
}

function DisclaimerBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-serif text-base text-ksw-blue mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-ksw-gray/70 text-justify hyphens-auto leading-relaxed">{children}</p>
    </div>
  );
}