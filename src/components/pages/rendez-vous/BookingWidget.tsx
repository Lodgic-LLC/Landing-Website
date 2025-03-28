import React, { useEffect } from 'react'

declare global {
  interface Window {
    Calendly: any
  }
}

function BookingWidget() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full h-full relative">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/contact-lodgic/45min"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}

export default BookingWidget
