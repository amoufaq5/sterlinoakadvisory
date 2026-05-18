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
  {
    id: 'esg-advisory',
    number: '07',
    slug: 'esg-advisory',
    title: 'ESG & Sustainability Advisory',
    subtitle: 'ESG Strategy · Carbon & Climate · Sustainable Finance',
    description:
      'Comprehensive ESG advisory helping corporations, sovereigns, and financial institutions across MENA navigate the transition to sustainable, responsible business practices.',
    overview: [
      'The MENA region is undergoing a fundamental shift in how businesses, governments, and investors approach environmental, social, and governance considerations. Saudi Vision 2030 and the UAE’s COP28 legacy have accelerated ESG adoption across the Gulf, while Egypt’s national climate strategy and growing green finance market are creating new disclosure expectations for corporates and financial institutions alike.',
      'For MENA-headquartered companies with European exposure, the EU Corporate Sustainability Reporting Directive (CSRD) introduces binding ESG disclosure obligations that extend well beyond voluntary reporting. Simultaneously, ESG due diligence is becoming a standard component of M&A transactions, and green bond and sustainable sukuk issuances are reshaping capital markets across the region.',
      'Sterling Oak provides independent ESG counsel free from the audit conflicts that constrain Big 4 firms. We help clients develop credible ESG strategies grounded in materiality, design carbon reduction roadmaps aligned with international frameworks, and structure sustainable finance instruments that meet both Sharia compliance and green taxonomy requirements.',
    ],
    included: [
      'ESG strategy development & materiality assessment',
      'Carbon footprint measurement & reduction roadmaps',
      'Sustainability reporting (GRI/SASB/ISSB frameworks)',
      'ESG due diligence for M&A transactions',
      'Green bond & sustainable sukuk advisory',
      'ESG risk integration for investment portfolios',
      'Regulatory compliance (EU CSRD, Saudi ESG disclosure)',
      'Stakeholder engagement & ESG communication',
    ],
    clientTypes: [
      {
        title: 'Corporations Preparing for ESG Disclosure',
        description:
          'Listed and private corporations preparing for mandatory or voluntary ESG disclosure requirements across MENA and European jurisdictions, seeking to build credible sustainability strategies that withstand investor and regulatory scrutiny.',
      },
      {
        title: 'Financial Institutions',
        description:
          'Banks, asset managers, and insurance companies integrating ESG factors into investment processes, credit risk assessment, and product development in line with regional and international sustainability standards.',
      },
      {
        title: 'Government & Sovereign Entities',
        description:
          'Government entities and sovereign wealth funds aligning institutional mandates with national sustainability commitments, climate pledges, and international ESG benchmarks.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'ESG Materiality Assessment',
        description:
          'We conduct a rigorous materiality assessment to identify the ESG topics most relevant to the organisation’s industry, geography, and stakeholder base. This includes peer benchmarking, regulatory horizon scanning, and structured engagement with internal and external stakeholders to establish a prioritised ESG agenda.',
      },
      {
        step: '02',
        title: 'Strategy & Framework Design',
        description:
          'Based on the materiality findings, we design a comprehensive ESG strategy with measurable targets, governance structures, and reporting frameworks aligned with GRI, SASB, ISSB, and applicable regional standards. For sustainable finance mandates, we structure green bond or sukuk frameworks that satisfy both investor expectations and Sharia requirements.',
      },
      {
        step: '03',
        title: 'Implementation & Reporting',
        description:
          'We support the organisation in embedding ESG practices into operations, supply chains, and investment processes. This includes data collection and reporting systems, stakeholder communication strategies, and ongoing monitoring to ensure that ESG commitments translate into demonstrable progress and regulatory compliance.',
      },
    ],
    relatedCaseStudies: ['health-insurance-digitalisation'],
  },
  {
    id: 'debt-restructuring',
    number: '08',
    slug: 'debt-restructuring',
    title: 'Debt Advisory & Restructuring',
    subtitle: 'Restructuring · Creditor Negotiation · Islamic Finance',
    description:
      'Independent debt advisory for corporates navigating financial distress, liability management, and complex restructuring across Egypt and the Gulf.',
    overview: [
      'Egypt’s macroeconomic restructuring — marked by successive EGP devaluations and an expanded IMF programme — has left many corporates with unsustainable FX-denominated debt burdens. Across the Gulf, shifts in commodity prices, post-pandemic overcapacity, and tightening credit conditions have created a growing pipeline of restructuring mandates requiring independent, sophisticated advisory.',
      'Sterling Oak provides conflict-free debt advisory to corporates, creditor groups, and financial sponsors navigating complex restructuring situations. Unlike bank-affiliated advisors who may have lending exposure or syndication conflicts, we act exclusively in our clients’ interests. Our team combines CFA-level financial discipline with deep regional experience in creditor negotiation, intercreditor dynamics, and the regulatory frameworks governing insolvency across Egypt, Saudi Arabia, and the UAE.',
      'We bring particular expertise in Islamic finance structuring, advising on Sukuk, Murabaha, and Ijara arrangements that require restructuring within Sharia-compliant parameters. Whether the mandate involves a consensual liability management exercise or a contentious multi-creditor negotiation, we provide the analytical rigour and negotiation capability needed to achieve optimal outcomes.',
    ],
    included: [
      'Corporate debt restructuring & liability management',
      'Creditor committee advisory & negotiation',
      'Distressed asset advisory & turnaround strategy',
      'Refinancing & capital structure optimisation',
      'Islamic finance structuring (Sukuk, Murabaha, Ijara)',
      'Intercreditor agreement advisory',
      'Cash flow forecasting & viability assessment',
      'Cross-border insolvency coordination',
    ],
    clientTypes: [
      {
        title: 'Corporates in Financial Distress',
        description:
          'Corporations facing financial distress or overleveraged balance sheets, requiring independent advisory to negotiate with creditors, restructure obligations, and restore financial viability.',
      },
      {
        title: 'Creditor Groups',
        description:
          'Creditor committees and bondholder groups seeking independent assessment of restructuring proposals, recovery analysis, and negotiation support to protect their interests in complex multi-party situations.',
      },
      {
        title: 'Private Equity Sponsors',
        description:
          'Private equity firms and financial sponsors managing portfolio company debt challenges, including covenant breaches, refinancing risk, and distressed exits requiring structured liability solutions.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Financial Assessment & Stakeholder Mapping',
        description:
          'We conduct a detailed assessment of the company’s financial position, debt maturity profile, covenant structure, and liquidity runway. Simultaneously, we map the full creditor landscape, identify key decision-makers, and assess the dynamics that will shape negotiation outcomes.',
      },
      {
        step: '02',
        title: 'Restructuring Strategy & Negotiation',
        description:
          'We develop a comprehensive restructuring strategy encompassing debt rescheduling, write-downs, debt-for-equity conversions, or new money injections as appropriate. We lead or support negotiations with creditors, prepare detailed proposals, and manage the iterative process of reaching a consensual agreement.',
      },
      {
        step: '03',
        title: 'Execution & Monitoring',
        description:
          'We coordinate the implementation of the agreed restructuring terms, working with legal counsel to document new arrangements and ensure regulatory compliance. Post-restructuring, we provide ongoing monitoring of financial covenants, cash flow performance, and creditor reporting to ensure the business remains on a sustainable trajectory.',
      },
    ],
    relatedCaseStudies: ['pharmaceutical-acquisition'],
  },
  {
    id: 'capital-raising',
    number: '09',
    slug: 'capital-raising',
    title: 'Capital Raising & IPO Advisory',
    subtitle: 'IPO · Private Placement · Equity & Debt Capital Markets',
    description:
      'End-to-end capital raising advisory from pre-IPO readiness through listing and beyond — across EGX, Tadawul, ADX, and international exchanges.',
    overview: [
      'Capital markets across the MENA region are experiencing a period of unprecedented activity. Egypt’s privatisation programme targeting $2B+ in state asset sales, Saudi Tadawul’s emergence as the region’s premier listing venue, and sustained momentum on the ADX and DFM are creating a favourable environment for both public offerings and private capital transactions.',
      'Sterling Oak’s capital raising practice provides end-to-end advisory from pre-IPO readiness assessment through listing and beyond. We prepare companies for public market scrutiny — strengthening financial reporting, developing compelling equity stories, building financial models that withstand institutional investor diligence, and designing investor marketing strategies that generate competitive demand.',
      'Critically, Sterling Oak does not underwrite or distribute securities, which means our advice on bookrunner selection, pricing, and allocation is entirely independent. We help clients select the right syndicate, negotiate optimal fee structures, and ensure that the capital raising process serves the company’s long-term interests rather than the short-term incentives of the underwriting banks.',
    ],
    included: [
      'IPO readiness assessment & gap analysis',
      'Financial model development & equity story',
      'Bookrunner & underwriter selection advisory',
      'Investor marketing strategy & roadshow preparation',
      'Private placement structuring & execution',
      'Dual-listing advisory (EGX, Tadawul, ADX, LSE)',
      'Regulatory & listing requirements compliance',
      'Post-IPO investor relations strategy',
    ],
    clientTypes: [
      {
        title: 'State-Owned Enterprises',
        description:
          'Government-owned companies preparing for privatisation through public offerings, requiring independent advisory on readiness, valuation, and syndicate selection to maximise proceeds and ensure transparent execution.',
      },
      {
        title: 'Growth-Stage Companies',
        description:
          'High-growth companies seeking equity or debt capital to fund expansion, requiring sophisticated advisory on optimal capital structure, instrument selection, and investor targeting across regional and international markets.',
      },
      {
        title: 'Family-Owned Businesses',
        description:
          'Family-owned enterprises considering public listing as a means of accessing growth capital, providing liquidity to shareholders, or enhancing corporate profile and governance standards.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Readiness Assessment & Positioning',
        description:
          'We assess the company’s readiness for capital markets across all dimensions — financial reporting, corporate governance, management depth, and equity story. We identify gaps and develop a structured remediation plan, ensuring the company presents to investors from a position of strength.',
      },
      {
        step: '02',
        title: 'Marketing & Execution',
        description:
          'We develop the investor marketing strategy, prepare roadshow materials, and advise on bookrunner selection and mandate structure. During execution, we provide independent counsel on pricing, allocation, and syndicate management to ensure the client achieves optimal terms.',
      },
      {
        step: '03',
        title: 'Post-Transaction Support',
        description:
          'Following completion of the capital raise, we support the client in establishing investor relations capabilities, managing analyst coverage, and maintaining capital markets credibility. For IPOs, this includes guidance on post-listing disclosure obligations, earnings communication, and ongoing shareholder engagement.',
      },
    ],
    relatedCaseStudies: ['pharmaceutical-acquisition', 'mena-market-entry'],
  },
  {
    id: 'digital-transformation',
    number: '10',
    slug: 'digital-transformation',
    title: 'Digital Transformation Advisory',
    subtitle: 'Digital Strategy · Technology Procurement · AI & Automation',
    description:
      'Strategic technology advisory bridging the gap between business objectives and digital implementation — from enterprise transformation to government digitalisation mandates.',
    overview: [
      'The MENA region is investing over $40B annually in digital transformation, driven by national digitalisation mandates across Egypt, Saudi Arabia, and the UAE. Yet many organisations struggle to bridge the gap between ambitious technology visions and practical implementation — technology consultants often lack strategic business context, while management consultants frequently lack the technical depth to evaluate vendor claims and architecture decisions.',
      'Sterling Oak’s digital transformation practice occupies this critical intersection. We provide strategic technology advisory that starts with business objectives and works backward to technology solutions, not the other way around. Our $400M health insurance digitalisation mandate demonstrates our ability to manage large-scale technology programmes from strategy through procurement and delivery oversight.',
      'Our advisory covers the full digital transformation landscape: AI and automation strategy, cybersecurity governance, cloud migration, IT operating model design, and technology vendor selection. We act as an independent counterweight to technology vendors and systems integrators, ensuring that our clients’ interests are protected throughout the procurement and implementation lifecycle.',
    ],
    included: [
      'Digital transformation strategy & roadmap',
      'Technology vendor selection & procurement advisory',
      'AI and automation strategy development',
      'Cybersecurity governance & risk assessment',
      'Cloud migration strategy & vendor management',
      'IT governance framework design',
      'Digital programme management & oversight',
      'Data strategy & analytics capability building',
    ],
    clientTypes: [
      {
        title: 'Government Entities',
        description:
          'Government bodies undertaking national digitalisation programmes, requiring independent advisory on technology strategy, vendor selection, and programme governance to ensure public funds deliver intended outcomes.',
      },
      {
        title: 'Corporates Modernising Infrastructure',
        description:
          'Corporations modernising legacy technology infrastructure, seeking strategic guidance on platform selection, migration planning, and change management to minimise business disruption and maximise return on technology investment.',
      },
      {
        title: 'Financial Institutions',
        description:
          'Banks, insurers, and financial services firms pursuing digital banking transformation, requiring advisory on fintech partnerships, core system modernisation, and regulatory technology compliance.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Digital Maturity Assessment',
        description:
          'We assess the organisation’s current digital maturity across technology infrastructure, data capabilities, process automation, and digital talent. This produces a clear baseline, identifies critical gaps, and benchmarks the organisation against sector peers and best practice.',
      },
      {
        step: '02',
        title: 'Strategy & Vendor Selection',
        description:
          'We develop a prioritised digital transformation roadmap aligned with business strategy, including build-versus-buy decisions, vendor evaluation frameworks, and investment sequencing. For major procurements, we manage the RFP process and provide independent evaluation of vendor proposals.',
      },
      {
        step: '03',
        title: 'Programme Oversight & Delivery',
        description:
          'We provide ongoing programme oversight to ensure that implementation stays aligned with strategic objectives, timelines, and budgets. This includes vendor performance management, risk escalation, change management support, and regular reporting to senior leadership and board stakeholders.',
      },
    ],
    relatedCaseStudies: ['health-insurance-digitalisation', 'mena-market-entry'],
  },
]
