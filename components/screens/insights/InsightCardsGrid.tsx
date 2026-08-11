import Link from "next/link";
import Image from "next/image";
import type { Insight } from "@/utils/mockData";
import { Card, CardContent } from "@/components/ui/Card";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function InsightCardsGrid({ items }: { items: Insight[] }) {
  if (items.length === 0) {
    return (
      <p className="text-charcoal-muted leading-relaxed">
        There are no items in this section yet. Please check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id} as="article" className="overflow-hidden">
          {item.image && (
            <Link
              href={`/insights/${item.slug}`}
              className="block aspect-video w-full relative bg-slate-light"
              aria-label={`View article: ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover img-editorial"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Link>
          )}
          <CardContent className="text-justify-rich">
            <p className="text-xs font-medium uppercase tracking-wider text-gold">
              {item.category}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
              <Link
                href={`/insights/${item.slug}`}
                className="hover:text-gold transition-colors"
              >
                {item.title}
              </Link>
            </h2>
            <p className="mt-4 text-charcoal-muted leading-relaxed line-clamp-3">
              {item.excerpt}
            </p>
            <p className="mt-4 text-sm text-charcoal-muted">
              {formatDate(item.date)}
            </p>
            <Link
              href={`/insights/${item.slug}`}
              className="mt-4 inline-block text-sm font-medium text-gold hover:text-gold-muted transition-colors"
            >
              Read more
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
