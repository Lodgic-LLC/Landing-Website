'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackPageView,
  trackClick,
  trackScroll,
  trackTimeOnPage,
  trackExit,
  trackConversion,
  trackSectionEngagement,
  trackFormInteraction,
  throttle,
  debounce,
} from '@/utils/analytics'
import { ENGAGEMENT_THRESHOLDS, SCROLL_THRESHOLDS } from '@/utils/analytics-constants'

interface UseAnalyticsOptions {
  pageName?: string
  enableAutoTracking?: boolean
  enableScrollTracking?: boolean
  enableTimeTracking?: boolean
  enableExitTracking?: boolean
  scrollThreshold?: number
  timeThreshold?: number
}

interface AnalyticsHook {
  // Fonctions de tracking
  trackPageView: (pageName?: string, additionalData?: Record<string, any>) => void
  trackClick: (
    elementType: string,
    elementId?: string,
    elementText?: string,
    category?: string,
    additionalData?: Record<string, any>
  ) => void
  trackConversion: (
    conversionType: 'contact_form' | 'booking' | 'email_click' | 'phone_click' | 'cta_click',
    conversionValue?: number,
    additionalData?: Record<string, any>
  ) => void
  trackSectionEngagement: (
    sectionName: string,
    action: 'enter' | 'exit' | 'scroll',
    timeSpent?: number,
    additionalData?: Record<string, any>
  ) => void
  trackFormInteraction: (
    formType: string,
    interaction: 'focus' | 'submit' | 'abandon',
    fieldName?: string,
    additionalData?: Record<string, any>
  ) => void
}

export const useAnalytics = (options: UseAnalyticsOptions = {}): AnalyticsHook => {
  const {
    pageName,
    enableAutoTracking = true,
    enableScrollTracking = true,
    enableTimeTracking = true,
    enableExitTracking = true,
    scrollThreshold = 25,
    timeThreshold = 10,
  } = options

  const pathname = usePathname()
  const timeOnPageRef = useRef<number>(0)
  const startTimeRef = useRef<number>(Date.now())
  const lastScrollDepthRef = useRef<number>(0)
  const scrolledSectionsRef = useRef<Set<string>>(new Set())
  const lastInteractionRef = useRef<string>('')
  const isUnloadingRef = useRef<boolean>(false)

  // Fonction pour calculer le niveau d'engagement
  const calculateEngagementLevel = useCallback((timeSpent: number): 'low' | 'medium' | 'high' => {
    if (timeSpent < ENGAGEMENT_THRESHOLDS.LOW) return 'low'
    if (timeSpent < ENGAGEMENT_THRESHOLDS.MEDIUM) return 'medium'
    return 'high'
  }, [])

  // Tracking du temps passé sur la page
  const trackTimeSpent = useCallback(() => {
    const currentTime = Date.now()
    const timeSpent = Math.round((currentTime - startTimeRef.current) / 1000)
    timeOnPageRef.current = timeSpent

    if (timeSpent >= timeThreshold) {
      const engagementLevel = calculateEngagementLevel(timeSpent)
      trackTimeOnPage(timeSpent, engagementLevel, {
        page_name: pageName || pathname,
        session_duration: timeSpent,
      })
    }
  }, [pageName, pathname, timeThreshold, calculateEngagementLevel])

  // Tracking du scroll avec throttling
  const handleScroll = useCallback(
    throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollDepth = Math.round((scrollTop / scrollHeight) * 100)

      // Vérifier si on a atteint un nouveau seuil de scroll
      const newThreshold = SCROLL_THRESHOLDS.find(
        (threshold) => scrollDepth >= threshold && threshold > lastScrollDepthRef.current
      )

      if (newThreshold) {
        lastScrollDepthRef.current = newThreshold
        trackScroll(newThreshold, undefined, {
          page_name: pageName || pathname,
          scroll_position: scrollTop,
          page_height: scrollHeight,
        })
      }

      // Détecter les sections visibles
      const sections = document.querySelectorAll('[data-analytics-section]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionName = section.getAttribute('data-analytics-section')
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible && sectionName && !scrolledSectionsRef.current.has(sectionName)) {
          scrolledSectionsRef.current.add(sectionName)
          trackSectionEngagement(sectionName, 'enter', undefined, {
            page_name: pageName || pathname,
            section_position: Array.from(sections).indexOf(section),
          })
        }
      })
    }, 250),
    [pageName, pathname]
  )

  // Tracking de la sortie de page
  const handleBeforeUnload = useCallback(() => {
    if (isUnloadingRef.current) return
    isUnloadingRef.current = true

    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
    trackExit('page_exit', pageName || pathname, timeSpent, lastInteractionRef.current, {
      final_scroll_depth: lastScrollDepthRef.current,
      total_time_spent: timeSpent,
    })
  }, [pageName, pathname])

  // Tracking de la navigation
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)
      trackExit('navigation', pageName || pathname, timeSpent, lastInteractionRef.current, {
        visibility_change: true,
        time_spent: timeSpent,
      })
    }
  }, [pageName, pathname])

  // Effet pour l'auto-tracking
  useEffect(() => {
    if (!enableAutoTracking) return

    // Track initial page view
    trackPageView(pageName || pathname, {
      auto_tracked: true,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
    })

    // Reset des refs
    startTimeRef.current = Date.now()
    timeOnPageRef.current = 0
    lastScrollDepthRef.current = 0
    scrolledSectionsRef.current.clear()
    isUnloadingRef.current = false

    // Intervalles pour le tracking du temps
    let timeInterval: NodeJS.Timeout
    if (enableTimeTracking) {
      timeInterval = setInterval(trackTimeSpent, 30000) // Toutes les 30 secondes
    }

    // Event listeners
    if (enableScrollTracking) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    if (enableExitTracking) {
      window.addEventListener('beforeunload', handleBeforeUnload)
      document.addEventListener('visibilitychange', handleVisibilityChange)
    }

    // Cleanup
    return () => {
      if (timeInterval) clearInterval(timeInterval)
      if (enableScrollTracking) {
        window.removeEventListener('scroll', handleScroll)
      }
      if (enableExitTracking) {
        window.removeEventListener('beforeunload', handleBeforeUnload)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
  }, [
    pathname,
    pageName,
    enableAutoTracking,
    enableScrollTracking,
    enableTimeTracking,
    enableExitTracking,
    handleScroll,
    handleBeforeUnload,
    handleVisibilityChange,
    trackTimeSpent,
  ])

  // Fonctions publiques du hook
  const trackPageViewWrapper = useCallback(
    (pageNameOverride?: string, additionalData?: Record<string, any>) => {
      trackPageView(pageNameOverride || pageName || pathname, additionalData)
    },
    [pageName, pathname]
  )

  const trackClickWrapper = useCallback(
    (
      elementType: string,
      elementId?: string,
      elementText?: string,
      category: string = 'interaction',
      additionalData?: Record<string, any>
    ) => {
      lastInteractionRef.current = `${elementType}_click`
      trackClick(elementType, elementId, elementText, category, {
        page_name: pageName || pathname,
        ...additionalData,
      })
    },
    [pageName, pathname]
  )

  const trackConversionWrapper = useCallback(
    (
      conversionType: 'contact_form' | 'booking' | 'email_click' | 'phone_click' | 'cta_click',
      conversionValue?: number,
      additionalData?: Record<string, any>
    ) => {
      lastInteractionRef.current = `${conversionType}_conversion`
      trackConversion(conversionType, conversionValue, {
        page_name: pageName || pathname,
        time_to_conversion: Math.round((Date.now() - startTimeRef.current) / 1000),
        ...additionalData,
      })
    },
    [pageName, pathname]
  )

  const trackSectionEngagementWrapper = useCallback(
    (
      sectionName: string,
      action: 'enter' | 'exit' | 'scroll',
      timeSpent?: number,
      additionalData?: Record<string, any>
    ) => {
      lastInteractionRef.current = `${sectionName}_${action}`
      trackSectionEngagement(sectionName, action, timeSpent, {
        page_name: pageName || pathname,
        ...additionalData,
      })
    },
    [pageName, pathname]
  )

  const trackFormInteractionWrapper = useCallback(
    (
      formType: string,
      interaction: 'focus' | 'submit' | 'abandon',
      fieldName?: string,
      additionalData?: Record<string, any>
    ) => {
      lastInteractionRef.current = `${formType}_${interaction}`
      trackFormInteraction(formType, interaction, fieldName, {
        page_name: pageName || pathname,
        ...additionalData,
      })
    },
    [pageName, pathname]
  )

  return {
    trackPageView: trackPageViewWrapper,
    trackClick: trackClickWrapper,
    trackConversion: trackConversionWrapper,
    trackSectionEngagement: trackSectionEngagementWrapper,
    trackFormInteraction: trackFormInteractionWrapper,
  }
} 