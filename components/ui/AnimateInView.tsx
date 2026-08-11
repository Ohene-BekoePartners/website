"use client";

import * as React from "react";
import { useInView } from "@/hooks/useInView";

export interface AnimateInViewProps {
  children: React.ReactNode;
  /** "single" = one block reveals; "stagger" = children reveal with delay */
  mode?: "single" | "stagger";
  className?: string;
}

export function AnimateInView({
  children,
  mode = "single",
  className = "",
}: AnimateInViewProps) {
  const [ref, isInView] = useInView({ once: true });
  const revealClass = mode === "stagger" ? "reveal-in-stagger" : "reveal-in";
  const visibleClass = isInView ? " is-visible" : "";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${revealClass}${visibleClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
