"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-ksw-warm selection:bg-ksw-blue/10 selection:text-ksw-blue pb-24">
      {/* Header Area */}
      <div className="pt-32 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-b border-ksw-blue/10">
        <FadeIn>
          <h1 className="font-serif text-[clamp(32px,5vw,56px)] text-ksw-blue leading-tight">
            Datenschutz
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
                <Link 
                  href="/impressum" 
                  className="pl-4 py-2 text-sm font-medium text-ksw-gray/60 hover:text-ksw-blue transition-colors"
                >
                  Impressum
                </Link>
                <span className="pl-4 py-2 text-sm font-semibold text-ksw-blue border-l-2 border-ksw-blue -ml-[2px]">
                  Datenschutz
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-8 lg:col-start-5 space-y-16 text-[15px] sm:text-[16px] text-ksw-gray leading-relaxed">
            
            <FadeIn>
              <PrivacySection number="1" title="Verantwortlicher & Datenschutzbeauftragte">
                <p className="mb-4 text-sm">Verantwortlich im Sinne der DSGVO:</p>
                <div className="bg-white p-6 border-l-4 border-ksw-blue shadow-sm mb-6">
                    <strong className="text-ksw-blue block mb-1">Klein & Schwarz-Wohlers Partnerschaftsgesellschaft</strong>
                    <span className="text-sm">Berliner Freiheit 3, 28327 Bremen</span><br/>
                    <span className="text-sm">Email: info@klein-schwarz-wohlers.de</span>
                </div>
                <p>
                  Die betriebliche Datenschutzbeauftragte, <strong>Frau Claudia Kück</strong>, ist unter der o.g. Anschrift oder per Email unter <a href="mailto:datenschutz@klein-schwarz-wohlers.de" className="text-ksw-blue underline decoration-ksw-blue/30">datenschutz@klein-schwarz-wohlers.de</a> erreichbar.
                </p>
              </PrivacySection>
            </FadeIn>

            <FadeIn delay={0.1}>
              <PrivacySection number="2" title="Datenerhebung beim Website-Besuch">
                <p className="mb-4">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet (Server-Logfiles).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 p-4 border border-ksw-blue/5 rounded-sm">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-ksw-blue mb-2">Erfasste Daten</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm marker:text-ksw-blue/50">
                      <li>IP-Adresse</li>
                      <li>Datum & Uhrzeit</li>
                      <li>Name & URL der Datei</li>
                      <li>Referrer-URL</li>
                      <li>Browser & Betriebssystem</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-4 border border-ksw-blue/5 rounded-sm">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-ksw-blue mb-2">Zweck & Recht</h4>
                    <p className="text-sm mb-2">Gewährleistung eines reibungslosen Verbindungsaufbaus und der Systemsicherheit.</p>
                    <p className="text-xs opacity-70">Rechtsgrundlage: Art. 6 Abs. 1 S. 1 lit. f DSGVO (Berechtigtes Interesse).</p>
                  </div>
                </div>
              </PrivacySection>
            </FadeIn>

            <FadeIn delay={0.2}>
              <PrivacySection number="3" title="Weitergabe von Daten">
                <p>Wir geben Ihre Daten nur an Dritte weiter, wenn:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-sm marker:text-ksw-blue/50">
                  <li>Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO),</li>
                  <li>dies zur Geltendmachung von Rechtsansprüchen erforderlich ist (Art. 6 Abs. 1 S. 1 lit. f DSGVO),</li>
                  <li>eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 S. 1 lit. c DSGVO),</li>
                  <li>dies für Vertragsverhältnisse erforderlich ist (Art. 6 Abs. 1 S. 1 lit. b DSGVO).</li>
                </ul>
              </PrivacySection>
            </FadeIn>

            <FadeIn delay={0.3}>
              <PrivacySection number="4" title="Betroffenenrechte">
                <p className="mb-6">Sie haben folgende Rechte bezüglich Ihrer gespeicherten Daten:</p>
                <div className="divide-y divide-ksw-blue/10 border-t border-b border-ksw-blue/10">
                  <RightRow art="Art. 15" title="Auskunft">
                    Sie können Auskunft über Verarbeitungszwecke, Kategorien, Empfänger und Speicherdauer verlangen.
                  </RightRow>
                  <RightRow art="Art. 16" title="Berichtigung">
                    Korrektur unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten Daten.
                  </RightRow>
                  <RightRow art="Art. 17" title="Löschung">
                    Löschung Ihrer Daten, sofern nicht andere Rechtsgründe (z.B. Aufbewahrungspflichten) dagegen sprechen.
                  </RightRow>
                  <RightRow art="Art. 18" title="Einschränkung">
                    Einschränkung der Verarbeitung, wenn Richtigkeit bestritten wird oder die Verarbeitung unrechtmäßig ist.
                  </RightRow>
                  <RightRow art="Art. 20" title="Übertragbarkeit">
                    Erhalt Ihrer Daten in einem strukturierten, gängigen Format.
                  </RightRow>
                  <RightRow art="Art. 7 Abs. 3" title="Widerruf">
                    Jederzeitiger Widerruf einer erteilten Einwilligung für die Zukunft.
                  </RightRow>
                </div>
              </PrivacySection>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-ksw-blue text-white p-8 rounded-sm shadow-xl shadow-ksw-blue/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                
                <h3 className="text-xl font-serif mb-4 relative z-10 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-ksw-blue text-sm font-bold">5</span>
                  Widerspruchsrecht
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed">
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO) verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch einzulegen.
                </p>
                <a href="mailto:datenschutz@klein-schwarz-wohlers.de" className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-ksw-blue transition-colors rounded-sm">
                  Widerspruch einlegen
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="border-t border-ksw-blue/10 pt-10">
                <PrivacySection number="6" title="Sicherheit & Aktualität">
                  <p className="mb-4">Wir verwenden SSL-Verschlüsselung (256 Bit) zum Schutz Ihrer Datenübertragung.</p>
                  <p className="text-sm text-ksw-gray/60">Stand der Erklärung: Mai 2018</p>
                </PrivacySection>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </main>
  );
}

// Hilfskomponenten
function PrivacySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-xl font-serif text-ksw-blue mb-6 flex items-start gap-4">
        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-ksw-blue/20 text-ksw-blue text-sm font-bold mt-[-2px]">{number}</span>
        {title}
      </h3>
      <div className="pl-0 sm:pl-12">{children}</div>
    </section>
  );
}

function RightRow({ art, title, children }: { art: string; title: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 py-4">
            <span className="text-xs font-bold text-ksw-blue/60 pt-1">{art} DSGVO</span>
            <div>
                <strong className="block text-ksw-blue text-sm mb-1">{title}</strong>
                <p className="text-sm text-ksw-gray/80">{children}</p>
            </div>
        </div>
    )
}