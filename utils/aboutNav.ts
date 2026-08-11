/**
 * Who We Are section: same nav pattern as Insights (desktop dropdown + sidebar).
 */

export type AboutSection = "about" | "how-we-work" | "what-to-expect";

export const ABOUT_NAV_ITEMS: readonly {
  href: string;
  label: string;
  section: AboutSection;
}[] = [
  { href: "/about", label: "About Us", section: "about" },
  { href: "/about/how-we-work", label: "How we work", section: "how-we-work" },
  {
    href: "/about/what-to-expect",
    label: "What to expect",
    section: "what-to-expect",
  },
] as const;
