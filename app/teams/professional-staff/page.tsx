import type { Metadata } from "next";
import { professionalStaff } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { ProfessionalStaffCard } from "@/components/screens/lawyer/ProfessionalStaffCard";

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
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-charcoal-muted">
            Alongside our lawyers, the firm is supported by professional staff
            who manage the day-to-day administration of the chambers and the
            conduct of court and registry processes. Their work keeps matters
            moving and ensures our clients&apos; instructions are handled
            promptly and with care.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
            Individual profiles will be published in due course.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {professionalStaff.map((role) => (
            <ProfessionalStaffCard
              key={role.id}
              title={role.title}
              description={role.description}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
