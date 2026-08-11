import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AnimateInView } from "@/components/ui/AnimateInView";

const differentiators = [
  {
    title: "Disputes expertise",
    description:
      "We focus exclusively on resolving legal disputes. Our partners bring decades of experience in litigation and arbitration to achieve the best outcomes for our clients.",
  },
  {
    title: "Partner-led service",
    description:
      "Every matter is led by a partner. You work directly with experienced lawyers who take strategic responsibility for your case from start to finish.",
  },
  {
    title: "Global capability",
    description:
      "We act in multi-jurisdictional and cross-border disputes. Our experience spans international arbitration, enforcement of judgments, and complex commercial litigation worldwide.",
  },
  {
    title: "Institutional trust",
    description:
      "We act for multinationals, financial institutions, sovereigns, and high net worth clients. Discretion, rigour, and long-term relationships define how we work.",
  },
];

export function WhyUsSection() {
  return (
    <section
      className="bg-navy-light py-20 lg:py-28 text-white"
      aria-labelledby="why-us-heading"
    >
      <AnimateInView className="mx-auto max-w-7xl px-6 lg:px-8" mode="single">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            id="why-us-heading"
            className="font-serif text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Why us
          </h2>
          <Link
            href="/teams/attorneys"
            className="text-sm font-medium tracking-wide text-gold-muted hover:text-gold transition-colors shrink-0"
          >
            Meet our team →
          </Link>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-gold pl-6 transition-colors duration-300 hover:border-gold-muted"
            >
              <h3 className="font-serif text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button
            href="/about"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white"
          >
            About the firm
          </Button>
          <Button
            href="/practice-areas"
            variant="secondary"
            className="bg-gold text-white border-gold hover:bg-gold-muted hover:border-gold-muted"
          >
            Our Expertise
          </Button>
        </div>
      </AnimateInView>
    </section>
  );
}
