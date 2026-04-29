import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const InsightsPage = lazy(() => import('./pages/InsightsPage'))
const InsightArticlePage = lazy(() => import('./pages/InsightArticlePage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-warm-white">
          <div className="w-8 h-8 border-2 border-oak border-t-transparent animate-spin" />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LazyPage><HomePage /></LazyPage> },
      { path: 'services', element: <LazyPage><ServicesPage /></LazyPage> },
      { path: 'services/:slug', element: <LazyPage><ServiceDetailPage /></LazyPage> },
      { path: 'insights', element: <LazyPage><InsightsPage /></LazyPage> },
      { path: 'insights/:slug', element: <LazyPage><InsightArticlePage /></LazyPage> },
      { path: 'case-studies', element: <LazyPage><CaseStudiesPage /></LazyPage> },
      { path: 'case-studies/:slug', element: <LazyPage><CaseStudyDetailPage /></LazyPage> },
      { path: 'contact', element: <LazyPage><ContactPage /></LazyPage> },
      { path: 'resources', element: <LazyPage><ResourcesPage /></LazyPage> },
      { path: '*', element: <LazyPage><NotFoundPage /></LazyPage> },
    ],
  },
])
