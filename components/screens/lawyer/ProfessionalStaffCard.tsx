import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

/**
 * Mirrors `TeamMemberCard`'s layout, but is not a link: these roles have no
 * profile page yet, so the card is inert until details are supplied.
 */
export function ProfessionalStaffCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col border border-border bg-white sm:flex-row">
      <div className="aspect-[3/4] w-full shrink-0 relative overflow-hidden img-editorial sm:w-56">
        <PortraitPlaceholder name={title} variant="icon" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
        <span
          className="mb-3 block h-0.5 w-10 shrink-0 rounded-sm bg-gold"
          aria-hidden="true"
        />
        <h2 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
