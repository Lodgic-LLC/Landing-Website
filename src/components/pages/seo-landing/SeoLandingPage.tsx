import type { ComponentProps } from 'react'
import dynamic from 'next/dynamic'
import { PageTracker } from '@/components/analytics/PageTracker'
import StructuredData from '@/components/seo/StructuredData'
import BreadcrumbStructuredData from '@/components/seo/BreadcrumbStructuredData'
import FAQStructuredData from '@/components/seo/FAQStructuredData'
import SeoHero from '@/components/pages/seo-landing/SeoHero'
import SeoExpertise from '@/components/pages/seo-landing/SeoExpertise'
import { SITE_URL } from '@/lib/site'

const About = dynamic(() => import('@/components/pages/home/About'))
const SuccessStories = dynamic(() => import('@/components/pages/home/SuccessStories'))
const Contact = dynamic(() => import('@/components/pages/home/FAQ'))

export interface SeoFaq {
  question: string
  answer: string
}

interface SeoLandingPageProps {
  /** Chemin de la page, avec le slash initial */
  path: string
  /** Nom lisible, utilisé dans le fil d'Ariane et le schéma WebPage */
  name: string
  description: string
  trackingKeyword: string
  hero: ComponentProps<typeof SeoHero>
  expertise: ComponentProps<typeof SeoExpertise>
  faqs: SeoFaq[]
}

export default function SeoLandingPage({
  path,
  name,
  description,
  trackingKeyword,
  hero,
  expertise,
  faqs,
}: SeoLandingPageProps) {
  const url = `${SITE_URL}${path}`
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'fr-FR',
  }

  return (
    <>
      <StructuredData id={`seo-${trackingKeyword}-webpage`} data={pageSchema} />
      <BreadcrumbStructuredData items={[{ name: 'Accueil', url: SITE_URL }, { name, url }]} />
      <FAQStructuredData faqs={faqs} />
      <PageTracker
        pageName={`SEO - ${name}`}
        pageCategory="seo_landing"
        additionalData={{ page_type: 'seo_landing', target_keyword: trackingKeyword }}
      />
      <main>
          <SeoHero
            primaryCta={{ label: 'Expliquer mon projet', href: '/contact' }}
            secondaryCta={{ label: 'Voir mes réalisations', href: '/#realisations' }}
            {...hero}
          />

          <SeoExpertise ctaLabel="Expliquer mon projet" ctaHref="/contact" {...expertise} />

          <section className="border-t border-[#E6E1D8] bg-[#F8F6F2] py-20 md:py-24" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-6">
              <p className="eyebrow eyebrow-left">Questions fréquentes</p>
              <h2
                id="faq-heading"
                className="mt-3 text-3xl md:text-4xl font-sofia-bold text-[#2E2B28] tracking-tight text-balance"
              >
                Ce qu’on me demande le plus souvent
              </h2>
              <div className="mt-8 divide-y divide-[#E6E1D8] overflow-hidden rounded-xl border border-[#E6E1D8] bg-white">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group px-6 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sofia-bold text-[#2E2B28] [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        aria-hidden
                        className="mono shrink-0 text-lg leading-none text-[#C2542D] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6B655D] font-inter">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <SuccessStories />

          <About />

          <Contact />
      </main>
    </>
  )
}
