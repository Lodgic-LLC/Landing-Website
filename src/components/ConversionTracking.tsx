'use client'
import { useEffect } from 'react'
import { trackClick } from '@/lib/analytics'

const allowed = new Set(['contact', 'service', 'guide', 'case-study', 'brief-download', 'email', 'telephone'])
/** Événements anonymes des seuls liens explicitement marqués. Consentement géré par analytics.ts. */
export default function ConversionTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-track]') : null
      const action = target?.dataset.track
      if (!action || !allowed.has(action)) return
      trackClick(`parcours-${action}`, { location: target?.dataset.location ?? 'page' })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
