import type { FC } from 'react';
import SectionTag from '../../ui/SectionTag';
import ScrollReveal from '../../ui/ScrollReveal';

const steps = [
  {
    numeral: 'I',
    title: 'Discovery & Listening',
    description:
      'We begin every engagement by listening — deeply. Understanding the client\u2019s objectives, constraints, history, and aspirations before a single recommendation is made.',
  },
  {
    numeral: 'II',
    title: 'Analysis & Structuring',
    description:
      'Our team conducts rigorous analysis: financial modelling, regulatory mapping, stakeholder assessment, and scenario planning to build a complete picture.',
  },
  {
    numeral: 'III',
    title: 'Strategic Recommendation',
    description:
      'We present clear, actionable recommendations — not generic frameworks. Every strategy is tailored to the client\u2019s specific context and goals.',
  },
  {
    numeral: 'IV',
    title: 'Implementation Support',
    description:
      'We remain engaged through execution. Whether it\u2019s negotiation support, regulatory filing, or stakeholder management, we see it through.',
  },
  {
    numeral: 'V',
    title: 'Ongoing Partnership',
    description:
      'Our client relationships don\u2019t end at project completion. We remain a trusted resource for ongoing strategic counsel and future opportunities.',
  },
];

const ApproachSection: FC = () => {
  return (
    <section className="bg-warm-white">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTag label="Our Process" />
            <h2 className="mt-6 font-display font-medium text-4xl lg:text-5xl text-dark leading-tight">
              A Methodical,
              <br />
              Human Process
            </h2>
            <p className="mt-6 font-body text-mid text-[15px] leading-relaxed max-w-md">
              Every Sterling Oak engagement follows a disciplined five-phase
              methodology — but it is our judgment, relationships, and human
              insight that make the difference.
            </p>
          </div>

          {/* Right — scrolling steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step.numeral} delay={i * 0.08}>
                <div>
                  <span className="block text-oak font-display text-3xl mb-3">
                    {step.numeral}.
                  </span>
                  <h3 className="font-display text-2xl text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-mid text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
