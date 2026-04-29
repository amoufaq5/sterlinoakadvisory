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

export function useSEO({ title, description, ogImage, path }: SEOProps = {}): ReactElement {
  const pageTitle = title
    ? `${title} | Sterling Oak Advisory`
    : 'Sterling Oak Advisory'
  const pageDescription = description || DEFAULT_DESCRIPTION
  const canonicalUrl = path ? `${SITE_URL}${path}` : undefined

  const children: ReactElement[] = [
    createElement('title', { key: 'title' }, pageTitle),
    createElement('meta', { key: 'desc', name: 'description', content: pageDescription }),
    createElement('meta', { key: 'og:title', property: 'og:title', content: pageTitle }),
    createElement('meta', { key: 'og:desc', property: 'og:description', content: pageDescription }),
    createElement('meta', { key: 'og:type', property: 'og:type', content: 'website' }),
    createElement('meta', { key: 'og:url', property: 'og:url', content: canonicalUrl || SITE_URL }),
    createElement('meta', { key: 'twitter', name: 'twitter:card', content: 'summary_large_image' }),
  ]

  if (ogImage) {
    children.push(createElement('meta', { key: 'og:image', property: 'og:image', content: ogImage }))
  }

  if (canonicalUrl) {
    children.push(createElement('link', { key: 'canonical', rel: 'canonical', href: canonicalUrl }))
  }

  return createElement(Helmet, null, ...children)
}
