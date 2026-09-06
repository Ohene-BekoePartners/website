import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPracticeAreaBySlug,
  getAllPracticeAreaSlugs,
} from "@/utils/mockData";
import { buildMetadata } from "@/utils/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, practiceAreaSchema } from "@/utils/schema";
import { PageHero } from "@/components/ui/PageHero";

type Props = { params: Promise<{ slug: string }> };

const SUB_LABELS = ["a", "b", "c", "d", "e", "f"] as const;

export async function generateStaticParams() {
  return getAllPracticeAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return { title: "Expertise" };
  return buildMetadata({
    title: area.title,
    description: area.excerpt,
    path: `/practice-areas/${area.slug}`,
    image: area.image,
    imageAlt: area.title,
  });
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  return (
    <article className="bg-white">
      <PageHero
        title={area.title}
        description={area.category}
        backLink={{
          href: "/practice-areas",
          label: "← Back to Our Expertise",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <JsonLd
          data={[
            practiceAreaSchema(area),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Our Expertise", path: "/practice-areas" },
              { name: area.title, path: `/practice-areas/${area.slug}` },
            ]),
          ]}
        />
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
                href="/practice-areas"
                className="hover:text-gold transition-colors duration-200"
              >
                Our Expertise
              </Link>
            </li>
            <li aria-hidden="true">|</li>
            <li className="text-foreground" aria-current="page">
              {area.title}
            </li>
          </ol>
        </nav>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-light img-editorial">
          <Image
            src={area.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 768px, 100vw"
            priority
          />
        </div>

        <div className="mt-10 flex items-start gap-3">
          <span
            className="mt-1 h-6 w-1 shrink-0 rounded-sm bg-gold"
            aria-hidden="true"
          />
          <p className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">
            {area.category}
          </p>
        </div>

        <div>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-muted border-l-2 border-gold pl-6">
            {area.excerpt}
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal-muted">
            {Array.isArray(area.description) ? (
              area.description.map((desc, i) => <p key={i}>{desc}</p>)
            ) : (
              <p>{area.description}</p>
            )}
            {area.subsections && (
              <p className="font-serif text-2xl font-bold text-foreground">
                What we offer:
              </p>
            )}
            {area.subsections?.map((sub, i) => (
              <section key={sub.id}>
                <h2 className="font-serif text-xl font-bold italic text-foreground">
                  - {sub.title}
                </h2>
                <p className="mt-3">{sub.description}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-muted transition-colors duration-200"
          >
            Discuss your matter →
          </Link>
          <span className="text-charcoal-muted" aria-hidden="true">
            ·
          </span>
          <Link
            href="/practice-areas"
            className="text-sm font-medium text-charcoal-muted hover:text-gold transition-colors duration-200"
          >
            View all expertise
          </Link>
        </div>
      </div>
    </article>
  );
}
