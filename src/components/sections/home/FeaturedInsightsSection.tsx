import type { FC } from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    slug: 'esg-advisory-mena-imperative',
    category: 'ESG',
    title:
      'ESG in MENA: From Compliance Burden to Competitive Advantage',
    date: 'April 2, 2026',
    readTime: '7 min read',
    excerpt:
      'How forward-thinking companies in the Gulf and North Africa are turning ESG frameworks into genuine competitive advantages.',
  },
  {
    slug: 'corporate-debt-restructuring-egypt',
    category: 'Restructuring',
    title:
      'Navigating Corporate Debt Restructuring in Post-Devaluation Egypt',
    date: 'March 28, 2026',
    readTime: '9 min read',
    excerpt:
      'A practical framework for Egyptian corporates managing unsustainable FX-denominated debt.',
  },
  {
    slug: 'ipo-readiness-mena-2026',
    category: 'Capital Markets',
    title: 'IPO Readiness: What MENA Companies Get Wrong',
    date: 'March 20, 2026',
    readTime: '8 min read',
    excerpt:
      'The critical governance, financial, and timing mistakes that derail MENA listings.',
  },
];

const FeaturedInsightsSection: FC = () => {
  const featured = articles[0];
  const secondary = articles.slice(1);

  return (
    <section className="bg-warm-white">
      <div className="section-container section-padding">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionTag label="Latest Thinking" />
            <ScrollReveal>
              <h2 className="mt-4 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
                Insights That Shape Strategy
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <Link
              to="/insights"
              className="font-body text-sm text-oak hover:text-oak-light transition-colors duration-300 uppercase tracking-wider"
            >
              View All Insights &rarr;
            </Link>
          </ScrollReveal>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large featured card */}
          <ScrollReveal>
            <Link
              to={`/insights/${featured.slug}`}
              className="group block bg-dark p-8 lg:p-10 h-full transition-colors duration-300 hover:bg-[#252525]"
            >
              <span className="inline-block px-3 py-1 text-[11px] font-body uppercase tracking-wider text-oak-light border border-oak-light/30 mb-8">
                {featured.category}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-warm-white leading-tight">
                {featured.title}
              </h3>
              <p className="mt-4 font-body text-light-gray text-sm leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4 text-light-gray">
                <span className="font-body text-xs uppercase tracking-wider">
                  {featured.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-light-gray" />
                <span className="font-body text-xs uppercase tracking-wider">
                  {featured.readTime}
                </span>
              </div>
              <span className="inline-block mt-6 font-body text-sm text-oak-light uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                Read Article &rarr;
              </span>
            </Link>
          </ScrollReveal>

          {/* Right column: 2 stacked cards */}
          <div className="flex flex-col gap-6">
            {secondary.map((article, i) => (
              <ScrollReveal key={article.slug} delay={(i + 1) * 0.1}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group block bg-warm-white border border-border p-8 h-full transition-all duration-300 hover:border-oak"
                >
                  <span className="inline-block px-3 py-1 text-[11px] font-body uppercase tracking-wider text-oak border border-border mb-4">
                    {article.category}
                  </span>
                  <h3 className="font-display text-lg text-dark leading-snug">
                    {article.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 text-light-gray">
                    <span className="font-body text-xs uppercase tracking-wider">
                      {article.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-light-gray" />
                    <span className="font-body text-xs uppercase tracking-wider">
                      {article.readTime}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
