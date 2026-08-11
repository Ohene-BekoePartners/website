import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Ohene-Bekoe & Partners. We seek talented lawyers and professionals who share our commitment to excellence and client service.",
};

export default function CareersPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Careers"
        description="We seek talented lawyers and professionals who share our commitment to excellence, integrity, and client service."
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl space-y-12">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Why join us
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal-muted">
              Ohene-Bekoe & Partners offers the opportunity to work on
              high-stakes, complex matters alongside experienced partners. We
              value intellectual rigour, collaboration, and a long-term
              commitment to our clients and our profession.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Current opportunities
            </h2>
            <p className="mt-4 text-charcoal-muted">
              We do not have any open positions listed at this time. We welcome
              speculative applications from qualified lawyers with experience in
              our practice areas. Please send a confidential CV and covering
              letter to the contact below.
            </p>
            <div className="mt-8">
              <Button
                href="mailto:careers@ohenebekoeandpartners.com"
                variant="outline"
              >
                careers@ohenebekoeandpartners.com
              </Button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
