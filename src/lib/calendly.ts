export const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/sterlingoakadvisory/intro'

export const openCalendly = () => {
  const calendly = (window as any).Calendly
  if (calendly && typeof calendly.initPopupWidget === 'function') {
    calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
  }
}
