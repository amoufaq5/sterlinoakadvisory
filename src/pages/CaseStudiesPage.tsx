import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudiesPage() {
  const seo = useSEO({ title: 'Selected Experience' })

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
              <div className="bg-cream p-8 lg:p-10 border-l-2 border-oak h-full">
                <Badge>{study.sector}</Badge>
                <h3 className="font-display text-2xl font-medium text-dark mt-4 mb-4">
                  {study.title}
                </h3>
                <p className="text-mid font-body leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="border-t border-border pt-6 mt-auto">
                  <p className="font-display text-3xl font-medium text-oak">
                    {study.result}
                  </p>
                  <p className="font-body text-sm text-light-gray uppercase tracking-wider mt-1">
                    {study.resultLabel}
                  </p>
                </div>

                {study.challenge && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-3">
                      The Challenge
                    </h4>
                    <p className="text-mid font-body text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                )}

                {study.approach && (
                  <div className="mt-4">
                    <h4 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-3">
                      Our Approach
                    </h4>
                    <p className="text-mid font-body text-sm leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                )}

                {study.outcome && (
                  <div className="mt-4">
                    <h4 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-3">
                      The Outcome
                    </h4>
                    <p className="text-mid font-body text-sm leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
