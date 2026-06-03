import type { FC } from 'react';
import { useSEO } from '../lib/seo';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const PrivacyPolicyPage: FC = () => {
  const seo = useSEO({ title: 'Privacy Policy', path: '/privacy' });

  return (
    <>
      {seo}

      <PageHero tag="Legal" title="Privacy Policy" />

      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <ScrollReveal>
            <p className="text-sm text-light-gray mb-12">Last updated: June 2026</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose">
              <h2>Introduction</h2>
              <p>
                Sterling Oak Advisory ("we", "our", "us") is committed to protecting your
                privacy. This policy explains how we collect, use, and safeguard your personal
                information when you visit sterling-oakadvisory.com or engage our advisory
                services.
              </p>
              <p>
                Sterling Oak Advisory is headquartered in Cairo, Egypt with subsidiaries in
                London (UK), Dubai (UAE), and Riyadh (Saudi Arabia).
              </p>

              <h2>Information We Collect</h2>
              <p>
                <strong>Information you provide:</strong> name, email address, phone number, and
                company name when you submit a contact form, subscribe to our newsletter, or
                download resources from our website.
              </p>
              <p>
                <strong>Automatically collected information:</strong> IP address, browser type,
                pages visited, referring URL, and time spent on pages. This information is
                collected through analytics tools to help us understand how visitors use our
                website.
              </p>
              <p>
                <strong>Cookies:</strong> We use session cookies to maintain your browsing
                experience and analytics cookies to measure website performance. Please refer to
                the Cookie Policy section below for further details.
              </p>

              <h2>How We Use Your Information</h2>
              <ul>
                <li>To respond to inquiries and provide advisory services</li>
                <li>To send requested resources and publications</li>
                <li>To deliver newsletter content you have subscribed to</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal information to
                third parties.
              </p>

              <h2>Legal Basis for Processing (GDPR)</h2>
              <p>
                For individuals in the United Kingdom and European Economic Area, we process
                personal data on the following legal bases:
              </p>
              <ul>
                <li>
                  <strong>Consent</strong> — for newsletter subscriptions and marketing
                  communications
                </li>
                <li>
                  <strong>Legitimate interest</strong> — for responding to inquiries and
                  improving our services
                </li>
                <li>
                  <strong>Contract performance</strong> — for delivering advisory services you
                  have engaged us to provide
                </li>
                <li>
                  <strong>Legal obligation</strong> — for regulatory compliance and record
                  keeping
                </li>
              </ul>

              <h2>Data Retention</h2>
              <ul>
                <li>
                  <strong>Contact form submissions:</strong> 2 years from the date of submission
                </li>
                <li>
                  <strong>Newsletter subscriptions:</strong> retained until you unsubscribe
                </li>
                <li>
                  <strong>Client engagement data:</strong> 7 years, as required by financial
                  regulatory obligations
                </li>
                <li>
                  <strong>Analytics data:</strong> 26 months
                </li>
              </ul>

              <h2>Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, rectify,
                erase, restrict processing of, port, or object to the processing of your
                personal data.
              </p>
              <p>
                <strong>UK and EEA residents:</strong> You have rights under the General Data
                Protection Regulation (GDPR), including the right to lodge a complaint with your
                local supervisory authority.
              </p>
              <p>
                <strong>UAE residents:</strong> You have rights under Federal Decree-Law No. 45
                of 2021 on the Protection of Personal Data.
              </p>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@sterling-oakadvisory.com">
                  privacy@sterling-oakadvisory.com
                </a>
                .
              </p>

              <h2>International Data Transfers</h2>
              <p>
                Your data may be processed across our offices in Egypt, the United Kingdom, the
                UAE, and Saudi Arabia. Where data is transferred outside the UK or EEA,
                appropriate safeguards are in place, including Standard Contractual Clauses
                approved by the European Commission, to ensure your data is protected to the
                standards required by applicable law.
              </p>

              <h2>Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal
                information, including encryption in transit (TLS), role-based access controls,
                and regular security assessments. ISO 27001 certification is currently in
                progress.
              </p>

              <h2>Third-Party Services</h2>
              <p>We use the following third-party services in the operation of our website:</p>
              <ul>
                <li>
                  <strong>Vercel</strong> — website hosting and deployment
                </li>
                <li>
                  <strong>Resend</strong> — email delivery
                </li>
                <li>
                  <strong>Calendly</strong> — meeting scheduling
                </li>
                <li>
                  <strong>Google Analytics</strong> — website analytics and traffic measurement
                </li>
              </ul>
              <p>
                Each of these services operates under their own privacy policy. We encourage you
                to review their policies for information on how they handle your data.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy periodically to reflect changes in our
                practices or applicable law. Material changes will be communicated via email to
                newsletter subscribers. We encourage you to review this page regularly.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about this privacy policy or our data practices, please
                contact us:
              </p>
              <p>
                Sterling Oak Advisory
                <br />
                Cairo, Egypt
                <br />
                <a href="mailto:privacy@sterling-oakadvisory.com">
                  privacy@sterling-oakadvisory.com
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

export default PrivacyPolicyPage;
