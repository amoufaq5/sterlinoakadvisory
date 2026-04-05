import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';
import { services } from '../../../data/services';

const ServicesOverviewSection: FC = () => {
  return (
    <section className="bg-dark">
      <div className="section-container section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionTag label="What We Do" variant="light" />
            <h2 className="mt-4 font-display font-medium text-4xl lg:text-5xl text-warm-white leading-tight">
              Our Services
            </h2>
          </div>
          <a
            href="/services"
            className="font-body text-sm text-oak-light hover:text-oak-pale transition-colors duration-300 uppercase tracking-wider"
          >
            All Services &rarr;
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.08}>
              <a
                href={`/services/${s.slug}`}
                className="group block bg-dark border border-border p-8 transition-all duration-300 hover:border-l-2 hover:border-l-oak"
              >
                <span className="block text-oak font-body text-sm mb-4">
                  {s.number}
                </span>
                <h3 className="font-display text-2xl text-warm-white mb-1">
                  {s.title}
                </h3>
                <span className="block text-oak-light text-sm font-body mb-4">
                  {s.subtitle}
                </span>
                <p className="font-body text-light-gray text-sm leading-relaxed">
                  {s.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
