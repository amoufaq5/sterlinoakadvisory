import type { FC } from 'react';
import { openCalendly } from '../../../lib/calendly';

const CTABandSection: FC = () => {
  return (
    <section className="bg-oak">
      <div className="section-container py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <h2 className="font-display text-3xl lg:text-4xl text-warm-white font-medium leading-tight text-center lg:text-left max-w-xl">
            Ready to Begin a Meaningful Conversation?
          </h2>

          {/* Right */}
          <div className="text-center lg:text-right shrink-0">
            <p className="text-warm-white/80 font-body text-[15px] leading-relaxed mb-4 max-w-md">
              Whether you&rsquo;re exploring a transaction, restructuring, or
              strategic pivot — we&rsquo;re here to listen.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center font-body font-medium uppercase rounded-none px-6 py-3 text-sm tracking-wide bg-dark text-cream border border-dark transition-all duration-300 hover:bg-warm-white hover:text-oak hover:border-warm-white"
              >
                Schedule a Call
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-body font-medium uppercase rounded-none px-6 py-3 text-sm tracking-wide border border-warm-white text-warm-white transition-all duration-300 hover:bg-warm-white hover:text-oak"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABandSection;
