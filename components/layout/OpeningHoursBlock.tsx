/**
 * Shared opening hours + practice reach note (contact page + footer).
 */
export function OpeningHoursBlock({
  className = "",
  footer = false,
  contact = false,
}: {
  className?: string;
  footer?: boolean;
  contact?: boolean;
}) {
  return (
    <div
      className={`text-sm leading-relaxed text-charcoal-muted ${className}`}
      role="note"
    >
      {!footer && (
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Opening hours
        </p>
      )}
      <ul className="mt-3 list-none space-y-1">
        <li>
          <span className="text-foreground">Mon – Fri:</span> 8.15am – 4.30pm
        </li>
        <li>
          <span className="text-foreground">Closed for lunch:</span> 12.15pm –
          1.30pm
        </li>
        <li>
          <span className="text-foreground">Sat &amp; Sun:</span> Closed
        </li>
      </ul>
      {/* Client asked for this note to be dropped from the footer; it stays on the contact page. */}
      {!footer && (
        <p className={`mt-4 text-charcoal-muted ${contact ? "text-base" : ""}`}>
          While the majority of cases are in Accra and Tema, our practice extends
          beyond these places.
        </p>
      )}
    </div>
  );
}
