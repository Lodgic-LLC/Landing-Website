'use client'

import { useReportWebVitals } from 'next/web-vitals'

/** Envoie les Core Web Vitals à Google Analytics, quand il est chargé (voir ConsentScripts). */
export function WebVitals() {
  useReportWebVitals((metric) => {
    window.gtag?.('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
    })
  })

  return null
}
