import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import { services } from '../data/services'

const ServicesPage: FC = () => {
  const seo = useSEO({ title: 'Our Services' })

  return (
    <>
      {seo}
      <PageHero tag="What We Do" title="Our Services" />

      <section className="bg-warm-white py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <p className="max-w-3xl font-body text-mid text-lg leading-relaxed">
              Sterling Oak Advisory provides comprehensive advisory services
              across six core disciplines. Each practice is led by senior
              principals with deep domain expertise and a commitment to
              delivering measurable outcomes.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="bg-cream p-8 border-l-2 border-oak h-full transition-all duration-300 hover:shadow-sm">
                    <span className="font-display text-oak text-sm tracking-wider">
                      {service.number}
                    </span>
                    <h3 className="mt-3 font-display text-2xl text-dark font-medium">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-body text-oak text-sm tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 font-body text-mid text-sm leading-relaxed">
                      {service.description}
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
    </>
  )
}

export default ServicesPage
