import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

const industries = [
  'Pharmaceuticals',
  'Healthcare & Insurance',
  'Financial Services',
  'Technology & Fintech',
  'Government & Public Sector',
  'Digital Infrastructure',
  'Real Estate',
  'Family Offices',
  'Private Equity',
  'Energy & Infrastructure',
  'Retail & Consumer',
  'Sovereign Wealth',
  'ESG & Sustainability',
  'Restructuring & Turnaround',
];

const IndustriesSection: FC = () => {
  return (
    <section className="bg-section-bg">
      <div className="section-container section-padding text-center">
        <SectionTag label="Sectors" className="justify-center" />
        <ScrollReveal>
          <h2 className="mt-6 font-display text-4xl font-medium text-dark">
            Industries We Serve
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {industries.map((industry) => (
              <span
                key={industry}
                className="border border-oak text-oak px-5 py-2 font-body text-sm uppercase tracking-wider cursor-default transition-colors duration-300 hover:bg-oak hover:text-warm-white"
              >
                {industry}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustriesSection;
