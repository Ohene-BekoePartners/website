/**
 * Small inline icons. Decorative by default — the adjacent text carries the
 * meaning, so each is hidden from assistive tech.
 */

type IconProps = { className?: string };

const BASE_PROPS = {
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} {...BASE_PROPS}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} {...BASE_PROPS}>
      <path d="M6.6 3.5h-2A1.6 1.6 0 0 0 3 5.2c0 8.6 7.2 15.8 15.8 15.8a1.6 1.6 0 0 0 1.7-1.6v-2a1.6 1.6 0 0 0-1.3-1.6l-2.6-.5a1.6 1.6 0 0 0-1.6.7l-.7 1a12.4 12.4 0 0 1-5.1-5.1l1-.7a1.6 1.6 0 0 0 .7-1.6l-.5-2.6a1.6 1.6 0 0 0-1.6-1.3Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} {...BASE_PROPS}>
      <path d="M12 21.5s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}
