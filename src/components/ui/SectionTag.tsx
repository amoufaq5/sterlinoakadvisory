import type { FC } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface SectionTagProps {
  label: string;
  variant?: 'dark' | 'light';
  className?: string;
}

const SectionTag: FC<SectionTagProps> = ({ label, variant = 'dark', className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const textColor = variant === 'light' ? 'text-oak-light' : 'text-oak';
  const lineColor = variant === 'light' ? 'bg-oak-light' : 'bg-oak';

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-3 ${className}`}
      initial={prefersReduced ? false : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className={`inline-block w-8 h-px ${lineColor}`} />
      <span
        className={`font-body font-normal text-[11px] uppercase tracking-[0.2em] ${textColor}`}
      >
        {label}
      </span>
    </motion.div>
  );
};

export default SectionTag;
