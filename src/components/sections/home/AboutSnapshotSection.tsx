import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

const values = [
  {
    title: 'Integrity First',
    description: 'Conflict-free counsel. Your interests, exclusively.',
  },
  {
    title: 'Senior-Led Delivery',
    description: 'Partners lead every engagement — always.',
  },
  {
    title: 'MENA-Rooted Expertise',
    description: 'Deep local intelligence across Egypt and the Gulf.',
  },
  {
    title: 'Global Standards',
    description: 'CFA, MBA, and international best-practice frameworks.',
  },
];

const AboutSnapshotSection: FC = () => {
  return (
    <section id="about" className="bg-warm-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <SectionTag label="Our Foundation" />
            <ScrollReveal>
              <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
                Founded in Cairo.
                <br />
                Built for the World.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 font-body text-mid text-[15px] leading-relaxed">
                Sterling Oak Advisory was established in Cairo in 2026 by
                Dr.&nbsp;Abdelrahman Mawafk Aly, CFA — a dealmaker with a
                record spanning pharmaceutical M&amp;A, governmental
                digitalisation, and private family wealth. The firm was built on
                a conviction that Egypt and the wider MENA region deserve
                advisory of world-class calibre.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-body text-mid text-[15px] leading-relaxed">
                We operate from Cairo, with subsidiaries in London and Dubai, and
                a Riyadh office opening imminently. Every engagement is led by
                senior principals — not delegated downward.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column — value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-cream p-8 border-l-2 border-oak transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="font-display text-xl font-medium text-dark">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-mid leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshotSection;
