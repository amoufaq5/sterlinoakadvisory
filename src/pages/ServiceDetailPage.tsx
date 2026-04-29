import type { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'

const romanNumerals = ['I', 'II', 'III']

const ServiceDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  const seo = useSEO({ title: service?.title ?? 'Service Not Found', path: '/services/' + slug })

  if (!service) {
    return (
      <>
        {seo}
        <section className="bg-warm-white py-40 text-center">
          <div className="max-w-content mx-auto px-6">
            <h1 className="font-display text-4xl text-dark">
              Service not found
            </h1>
            <p className="mt-4 font-body text-mid">
              The service you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-block font-body text-oak underline underline-offset-4 hover:text-dark transition-colors"
            >
              View all services
            </Link>
          </div>
        </section>
      </>
    )
  }

  const relatedStudies = caseStudies.filter((cs) =>
    service.relatedCaseStudies.includes(cs.slug),
  )

  return (
    <>
      {seo}
      <PageHero
        tag="Our Services"
        title={service.title}
        subtitle={service.subtitle}
      />

      {/* Overview */}
      <section className="bg-warm-white py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              Overview
            </h2>
          </ScrollReveal>
          <div className="mt-8 max-w-3xl space-y-6">
            {service.overview.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="font-body text-mid leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              What&rsquo;s Included
            </h2>
          </ScrollReveal>
          <ul className="mt-8 max-w-3xl list-none space-y-4">
            {service.included.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <li className="font-body text-mid leading-relaxed pl-6 relative before:content-['\u25C6'] before:absolute before:left-0 before:text-oak before:text-xs before:top-1">
                  {item}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-warm-white py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              Who It&rsquo;s For
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.clientTypes.map((client, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 border-t-2 border-oak">
                  <h3 className="font-display text-xl text-dark font-medium">
                    {client.title}
                  </h3>
                  <p className="mt-3 font-body text-mid text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-cream py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              Our Approach
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.approach.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div>
                  <span className="font-display text-4xl text-oak font-light">
                    {romanNumerals[i] ?? step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-dark font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-mid text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="bg-warm-white py-20">
          <div className="max-w-content mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-display text-3xl text-dark font-medium">
                Related Experience
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((cs, i) => (
                <ScrollReveal key={cs.id} delay={i * 0.1}>
                  <div className="bg-cream p-8 border border-border">
                    <Badge>{cs.sector}</Badge>
                    <h3 className="mt-4 font-display text-2xl text-dark font-medium">
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-dark font-medium">
              Discuss This Service With Us
            </h2>
            <p className="mt-4 font-body text-mid max-w-xl mx-auto">
              Speak with a senior principal about how{' '}
              {service.title.toLowerCase()} can address your specific
              requirements.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
