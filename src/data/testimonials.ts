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
      "Sterling Oak's command of pharmaceutical M&A in the Egyptian and Gulf markets is unmatched. The $800M acquisition was structured with precision \u2014 every regulatory and valuation nuance was handled flawlessly.",
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
]
