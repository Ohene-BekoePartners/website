import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/utils/site";

/** Fallback share image. Page-specific imagery is preferred wherever one exists. */
export const DEFAULT_OG_IMAGE = "/logo_white_bg.png";

/** Absolute URL for a site-relative path. Passes through URLs that are already absolute. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface PageSeoInput {
  /** Page title without the site suffix; the layout template appends it. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/about". Used for the canonical URL. */
  path: string;
  /** Share image — a `/public` path or absolute URL. */
  image?: string;
  imageAlt?: string;
  /** `article` adds publication metadata; `profile` suits a person page. */
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  authors?: string[];
  section?: string;
}

/**
 * Builds per-page metadata with a correct canonical URL and Open Graph block.
 *
 * Both matter: Next.js inherits metadata from the root layout, so a page that
 * omits `alternates.canonical` or `openGraph` silently adopts the layout's —
 * which points every page at the homepage and shares one title across the site.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  authors,
  section,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const shareImage = image ?? DEFAULT_OG_IMAGE;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_GB",
      title: fullTitle,
      description,
      url,
      images: [{ url: absoluteUrl(shareImage), alt: imageAlt ?? title }],
      ...(type === "article" && {
        publishedTime,
        authors,
        section,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(shareImage)],
    },
  };
}
