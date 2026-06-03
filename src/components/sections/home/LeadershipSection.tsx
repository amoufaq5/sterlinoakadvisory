import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

const credentials = [
  {
    badge: 'Pharma M&A',
    text: 'Lead advisor on the $400M acquisition of a pharmaceutical distributor — navigating regulatory, valuation, and cross-border structuring complexities.',
  },
  {
    badge: 'Government Digitalisation',
    text: 'Procurement advisor on a $400M health insurance digitalisation programme for a MENA public authority.',
  },
  {
    badge: 'Family Wealth',
    text: 'Multi-generational succession planning across 7 jurisdictions for a prominent Gulf family office.',
  },
];

const LeadershipSection: FC = () => {
  return (
    <section className="bg-cream">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <SectionTag label="Leadership" />
            <ScrollReveal>
              <h2 className="mt-6 font-display text-3xl lg:text-4xl font-medium text-dark leading-tight">
                Dr.&nbsp;Abdelrahman Mawafk&nbsp;Aly
              </h2>
              <p className="mt-2 font-body uppercase tracking-[0.22em] text-xs text-oak">
                Founder &amp; CEO · CFA · MBA
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                Dr.&nbsp;Aly is a CFA charterholder and MBA-qualified advisor
                whose career has spanned some of the most complex transactions in
                the Egyptian and Gulf markets. He brings deep expertise across
                three disciplines: pharmaceutical industry M&amp;A, governmental
                infrastructure and digitalisation procurement, and
                multi-jurisdictional family wealth management. He founded Sterling
                Oak Advisory in 2026 with a mandate to deliver genuinely
                independent, senior-led advisory to Egypt and the wider MENA
                region — a market long underserved by world-class, locally-rooted
                counsel.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Work With Us
                </Button>
                <Button
                  variant="ghost"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile &rarr;
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — credential cards */}
          <div className="flex flex-col gap-6">
            {credentials.map((c, i) => (
              <ScrollReveal key={c.badge} delay={i * 0.1}>
                <div className="bg-warm-white p-6 border-l-2 border-oak">
                  <Badge className="mb-3">{c.badge}</Badge>
                  <p className="font-body text-mid text-sm leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
