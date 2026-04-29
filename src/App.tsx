import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Footer from './components/ui/Footer'
import BackToTop from './components/ui/BackToTop'

export default function App() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [hash])

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <ScrollRestoration />
    </>
  )
}
