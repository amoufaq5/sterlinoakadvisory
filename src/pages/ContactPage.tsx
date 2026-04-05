import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Mail, Phone, Loader2, Check } from 'lucide-react'
import { useSEO } from '../lib/seo'
import { openCalendly } from '../lib/calendly'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  referralSource: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  _gotcha: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const offices = [
  { city: 'Cairo', country: 'Egypt', label: 'Headquarters', status: 'active' as const },
  { city: 'London', country: 'United Kingdom', label: 'Subsidiary', status: 'active' as const },
  { city: 'Dubai', country: 'UAE', label: 'Subsidiary', status: 'active' as const },
  { city: 'Riyadh', country: 'KSA', label: 'Opening Soon', status: 'soon' as const },
]

const serviceOptions = [
  'General Enquiry',
  'General Business Advisory',
  'Financial Advisory',
  'Mergers & Acquisitions',
  'Wealth & Estate Planning',
  'Risk & Compliance',
  'Market Entry & Expansion',
]

const referralOptions = ['Referral', 'Online Search', 'LinkedIn', 'Event', 'Other']

export default function ContactPage() {
  const seo = useSEO({ title: 'Contact' })
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading')
    setSubmitError('')
    setSubmittedName(data.firstName)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitState('success')
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.')
        setSubmitState('error')
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.')
      setSubmitState('error')
    }
  }

  const inputClasses =
    'w-full bg-warm-white border border-border px-4 py-3 font-body text-sm text-dark placeholder:text-light-gray focus:outline-none focus:border-oak transition-colors duration-300 rounded-none'
  const labelClasses = 'block font-body text-sm text-dark mb-1.5'
  const errorClasses = 'text-red-600 text-xs font-body mt-1'

  return (
    <>
      {seo}
      <PageHero tag="Get In Touch" title="Begin a Conversation" />

      <section className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="font-display text-3xl font-medium text-dark mb-8">
                Our Offices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="bg-cream p-6 border-l-2 border-oak"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-oak mt-0.5 shrink-0" />
                      <div>
                        <p className="font-display text-lg font-medium text-dark">
                          {office.city}
                        </p>
                        <p className="text-sm text-mid font-body">{office.country}</p>
                        <p className={`text-xs font-body uppercase tracking-wider mt-1 ${office.status === 'soon' ? 'text-oak' : 'text-light-gray'}`}>
                          {office.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@sterling-oakadvisory.com"
                  className="flex items-center gap-3 text-mid font-body hover:text-oak transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-oak" />
                  hello@sterling-oakadvisory.com
                </a>
                <a
                  href="tel:+201000000000"
                  className="flex items-center gap-3 text-mid font-body hover:text-oak transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-oak" />
                  +20 (100) 000-0000
                </a>
              </div>

              <Button variant="primary" onClick={openCalendly}>
                Schedule a Call
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {submitState === 'success' ? (
              <div className="bg-cream p-12 text-center">
                <div className="w-16 h-16 bg-oak text-warm-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-medium text-dark mb-2">
                  Thank you, {submittedName}.
                </h3>
                <p className="text-mid font-body">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className={labelClasses}>
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className={inputClasses}
                        placeholder="First name"
                        {...register('firstName')}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className={errorClasses}>
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClasses}>
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className={inputClasses}
                        placeholder="Last name"
                        {...register('lastName')}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className={errorClasses}>
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      className={inputClasses}
                      placeholder="Company name"
                      {...register('company')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClasses}
                      placeholder="you@company.com"
                      {...register('email')}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className={errorClasses}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="+20 (100) 000-0000"
                      {...register('phone')}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      className={inputClasses}
                      {...register('service')}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="referralSource" className={labelClasses}>
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      className={inputClasses}
                      {...register('referralSource')}
                    >
                      <option value="">Select an option</option>
                      {referralOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={inputClasses}
                      placeholder="Tell us about your needs (minimum 20 characters)"
                      {...register('message')}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className={errorClasses}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <input type="text" tabIndex={-1} {...register('_gotcha')} />
                  </div>

                  {submitState === 'error' && (
                    <p className="text-red-600 text-sm font-body">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="w-full bg-dark text-cream py-4 px-8 font-body text-sm uppercase tracking-wider hover:bg-oak transition-colors duration-300 disabled:opacity-50 rounded-none flex items-center justify-center gap-2"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
