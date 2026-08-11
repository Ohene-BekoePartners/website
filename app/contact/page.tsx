import type { Metadata } from "next";
import Image from "next/image";
import { OpeningHoursBlock } from "@/components/layout/OpeningHoursBlock";
import { ContactForm } from "@/components/screens/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

const contactImageSrc = "/random-institute-FDcydLvV7Io-unsplash.jpg";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Ohene-Bekoe & Partners. For an introductory conversation with one of our partners, please contact us.",
};

export default function ContactPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Contact us"
        description="Discuss your legal needs with our team. We respond to all serious inquiries with discretion and professionalism."
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Office
            </h2>
            <address className="mt-6 not-italic text-charcoal-muted">
              <p className="font-medium text-foreground">
                Ohene-Bekoe & Partners
              </p>
              <p className="mt-2">1 Liberation Road, North Ridge</p>
              <p>Accra - Ghana</p>
              <p className="mt-6">
                <a
                  href="mailto:contact@ohenebekoeandpartners.com"
                  className="text-gold hover:text-gold-muted transition-colors"
                >
                  contact@ohenebekoeandpartners.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+233205882007"
                  className="text-gold hover:text-gold-muted transition-colors"
                >
                  +233 20 588 2007
                </a>
              </p>
            </address>

            <OpeningHoursBlock
              className="mt-8 border-t border-border pt-8"
              contact
            />

            <div className="mt-10 relative h-64 overflow-hidden img-editorial">
              <Image
                src={contactImageSrc}
                alt="Professional reception area with marble desk and world map, symbolising global reach"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Send an inquiry
            </h2>
            <p className="mt-2 text-charcoal-muted">
              Complete the form below and we will respond as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </article>
  );
}
