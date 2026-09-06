/**
 * schema.org structured data. Google uses these to build rich results —
 * the knowledge panel for the firm, bylines and dates on articles,
 * breadcrumb trails in search listings.
 */
import { SITE_NAME, SITE_URL } from "@/utils/site";
import { absoluteUrl } from "@/utils/seo";
import type { Insight, Lawyer, PracticeArea } from "@/utils/mockData";

const ORGANISATION_ID = `${SITE_URL}/#organisation`;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1 Liberation Road, North Ridge",
  addressLocality: "Accra",
  addressCountry: "GH",
} as const;

/**
 * The firm itself. `LegalService` is the schema.org type for a law practice and
 * carries the address, hours and contact details Google shows in local results.
 */
export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORGANISATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/logo_white_bg.png"),
    image: absoluteUrl("/logo_white_bg.png"),
    description:
      "Strategic legal counsel for individuals, corporations, investors, and institutions in Ghana and beyond.",
    address: POSTAL_ADDRESS,
    telephone: "+233205882007",
    email: "secretariat@obpgh.com",
    areaServed: { "@type": "Country", name: "Ghana" },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:15",
        closes: "16:30",
      },
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORGANISATION_ID },
    inLanguage: "en-GB",
  };
}

/** Search results can render this as a clickable trail instead of a bare URL. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function personSchema(member: Lawyer, image?: string) {
  const bio = Array.isArray(member.bio) ? member.bio[0] : member.bio;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/teams/${member.slug}#person`,
    name: member.name,
    jobTitle: member.title,
    url: absoluteUrl(`/teams/${member.slug}`),
    worksFor: { "@id": ORGANISATION_ID },
    ...(image && { image: absoluteUrl(image) }),
    ...(member.intro || bio ? { description: member.intro ?? bio } : {}),
    ...(member.contact?.email && { email: member.contact.email }),
    ...(member.contact?.phone && { telephone: member.contact.phone }),
    ...(member.qualifications?.length && {
      hasCredential: member.qualifications,
    }),
    ...(member.memberships?.length && {
      memberOf: member.memberships.map((name) => ({
        "@type": "Organization",
        name,
      })),
    }),
    ...(member.specialisms?.length && { knowsAbout: member.specialisms }),
  };
}

export function articleSchema(insight: Insight) {
  const url = absoluteUrl(`/insights/${insight.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: insight.title,
    description: insight.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: insight.date,
    dateModified: insight.date,
    articleSection: insight.category,
    inLanguage: "en-GB",
    ...(insight.image && { image: absoluteUrl(insight.image) }),
    author: insight.author
      ? { "@type": "Person", name: cleanAuthor(insight.author) }
      : { "@id": ORGANISATION_ID },
    publisher: { "@id": ORGANISATION_ID },
  };
}

/** Strips the `[^1]` footnote marker and trailing honorific punctuation. */
function cleanAuthor(author: string) {
  return author.replace(/\[\^\d+\]/g, "").trim();
}

export function practiceAreaSchema(area: PracticeArea) {
  const description = Array.isArray(area.description)
    ? area.description[0]
    : area.description;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/practice-areas/${area.slug}#service`,
    name: area.title,
    serviceType: area.category,
    description: description ?? area.excerpt,
    url: absoluteUrl(`/practice-areas/${area.slug}`),
    provider: { "@id": ORGANISATION_ID },
    areaServed: { "@type": "Country", name: "Ghana" },
  };
}
