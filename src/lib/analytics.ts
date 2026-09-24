/**
 * Envoi d'événements à Google Analytics et Google Ads.
 *
 * Les scripts Google ne sont chargés qu'après acceptation des cookies
 * (voir ConsentScripts) : tant qu'ils ne le sont pas, window.gtag n'existe
 * pas et ces fonctions ne font simplement rien.
 */

type EventParams = Record<string, string | number | boolean | undefined>

type TrackingCategory = 'analytics' | 'marketing'
const consent: Record<TrackingCategory, boolean> = { analytics: false, marketing: false }

export function setTrackingConsent(analytics: boolean, marketing: boolean) {
  consent.analytics = analytics
  consent.marketing = marketing
}

/** Identifiant de conversion Google Ads, à passer à trackConversion. */
export const ADS_CONVERSION_LABEL = 'AW-16908078298'

function send(event: string, category: TrackingCategory, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  if (!consent[category]) return
  window.gtag?.('event', event, params)
}

/** Une page a été consultée. */
export function trackPageView(pageName: string, params: EventParams = {}) {
  send('page_view', 'analytics', { page_title: pageName, page_path: window.location.pathname, ...params })
}

/** Un visiteur a envoyé un formulaire : c'est la conversion qui compte. */
export function trackConversion(source: string, params: EventParams = {}) {
  send('generate_lead', 'analytics', { source, ...params })
  send('conversion', 'marketing', { send_to: ADS_CONVERSION_LABEL, source })
}

/** Un clic sur un élément important (téléphone, e-mail, bouton d'appel). */
export function trackClick(label: string, params: EventParams = {}) {
  send('click', 'analytics', { label, ...params })
}

export function trackWebVital(name: string, value: number, id: string) {
  send(name, 'analytics', { value, event_category: 'Web Vitals', event_label: id })
}
