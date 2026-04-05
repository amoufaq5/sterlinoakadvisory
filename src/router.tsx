import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import InsightsPage from './pages/InsightsPage'
import InsightArticlePage from './pages/InsightArticlePage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'insights', element: <InsightsPage /> },
      { path: 'insights/:slug', element: <InsightArticlePage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'resources', element: <ResourcesPage /> },
    ],
  },
])
