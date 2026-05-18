import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

interface Office {
  city: string;
  status: string;
  statusColor: string;
  description: string;
  stat: string;
}

const offices: Office[] = [
  {
    city: 'Cairo',
    status: 'Headquarters',
    statusColor: 'bg-oak text-warm-white',
    description:
      'Strategic hub for MENA advisory. Full-service operations across all practice areas.',
    stat: 'Est. 2026',
  },
  {
    city: 'London',
    status: 'Active',
    statusColor: 'bg-oak-light/15 text-oak',
    description:
      'European operations and UK regulatory advisory. CISI-qualified team.',
    stat: 'FCA Regulated',
  },
  {
    city: 'Dubai',
    status: 'Active',
    statusColor: 'bg-oak-light/15 text-oak',
    description:
      'Gulf coverage from DIFC. Cross-border M&A and wealth planning.',
    stat: 'DFSA Licensed',
  },
  {
    city: 'Riyadh',
    status: 'Opening 2026',
    statusColor: 'bg-section-bg text-mid',
    description:
      'Expanding to serve Vision 2030 mandates and Saudi capital markets.',
    stat: 'Opening Soon',
  },
];

const GlobalPresenceSection: FC = () => {
  return (
    <section className="bg-warm-white">
      <div className="section-container section-padding">
        <SectionTag label="Global Reach" />
        <ScrollReveal>
          <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
            Rooted in Cairo, Present Worldwide
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 max-w-2xl font-body text-mid text-base leading-relaxed">
            From our founding headquarters in Cairo, Sterling Oak has built a
            multi-jurisdictional presence that enables seamless cross-border
            advisory across the Middle East, Africa, and Europe.
          </p>
        </ScrollReveal>

        {/* Office cards */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.1}>
                <div className="group relative bg-cream border border-border p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-oak/5">
                  <h3 className="font-display text-2xl text-dark">
                    {office.city}
                  </h3>
                  <span
                    className={`inline-block mt-3 px-3 py-1 text-[11px] font-body uppercase tracking-wider rounded-sm ${office.statusColor}`}
                  >
                    {office.status}
                  </span>
                  <p className="mt-5 font-body text-sm text-mid leading-relaxed">
                    {office.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="font-body text-xs uppercase tracking-widest text-oak">
                      {office.stat}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Connection line between cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <div className="mx-auto max-w-content px-12">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
