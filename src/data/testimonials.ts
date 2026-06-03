export interface Testimonial {
  id: string
  quote: string
  role: string
  sector: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      "Sterling Oak's command of pharmaceutical M&A in the Egyptian and Gulf markets is unmatched. The $400M acquisition was structured with precision \u2014 every regulatory and valuation nuance was handled flawlessly.",
    role: 'Senior Executive, Pharmaceutical Distribution Group',
    sector: 'Egypt',
  },
  {
    id: 'testimonial-2',
    quote:
      'Navigating a digitalisation mandate across government health infrastructure requires someone who understands both the public sector and the technology. Sterling Oak delivered both, and more.',
    role: 'Director General, Health Insurance Authority',
    sector: 'MENA Region',
  },
  {
    id: 'testimonial-3',
    quote:
      'We engaged Sterling Oak for multi-generational succession planning across seven jurisdictions. They navigated complex family dynamics and cross-border legal structures with extraordinary discretion. The outcome exceeded every expectation.',
    role: 'Principal, Private Family Office',
    sector: 'Gulf Region',
  },
  {
    id: 'testimonial-4',
    quote:
      "Sterling Oak's independence is their greatest asset. Unlike our previous advisors, their recommendations were never coloured by proprietary interests. The restructuring saved our group over $45 million annually.",
    role: 'Group CFO',
    sector: 'Industrial Conglomerate',
  },
  {
    id: 'testimonial-5',
    quote:
      "They brought a level of analytical rigour to our IPO preparation that we hadn't seen from larger firms. Every assumption was stress-tested, every risk quantified. We listed 30% above our initial target.",
    role: 'Chief Executive Officer',
    sector: 'Technology',
  },
  {
    id: 'testimonial-6',
    quote:
      "Navigating Sharia-compliant wealth structures across three jurisdictions seemed impossible until Sterling Oak mapped it out. Their knowledge of Islamic finance is genuinely world-class.",
    role: 'Family Office Principal',
    sector: 'Private Wealth',
  },
  {
    id: 'testimonial-7',
    quote:
      "The digital transformation roadmap they designed for our ministry wasn't just strategic — it was implementable. Twelve months later, we're ahead of every benchmark they set.",
    role: 'Deputy Minister',
    sector: 'Government',
  },
  {
    id: 'testimonial-8',
    quote:
      'Most advisors tell you what you want to hear. Sterling Oak told us what we needed to hear — and that honesty saved a deal that was about to collapse. They earned our trust for life.',
    role: 'Managing Partner',
    sector: 'Private Equity',
  },
]
