import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutWithNav } from "@/components/layout/AboutWithNav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ohene-Bekoe & Partners is a dynamic law firm dedicated to providing high-quality legal services in Ghana and beyond. Clients' clarity, comfort and our creativity.",
};

const proseClass =
  "text-justify-rich prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-charcoal-muted prose-p:max-w-prose prose-p:leading-relaxed prose-a:text-gold";

export default function AboutPage() {
  return (
    <AboutWithNav
      activeSection="about"
      hero={
        <PageHero
          title="About Us"
          description="Clients' clarity, comfort and our creativity."
        />
      }
    >
      <div className={proseClass}>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            About us
          </h2>
          <p className="mt-4 text-charcoal-muted">
            Ohene-Bekoe & Partners is a dynamic law firm dedicated to providing
            high-quality legal services in Ghana and beyond. The firm brings
            together lawyers with diverse experience in litigation, arbitration,
            corporate and commercial law, maritime and shipping, taxation, and
            regulatory compliance.
          </p>
          <p className="mt-4 text-charcoal-muted">
            Our team combines strong legal expertise with practical commercial
            insight to assist clients in navigating complex legal and regulatory
            environments. With professional experience spanning public service,
            private practice, academia, and international legal practice, we are
            well positioned to advise clients across a range of sectors
            including energy, maritime, corporate governance, and emerging
            industries.
          </p>
          <p className="mt-4 text-charcoal-muted">
            At Ohene-Bekoe & Partners, we are committed to delivering legal
            services with professionalism, integrity, and a dedication to
            excellence.
          </p>
        </section>
      </div>
    </AboutWithNav>
  );
}
