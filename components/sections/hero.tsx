"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "3", label: "Fachanwälte" },
  { value: "2003", label: "Gründungsjahr" },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-[100svh] flex flex-col overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 bg-[url('/images/hero_pex.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-ksw-blue to-ksw-blue/60 bg-cover bg-center" />
      {/* ── Main content ───────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-end pb-8 sm:items-center sm:pb-0 pt-28 sm:pt-24 justify-center md:justify-start">
        <div className="w-full px-5 sm:px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[640px]">
              {/* Tagline pill */}
              <div
                className="mb-4 md:mb-8"
                style={{
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 0.8s ease 0.2s",
                }}
              >
                <div className="inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-white/40" />
                  <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white/50">
                    Kanzlei in Bremen
                  </span>
                </div>
              </div>

              {/* Main headline */}
              <h1
                className="font-serif text-[clamp(38px,7.5vw,78px)] font-medium leading-[1.02] text-white tracking-tight"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
                }}
              >
                Recht braucht
                <br />
                <span className="italic text-white relative">
                  Präzision.
                  {/* Underline accent */}
                  <span
                    className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-white/40 to-transparent"
                    style={{
                      width: loaded ? "100%" : "0%",
                      transition: "width 1.2s cubic-bezier(0.22,1,0.36,1) 0.9s",
                    }}
                  />
                </span>
              </h1>

              {/* Subline */}
              <p
                className="mt-4 md:mt-6 text-[clamp(15px,1.8vw,17px)] text-white/75 leading-[1.8] max-w-[480px] font-light"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(18px)",
                  transition:
                    "opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
                }}
              >
                Wir verbinden juristische Expertise mit technischem und medizinischem Sachverstand für komplexe Schadensfälle.
              </p>
              {/* CTAs */}
              <div
                className="mt-8 md:mt-10 flex gap-3 flex-wrap justify-between sm:justify-start"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(18px)",
                  transition:
                    "opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s",
                }}
              >
                {/* Primary */}
                <button
                  onClick={() => scrollTo("kontakt")}
                  className="
                    w-full sm:w-auto
                    bg-white text-[#0a1628]
                    text-[11px] font-semibold tracking-[0.16em] uppercase
                    px-9 py-[14px]
                    transition-all duration-200
                    hover:bg-white/92 hover:-translate-y-px
                    hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)]
                    active:translate-y-0 active:shadow-none
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                  "
                >
                  Kontakt aufnehmen
                </button>

                {/* Secondary */}
                <button
                  onClick={() => scrollTo("kanzlei")}
                  className="
                    w-full sm:w-auto
                    text-white/90 border border-white/90
                    text-[11px] font-semibold tracking-[0.16em] uppercase
                    px-9 py-[14px]
                    transition-all duration-200
                    hover:text-white hover:border-white/40 hover:bg-white/[0.05]
                    active:bg-white/[0.03]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50
                  "
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ──────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-3 divide-x divide-white/[0.07]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="py-6 sm:py-8 px-4 sm:px-6 first:pl-0 last:pr-0 text-center"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.8s ease ${0.9 + i * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.9 + i * 0.12}s`,
                }}
              >
                <div className="font-serif text-[clamp(22px,3vw,32px)] font-medium text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[11px] tracking-[0.18em] uppercase text-white/40 mt-1.5 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────────── */}
      <div
        className="absolute bottom-[96px] right-5 sm:right-8 lg:right-16 z-10 hidden md:flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
      >
        <span className="text-[9px] tracking-[0.22em] uppercase text-white/30 [writing-mode:vertical-lr]">
          Scrollen
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
