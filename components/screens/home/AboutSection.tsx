import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { aboutImage } from "@/utils/images";

// const aboutImageSrc = "/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg";

export function AboutSection() {
  return (
    <section
      className="bg-white py-20 lg:py-28 border-t border-border/50"
      aria-labelledby="about-heading"
    >
      <AnimateInView className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2
              id="about-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Who We Are
            </h2>
            <p className="mt-6 text-charcoal-muted leading-relaxed">
              Ohene-Bekoe & Partners is a dynamic law firm dedicated to
              providing high-quality legal services in Ghana and beyond. The
              firm brings together lawyers with diverse experience in
              litigation, arbitration, corporate and commercial law, maritime
              and shipping, taxation, and regulatory compliance.
            </p>
            <p className="mt-4 text-charcoal-muted leading-relaxed">
              Our team combines strong legal expertise with practical commercial
              insight to assist clients in navigating complex legal and
              regulatory environments. With professional experience spanning
              public service, private practice, academia, and international
              legal practice, we are well positioned to advise clients across a
              range of sectors including energy, maritime, corporate governance,
              and emerging industries.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative aspect-4/3 min-h-[280px] w-full min-w-0 overflow-hidden img-editorial">
            <Image
              src={aboutImage}
              alt="Bronze statue of Lady Justice with balanced scales, symbolizing impartiality and the legal profession"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}
