import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

const articles = [
  {
    slug: 'independent-financial-counsel',
    title: 'The Case for Independent Financial Counsel in Uncertain Markets',
    date: 'March 15, 2026',
    category: 'Financial Advisory',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    authorInitials: 'AMA',
    authorRole: 'Founder & CEO, Sterling Oak Advisory',
    readTime: '8 min read',
  },
  {
    slug: 'five-questions-before-acquisition',
    title: 'Five Questions Every Business Owner Should Ask Before an Acquisition',
    date: 'February 28, 2026',
    category: 'M&A',
    author: 'Sterling Oak Advisory Research',
    authorInitials: 'SOA',
    authorRole: 'Research Team, Sterling Oak Advisory',
    readTime: '6 min read',
  },
  {
    slug: 'succession-planning-gulf-family-offices',
    title: 'Succession Planning: Why Family Offices in the Gulf Get It Wrong',
    date: 'February 10, 2026',
    category: 'Wealth',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    authorInitials: 'AMA',
    authorRole: 'Founder & CEO, Sterling Oak Advisory',
    readTime: '10 min read',
  },
]

function ArticleContent({ slug }: { slug: string }) {
  if (slug === 'independent-financial-counsel') {
    return (
      <div className="prose">
        <p>
          In an era of unprecedented market volatility and geopolitical complexity, the value of truly independent financial counsel has never been more apparent. For corporations, sovereigns, and family offices operating across the MENA region, the distinction between conflicted advice and genuinely independent guidance can mean the difference between value creation and value destruction.
        </p>
        <h2>The Problem with Conflicted Advice</h2>
        <p>
          Traditional financial advisory in Egypt and the broader Middle East has long been dominated by large investment banks and financial institutions that carry inherent conflicts of interest. When your advisor also underwrites securities, manages proprietary trading desks, or holds lending relationships with counterparties, the advice you receive is filtered through layers of institutional interest that may not align with your own.
        </p>
        <p>
          This is not a theoretical concern. In our experience advising on transactions across the Egyptian and Gulf markets, we have repeatedly encountered situations where clients received recommendations that served the advisor's institutional interests more than the client's strategic objectives. A bank recommending a capital raise, for example, may be motivated as much by underwriting fees as by genuine strategic need.
        </p>
        <h2>Why Independence Matters Now</h2>
        <p>
          Egypt's economic landscape is undergoing a historic transformation. The devaluation of the Egyptian pound, the IMF reform programme, and the unprecedented wave of privatisations and foreign direct investment have created a market environment where every decision carries heightened consequence. In this context, having an advisor whose only incentive is to deliver the best possible outcome for you is not a luxury — it is a necessity.
        </p>
        <p>
          Independent advisory firms like Sterling Oak Advisory operate without the conflicts that encumber larger institutions. We hold no proprietary positions, maintain no lending books, and generate no revenue from transaction execution. Our sole revenue comes from advisory fees, which means our sole incentive is to provide counsel that serves the client's interest.
        </p>
        <h2>The CFA Discipline</h2>
        <p>
          The CFA Institute's Code of Ethics and Standards of Professional Conduct provide a rigorous framework for ethical financial practice. As a CFA charterholder-led firm, Sterling Oak Advisory embeds these principles into every engagement. This means placing client interests above our own, maintaining independence and objectivity, and ensuring that our analysis meets the highest standards of thoroughness and integrity.
        </p>
        <p>
          In practical terms, this discipline manifests in how we approach every engagement: we begin with the client's objectives, not with a product to sell. We present all viable options, including those that may result in no transaction at all. And we structure our fees to eliminate any incentive that might compromise our objectivity.
        </p>
        <h2>The Egyptian Context</h2>
        <p>
          Egypt's advisory market is at an inflection point. As the economy opens, as regulatory frameworks mature, and as the complexity of transactions increases, the demand for sophisticated, independent counsel is growing rapidly. Family offices navigating succession across multiple jurisdictions, corporations evaluating strategic acquisitions, and government entities procuring complex technology solutions all require advice that is both technically excellent and genuinely independent.
        </p>
        <p>
          Sterling Oak Advisory was founded with this conviction: that Egypt and the wider MENA region deserve advisory of world-class calibre, delivered by professionals whose only allegiance is to the client. In uncertain markets, this independence is not just valuable — it is essential.
        </p>
      </div>
    )
  }

  if (slug === 'five-questions-before-acquisition') {
    return (
      <div className="prose">
        <p>
          Acquisitions are among the most consequential decisions a business owner will ever make. In the MENA pharmaceutical sector alone, we have seen transactions valued at hundreds of millions of dollars succeed or fail based on how rigorously the acquirer interrogated their own assumptions before signing. Here are five questions every business owner should ask — and honestly answer — before pursuing an acquisition.
        </p>
        <h2>1. What Is the Strategic Rationale — Really?</h2>
        <p>
          The most dangerous acquisitions are those driven by opportunism rather than strategy. Before evaluating any target, you must articulate precisely why this acquisition advances your strategic position. Is it market access? Technology capability? Talent? Supply chain integration? If you cannot state the strategic rationale in a single sentence, you are not ready to acquire.
        </p>
        <p>
          In our experience advising on the $800M pharmaceutical distribution acquisition, the strategic rationale was clear from day one: the acquirer needed distribution infrastructure across three jurisdictions to support their manufacturing expansion. Every subsequent decision — valuation, structure, negotiation — was anchored to this strategic logic.
        </p>
        <h2>2. Is the Valuation Defensible?</h2>
        <p>
          Valuation discipline is the single most important safeguard against overpayment. This means going beyond simple multiples and conducting rigorous discounted cash flow analysis, precedent transaction analysis, and — critically — stress-testing assumptions under adverse scenarios. In the MENA pharmaceutical sector, regulatory risk, currency exposure, and supply chain vulnerability must all be factored into the valuation.
        </p>
        <p>
          We have walked clients away from transactions where the valuation could not be defended under reasonable downside scenarios. This is not a failure — it is discipline. The best acquisition is sometimes the one you do not make.
        </p>
        <h2>3. Are You Regulatorily Ready?</h2>
        <p>
          Cross-border transactions in the MENA region involve navigating multiple regulatory regimes, each with its own requirements for competition clearance, foreign ownership restrictions, and sector-specific approvals. In the pharmaceutical sector, regulatory readiness includes drug registration transfers, manufacturing licence implications, and health authority notifications.
        </p>
        <p>
          Regulatory readiness is not something you address after signing — it is something you assess before making an offer. The cost of discovering a regulatory barrier post-signing can be catastrophic, both financially and reputationally.
        </p>
        <h2>4. Do You Have an Integration Plan?</h2>
        <p>
          The majority of acquisition value is created — or destroyed — in the integration phase. Yet many acquirers approach integration as an afterthought, something to figure out after the deal closes. This is a critical error. Your integration plan should be developed in parallel with due diligence and should address organisational structure, technology systems, key personnel retention, customer communication, and cultural alignment.
        </p>
        <p>
          Integration planning is especially important in the MENA context, where business relationships are deeply personal and cultural misalignment can unravel even the most strategically sound transaction.
        </p>
        <h2>5. Have You Stress-Tested Cultural Alignment?</h2>
        <p>
          Culture is the invisible variable in every acquisition. Two organisations may look complementary on paper — matching capabilities, overlapping geographies, aligned financial profiles — and yet fail to integrate because their cultures are fundamentally incompatible. In the MENA region, where business culture varies significantly across countries and sectors, cultural due diligence is not optional.
        </p>
        <p>
          We recommend that every acquirer invest in understanding the target's decision-making processes, communication norms, risk appetite, and stakeholder relationships. These factors will determine whether the combined entity thrives or fractures.
        </p>
        <h2>The Bottom Line</h2>
        <p>
          Acquisitions are not financial exercises — they are strategic decisions with operational, cultural, and regulatory dimensions that must all be addressed with equal rigour. By asking these five questions honestly and thoroughly, business owners can dramatically improve their odds of a successful outcome.
        </p>
      </div>
    )
  }

  if (slug === 'succession-planning-gulf-family-offices') {
    return (
      <div className="prose">
        <p>
          Family offices across the Gulf region manage some of the most significant private wealth concentrations in the world. Yet a startling proportion of these families lack adequate succession planning, putting generational wealth at risk. Having led multi-jurisdictional succession planning across seven jurisdictions for a prominent Gulf family office, we have seen firsthand both the pitfalls and the solutions.
        </p>
        <h2>The Scale of the Problem</h2>
        <p>
          Studies consistently show that 70% of family wealth is lost by the second generation, and 90% by the third. In the Gulf region, where family wealth often spans real estate, operating businesses, financial portfolios, and sovereign relationships across multiple countries, the complexity is even greater — and the stakes are higher.
        </p>
        <p>
          The most common reason for wealth erosion is not poor investment performance — it is poor governance. Families that fail to establish clear decision-making frameworks, succession protocols, and conflict resolution mechanisms find themselves paralysed by disagreement when the founding generation steps back.
        </p>
        <h2>Common Mistakes We See</h2>
        <p>
          <strong>Single-jurisdiction planning.</strong> Many Gulf families structure their wealth through a single jurisdiction — often the UAE or the family's home country. This creates concentration risk and fails to optimise for the tax, regulatory, and asset protection benefits available across multiple jurisdictions. Our seven-jurisdiction engagement demonstrated how a properly diversified structure can provide both protection and efficiency.
        </p>
        <p>
          <strong>Ignoring family dynamics.</strong> Succession planning is not purely a legal and financial exercise — it is a human one. Family dynamics, sibling relationships, generational differences in values and risk appetite, and the role of in-laws all must be addressed openly. We have seen technically perfect structures fail because the family dynamics were not adequately considered.
        </p>
        <p>
          <strong>Delaying the conversation.</strong> The founding generation often delays succession planning because the conversation is uncomfortable. But delay compounds complexity: as families grow, as assets multiply, and as jurisdictions proliferate, the challenge becomes exponentially more difficult. The best time to begin succession planning is now.
        </p>
        <h2>The Seven-Jurisdiction Framework</h2>
        <p>
          In our landmark engagement, we designed a comprehensive governance and wealth transfer framework spanning seven jurisdictions for a prominent Gulf family. The framework integrated:
        </p>
        <p>
          <strong>Trust structures</strong> across common law jurisdictions for asset protection and intergenerational transfer, combined with Sharia-compliant arrangements where required. <strong>Family governance</strong> mechanisms including a family constitution, a family council with defined roles and voting procedures, and a structured programme for next-generation education and involvement. <strong>Tax efficiency</strong> through careful structuring that respected the laws of all relevant jurisdictions while minimising unnecessary tax friction.
        </p>
        <p>
          The result was a structure that protected the family's wealth, respected their values, and provided a clear framework for decision-making across generations. Most importantly, it gave the founding generation confidence that their legacy would be preserved.
        </p>
        <h2>Sharia-Compliant Frameworks</h2>
        <p>
          For many Gulf families, Sharia compliance is not optional — it is a fundamental requirement. This creates unique structuring challenges, particularly when integrating with common law trust structures that may not have direct equivalents in Islamic jurisprudence. Our approach combines deep knowledge of both frameworks to create structures that satisfy religious requirements while achieving the family's practical objectives.
        </p>
        <h2>Getting It Right</h2>
        <p>
          Effective succession planning for Gulf family offices requires three things: technical expertise across multiple legal and financial systems, the human sensitivity to navigate family dynamics, and the patience to build consensus across generations. It cannot be done in a single meeting, and it cannot be delegated to a junior team.
        </p>
        <p>
          At Sterling Oak Advisory, we lead every succession planning engagement at the senior level, ensuring that the complexity of multi-jurisdictional structuring is matched by the quality of human judgment applied to family governance. The result is not just a legal structure — it is a living framework for generational prosperity.
        </p>
      </div>
    )
  }

  return <p className="text-mid">Article content not found.</p>
}

export default function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)
  const relatedArticles = articles.filter((a) => a.slug !== slug)
  const seo = useSEO({ title: article?.title ?? 'Article Not Found' })

  if (!article) {
    return (
      <>
        {seo}
        <div className="section-container section-padding text-center">
          <h1 className="font-display text-4xl font-medium text-dark">Article Not Found</h1>
          <p className="text-mid mt-4">The article you're looking for doesn't exist.</p>
          <Button href="/insights" variant="primary" className="mt-8">
            Back to Insights
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      {seo}
      <PageHero
        tag={article.category}
        title={article.title}
        subtitle={`${article.date} · ${article.readTime}`}
      />

      <section className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Badge>{article.category}</Badge>
                <span className="text-light-gray text-sm font-body">
                  {article.date} · {article.readTime}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ArticleContent slug={article.slug} />
            </ScrollReveal>
          </div>

          <aside className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="bg-cream p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-oak text-warm-white rounded-full flex items-center justify-center text-xl font-display">
                    {article.authorInitials}
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-dark">
                      {article.author}
                    </p>
                    <p className="text-sm text-light-gray font-body">
                      {article.authorRole}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mb-8">
                <h3 className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-4">
                  Related Insights
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/insights/${related.slug}`}
                      className="block group"
                    >
                      <p className="font-display text-lg text-dark group-hover:text-oak transition-colors duration-300">
                        {related.title}
                      </p>
                      <p className="text-sm text-light-gray font-body mt-1">
                        {related.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        <ScrollReveal>
          <div className="bg-cream p-8 lg:p-12 mt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-medium text-dark">
                  Speak With Our Team
                </h3>
                <p className="text-mid font-body mt-2">
                  Interested in discussing how these insights apply to your situation?
                </p>
              </div>
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
