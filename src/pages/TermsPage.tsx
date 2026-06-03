import type { FC } from 'react';
import { useSEO } from '../lib/seo';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const TermsPage: FC = () => {
  const seo = useSEO({ title: 'Terms of Service', path: '/terms' });

  return (
    <>
      {seo}

      <PageHero tag="Legal" title="Terms of Service" />

      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-sm text-light-gray mb-12">Last updated: June 2026</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using sterling-oakadvisory.com (the "Website"), you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do
                not use the Website.
              </p>

              <h2>About Sterling Oak Advisory</h2>
              <p>
                Sterling Oak Advisory is an independent financial and general advisory firm. Our
                Website provides information about our services, thought leadership, and
                resources. Nothing on this Website constitutes financial advice, investment
                advice, or a recommendation to buy or sell any security.
              </p>

              <h2>Disclaimer of Financial Advice</h2>
              <p>
                The content on this Website, including insights, articles, and case studies, is
                provided for informational purposes only. It does not constitute professional
                financial, legal, or tax advice. You should consult qualified professionals
                before making any financial decisions.
              </p>
              <p>
                Past performance described in case studies does not guarantee future results.
                Every client engagement is unique, and outcomes depend on individual
                circumstances and market conditions.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this Website, including text, graphics, logos, page design, and
                the Sterling Oak Advisory brand, is our intellectual property or that of our
                licensors. You may not reproduce, distribute, modify, or create derivative works
                from any content on this Website without our prior written permission.
              </p>

              <h2>Use of the Website</h2>
              <p>You agree to use the Website lawfully and not to:</p>
              <ul>
                <li>Submit false or misleading information through any form</li>
                <li>Attempt to gain unauthorized access to any part of the Website</li>
                <li>
                  Use automated tools, bots, or scrapers to extract content from the Website
                </li>
                <li>Impersonate any person or entity</li>
                <li>
                  Transmit any harmful code, viruses, or material that could damage or interfere
                  with the operation of the Website
                </li>
              </ul>

              <h2>Newsletter and Communications</h2>
              <p>
                By subscribing to our newsletter, you consent to receive periodic communications
                from Sterling Oak Advisory, including insights, firm updates, and event
                invitations. You may unsubscribe at any time using the link provided in each
                email. We will not share your email address with third parties for marketing
                purposes.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites and services, including
                LinkedIn and Calendly. These links are provided for your convenience only. We
                are not responsible for the content, accuracy, or privacy practices of any
                third-party websites. Accessing third-party websites is at your own risk.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Sterling Oak Advisory shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages
                arising from or related to your use of the Website, including but not limited to
                loss of profits, data, or business opportunities.
              </p>
              <p>
                Our total aggregate liability for any claims arising from your use of the
                Website shall not exceed the total amount you have paid to Sterling Oak Advisory,
                if any, during the twelve months preceding the claim.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws
                of the Arab Republic of Egypt. Any disputes arising from or in connection with
                these terms shall be resolved through the Cairo Regional Centre for
                International Commercial Arbitration (CRCICA).
              </p>

              <h2>Amendments</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will
                be effective immediately upon posting to this page. Your continued use of the
                Website after any changes constitutes your acceptance of the revised terms. We
                encourage you to review this page periodically.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <p>
                Sterling Oak Advisory
                <br />
                Cairo, Egypt
                <br />
                <a href="mailto:legal@sterling-oakadvisory.com">
                  legal@sterling-oakadvisory.com
                </a>
                <br />
                <a href="tel:+201000222724">+20 (100) 022-2724</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
