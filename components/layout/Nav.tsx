"use client";

import * as React from "react";
import Link from "next/link";
import { ABOUT_NAV_ITEMS } from "@/utils/aboutNav";
import { INSIGHTS_NAV_ITEMS } from "@/utils/insightsNav";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavDropdown {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isNavDropdown(item: NavItem): item is NavDropdown {
  return "children" in item;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Who We Are",
    children: ABOUT_NAV_ITEMS.map(({ href, label }) => ({ href, label })),
  },
  { href: "/practice-areas", label: "Our Expertise" },
  {
    label: "Our Team",
    children: [
      { href: "/teams/attorneys", label: "Attorneys" },
      { href: "/teams/professional-staff", label: "Professional Staff" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    label: "Insights",
    children: INSIGHTS_NAV_ITEMS.map(({ href, label }) => ({ href, label })),
  },
  { href: "/contact", label: "Contact Us" },
];

/** Flatten nav items for mobile: dropdowns become their child links */
export function getMobileNavLinks(): NavLink[] {
  const links: NavLink[] = [];
  for (const item of navItems) {
    if (isNavDropdown(item)) {
      links.push(...item.children);
    } else {
      links.push(item);
    }
  }
  return links;
}

export function Nav({
  onNavigate,
  light = false,
}: {
  onNavigate?: () => void;
  light?: boolean;
}) {
  const linkClass = light
    ? "text-sm font-medium tracking-wide text-white hover:text-gold transition-colors duration-200 focus:text-gold"
    : "text-sm font-medium tracking-wide text-foreground hover:text-gold transition-colors duration-200 focus:text-gold";

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        {navItems.map((item) => {
          if (isNavDropdown(item)) {
            const firstChild = item.children[0];
            return (
              <li key={item.label} className="relative group">
                <Link
                  href={firstChild.href}
                  onClick={onNavigate}
                  className={`${linkClass} flex items-center gap-1`}
                  id={`nav-${item.label.replace(/\s/g, "-")}`}
                >
                  {item.label}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                {/*
                  Revealed on hover AND on keyboard focus. `invisible` removes the
                  child links from the tab order, so without `focus-within` a
                  keyboard user could never reach them.
                */}
                <div
                  className="absolute left-0 top-full pt-1 -translate-y-0.5 md:invisible md:opacity-0 md:transition-opacity md:duration-200 md:ease-out md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100"
                  aria-label={`${item.label} submenu`}
                >
                  <div className="py-2 bg-white border border-border rounded shadow-lg min-w-[200px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onNavigate}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-slate-light hover:text-gold transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <Link href={item.href} onClick={onNavigate} className={linkClass}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
