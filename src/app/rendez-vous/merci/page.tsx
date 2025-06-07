'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MerciPage() {
  const router = useRouter()

  useEffect(() => {
    // Envoyer l'événement de conversion Google Ads
    window.gtag('event', 'conversion', {
      send_to: 'AW-16908078298/ads_conversion_Contact_Chargement_de_p_1',
      value: 1.0,
      currency: 'EUR',
    })

    // Redirection automatique après 5 secondes
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-[#FAF3E0] flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-[#FFFFFF] rounded-xl shadow-2xl p-8 md:p-12 border border-gray-200 hover:border-[#E67E22]/50 transition-all duration-300">
          <div className="w-20 h-20 bg-[#A3B18A]/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-[#A3B18A]/30">
            <svg
              className="w-10 h-10 text-[#A3B18A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Merci pour votre rendez-vous !</h1>
          <p className="text-lg text-[#374151] mb-8">
            Votre consultation a été confirmée. Vous recevrez un email de confirmation avec tous les détails.
          </p>
          <div className="text-sm text-gray-600">
            Vous serez redirigé vers la page d'accueil dans quelques secondes...
          </div>
        </div>
      </div>
    </div>
  )
}
