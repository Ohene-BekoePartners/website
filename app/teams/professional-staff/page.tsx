import type { Metadata } from "next";
import { lawyers } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { TeamMemberCard } from "@/components/screens/lawyer/ProfileCardSections";

export const metadata: Metadata = {
  title: "Professional Staff",
  description:
    "Our professional staff at Ohene-Bekoe & Partners support our lawyers and clients with expertise in administration, operations, and client services.",
};

export default function ProfessionalStaffPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Professional Staff"
        description="Dedicated professionals who support our lawyers and clients."
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
