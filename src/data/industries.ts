export interface Industry {
  slug: string
  name: string
  description: string
  challenges: string[]
  services: string[]
  stats: { value: string; label: string }
  caseStudySlugs: string[]
}

export const industries: Industry[] = [
  {
    slug: 'healthcare-pharmaceuticals',
    name: 'Healthcare & Pharmaceuticals',
    description:
      'The MENA healthcare sector is undergoing rapid transformation — driven by national health insurance expansion, pharmaceutical M&A consolidation, and regulatory harmonisation across jurisdictions. Sterling Oak advises on the full spectrum of healthcare transactions, from cross-border pharmaceutical acquisitions to hospital group restructurings, bringing deep understanding of the regulatory complexity that defines this sector.',
    challenges: [
      'Regulatory compliance across multiple jurisdictions with distinct pharmaceutical licensing, foreign ownership, and competition regimes',
      'Valuation of intellectual property portfolios, drug pipelines, and distribution networks in fragmented MENA markets',
      'Post-merger integration of healthcare operations while maintaining regulatory compliance and service continuity',
    ],
    services: ['mergers-acquisitions', 'financial-advisory', 'risk-compliance'],
    stats: { value: '$400M', label: 'Largest Healthcare Transaction' },
    caseStudySlugs: ['pharmaceutical-acquisition'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description:
      'Banking, insurance, and fintech across the MENA region are experiencing unprecedented disruption — from Egypt\'s evolving regulatory landscape and IMF-linked reforms to the Gulf\'s rapid adoption of digital banking and open finance frameworks. Sterling Oak advises financial institutions navigating restructuring, regulatory change, and digital transformation, with particular expertise in cross-border compliance and Islamic finance structuring.',
    challenges: [
      'Digital disruption from fintech challengers and evolving customer expectations requiring fundamental business model transformation',
      'Regulatory change across multiple jurisdictions including central bank licensing, capital adequacy, and AML/CFT compliance',
      'Cross-border compliance in an environment of increasing regulatory scrutiny, sanctions complexity, and data localisation requirements',
    ],
    services: ['financial-advisory', 'risk-compliance', 'digital-transformation', 'debt-restructuring'],
    stats: { value: '$320M', label: 'Debt Successfully Restructured' },
    caseStudySlugs: ['sovereign-debt-restructuring'],
  },
  {
    slug: 'technology',
    name: 'Technology & Software',
    description:
      'The Gulf\'s technology sector is experiencing exponential growth — fuelled by national digitisation agendas, sovereign venture capital, and a maturing fintech ecosystem. From Saudi Arabia\'s $6.4B venture capital market to Egypt\'s burgeoning SaaS and payments landscape, MENA technology companies are scaling rapidly and increasingly accessing public capital markets. Sterling Oak advises technology companies on IPO readiness, capital raising, and cross-border expansion.',
    challenges: [
      'IPO readiness and corporate governance transformation required to meet exchange listing standards and institutional investor expectations',
      'Scaling operations across MENA jurisdictions with varying data localisation, licensing, and local content requirements',
      'Investor relations and capital markets positioning for technology businesses with non-traditional revenue models and growth profiles',
    ],
    services: ['capital-raising', 'digital-transformation', 'market-entry'],
    stats: { value: '$1.2B', label: 'IPO Valuation Achieved' },
    caseStudySlugs: ['tech-ipo-advisory'],
  },
  {
    slug: 'government-public-sector',
    name: 'Government & Public Sector',
    description:
      'From Saudi Vision 2030 to Egypt\'s comprehensive modernisation programme, governments across the MENA region are undertaking transformative initiatives that require sophisticated advisory support. Sterling Oak advises government entities on digital transformation at scale, public-private partnership structuring, and programme governance — bringing the rigour of private sector advisory to public sector mandates.',
    challenges: [
      'Digital transformation at national scale requiring complex technology procurement, vendor management, and programme governance',
      'Public-private partnership structuring that balances fiscal sustainability, service quality, and private sector commercial viability',
      'Citizen service delivery modernisation while maintaining compliance with public procurement regulations and audit requirements',
    ],
    services: ['digital-transformation', 'business-advisory', 'risk-compliance'],
    stats: { value: '$400M', label: 'Government Programme Value' },
    caseStudySlugs: ['health-insurance-digitalisation'],
  },
  {
    slug: 'energy-utilities',
    name: 'Energy & Utilities',
    description:
      'The MENA energy sector is navigating a historic transition — from the Gulf\'s diversification away from hydrocarbon dependence to Egypt\'s ambitious renewable energy targets and green hydrogen strategy. Sterling Oak advises energy companies, utilities, and sovereign entities on transition strategy, ESG compliance, asset valuation, and the financial structuring required to fund the region\'s energy transformation.',
    challenges: [
      'Energy transition strategy balancing decarbonisation commitments with economic realities and existing hydrocarbon asset portfolios',
      'ESG compliance and sustainability reporting aligned with international frameworks while navigating region-specific expectations',
      'Asset valuation in a rapidly evolving market where traditional valuation methodologies must account for transition risk and stranded asset exposure',
    ],
    services: ['esg-advisory', 'financial-advisory', 'business-advisory'],
    stats: { value: 'Net Zero', label: 'Transition Advisory' },
    caseStudySlugs: [],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & Construction',
    description:
      'The MENA real estate sector encompasses some of the world\'s most ambitious development programmes — from Saudi Arabia\'s giga-projects and UAE mega-developments to Egypt\'s New Administrative Capital and new city initiatives. Sterling Oak advises developers, investors, and sovereign entities on project finance, market entry, cross-border investment structuring, and the financial advisory required to execute at scale.',
    challenges: [
      'Project finance structuring for large-scale developments requiring complex capital stacks, government incentives, and phased funding arrangements',
      'Market entry for international developers and investors navigating local partnership requirements, land ownership restrictions, and regulatory approvals',
      'Cross-border investment structuring optimising tax efficiency, repatriation, and regulatory compliance across multiple jurisdictions',
    ],
    services: ['financial-advisory', 'market-entry', 'capital-raising'],
    stats: { value: '$2.5B', label: 'Assets Under Advisory' },
    caseStudySlugs: [],
  },
  {
    slug: 'private-equity',
    name: 'Private Equity & Investment',
    description:
      'Private equity deal flow in the MENA region has matured significantly — with growing domestic GP activity, increasing international sponsor interest, and a deepening pool of institutional capital. Sterling Oak advises PE firms and financial sponsors on deal origination, due diligence, portfolio optimisation, and exit planning, bringing independent counsel that complements internal deal teams with regional expertise and on-the-ground intelligence.',
    challenges: [
      'Deal origination and proprietary pipeline development in markets where relationships, discretion, and local intelligence are critical to accessing quality opportunities',
      'Due diligence quality in environments with limited public data availability, requiring forensic financial analysis and deep sector knowledge',
      'Exit planning and value crystallisation across a range of exit routes including IPO, trade sale, and secondary buyout in developing capital markets',
    ],
    services: ['mergers-acquisitions', 'financial-advisory', 'capital-raising'],
    stats: { value: '35+', label: 'Engagements Completed' },
    caseStudySlugs: [],
  },
  {
    slug: 'family-offices',
    name: 'Family Offices & Private Wealth',
    description:
      'The Gulf and Egypt are home to some of the world\'s most significant concentrations of private wealth, with prominent families managing diversified portfolios across real estate, hospitality, financial services, and industrial holdings. Sterling Oak advises family offices and HNWI families on succession planning, multi-jurisdiction wealth structuring, ESG integration, and governance frameworks — with particular sensitivity to Sharia compliance and cultural context.',
    challenges: [
      'Generational transition and succession planning requiring formal governance frameworks, family charters, and structured decision-making protocols',
      'Multi-jurisdiction structuring across civil, common, and Sharia law systems with evolving tax, reporting, and beneficial ownership requirements',
      'Sharia compliance in wealth structuring, investment selection, and philanthropic planning alongside conventional regulatory and tax obligations',
    ],
    services: ['wealth-planning', 'esg-advisory', 'business-advisory'],
    stats: { value: '7', label: 'Jurisdictions Covered' },
    caseStudySlugs: ['multi-generational-succession', 'family-office-esg-integration'],
  },
]
