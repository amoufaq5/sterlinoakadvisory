export interface ServiceData {
  id: string
  number: string
  slug: string
  title: string
  subtitle: string
  description: string
  overview: string[]
  included: string[]
  clientTypes: { title: string; description: string }[]
  approach: { step: string; title: string; description: string }[]
  relatedCaseStudies: string[]
}

export const services: ServiceData[] = [
  {
    id: 'business-advisory',
    number: '01',
    slug: 'business-advisory',
    title: 'General Business Advisory',
    subtitle: 'Strategy \u00b7 Operations \u00b7 Governance',
    description:
      'Bespoke strategic guidance for leadership teams navigating growth, restructuring, or transformation mandates.',
    overview: [
      'Sterling Oak Advisory provides senior-level strategic counsel to boards, C-suite executives, and ownership groups across Egypt, the Gulf, and Europe. Our general business advisory practice draws on decades of cross-sector experience to help organisations clarify strategic direction, strengthen governance frameworks, and execute complex operational transformations.',
      'We work with clients at inflection points \u2014 whether that is a founder preparing for institutional growth, a board navigating a restructuring, or a multinational adapting its operating model for the MENA region. Our approach is hands-on: we embed with leadership teams to ensure that strategy translates into measurable operational outcomes.',
      'Our advisory mandates are tailored to the specific context of each organisation. We bring deep regional knowledge, strong institutional relationships, and the discretion that prominent families and sovereign entities expect from their most trusted advisors.',
    ],
    included: [
      'Strategic planning and corporate strategy development',
      'Board advisory and corporate governance enhancement',
      'Organisational restructuring and operating model design',
      'Performance improvement and operational efficiency programmes',
      'Executive leadership coaching and management development',
      'Stakeholder communication and investor relations strategy',
      'Crisis management and turnaround advisory',
      'Regional expansion strategy and market assessment',
    ],
    clientTypes: [
      {
        title: 'Corporations & Conglomerates',
        description:
          'Listed and private corporations seeking board-level strategic counsel on growth, restructuring, or governance transformation across MENA and European markets.',
      },
      {
        title: 'Family-Owned Enterprises',
        description:
          'Prominent family businesses navigating generational transitions, professionalisation of management, or institutional growth while preserving founding values.',
      },
      {
        title: 'Government & Sovereign Entities',
        description:
          'Public sector bodies and sovereign wealth funds requiring independent advisory on strategic initiatives, institutional reform, and public-private partnerships.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Diagnostic & Discovery',
        description:
          'We conduct a comprehensive assessment of the organisation\u2019s strategic position, governance structure, operational capabilities, and competitive landscape. This includes confidential interviews with key stakeholders and a thorough review of financial and operational data.',
      },
      {
        step: '02',
        title: 'Strategy Formulation',
        description:
          'Based on our diagnostic findings, we develop a tailored strategic roadmap with clear priorities, measurable milestones, and accountability frameworks. We pressure-test every recommendation against regional market realities and the client\u2019s specific constraints.',
      },
      {
        step: '03',
        title: 'Execution & Oversight',
        description:
          'We remain engaged through the execution phase, working alongside leadership to ensure implementation stays on track. This includes regular progress reviews, course corrections, and ongoing advisory support until the mandate\u2019s objectives are fully realised.',
      },
    ],
    relatedCaseStudies: ['mena-market-entry'],
  },
  {
    id: 'financial-advisory',
    number: '02',
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    subtitle: 'Capital Markets \u00b7 Valuation \u00b7 Treasury',
    description:
      'Sophisticated financial guidance from capital structure optimisation to transaction readiness and investor relations.',
    overview: [
      'Our financial advisory practice serves corporations, family offices, and sovereign entities requiring institutional-grade financial guidance. From capital structure optimisation and treasury management to valuation analysis and transaction readiness, we deliver the rigour and sophistication that complex financial decisions demand.',
      'Sterling Oak operates at the intersection of Egyptian, Gulf, and European capital markets. We advise on debt and equity raising, financial restructuring, investor relations, and ongoing treasury strategy. Our team brings direct experience from leading investment banks and financial institutions, combined with deep understanding of regional capital flows and regulatory environments.',
      'Whether preparing a business for sale, raising growth capital, or optimising the balance sheet of a multi-entity conglomerate, we provide independent, conflict-free financial counsel that prioritises our clients\u2019 long-term interests above all else.',
    ],
    included: [
      'Capital structure analysis and optimisation',
      'Business valuation and fairness opinions',
      'Debt and equity capital raising advisory',
      'Treasury management and cash flow strategy',
      'Financial due diligence and transaction readiness',
      'Investor relations strategy and communication',
      'Financial modelling and scenario analysis',
      'Regulatory capital and compliance advisory',
    ],
    clientTypes: [
      {
        title: 'Mid-Market Corporates',
        description:
          'Companies with revenues between $50M and $1B seeking sophisticated financial advisory without the conflicts of interest inherent in large bank relationships.',
      },
      {
        title: 'Family Offices & Investment Vehicles',
        description:
          'Private investment offices requiring independent valuation, capital allocation guidance, and financial structuring across diversified portfolios.',
      },
      {
        title: 'Institutional Investors',
        description:
          'Private equity firms, sovereign wealth funds, and institutional investors seeking independent financial analysis, due diligence, and valuation support for MENA-focused transactions.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Financial Assessment',
        description:
          'We begin with a thorough review of the client\u2019s financial position, capital structure, cash flow dynamics, and strategic financial objectives. This includes benchmarking against industry peers and identifying areas of financial risk or opportunity.',
      },
      {
        step: '02',
        title: 'Structuring & Modelling',
        description:
          'Our team builds detailed financial models, evaluates capital structure alternatives, and develops actionable recommendations. Every scenario is stress-tested against market conditions, regulatory requirements, and the client\u2019s specific risk appetite.',
      },
      {
        step: '03',
        title: 'Execution & Market Access',
        description:
          'We leverage our extensive network of institutional investors, banks, and capital markets participants to support execution. From investor roadshows to negotiation support, we guide clients through every stage of the financial transaction.',
      },
    ],
    relatedCaseStudies: [
      'pharmaceutical-acquisition',
      'health-insurance-digitalisation',
    ],
  },
  {
    id: 'mergers-acquisitions',
    number: '03',
    slug: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    subtitle: 'Buy-side \u00b7 Sell-side \u00b7 Integration',
    description:
      'End-to-end M&A advisory with a track record in the pharmaceutical, technology, and financial services sectors.',
    overview: [
      'Sterling Oak\u2019s M&A practice has advised on some of the most significant transactions in the Egyptian and Gulf markets. We provide end-to-end advisory across the full transaction lifecycle \u2014 from target identification and strategic rationale through valuation, due diligence, negotiation, and post-merger integration.',
      'Our sector expertise spans pharmaceuticals, technology, financial services, and industrials. We understand the regulatory complexities of cross-border M&A in the MENA region, including competition authority approvals, foreign ownership restrictions, and sector-specific licensing requirements that can make or break a transaction.',
      'We act exclusively as an independent advisor, never as a principal. This ensures that our recommendations are always aligned with our client\u2019s strategic and financial interests, free from the conflicts that can arise when advisors have proprietary positions or lending relationships.',
    ],
    included: [
      'Target identification and strategic screening',
      'Buy-side and sell-side transaction advisory',
      'Valuation analysis and deal structuring',
      'Commercial and financial due diligence coordination',
      'Negotiation strategy and deal execution',
      'Regulatory approval and antitrust advisory',
      'Post-merger integration planning and execution',
    ],
    clientTypes: [
      {
        title: 'Strategic Acquirers',
        description:
          'Corporations and conglomerates pursuing acquisitions to expand market share, enter new geographies, or consolidate sector positions across Egypt, the Gulf, and broader MENA.',
      },
      {
        title: 'Private Equity & Financial Sponsors',
        description:
          'Regional and international PE firms seeking buy-side advisory, bolt-on acquisition support, and exit planning for MENA-based portfolio companies.',
      },
      {
        title: 'Business Owners & Founders',
        description:
          'Entrepreneurs and family-owned businesses considering a partial or full sale, seeking to maximise value while managing the complexity of multi-stakeholder transactions.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Strategic Rationale & Screening',
        description:
          'We work with clients to define clear acquisition or divestiture criteria, develop a target universe, and assess strategic fit. For sell-side mandates, we prepare comprehensive information memoranda and identify the optimal universe of potential buyers.',
      },
      {
        step: '02',
        title: 'Due Diligence & Valuation',
        description:
          'We coordinate all workstreams of the due diligence process, develop detailed valuation analyses using multiple methodologies, and structure transactions to optimise value, manage risk, and address regulatory requirements across all relevant jurisdictions.',
      },
      {
        step: '03',
        title: 'Negotiation & Integration',
        description:
          'We lead negotiations on behalf of our clients, manage deal documentation, and coordinate with legal counsel and regulatory advisors through to closing. Post-closing, we support integration planning to ensure that the strategic rationale of the transaction is fully realised.',
      },
    ],
    relatedCaseStudies: ['pharmaceutical-acquisition'],
  },
  {
    id: 'wealth-planning',
    number: '04',
    slug: 'wealth-planning',
    title: 'Wealth & Estate Planning',
    subtitle: 'Succession \u00b7 Trusts \u00b7 Tax Strategy',
    description:
      'Multi-jurisdictional wealth preservation and succession planning for prominent families and private clients across the Gulf and beyond.',
    overview: [
      'Prominent families in the MENA region face unique challenges in preserving and transferring wealth across generations. Diverse asset bases spanning multiple jurisdictions, evolving regulatory environments, complex family dynamics, and the intersection of civil, common, and Sharia law all demand a highly specialised advisory approach.',
      'Sterling Oak\u2019s wealth and estate planning practice serves ultra-high-net-worth families and private clients across Egypt, the Gulf, and Europe. We design comprehensive wealth preservation frameworks that integrate trust and foundation structures, tax-efficient holding arrangements, family governance protocols, and succession roadmaps tailored to each family\u2019s specific circumstances.',
      'Our approach is deeply personal and entirely confidential. We work directly with family principals, coordinating with their legal, tax, and banking advisors across jurisdictions to ensure that every element of the wealth plan is cohesive, compliant, and aligned with the family\u2019s long-term vision.',
    ],
    included: [
      'Multi-jurisdictional succession planning and wealth transfer',
      'Trust, foundation, and holding structure design',
      'Family governance framework and charter development',
      'Tax-efficient structuring across civil, common, and Sharia law',
      'Philanthropic planning and endowment advisory',
      'Next-generation education and preparation programmes',
      'Coordination with legal, tax, and banking advisors',
      'Confidential family mediation and dispute resolution',
    ],
    clientTypes: [
      {
        title: 'Ultra-High-Net-Worth Families',
        description:
          'Prominent families with diversified assets across multiple jurisdictions seeking comprehensive wealth preservation, governance, and succession planning.',
      },
      {
        title: 'Family Offices',
        description:
          'Single and multi-family offices requiring strategic advisory on investment governance, operational structure, and inter-generational wealth transfer.',
      },
      {
        title: 'Private Clients & Entrepreneurs',
        description:
          'Successful entrepreneurs and private individuals planning for liquidity events, estate structuring, or the transition of business and personal assets to the next generation.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Family Discovery & Mapping',
        description:
          'We begin with a confidential discovery process, mapping the family\u2019s asset base, ownership structures, jurisdictional exposure, family dynamics, and long-term objectives. This includes interviews with family principals and a review of existing legal and financial arrangements.',
      },
      {
        step: '02',
        title: 'Structure Design & Planning',
        description:
          'We design a comprehensive wealth plan integrating trust and holding structures, tax-efficient arrangements, family governance protocols, and succession roadmaps. Every recommendation is tailored to the family\u2019s specific cultural, legal, and financial context.',
      },
      {
        step: '03',
        title: 'Implementation & Stewardship',
        description:
          'We coordinate implementation across all advisors and jurisdictions, ensuring that legal documentation, regulatory filings, and operational arrangements are executed to the highest standard. We remain engaged as long-term stewards, providing ongoing review and adaptation as circumstances evolve.',
      },
    ],
    relatedCaseStudies: ['multi-generational-succession'],
  },
  {
    id: 'risk-compliance',
    number: '05',
    slug: 'risk-compliance',
    title: 'Risk & Compliance',
    subtitle: 'Regulatory \u00b7 Operational \u00b7 ESG Risk',
    description:
      'Identifying, quantifying, and mitigating risks \u2014 from Egyptian regulatory exposure to cross-border operational vulnerability.',
    overview: [
      'The regulatory landscape across Egypt, the Gulf, and broader MENA is evolving rapidly. New compliance requirements, heightened enforcement, and increasing scrutiny of corporate governance and ESG practices mean that organisations must adopt a proactive, integrated approach to risk management.',
      'Sterling Oak\u2019s risk and compliance practice helps clients identify, quantify, and mitigate regulatory, operational, and ESG risks. We conduct comprehensive risk assessments, design compliance frameworks, and support organisations in building the internal capabilities needed to manage risk on an ongoing basis.',
      'Our team brings direct experience from regulatory authorities, financial institutions, and multinational corporations. We understand the practical realities of compliance in the region \u2014 where regulation is often principles-based, enforcement is relationship-driven, and the gap between formal requirements and actual practice can create significant exposure.',
    ],
    included: [
      'Regulatory risk assessment and compliance gap analysis',
      'Anti-money laundering (AML) and sanctions compliance frameworks',
      'ESG risk assessment and sustainability reporting',
      'Operational risk mapping and mitigation planning',
      'Internal audit and controls enhancement',
      'Regulatory engagement and licensing advisory',
      'Third-party and supply chain risk management',
      'Compliance training and culture programmes',
    ],
    clientTypes: [
      {
        title: 'Financial Institutions',
        description:
          'Banks, insurance companies, and financial services firms navigating evolving regulatory requirements across Egyptian and Gulf jurisdictions.',
      },
      {
        title: 'Multinational Corporations',
        description:
          'International companies operating in the MENA region requiring robust compliance frameworks that satisfy both local regulatory expectations and global corporate standards.',
      },
      {
        title: 'Government & Public Entities',
        description:
          'Public sector organisations strengthening governance, procurement compliance, and operational risk management in line with international best practice.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Risk Assessment & Mapping',
        description:
          'We conduct a comprehensive assessment of the organisation\u2019s risk landscape, including regulatory exposure, operational vulnerabilities, ESG risks, and third-party dependencies. This produces a prioritised risk register and a clear picture of the organisation\u2019s current risk posture.',
      },
      {
        step: '02',
        title: 'Framework Design & Gap Closure',
        description:
          'We design or enhance the organisation\u2019s compliance and risk management framework, addressing identified gaps and aligning with applicable regulatory requirements and international best practice. This includes policies, procedures, controls, and reporting mechanisms.',
      },
      {
        step: '03',
        title: 'Embedding & Monitoring',
        description:
          'We support the organisation in embedding the risk and compliance framework into daily operations, including training, technology enablement, and ongoing monitoring. We establish key risk indicators and reporting cadences to ensure sustained compliance and early warning of emerging risks.',
      },
    ],
    relatedCaseStudies: ['health-insurance-digitalisation'],
  },
  {
    id: 'market-entry',
    number: '06',
    slug: 'market-entry',
    title: 'Market Entry & Expansion',
    subtitle: 'Research \u00b7 Partnerships \u00b7 Localisation',
    description:
      'Go-to-market strategy for companies entering Egypt, the Gulf, or broader MENA markets. Regulatory, partnership, and localisation roadmaps.',
    overview: [
      'Entering the MENA region presents extraordinary opportunity alongside significant complexity. Each market has distinct regulatory frameworks, commercial customs, competitive dynamics, and cultural expectations. A strategy that works in Dubai may fail in Cairo. A partnership model suited to Saudi Arabia may be irrelevant in Egypt.',
      'Sterling Oak\u2019s market entry and expansion practice helps international companies navigate these complexities with confidence. We develop comprehensive go-to-market strategies that cover market assessment, regulatory roadmaps, partner identification, localisation requirements, and operational setup \u2014 all grounded in real on-the-ground experience.',
      'Our team has supported market entries across technology, healthcare, financial services, and consumer sectors. We leverage deep institutional relationships with regulators, business leaders, and intermediaries across Egypt, the Gulf, and North Africa to ensure that our clients enter each market with the right partners, the right structure, and the right strategy.',
    ],
    included: [
      'Market assessment and opportunity sizing',
      'Regulatory landscape analysis and licensing roadmaps',
      'Strategic partner identification and due diligence',
      'Localisation strategy including staffing and operations',
      'Joint venture and partnership structuring',
      'Government relations and stakeholder mapping',
      'Competitive landscape and positioning analysis',
      'Operational setup and launch programme management',
    ],
    clientTypes: [
      {
        title: 'International Technology Companies',
        description:
          'Global technology firms seeking to establish or expand operations in the MENA region, navigating data localisation requirements, licensing, and local partnership structures.',
      },
      {
        title: 'Healthcare & Life Sciences',
        description:
          'Pharmaceutical, medical device, and healthcare services companies entering Egyptian or Gulf markets, requiring regulatory pathway guidance and distribution partner identification.',
      },
      {
        title: 'Financial Services & Fintech',
        description:
          'Banks, insurers, and fintech companies expanding into MENA markets, requiring central bank licensing support, local partner arrangements, and regulatory compliance frameworks.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Market Intelligence & Assessment',
        description:
          'We conduct detailed market research covering demand dynamics, competitive landscape, regulatory environment, and cultural factors. This analysis produces a clear picture of the opportunity, the risks, and the optimal entry model for each target market.',
      },
      {
        step: '02',
        title: 'Strategy & Partner Selection',
        description:
          'We develop a comprehensive go-to-market strategy, including entity structure, licensing roadmap, partner shortlist, and localisation plan. We conduct due diligence on potential partners and facilitate introductions with key stakeholders and regulatory bodies.',
      },
      {
        step: '03',
        title: 'Launch & Establishment',
        description:
          'We support execution through entity incorporation, regulatory filings, partner agreement negotiation, and operational setup. We remain engaged through the initial operating period to ensure that the market entry strategy translates into commercial traction.',
      },
    ],
    relatedCaseStudies: ['mena-market-entry'],
  },
]
