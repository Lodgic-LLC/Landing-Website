'use client'

import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
}

interface FAQStructuredDataProps {
  faqs: FAQItem[]
}

const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqs }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export default FAQStructuredData
