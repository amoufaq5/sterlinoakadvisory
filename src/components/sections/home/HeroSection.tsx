import type { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTag from '../../ui/SectionTag';
import AnimatedCounter from '../../ui/AnimatedCounter';
import Button from '../../ui/Button';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const HeroSection: FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="min-h-screen pt-[92px] bg-warm-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            variants={prefersReduced ? undefined : container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={prefersReduced ? undefined : item}>
              <SectionTag label="Cairo, Egypt · Est. 2026" />
            </motion.div>

            <motion.h1
              variants={prefersReduced ? undefined : item}
              className="mt-6 font-display font-light text-5xl lg:text-[82px] tracking-tight leading-[1.05] text-dark"
            >
              Where Strategy Meets
              <br />
              <em className="text-oak italic">Enduring</em> Prosperity
            </motion.h1>

            <motion.p
              variants={prefersReduced ? undefined : item}
              className="mt-6 font-body text-[15px] text-mid max-w-[440px] leading-relaxed"
            >
              Sterling Oak Advisory delivers bespoke financial and general
              counsel to corporations, sovereigns, and family offices across
              Egypt, the Gulf, and Europe. Founded by Dr.&nbsp;Abdelrahman
              Mawafk Aly, CFA — we turn complexity into clear advantage.
            </motion.p>

            <motion.div
              variants={prefersReduced ? undefined : item}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" href="/services">
                Explore Services
              </Button>
              <Button variant="ghost" href="/#about">
                Our Story &rarr;
              </Button>
            </motion.div>

            <motion.div
              variants={prefersReduced ? undefined : item}
              className="mt-12 flex gap-10"
            >
              <AnimatedCounter target={2} prefix="$" suffix="B" label="Assets Advised" />
              <AnimatedCounter target={35} suffix="+" label="Engagements" />
              <AnimatedCounter target={4} suffix="yr" label="Experience" />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col items-center gap-10">
            {/* Animated SVG rings */}
            <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  strokeWidth="0.5"
                  className="stroke-oak-pale hero-ring hero-ring--slow"
                />
                {/* Middle ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  strokeWidth="0.5"
                  className="stroke-oak hero-ring hero-ring--mid"
                />
                {/* Inner ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="110"
                  fill="none"
                  strokeWidth="0.5"
                  className="stroke-oak-pale hero-ring hero-ring--fast"
                />
                {/* Center circle */}
                <circle cx="200" cy="200" r="60" className="fill-cream" />
                <text
                  x="200"
                  y="195"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-oak font-display text-2xl"
                  fontSize="28"
                >
                  SOA
                </text>
                <text
                  x="200"
                  y="218"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-oak font-body"
                  fontSize="10"
                  letterSpacing="0.15em"
                >
                  Advisory
                </text>
              </svg>
            </div>

            {/* Quote card */}
            <blockquote className="border-l-2 border-oak pl-4 max-w-md">
              <p className="font-body text-sm text-mid leading-relaxed italic">
                &ldquo;Egypt is not a frontier market — it is a cornerstone
                market. We are here to prove it, one transaction at a
                time.&rdquo;
              </p>
              <footer className="mt-3 font-body text-xs text-light-gray">
                — Dr.&nbsp;Abdelrahman Mawafk Aly, CFA · Founder &amp; CEO
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <style>{`
        .hero-ring {
          transform-origin: 200px 200px;
          stroke-dasharray: 8 12;
        }
        .hero-ring--slow {
          animation: hero-spin 60s linear infinite;
        }
        .hero-ring--mid {
          animation: hero-spin 40s linear infinite reverse;
        }
        .hero-ring--fast {
          animation: hero-spin 25s linear infinite;
        }
        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ring--slow,
          .hero-ring--mid,
          .hero-ring--fast {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
