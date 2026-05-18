import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

interface ClientType {
  title: string;
  description: string;
}

const clientTypes: ClientType[] = [
  {
    title: 'Corporations & Conglomerates',
    description:
      'Listed and private enterprises seeking strategic transformation',
  },
  {
    title: 'Sovereign & Government',
    description: 'Public sector entities and sovereign wealth funds',
  },
  {
    title: 'Family Offices & HNWIs',
    description:
      'Multi-generational wealth stewardship and succession',
  },
  {
    title: 'Private Equity & Investors',
    description:
      'Fund advisory, co-investment, and portfolio optimization',
  },
];

interface SectorWord {
  text: string;
  size: string;
  color: string;
}

const sectors: SectorWord[] = [
  { text: 'Healthcare', size: 'text-3xl lg:text-4xl', color: 'text-oak' },
  { text: 'Energy', size: 'text-2xl lg:text-3xl', color: 'text-mid' },
  { text: 'Financial Services', size: 'text-xl', color: 'text-light-gray' },
  { text: 'Real Estate', size: 'text-2xl lg:text-3xl', color: 'text-oak' },
  { text: 'Technology', size: 'text-lg', color: 'text-mid' },
  { text: 'Telecommunications', size: 'text-xl lg:text-2xl', color: 'text-light-gray' },
  { text: 'Manufacturing', size: 'text-lg', color: 'text-mid' },
  { text: 'Government', size: 'text-2xl lg:text-3xl', color: 'text-mid' },
  { text: 'Infrastructure', size: 'text-xl', color: 'text-oak' },
  { text: 'FMCG', size: 'text-lg', color: 'text-light-gray' },
  { text: 'Education', size: 'text-xl lg:text-2xl', color: 'text-mid' },
  { text: 'Hospitality', size: 'text-lg', color: 'text-light-gray' },
];

const ClientTrustSection: FC = () => {
  return (
    <section className="bg-cream">
      <div className="section-container section-padding">
        <SectionTag label="Clientele" />
        <ScrollReveal>
          <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
            Trusted by Decision-Makers Across Sectors
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-2xl font-body text-mid text-base leading-relaxed">
            We partner with principals, boards, and investment committees who
            demand rigour, discretion, and conviction in every engagement.
          </p>
        </ScrollReveal>

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Client type cards */}
          <div className="lg:w-1/2 space-y-4">
            {clientTypes.map((client, i) => (
              <ScrollReveal key={client.title} delay={i * 0.08}>
                <div className="group border-l-2 border-oak/30 pl-6 py-4 transition-all duration-300 hover:border-l-4 hover:border-oak">
                  <h3 className="font-display text-lg text-dark">
                    {client.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-mid leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Sector word cloud */}
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3 leading-snug">
                {sectors.map((sector) => (
                  <span
                    key={sector.text}
                    className={`font-display font-light ${sector.size} ${sector.color} transition-colors duration-300 hover:text-oak cursor-default`}
                  >
                    {sector.text}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTrustSection;
