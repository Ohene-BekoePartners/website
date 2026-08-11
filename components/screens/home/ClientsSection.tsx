import { industries } from "@/utils/mockData";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function ClientsSection() {
  return (
    <section className="bg-gold-subtle/40 py-20 lg:py-28" aria-labelledby="clients-heading">
      <AnimateInView className="mx-auto max-w-7xl px-6 lg:px-8" mode="stagger">
        <h2 id="clients-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Clients & Industries
        </h2>
        <p className="mt-4 max-w-2xl text-charcoal-muted">
          We serve corporations, financial institutions, governments, and high-value clients across key sectors.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry.id}
              className="border-l-2 border-gold pl-6 py-4 pr-6 bg-white/70 rounded-r transition-transform duration-300 hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {industry.name}
              </h3>
              <p className="mt-1 text-sm text-charcoal-muted">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </AnimateInView>
    </section>
  );
}
