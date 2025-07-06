import { CustomAnalyticsEvent, AnalyticsConfig } from '@/types/analytics'
import { DEFAULT_ANALYTICS_CONFIG } from './analytics-constants'

// Configuration globale
let globalConfig: AnalyticsConfig = DEFAULT_ANALYTICS_CONFIG

// Fonction pour configurer les analytics
export const configureAnalytics = (config: Partial<AnalyticsConfig>) => {
  globalConfig = { ...globalConfig, ...config }
}

// Fonction pour vérifier si gtag est disponible
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Fonction pour loguer les événements en mode debug
const logEvent = (event: CustomAnalyticsEvent, eventName: string) => {
  if (globalConfig.debug) {
    console.log(`🔍 [Analytics] ${eventName}:`, event)
  }
}

// Fonction principale pour envoyer un événement
export const sendAnalyticsEvent = (eventName: string, event: CustomAnalyticsEvent) => {
  if (!isGtagAvailable()) {
    if (globalConfig.debug) {
      console.warn('⚠️ [Analytics] gtag not available')
    }
    return
  }

  logEvent(event, eventName)

  try {
    // Paramètres de base pour tous les événements
    const baseParams = {
      event_category: event.category,
      event_label: event.label || '',
      value: event.value || 0,
      custom_map: event.custom_parameters || {},
      // Informations contextuelles
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
    }

    // Envoi vers Google Analytics
    window.gtag('event', eventName, baseParams)

    // Envoi vers Google Ads si c'est une conversion
    if (event.category === 'conversion' && 'conversion_type' in event) {
      const conversionEvent = event as any
      if (conversionEvent.conversion_type === 'contact_form') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-16908078298/contact_form_conversion',
          value: conversionEvent.conversion_value || 1,
          currency: conversionEvent.conversion_currency || 'EUR',
        })
      }
    }

  } catch (error) {
    console.error('❌ [Analytics] Error sending event:', error)
  }
}

// Fonctions spécialisées pour différents types d'événements

// Événement de vue de page
export const trackPageView = (pageName: string, additionalData?: Record<string, any>) => {
  sendAnalyticsEvent('page_view', {
    action: 'page_view',
    category: 'navigation',
    label: pageName,
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    custom_parameters: additionalData,
  })
}

// Événement de clic sur un élément
export const trackClick = (
  elementType: string,
  elementId?: string,
  elementText?: string,
  category: string = 'interaction',
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('click', {
    action: 'click',
    category,
    label: elementId || elementText || elementType,
    element_type: elementType,
    element_id: elementId,
    element_text: elementText,
    interaction_type: 'click',
    custom_parameters: additionalData,
  })
}

// Événement de scroll
export const trackScroll = (
  scrollDepth: number,
  sectionReached?: string,
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('scroll', {
    action: 'scroll_depth',
    category: 'engagement',
    label: sectionReached || `${scrollDepth}%`,
    value: scrollDepth,
    scroll_depth: scrollDepth,
    scroll_direction: 'down',
    section_reached: sectionReached,
    custom_parameters: additionalData,
  })
}

// Événement de temps passé
export const trackTimeOnPage = (
  timeSpent: number,
  engagementLevel: 'low' | 'medium' | 'high',
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('time_on_page', {
    action: 'time_on_page',
    category: 'engagement',
    label: engagementLevel,
    value: timeSpent,
    time_on_page: timeSpent,
    engagement_level: engagementLevel,
    custom_parameters: additionalData,
  })
}

// Événement de sortie
export const trackExit = (
  exitType: 'page_exit' | 'section_exit' | 'form_abandon' | 'navigation',
  exitLocation: string,
  timeBeforeExit: number,
  lastInteraction?: string,
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('exit', {
    action: exitType,
    category: 'navigation',
    label: exitLocation,
    value: timeBeforeExit,
    exit_type: exitType,
    exit_location: exitLocation,
    time_before_exit: timeBeforeExit,
    last_interaction: lastInteraction,
    custom_parameters: additionalData,
  })
}

// Événement de conversion
export const trackConversion = (
  conversionType: 'contact_form' | 'booking' | 'email_click' | 'phone_click' | 'cta_click',
  conversionValue?: number,
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('conversion', {
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: conversionValue || 1,
    conversion_type: conversionType,
    conversion_value: conversionValue,
    conversion_currency: 'EUR',
    custom_parameters: additionalData,
  })
}

// Événement d'engagement avec une section
export const trackSectionEngagement = (
  sectionName: string,
  action: 'enter' | 'exit' | 'scroll',
  timeSpent?: number,
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('section_engagement', {
    action: `section_${action}`,
    category: 'engagement',
    label: sectionName,
    value: timeSpent || 0,
    section_name: sectionName,
    time_spent: timeSpent,
    custom_parameters: additionalData,
  })
}

// Événement de formulaire
export const trackFormInteraction = (
  formType: string,
  interaction: 'focus' | 'submit' | 'abandon',
  fieldName?: string,
  additionalData?: Record<string, any>
) => {
  sendAnalyticsEvent('form_interaction', {
    action: `form_${interaction}`,
    category: interaction === 'submit' ? 'conversion' : 'interaction',
    label: `${formType}_${fieldName || 'form'}`,
    element_type: 'form',
    element_id: formType,
    interaction_type: interaction === 'submit' ? 'form_submit' : 'form_focus',
    custom_parameters: additionalData,
  })
}

// Utilitaire pour débouncer les événements
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Utilitaire pour throttler les événements
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
} 