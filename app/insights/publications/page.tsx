import type { Metadata } from "next";
import { getInsightsBySection } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsWithNav } from "@/components/layout/InsightsWithNav";
import { InsightCardsGrid } from "@/components/screens/insights/InsightCardsGrid";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Legal articles, briefings, and analysis from Ohene-Bekoe & Partners.",
};

export default function PublicationsPage() {
  const items = getInsightsBySection("publications");

  return (
    <InsightsWithNav
      activeSection="publications"
      hero={
        <PageHero
          title="Publications"
          description="In-depth articles and briefings on dispute resolution, energy, markets, and cross-border issues."
        />
      }
    >
      <InsightCardsGrid items={items} />
    </InsightsWithNav>
  );
}
