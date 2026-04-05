import { createElement, type ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
}

const DEFAULT_DESCRIPTION =
  'Sterling Oak Advisory \u2014 bespoke financial and general counsel for corporations, sovereigns, and family offices across Egypt, the Gulf, and Europe. Cairo \u00b7 London \u00b7 Dubai \u00b7 Riyadh.'

/**
 * Returns a Helmet element to render in the component tree for SEO.
 * Usage: const seo = useSEO({ title: 'About' }); return <>{seo}<div>...</div></>
 */
export function useSEO({ title, description, ogImage }: SEOProps = {}): ReactElement {
  const pageTitle = title
    ? `${title} | Sterling Oak Advisory`
    : 'Sterling Oak Advisory'
  const pageDescription = description || DEFAULT_DESCRIPTION

  const metaTags = [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]

  if (ogImage) {
    metaTags.push({ property: 'og:image', content: ogImage } as any)
  }

  return createElement(Helmet, null,
    createElement('title', null, pageTitle),
    ...metaTags.map((attrs, i) => createElement('meta', { ...attrs, key: i }))
  )
}
