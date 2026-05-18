import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import { industries } from '../data/industries'

const IndustriesPage: FC = () => {
  const seo = useSEO({ title: 'Industries', path: '/industries' })

  return (
    <>
      {seo}
      <PageHero tag="Sectors" title="Industries We Serve" />

      <section className="bg-warm-white py-20 lg:py-32">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <p className="max-w-3xl font-body text-mid text-lg leading-relaxed">
              Deep sector expertise is the foundation of effective advisory. Sterling
              Oak maintains dedicated industry practices across the sectors most
              critical to the MENA region, ensuring that every engagement is informed
              by current market intelligence, regulatory knowledge, and transaction
              experience specific to your industry.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.slug} delay={index * 0.08}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="block h-full"
                >
                  <div className="bg-cream p-8 lg:p-10 border-l-2 border-oak/40 h-full transition-all duration-300 hover:shadow-lg hover:border-oak group">
                    <h3 className="font-display text-2xl text-dark font-medium group-hover:text-oak transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="mt-3 font-body text-mid text-sm leading-relaxed line-clamp-3">
                      {industry.description}
                    </p>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <span className="font-display text-3xl text-oak font-medium">
                          {industry.stats.value}
                        </span>
                        <span className="ml-2 font-body text-light-gray text-sm">
                          {industry.stats.label}
                        </span>
                      </div>
                      <span className="font-body text-xs uppercase tracking-widest text-oak">
                        Explore &rarr;
                      </span>
                    </div>
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

export default IndustriesPage
