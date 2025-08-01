'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Envoyer les métriques à votre service d'analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
      })
    }

    // Optionnel : console.log pour le développement
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('Web Vital:', metric)
    // }
  })

  return null
}
