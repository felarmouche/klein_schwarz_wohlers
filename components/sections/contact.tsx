import { FadeIn } from "../ui/fade-in";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 lg:py-32 bg-ksw-blue text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-16">
          <FadeIn>
            <div className="w-10 h-[1.5px] bg-white/30 mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
              Kontakt
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed opacity-70 max-w-[360px]">
              Wir stehen Ihnen für eine erste Einschätzung Ihres Anliegens gern zur Verfügung.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="flex flex-col gap-6 sm:gap-8">
              <ContactItem icon={MapPin} title="Adresse">
                Klein & Schwarz-Wohlers<br />Rechtsanwälte<br />Berliner Freiheit 3<br />28327 Bremen
              </ContactItem>
              <ContactItem icon={Phone} title="Telefon & Fax">
                Tel. 0421 / 44 49 49<br />Fax 0421 / 44 48 32
              </ContactItem>
              <ContactItem icon={Mail} title="E-Mail">
                info@klein-schwarz-wohlers.de
              </ContactItem>
              <ContactItem icon={Clock} title="Bürozeiten">
                Mo.–Do. 9:00–13:00 & 14:00–17:00 Uhr<br />Fr. 9:00–13:00 Uhr
              </ContactItem>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-[18px] h-[18px] text-white/90" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase opacity-50 mb-1">
          {title}
        </div>
        <div className="text-[13.5px] sm:text-[15px] leading-relaxed opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
}