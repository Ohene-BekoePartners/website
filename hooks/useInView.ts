"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  /** Only trigger once when element enters view (default: true) */
  once?: boolean;
  /** Root margin for IntersectionObserver (e.g. "0px 0px -80px 0px" to trigger 80px before in view) */
  rootMargin?: string;
  /** Threshold 0–1 (default: 0.1 = 10% visible) */
  threshold?: number;
}

export function useInView(options: UseInViewOptions = {}) {
  const { once = true, rootMargin = "0px 0px -60px 0px", threshold = 0.1 } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        if (once) observer.disconnect();
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return [ref, isInView] as const;
}
