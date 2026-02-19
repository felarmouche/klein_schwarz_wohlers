"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils"; // Helper for tailwind-merge (see below)

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({ children, delay = 0, className, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 cubic-[0.22,1,0.36,1]",
        visible ? "reveal-visible" : "reveal-hidden",
        className
      )}
      style={{
        ...style,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}