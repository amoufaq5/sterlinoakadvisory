'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'

const leadGateSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.').email('Please enter a valid email address.'),
  company: z.string().optional(),
})

type LeadGateFormData = z.infer<typeof leadGateSchema>

interface LeadGateModalProps {
  isOpen: boolean
  onClose: () => void
  resourceName: string
  onSuccess: () => void
}

export default function LeadGateModal({
  isOpen,
  onClose,
  resourceName,
  onSuccess,
}: LeadGateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadGateFormData>({
    resolver: zodResolver(leadGateSchema),
  })

  const [serverError, setServerError] = useState<string | null>(null)

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      // Focus first input on open
      setTimeout(() => firstFocusableRef.current?.focus(), 50)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  // Focus trap
  const handleTabTrap = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'input, button, textarea, select, a[href], [tabindex]:not([tabindex="-1"])',
      )
      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    },
    [],
  )

  const onSubmit = async (data: LeadGateFormData) => {
    setServerError(null)
    try {
      const response = await fetch('/api/resource-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, resourceName }),
      })

      const result = await response.json()

      if (!response.ok) {
        setServerError(result.error || 'Something went wrong. Please try again.')
        return
      }

      reset()
      onSuccess()
      onClose()
    } catch {
      setServerError('Something went wrong. Please try again.')
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const titleId = 'lead-gate-modal-title'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="bg-warm-white p-8 max-w-md w-full rounded-none relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onKeyDown={handleTabTrap}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-dark/60 hover:text-dark transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h2
              id={titleId}
              className="font-heading text-2xl text-dark mb-2"
            >
              Access Resource
            </h2>
            <p className="text-dark/70 text-sm mb-6">
              Enter your details to download{' '}
              <span className="font-medium text-dark">{resourceName}</span>.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-dark mb-1">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  {...register('name')}
                  ref={(e) => {
                    register('name').ref(e)
                    firstFocusableRef.current = e
                  }}
                  className="w-full border border-dark/20 bg-warm-white px-4 py-2.5 text-dark rounded-none focus:outline-none focus:border-dark transition-colors"
                />
                {errors.name && (
                  <p className="text-accent text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="lead-email" className="block text-sm font-medium text-dark mb-1">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="lead-email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  className="w-full border border-dark/20 bg-warm-white px-4 py-2.5 text-dark rounded-none focus:outline-none focus:border-dark transition-colors"
                />
                {errors.email && (
                  <p className="text-accent text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="lead-company" className="block text-sm font-medium text-dark mb-1">
                  Company
                </label>
                <input
                  id="lead-company"
                  type="text"
                  autoComplete="organization"
                  {...register('company')}
                  className="w-full border border-dark/20 bg-warm-white px-4 py-2.5 text-dark rounded-none focus:outline-none focus:border-dark transition-colors"
                />
              </div>

              {/* Server Error */}
              {serverError && (
                <p className="text-accent text-sm" role="alert">
                  {serverError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dark text-warm-white py-3 text-sm font-medium uppercase tracking-widest rounded-none hover:bg-dark/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Download Resource'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
