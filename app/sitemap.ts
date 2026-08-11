import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/site";
import {
  getAllPracticeAreaSlugs,
  insights,
  lawyers,
} from "@/utils/mockData";

/**
 * `/insights` is intentionally absent — it redirects to `/insights/firm-news`,
 * and redirect targets are what belong in a sitemap.
 */
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/about/how-we-work", priority: 0.6 },
  { path: "/about/what-to-expect", priority: 0.6 },
  { path: "/practice-areas", priority: 0.9 },
  { path: "/teams/attorneys", priority: 0.8 },
  { path: "/teams/professional-staff", priority: 0.5 },
  { path: "/careers", priority: 0.5 },
  { path: "/insights/firm-news", priority: 0.6 },
  { path: "/insights/client-updates", priority: 0.6 },
  { path: "/insights/publications", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllPracticeAreaSlugs().map((slug) => ({
      url: `${SITE_URL}/practice-areas/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...lawyers.map((lawyer) => ({
      url: `${SITE_URL}/teams/${lawyer.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
