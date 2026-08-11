import { MapPinIcon } from "@/components/ui/Icons";

/** Single source of truth for the office address used in map links. */
export const OFFICE_ADDRESS = "1 Liberation Road, North Ridge, Accra, Ghana";

const encodedAddress = encodeURIComponent(OFFICE_ADDRESS);

/**
 * Interactive Google map. `output=embed` needs no API key or billing account.
 * Loaded lazily so it costs nothing until scrolled into view.
 */
const EMBED_SRC = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

/** Google's documented, key-free directions deep link. */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

export function OfficeMap({
  className = "",
  height = "h-40",
}: {
  className?: string;
  /** Tailwind height class for the map frame. */
  height?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`relative w-full overflow-hidden rounded border border-border bg-slate-light ${height}`}
      >
        <iframe
          src={EMBED_SRC}
          title={`Map of the Ohene-Bekoe & Partners office at ${OFFICE_ADDRESS}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-gold transition-colors duration-200"
      >
        <MapPinIcon className="h-4 w-4 shrink-0 text-gold" />
        Get directions
        <span aria-hidden="true">→</span>
        <span className="sr-only">(opens Google Maps in a new tab)</span>
      </a>
    </div>
  );
}
