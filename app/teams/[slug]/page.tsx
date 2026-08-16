import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeamMemberBySlug, getAllTeamMemberSlugs } from "@/utils/team";
import { getLawyerProfilePageImage } from "@/utils/images";
import { PageHero } from "@/components/ui/PageHero";
import { ProfileCardSections } from "@/components/screens/lawyer/ProfileCardSections";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllTeamMemberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getTeamMemberBySlug(slug);
  if (!result) return { title: "Team" };
  const { member } = result;
  const description =
    member.intro ??
    (typeof member.bio === "string"
      ? member.bio
      : Array.isArray(member.bio)
        ? member.bio[0]
        : undefined) ??
    `${member.name}, ${member.title}. ${"practiceAreas" in member && member.practiceAreas?.length ? member.practiceAreas.join(", ") : ""}`.trim();
  return {
    title: `${member.name} | ${member.title}`,
    description,
  };
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      <div className="text-sm text-charcoal-muted">{children}</div>
    </section>
  );
}

export default async function TeamMemberProfilePage({ params }: Props) {
  const { slug } = await params;
  const result = getTeamMemberBySlug(slug);
  if (!result) notFound();

  const { member, type } = result;
  const backHref =
    type === "attorney" ? "/teams/attorneys" : "/teams/professional-staff";
  const backLabel =
    type === "attorney"
      ? "← Back to Attorneys"
      : "← Back to Professional Staff";
  const listLabel =
    type === "attorney" ? "Our Attorneys" : "Professional Staff";

  const portraitSrc = getLawyerProfilePageImage(member.slug);

  return (
    <article className="bg-white">
      <PageHero
        title={member.name}
        description={member.title}
        backLink={{ href: backHref, label: backLabel }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-charcoal-muted mb-10"
        >
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <Link
                href="/"
                className="hover:text-gold transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">|</li>
            <li>
              <Link
                href={backHref}
                className="hover:text-gold transition-colors duration-200"
              >
                {listLabel}
              </Link>
            </li>
            <li aria-hidden="true">|</li>
            <li className="text-foreground" aria-current="page">
              {member.name}
            </li>
          </ol>
        </nav>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            <div className="aspect-3/4 w-full max-w-sm shrink-0 relative overflow-hidden img-editorial self-start">
              {portraitSrc ? (
                <Image
                  src={portraitSrc}
                  alt={`${member.name}, ${member.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 384px, 100vw"
                  priority
                />
              ) : (
                <PortraitPlaceholder name={member.name} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              {member.quote && (
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-snug italic border-l-2 border-gold pl-6 py-2 mb-8">
                  {member.quote}
                </blockquote>
              )}
              <div>
                {member.intro && (
                  <p className="text-base text-charcoal-muted leading-relaxed mb-6">
                    {member.intro}
                  </p>
                )}
                {member.bio && (
                  <div className="text-base text-charcoal-muted leading-relaxed space-y-4">
                    {Array.isArray(member.bio) ? (
                      member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{member.bio}</p>
                    )}
                  </div>
                )}
              </div>

              <ProfileCardSections
                qualifications={member.qualifications}
                career={member.career}
                specialisms={member.specialisms}
                memberships={member.memberships}
                publications={member.publications}
                className="mt-10 space-y-0 lg:hidden"
              />
            </div>
          </div>

          <aside className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-0">
              {member.contact &&
                (member.contact.email || member.contact.phone) && (
                  <SidebarSection title="Contact details">
                    <ul className="space-y-2">
                      {member.contact.phone && (
                        <li>
                          <a
                            href={`tel:${member.contact.phone.replace(/\s/g, "")}`}
                            className="text-gold hover:text-gold-muted transition-colors duration-200"
                          >
                            {member.contact.phone}
                          </a>
                        </li>
                      )}
                      {member.contact.email && (
                        <li>
                          <a
                            href={`mailto:${member.contact.email}`}
                            className="text-gold hover:text-gold-muted transition-colors duration-200 break-all"
                          >
                            {member.contact.email}
                          </a>
                        </li>
                      )}
                      <li>
                        <Link
                          href="/contact"
                          className="text-gold hover:text-gold-muted transition-colors duration-200 inline-flex items-center gap-1"
                        >
                          Get in touch →
                        </Link>
                      </li>
                    </ul>
                  </SidebarSection>
                )}
              <ProfileCardSections
                qualifications={member.qualifications}
                career={member.career}
                specialisms={member.specialisms}
                memberships={member.memberships}
                publications={member.publications}
                className="hidden lg:block space-y-0 mt-6"
              />
            </div>
          </aside>
        </div>

        {"practiceAreas" in member &&
          member.practiceAreas &&
          member.practiceAreas.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Practice areas
              </h2>
              <ul className="flex flex-wrap gap-3">
                {member.practiceAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href="/practice-areas"
                      className="inline-block px-4 py-2 text-sm font-medium text-foreground border border-border hover:border-gold hover:text-gold transition-colors duration-200"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

        <div className="mt-16 border-t border-border pt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-muted transition-colors duration-200"
          >
            Get in touch with {member.name.split(" ")[0]} →
          </Link>
        </div>
      </div>
    </article>
  );
}
