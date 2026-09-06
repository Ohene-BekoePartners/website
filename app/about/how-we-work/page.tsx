import type { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import { PageHero } from "@/components/ui/PageHero";
import { AboutWithNav } from "@/components/layout/AboutWithNav";

export const metadata: Metadata = buildMetadata({
  title: "How we work",
  description:
    "Our client-centric approach: clear communication, tailored solutions, and pragmatic legal advice from Ohene-Bekoe & Partners.",
  path: "/about/how-we-work",
});

const proseClass =
  "prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-charcoal-muted prose-p:max-w-prose prose-p:leading-relaxed prose-a:text-gold";

export default function HowWeWorkPage() {
  return (
    <AboutWithNav
      activeSection="how-we-work"
      hero={
        <PageHero
          title="How we work"
          description="Client-centric advice that is strategic, practical, and clear."
        />
      }
    >
      <div className={proseClass}>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            How we work
          </h2>
          <p className="mt-4 text-charcoal-muted">
            Our approach is client-centric. We prioritize on understanding our
            clients&apos; needs and delivering clear communication and tailored
            solutions that are both strategic and practical. We work closely with
            our clients to gain a clear understanding of their objectives and
            provide tailored legal advice designed to achieve effective results.
          </p>
          <p className="mt-4 text-charcoal-muted">
            Our lawyers combine thorough legal analysis with a strong awareness
            of the commercial and regulatory landscape, ensuring that our
            clients receive advice that is not only legally sound but also
            pragmatic and solution-oriented.
          </p>
          <p className="mt-4 text-charcoal-muted">
            We place great emphasis on communication, transparency, and
            efficiency, ensuring that clients remain informed and confident
            throughout the legal process.
          </p>
        </section>
      </div>
    </AboutWithNav>
  );
}
