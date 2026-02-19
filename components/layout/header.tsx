"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { id: "kanzlei", label: "Kanzlei" },
  { id: "kompetenzen", label: "Kompetenzen" },
  { id: "rechtsanwaelte", label: "Rechtsanwälte" },
  { id: "links", label: "Links" },
  { id: "kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white/97 shadow-sm",
      )}
    >
      <div className="max-w-[1400px] h-24 mx-auto px-5 sm:px-8 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
        <button
          className="font-serif text-sm sm:text-lg font-semibold text-ksw-blue tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex px-4 py-2 flex-col leading-tight items-start">
            <p className="text-black text-lg md:text-3xl font-medium border-b border-ksw-blue ">
              Klein & Schwarz-Wohlers
            </p>
            <p className="text-ksw-gray text-sm md:text-xl">Rechtsanwälte</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="group relative text-xs font-medium text-ksw-gray tracking-wider uppercase py-1"
            >
              {n.label}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-ksw-blue transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <Image
          src="/images/berlinerfreiheit.png"
          alt="Berliner Freiheit"
          width={150}
          height={50}
          className="object-contain hidden sm:block"
        />

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-ksw-blue transition-all origin-center",
              menuOpen && "rotate-45 translate-x-1 translate-y-[6.5px]",
            )}
          />
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-ksw-blue transition-all",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block w-[22px] h-[1.5px] bg-ksw-blue transition-all origin-center",
              menuOpen && "-rotate-45 translate-x-1 -translate-y-[6.5px]",
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-ksw-border px-5 py-2 animate-in slide-in-from-top-2">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="block w-full text-left py-3.5 border-b border-ksw-border last:border-none text-[15px] font-medium text-ksw-gray"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
