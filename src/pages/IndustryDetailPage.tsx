import type { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import { openCalendly } from '../lib/calendly'
import PageHero from '../components/ui/PageHero'
import SectionTag from '../components/ui/SectionTag'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { industries } from '../data/industries'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'

const IndustryDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const industry = industries.find((i) => i.slug === slug)

  const seo = useSEO({
    title: industry?.name ?? 'Industry Not Found',
    path: `/industries/${slug}`,
  })

  if (!industry) {
    return (
      <>
        {seo}
        <section className="bg-warm-white py-40 text-center">
          <div className="max-w-content mx-auto px-6">
            <h1 className="font-display text-4xl text-dark">
              Industry not found
            </h1>
            <p className="mt-4 font-body text-mid">
              The industry you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/industries"
              className="mt-8 inline-block font-body text-oak underline underline-offset-4 hover:text-dark transition-colors"
            >
              View all industries
            </Link>
          </div>
        </section>
      </>
    )
  }

  const relatedServices = services.filter((s) =>
    industry.services.includes(s.slug),
  )

  const relatedStudies = caseStudies.filter((cs) =>
    industry.caseStudySlugs.includes(cs.slug),
  )

  return (
    <>
      {seo}
      <PageHero tag="Industry" title={industry.name} />

      {/* Overview */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionTag label="Overview" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-3xl font-body text-mid text-lg leading-relaxed">
              {industry.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="mt-14 font-display text-2xl text-dark font-medium">
              Key Challenges
            </h3>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={0.25 + i * 0.1}>
                <div className="bg-cream p-6 lg:p-8 border-l-2 border-oak h-full">
                  <span className="font-display text-oak text-sm tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 font-body text-mid text-sm leading-relaxed">
                    {challenge}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionTag label="Our Capabilities" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl text-dark font-medium">
              How We Help
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="bg-warm-white p-8 border-t-2 border-oak h-full transition-all duration-300 hover:shadow-sm group">
                    <span className="font-display text-oak text-sm tracking-wider">
                      {service.number}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-dark font-medium group-hover:text-oak transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-body text-oak text-sm tracking-wide">
                      {service.subtitle}
                    </p>
                    <span className="mt-6 inline-block font-body text-xs uppercase tracking-widest text-oak">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      {relatedStudies.length > 0 && (
        <section className="bg-warm-white py-20 lg:py-32">
          <div className="max-w-content mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <SectionTag label="Track Record" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8">
                <span className="font-display text-5xl text-oak font-medium">
                  {industry.stats.value}
                </span>
                <span className="ml-3 font-body text-mid text-lg">
                  {industry.stats.label}
                </span>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((cs, i) => (
                <ScrollReveal key={cs.id} delay={0.15 + i * 0.1}>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="block h-full"
                  >
                    <div className="bg-cream p-8 lg:p-10 border border-border h-full transition-all duration-300 hover:shadow-lg group">
                      <Badge>{cs.sector}</Badge>
                      <h3 className="mt-4 font-display text-2xl text-dark font-medium group-hover:text-oak transition-colors duration-300">
                        {cs.title}
                      </h3>
                      <p className="mt-3 font-body text-mid text-sm leading-relaxed">
                        {cs.description}
                      </p>
                      <div className="mt-6">
                        <span className="text-3xl font-display text-oak font-medium">
                          {cs.result}
                        </span>
                        <span className="ml-2 font-body text-mid text-sm">
                          {cs.resultLabel}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              Discuss {industry.name} Advisory
            </h2>
            <p className="mt-4 font-body text-mid max-w-xl mx-auto">
              Speak with a senior principal about how our {industry.name.toLowerCase()} expertise
              can address your specific requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" onClick={openCalendly}>
                Schedule a Call
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default IndustryDetailPage
