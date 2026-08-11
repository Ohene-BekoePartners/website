import type { InsightSection } from "@/utils/insightsNav";
import { InsightsSubnav } from "./InsightsSubnav";

export function InsightsWithNav({
  hero,
  children,
  activeSection,
}: {
  hero: React.ReactNode;
  children: React.ReactNode;
  activeSection?: InsightSection;
}) {
  return (
    <article className="bg-white">
      {hero}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <InsightsSubnav activeSection={activeSection} />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </article>
  );
}
