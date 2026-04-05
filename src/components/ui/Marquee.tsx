import type { FC, ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode[];
  className?: string;
}

const Marquee: FC<MarqueeProps> = ({ children, className = '' }) => {
  const items = children.map((child, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span>{child}</span>
      <span className="text-oak text-sm select-none" aria-hidden="true">
        &#9670;
      </span>
    </span>
  ));

  return (
    <div
      className={`bg-dark text-warm-white overflow-hidden py-4 ${className}`}
    >
      <div className="flex items-center gap-8 marquee-track">
        <div className="flex items-center gap-8 shrink-0 animate-marquee">
          {items}
        </div>
        <div className="flex items-center gap-8 shrink-0 animate-marquee" aria-hidden="true">
          {items}
        </div>
      </div>

      <style>{`
        .marquee-track {
          width: max-content;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
