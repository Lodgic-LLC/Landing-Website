'use client'

import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'

interface PageTrackerProps {
  pageName: string
  pageCategory?: string
  additionalData?: Record<string, string | number | boolean>
}

/** Signale la consultation d'une page. N'affiche rien. */
export function PageTracker({ pageName, pageCategory = 'page', additionalData }: PageTrackerProps) {
  useEffect(() => {
    trackPageView(pageName, { page_category: pageCategory, ...additionalData })
    // Une seule fois par page : les données annexes ne changent pas en cours de route.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName])

  return null
}

export default PageTracker
