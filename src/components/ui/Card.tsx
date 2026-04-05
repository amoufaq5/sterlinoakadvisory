import type { FC, ReactNode } from 'react';

type CardVariant = 'service' | 'testimonial' | 'team' | 'insight' | 'case-study';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  service: [
    'bg-cream border border-border p-8',
    'hover:border-oak hover:shadow-sm',
    'transition-all duration-300 ease-in-out',
  ].join(' '),
  testimonial: [
    'bg-warm-white border border-border p-8',
    'hover:border-oak-light',
    'transition-all duration-300 ease-in-out',
  ].join(' '),
  team: [
    'bg-cream border border-border overflow-hidden',
    'hover:border-oak hover:shadow-sm',
    'transition-all duration-300 ease-in-out',
  ].join(' '),
  insight: [
    'bg-warm-white border border-border overflow-hidden',
    'hover:border-oak hover:shadow-sm',
    'transition-all duration-300 ease-in-out group',
  ].join(' '),
  'case-study': [
    'bg-cream border border-border p-8',
    'hover:border-oak hover:shadow-sm',
    'transition-all duration-300 ease-in-out',
  ].join(' '),
};

const Card: FC<CardProps> = ({ variant = 'service', children, className = '' }) => {
  return (
    <div className={`rounded-none ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
