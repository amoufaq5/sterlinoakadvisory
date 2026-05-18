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
const AboutPage = lazy(() => import('./pages/AboutPage'))
const AccreditationsPage = lazy(() => import('./pages/AccreditationsPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const NewsroomPage = lazy(() => import('./pages/NewsroomPage'))
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
      { path: 'about', element: <LazyPage><AboutPage /></LazyPage> },
      { path: 'accreditations', element: <LazyPage><AccreditationsPage /></LazyPage> },
      { path: 'industries', element: <LazyPage><IndustriesPage /></LazyPage> },
      { path: 'industries/:slug', element: <LazyPage><IndustryDetailPage /></LazyPage> },
      { path: 'careers', element: <LazyPage><CareersPage /></LazyPage> },
      { path: 'newsroom', element: <LazyPage><NewsroomPage /></LazyPage> },
      { path: '*', element: <LazyPage><NotFoundPage /></LazyPage> },
    ],
  },
])
