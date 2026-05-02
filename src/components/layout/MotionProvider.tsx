'use client'

import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Disables all Framer Motion animations on mobile (< 768px).
 * On desktop, animations behave normally.
 * Uses MotionConfig reducedMotion="always" which sets all durations to 0.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  )
}
