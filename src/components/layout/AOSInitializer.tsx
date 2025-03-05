'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    // Fonction pour initialiser AOS avec la bonne configuration selon la taille d'écran
    const initAOS = () => {
      // Vérifier si window est défini (côté client uniquement)
      if (typeof window !== 'undefined') {
        // Initialiser AOS avec désactivation conditionnelle sur mobile
        AOS.init({
          duration: 800,
          easing: 'ease-out',
          once: true,
          offset: 50,
          disable: window.innerWidth < 768,
        })

        // Forcer une mise à jour immédiate des animations
        setTimeout(() => {
          AOS.refresh()
        }, 100)
      }
    }

    // Initialiser immédiatement
    initAOS()

    // Ajouter un écouteur pour réinitialiser lors des changements de taille d'écran
    window.addEventListener('resize', initAOS)

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('resize', initAOS)
    }
  }, [])

  return null // Ce composant ne rend rien
}
