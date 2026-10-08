'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -30px 0px', threshold: 0.08 })

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 30) {
        element.classList.add('reveal-visible')
        return
      }
      element.classList.add('reveal-pending')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
