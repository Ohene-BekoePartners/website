"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  INSIGHTS_NAV_ITEMS,
  type InsightSection,
} from "@/utils/insightsNav";

export function InsightsSubnav({
  activeSection,
}: {
  /** When set (e.g. on article pages), highlights the parent section. */
  activeSection?: InsightSection;
}) {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-border pb-3 lg:w-56 lg:border-b-0 lg:pb-0">
      <nav aria-label="Insights sections">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-muted mb-3 lg:mb-5">
          Insights
        </h2>
        {/* Mobile: horizontal row + bottom accent; lg+: vertical list + left accent */}
        <ul
          className="-mx-1 flex flex-row flex-nowrap gap-1 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] lg:mx-0 lg:flex-col lg:gap-0 lg:space-y-0.5 lg:overflow-visible lg:border-l lg:border-border lg:pb-0"
        >
          {INSIGHTS_NAV_ITEMS.map((item) => {
            const isActive = activeSection
              ? item.section === activeSection
              : pathname === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={`block whitespace-nowrap rounded-sm px-3 py-2.5 text-sm font-medium font-serif transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold border-b-2 lg:border-b-0 lg:border-l-2 lg:-ml-px lg:px-0 lg:pl-4 lg:rounded-none ${
                    isActive
                      ? "border-gold text-foreground"
                      : "border-transparent text-charcoal-muted hover:text-gold lg:hover:border-gold/40"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
