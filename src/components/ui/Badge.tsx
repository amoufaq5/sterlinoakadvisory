import type { FC, ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-block rounded-none border border-oak text-oak font-body uppercase text-[9px] tracking-[0.2em] px-3 py-1 ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
