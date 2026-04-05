import type { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTag from './SectionTag';

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHero: FC<PageHeroProps> = ({ tag, title, subtitle, className = '' }) => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className={`relative w-full bg-dark text-warm-white py-[120px] pt-[180px] overflow-hidden ${className}`}
    >
      {/* CSS grid-line pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-content mx-auto px-6">
        <SectionTag label={tag} variant="light" />

        <motion.h1
          className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-4 max-w-2xl font-body text-light-gray text-lg"
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
