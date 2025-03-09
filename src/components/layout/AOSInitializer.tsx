'use client'

import { useEffect } from 'react'
// Suppression de l'import AOS
// import AOS from 'aos'
// import 'aos/dist/aos.css'

export default function AOSInitializer() {
  // Suppression de l'initialisation AOS
  useEffect(() => {
    // AOS.init({
    //   duration: 800,
    //   once: true,
    //   easing: 'ease-out-cubic',
    // })
  }, [])

  return null // Ce composant ne rend rien
}
