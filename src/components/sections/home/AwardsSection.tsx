import type { FC } from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

interface Credential {
  abbreviation: string;
  fullName: string;
  description: string;
}

const credentials: Credential[] = [
  {
    abbreviation: 'CFA Institute',
    fullName: 'Chartered Financial Analyst',
    description:
      'Gold standard in investment analysis and ethical practice',
  },
  {
    abbreviation: 'ISO 27001',
    fullName: 'Information Security',
    description:
      'Certified data protection and information security management',
  },
  {
    abbreviation: 'STEP',
    fullName: 'Trust & Estate Practitioners',
    description:
      'Global standard for succession and estate advisory',
  },
  {
    abbreviation: 'FRA Licensed',
    fullName: 'Egyptian Financial Regulatory Authority',
    description:
      'Authorized financial advisory services in Egypt',
  },
  {
    abbreviation: 'DFSA Authorised',
    fullName: 'Dubai Financial Services Authority',
    description:
      'Regulated advisory operations from DIFC',
  },
  {
    abbreviation: 'AAOIFI',
    fullName: 'Islamic Finance Standards',
    description:
      'Sharia-compliant advisory and Sukuk structuring capability',
  },
];

const AwardsSection: FC = () => {
  return (
    <section className="bg-dark">
      <div className="section-container section-padding">
        <div className="text-center mb-16">
          <SectionTag
            label="Recognition"
            variant="light"
            className="justify-center"
          />
          <ScrollReveal>
            <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-warm-white leading-tight">
              Standards That Define Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 mx-auto max-w-2xl font-body text-light-gray text-base leading-relaxed">
              Our commitment to excellence is reflected in the professional
              standards, regulatory licences, and industry affiliations we
              uphold across every jurisdiction.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <ScrollReveal key={cred.abbreviation} delay={i * 0.08}>
              <div className="group bg-white/5 border border-border p-8 h-full transition-all duration-300 hover:border-oak-light hover:bg-white/[0.08]">
                <h3 className="font-display text-2xl text-oak-light">
                  {cred.abbreviation}
                </h3>
                <p className="mt-3 font-body text-sm text-warm-white">
                  {cred.fullName}
                </p>
                <p className="mt-2 font-body text-xs text-light-gray leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <Link
              to="/accreditations"
              className="inline-flex items-center font-body text-sm text-oak-light hover:text-oak-pale transition-colors duration-300 uppercase tracking-wider"
            >
              View All Accreditations &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AwardsSection;
