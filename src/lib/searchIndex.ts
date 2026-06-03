import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import { industries } from '../data/industries'

export interface SearchItem {
  title: string
  description: string
  path: string
  category: 'Service' | 'Industry' | 'Insight' | 'Case Study' | 'Page'
  keywords: string[]
}

const articles = [
  { slug: 'esg-advisory-mena-imperative', title: 'ESG in MENA: From Compliance Burden to Competitive Advantage', category: 'ESG', excerpt: 'How forward-thinking companies in the Gulf and North Africa are turning ESG frameworks into genuine competitive advantages.' },
  { slug: 'corporate-debt-restructuring-egypt', title: 'Navigating Corporate Debt Restructuring in Post-Devaluation Egypt', category: 'Restructuring', excerpt: 'A practical framework for Egyptian corporates managing unsustainable FX-denominated debt.' },
  { slug: 'ipo-readiness-mena-2026', title: 'IPO Readiness: What MENA Companies Get Wrong Before Going Public', category: 'Capital Markets', excerpt: 'The critical governance, financial, and timing mistakes that derail MENA listings.' },
  { slug: 'independent-financial-counsel', title: 'The Case for Independent Financial Counsel in Uncertain Markets', category: 'Financial Advisory', excerpt: 'Why conflict-free advisory delivers measurably better outcomes.' },
  { slug: 'five-questions-before-acquisition', title: 'Five Questions Every Business Owner Should Ask Before an Acquisition', category: 'M&A', excerpt: 'A disciplined framework for evaluating acquisition targets beyond the headline price.' },
  { slug: 'succession-planning-gulf-family-offices', title: 'Succession Planning: Why Family Offices in the Gulf Get It Wrong', category: 'Wealth', excerpt: 'The structural, cultural, and legal pitfalls that undermine generational wealth transfer.' },
]

const pages = [
  { title: 'About Us', path: '/about', description: 'Our firm story, values, and leadership team', keywords: ['about', 'team', 'leadership', 'founder', 'Dr. Aly', 'mission', 'values'] },
  { title: 'Contact', path: '/contact', description: 'Get in touch with Sterling Oak Advisory', keywords: ['contact', 'email', 'phone', 'office', 'schedule', 'call'] },
  { title: 'Careers', path: '/careers', description: 'Join our team — current openings and firm culture', keywords: ['careers', 'jobs', 'hiring', 'analyst', 'associate', 'openings'] },
  { title: 'Newsroom', path: '/newsroom', description: 'Latest news, announcements, and events', keywords: ['news', 'press', 'media', 'announcements', 'events', 'conferences'] },
  { title: 'Resources', path: '/resources', description: 'Downloadable resources and credentials deck', keywords: ['resources', 'download', 'credentials', 'PDF', 'checklist'] },
  { title: 'Accreditations', path: '/accreditations', description: 'Professional certifications and regulatory licenses', keywords: ['accreditations', 'certifications', 'FRA', 'CFA', 'DFSA', 'licenses'] },
  { title: 'Privacy Policy', path: '/privacy', description: 'How we handle your personal information', keywords: ['privacy', 'data', 'GDPR', 'cookies'] },
  { title: 'Terms of Service', path: '/terms', description: 'Website terms and conditions', keywords: ['terms', 'legal', 'conditions'] },
]

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  // Services
  for (const s of services) {
    items.push({
      title: s.title,
      description: s.subtitle || s.description?.substring(0, 120) || '',
      path: `/services/${s.slug}`,
      category: 'Service',
      keywords: [s.title, s.subtitle || '', s.slug.replace(/-/g, ' ')],
    })
  }

  // Industries
  for (const ind of industries) {
    items.push({
      title: ind.name,
      description: ind.description.substring(0, 120),
      path: `/industries/${ind.slug}`,
      category: 'Industry',
      keywords: [ind.name, ind.slug.replace(/-/g, ' '), ...ind.challenges.map(c => c.substring(0, 30))],
    })
  }

  // Articles
  for (const a of articles) {
    items.push({
      title: a.title,
      description: a.excerpt,
      path: `/insights/${a.slug}`,
      category: 'Insight',
      keywords: [a.title, a.category, a.slug.replace(/-/g, ' ')],
    })
  }

  // Case studies
  for (const cs of caseStudies) {
    items.push({
      title: cs.title,
      description: cs.description,
      path: `/case-studies/${cs.slug}`,
      category: 'Case Study',
      keywords: [cs.title, cs.sector, cs.slug.replace(/-/g, ' ')],
    })
  }

  // Static pages
  for (const p of pages) {
    items.push({
      title: p.title,
      description: p.description,
      path: p.path,
      category: 'Page',
      keywords: p.keywords,
    })
  }

  return items
}

export function searchItems(query: string, index: SearchItem[]): SearchItem[] {
  if (!query.trim()) return []
  const terms = query.toLowerCase().split(/\s+/)

  return index
    .map(item => {
      const searchText = [
        item.title,
        item.description,
        item.category,
        ...item.keywords,
      ].join(' ').toLowerCase()

      let score = 0
      for (const term of terms) {
        if (item.title.toLowerCase().includes(term)) score += 3
        if (item.category.toLowerCase().includes(term)) score += 2
        if (searchText.includes(term)) score += 1
      }
      return { item, score }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => r.item)
}
