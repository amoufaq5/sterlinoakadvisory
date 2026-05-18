import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react'
import { useSEO } from '../lib/seo'
import { openCalendly } from '../lib/calendly'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import SectionTag from '../components/ui/SectionTag'
import ScrollReveal from '../components/ui/ScrollReveal'
import Badge from '../components/ui/Badge'

const values = [
  {
    title: 'Senior Exposure',
    description:
      'Work directly with partners on every engagement. No layers, no delegation chains.',
  },
  {
    title: 'Global Mandates',
    description:
      'Advise across Egypt, Gulf, and Europe from your first year.',
  },
  {
    title: 'Rapid Growth',
    description:
      'Shape a firm in its founding years. Your impact is visible and immediate.',
  },
  {
    title: 'Intellectual Rigour',
    description:
      'CFA-standard analytical discipline applied to every recommendation.',
  },
]

const positions = [
  {
    title: 'Analyst — Financial Advisory',
    location: 'Cairo',
    type: 'Full-time',
    description:
      'Support valuation, financial modelling, and due diligence across M&A and capital markets mandates. Ideal for graduates with strong quantitative backgrounds and CFA Level I candidates.',
  },
  {
    title: 'Associate — ESG & Sustainability',
    location: 'Cairo or Dubai',
    type: 'Full-time',
    description:
      'Lead ESG assessments, sustainability reporting, and green finance advisory for regional clients. Requires 3-5 years of experience in ESG consulting or corporate sustainability.',
  },
  {
    title: 'Vice President — Mergers & Acquisitions',
    location: 'Dubai',
    type: 'Full-time',
    description:
      'Manage buy-side and sell-side M&A mandates across healthcare, technology, and financial services. 7+ years of investment banking or advisory experience required.',
  },
  {
    title: 'Senior Advisor — Wealth Planning',
    location: 'London',
    type: 'Part-time / Advisory',
    description:
      'Provide strategic counsel on multi-jurisdiction estate planning and family office governance. STEP membership and 10+ years of private client experience preferred.',
  },
]

const CareersPage: FC = () => {
  const seo = useSEO({
    title: 'Careers — Sterling Oak Advisory',
    description:
      'Join Sterling Oak Advisory. Build your career at an independent financial advisory firm serving corporations, sovereigns, and family offices across MENA and Europe.',
    path: '/careers',
  })

  return (
    <>
      {seo}
      <PageHero tag="Careers" title="Shape the Future of Advisory" />

      {/* Why Sterling Oak */}
      <section className="bg-warm-white">
        <div className="section-container section-padding">
          <SectionTag label="Why Join Us" />
          <ScrollReveal>
            <h2 className="mt-6 mb-8 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
              Build Your Career at Sterling Oak
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6 text-mid font-body leading-relaxed">
                <p>
                  Sterling Oak Advisory is not a typical firm. Founded in 2026 with a
                  mandate to deliver truly independent counsel, we operate without the
                  conflicts, bureaucracy, and hierarchy that define larger institutions.
                  Here, every team member works directly with senior partners on
                  live mandates from day one.
                </p>
                <p>
                  Our engagements span M&A transactions worth hundreds of millions,
                  sovereign advisory programmes, multi-jurisdictional wealth
                  structures, and digital transformation initiatives. You will work
                  across borders — Cairo, London, Dubai, and soon Riyadh — with
                  exposure to industries and challenges that most professionals don't
                  encounter until a decade into their careers.
                </p>
                <p>
                  We are building something enduring. If you want to be part of a
                  firm that values rigour over rank, impact over tenure, and
                  independence over convention — we want to hear from you.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="border-l-2 border-oak pl-5 py-2">
                    <h3 className="font-display text-lg font-medium text-dark mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-mid font-body leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-cream">
        <div className="section-container section-padding">
          <SectionTag label="Open Positions" />
          <ScrollReveal>
            <h2 className="mt-6 mb-12 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
              Current Opportunities
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {positions.map((pos, i) => (
              <ScrollReveal key={pos.title} delay={i * 0.08}>
                <div className="bg-warm-white p-8 lg:p-10 border border-border hover:border-oak/40 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-display text-xl lg:text-2xl font-medium text-dark mb-3 group-hover:text-oak transition-colors duration-300">
                        {pos.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs text-mid font-body uppercase tracking-wider">
                          <MapPin className="w-3.5 h-3.5" />
                          {pos.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-mid font-body uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5" />
                          {pos.type}
                        </span>
                      </div>
                      <p className="text-sm text-mid font-body leading-relaxed">
                        {pos.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-wider text-oak hover:text-oak-light transition-colors"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="section-container section-padding text-center">
          <ScrollReveal>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-warm-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-light-gray font-body max-w-2xl mx-auto mb-8 leading-relaxed">
              We're always interested in exceptional talent. Send us your
              credentials and we'll be in touch when the right opportunity
              emerges.
            </p>
            <Button href="/contact" variant="outline-oak" size="lg">
              Get In Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default CareersPage
