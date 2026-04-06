import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import NavBar from './components/ui/NavBar'
import Footer from './components/ui/Footer'

export default function App() {
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
      <ScrollRestoration />
      <Analytics />
    </>
  )
}
