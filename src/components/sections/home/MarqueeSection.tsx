import type { FC } from 'react';
import Marquee from '../../ui/Marquee';

const items = [
  'Strategic Planning',
  'Financial Restructuring',
  'Mergers & Acquisitions',
  'Risk Management',
  'Wealth Planning',
  'Government Procurement',
  'Market Entry',
  'Capital Advisory',
  'Digitalisation Advisory',
  'ESG Advisory',
  'Debt Restructuring',
  'Capital Raising',
  'Digital Transformation',
];

const MarqueeSection: FC = () => {
  return (
    <section>
      <Marquee>
        {items.map((text) => (
          <span
            key={text}
            className="text-warm-white/80 uppercase tracking-widest text-sm font-body"
          >
            {text}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
