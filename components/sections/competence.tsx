"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { SectionLabel } from "../ui/section-label";
import { rechtsgebiete } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Competence() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="kompetenzen" className="py-16 sm:py-24 lg:py-32 bg-ksw-section">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <FadeIn><SectionLabel text="Rechtsgebiete" /></FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ksw-blue mb-4 max-w-[700px]">
            Umfassende Kompetenz in verschiedenen Bereichen.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-ksw-gray-light text-sm sm:text-[15px] mb-12 max-w-[580px]">
            Unsere Expertise erstreckt sich über ein breites Spektrum von Rechtsbereichen.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-0.5">
          {rechtsgebiete.map((cat, i) => {
            const isOpen = expanded === i;
            return (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="bg-white rounded-xs overflow-hidden">
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="flex justify-between items-center w-full px-4 py-3.5 sm:px-7 sm:py-5 hover:bg-ksw-blue/5 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-[11px] font-semibold text-ksw-blue/35 min-w-[20px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[15.5px] sm:text-xl font-semibold text-ksw-blue">
                        {cat.category}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-ksw-blue transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  
                  <div className={cn("transition-all duration-500 ease-out overflow-hidden", isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
                    <div className="px-4 pb-4 sm:px-7 sm:pb-6 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      {cat.items.map((item, ii) => (
                        <div key={ii} className="py-4 border-t border-ksw-border">
                          <h4 className="text-[12.5px] sm:text-sm font-semibold text-gray-900 mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-[13.5px] leading-relaxed text-ksw-gray-light">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}