import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { openCalendly } from '../lib/calendly';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { team } from '../data/team';

/* ───────────────────────── data ───────────────────────── */

const coreValues = [
  {
    title: 'Independence',
    description:
      'Our advice serves one interest: yours. No proprietary products, no hidden incentives.',
  },
  {
    title: 'Rigour',
    description:
      'Every recommendation is grounded in data, tested against alternatives, and stress-tested for resilience.',
  },
  {
    title: 'Discretion',
    description:
      'We operate with absolute confidentiality. Our clients’ trust is non-negotiable.',
  },
  {
    title: 'Permanence',
    description:
      'We build for enduring outcomes, not quarterly targets. Strategy that compounds over decades.',
  },
];

const milestones = [
  {
    period: '2026 Q1',
    title: 'Founded in Cairo',
    description:
      'Dr. Aly establishes Sterling Oak Advisory with a vision for independent counsel in MENA.',
  },
  {
    period: '2026 Q1',
    title: 'FRA License Secured',
    description:
      'Licensed by the Egyptian Financial Regulatory Authority for full advisory services.',
  },
  {
    period: '2026 Q2',
    title: 'London Office Opens',
    description:
      'European subsidiary launches for cross-border advisory and UK market access.',
  },
  {
    period: '2026 Q2',
    title: 'First $100M+ Mandate',
    description:
      'Appointed lead advisor on a landmark pharmaceutical acquisition.',
  },
  {
    period: '2026 Q3',
    title: 'Dubai Office (DIFC)',
    description:
      'Gulf operations commence from Dubai International Financial Centre.',
  },
  {
    period: '2026 Q3',
    title: 'ESG & Digital Practices Launch',
    description:
      'New service lines address growing MENA demand for sustainability and technology advisory.',
  },
  {
    period: '2026 Q4',
    title: '35th Engagement Milestone',
    description:
      'Firm reaches 35 completed advisory mandates across 7 jurisdictions.',
  },
  {
    period: '2027',
    title: 'Riyadh Office',
    description:
      'Planned expansion to serve Saudi Vision 2030 mandates and CMA-regulated advisory.',
  },
];

/* ───────────────────────── component ───────────────────────── */

const AboutPage: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const seo = useSEO({
    title: 'About Us — Sterling Oak Advisory',
    description:
      'Learn about Sterling Oak Advisory, an independent financial advisory firm founded in Cairo serving corporations, sovereigns, and family offices across MENA and Europe.',
    path: '/about',
  });

  return (
    <>
      {seo}

      {/* ─── Hero ─── */}
      <PageHero
        tag="Our Firm"
        title="Built on Conviction, Defined by Independence"
      />

      {/* ─── Section 2: Our Story ─── */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <SectionTag label="Who We Are" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — narrative */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl text-dark font-light leading-tight">
                  A Firm Born from Conviction
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-8 font-body text-mid text-[15px] leading-relaxed">
                  Sterling Oak Advisory was founded in 2026 in Cairo by
                  Dr.&nbsp;Abdelrahman Mawafk&nbsp;Aly &mdash; a CFA
                  charterholder, MBA, and PhD-qualified advisor whose career
                  spanned some of the most significant transactions in the
                  Egyptian and Gulf markets. The founding conviction was simple
                  but radical for the region: MENA deserved a truly independent
                  advisory firm &mdash; one that serves clients without the
                  conflicts inherent in bank-affiliated or conglomerate-owned
                  practices.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                  Sterling Oak is not affiliated with any bank, investment fund,
                  or industrial conglomerate. We hold no proprietary positions,
                  distribute no financial products, and accept no referral fees.
                  Every recommendation we make is grounded in a single
                  imperative: the long-term interest of the client sitting across
                  the table.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                  Within its first year, the firm expanded from Cairo to London
                  and Dubai, with Riyadh planned for 2027. Today, Sterling Oak
                  serves corporations, sovereign entities, and prominent family
                  offices across three continents &mdash; from pharmaceutical
                  M&amp;A and government digitalisation mandates to
                  multi-generational wealth planning and ESG strategy.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                  Every engagement is led by a senior partner. We do not delegate
                  critical work to junior analysts, and we do not scale by
                  diluting the quality of our counsel. Our growth model is
                  deliberate: we take fewer mandates and deliver deeper value.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — core values */}
            <div className="flex flex-col gap-6">
              <ScrollReveal>
                <h3 className="font-display text-2xl text-dark font-light mb-2">
                  Core Values
                </h3>
              </ScrollReveal>

              {coreValues.map((value, idx) => (
                <ScrollReveal key={value.title} delay={idx * 0.1}>
                  <div className="bg-cream p-6 border-l-2 border-oak">
                    <h4 className="font-display text-lg text-dark font-medium">
                      {value.title}
                    </h4>
                    <p className="mt-2 font-body text-mid text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Timeline / Milestones ─── */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag label="Milestones" className="justify-center" />
            <ScrollReveal>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl text-dark font-light">
                Our Journey
              </h2>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical centre line */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-oak lg:-translate-x-px"
              aria-hidden="true"
            />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((m, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <ScrollReveal key={idx} delay={idx * 0.08}>
                    <div className="relative flex items-start lg:items-center">
                      {/* Dot */}
                      <div
                        className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-oak -translate-x-1/2 mt-1.5 lg:mt-0 z-10"
                        aria-hidden="true"
                      />

                      {/* Mobile: always right of line */}
                      {/* Desktop: alternate sides */}
                      <div
                        className={[
                          'ml-10 lg:ml-0 lg:w-1/2',
                          isLeft
                            ? 'lg:pr-12 lg:text-right'
                            : 'lg:pl-12 lg:ml-auto lg:text-left',
                        ].join(' ')}
                      >
                        <span className="inline-block font-body uppercase text-[11px] tracking-[0.2em] text-oak mb-1">
                          {m.period}
                        </span>
                        <h3 className="font-display text-xl text-dark font-medium">
                          {m.title}
                        </h3>
                        <p className="mt-1 font-body text-mid text-sm leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Leadership Team ─── */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag label="Leadership" className="justify-center" />
            <ScrollReveal>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl text-dark font-light">
                Senior-Led, Partner-Driven
              </h2>
              <p className="mt-4 max-w-2xl mx-auto font-body text-mid text-lg leading-relaxed">
                Every engagement is led by a senior partner. No delegation to
                junior analysts.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 0.08}>
                <motion.div
                  className="bg-cream p-8 border border-border h-full flex flex-col"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }
                  }
                  transition={{ duration: 0.25, ease: 'easeOut' as const }}
                >
                  {/* Initials avatar */}
                  <div className="w-20 h-20 rounded-full bg-dark text-oak-light font-display text-2xl flex items-center justify-center mb-5">
                    {member.initials}
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg text-dark font-medium">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="mt-1 font-body text-sm text-oak">
                    {member.title}
                  </p>

                  {/* Credentials */}
                  <p className="mt-1 font-body text-xs text-mid">
                    {member.credentials}
                  </p>

                  {/* Location */}
                  <p className="mt-2 flex items-center gap-1 font-body text-xs text-light-gray">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </p>

                  {/* Bio */}
                  <p className="mt-4 font-body text-sm text-mid leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specializations */}
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    {member.specializations.map((spec) => (
                      <Badge key={spec}>{spec}</Badge>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: CTA Band ─── */}
      <section className="bg-oak">
        <div className="mx-auto max-w-content px-6 lg:px-12 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <ScrollReveal>
              <h2 className="font-display text-3xl lg:text-4xl text-warm-white font-medium leading-tight text-center lg:text-left max-w-xl">
                Begin a Conversation
              </h2>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal delay={0.1}>
              <div className="text-center lg:text-right shrink-0">
                <p className="text-warm-white/80 font-body text-[15px] leading-relaxed mb-6 max-w-md">
                  Whether you&rsquo;re exploring a transaction, restructuring a
                  balance sheet, or planning a legacy &mdash; we&rsquo;re here to
                  listen.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={openCalendly}
                  >
                    Schedule a Call
                  </Button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center font-body font-medium uppercase rounded-none px-8 py-4 text-sm tracking-wider border border-warm-white text-warm-white transition-all duration-300 hover:bg-warm-white hover:text-oak"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
