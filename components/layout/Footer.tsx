import Link from "next/link";
import { OpeningHoursBlock } from "@/components/layout/OpeningHoursBlock";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { OfficeMap } from "@/components/layout/OfficeMap";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";

const footerLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/practice-areas", label: "Our Expertise" },
  { href: "/teams/attorneys", label: "Our Team" },
  { href: "/insights/firm-news", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
];

const address = {
  line1: "1 Liberation Road, North Ridge",
  line2: "Accra - Ghana",
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-light/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <SiteLogo variant="light-ui" imageClassName="h-20 max-h-20" />
            <p className="mt-4 text-sm text-charcoal-muted max-w-xs">
              Strategic legal counsel for individuals, corporations, investors,
              and institutions.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
              Opening hours
            </h3>
            <OpeningHoursBlock footer={true} className="mt-5" />
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
              Contact
            </h3>
            <address className="mt-4 not-italic text-sm text-foreground">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p className="mt-3">
                <a
                  href="mailto:contact@ohenebekoeandpartners.com"
                  className="inline-flex items-start gap-2 hover:text-gold transition-colors duration-200"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="break-all">
                    contact@ohenebekoeandpartners.com
                  </span>
                </a>
              </p>
              <p className="mt-1.5">
                <a
                  href="tel:+233205882007"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors duration-200"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                  <span>+233 20 588 2007</span>
                </a>
              </p>
            </address>

            <OfficeMap className="mt-5" />
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground hover:text-gold transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-charcoal-muted">
            © {new Date().getFullYear()} Ohene-Bekoe & Partners. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
