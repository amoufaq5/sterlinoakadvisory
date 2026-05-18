import { useState, useEffect, useCallback, type FC } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';
import { testimonials } from '../../../data/testimonials';

const TestimonialsSection: FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, shouldReduceMotion]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-warm-white">
      <div className="section-container section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionTag label="Client Testimonials" />
            <ScrollReveal>
              <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
                What Our Clients Say
              </h2>
            </ScrollReveal>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border text-mid hover:text-oak hover:border-oak transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border text-mid hover:text-oak hover:border-oak transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: 'easeOut' as const }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {visible.map((t) => (
              <div key={t.id} className="bg-cream p-8 h-full flex flex-col">
                <span
                  className="block text-oak text-6xl font-display leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-2 font-body text-mid leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-body text-sm text-dark">{t.role}</p>
                  <p className="font-body text-sm text-light-gray">{t.sector}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === page ? 'bg-oak w-6' : 'bg-border hover:bg-oak-light'
              }`}
              aria-label={`Go to testimonials page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
