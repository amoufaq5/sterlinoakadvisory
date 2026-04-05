import type { FC } from 'react';
import { useRef, useEffect, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  label,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView, target, prefersReduced]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <span className="block font-display text-5xl font-light text-dark">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="block mt-2 font-body text-sm uppercase tracking-widest text-mid">
        {label}
      </span>
    </div>
  );
};

export default AnimatedCounter;
