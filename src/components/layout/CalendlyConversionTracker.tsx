'use client'

import { useEffect } from 'react'

interface CalendlyConversionTrackerProps {
  value?: number
  currency?: string
}

export default function CalendlyConversionTracker({ value = 1.0, currency = 'EUR' }: CalendlyConversionTrackerProps) {
  useEffect(() => {
    // Fonction pour suivre la conversion lorsque Calendly est chargé et qu'un événement est planifié
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Vérifier que gtag est disponible
        if (typeof window !== 'undefined' && window.gtag) {
          console.log('Conversion tracking: Calendly event scheduled')
          window.gtag('event', 'conversion', {
            send_to: 'AW-16908078298/6Jq7CLHx-qUaENqZs_4-',
            value: value,
            currency: currency,
          })
        }
      }
    }

    // Ajouter l'écouteur d'événement pour Calendly
    window.addEventListener('message', handleCalendlyEvent)

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [value, currency])

  return null
}
