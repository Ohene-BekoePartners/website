import Image from "next/image";
import Link from "next/link";
import { pageHeroImage } from "@/utils/images";

export interface PageHeroProps {
  title: string;
  description?: string;
  /** Optional background image URL. Uses default page hero image if not set. */
  image?: string;
  /** Optional back link (e.g. "← Back to team") */
  backLink?: { href: string; label: string };
  /** Optional extra content below description (e.g. subtitle on lawyer profile) */
  children?: React.ReactNode;
  /**
   * The hero background is the LCP element on inner pages, so it is preloaded by
   * default. Set `false` only when this hero is not the first thing on screen.
   */
  priority?: boolean;
}

export function PageHero({
  title,
  description,
  image = pageHeroImage,
  backLink,
  children,
  priority = true,
}: PageHeroProps) {
  return (
    <section
      className="relative md:min-h-[55vh] min-h-[42vh] flex flex-col justify-end bg-navy text-white overflow-hidden"
      aria-label="Page hero"
    >
      <div className="absolute inset-0 img-editorial">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--navy)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {backLink && (
          <Link
            href={backLink.href}
            className="inline-block text-sm font-medium text-white/90 hover:text-gold transition-colors duration-200 mb-6"
          >
            {backLink.label}
          </Link>
        )}
        <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
          {title}
        </h1>
        {title === "Our Expertise"
          ? description && (
              <p className="mt-6 flex items-center max-w-2xl text-base leading-relaxed text-white/85 w-76">
                <b className="font-bold text-7xl mr-4">WE</b>
                {description}
              </p>
            )
          : description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                {description}
              </p>
            )}
        {children}
      </div>
    </section>
  );
}
