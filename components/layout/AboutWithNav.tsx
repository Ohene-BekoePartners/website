import type { AboutSection } from "@/utils/aboutNav";
import { AboutSubnav } from "./AboutSubnav";

export function AboutWithNav({
  hero,
  children,
  activeSection,
}: {
  hero: React.ReactNode;
  children: React.ReactNode;
  activeSection: AboutSection;
}) {
  return (
    <article className="bg-white">
      {hero}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <AboutSubnav activeSection={activeSection} />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </article>
  );
}
