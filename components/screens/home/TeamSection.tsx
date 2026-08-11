import Link from "next/link";
import Image from "next/image";
import { lawyers } from "@/utils/mockData";
import { getLawyerPortrait } from "@/utils/images";
import { Button } from "@/components/ui/Button";

function LawyerCard({
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
      className="group block border border-border bg-white transition-colors hover:border-charcoal-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="aspect-[3/4] relative overflow-hidden img-editorial">
        <Image
          src={portraitSrc}
          alt={`${name}, ${title}`}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gold">{title}</p>
        <p className="mt-2 text-sm text-charcoal-muted">
          {practiceAreas.join(", ")}
        </p>
        <span className="mt-3 inline-block text-sm font-medium text-foreground group-hover:text-gold transition-colors">
          View profile →
        </span>
      </div>
    </Link>
  );
}

export function TeamSection() {
  const featured = lawyers.slice(0, 4);
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 id="team-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our Team
          </h2>
          <Link
            href="/teams/attorneys"
            className="text-sm font-medium tracking-wide text-foreground hover:text-gold transition-colors shrink-0"
          >
            View our team →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              name={lawyer.name}
              title={lawyer.title}
              practiceAreas={lawyer.practiceAreas}
              slug={lawyer.slug}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/teams/attorneys" variant="outline">
            Meet our team
          </Button>
        </div>
      </div>
    </section>
  );
}
