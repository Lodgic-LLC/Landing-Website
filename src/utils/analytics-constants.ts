// Constantes pour les événements analytics
export const ANALYTICS_EVENTS = {
  // Événements de page
  PAGE_VIEW: 'page_view',
  PAGE_LOAD: 'page_load',
  PAGE_EXIT: 'page_exit',
  PAGE_SCROLL: 'page_scroll',
  
  // Événements de section
  SECTION_VIEW: 'section_view',
  SECTION_ENTER: 'section_enter',
  SECTION_EXIT: 'section_exit',
  SECTION_SCROLL: 'section_scroll',
  
  // Événements d'interaction
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_SUBMIT: 'form_submit',
  FORM_FOCUS: 'form_focus',
  FORM_ABANDON: 'form_abandon',
  
  // Événements de conversion
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  BOOKING_SUBMIT: 'booking_submit',
  EMAIL_CLICK: 'email_click',
  PHONE_CLICK: 'phone_click',
  CTA_CLICK: 'cta_click',
  
  // Événements d'engagement
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  TIME_ON_SECTION: 'time_on_section',
  ENGAGEMENT_HIGH: 'engagement_high',
  
  // Événements de sortie
  EXIT_INTENT: 'exit_intent',
  NAVIGATION_EXIT: 'navigation_exit',
  BROWSER_CLOSE: 'browser_close',
} as const

export const ANALYTICS_CATEGORIES = {
  // Catégories principales
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  NAVIGATION: 'navigation',
  INTERACTION: 'interaction',
  PERFORMANCE: 'performance',
  
  // Catégories par page
  HOME: 'home_page',
  ABOUT: 'about_page',
  SERVICES: 'services_page',
  CONTACT: 'contact_page',
  BLOG: 'blog_page',
  BOOKING: 'booking_page',
  
  // Catégories par section
  HERO: 'hero_section',
  FEATURES: 'features_section',
  PROCESS: 'process_section',
  TESTIMONIALS: 'testimonials_section',
  FAQ: 'faq_section',
  CTA: 'cta_section',
  FOOTER: 'footer_section',
} as const

export const ANALYTICS_LABELS = {
  // Labels pour les interactions
  PRIMARY_CTA: 'primary_cta',
  SECONDARY_CTA: 'secondary_cta',
  NAVIGATION_MENU: 'navigation_menu',
  SOCIAL_LINK: 'social_link',
  CONTACT_INFO: 'contact_info',
  
  // Labels pour les formulaires
  CONTACT_FORM: 'contact_form',
  BOOKING_FORM: 'booking_form',
  NEWSLETTER: 'newsletter',
  
  // Labels pour les pages
  HOME_PAGE: 'home_page',
  ABOUT_PAGE: 'about_page',
  SERVICES_PAGE: 'services_page',
  CONTACT_PAGE: 'contact_page',
  BLOG_PAGE: 'blog_page',
  BLOG_POST: 'blog_post',
  
  // Labels pour les sections
  HERO_SECTION: 'hero_section',
  FEATURES_SECTION: 'features_section',
  PROCESS_SECTION: 'process_section',
  ABOUT_SECTION: 'about_section',
  TESTIMONIALS_SECTION: 'testimonials_section',
  FAQ_SECTION: 'faq_section',
  CTA_SECTION: 'cta_section',
} as const

// Configuration par défaut
export const DEFAULT_ANALYTICS_CONFIG = {
  debug: false,
  enableAutoTracking: true,
  scrollThreshold: 25, // Pourcentage de scroll pour déclencher l'événement
  timeThreshold: 10, // Secondes avant de considérer un engagement
  exitIntentEnabled: true,
} as const

// Seuils d'engagement
export const ENGAGEMENT_THRESHOLDS = {
  LOW: 10, // 10 secondes
  MEDIUM: 30, // 30 secondes
  HIGH: 60, // 1 minute
  VERY_HIGH: 180, // 3 minutes
} as const

// Seuils de scroll
export const SCROLL_THRESHOLDS = [10, 25, 50, 75, 90, 100] as const 