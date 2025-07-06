'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'
import { throttle, debounce } from '@/utils/analytics'

interface AdvancedTrackerProps {
  pageName: string
  enableExitIntent?: boolean
  enableMouseTracking?: boolean
  enableIdleTracking?: boolean
  enablePerformanceTracking?: boolean
  idleTimeout?: number
  mouseTrackingThreshold?: number
}

export const AdvancedTracker: React.FC<AdvancedTrackerProps> = ({
  pageName,
  enableExitIntent = true,
  enableMouseTracking = true,
  enableIdleTracking = true,
  enablePerformanceTracking = true,
  idleTimeout = 60000, // 1 minute
  mouseTrackingThreshold = 500, // 500ms
}) => {
  const analytics = useAnalytics()
  const lastActivityRef = useRef<number>(Date.now())
  const isIdleRef = useRef<boolean>(false)
  const mousePositionsRef = useRef<Array<{ x: number; y: number; timestamp: number }>>([])
  const exitIntentShownRef = useRef<boolean>(false)
  const performanceMetricsRef = useRef<{
    loadTime?: number
    interactionCount: number
    scrollCount: number
    clickCount: number
  }>({ interactionCount: 0, scrollCount: 0, clickCount: 0 })

  // Tracking des performances
  const trackPerformance = useCallback(() => {
    if (!enablePerformanceTracking) return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart

    performanceMetricsRef.current.loadTime = loadTime

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_performance', {
        event_category: 'performance',
        event_label: pageName,
        value: Math.round(loadTime),
        page_load_time: Math.round(loadTime),
        dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        first_paint: Math.round(navigation.responseEnd - navigation.responseStart),
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pageName, enablePerformanceTracking])

  // Tracking de l'activité utilisateur
  const updateActivity = useCallback(() => {
    lastActivityRef.current = Date.now()
    if (isIdleRef.current) {
      isIdleRef.current = false
      analytics.trackSectionEngagement('user_activity', 'enter', undefined, {
        activity_type: 'user_active',
        page_name: pageName,
      })
    }
  }, [analytics, pageName])

  // Tracking de l'inactivité
  const checkIdle = useCallback(() => {
    if (!enableIdleTracking) return

    const now = Date.now()
    const timeSinceLastActivity = now - lastActivityRef.current

    if (timeSinceLastActivity > idleTimeout && !isIdleRef.current) {
      isIdleRef.current = true
      analytics.trackSectionEngagement('user_activity', 'exit', Math.round(timeSinceLastActivity / 1000), {
        activity_type: 'user_idle',
        idle_duration: Math.round(timeSinceLastActivity / 1000),
        page_name: pageName,
      })
    }
  }, [analytics, pageName, idleTimeout, enableIdleTracking])

  // Tracking du mouvement de la souris
  const trackMouseMovement = useCallback(
    throttle((event: MouseEvent) => {
      if (!enableMouseTracking) return

      const now = Date.now()
      mousePositionsRef.current.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: now,
      })

      // Garder seulement les 10 dernières positions
      if (mousePositionsRef.current.length > 10) {
        mousePositionsRef.current.shift()
      }

      // Calculer la vitesse du mouvement
      if (mousePositionsRef.current.length >= 2) {
        const latest = mousePositionsRef.current[mousePositionsRef.current.length - 1]
        const previous = mousePositionsRef.current[mousePositionsRef.current.length - 2]
        const distance = Math.sqrt(
          Math.pow(latest.x - previous.x, 2) + Math.pow(latest.y - previous.y, 2)
        )
        const timeDiff = latest.timestamp - previous.timestamp
        const speed = distance / timeDiff

        // Tracker les mouvements rapides (indicateurs d'frustration)
        if (speed > 2) {
          analytics.trackSectionEngagement('mouse_activity', 'scroll', undefined, {
            activity_type: 'rapid_movement',
            speed: Math.round(speed * 100) / 100,
            page_name: pageName,
          })
        }
      }

      updateActivity()
    }, mouseTrackingThreshold),
    [enableMouseTracking, updateActivity, analytics, pageName, mouseTrackingThreshold]
  )

  // Tracking de l'exit intent
  const trackExitIntent = useCallback(
    (event: MouseEvent) => {
      if (!enableExitIntent || exitIntentShownRef.current) return

      // Détecter si la souris sort par le haut de la page
      if (event.clientY <= 5 && event.movementY < 0) {
        exitIntentShownRef.current = true
        
        const timeOnPage = Math.round((Date.now() - lastActivityRef.current) / 1000)
        
        analytics.trackSectionEngagement('exit_intent', 'enter', timeOnPage, {
          activity_type: 'exit_intent',
          mouse_position: { x: event.clientX, y: event.clientY },
          page_name: pageName,
          interaction_count: performanceMetricsRef.current.interactionCount,
          scroll_count: performanceMetricsRef.current.scrollCount,
        })

        // Optionnel : déclencher une action (popup, etc.)
        // Ici vous pouvez ajouter votre logique d'exit intent
      }
    },
    [enableExitIntent, analytics, pageName]
  )

  // Tracking des clics
  const trackClick = useCallback(
    (event: MouseEvent) => {
      updateActivity()
      performanceMetricsRef.current.clickCount++
      performanceMetricsRef.current.interactionCount++

      const target = event.target as HTMLElement
      const tagName = target.tagName.toLowerCase()
      const elementId = target.id
      const elementClass = target.className

      analytics.trackClick(
        tagName,
        elementId,
        target.textContent?.slice(0, 50) || '',
        'interaction',
        {
          page_name: pageName,
          element_class: elementClass,
          click_position: { x: event.clientX, y: event.clientY },
          total_clicks: performanceMetricsRef.current.clickCount,
        }
      )
    },
    [updateActivity, analytics, pageName]
  )

  // Tracking du scroll
  const trackScroll = useCallback(
    throttle(() => {
      updateActivity()
      performanceMetricsRef.current.scrollCount++
      performanceMetricsRef.current.interactionCount++

      const scrollPercentage = Math.round(
        (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      analytics.trackSectionEngagement('scroll_activity', 'scroll', undefined, {
        activity_type: 'scroll',
        scroll_percentage: scrollPercentage,
        page_name: pageName,
        total_scrolls: performanceMetricsRef.current.scrollCount,
      })
    }, 1000),
    [updateActivity, analytics, pageName]
  )

  // Tracking de la visibilité de la page
  const trackVisibilityChange = useCallback(() => {
    if (document.hidden) {
      const timeOnPage = Math.round((Date.now() - lastActivityRef.current) / 1000)
      analytics.trackSectionEngagement('page_visibility', 'exit', timeOnPage, {
        activity_type: 'page_hidden',
        page_name: pageName,
        interaction_count: performanceMetricsRef.current.interactionCount,
      })
    } else {
      lastActivityRef.current = Date.now()
      analytics.trackSectionEngagement('page_visibility', 'enter', undefined, {
        activity_type: 'page_visible',
        page_name: pageName,
      })
    }
  }, [analytics, pageName])

  // Tracking des erreurs JavaScript
  const trackJavaScriptError = useCallback(
    (event: ErrorEvent) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'javascript_error', {
          event_category: 'error',
          event_label: pageName,
          error_message: event.message,
          error_filename: event.filename,
          error_lineno: event.lineno,
          error_colno: event.colno,
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    },
    [pageName]
  )

  // Nettoyage et résumé de session
  const trackSessionSummary = useCallback(() => {
    const sessionDuration = Math.round((Date.now() - lastActivityRef.current) / 1000)
    
    analytics.trackSectionEngagement('session_summary', 'exit', sessionDuration, {
      activity_type: 'session_end',
      page_name: pageName,
      total_interactions: performanceMetricsRef.current.interactionCount,
      total_clicks: performanceMetricsRef.current.clickCount,
      total_scrolls: performanceMetricsRef.current.scrollCount,
      load_time: performanceMetricsRef.current.loadTime,
      was_idle: isIdleRef.current,
      exit_intent_triggered: exitIntentShownRef.current,
    })
  }, [analytics, pageName])

  useEffect(() => {
    // Initialiser les métriques de performance
    if (enablePerformanceTracking) {
      // Attendre que la page soit complètement chargée
      if (document.readyState === 'complete') {
        trackPerformance()
      } else {
        window.addEventListener('load', trackPerformance)
      }
    }

    // Configurer les event listeners
    if (enableMouseTracking) {
      document.addEventListener('mousemove', trackMouseMovement)
    }
    
    if (enableExitIntent) {
      document.addEventListener('mouseleave', trackExitIntent)
    }
    
    document.addEventListener('click', trackClick)
    document.addEventListener('scroll', trackScroll)
    document.addEventListener('visibilitychange', trackVisibilityChange)
    window.addEventListener('error', trackJavaScriptError)
    window.addEventListener('beforeunload', trackSessionSummary)

    // Intervalle pour vérifier l'inactivité
    const idleInterval = setInterval(checkIdle, 10000) // Vérifier toutes les 10 secondes

    // Nettoyage
    return () => {
      if (enableMouseTracking) {
        document.removeEventListener('mousemove', trackMouseMovement)
      }
      if (enableExitIntent) {
        document.removeEventListener('mouseleave', trackExitIntent)
      }
      document.removeEventListener('click', trackClick)
      document.removeEventListener('scroll', trackScroll)
      document.removeEventListener('visibilitychange', trackVisibilityChange)
      window.removeEventListener('error', trackJavaScriptError)
      window.removeEventListener('beforeunload', trackSessionSummary)
      window.removeEventListener('load', trackPerformance)
      clearInterval(idleInterval)
    }
  }, [
    enableMouseTracking,
    enableExitIntent,
    enablePerformanceTracking,
    trackMouseMovement,
    trackExitIntent,
    trackClick,
    trackScroll,
    trackVisibilityChange,
    trackJavaScriptError,
    trackSessionSummary,
    trackPerformance,
    checkIdle,
  ])

  return null // Ce composant n'affiche rien
} 