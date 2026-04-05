export const openCalendly = () => {
  ;(window as any).Calendly?.initPopupWidget({
    url: import.meta.env.VITE_CALENDLY_URL,
  })
}
