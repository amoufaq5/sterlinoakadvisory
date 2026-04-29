import { useParams, Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = caseStudies.find((s) => s.slug === slug)
  const otherStudies = caseStudies.filter((s) => s.slug !== slug)
  const seo = useSEO({ title: study?.title ?? 'Case Study Not Found', path: '/case-studies/' + slug })

  if (!study) {
    return (
      <>
        {seo}
        <div className="section-container section-padding text-center">
          <h1 className="font-display text-4xl font-medium text-dark">
            Case Study Not Found
          </h1>
          <p className="text-mid mt-4 font-body">
            The case study you're looking for doesn't exist.
          </p>
          <Button href="/case-studies" variant="primary" className="mt-8">
            View All Case Studies
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      {seo}
      <PageHero tag={study.sector} title={study.title} />

      <section className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <Badge>{study.sector}</Badge>
                <span className="font-display text-3xl font-medium text-oak">
                  {study.result}
                </span>
                <span className="font-body text-sm text-light-gray uppercase tracking-wider">
                  {study.resultLabel}
                </span>
              </div>
              <p className="font-body text-mid text-lg leading-relaxed">
                {study.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border-l-2 border-oak pl-6">
                <h2 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-4">
                  The Challenge
                </h2>
                <p className="font-body text-mid leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-2 border-oak pl-6">
                <h2 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-4">
                  Our Approach
                </h2>
                <p className="font-body text-mid leading-relaxed">
                  {study.approach}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l-2 border-oak pl-6">
                <h2 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-4">
                  The Outcome
                </h2>
                <p className="font-body text-mid leading-relaxed">
                  {study.outcome}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-cream p-8 lg:p-12 mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-dark">
                      Discuss a Similar Engagement
                    </h3>
                    <p className="text-mid font-body mt-2">
                      Every engagement is unique. Tell us about yours.
                    </p>
                  </div>
                  <Button href="/contact" variant="primary">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <aside className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="bg-cream p-6 mb-8">
                <div className="text-center mb-6">
                  <p className="font-display text-5xl font-medium text-oak">
                    {study.result}
                  </p>
                  <p className="font-body text-sm text-light-gray uppercase tracking-wider mt-2">
                    {study.resultLabel}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-1">
                    Sector
                  </p>
                  <p className="font-body text-dark text-sm">{study.sector}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-4">
                  Other Engagements
                </h3>
                <div className="space-y-4">
                  {otherStudies.map((other) => (
                    <Link
                      key={other.slug}
                      to={`/case-studies/${other.slug}`}
                      className="block group bg-cream p-4 hover:border-l-2 hover:border-oak transition-all duration-300"
                    >
                      <Badge>{other.sector}</Badge>
                      <p className="font-display text-lg text-dark group-hover:text-oak transition-colors duration-300 mt-2">
                        {other.title}
                      </p>
                      <p className="font-display text-xl font-medium text-oak mt-1">
                        {other.result}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>
    </>
  )
}
