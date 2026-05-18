import type { FC } from 'react';
import { useSEO } from '../lib/seo';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import { accreditations, type Accreditation } from '../data/accreditations';

const categoryMeta: Record<
  Accreditation['category'],
  { label: string; heading: string }
> = {
  regulatory: {
    label: 'Regulatory',
    heading: 'Regulatory Licenses',
  },
  professional: {
    label: 'Professional',
    heading: 'Professional Certifications',
  },
  quality: {
    label: 'Quality',
    heading: 'Quality Standards',
  },
  strategic: {
    label: 'Strategic',
    heading: 'Strategic Commitments',
  },
};

const statusLabel: Record<Accreditation['status'], string> = {
  active: 'Active',
  'in-progress': 'In Progress',
  planned: 'Planned',
};

const statusClasses: Record<Accreditation['status'], string> = {
  active: 'bg-oak text-warm-white',
  'in-progress': 'border border-oak text-oak',
  planned: 'border border-light-gray text-light-gray',
};

function AccreditationCard({ item }: { item: Accreditation }) {
  return (
    <div className="bg-cream p-6 border-l-2 border-oak">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-display text-xl text-dark">{item.name}</h3>
          <p className="text-oak text-sm font-body mt-1">{item.issuer}</p>
        </div>
        <span
          className={`inline-block shrink-0 font-body uppercase text-[9px] tracking-[0.2em] px-3 py-1 ${statusClasses[item.status]}`}
        >
          {statusLabel[item.status]}
        </span>
      </div>
      <p className="font-body text-sm text-dark/80 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

const categories: Accreditation['category'][] = [
  'regulatory',
  'professional',
  'quality',
  'strategic',
];

const AccreditationsPage: FC = () => {
  const seo = useSEO({
    title: 'Accreditations & Licenses',
    path: '/accreditations',
  });

  return (
    <>
      {seo}
      <PageHero tag="Credentials" title="Accreditations & Licenses" />

      {/* Intro */}
      <section className="bg-warm-white py-20">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <p className="max-w-3xl font-body text-lg text-dark/80 leading-relaxed">
              Sterling Oak Advisory maintains the highest standards of regulatory
              compliance and professional accreditation. Our licenses,
              certifications, and memberships reflect our commitment to
              excellence and ensure that our clients receive advice from a firm
              that meets international best-practice standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category, catIdx) => {
        const meta = categoryMeta[category];
        const items = accreditations.filter((a) => a.category === category);

        return (
          <section
            key={category}
            className={`py-20 ${catIdx % 2 === 0 ? 'bg-warm-white' : 'bg-cream'}`}
          >
            <div className="max-w-content mx-auto px-6">
              <ScrollReveal>
                <SectionTag label={meta.label} />
                <h2 className="mt-4 font-display text-3xl sm:text-4xl text-dark font-light">
                  {meta.heading}
                </h2>
              </ScrollReveal>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <ScrollReveal key={item.id} delay={idx * 0.1}>
                    <AccreditationCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-dark py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-warm-white font-light">
              Work with a Credentialed Partner
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-body text-light-gray text-lg leading-relaxed">
              Our accreditations ensure that every engagement is backed by
              internationally recognised standards. Get in touch to learn how
              our credentials translate into results for your organisation.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline-oak" size="lg">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;
