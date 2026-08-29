/** Canonical site constants shared by metadata, sitemap, and robots. */

export const SITE_NAME = "Ohene-Bekoe & Partners";

/**
 * Canonical origin, no trailing slash. Override per environment with
 * `NEXT_PUBLIC_SITE_URL` (e.g. a Vercel preview domain).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://obpgh.com"
).replace(/\/$/, "");
