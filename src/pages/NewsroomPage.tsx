import type { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { useSEO } from '../lib/seo';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTag from '../components/ui/SectionTag';
import Badge from '../components/ui/Badge';

/* ───────────────────────── data ───────────────────────── */

interface NewsItem {
  date: string;
  headline: string;
  summary: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    date: 'May 2026',
    headline: 'Sterling Oak Advisory Opens Riyadh Representative Office',
    summary:
      'Expanding Gulf presence to serve Saudi Vision 2030 mandates and capital market advisory.',
    category: 'Expansion',
  },
  {
    date: 'April 2026',
    headline: 'Firm Completes 35th Advisory Engagement',
    summary:
      'Sterling Oak reaches a significant milestone, having advised on over $2 billion in aggregate transaction value since founding.',
    category: 'Milestone',
  },
  {
    date: 'April 2026',
    headline: 'Dr. Aly Publishes ESG Framework for MENA Corporates',
    summary:
      'New thought leadership piece outlines how regional companies can turn ESG compliance into competitive advantage.',
    category: 'Thought Leadership',
  },
  {
    date: 'March 2026',
    headline: 'Sterling Oak Appointed Advisor on $1.2B Tadawul IPO',
    summary:
      'Firm selected as independent IPO readiness advisor for a leading Saudi fintech company.',
    category: 'Mandate',
  },
  {
    date: 'March 2026',
    headline: 'Dubai Office (DIFC) Commences Operations',
    summary:
      'Regulated advisory operations begin from Dubai International Financial Centre, expanding Gulf coverage.',
    category: 'Expansion',
  },
  {
    date: 'February 2026',
    headline: 'FRA License Secured for Egyptian Operations',
    summary:
      'Sterling Oak receives full authorization from the Egyptian Financial Regulatory Authority.',
    category: 'Regulatory',
  },
];

interface EventItem {
  name: string;
  location: string;
  date: string;
  description: string;
  status: 'upcoming' | 'completed';
}

const events: EventItem[] = [
  {
    name: 'MENA Investment Forum 2026',
    location: 'Cairo',
    date: 'June 2026',
    description:
      "Dr. Aly keynotes on independent advisory's role in MENA capital formation",
    status: 'upcoming',
  },
  {
    name: 'Gulf Family Office Summit',
    location: 'Dubai',
    date: 'September 2026',
    description:
      'Panel: Multi-jurisdictional succession planning in the GCC',
    status: 'upcoming',
  },
  {
    name: 'CFA Institute Annual Conference',
    location: 'London',
    date: 'May 2026',
    description:
      'Presentation: ESG integration frameworks for emerging markets',
    status: 'completed',
  },
  {
    name: 'Egypt Capital Markets Conference',
    location: 'Cairo',
    date: 'March 2026',
    description:
      'Keynote: IPO readiness and corporate governance reform',
    status: 'completed',
  },
];

/* ───────────────────────── component ───────────────────────── */

const NewsroomPage: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const seo = useSEO({
    title: 'Newsroom',
    description:
      'Latest news, announcements, and media from Sterling Oak Advisory.',
    path: '/newsroom',
  });

  return (
    <>
      {seo}

      {/* ─── Hero ─── */}
      <PageHero tag="Media" title="Newsroom" />

      {/* ─── Section 1: Latest News ─── */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <SectionTag label="Company News" />

          <ScrollReveal>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl text-dark font-light leading-tight">
              Latest Announcements
            </h2>
          </ScrollReveal>

          <div className="mt-12">
            {newsItems.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <div
                  className={`py-8 ${idx < newsItems.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                    {/* Date */}
                    <span className="font-body text-sm text-light-gray uppercase tracking-wide shrink-0 sm:w-32 mb-2 sm:mb-0 sm:pt-1">
                      {item.date}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-dark font-medium leading-snug">
                        {item.headline}
                      </h3>
                      <p className="mt-2 font-body text-sm text-mid leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="mt-3">
                        <Badge>{item.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Speaking & Conferences ─── */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <SectionTag label="Speaking Engagements" />

          <ScrollReveal>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl text-dark font-light leading-tight">
              Conferences &amp; Events
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <motion.div
                  className="bg-warm-white p-8 border border-border h-full flex flex-col"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }
                  }
                  transition={{ duration: 0.25, ease: 'easeOut' as const }}
                >
                  {/* Status badge */}
                  <div className="mb-4">
                    {event.status === 'upcoming' ? (
                      <span className="inline-block rounded-none bg-oak text-cream font-body uppercase text-[9px] tracking-[0.2em] px-3 py-1">
                        Upcoming
                      </span>
                    ) : (
                      <span className="inline-block rounded-none bg-cream text-oak border border-oak font-body uppercase text-[9px] tracking-[0.2em] px-3 py-1">
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Event name */}
                  <h3 className="font-display text-lg text-dark font-medium leading-snug">
                    {event.name}
                  </h3>

                  {/* Location + date */}
                  <div className="mt-3 flex flex-wrap items-center gap-4 font-body text-sm text-light-gray">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="shrink-0" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="shrink-0" />
                      {event.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 font-body text-sm text-mid leading-relaxed flex-1">
                    {event.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Media Contact ─── */}
      <section className="bg-warm-white py-20 lg:py-32">
        <div className="mx-auto max-w-content px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl text-dark font-light leading-tight">
                Media Inquiries
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                For press inquiries, interview requests, or speaking engagement
                proposals:
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:press@sterling-oakadvisory.com"
                  className="flex items-center gap-2 font-body text-dark hover:text-oak transition-colors duration-300"
                >
                  <Mail size={18} className="text-oak" />
                  press@sterling-oakadvisory.com
                </a>

                <span className="hidden sm:block w-px h-5 bg-border" aria-hidden="true" />

                <a
                  href="tel:+201000222724"
                  className="flex items-center gap-2 font-body text-dark hover:text-oak transition-colors duration-300"
                >
                  <Phone size={18} className="text-oak" />
                  +20 (100) 022-2724
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsroomPage;
