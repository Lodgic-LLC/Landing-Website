'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { trackWebVital } from '@/lib/analytics'

/** Envoie les Core Web Vitals à Google Analytics, quand il est chargé (voir ConsentScripts). */
export function WebVitals() {
  useReportWebVitals((metric) => {
    trackWebVital(metric.name, Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), metric.id)
  })

  return null
}
