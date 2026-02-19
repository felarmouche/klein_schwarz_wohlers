import { ExternalLink } from "lucide-react";
import { FadeIn } from "../ui/fade-in";
import { SectionLabel } from "../ui/section-label";
import { linksData } from "@/lib/data";

export function Links() {
  return (
    <section id="links" className="py-16 sm:py-24 lg:py-32 bg-ksw-section">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <FadeIn><SectionLabel text="Ressourcen" /></FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ksw-blue mb-8 sm:mb-12 max-w-[500px]">
            Weiterführende Links
          </h2>
        </FadeIn>

        <div className="bg-white rounded-sm overflow-hidden shadow-xs">
          {linksData.map((link, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center p-4 sm:p-6 text-ksw-gray hover:bg-ksw-warm transition-colors border-b last:border-none border-ksw-border/50 group"
              >
                <span className="text-[13px] sm:text-[14.5px] font-medium pr-4">{link.label}</span>
                <ExternalLink size={16} className="text-ksw-blue/40 group-hover:text-ksw-blue transition-colors shrink-0" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}