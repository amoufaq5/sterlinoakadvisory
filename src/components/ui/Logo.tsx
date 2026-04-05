import type { FC } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

const sizeConfig = {
  sm: { svg: 28, gap: 'gap-2', line1: 'text-sm', line2: 'text-[9px]' },
  md: { svg: 38, gap: 'gap-3', line1: 'text-lg', line2: 'text-[10px]' },
  lg: { svg: 52, gap: 'gap-4', line1: 'text-2xl', line2: 'text-xs' },
} as const;

const Logo: FC<LogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const cfg = sizeConfig[size];
  const s = cfg.svg;
  const half = s / 2;
  const outerR = half * 0.92;
  const innerR = half * 0.38;

  const wordmarkColor = variant === 'light' ? 'text-white' : 'text-dark';
  const accentColor = 'text-oak';

  return (
    <a href="/" aria-label="Sterling Oak Advisory" className={`flex items-center ${cfg.gap}`}>
      <svg
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer diamond — rotated square, stroke only */}
        <rect
          x={half}
          y={half - outerR}
          width={outerR * Math.SQRT2}
          height={outerR * Math.SQRT2}
          transform={`rotate(45 ${half} ${half})`}
          className="stroke-oak"
          strokeWidth={1.5}
          fill="transparent"
        />
        {/* Inner diamond — solid fill */}
        <rect
          x={half}
          y={half - innerR}
          width={innerR * Math.SQRT2}
          height={innerR * Math.SQRT2}
          transform={`rotate(45 ${half} ${half})`}
          className="fill-oak"
        />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-display font-medium tracking-wide ${cfg.line1} ${wordmarkColor}`}
        >
          STERLING OAK
        </span>
        <span
          className={`font-body font-normal tracking-widest ${cfg.line2} ${accentColor}`}
          style={{ fontVariant: 'small-caps' }}
        >
          ADVISORY
        </span>
      </div>
    </a>
  );
};

export default Logo;
