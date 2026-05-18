import { useState, type FC } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Badge from '../components/ui/Badge'

interface Article {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  author: string
  readTime: string
}

const articles: Article[] = [
  {
    slug: 'esg-advisory-mena-imperative',
    title: 'ESG in MENA: From Compliance Burden to Competitive Advantage',
    date: 'April 2, 2026',
    category: 'ESG',
    excerpt:
      'How forward-thinking companies in Egypt and the Gulf are turning ESG frameworks into genuine business value \u2014 and what the laggards risk losing.',
    author: 'Sterling Oak Advisory Research',
    readTime: '7 min read',
  },
  {
    slug: 'corporate-debt-restructuring-egypt',
    title: 'Navigating Corporate Debt Restructuring in Post-Devaluation Egypt',
    date: 'March 28, 2026',
    category: 'Restructuring',
    excerpt:
      'A practical framework for Egyptian corporates managing FX-denominated debt exposure in the wake of currency liberalisation and IMF reform.',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    readTime: '9 min read',
  },
  {
    slug: 'ipo-readiness-mena-2026',
    title: 'IPO Readiness: What MENA Companies Get Wrong Before Going Public',
    date: 'March 20, 2026',
    category: 'Capital Markets',
    excerpt:
      'From governance gaps to financial model weaknesses \u2014 the most common pitfalls we see in pre-IPO companies across Egypt, Saudi Arabia, and the UAE.',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    readTime: '8 min read',
  },
  {
    slug: 'independent-financial-counsel',
    title:
      'The Case for Independent Financial Counsel in Uncertain Markets',
    date: 'March 15, 2026',
    category: 'Financial Advisory',
    excerpt:
      'Why independence matters in financial advisory \u2014 and what Egypt-specific market dynamics mean for corporate decision-makers seeking unbiased counsel.',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    readTime: '8 min read',
  },
  {
    slug: 'five-questions-before-acquisition',
    title:
      'Five Questions Every Business Owner Should Ask Before an Acquisition',
    date: 'February 28, 2026',
    category: 'M&A',
    excerpt:
      'From valuation discipline to regulatory readiness \u2014 the critical questions that separate successful acquisitions from costly mistakes in the MENA pharmaceutical sector.',
    author: 'Sterling Oak Advisory Research',
    readTime: '6 min read',
  },
  {
    slug: 'succession-planning-gulf-family-offices',
    title:
      'Succession Planning: Why Family Offices in the Gulf Get It Wrong',
    date: 'February 10, 2026',
    category: 'Wealth',
    excerpt:
      'Multi-jurisdictional structures, governance frameworks, and the seven-jurisdiction case that reshaped our approach to family wealth transfer.',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    readTime: '10 min read',
  },
]

const filterTabs = ['All', 'Financial Advisory', 'M&A', 'Wealth', 'Government', 'ESG', 'Restructuring', 'Capital Markets']

const InsightsPage: FC = () => {
  const seo = useSEO({ title: 'Insights', path: '/insights' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter((a) => a.category === activeFilter)

  return (
    <>
      {seo}
      <PageHero tag="Thought Leadership" title="Insights" />

      <section className="bg-warm-white py-20">
        <div className="max-w-content mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 font-body text-xs uppercase tracking-widest border transition-all duration-300 ${
                  activeFilter === tab
                    ? 'bg-dark text-cream border-dark'
                    : 'bg-transparent text-mid border-border hover:border-oak hover:text-oak'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 0.1}>
                <Link to={`/insights/${article.slug}`} className="block group">
                  <div className="bg-cream overflow-hidden transition-all duration-300 hover:shadow-sm border border-border hover:border-oak">
                    {/* Image Placeholder */}
                    <div className="relative bg-section-bg h-48">
                      <div className="absolute top-4 left-4">
                        <Badge>{article.category}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 font-body text-xs text-light-gray">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-light-gray" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl text-dark group-hover:text-oak transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="mt-3 font-body text-mid text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <p className="mt-4 font-body text-xs text-light-gray">
                        {article.author}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-mid">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default InsightsPage
