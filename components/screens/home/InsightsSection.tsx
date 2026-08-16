import Link from "next/link";
import Image from "next/image";
import { insights } from "@/utils/mockData";
import { Button } from "@/components/ui/Button";
import { AnimateInView } from "@/components/ui/AnimateInView";

/** Matches design: MAR 03, 2026 */
function formatInsightDateCaps(dateStr: string) {
  const d = new Date(`${dateStr}T12:00:00`);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const m = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, "0");
  const y = d.getFullYear();
  return `${m} ${day}, ${y}`;
}

/** Vibrant accent used on tags and category bars (design reference). */
const insightAccent = "bg-[#e8c547]";

function CategoryTagPill({ category }: { category: string }) {
  return (
    <span
      className={`inline-flex max-w-full rounded-sm px-3 py-1.5 text-sm font-medium leading-tight text-[#0f172a] ${insightAccent} font-serif`}
    >
      #{category}
    </span>
  );
}

export function InsightsSection() {
  const [featuredSplit, featuredDark, ...rest] = insights;
  const gridItems = rest.slice(0, 3);

  const cardBorder =
    "rounded-lg border border-neutral-200/90 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md";

  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="insights-heading"
    >
      <AnimateInView className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="insights-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Insights
          </h2>
          <Link
            href="/insights"
            className="shrink-0 text-sm font-medium tracking-wide text-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Read more →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Top-left: featured horizontal (spans 2 columns) */}
          {featuredSplit?.image ? (
            <Link
              href={`/insights/${featuredSplit.slug}`}
              className={`group ${cardBorder} flex h-full min-h-0 flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:col-span-2 lg:flex-row`}
              aria-label={`Read insight: ${featuredSplit.title}`}
            >
              <span className="relative block aspect-4/3 w-full shrink-0 bg-slate-light md:aspect-auto lg:w-1/2 lg:min-h-[280px]">
                <Image
                  src={featuredSplit.image}
                  alt=""
                  fill
                  className="object-cover img-editorial transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </span>
              <span className="flex flex-1 flex-col justify-between gap-4 p-6 lg:p-8">
                <span>
                  <p className="font-serif text-xs font-medium uppercase tracking-[0.12em] text-stone">
                    Featured
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl lg:text-[1.65rem]">
                    {featuredSplit.title}
                  </h3>
                  <p className="mt-2 font-serif text-xs font-medium uppercase tracking-widest text-stone">
                    {formatInsightDateCaps(featuredSplit.date)}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-foreground line-clamp-4 md:text-base">
                    {featuredSplit.excerpt}
                  </p>
                </span>
                <span className="mt-2">
                  <CategoryTagPill category={featuredSplit.category} />
                </span>
              </span>
            </Link>
          ) : null}

          {/* Top-right: featured dark overlay */}
          {featuredDark?.image ? (
            <Link
              href={`/insights/${featuredDark.slug}`}
              className={`group relative flex min-h-[280px] h-full flex-col justify-end overflow-hidden ${cardBorder} border-neutral-300/80 p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:col-span-1 lg:min-h-[320px]`}
              aria-label={`Read insight: ${featuredDark.title}`}
            >
              <span className="absolute inset-0">
                <Image
                  src={featuredDark.image}
                  alt=""
                  fill
                  className="object-cover img-editorial transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <span
                  className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-black/35"
                  aria-hidden
                />
              </span>
              <span className="relative z-10 flex flex-col gap-4 p-6 lg:p-7">
                <span>
                  <p className="font-serif text-xs font-medium uppercase tracking-[0.12em] text-white/90">
                    Featured
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold leading-snug tracking-tight text-white md:text-[1.35rem]">
                    {featuredDark.title}
                  </h3>
                  <p className="mt-2 font-serif text-xs font-medium uppercase tracking-widest text-white/75">
                    {formatInsightDateCaps(featuredDark.date)}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/95 line-clamp-5 md:line-clamp-6">
                    {featuredDark.excerpt}
                  </p>
                </span>
                <span>
                  <CategoryTagPill category={featuredDark.category} />
                </span>
              </span>
            </Link>
          ) : null}

          {/* Bottom row: three uniform cards */}
          {gridItems.map((item) =>
            item.image ? (
              <Link
                key={item.id}
                href={`/insights/${item.slug}`}
                className={`group ${cardBorder} flex flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`}
                aria-label={`Read insight: ${item.title}`}
              >
                <span className="relative block aspect-video w-full shrink-0 bg-slate-light">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover img-editorial transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-3 p-5 lg:p-6">
                  <span className="flex min-h-10 gap-3">
                    <span
                      className={`w-1 shrink-0 self-stretch rounded-sm ${insightAccent}`}
                      aria-hidden
                    />
                    <span className="font-serif text-sm font-medium leading-snug text-charcoal">
                      {item.category}
                    </span>
                  </span>
                  <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="font-serif text-xs font-medium uppercase tracking-widest text-stone">
                    {formatInsightDateCaps(item.date)}
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-charcoal-muted line-clamp-3">
                    {item.excerpt}
                  </p>
                </span>
              </Link>
            ) : null,
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/insights" variant="outline">
            View all insights
          </Button>
        </div>
      </AnimateInView>
    </section>
  );
}
