import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/utils/mockData";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { Button } from "@/components/ui/Button";

/** Home page shows a subset; full list is on /practice-areas */
const HOME_PRACTICE_AREAS_COUNT = 3;

export function PracticeAreasSection() {
  const featuredAreas = practiceAreas.slice(0, HOME_PRACTICE_AREAS_COUNT);
  return (
    <section
      className="bg-slate-light/60 py-20 lg:py-28"
      aria-labelledby="our-expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateInView>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="our-expertise-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Our Expertise
            </h2>
            <Link
              href="/practice-areas"
              className="text-sm font-medium tracking-wide text-foreground hover:text-gold transition-colors duration-200 shrink-0"
            >
              View our expertise →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {featuredAreas.map((area) => (
              <article
                key={area.id}
                className="flex h-full flex-col overflow-hidden rounded-lg border border-border/80 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="relative block aspect-video w-full shrink-0 bg-slate-light outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={`${area.title} — read more`}
                >
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    className="object-cover img-editorial"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5 pt-5">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 h-5 w-1 shrink-0 rounded-sm bg-gold"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">
                      {area.category}
                    </p>
                  </div>

                  <h3 className="mt-3 font-serif text-lg font-bold leading-snug tracking-tight text-foreground md:text-xl">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="hover:text-gold transition-colors duration-200 focus:outline-none focus-visible:text-gold"
                    >
                      {area.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-muted line-clamp-4">
                    {area.excerpt}
                  </p>

                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-gold hover:text-gold-muted transition-colors duration-200"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-10">
            <Button href="/practice-areas" variant="primary">
              Our Expertise
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
