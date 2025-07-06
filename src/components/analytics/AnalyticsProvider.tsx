'use client'

import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { configureAnalytics } from '@/utils/analytics'
import { AnalyticsConfig } from '@/types/analytics'

interface AnalyticsContextType {
  isInitialized: boolean
  config: AnalyticsConfig
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
  config?: Partial<AnalyticsConfig>
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, config = {} }) => {
  const [isInitialized, setIsInitialized] = React.useState(false)
  const [analyticsConfig, setAnalyticsConfig] = React.useState<AnalyticsConfig>({
    debug: process.env.NODE_ENV === 'development',
    enableAutoTracking: true,
    scrollThreshold: 25,
    timeThreshold: 10,
    exitIntentEnabled: true,
    ...config,
  })

  useEffect(() => {
    // Configurer les analytics
    configureAnalytics(analyticsConfig)
    setIsInitialized(true)

    // Debug mode
    if (analyticsConfig.debug) {
      console.log('📊 [Analytics] Provider initialized with config:', analyticsConfig)
    }
  }, [analyticsConfig])

  const contextValue: AnalyticsContextType = {
    isInitialized,
    config: analyticsConfig,
  }

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>
}

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider')
  }
  return context
}

// Composant pour wrapper une section avec tracking automatique
interface TrackingSectionProps {
  sectionName: string
  children: ReactNode
  className?: string
  trackOnView?: boolean
  trackOnScroll?: boolean
  trackTimeSpent?: boolean
  minTimeToTrack?: number
  [key: string]: any
}

export const TrackingSection: React.FC<TrackingSectionProps> = ({
  sectionName,
  children,
  className = '',
  trackOnView = true,
  trackOnScroll = true,
  trackTimeSpent = true,
  minTimeToTrack = 5,
  ...props
}) => {
  const sectionRef = React.useRef<HTMLElement>(null)
  const timeStartRef = React.useRef<number>(0)
  const hasTrackedViewRef = React.useRef<boolean>(false)
  const isVisibleRef = React.useRef<boolean>(false)

  useEffect(() => {
    const currentSection = sectionRef.current
    if (!currentSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisibleRef.current = true
            timeStartRef.current = Date.now()

            if (trackOnView && !hasTrackedViewRef.current) {
              hasTrackedViewRef.current = true
              
              // Utiliser l'API gtag directement pour éviter les imports circulaires
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'section_view', {
                  event_category: 'engagement',
                  event_label: sectionName,
                  section_name: sectionName,
                  page_title: document.title,
                  page_location: window.location.href,
                })
              }
            }
          } else if (isVisibleRef.current) {
            isVisibleRef.current = false
            
            if (trackTimeSpent && timeStartRef.current > 0) {
              const timeSpent = Math.round((Date.now() - timeStartRef.current) / 1000)
              
              if (timeSpent >= minTimeToTrack) {
                // Tracker le temps passé dans la section
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'section_time', {
                    event_category: 'engagement',
                    event_label: sectionName,
                    value: timeSpent,
                    section_name: sectionName,
                    time_spent: timeSpent,
                    page_title: document.title,
                    page_location: window.location.href,
                  })
                }
              }
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(currentSection)

    return () => {
      observer.disconnect()
      
      // Tracker la sortie de section si elle était visible
      if (isVisibleRef.current && trackTimeSpent && timeStartRef.current > 0) {
        const timeSpent = Math.round((Date.now() - timeStartRef.current) / 1000)
        
        if (timeSpent >= minTimeToTrack) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'section_exit', {
              event_category: 'engagement',
              event_label: sectionName,
              value: timeSpent,
              section_name: sectionName,
              time_spent: timeSpent,
              page_title: document.title,
              page_location: window.location.href,
            })
          }
        }
      }
    }
  }, [sectionName, trackOnView, trackTimeSpent, minTimeToTrack])

  return (
    <section
      ref={sectionRef}
      className={className}
      data-analytics-section={sectionName}
      {...props}
    >
      {children}
    </section>
  )
}

// Composant pour tracker les clics automatiquement
interface TrackingButtonProps {
  children: ReactNode
  elementType?: string
  elementId?: string
  category?: string
  conversionType?: 'contact_form' | 'booking' | 'email_click' | 'phone_click' | 'cta_click'
  conversionValue?: number
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  [key: string]: any
}

export const TrackingButton: React.FC<TrackingButtonProps> = ({
  children,
  elementType = 'button',
  elementId,
  category = 'interaction',
  conversionType,
  conversionValue,
  className = '',
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Récupérer le texte du bouton
    const buttonText = event.currentTarget.textContent || ''
    
    // Tracker le clic
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: category,
        event_label: elementId || buttonText,
        element_type: elementType,
        element_id: elementId,
        element_text: buttonText,
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Tracker la conversion si spécifiée
    if (conversionType) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'conversion',
          event_label: conversionType,
          value: conversionValue || 1,
          conversion_type: conversionType,
          conversion_value: conversionValue,
          conversion_currency: 'EUR',
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }

    // Appeler le onClick original
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      data-analytics-element={elementType}
      data-analytics-id={elementId}
      {...props}
    >
      {children}
    </button>
  )
}

// Composant pour tracker les liens
interface TrackingLinkProps {
  children: ReactNode
  href: string
  elementId?: string
  category?: string
  conversionType?: 'email_click' | 'phone_click' | 'cta_click'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  [key: string]: any
}

export const TrackingLink: React.FC<TrackingLinkProps> = ({
  children,
  href,
  elementId,
  category = 'interaction',
  conversionType,
  className = '',
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Récupérer le texte du lien
    const linkText = event.currentTarget.textContent || ''
    
    // Déterminer le type de lien
    let linkType = 'link'
    if (href.startsWith('mailto:')) {
      linkType = 'email'
    } else if (href.startsWith('tel:')) {
      linkType = 'phone'
    } else if (href.startsWith('http')) {
      linkType = 'external_link'
    }

    // Tracker le clic
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: category,
        event_label: elementId || linkText,
        element_type: linkType,
        element_id: elementId,
        element_text: linkText,
        link_url: href,
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Tracker la conversion si spécifiée
    if (conversionType) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'conversion',
          event_label: conversionType,
          value: 1,
          conversion_type: conversionType,
          conversion_value: 1,
          conversion_currency: 'EUR',
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }

    // Appeler le onClick original
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      data-analytics-element="link"
      data-analytics-id={elementId}
      {...props}
    >
      {children}
    </a>
  )
} 