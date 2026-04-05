import type { FC } from 'react';

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`border-t border-border ${className}`} />;
};

export default Divider;
