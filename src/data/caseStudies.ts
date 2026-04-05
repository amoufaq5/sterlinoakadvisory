export interface CaseStudy {
  id: string
  slug: string
  sector: string
  title: string
  description: string
  result: string
  resultLabel: string
  challenge: string
  approach: string
  outcome: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'pharmaceutical-acquisition',
    slug: 'pharmaceutical-acquisition',
    sector: 'Pharmaceuticals / M&A',
    title: 'Acquisition of a Pharmaceutical Distributor',
    description:
      'Lead advisor on the $800M acquisition of a pharmaceutical distribution company \u2014 managing valuation, cross-border regulatory approvals, and deal structuring across multiple jurisdictions.',
    result: '$800M',
    resultLabel: 'Transaction Value',
    challenge:
      'A leading pharmaceutical conglomerate sought to acquire one of the largest independent pharmaceutical distributors in the MENA region. The target operated across four countries, each with distinct regulatory regimes governing pharmaceutical distribution, foreign ownership, and competition. The acquirer needed to structure a transaction that would satisfy regulators in every jurisdiction while achieving a valuation acceptable to a fragmented shareholder base with divergent expectations.',
    approach:
      'Sterling Oak served as lead financial advisor, coordinating a cross-border advisory team spanning Cairo, Dubai, and London. We developed a multi-tranche acquisition structure that addressed foreign ownership restrictions in two jurisdictions while preserving operational continuity. Our team managed the valuation process using a combination of discounted cash flow analysis, precedent transactions, and market multiples \u2014 building consensus among stakeholders with a transparent, defensible methodology. We led all regulatory submissions and maintained direct engagement with competition authorities throughout the approval process.',
    outcome:
      'The transaction closed at $800M within nine months of mandate \u2014 a timeline considered exceptional for a multi-jurisdictional pharmaceutical acquisition in the region. All regulatory approvals were secured without conditions, and the post-merger integration plan we developed enabled the combined entity to realise $45M in annual synergies within the first eighteen months of operation. The acquisition has since been cited as a landmark transaction in MENA pharmaceutical M&A.',
  },
  {
    id: 'multi-generational-succession',
    slug: 'multi-generational-succession',
    sector: 'Family Office / Succession',
    title: 'Multi-Generational Succession Planning',
    description:
      'Designed a comprehensive wealth transfer and governance framework for a prominent Gulf family office spanning seven jurisdictions, integrating trust structures, tax efficiency, and family governance.',
    result: '7',
    resultLabel: 'Jurisdictions',
    challenge:
      'A prominent Gulf family with diversified assets spanning real estate, hospitality, financial services, and industrial holdings across seven jurisdictions faced a critical generational transition. The founding patriarch was preparing to transfer leadership and ownership to the second and third generations, but the family lacked a formal governance framework. Existing ownership structures had evolved organically over decades, creating significant tax exposure, succession risk, and potential for inter-family dispute.',
    approach:
      'Sterling Oak was engaged to design a comprehensive succession and wealth preservation framework. We began with an extensive family discovery process, conducting confidential interviews with twelve family members across three generations and mapping the complete asset and ownership structure. Working with specialist legal and tax advisors in each jurisdiction, we designed a multi-layered holding architecture incorporating trusts, foundations, and corporate vehicles optimised for each jurisdiction\u2019s legal and tax regime. We developed a family governance charter, established a family council and investment committee, and created clear protocols for decision-making, dispute resolution, and next-generation participation.',
    outcome:
      'The family adopted the full governance and succession framework within twelve months. The restructured holding architecture reduced cross-border tax exposure by an estimated 30% while ensuring full compliance across all seven jurisdictions. The family governance charter has been formally ratified by all family members, and the family council now meets quarterly. Two members of the third generation have been onboarded into active governance roles, ensuring long-term continuity of the family\u2019s legacy and values.',
  },
  {
    id: 'mena-market-entry',
    slug: 'mena-market-entry',
    sector: 'Technology / Market Entry',
    title: 'MENA Market Entry Strategy',
    description:
      'Developed full go-to-market strategy for a technology company entering the MENA region \u2014 including regulatory roadmap, partner identification, and localisation framework across four launch markets.',
    result: '4',
    resultLabel: 'Launch Markets',
    challenge:
      'A European enterprise software company with $200M in annual revenue sought to enter the MENA region for the first time. The company had no existing presence, partnerships, or regulatory relationships in the region. It needed to identify the most attractive markets, navigate data localisation and licensing requirements, find credible distribution and implementation partners, and establish a go-to-market operation capable of generating revenue within twelve months of launch.',
    approach:
      'Sterling Oak conducted a comprehensive market assessment across eight MENA markets, evaluating demand dynamics, competitive positioning, regulatory complexity, and ease of market entry. We narrowed the launch strategy to four priority markets: Egypt, Saudi Arabia, the UAE, and Morocco. For each market, we developed a detailed regulatory roadmap covering licensing, data localisation, and local content requirements. We identified and conducted due diligence on over twenty potential distribution and implementation partners, ultimately recommending a tiered partner model with a regional anchor partner and market-specific channel partners. We also designed the localisation framework, including Arabic language adaptation, local pricing strategy, and regional support operations.',
    outcome:
      'The company launched in all four markets within ten months of engaging Sterling Oak. First-year regional revenue exceeded initial projections by 40%, driven by strong partner-led pipeline development in Saudi Arabia and Egypt. The regulatory strategy we developed ensured that all necessary licences and data localisation certifications were secured ahead of each market launch, avoiding delays that competitors had experienced. The client has since expanded to two additional MENA markets using the framework we established.',
  },
  {
    id: 'health-insurance-digitalisation',
    slug: 'health-insurance-digitalisation',
    sector: 'Government / Digitalisation',
    title: 'Health Insurance Digitalisation',
    description:
      'Procurement advisory on a $400M mandate to digitalise a national health insurance authority \u2014 bridging public sector governance, technology procurement, and infrastructure rollout.',
    result: '$400M',
    resultLabel: 'Mandate Value',
    challenge:
      'A national health insurance authority embarked on an ambitious $400M programme to digitalise its entire operations \u2014 from beneficiary registration and claims processing to provider management and fraud detection. The programme required complex technology procurement across multiple workstreams, strict adherence to public sector governance and procurement regulations, and coordination between government stakeholders, international technology vendors, and local implementation partners. Previous attempts to advance the programme had stalled due to governance disputes and vendor management challenges.',
    approach:
      'Sterling Oak was appointed as independent procurement and programme advisory, reporting directly to the authority\u2019s board. We redesigned the procurement framework to ensure compliance with national public procurement law while incorporating international best practice for technology acquisitions of this scale. We developed detailed technical and commercial specifications for each workstream, managed a competitive tender process involving over thirty international and regional vendors, and established a rigorous evaluation methodology that balanced technical capability, cost, and local content commitments. Throughout the process, we maintained close coordination with the Ministry of Finance, the national IT authority, and international development partners providing co-financing.',
    outcome:
      'The programme was successfully procured and launched within eighteen months of Sterling Oak\u2019s engagement \u2014 overcoming a two-year prior stall. Three major technology contracts were awarded through a transparent, defensible process that withstood public audit scrutiny. The digitalisation programme is now operational, serving over twelve million beneficiaries. Claims processing times have been reduced by 60%, and the authority estimates annual savings of $50M from reduced fraud and administrative efficiency. The procurement framework we developed has since been adopted as a reference model for other national digitalisation initiatives.',
  },
]
