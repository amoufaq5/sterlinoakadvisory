import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';
import { testimonials } from '../../../data/testimonials';

const TestimonialsSection: FC = () => {
  return (
    <section className="bg-warm-white">
      <div className="section-container section-padding">
        <SectionTag label="Client Testimonials" />
        <ScrollReveal>
          <h2 className="mt-6 mb-12 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <div className="bg-cream p-8 h-full flex flex-col">
                <span
                  className="block text-oak text-6xl font-display leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-2 font-body text-mid leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-body text-sm text-dark">{t.role}</p>
                  <p className="font-body text-sm text-light-gray">{t.sector}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
