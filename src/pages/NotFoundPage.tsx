import { Link } from 'react-router-dom'
import { useSEO } from '../lib/seo'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function NotFoundPage() {
  const seo = useSEO({ title: 'Page Not Found' })

  return (
    <>
      {seo}
      <section className="bg-dark text-warm-white min-h-[80vh] flex items-center justify-center">
        <div className="section-container text-center py-32">
          <ScrollReveal>
            <p className="font-body uppercase tracking-[0.22em] text-xs text-oak mb-6">
              404 — Page Not Found
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-light text-warm-white mb-6">
              This page doesn't exist.
            </h1>
            <p className="font-body text-light-gray text-lg max-w-md mx-auto mb-10">
              The page you're looking for may have been moved or removed.
              Let's get you back on track.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/" variant="primary">
                Return Home
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
