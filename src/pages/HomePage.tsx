import type { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSEO } from '../lib/seo'
import HeroSection from '../components/sections/home/HeroSection'
import MarqueeSection from '../components/sections/home/MarqueeSection'
import StatsShowcaseSection from '../components/sections/home/StatsShowcaseSection'
import AboutSnapshotSection from '../components/sections/home/AboutSnapshotSection'
import ServicesOverviewSection from '../components/sections/home/ServicesOverviewSection'
import FeaturedInsightsSection from '../components/sections/home/FeaturedInsightsSection'
import ApproachSection from '../components/sections/home/ApproachSection'
import GlobalPresenceSection from '../components/sections/home/GlobalPresenceSection'
import LeadershipSection from '../components/sections/home/LeadershipSection'
import ClientTrustSection from '../components/sections/home/ClientTrustSection'
import IndustriesSection from '../components/sections/home/IndustriesSection'
import TestimonialsSection from '../components/sections/home/TestimonialsSection'
import AwardsSection from '../components/sections/home/AwardsSection'
import CTABandSection from '../components/sections/home/CTABandSection'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sterling Oak Advisory',
  founder: { '@type': 'Person', name: 'Dr. Abdelrahman Mawafk Aly' },
  foundingDate: '2026',
  url: 'https://www.sterling-oakadvisory.com',
  telephone: '+201000222724',
  email: 'hello@sterling-oakadvisory.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  areaServed: ['EG', 'GB', 'AE', 'SA'],
  sameAs: ['https://www.linkedin.com/company/sterling-oakadvisory'],
}

const HomePage: FC = () => {
  const seo = useSEO({
    path: '/',
    description:
      'Sterling Oak Advisory \u2014 bespoke financial and general counsel for corporations, sovereigns, and family offices across Egypt, the Gulf, and Europe. Cairo \u00b7 London \u00b7 Dubai \u00b7 Riyadh.',
  })

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <StatsShowcaseSection />
      <AboutSnapshotSection />
      <ServicesOverviewSection />
      <FeaturedInsightsSection />
      <ApproachSection />
      <GlobalPresenceSection />
      <LeadershipSection />
      <ClientTrustSection />
      <IndustriesSection />
      <TestimonialsSection />
      <AwardsSection />
      <CTABandSection />
    </>
  )
}

export default HomePage
