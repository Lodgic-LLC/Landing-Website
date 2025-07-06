'use client'

import { useAnalytics } from '@/hooks/useAnalytics'
import { useEffect } from 'react'

interface PageTrackerProps {
  pageName: string
  pageCategory?: string
  additionalData?: Record<string, any>
}

export const PageTracker: React.FC<PageTrackerProps> = ({
  pageName,
  pageCategory = 'page',
  additionalData = {}
}) => {
  const analytics = useAnalytics({
    pageName,
    enableAutoTracking: true,
    enableScrollTracking: true,
    enableTimeTracking: true,
    enableExitTracking: true,
  })

  useEffect(() => {
    // Tracker l'arrivée sur la page avec des données supplémentaires
    analytics.trackPageView(pageName, {
      page_category: pageCategory,
      ...additionalData,
    })
  }, [analytics, pageName, pageCategory, additionalData])

  return null // Ce composant n'affiche rien, il sert uniquement au tracking
} 