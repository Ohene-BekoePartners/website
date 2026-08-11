import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { heroImage } from "@/utils/images";

export function HeroSection() {
  return (
    <section
      className="relative md:min-h-[95vh] min-h-[75vh] flex flex-col justify-end bg-navy text-white overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 img-editorial">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--navy)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl animate-hero-in">
            {/* Strategic Legal Counsel for Complex Business Decisions. */}
            WELCOME to Ohene-Bekoe & Partners, where YOU are the most important
            person.
          </h1>
          {/* <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl animate-hero-in animate-hero-in-delay-1">
            Delivering trusted legal expertise to corporations, investors, and
            institutions.
          </p> */}
          <div className="mt-10 flex flex-wrap gap-4 animate-hero-in animate-hero-in-delay-2">
            <Button
              href="/practice-areas"
              variant="secondary"
              className="bg-gold text-white border-gold hover:bg-gold-muted hover:border-gold-muted"
            >
              Our Expertise
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
