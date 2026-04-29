import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudiesPage() {
  const seo = useSEO({ title: 'Selected Experience', path: '/case-studies' })

  return (
    <>
      {seo}
      <PageHero tag="Track Record" title="Selected Experience" />

      <section className="section-container section-padding">
        <ScrollReveal>
          <p className="text-mid font-body text-lg max-w-3xl mb-16 leading-relaxed">
            The following represents a selection of completed engagements, presented
            with identifying details modified for client confidentiality.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 0.1}>
              <Link
                to={`/case-studies/${study.slug}`}
                className="block bg-cream p-8 lg:p-10 border-l-2 border-oak h-full group hover:shadow-lg transition-all duration-300"
              >
                <Badge>{study.sector}</Badge>
                <h3 className="font-display text-2xl font-medium text-dark mt-4 mb-4 group-hover:text-oak transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-mid font-body leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="border-t border-border pt-6 flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl font-medium text-oak">
                      {study.result}
                    </p>
                    <p className="font-body text-sm text-light-gray uppercase tracking-wider mt-1">
                      {study.resultLabel}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-oak font-body text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
