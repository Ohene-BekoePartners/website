/**
 * Stand-in for a team member whose photograph has not been supplied yet.
 * Fills its (aspect-ratio'd, `relative`) parent, matching the portrait frame.
 */

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

export function PortraitPlaceholder({ name }: { name: string }) {
  const initials = getInitials(name);

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-slate-light"
      role="img"
      aria-label={`${name} — photograph not available`}
    >
      <span
        aria-hidden="true"
        className="font-serif text-4xl font-semibold tracking-wide text-stone select-none"
      >
        {initials}
      </span>
    </div>
  );
}
