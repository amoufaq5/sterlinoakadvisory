import { useState, type FC, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

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
    category: 'ESG',
    date: 'April 2, 2026',
    readTime: '7 min read',
    author: 'Sterling Oak Advisory Research',
    excerpt:
      'How forward-thinking companies in the Gulf and North Africa are turning ESG frameworks into genuine competitive advantages.',
  },
  {
    slug: 'corporate-debt-restructuring-egypt',
    title:
      'Navigating Corporate Debt Restructuring in Post-Devaluation Egypt',
    category: 'Restructuring',
    date: 'March 28, 2026',
    readTime: '9 min read',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    excerpt:
      'A practical framework for Egyptian corporates managing unsustainable FX-denominated debt in the wake of currency devaluation.',
  },
  {
    slug: 'ipo-readiness-mena-2026',
    title:
      'IPO Readiness: What MENA Companies Get Wrong Before Going Public',
    category: 'Capital Markets',
    date: 'March 20, 2026',
    readTime: '8 min read',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    excerpt:
      'The critical governance, financial, and timing mistakes that derail MENA listings — and how to avoid them.',
  },
  {
    slug: 'independent-financial-counsel',
    title:
      'The Case for Independent Financial Counsel in Uncertain Markets',
    category: 'Financial Advisory',
    date: 'March 15, 2026',
    readTime: '8 min read',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    excerpt:
      'Why conflict-free advisory delivers measurably better outcomes for corporations navigating market uncertainty.',
  },
  {
    slug: 'five-questions-before-acquisition',
    title:
      'Five Questions Every Business Owner Should Ask Before an Acquisition',
    category: 'M&A',
    date: 'February 28, 2026',
    readTime: '6 min read',
    author: 'Sterling Oak Advisory Research',
    excerpt:
      'A disciplined framework for evaluating acquisition targets beyond the headline price.',
  },
  {
    slug: 'succession-planning-gulf-family-offices',
    title:
      'Succession Planning: Why Family Offices in the Gulf Get It Wrong',
    category: 'Wealth',
    date: 'February 10, 2026',
    readTime: '10 min read',
    author: 'Dr. Abdelrahman Mawafk Aly, CFA',
    excerpt:
      'The structural, cultural, and legal pitfalls that undermine generational wealth transfer in the GCC.',
  },
]

const filterTabs = [
  'All',
  'Financial Advisory',
  'M&A',
  'Wealth',
  'Government',
  'ESG',
  'Restructuring',
  'Capital Markets',
]

type SortMode = 'latest' | 'popular'

const InsightsPage: FC = () => {
  const seo = useSEO({
    title: 'Insights & Research — Sterling Oak Advisory',
    path: '/insights',
    description:
      'Expert insights, research, and thought leadership from Sterling Oak Advisory on M&A, ESG, capital markets, and financial advisory across MENA.',
  })

  const [activeFilter, setActiveFilter] = useState('All')
  const [sortMode, setSortMode] = useState<SortMode>('latest')
  const [email, setEmail] = useState('')
  const prefersReduced = useReducedMotion()

  const filteredArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter((a) => a.category === activeFilter)

  const featuredArticle = articles[0]
  const gridArticles =
    activeFilter === 'All'
      ? filteredArticles.slice(1)
      : filteredArticles.filter((a) => a.slug !== featuredArticle.slug)

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <>
      {seo}
      <PageHero tag="Thought Leadership" title="Insights & Research" />

      {/* Section 1: Featured Article */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <ScrollReveal>
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
                {/* Left: Content Panel */}
                <div className="lg:col-span-2 bg-dark px-8 py-12 lg:px-14 lg:py-16 flex flex-col justify-center">
                  <Badge className="border-oak-light text-oak-light self-start">
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="mt-6 font-display text-3xl lg:text-4xl font-light text-warm-white leading-tight group-hover:text-oak-light transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-5 font-body text-md text-light-gray leading-relaxed max-w-xl">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3 font-body text-xs text-light-gray">
                    <span>{featuredArticle.author}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-light-gray" />
                    <span>{featuredArticle.date}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-light-gray" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <span className="mt-8 inline-block font-body text-xs uppercase tracking-widest text-oak-light group-hover:translate-x-1 transition-transform duration-300">
                    Read Article &rarr;
                  </span>
                </div>

                {/* Right: Decorative Panel */}
                <div className="hidden lg:flex bg-cream items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <span className="font-display text-[180px] leading-none text-oak/10 select-none" aria-hidden="true">
                    &ldquo;
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: All Articles */}
      <section className="bg-warm-white pb-20 lg:pb-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          {/* Filter Bar */}
          <ScrollReveal>
            <div className="flex flex-col gap-6 mb-12">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
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

              {/* Sort Toggle */}
              <div className="flex items-center gap-3">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-light-gray">
                  Sort
                </span>
                <button
                  onClick={() => setSortMode('latest')}
                  className={`px-3 py-1.5 font-body text-xs tracking-wide border transition-all duration-300 ${
                    sortMode === 'latest'
                      ? 'bg-dark text-cream border-dark'
                      : 'bg-transparent text-mid border-border hover:border-oak hover:text-oak'
                  }`}
                >
                  Latest First
                </button>
                <button
                  onClick={() => setSortMode('popular')}
                  className={`px-3 py-1.5 font-body text-xs tracking-wide border transition-all duration-300 ${
                    sortMode === 'popular'
                      ? 'bg-dark text-cream border-dark'
                      : 'bg-transparent text-mid border-border hover:border-oak hover:text-oak'
                  }`}
                >
                  Most Popular
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Articles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter}
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
          >
            {gridArticles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 0.08}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="block group h-full"
                >
                  <div className="h-full bg-cream border border-border transition-all duration-300 group-hover:shadow-lg group-hover:border-oak/30 flex flex-col">
                    {/* Category Strip */}
                    <div className="px-6 pt-6 pb-4 bg-section-bg">
                      <Badge>{article.category}</Badge>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-4 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-medium text-dark leading-snug group-hover:text-oak transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="mt-3 font-body text-sm text-mid leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto pt-5 flex flex-wrap items-center gap-2 font-body text-xs text-light-gray">
                        <span>{article.author}</span>
                        <span className="inline-block w-1 h-1 rounded-full bg-light-gray" />
                        <span>{article.date}</span>
                        <span className="inline-block w-1 h-1 rounded-full bg-light-gray" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>

          {gridArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-mid">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Newsletter CTA */}
      <section className="bg-dark py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-warm-white">
              Stay Informed
            </h2>
            <p className="mt-6 mx-auto max-w-xl font-body text-light-gray text-lg leading-relaxed">
              Receive our latest insights, market analysis, and advisory
              perspectives directly.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-10 mx-auto max-w-lg flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-transparent border border-light-gray/30 text-warm-white font-body text-sm placeholder:text-light-gray/60 focus:outline-none focus:border-oak-light transition-colors duration-300"
              />
              <Button variant="outline-oak" size="md" type="submit">
                Subscribe
              </Button>
            </form>

            <p className="mt-5 font-body text-xs text-light-gray/60">
              We publish monthly. No spam. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default InsightsPage
