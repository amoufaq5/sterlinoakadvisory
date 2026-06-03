// GA4 tracking ID from environment
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

// Initialize GA4 (called once in main.tsx)
export function initGA() {
  if (!GA_ID || typeof window === 'undefined') return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Configure gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_ID, {
    send_page_view: false, // We'll send manually on route change
  })

  // Store gtag on window for later use
  ;(window as any).gtag = gtag
}

// Track page view (call on route change)
export function trackPageView(path: string, title?: string) {
  if (!GA_ID) return
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
    })
  }
}

// Track custom events
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (!GA_ID) return
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('event', eventName, params)
  }
}

// Declare window.dataLayer
declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
