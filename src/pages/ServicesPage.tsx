import { useState, type FC } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import { openCalendly } from '../lib/calendly'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { services } from '../data/services'

type ViewMode = 'grid' | 'list'

const stats = [
  { value: '10', label: 'Practice Areas' },
  { value: '$2B+', label: 'Assets Under Advisory' },
  { value: '4', label: 'Global Offices' },
]

const ServicesPage: FC = () => {
  const seo = useSEO({
    title: 'Our Capabilities — Sterling Oak Advisory',
    path: '/services',
    description:
      "Explore Sterling Oak Advisory's 10 practice areas spanning M&A, financial advisory, ESG, capital raising, and digital transformation.",
  })

  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const prefersReduced = useReducedMotion()

  return (
    <>
      {seo}
      <PageHero tag="Capabilities" title="What We Do" />

      {/* Section 1: Overview Intro */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <ScrollReveal>
            <p className="max-w-3xl font-body text-mid text-lg lg:text-xl leading-relaxed">
              Sterling Oak Advisory provides comprehensive advisory services
              across ten core practice areas. Each discipline is led by senior
              principals with deep domain expertise, regional insight, and a
              commitment to delivering measurable outcomes for corporations,
              governments, and private clients across MENA and Europe.
            </p>
          </ScrollReveal>

          {/* Stat Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="border border-border bg-cream px-8 py-10 text-center">
                  <span className="block font-display text-4xl lg:text-5xl font-light text-oak">
                    {stat.value}
                  </span>
                  <span className="mt-2 block font-body text-xs uppercase tracking-[0.2em] text-mid">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid / List */}
      <section className="bg-warm-white pb-20 lg:pb-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          {/* View Toggle */}
          <ScrollReveal>
            <div className="mb-12 flex items-center gap-4">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-light-gray">
                View
              </span>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 font-body text-xs uppercase tracking-widest border transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-dark text-cream border-dark'
                    : 'bg-transparent text-mid border-border hover:border-oak hover:text-oak'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 font-body text-xs uppercase tracking-widest border transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-dark text-cream border-dark'
                    : 'bg-transparent text-mid border-border hover:border-oak hover:text-oak'
                }`}
              >
                List View
              </button>
            </div>
          </ScrollReveal>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
            >
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.05}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="block h-full group"
                  >
                    <div className="h-full bg-cream border-l-2 border-oak/40 group-hover:border-oak px-8 py-8 transition-all duration-300 group-hover:shadow-lg">
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-oak">
                        {service.number}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-medium text-dark">
                        {service.title}
                      </h3>
                      <p className="mt-1 font-body text-sm tracking-wide text-oak">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 font-body text-sm text-mid leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-block font-body text-xs uppercase tracking-widest text-oak group-hover:translate-x-1 transition-transform duration-300">
                        Learn More &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </motion.div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <motion.div
              className="divide-y divide-border"
              initial={prefersReduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
            >
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.04}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className="flex items-center gap-6 lg:gap-10 py-7 px-4 transition-all duration-300 hover:bg-cream">
                      {/* Number */}
                      <span className="shrink-0 font-body text-xs uppercase tracking-[0.2em] text-oak w-8">
                        {service.number}
                      </span>

                      {/* Title & Subtitle */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                          <h3 className="font-display text-xl lg:text-2xl font-medium text-dark group-hover:text-oak transition-colors duration-300">
                            {service.title}
                          </h3>
                          <span className="font-body text-sm text-oak shrink-0">
                            {service.subtitle}
                          </span>
                        </div>
                        <p className="mt-1 font-body text-sm text-mid leading-relaxed line-clamp-1 max-w-2xl">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span className="shrink-0 font-body text-oak text-lg group-hover:translate-x-1 transition-transform duration-300">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 3: Service Finder CTA */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-dark">
              Not Sure Where to Start?
            </h2>
            <p className="mt-6 mx-auto max-w-xl font-body text-mid text-lg leading-relaxed">
              Tell us about your challenge and we&rsquo;ll recommend the right
              advisory team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" onClick={openCalendly}>
                Schedule a Consultation
              </Button>
            </div>
            <Link
              to="/case-studies"
              className="mt-6 inline-block font-body text-sm text-oak hover:text-oak-light transition-colors duration-300"
            >
              Or explore our case studies &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
