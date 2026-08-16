import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

/**
 * Mirrors `TeamMemberCard`'s layout, but is not a link: these roles have no
 * profile page yet, so the card is inert until details are supplied.
 */
export function ProfessionalStaffCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col border border-border bg-white sm:flex-row">
      <div className="aspect-[3/4] w-full shrink-0 relative overflow-hidden img-editorial sm:w-56">
        <PortraitPlaceholder name={title} variant="icon" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-2 text-sm text-charcoal-muted">Details to follow.</p>
      </div>
    </div>
  );
}
