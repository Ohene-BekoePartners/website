import type { Metadata } from "next";
import { getInsightsBySection } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsWithNav } from "@/components/layout/InsightsWithNav";
import { InsightCardsGrid } from "@/components/screens/insights/InsightCardsGrid";

export const metadata: Metadata = {
  title: "Client Update",
  description:
    "Regulatory and legal updates for clients of Ohene-Bekoe & Partners.",
};

export default function ClientUpdatesPage() {
  const items = getInsightsBySection("client-updates");

  return (
    <InsightsWithNav
      activeSection="client-updates"
      hero={
        <PageHero
          title="Client Update"
          description="Practical updates on regulatory and legal developments that affect your business."
        />
      }
    >
      <InsightCardsGrid items={items} />
    </InsightsWithNav>
  );
}
