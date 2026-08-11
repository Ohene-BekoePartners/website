import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ohene-Bekoe & Partners collects, uses, and protects your personal data. Privacy notice in accordance with UK GDPR and data protection law.",
};

const LAST_UPDATED = "1 March 2026";

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-lg max-w-none prose-p:text-charcoal-muted prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4 first:prose-headings:mt-0">
          <p className="text-lg leading-relaxed border-l-2 border-gold pl-6 mb-10">
            Ohene-Bekoe & Partners is committed to protecting your privacy. This
            policy explains how we collect, use, store, and protect your
            personal data when you use our website or communicate with us, in
            accordance with the UK General Data Protection Regulation (UK GDPR)
            and the Data Protection Act 2018.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            1. Data controller
          </h2>
          <p>
            The data controller responsible for your personal data is
            Ohene-Bekoe & Partners Legal (the firm). If you have questions about
            this policy or our use of your data, you can contact us at the
            details given in section 9 below.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            2. What data we collect
          </h2>
          <p>
            We may collect and process the following categories of personal
            data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-charcoal-muted">
            <li>
              <strong className="text-foreground">
                Contact and identity data:
              </strong>{" "}
              name, email address, telephone number, job title, and organisation
              when you contact us, subscribe to updates, or submit an enquiry.
            </li>
            <li>
              <strong className="text-foreground">Communication data:</strong>{" "}
              content of correspondence and enquiries you send to us.
            </li>
            <li>
              <strong className="text-foreground">
                Technical and usage data:
              </strong>{" "}
              IP address, browser type, device information, and how you use our
              website (e.g. pages visited, time spent), where we use cookies or
              similar technologies as described in our cookie notice.
            </li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            3. How we use your data
          </h2>
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-charcoal-muted">
            <li>
              To respond to your enquiries and to provide legal or other
              services you have requested.
            </li>
            <li>
              To manage our relationship with you, including sending relevant
              updates (where you have agreed) and administrative communications.
            </li>
            <li>To improve our website, services, and client experience.</li>
            <li>
              To comply with legal and regulatory obligations (e.g. anti-money
              laundering, professional conduct rules).
            </li>
            <li>To establish, exercise, or defend legal claims.</li>
          </ul>
          <p>
            We will only use your data where we have a lawful basis: performance
            of a contract, compliance with a legal obligation, our legitimate
            interests (where not overridden by your rights), or your consent
            where required.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            4. Sharing and disclosure
          </h2>
          <p>
            We may share your data with service providers who assist us (e.g.
            IT, hosting, professional advisers), where they act on our
            instructions and are bound by confidentiality and data protection
            obligations. We may also disclose data where required by law,
            regulation, or court order, or to protect our rights and those of
            our clients.
          </p>
          <p>We do not sell your personal data to third parties.</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            5. International transfers
          </h2>
          <p>
            Your data may be processed in Ghana or in other countries where we
            or our service providers operate. Where we transfer data outside
            Ghana, we ensure appropriate safeguards are in place (e.g. adequacy
            decisions, standard contractual clauses) in accordance with
            applicable data protection law.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            6. Retention
          </h2>
          <p>
            We retain your data only for as long as necessary for the purposes
            for which it was collected, including to satisfy legal, regulatory,
            or professional requirements (e.g. retention of client matter
            files). When data is no longer needed, we securely delete or
            anonymise it.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            7. Your rights
          </h2>
          <p>Under UK data protection law, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-charcoal-muted">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request erasure of your data in certain circumstances.</li>
            <li>
              Object to processing or request restriction of processing in
              certain circumstances.
            </li>
            <li>Data portability, where applicable.</li>
            <li>
              Withdraw consent at any time where we rely on consent (without
              affecting the lawfulness of processing before withdrawal).
            </li>
            <li>
              Lodge a complaint with the Information Commissioner&apos;s Office
              (ICO) in the UK.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details
            in section 9. We will respond within the time limits set by law.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            8. Security
          </h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, loss, or
            misuse. No transmission over the internet or electronic storage is
            completely secure; we encourage you to use secure channels when
            sending us sensitive information.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            9. Contact
          </h2>
          <p>
            For any questions about this privacy policy or our use of your
            personal data, please contact us at{" "}
            <a
              href="mailto:contact@ohenebekoeandpartners.com"
              className="text-gold hover:text-gold-muted transition-colors"
            >
              contact@ohenebekoeandpartners.com
            </a>{" "}
            or by post at Ohene-Bekoe & Partners, 1 Liberation Road, North
            Ridge, Accra, Ghana.
          </p>

          <p className="mt-10 text-sm text-charcoal-muted">
            We may update this policy from time to time. The current version
            will always be published on this page with an updated &quot;Last
            updated&quot; date.
          </p>
        </div>
      </div>
    </article>
  );
}
