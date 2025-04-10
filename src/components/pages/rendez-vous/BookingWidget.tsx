'use client'

import { useEffect } from 'react'

const BookingWidget = () => {
  useEffect(() => {
    // Initialise Calendly widget après le chargement du composant
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      console.log('Calendly widget loaded successfully')
    }
    document.body.appendChild(script)

    return () => {
      // Nettoyer le script lorsque le composant est démonté
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="h-full w-full flex flex-col">
      <div
        className="calendly-inline-widget h-[650px] w-full border border-gray-200 rounded-b-lg"
        data-url="https://calendly.com/contact-lodgic/45min"
        style={{ minWidth: '320px' }}
      />
      <div className="p-4 text-center text-sm text-gray-500">
        Si le widget ne s'affiche pas correctement, vous pouvez{' '}
        <a
          href="https://calendly.com/contact-lodgic/45min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          réserver directement ici
        </a>
      </div>
    </div>
  )
}

export default BookingWidget
