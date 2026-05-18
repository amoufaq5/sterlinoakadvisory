import type { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedCounter from '../../ui/AnimatedCounter';
import Button from '../../ui/Button';
import { openCalendly } from '../../../lib/calendly';

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const tagVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const subheadlineVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const buttonContainerVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const ringsContainerVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const statsBarVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

/* ------------------------------------------------------------------ */
/*  Floating diamond config                                            */
/* ------------------------------------------------------------------ */

interface Diamond {
  size: number;
  top: string;
  left: string;
  opacity: number;
  duration: number;
  delay: number;
  yRange: number;
}

const diamonds: Diamond[] = [
  { size: 340, top: '8%', left: '5%', opacity: 0.04, duration: 18, delay: 0, yRange: 30 },
  { size: 220, top: '55%', left: '85%', opacity: 0.05, duration: 22, delay: 2, yRange: 24 },
  { size: 480, top: '30%', left: '60%', opacity: 0.03, duration: 26, delay: 1, yRange: 20 },
  { size: 160, top: '75%', left: '15%', opacity: 0.06, duration: 16, delay: 3, yRange: 36 },
  { size: 280, top: '12%', left: '72%', opacity: 0.04, duration: 20, delay: 0.5, yRange: 28 },
  { size: 200, top: '65%', left: '45%', opacity: 0.035, duration: 24, delay: 1.5, yRange: 22 },
];

/* ------------------------------------------------------------------ */
/*  Ring config                                                        */
/* ------------------------------------------------------------------ */

interface Ring {
  r: number;
  strokeWidth: number;
  dashArray: string;
  duration: number;
  reverse: boolean;
  opacity: number;
}

const rings: Ring[] = [
  { r: 185, strokeWidth: 0.5, dashArray: '6 14', duration: 70, reverse: false, opacity: 0.35 },
  { r: 158, strokeWidth: 0.4, dashArray: '2 18', duration: 55, reverse: true, opacity: 0.45 },
  { r: 130, strokeWidth: 0.6, dashArray: '10 8', duration: 42, reverse: false, opacity: 0.5 },
  { r: 102, strokeWidth: 0.35, dashArray: '3 20', duration: 35, reverse: true, opacity: 0.4 },
  { r: 76, strokeWidth: 0.5, dashArray: '1 12', duration: 28, reverse: false, opacity: 0.55 },
];

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */

interface Stat {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { target: 2, prefix: '$', suffix: 'B+', label: 'Assets Under Advisory' },
  { target: 35, suffix: '+', label: 'Engagements Delivered' },
  { target: 4, label: 'Global Offices' },
  { target: 10, label: 'Service Lines' },
  { target: 14, label: 'Industries Served' },
];

/* ------------------------------------------------------------------ */
/*  Headline word animation                                            */
/* ------------------------------------------------------------------ */

const headlineWords = [
  { text: 'Where', italic: false, oak: false },
  { text: 'Strategy', italic: false, oak: false },
  { text: 'Meets', italic: false, oak: false },
  { text: 'Enduring', italic: true, oak: true },
  { text: 'Prosperity', italic: true, oak: true },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const HeroSection: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const wordDelay = 0.08;
  const headlineStartDelay = 0.5;
  const headlineTotalDuration = headlineStartDelay + headlineWords.length * wordDelay + 0.5;
  const subheadlineDelay = headlineTotalDuration + 0.1;
  const buttonsDelay = subheadlineDelay + 0.3;
  const statsDelay = buttonsDelay + 0.4;
  const ringsDelay = 0.6;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark">
      {/* ---- Animated gradient mesh background ---- */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(196,154,40,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139,105,20,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(28,28,28,1) 0%, rgba(28,28,28,1) 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at var(--aurora-x, 30%) var(--aurora-y, 35%), rgba(196,154,40,0.07) 0%, transparent 100%)',
          animation: shouldReduceMotion ? 'none' : 'auroraShift 12s ease-in-out infinite alternate',
        }}
      />

      {/* ---- Floating diamond shapes ---- */}
      {diamonds.map((d, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          aria-hidden="true"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            border: '1px solid rgba(196,154,40,0.12)',
            transform: 'rotate(45deg)',
            opacity: d.opacity,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -d.yRange, 0],
                  opacity: [d.opacity, d.opacity * 1.6, d.opacity],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: d.duration,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                  delay: d.delay,
                }
          }
        />
      ))}

      {/* ---- Main content ---- */}
      <div className="relative z-10 flex flex-1 items-center pt-[100px] pb-8 lg:pb-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* ---- Left column: text ---- */}
            <div>
              {/* Section tag */}
              <motion.div
                className="flex items-center gap-3"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
              >
                <span className="inline-block w-8 h-px bg-oak-light" />
                <span className="font-body font-normal text-[11px] uppercase tracking-[0.2em] text-oak-light">
                  Est. 2026 &middot; Cairo, Egypt
                </span>
              </motion.div>

              {/* Headline — word-by-word */}
              <h1 className="mt-7 font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight">
                {headlineWords.map((w, i) => {
                  const isBreak = w.text === 'Enduring'; // line break before "Enduring"
                  return (
                    <span key={i}>
                      {isBreak && <br className="hidden md:block" />}
                      <motion.span
                        className={`inline-block ${w.oak ? 'text-oak' : 'text-warm-white'} ${w.italic ? 'italic' : ''}`}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.55,
                          delay: headlineStartDelay + i * wordDelay,
                          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                        }}
                      >
                        {w.text}
                      </motion.span>
                      {i < headlineWords.length - 1 && (
                        <span className="inline-block w-[0.3em]" />
                      )}
                    </span>
                  );
                })}
              </h1>

              {/* Subheadline */}
              <motion.p
                className="mt-7 font-body text-[15px] md:text-base text-light-gray max-w-[480px] leading-relaxed"
                variants={shouldReduceMotion ? undefined : subheadlineVariant}
                initial="hidden"
                animate="show"
                transition={{ delay: subheadlineDelay }}
              >
                Sterling Oak Advisory delivers bespoke financial and general
                counsel to corporations, sovereigns, and family offices across
                Egypt, the Gulf, and Europe. Founded by Dr.&nbsp;Abdelrahman
                Mawafk Aly, CFA — we turn complexity into clear advantage.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-9 flex flex-wrap gap-4"
                variants={shouldReduceMotion ? undefined : buttonContainerVariant}
                initial="hidden"
                animate="show"
                transition={{ delay: buttonsDelay }}
              >
                <Button variant="outline-oak" size="lg" href="/services">
                  Explore Services
                </Button>
                <Button variant="ghost" size="lg" onClick={openCalendly}>
                  Schedule a Call
                </Button>
              </motion.div>
            </div>

            {/* ---- Right column: concentric rings ---- */}
            <motion.div
              className="flex items-center justify-center"
              variants={shouldReduceMotion ? undefined : ringsContainerVariant}
              initial="hidden"
              animate="show"
              transition={{ delay: ringsDelay }}
            >
              <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
                {/* Radial glow behind rings */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(196,154,40,0.08) 0%, transparent 65%)',
                  }}
                />
                {/* Center glow */}
                <div
                  className="absolute pointer-events-none rounded-full"
                  aria-hidden="true"
                  style={{
                    width: '30%',
                    height: '30%',
                    top: '35%',
                    left: '35%',
                    background:
                      'radial-gradient(circle, rgba(196,154,40,0.12) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  {rings.map((ring, i) => (
                    <circle
                      key={i}
                      cx="200"
                      cy="200"
                      r={ring.r}
                      fill="none"
                      stroke="rgba(196,154,40,1)"
                      strokeWidth={ring.strokeWidth}
                      strokeDasharray={ring.dashArray}
                      opacity={ring.opacity}
                      className={`hero-ring hero-ring--${i}`}
                      style={{
                        transformOrigin: '200px 200px',
                      }}
                    />
                  ))}

                  {/* Center solid circle */}
                  <circle cx="200" cy="200" r="52" fill="rgba(28,28,28,1)" />
                  <circle
                    cx="200"
                    cy="200"
                    r="52"
                    fill="none"
                    stroke="rgba(196,154,40,0.25)"
                    strokeWidth="0.5"
                  />
                  <text
                    x="200"
                    y="193"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#C49A28"
                    fontFamily="'Cormorant Garamond', serif"
                    fontSize="26"
                    fontWeight="300"
                  >
                    SOA
                  </text>
                  <text
                    x="200"
                    y="216"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#C49A28"
                    fontFamily="'Jost', sans-serif"
                    fontSize="8.5"
                    letterSpacing="0.18em"
                    opacity="0.7"
                  >
                    ADVISORY
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Stats bar ---- */}
      <motion.div
        className="relative z-10 border-t border-[rgba(139,105,20,0.18)]"
        variants={shouldReduceMotion ? undefined : statsBarVariant}
        initial="hidden"
        animate="show"
        transition={{ delay: statsDelay }}
      >
        <div className="mx-auto w-full max-w-content px-6 md:px-10 py-8 md:py-10">
          <div className="flex flex-wrap justify-between items-start gap-y-8 gap-x-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-x-6 md:gap-x-8">
                {i > 0 && (
                  <div className="hidden md:block w-px h-14 bg-[rgba(139,105,20,0.25)] self-center" />
                )}
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="[&>span:first-child]:text-warm-white [&>span:last-child]:text-light-gray"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: statsDelay + 0.6, duration: 0.8 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-light-gray">
          Scroll
        </span>
        <motion.svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          className="text-oak-light"
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 5, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>

      {/* ---- Keyframe styles ---- */}
      <style>{`
        @property --aurora-x {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 30%;
        }
        @property --aurora-y {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 35%;
        }
        @keyframes auroraShift {
          0% { --aurora-x: 25%; --aurora-y: 30%; }
          33% { --aurora-x: 55%; --aurora-y: 45%; }
          66% { --aurora-x: 40%; --aurora-y: 60%; }
          100% { --aurora-x: 70%; --aurora-y: 35%; }
        }

        .hero-ring { transform-origin: 200px 200px; }
        .hero-ring--0 { animation: heroSpin 70s linear infinite; }
        .hero-ring--1 { animation: heroSpin 55s linear infinite reverse; }
        .hero-ring--2 { animation: heroSpin 42s linear infinite; }
        .hero-ring--3 { animation: heroSpin 35s linear infinite reverse; }
        .hero-ring--4 { animation: heroSpin 28s linear infinite; }

        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-ring--0,
          .hero-ring--1,
          .hero-ring--2,
          .hero-ring--3,
          .hero-ring--4 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
