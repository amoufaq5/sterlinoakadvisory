import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';
import AnimatedCounter from '../../ui/AnimatedCounter';

const stats = [
  { target: 100, prefix: '$', suffix: 'M+', label: 'Assets Under Advisory' },
  { target: 35, suffix: '+', label: 'Engagements Completed' },
  { target: 400, prefix: '$', suffix: 'M', label: 'Largest Single Transaction' },
  { target: 98, suffix: '%', label: 'Client Retention Rate' },
  { target: 7, label: 'Jurisdictions Covered' },
  { target: 4, label: 'Global Offices' },
];

const StatsShowcaseSection: FC = () => {
  return (
    <section
      className="bg-dark relative overflow-hidden"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(139,105,20,0.03) 60px,
            rgba(139,105,20,0.03) 61px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(139,105,20,0.03) 60px,
            rgba(139,105,20,0.03) 61px
          )
        `,
      }}
    >
      <div className="section-container section-padding">
        <div className="text-center mb-16">
          <SectionTag label="Impact" variant="light" className="justify-center" />
          <ScrollReveal>
            <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-warm-white leading-tight">
              Measurable Results, Lasting Partnerships
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.1}
              className={`flex items-center justify-center ${
                i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''
              }`}
            >
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                className="[&>span:first-child]:text-4xl [&>span:first-child]:lg:text-5xl [&>span:first-child]:text-oak-light [&>span:last-child]:text-light-gray"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcaseSection;
