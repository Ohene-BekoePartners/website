import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutWithNav } from "@/components/layout/AboutWithNav";

export const metadata: Metadata = {
  title: "What to expect",
  description:
    "What clients can expect when they work with Ohene-Bekoe & Partners: professionalism, responsiveness, and lasting relationships.",
};

const proseClass =
  "prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-charcoal-muted prose-p:max-w-prose prose-p:leading-relaxed prose-a:text-gold";

export default function WhatToExpectPage() {
  return (
    <AboutWithNav
      activeSection="what-to-expect"
      hero={
        <PageHero
          title="What to expect"
          description="Professional, responsive, and client-focused legal service."
        />
      }
    >
      <div className={proseClass}>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            What to expect
          </h2>
          <p className="mt-4 text-charcoal-muted">
            Clients who engage Ohene-Bekoe & Partners can expect a professional,
            responsive, and client-focused service.
          </p>
          <p className="mt-4 text-charcoal-muted">
            We approach every matter with diligence, integrity, and attention to
            detail, providing clear legal guidance and practical solutions. Our
            lawyers are committed to protecting our clients&apos; interests while
            delivering efficient and cost-conscious representation.
          </p>
          <p className="mt-4 text-charcoal-muted">
            Above all, we aim to build strong, meaningful and lasting
            relationships with our clients based on trust, reliability, and
            consistently high standards of legal service.
          </p>
        </section>
      </div>
    </AboutWithNav>
  );
}
