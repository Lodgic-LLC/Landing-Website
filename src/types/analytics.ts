// Types pour les événements analytics
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

export interface PageAnalyticsEvent extends AnalyticsEvent {
  page_title: string
  page_location: string
  page_path: string
}

export interface SectionAnalyticsEvent extends AnalyticsEvent {
  section_name: string
  section_position?: number
  time_spent?: number
}

export interface InteractionAnalyticsEvent extends AnalyticsEvent {
  element_type: string
  element_id?: string
  element_text?: string
  interaction_type: 'click' | 'scroll' | 'hover' | 'focus' | 'form_submit' | 'form_focus'
}

export interface ConversionAnalyticsEvent extends AnalyticsEvent {
  conversion_type: 'contact_form' | 'booking' | 'email_click' | 'phone_click' | 'cta_click'
  conversion_value?: number
  conversion_currency?: string
}

export interface ScrollAnalyticsEvent extends AnalyticsEvent {
  scroll_depth: number
  scroll_direction: 'up' | 'down'
  section_reached?: string
}

export interface TimeAnalyticsEvent extends AnalyticsEvent {
  time_on_page: number
  time_on_section?: number
  engagement_level: 'low' | 'medium' | 'high'
}

export interface ExitAnalyticsEvent extends AnalyticsEvent {
  exit_type: 'page_exit' | 'section_exit' | 'form_abandon' | 'navigation'
  exit_location: string
  time_before_exit: number
  last_interaction?: string
}

// Types pour les événements personnalisés
export type CustomAnalyticsEvent = 
  | PageAnalyticsEvent
  | SectionAnalyticsEvent
  | InteractionAnalyticsEvent
  | ConversionAnalyticsEvent
  | ScrollAnalyticsEvent
  | TimeAnalyticsEvent
  | ExitAnalyticsEvent

// Configuration des événements
export interface AnalyticsConfig {
  debug?: boolean
  enableAutoTracking?: boolean
  scrollThreshold?: number
  timeThreshold?: number
  exitIntentEnabled?: boolean
} 