import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms and conditions governing use of the Ohene-Bekoe & Partners website. Disclaimers and limitations of liability.",
};

const LAST_UPDATED = "1 March 2026";

export default function TermsPage() {
  return (
    <article className="bg-white">
      <PageHero
        title="Terms of Use"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-lg max-w-none prose-p:text-charcoal-muted prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4 first:prose-headings:mt-0 prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-muted">
          <p className="text-lg leading-relaxed border-l-2 border-gold pl-6 mb-10">
            These terms of use govern your access to and use of the website
            operated by Ohene-Bekoe & Partners. By using this website, you agree
            to these terms. If you do not agree, please do not use the site.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            1. About us
          </h2>
          <p>
            This website is operated by Ohene-Bekoe & Partners, a law firm. Our
            professional obligations and regulatory information apply to the
            provision of legal services and are separate from these terms. For
            the avoidance of doubt, nothing on this website constitutes an offer
            to represent you or to provide legal services.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            2. No lawyer–client relationship
          </h2>
          <p>
            Use of this website, or sending an enquiry or other communication
            through it, does not create a lawyer–client relationship between you
            and Ohene-Bekoe & Partners. We do not become your lawyers until we
            have agreed in writing to act for you (for example, by way of an
            engagement letter or terms of business). Until then, we may use
            information you send to us (including in confidence) for our own
            purposes, including where we already act for another client in a
            matter to which your information relates.
          </p>
          <p>
            Do not send us confidential or sensitive information until we have
            confirmed that we are able to act for you and have agreed how such
            information should be submitted.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            3. No legal advice
          </h2>
          <p>
            The content on this website (including publications, insights, and
            other materials) is for general information only. It does not
            constitute legal advice and should not be relied upon as such. Legal
            advice depends on the specific facts and circumstances of your
            situation. You should seek advice from a qualified lawyer in
            relation to any particular matter. We disclaim all liability in
            respect of actions taken or not taken based on any content on this
            website.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            4. Use of the website
          </h2>
          <p>
            You may use this website only for lawful purposes and in a way that
            does not infringe the rights of others or restrict or inhibit their
            use of the site. You must not use the site to transmit any harmful,
            defamatory, or unlawful material, or to attempt to gain unauthorised
            access to our systems, networks, or data. We may suspend or
            terminate your access if we reasonably believe you have breached
            these terms.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            5. Intellectual property
          </h2>
          <p>
            Unless otherwise indicated, all content on this website (including
            text, graphics, logos, and layout) is the property of Ohene-Bekoe &
            Partners or its licensors and is protected by copyright and other
            intellectual property laws. You may view and download content for
            your personal, non-commercial use only. You may not copy, reproduce,
            modify, distribute, or use any content for commercial purposes
            without our prior written consent.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            6. Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, Ohene-Bekoe & Partners
            excludes all liability for any loss or damage (whether direct,
            indirect, or consequential) arising from your use of this website or
            reliance on its content. This includes, but is not limited to, loss
            of profits, data, or goodwill. Nothing in these terms excludes or
            limits our liability for death or personal injury caused by our
            negligence, fraud, or any other liability that cannot be excluded or
            limited by law.
          </p>
          <p>
            We do not guarantee that the website will be uninterrupted,
            error-free, or free from viruses or other harmful components. You
            are responsible for implementing your own security and backup
            measures.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            7. Links to other sites
          </h2>
          <p>
            This website may contain links to third-party websites. We do not
            control and are not responsible for the content or practices of
            those sites. A link does not imply endorsement. Your use of
            third-party sites is at your own risk and subject to their terms and
            policies.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            8. Governing law and jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of England and Wales. Any
            dispute arising in connection with them or with this website shall
            be subject to the exclusive jurisdiction of the courts of England
            and Wales.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            9. Changes
          </h2>
          <p>
            We may update these terms from time to time. The current version
            will be published on this page with an updated &quot;Last
            updated&quot; date. Your continued use of the website after changes
            are posted constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground my-4">
            10. Contact
          </h2>
          <p>
            If you have questions about these terms of use, please contact us at{" "}
            <a
              href="mailto:secretariat@obpgh.com"
              className="text-gold hover:text-gold-muted transition-colors"
            >
              secretariat@obpgh.com
            </a>{" "}
            or by post at Ohene-Bekoe & Partners, 1 Liberation Road, North
            Ridge, Accra, Ghana. For information about how we process your
            personal data, please see our{" "}
            <Link
              href="/privacy"
              className="text-gold hover:text-gold-muted transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
