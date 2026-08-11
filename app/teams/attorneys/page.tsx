import type { Metadata } from "next";
import { lawyers } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { TeamMemberCard } from "@/components/screens/lawyer/ProfileCardSections";

export const metadata: Metadata = {
  title: "Attorneys",
  description:
    "Meet the attorneys of Ohene-Bekoe & Partners. Experienced advisers for complex corporate and dispute resolution matters.",
};

export default function AttorneysPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Our Attorneys"
        description="Our attorneys: partners and lawyers with deep experience in corporate, dispute resolution, and high-stakes matters."
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="space-y-8">
          {lawyers.map((lawyer) => (
            <TeamMemberCard
              key={lawyer.id}
              name={lawyer.name}
              title={lawyer.title}
              practiceAreas={lawyer.practiceAreas}
              slug={lawyer.slug}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
