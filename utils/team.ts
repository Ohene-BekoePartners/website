import type { Lawyer } from "@/utils/mockData";
import { lawyers } from "@/utils/mockData";

export type TeamMemberType = "attorney" | "professional-staff";

/** Resolves a team member by slug from attorneys or (when added) professional staff. One detail page serves both. */
export function getTeamMemberBySlug(slug: string): { member: Lawyer; type: TeamMemberType } | null {
  const attorney = lawyers.find((l) => l.slug === slug);
  if (attorney) return { member: attorney, type: "attorney" };
  // When professional staff data exists: check professionalStaff array and return { member, type: 'professional-staff' }
  return null;
}

/** All slugs for static generation (attorneys + future professional staff). */
export function getAllTeamMemberSlugs(): string[] {
  return [...lawyers.map((l) => l.slug)];
}
