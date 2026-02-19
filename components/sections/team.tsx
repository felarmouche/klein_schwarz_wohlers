"use client";

import { useState } from "react";
import { ChevronDown, GraduationCap, Briefcase, Award } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { SectionLabel } from "../ui/section-label";
import { teamData, staffData } from "@/lib/data";
import { cn } from "@/lib/utils";

function CvTimeline({ items }: { items: { year: string; text: string }[] }) {
  return (
    <div className="relative ml-3 sm:ml-4">
      {/* Vertical timeline line */}
      <div className="absolute left-0 top-1 bottom-1 w-px bg-ksw-blue/20" />
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="relative pl-5 sm:pl-6">
            {/* Timeline dot */}
            <div className="absolute left-[-3px] top-[6px] w-[7px] h-[7px] rounded-full bg-ksw-blue/60 ring-2 ring-white" />
            {item.year && (
              <span className="inline-block text-[11px] sm:text-xs font-semibold text-ksw-blue tracking-wide mb-0.5">
                {item.year}
              </span>
            )}
            <p className="text-[12.5px] sm:text-[13.5px] text-ksw-gray leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Team() {
  const [openPerson, setOpenPerson] = useState<number | null>(null);
  const [openStaff, setOpenStaff] = useState<number | null>(null);

  return (
    <section id="rechtsanwaelte" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <FadeIn><SectionLabel text="Team" /></FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ksw-blue mb-4">
            Rechtsanwälte
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-ksw-gray-light text-sm sm:text-[15px] mb-12 max-w-[520px]">
            Klicken Sie auf einen Namen, um den Lebenslauf und die Qualifikationen einzusehen.
          </p>
        </FadeIn>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {teamData.map((person, i) => {
            const isOpen = openPerson === i;
            return (
              <FadeIn key={i} delay={0.08 * (i + 1)}>
                <div
                  className={cn(
                    "bg-ksw-warm rounded-sm border-l-4 overflow-hidden transition-shadow duration-300 hover:shadow-lg",
                    person.active ? "border-ksw-blue" : "border-ksw-border opacity-75",
                    isOpen && "shadow-xl"
                  )}
                >
                  <button
                    onClick={() => setOpenPerson(isOpen ? null : i)}
                    className="w-full flex justify-between items-start p-5 sm:p-7 text-left gap-4"
                  >
                    <div className="flex-1">
                      <div className="font-serif text-[19px] sm:text-2xl font-semibold text-ksw-blue mb-1.5 leading-tight">
                        {person.name}
                      </div>
                      <div className="text-[12.5px] sm:text-sm font-medium text-ksw-gray leading-snug">
                        {person.role}
                      </div>
                    </div>
                    {person.cv.length > 0 && (
                      <div className="flex items-center gap-2 pt-1">
                        <span className="hidden sm:block text-[10px] font-bold tracking-widest uppercase text-ksw-blue/50">
                          {isOpen ? "Schließen" : "Lebenslauf"}
                        </span>
                        <div className={cn("w-7 h-7 rounded-full bg-ksw-blue/5 flex items-center justify-center transition-transform", isOpen && "rotate-180 bg-ksw-blue/10")}>
                          <ChevronDown size={16} className="text-ksw-blue" />
                        </div>
                      </div>
                    )}
                  </button>

                  {/* CV Content */}
                  <div className={cn("transition-all duration-500 ease-out overflow-hidden", isOpen ? "max-h-[700px]" : "max-h-0")}>
                    <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                      <div className="pt-5 border-t border-ksw-border space-y-5">
                        {/* Education */}
                        {person.education && (
                          <div>
                            <div className="flex items-center gap-2 mb-2.5">
                              <GraduationCap size={15} className="text-ksw-blue/70" />
                              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ksw-blue/70">
                                Ausbildung
                              </span>
                            </div>
                            <p className="text-[12.5px] sm:text-[13.5px] text-ksw-gray ml-3 sm:ml-4 pl-5 sm:pl-6 border-l border-ksw-blue/10">
                              {person.education}
                            </p>
                          </div>
                        )}

                        {/* Career Timeline */}
                        {person.cv.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Briefcase size={15} className="text-ksw-blue/70" />
                              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ksw-blue/70">
                                Beruflicher Werdegang
                              </span>
                            </div>
                            <CvTimeline items={person.cv} />
                          </div>
                        )}

                        {/* Fachanwalt badges */}
                        {person.cv.some(item => item.text.includes("Fachanw")) && (
                          <div>
                            <div className="flex items-center gap-2 mb-2.5">
                              <Award size={15} className="text-ksw-blue/70" />
                              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ksw-blue/70">
                                Fachanwaltschaften
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 ml-3 sm:ml-4 pl-5 sm:pl-6">
                              {person.cv
                                .filter(item => item.text.includes("Fachanw"))
                                .map((item, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center px-3 py-1 bg-ksw-blue/5 border border-ksw-blue/15 rounded text-[11px] sm:text-xs font-medium text-ksw-blue"
                                  >
                                    {item.text}
                                    {item.year && (
                                      <span className="ml-1.5 text-ksw-blue/50">({item.year.replace("seit ", "")})</span>
                                    )}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Memorial note for Dettlev Klein */}
                  {person.note && (
                    <div className="px-5 pb-5 sm:px-7 sm:pb-7 -mt-2">
                      <p className="text-xs sm:text-[13px] text-ksw-gray-light italic leading-relaxed">
                        {person.note}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Staff Section */}
        <FadeIn delay={0.3}>
          <div className="mt-16 pt-12 border-t border-ksw-border">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ksw-blue mb-1">Mitarbeiterinnen</h3>
            <p className="text-sm text-ksw-gray-light mb-8">Unser Sekretariat – Organisation und Support.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {staffData.map((s, i) => {
                const isOpen = openStaff === i;
                return (
                  <div key={i} className="bg-ksw-warm rounded-sm border-l-2 border-ksw-border overflow-hidden hover:shadow-md transition-shadow">
                    <button
                      onClick={() => setOpenStaff(isOpen ? null : i)}
                      className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                    >
                      <div>
                        <div className="text-sm sm:text-[15px] font-semibold text-ksw-blue">{s.name}</div>
                        <div className="text-[11.5px] sm:text-xs text-ksw-gray-light">{s.role}</div>
                      </div>
                      <div className={cn("w-6 h-6 rounded-full bg-ksw-blue/5 flex items-center justify-center transition-transform shrink-0", isOpen && "rotate-180")}>
                        <ChevronDown size={14} className="text-ksw-blue" />
                      </div>
                    </button>
                    <div className={cn("transition-all duration-300 ease-out overflow-hidden", isOpen ? "max-h-[400px]" : "max-h-0")}>
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                        <div className="pt-4 border-t border-ksw-border space-y-4">
                          {/* Staff Timeline */}
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ksw-blue/60 mb-2 block">
                              Werdegang
                            </span>
                            <CvTimeline items={s.cv} />
                          </div>

                          {/* Focus areas */}
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ksw-blue/60 mb-1.5 block">
                              Schwerpunkte
                            </span>
                            <p className="text-[12px] sm:text-[13px] text-ksw-gray ml-3 sm:ml-4 pl-5 sm:pl-6 border-l border-ksw-blue/10">
                              {s.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
