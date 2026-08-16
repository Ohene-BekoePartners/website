import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { insights } from "@/utils/mockData";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsWithNav } from "@/components/layout/InsightsWithNav";
import {
  insightSectionBackLabel,
  insightSectionToPath,
} from "@/utils/insightsNav";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Insight" };
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const hasContent = insight.content && insight.content.length > 0;
  const sectionHref = insightSectionToPath(insight.section);
  const backLabel = insightSectionBackLabel(insight.section);

  return (
    <InsightsWithNav
      activeSection={insight.section}
      hero={
        <PageHero
          title={insight.title}
          description={`${insight.category} · ${formatDate(insight.date)}`}
          backLink={{
            href: sectionHref,
            label: backLabel,
          }}
        />
      }
    >
      <div className="max-w-3xl">
        {insight.image && (
          <div className="aspect-video w-full relative rounded-lg overflow-hidden bg-slate-light mb-12 img-editorial">
            <Image
              src={insight.image}
              alt={insight.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
          </div>
        )}
        <p className="text-lg leading-relaxed text-charcoal-muted border-l-2 border-gold pl-6 mb-12">
          {insight.excerpt}
        </p>

        {hasContent ? (
          <div className="prose prose-lg max-w-none prose-p:text-charcoal-muted prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4 first:prose-headings:mt-0">
            {insight.content!.map((section, idx) => (
              <section key={idx} className="mb-10 last:mb-0">
                {section.heading && (
                  <h2 className="font-serif text-2xl mb-4 font-semibold text-foreground">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="mb-6 last:mb-0">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        ) : (
          <div className="prose prose-lg max-w-none prose-p:text-charcoal-muted prose-p:leading-relaxed">
            <p>
              This article is available in full from our team. For access or to
              discuss the topics covered, please contact us.
            </p>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-border">
          <Link
            href={sectionHref}
            className="text-sm font-medium text-gold hover:text-gold-muted transition-colors"
          >
            {backLabel}
          </Link>
          <span className="text-charcoal-muted mx-2">·</span>
          <Link
            href="/contact"
            className="text-sm font-medium text-gold hover:text-gold-muted transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </InsightsWithNav>
  );
}
