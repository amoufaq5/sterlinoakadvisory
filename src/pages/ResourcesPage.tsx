import { useState } from 'react'
import { FileDown } from 'lucide-react'
import { useSEO } from '../lib/seo'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import LeadGateModal from '../components/modals/LeadGateModal'

interface Resource {
  id: string
  title: string
  description: string
  fileSize: string
  fileName: string
}

const resources: Resource[] = [
  {
    id: 'credentials',
    title: 'Sterling Oak Advisory — Credentials Deck 2026',
    description:
      'Our complete credentials deck, including firm overview, team profiles, and selected experience.',
    fileSize: '2.4 MB',
    fileName: 'sterling-oak-credentials-2026.pdf',
  },
  {
    id: 'financial-overview',
    title: 'Financial Advisory Overview — MENA Markets',
    description:
      'A detailed overview of our financial advisory capabilities across Egypt, the Gulf, and wider MENA.',
    fileSize: '1.8 MB',
    fileName: 'financial-advisory-overview-mena.pdf',
  },
  {
    id: 'ma-checklist',
    title: 'M&A Readiness Checklist for Egyptian & Gulf Companies',
    description:
      'A practical checklist for business owners considering an acquisition or divestiture.',
    fileSize: '890 KB',
    fileName: 'ma-readiness-checklist.pdf',
  },
]

export default function ResourcesPage() {
  const seo = useSEO({ title: 'Client Resources' })
  const [showModal, setShowModal] = useState(false)
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const handleDownload = (resource: Resource) => {
    setSelectedResource(resource)
    setShowModal(true)
  }

  const handleDownloadSuccess = () => {
    if (selectedResource) {
      const link = document.createElement('a')
      link.href = `/downloads/${selectedResource.fileName}`
      link.download = selectedResource.fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    setShowModal(false)
    setSelectedResource(null)
  }

  return (
    <>
      {seo}
      <PageHero tag="Resources" title="Client Resources" />

      <section className="section-container section-padding">
        <ScrollReveal>
          <p className="text-mid font-body text-lg max-w-3xl mb-16 leading-relaxed">
            A selection of complimentary resources for prospective and current clients.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ScrollReveal key={resource.id} delay={index * 0.1}>
              <div className="bg-cream p-8 h-full flex flex-col">
                <div className="w-12 h-12 bg-oak/10 flex items-center justify-center mb-6">
                  <FileDown className="w-6 h-6 text-oak" />
                </div>
                <h3 className="font-display text-xl font-medium text-dark mb-3">
                  {resource.title}
                </h3>
                <p className="text-mid font-body text-sm leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>
                <p className="text-light-gray font-body text-xs uppercase tracking-wider mb-6">
                  PDF · {resource.fileSize}
                </p>
                <Button
                  variant="outline-oak"
                  onClick={() => handleDownload(resource)}
                >
                  Download
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <LeadGateModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
          setSelectedResource(null)
        }}
        resourceName={selectedResource?.title || ''}
        onSuccess={handleDownloadSuccess}
      />
    </>
  )
}
