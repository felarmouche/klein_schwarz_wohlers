"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { SectionLabel } from "../ui/section-label";
import { cn } from "@/lib/utils";

const uspItems = [
  {
    title: "Unsere Schwerpunkte",
    preview:
      "Unsere Partnerschaft besteht seit dem 1.1.2003. Wir sind im Rahmen unserer zivilrechtlichen Ausrichtung insbesondere auf dem Gebiet des allgemeinen und besonderen Haftpflichtrechts und des Versicherungsrechts tätig.",
    text: "Unsere Partnerschaft besteht seit dem 1.1.2003. Wir sind im Rahmen unserer zivilrechtlichen Ausrichtung insbesondere auf dem Gebiet des allgemeinen und besonderen Haftpflichtrechts und des Versicherungsrechts tätig. Unser Schwerpunkt liegt dabei im Bereich des Verkehrsrechts, also mit allem, was mit Straßenverkehr zu tun hat. Neben diesem Schwerpunkt befassen wir uns aber selbstverständlich auch mit anderen Haftpflichttatbeständen, z.B. dem Privathaftpflichtrecht, also der Haftung aus Sachverhalten, die nichts mit dem Straßenverkehr zu tun haben. Dieses gilt auch für den Bereich des Versicherungsrechts, in dem wir nicht nur den Bereich der Kfz-Kaskoversicherung bearbeiten, sondern auch Meinungsverschiedenheiten aus anderen Versicherungssparten, beispielsweise aus dem Bereich der Sachversicherung und der Schadenversicherung (insbesondere der Vermögensschadenversicherung für Rechtsanwälte, Notare oder andere Freiberufler). Weiter führen wir auch Versicherungsregresse durch.",
  },
  {
    title: "Hohes Qualitätsniveau und aktuelle Fachkenntnisse",
    preview:
      "Aufgrund unserer sehr speziellen Ausrichtung sind wir in der Lage, hohe Qualitätsanforderungen zu erfüllen. Durch ständige Fort- und Weiterbildung werden die Qualitätsstandards fortlaufend konsolidiert und fortentwickelt.",
    text: "Aufgrund unserer sehr speziellen Ausrichtung sind wir in der Lage, hohe Qualitätsanforderungen zu erfüllen. Durch ständige Fort- und Weiterbildung werden die Qualitätsstandards, die wir uns selbst auferlegen, fortlaufend nicht nur konsolidiert sondern fortentwickelt. Die Fortbildung schließt auch andere Fachgebiete mit ein, die für eine kompetente Bearbeitung unerlässlich sind. Beispielsweise findet eine fortlaufende technische Weiterbildung insbesondere im Bereich der Verkehrsunfallrekonstruktion statt, damit man Unfallabläufe sachgerecht beurteilen kann. Dieses ist beispielsweise beim Erkennen und Aufklären von manipulierten \"Verkehrsunfällen\" zwingende Grundvoraussetzung. Daneben ist für uns auch eine kontinuierliche Fortbildung im medizinischen Bereich zur Beurteilung schwerer Personenschäden erforderlich, um Verletzungsbilder und Verletzungsfolgen sachgerecht beurteilen zu können. Dieses umfasst auch den Bereich der Psychologie, denn im Bereich schwerer Personenschäden kommt den posttraumatischen Belastungsstörungen eine stetig wachsende Bedeutung zu. Das Zusammenführen von Erkenntnissen verschiedener Fachrichtungen ist somit die Grundlage unserer Tätigkeit, wobei wir auch externe Spezialisten im Bedarfsfalle hinzuziehen. Dieses ist sogar im Bereich relativ leichter Verletzungen, beispielsweise bei leichten Verletzungen der Halswirbelsäule, erforderlich, da neben juristischen Kenntnissen auch Kenntnisse aus dem Bereich der Kollisionsmechanik und medizinische Kenntnisse erforderlich sind, um eine sachgerechte Beurteilung vornehmen zu können.",
  },
  {
    title: "Flexibilität & Mandantennähe",
    preview:
      "Da wir ein relativ kleines Team von Spezialisten sind, ist es uns möglich, flexibel auf die Bedürfnisse und Wünsche unserer Mandanten einzugehen.",
    text: "Da wir ein relativ kleines Team von Spezialisten sind, ist es uns auch möglich, im Rahmen unseres Dienstleistungsangebots flexibel auf die Bedürfnisse und Wünsche unserer Mandanten einzugehen. Diese Organisationsstruktur führt auch dazu, dass man bei uns in jeder Angelegenheit immer einen konkreten Ansprechpartner hat und nicht an einen anonymen Mitarbeiter oder Rechtsanwalt(in) verwiesen wird. Dabei ist jeder von uns in der Lage, Verfahren aus allen genannten Tätigkeiten zu führen, da wir einen intensiven Erfahrungs- und Meinungsaustausch pflegen. Zu unserer Mandantschaft zählen zahlreiche renommierte Versicherungsunternehmen, für die wir nahezu ausschließlich tätig sind. Neben unserer beratenden Tätigkeit für Versicherungsunternehmen, bei denen wir auch Schulungen vornehmen, sind wir weit überwiegend in gerichtlichen Verfahren tätig. Deshalb verfügen wir über eine sehr große Erfahrung bei der Führung von Gerichtsprozessen. Unsere gerichtliche Tätigkeit umfasst den gesamten norddeutschen Raum und bei Bedarf auch über diese Grenze hinaus.",
  },
];

export function About() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="kanzlei" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <FadeIn>
          <SectionLabel text="Wir über uns" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ksw-blue mb-10 md:mb-16">
            Unsere Kanzlei
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-0 mt-10 border-t border-ksw-blue/10">
          {uspItems.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <FadeIn key={i} delay={0.12 * (i + 1)}>
                <div className="border-b border-ksw-blue/10">
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-10 py-8 sm:py-10 text-left group cursor-pointer"
                  >
                    <div className="pt-1 flex items-start justify-between md:block">
                      <div>
                        <div className="w-8 h-0.5 bg-ksw-blue opacity-35 mb-4" />
                        <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-ksw-blue">
                          {item.title}
                        </h3>
                      </div>
                      <div
                        className={cn(
                          "md:hidden w-8 h-8 rounded-full bg-ksw-blue/5 flex items-center justify-center shrink-0 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      >
                        <ChevronDown size={16} className="text-ksw-blue" />
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Preview text - always visible */}
                        <p
                          className={cn(
                            "text-sm sm:text-[15.5px] leading-relaxed text-ksw-gray transition-opacity duration-300",
                            isOpen && "hidden"
                          )}
                        >
                          {item.preview}
                          <span className="inline-block ml-2 text-ksw-blue/50 text-sm group-hover:text-ksw-blue transition-colors">
                            Weiterlesen&hellip;
                          </span>
                        </p>

                        {/* Full text - when expanded */}
                        <p
                          className={cn(
                            "text-sm sm:text-[15.5px] leading-relaxed text-ksw-gray",
                            !isOpen && "hidden"
                          )}
                        >
                          {item.text}
                        </p>
                      </div>

                      {/* Desktop toggle indicator */}
                      <div
                        className={cn(
                          "hidden md:flex w-8 h-8 rounded-full bg-ksw-blue/5 items-center justify-center shrink-0 mt-1 transition-all duration-300 group-hover:bg-ksw-blue/10",
                          isOpen && "rotate-180"
                        )}
                      >
                        <ChevronDown size={16} className="text-ksw-blue" />
                      </div>
                    </div>
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
