/**
 * Insights area: mirrors main nav “Our Team” pattern (parent + subsection links).
 */

export type InsightSection = "firm-news" | "client-updates" | "publications";

export const INSIGHTS_NAV_ITEMS: readonly {
  href: string;
  label: string;
  section: InsightSection;
}[] = [
  { href: "/insights/firm-news", label: "Firm News", section: "firm-news" },
  {
    href: "/insights/client-updates",
    label: "Client Update",
    section: "client-updates",
  },
  {
    href: "/insights/publications",
    label: "Publications",
    section: "publications",
  },
] as const;

export function insightSectionToPath(section: InsightSection): string {
  const item = INSIGHTS_NAV_ITEMS.find((i) => i.section === section);
  return item?.href ?? "/insights/firm-news";
}

export function insightSectionBackLabel(section: InsightSection): string {
  const labels: Record<InsightSection, string> = {
    "firm-news": "← Back to Firm News",
    "client-updates": "← Back to Client Update",
    "publications": "← Back to Publications",
  };
  return labels[section];
}
