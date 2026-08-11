"use client";

import * as React from "react";
import type { LawyerCareer, LawyerPublication } from "@/utils/mockData";
import Link from "next/link";
import Image from "next/image";
import { getLawyerPortrait } from "@/utils/images";

export interface ProfileCardSectionsProps {
  qualifications?: string[];
  career?: LawyerCareer[];
  /** Shown after Education, same accordion style as Education / Experience */
  specialisms?: string[];
  memberships?: string[];
  publications?: LawyerPublication[];
  className?: string;
}

function AccordionCard({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();

  return (
    <section
      className="rounded border border-border bg-white overflow-hidden mb-4 last:mb-0"
      aria-labelledby={`${id}-heading`}
    >
      <h3
        id={`${id}-heading`}
        className="sr-only font-serif text-base font-semibold text-foreground"
      >
        {title}
      </h3>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex cursor-pointer items-center justify-between gap-3 min-h-13 px-5 py-4 text-left font-serif text-lg font-semibold text-foreground hover:bg-slate-light/40 active:bg-slate-light/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
        aria-expanded={open}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
      >
        <span>{title}</span>
        <span
          className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-slate-light/60 text-gold text-lg font-medium transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-heading`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5 pt-4 border-t border-border text-sm text-charcoal-muted leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProfileCardSections({
  qualifications,
  career,
  specialisms,
  memberships,
  publications,
  className = "",
}: ProfileCardSectionsProps) {
  return (
    <div className={className}>
      {career && career.length > 0 && (
        <AccordionCard title="Experience">
          {career[0].role?.startsWith("Part of the legal") && (
            <p className="mb-3 text-charcoal-muted">
              Many of Mr. Ohene-Bekoe’s matters are confidential. Notable
              representations include the following:
            </p>
          )}
          <ul className="space-y-3" role="list">
            {career.map((c, i) => (
              <li
                key={`${c.firm}-${c.role ?? ""}-${i}`}
                className="flex items-baseline gap-3 text-sm leading-relaxed"
              >
                <span
                  className="text-gold shrink-0 font-medium"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>
                  {c.caseName ? (
                    <>
                      {c.firm ? (
                        <span className="font-medium text-foreground">
                          {c.firm}{" "}
                        </span>
                      ) : null}
                      {c.role ? (
                        <span className="text-charcoal-muted">{c.role}</span>
                      ) : null}
                      <span className="italic text-charcoal-muted">
                        {c.caseName}
                      </span>
                      {c.caseSuffix ? (
                        <span className="text-charcoal-muted">
                          {c.caseSuffix}
                        </span>
                      ) : null}
                    </>
                  ) : c.role ? (
                    <>
                      <span className="font-medium text-foreground">
                        {c.firm}
                      </span>
                      <span className="text-charcoal-muted">{c.role}</span>
                    </>
                  ) : (
                    <span className="font-medium text-foreground">
                      {c.firm}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </AccordionCard>
      )}
      {qualifications && qualifications.length > 0 && (
        <AccordionCard title="Education">
          <ul className="space-y-3" role="list">
            {qualifications.map((q) => (
              <li
                key={q}
                className="flex items-baseline gap-3 text-sm leading-relaxed"
              >
                <span
                  className="text-gold shrink-0 font-medium"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </AccordionCard>
      )}
      {specialisms && specialisms.length > 0 && (
        <AccordionCard title="Practice Areas">
          <ul className="space-y-3" role="list">
            {specialisms.map((s) => (
              <li
                key={s}
                className="flex items-baseline gap-3 text-sm leading-relaxed"
              >
                <span
                  className="text-gold shrink-0 font-medium"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </AccordionCard>
      )}
      {memberships && memberships.length > 0 && (
        <AccordionCard title="Memberships and Associations">
          <ul className="space-y-3" role="list">
            {memberships.map((m) => (
              <li
                key={m}
                className="flex items-baseline gap-3 text-sm leading-relaxed"
              >
                <span
                  className="text-gold shrink-0 font-medium"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </AccordionCard>
      )}
      {publications && publications.length > 0 && (
        <AccordionCard title="Publications">
          <ul className="space-y-3" role="list">
            {publications.map((pub, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-sm leading-relaxed"
              >
                <span
                  className="text-gold shrink-0 font-medium"
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>
                  <span className="italic text-foreground">{pub.title}</span>
                  {pub.citation && <span>, {pub.citation}</span>}
                  {pub.year && <span> {pub.year}</span>}
                </span>
              </li>
            ))}
          </ul>
        </AccordionCard>
      )}
    </div>
  );
}

export function TeamMemberCard({
  name,
  title,
  practiceAreas,
  slug,
}: {
  name: string;
  title: string;
  practiceAreas: string[];
  slug: string;
}) {
  const portraitSrc = getLawyerPortrait(slug);
  return (
    <Link
      href={`/teams/${slug}`}
      className="group flex flex-col border border-border bg-white transition-colors hover:border-charcoal-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:flex-row"
    >
      <div className="aspect-[3/4] w-full shrink-0 relative overflow-hidden img-editorial sm:w-56">
        <Image
          src={portraitSrc}
          alt={`${name}, ${title}`}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 640px) 224px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
        <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
          {name}
        </h2>
        <p className="mt-1 text-sm text-gold">{title}</p>
        {/* <p className="mt-2 text-sm text-charcoal-muted">
          {practiceAreas.join(", ")}
        </p> */}
        <span className="mt-4 inline-block text-sm font-medium text-foreground group-hover:text-gold transition-colors">
          View full profile →
        </span>
      </div>
    </Link>
  );
}
