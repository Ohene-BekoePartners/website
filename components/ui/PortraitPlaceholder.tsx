/**
 * Stand-in for a team member whose photograph has not been supplied yet.
 * Fills its (aspect-ratio'd, `relative`) parent, matching the portrait frame.
 *
 * `initials` suits a named person; `icon` suits a role that has not been
 * filled in yet, where initials of a job title would read oddly.
 */

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

export function PortraitPlaceholder({
  name,
  variant = "initials",
}: {
  name: string;
  variant?: "initials" | "icon";
}) {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-slate-light"
      role="img"
      aria-label={
        variant === "icon"
          ? `${name} — photograph to follow`
          : `${name} — photograph not available`
      }
    >
      {variant === "icon" ? (
        <svg
          className="h-16 w-16 text-stone/60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
        </svg>
      ) : (
        <span
          aria-hidden="true"
          className="font-serif text-4xl font-semibold tracking-wide text-stone select-none"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}
