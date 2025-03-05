'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
      disable: 'mobile',
    })
  }, [])

  return null // Ce composant ne rend rien
}
