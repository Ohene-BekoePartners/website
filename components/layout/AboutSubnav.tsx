"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ABOUT_NAV_ITEMS, type AboutSection } from "@/utils/aboutNav";

export function AboutSubnav({
  activeSection,
}: {
  activeSection?: AboutSection;
}) {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-border pb-3 lg:w-56 lg:border-b-0 lg:pb-0">
      <nav aria-label="Who we are sections">
        <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-muted mb-3 lg:mb-5">
          Who we are
        </h2>
        <ul className="-mx-1 flex flex-row flex-nowrap gap-1 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] lg:mx-0 lg:flex-col lg:gap-0 lg:space-y-0.5 lg:overflow-visible lg:border-l lg:border-border lg:pb-0">
          {ABOUT_NAV_ITEMS.map((item) => {
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
