import Image from "next/image";
import Link from "next/link";
import { LOGO_PLAIN_SRC, LOGO_WHITE_SRC } from "@/utils/branding";

export type SiteLogoVariant = "light-ui" | "dark-ui";

/** Pixel size of each logo file — must match the PNGs or layout will skew. */
export const LOGO_INTRINSIC_PX: Record<
  SiteLogoVariant,
  { width: number; height: number }
> = {
  // logo_white_bg.png — nearly square; do NOT use a wide aspect box for this asset
  "dark-ui": { width: 527, height: 474 },
  // logo_plain.png — wide wordmark
  "light-ui": { width: 3000, height: 1258 },
};

export interface SiteLogoProps {
  variant: SiteLogoVariant;
  className?: string;
  /**
   * Display size: Tailwind height (and optional max) on the image, e.g. `h-14 max-h-14 md:h-20`.
   * Width follows the real file aspect ratio (`w-auto`), so the mark stays large with no empty “stretch”.
   */
  imageClassName?: string;
  /**
   * Optional fixed rectangle (advanced). Image uses `fill` + `object-contain` inside it.
   * Prefer leaving this unset and tuning `imageClassName` height instead.
   */
  boxClassName?: string;
  priority?: boolean;
  onNavigate?: () => void;
}

export const SITE_LOGO_SIZE_LIGHT_UI =
  "h-12 max-h-12 w-auto md:h-14 md:max-h-14";
/**
 * Hero / dark navbar: these heights set **layout** (navbar row height). Visual size
 * is bumped with `scale` below so the mark reads larger without growing the bar.
 */
export const SITE_LOGO_SIZE_DARK_UI =
  "h-[3.25rem] max-h-[3.25rem] w-auto sm:h-16 sm:max-h-16 md:h-[4.75rem] md:max-h-[4.75rem] lg:h-[5.5rem] lg:max-h-[5.5rem]";

/**
 * Visual-only upscale; transform does not change flow, so navbar height stays put.
 * `max-md:` = viewports under 768px only; `md`/`lg` are unchanged on desktop.
 */
const DARK_UI_VISUAL_SCALE =
  "origin-left max-md:scale-[2.95] md:scale-[1.94] lg:scale-[2.02]";

export function SiteLogo({
  variant,
  className = "",
  imageClassName,
  boxClassName,
  priority = false,
  onNavigate,
}: SiteLogoProps) {
  const src = variant === "dark-ui" ? LOGO_WHITE_SRC : LOGO_PLAIN_SRC;
  const { width, height } = LOGO_INTRINSIC_PX[variant];

  const sizeClass =
    imageClassName ??
    (variant === "dark-ui" ? SITE_LOGO_SIZE_DARK_UI : SITE_LOGO_SIZE_LIGHT_UI);

  if (boxClassName) {
    return (
      <Link
        href="/"
        onClick={onNavigate}
        className={`inline-flex items-center shrink-0 rounded-sm transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${className}`}
        aria-label="Home - Ohene-Bekoe & Partners"
      >
        <span
          className={`relative inline-block shrink-0 ${boxClassName}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 320px, 480px"
            priority={priority}
          />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`inline-flex items-center shrink-0 rounded-sm transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
        variant === "dark-ui"
          ? "max-md:mr-8 md:mr-8 lg:mr-10 overflow-visible"
          : ""
      } ${className}`}
      aria-label="Home - Ohene-Bekoe & Partners"
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={`object-contain object-left ${sizeClass}${
          variant === "dark-ui" ? ` ${DARK_UI_VISUAL_SCALE}` : ""
        }`}
        sizes="(max-width: 768px) 520px, 480px"
        priority={priority}
      />
    </Link>
  );
}
