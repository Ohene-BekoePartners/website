/**
 * Curated professional photography URLs (Unsplash).
 * Style: cinematic, high contrast, minimal saturation, corporate editorial.
 * No illustrations, icons, or AI graphics.
 */

const UNSPLASH_BASE = "https://images.unsplash.com";

function buildUnsplashParams(options: {
  w?: number;
  h?: number;
  q?: number;
  fit?: string;
}) {
  const params = new URLSearchParams();
  if (options.w) params.set("w", String(options.w));
  if (options.h) params.set("h", String(options.h));
  if (options.q) params.set("q", String(options.q));
  params.set("auto", "format");
  params.set("fit", options.fit ?? "crop");
  return params.toString();
}

function unsplashUrl(
  photoId: string,
  options: { w?: number; h?: number; q?: number; fit?: string } = {},
) {
  const query = buildUnsplashParams(options);
  return `${UNSPLASH_BASE}/photo-${photoId}?${query}`;
}

/** Unsplash+ premium assets live on plus.unsplash.com with a `premium_photo-` path. */
function unsplashPlusPremiumUrl(
  photoId: string,
  options: { w?: number; h?: number; q?: number; fit?: string } = {},
) {
  const query = buildUnsplashParams(options);
  return `https://plus.unsplash.com/premium_photo-${photoId}?${query}`;
}

/** Hero: city skyline / architecture — cinematic, editorial */
export const heroImage = unsplashUrl("1480714378408-67cf0d13bc1b", {
  w: 1920,
  q: 90,
});

/** Page hero (inner pages): architecture / professional environment */
export const pageHeroImage = unsplashUrl("1480714378408-67cf0d13bc1b", {
  w: 1920,
  q: 88,
});

/** About: professional environment (architecture / city — same reliable source as hero) */
export const aboutImage = unsplashUrl("1480714378408-67cf0d13bc1b", {
  w: 1200,
  q: 85,
});

/** Contact / office: professional building or consultation setting */
export const contactImage = unsplashUrl("1497366216548-37526070297c", {
  w: 1200,
  q: 85,
});

/** Lawyer portraits: local professional headshots (public folder) — listing cards & home */
export const lawyerPortraits = {
  "daniel-ohene-bekoe": "/daniel_suit_long.jpeg",
  "irene-ofori-ani": "/irene.jpeg",
  "lauda-lois-williams": "/louda_lois.jpeg",
  "emmanuel-opoku-somuah": "/emmanuel_opoku.jpeg",
  "gillian-adjoa-acheampong": "/gillian.jpeg",
} as const;

export type LawyerSlug = keyof typeof lawyerPortraits;

/**
 * Returns `undefined` when no portrait exists for the slug — callers render a
 * placeholder. Never falls back to another person's photograph.
 */
export function getLawyerPortrait(slug: string): string | undefined {
  if (slug in lawyerPortraits) return lawyerPortraits[slug as LawyerSlug];
  return undefined;
}

/**
 * Full profile page hero image. When absent, falls back to {@link getLawyerPortrait}.
 * List pages (attorneys grid, home) always use `getLawyerPortrait`.
 */
const lawyerProfilePageImages: Partial<Record<LawyerSlug, string>> = {
  "daniel-ohene-bekoe": "/daniel.jpeg",
};

export function getLawyerProfilePageImage(slug: string): string | undefined {
  if (slug in lawyerProfilePageImages) {
    const src = lawyerProfilePageImages[slug as LawyerSlug];
    if (src) return src;
  }
  return getLawyerPortrait(slug);
}

/** Insight/publication card images: Unsplash URLs or `/…` paths from `public/`. */
const INSIGHT_IMG_OPTS = { w: 800, h: 500, q: 85 };
export const insightImages: Record<string, string> = {
  "force-majeure-energy-hormuz": "/oil.jpg",
  /** Courthouse / rule of law — dispute resolution & institutional justice */
  "dispute-regulatory-expansion-accra-2026": unsplashUrl(
    "1589829545856-d10d557cf95f",
    INSIGHT_IMG_OPTS,
  ),
  "chambers-global-2026": "/chambers.jpg",
  /** Digital asset markets / trading context — regulatory & crypto outlook */
  "regulatory-digital-assets-2026": unsplashUrl(
    "1611974789855-9c2a0a7236a3",
    INSIGHT_IMG_OPTS,
  ),
  "dispute-resolution-trends-west-africa": unsplashUrl(
    "1641295438018-fb626fcdd87f",
    INSIGHT_IMG_OPTS,
  ),
};

export function getInsightImage(slug: string): string | undefined {
  return insightImages[slug];
}

/** Practice area card images: Unsplash URLs or `/…` paths from `public/`. */
const PA_IMG = { w: 800, h: 450, q: 85 };
export const practiceAreaImages: Record<string, string> = {
  "litigation-arbitration-dispute-resolution": unsplashUrl(
    "1768839722142-a980c55e994b",
    PA_IMG,
  ),
  "maritime-shipping-international-trade": unsplashUrl(
    "1759272548470-d0686d071036",
    PA_IMG,
  ),
  "criminal-law": unsplashPlusPremiumUrl("1763556883471-15e0d1894137", PA_IMG),
  "legal-advisory-company-secretarial-regulatory-compliance": unsplashUrl(
    "1544377193-33dcf4d68fb5",
    PA_IMG,
  ),
  /** IP, innovation & digital — professional workspace / technology */
  "intellectual-property-technology-law": unsplashUrl(
    "1531297484001-80022131f5a1",
    PA_IMG,
  ),
  "family-dispute-resolution": "/family.jpg",
  "labour-employment-immigration": "/labor.jpg",
  "debt-recovery": "/law.jpg",
};

export function getPracticeAreaImage(slug: string): string {
  return (
    practiceAreaImages[slug] ??
    unsplashUrl("1480714378408-67cf0d13bc1b", PA_IMG)
  );
}
