import type { Metadata } from "next";
import { buildMetadata } from "@/utils/seo";
import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = buildMetadata({
  title: "Our Expertise",
  description:
    "Litigation, maritime, criminal law, corporate secretarial & compliance, family law, employment, and debt recovery — Ohene-Bekoe & Partners.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Our Expertise"
        description="listen carefully, observe patiently and respond strategically."
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {practiceAreas.map((area) => (
            <article
              key={area.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <Link
                href={`/practice-areas/${area.slug}`}
                className="relative block aspect-video w-full shrink-0 bg-slate-light outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`${area.title} — view full details`}
              >
                <Image
                  src={area.image}
                  alt=""
                  fill
                  className="object-cover img-editorial"
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 h-5 w-1 shrink-0 rounded-sm bg-gold"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">
                    {area.category}
                  </p>
                </div>
                <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-foreground md:text-2xl">
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {area.title}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-muted line-clamp-4">
                  {area.excerpt}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-sm font-semibold text-gold hover:text-gold-muted transition-colors duration-200"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
