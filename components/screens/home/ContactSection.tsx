import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimateInView } from "@/components/ui/AnimateInView";

const contactImageSrc = "/hansjorg-keller-m_-8_AhhJjE-unsplash.jpg";

export function ContactSection() {
  return (
    <section
      className="bg-navy py-20 lg:py-28 text-white border-t border-gold/20"
      aria-labelledby="contact-heading"
    >
      <AnimateInView className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="font-serif text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Discuss Your Legal Needs With Our Team.
            </h2>
            <p className="mt-6 text-white/85 leading-relaxed">
              For an introductory conversation with one of our partners, please
              contact us. We respond to all serious inquiries with discretion
              and professionalism.
            </p>
            <address className="mt-8 not-italic">
              <p className="font-medium">Ohene-Bekoe & Partners</p>
              <p className="mt-2 text-white/80">
                1 Liberation Road, North Ridge
              </p>
              <p className="text-white/80">Accra - Ghana</p>
              <p className="mt-4">
                <a
                  href="mailto:contact@obpgh.com"
                  className="text-gold-muted hover:text-gold transition-colors"
                >
                  contact@obpgh.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+233205882007"
                  className="text-gold-muted hover:text-gold transition-colors"
                >
                  +233 20 588 2007
                </a>
              </p>
            </address>
            <div className="mt-10">
              <Button
                href="/contact"
                variant="secondary"
                className="bg-gold text-white border-gold hover:bg-gold-muted hover:border-gold-muted"
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="relative aspect-4/3 min-h-[280px] w-full max-w-md overflow-hidden img-editorial mx-auto lg:max-w-none lg:mx-0">
            <Image
              src={contactImageSrc}
              alt="Formal chamber interior with wood paneling and chandelier, evoking authority and tradition"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 28rem, 100vw"
            />
            <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}
