import type { Metadata } from "next";
import { getInsightsBySection } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsWithNav } from "@/components/layout/InsightsWithNav";
import { InsightCardsGrid } from "@/components/screens/insights/InsightCardsGrid";

export const metadata: Metadata = {
  title: "Firm News",
  description:
    "News, recognition, and announcements from Ohene-Bekoe & Partners.",
};

export default function FirmNewsPage() {
  const items = getInsightsBySection("firm-news");

  return (
    <InsightsWithNav
      activeSection="firm-news"
      hero={
        <PageHero
          title="Firm News"
          description="Announcements, directory recognition, and updates about the firm."
        />
      }
    >
      <InsightCardsGrid items={items} />
    </InsightsWithNav>
  );
}
