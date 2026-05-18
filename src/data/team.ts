export interface TeamMember {
  id: string
  name: string
  title: string
  credentials: string
  initials: string
  bio: string
  specializations: string[]
  education: string[]
  location: string
}

export const team: TeamMember[] = [
  {
    id: 'abdelrahman-mawafk-aly',
    name: 'Dr. Abdelrahman Mawafk Aly',
    title: 'Founder & Chief Executive Officer',
    credentials: 'CFA, MBA, PhD',
    initials: 'AA',
    bio: 'Over 15 years of financial advisory experience across MENA and Europe. Previously held senior roles at leading global advisory firms before founding Sterling Oak Advisory. Has led more than $2B in advisory mandates spanning M&A, corporate strategy, and wealth planning. A pioneer of genuinely independent advisory in Egypt.',
    specializations: ['M&A Advisory', 'Corporate Strategy', 'Wealth Planning'],
    education: [
      'PhD, Financial Economics',
      'MBA, London Business School',
      'CFA Charterholder',
    ],
    location: 'Cairo',
  },
  {
    id: 'nadia-el-sayed',
    name: 'Nadia El-Sayed',
    title: 'Managing Director, Financial Advisory',
    credentials: 'CFA, ACCA',
    initials: 'NE',
    bio: 'Former Vice President at a Big 4 firm\'s Cairo office with 12 years in corporate finance. Recognised expert in cross-border valuation methodologies and Egyptian capital markets regulation. Leads Sterling Oak\'s financial advisory practice, advising on capital structure, debt restructuring, and transaction readiness.',
    specializations: ['Valuation', 'Capital Markets', 'Debt Restructuring'],
    education: [
      'CFA Charterholder',
      'ACCA Qualified',
    ],
    location: 'Cairo',
  },
  {
    id: 'james-harrington',
    name: 'James Harrington',
    title: 'Director, European Operations',
    credentials: 'FCA, CISI',
    initials: 'JH',
    bio: '18 years in London financial services, including a directorship at a respected mid-market advisory boutique. Deep expertise in FCA and PRA regulatory frameworks. Leads Sterling Oak\'s European subsidiary, managing cross-border M&A mandates, UK regulatory advisory, and European market entry strategy for MENA-headquartered clients.',
    specializations: ['Cross-border M&A', 'UK Regulatory Advisory', 'European Market Entry'],
    education: [
      'Fellow, Institute of Chartered Accountants',
      'Chartered Institute for Securities & Investment',
    ],
    location: 'London',
  },
  {
    id: 'omar-al-rashid',
    name: 'Omar Al-Rashid',
    title: 'Director, Gulf Advisory',
    credentials: 'CFA, CAIA',
    initials: 'OA',
    bio: '10 years advising sovereign wealth funds and family offices across the GCC. Fluent in Arabic, English, and French. Expert in Sharia-compliant structuring, Islamic finance instruments, and Gulf market entry. Leads Sterling Oak\'s DIFC-based operations, serving sovereign entities and prominent family offices across the Gulf.',
    specializations: ['Sovereign Advisory', 'Islamic Finance', 'Gulf Market Entry'],
    education: [
      'CFA Charterholder',
      'Chartered Alternative Investment Analyst',
    ],
    location: 'Dubai',
  },
  {
    id: 'layla-hassan',
    name: 'Dr. Layla Hassan',
    title: 'Head of ESG & Sustainability',
    credentials: 'PhD, CFA ESG Certificate',
    initials: 'LH',
    bio: 'Former sustainability lead at a major Egyptian conglomerate. Published researcher on ESG frameworks in emerging markets. Leads Sterling Oak\'s ESG and sustainability practice, advising corporations and sovereigns on ESG strategy, carbon reduction roadmaps, and sustainable finance structuring across MENA.',
    specializations: ['ESG Strategy', 'Sustainable Finance', 'Carbon Markets'],
    education: [
      'PhD, Environmental Economics',
      'CFA ESG Investing Certificate',
    ],
    location: 'Cairo',
  },
  {
    id: 'karim-mansour',
    name: 'Karim Mansour',
    title: 'Head of Digital Transformation',
    credentials: 'MBA (INSEAD), PMP',
    initials: 'KM',
    bio: '14 years in technology consulting across the Gulf and broader MENA. Led the $400M government health insurance digitalisation programme. Expert in AI and automation strategy for financial services. Heads Sterling Oak\'s digital transformation practice, bridging the gap between business strategy and technology execution.',
    specializations: ['Digital Strategy', 'Technology Advisory', 'Government Digitalisation'],
    education: [
      'MBA, INSEAD',
      'Project Management Professional (PMP)',
    ],
    location: 'Dubai',
  },
]
