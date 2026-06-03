import { createElement, type ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'

export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  path?: string
}

const SITE_URL = 'https://www.sterling-oakadvisory.com'

const DEFAULT_DESCRIPTION =
  'Sterling Oak Advisory — bespoke financial and general counsel for corporations, sovereigns, and family offices across Egypt, the Gulf, and Europe. Cairo · London · Dubai · Riyadh.'

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`

export function useSEO({ title, description, ogImage, path }: SEOProps = {}): ReactElement {
  const fullTitle = title
    ? `${title} | Sterling Oak Advisory`
    : 'Sterling Oak Advisory'
  const desc = description || DEFAULT_DESCRIPTION
  const canonicalUrl = path ? `${SITE_URL}${path}` : undefined
  const ogImg = ogImage || DEFAULT_OG_IMAGE

  const children: ReactElement[] = [
    createElement('title', { key: 'title' }, fullTitle),
    createElement('meta', { key: 'desc', name: 'description', content: desc }),

    // Open Graph
    createElement('meta', { key: 'og:title', property: 'og:title', content: fullTitle }),
    createElement('meta', { key: 'og:desc', property: 'og:description', content: desc }),
    createElement('meta', { key: 'og:type', property: 'og:type', content: 'website' }),
    createElement('meta', { key: 'og:url', property: 'og:url', content: canonicalUrl || SITE_URL }),
    createElement('meta', { key: 'og:image', property: 'og:image', content: ogImg }),
    createElement('meta', { key: 'og:site_name', property: 'og:site_name', content: 'Sterling Oak Advisory' }),
    createElement('meta', { key: 'og:locale', property: 'og:locale', content: 'en_US' }),

    // Twitter Card
    createElement('meta', { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }),
    createElement('meta', { key: 'twitter:site', name: 'twitter:site', content: '@sterlingoakadv' }),
    createElement('meta', { key: 'twitter:title', name: 'twitter:title', content: fullTitle }),
    createElement('meta', { key: 'twitter:desc', name: 'twitter:description', content: desc }),
    createElement('meta', { key: 'twitter:image', name: 'twitter:image', content: ogImg }),
  ]

  if (canonicalUrl) {
    children.push(createElement('link', { key: 'canonical', rel: 'canonical', href: canonicalUrl }))
  }

  return createElement(Helmet, null, ...children)
}
