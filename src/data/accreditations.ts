export interface Accreditation {
  id: string
  name: string
  issuer: string
  category: 'regulatory' | 'professional' | 'quality' | 'strategic'
  status: 'active' | 'in-progress' | 'planned'
  description: string
  relevance: string
}

export const accreditations: Accreditation[] = [
  // Regulatory Licenses
  {
    id: 'fra-license',
    name: 'FRA License',
    issuer: 'Egyptian Financial Regulatory Authority',
    category: 'regulatory',
    status: 'active',
    description:
      'Licensed by the Egyptian Financial Regulatory Authority to provide financial advisory, capital raising, and M&A advisory services in Egypt.',
    relevance: 'Core operating license for Egyptian market activities.',
  },
  {
    id: 'dfsa-authorisation',
    name: 'DFSA Authorisation',
    issuer: 'Dubai Financial Services Authority',
    category: 'regulatory',
    status: 'in-progress',
    description:
      'Authorised by the DFSA to provide advisory services from the Dubai International Financial Centre, enabling regulated counsel across the GCC.',
    relevance: 'Enables regulated advisory across the GCC from DIFC.',
  },
  {
    id: 'cma-license',
    name: 'CMA License',
    issuer: 'Saudi Capital Market Authority',
    category: 'regulatory',
    status: 'planned',
    description:
      'Licensed by the CMA to advise on securities transactions in the Kingdom of Saudi Arabia, supporting our Riyadh office operations.',
    relevance: 'Supports planned Riyadh office operations.',
  },

  // Professional Certifications
  {
    id: 'cfa-charterholder',
    name: 'CFA Institute',
    issuer: 'CFA Charterholder',
    category: 'professional',
    status: 'active',
    description:
      "Our founding principal holds the CFA designation, embedding the CFA Institute's Code of Ethics and Standards of Professional Conduct into every engagement.",
    relevance: 'Gold-standard investment analysis credential.',
  },
  {
    id: 'cfa-esg',
    name: 'CFA ESG Certificate',
    issuer: 'CFA Institute Certificate in ESG Investing',
    category: 'professional',
    status: 'in-progress',
    description:
      'Team-level certification validating our ESG advisory capabilities and commitment to responsible investment principles.',
    relevance: 'Validates ESG advisory capabilities.',
  },
  {
    id: 'step-membership',
    name: 'STEP Membership',
    issuer: 'Society of Trust and Estate Practitioners',
    category: 'professional',
    status: 'planned',
    description:
      'Membership in the global gold standard for trust, estate, and succession practitioners, validating our wealth planning practice.',
    relevance: 'Validates wealth planning and succession practice.',
  },
  {
    id: 'cisi-qualification',
    name: 'CISI Qualification',
    issuer: 'Chartered Institute for Securities & Investment',
    category: 'professional',
    status: 'in-progress',
    description:
      'UK regulatory qualification for our London subsidiary, ensuring compliance with FCA requirements for advisory services.',
    relevance: 'Ensures FCA compliance for London operations.',
  },

  // Quality Standards
  {
    id: 'iso-27001',
    name: 'ISO 27001',
    issuer: 'International Organization for Standardization',
    category: 'quality',
    status: 'in-progress',
    description:
      'Information security management system certification, required by government and sovereign clients for advisory mandates involving sensitive data.',
    relevance: 'Required for government and sovereign client mandates.',
  },
  {
    id: 'soc-2-type-ii',
    name: 'SOC 2 Type II',
    issuer: 'AICPA',
    category: 'quality',
    status: 'planned',
    description:
      'Service organisation controls certification demonstrating data security and privacy controls for technology advisory and government mandates.',
    relevance: 'Demonstrates data security controls for sensitive mandates.',
  },

  // Strategic Commitments
  {
    id: 'pri-signatory',
    name: 'PRI Signatory',
    issuer: 'UN Principles for Responsible Investment',
    category: 'strategic',
    status: 'planned',
    description:
      'Signatory to the United Nations-supported Principles for Responsible Investment, signalling commitment to ESG integration in advisory practice.',
    relevance: 'Signals commitment to ESG integration.',
  },
  {
    id: 'aaoifi-certification',
    name: 'AAOIFI Certification',
    issuer: 'Accounting and Auditing Organization for Islamic Financial Institutions',
    category: 'strategic',
    status: 'planned',
    description:
      'Certification in Sharia-compliant financial structuring, critical for Gulf family offices and Islamic finance advisory.',
    relevance: 'Critical for Islamic finance advisory in the Gulf.',
  },
]
