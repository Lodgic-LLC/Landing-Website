import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merci pour votre message - Lodgic',
  description: 'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
  openGraph: {
    title: 'Merci pour votre message - Lodgic',
    description: 'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
    url: 'https://lodgic-dev.com/merci',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Merci pour votre message',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Merci pour votre message !</h1>

          <p className="text-lg text-gray-600 mb-8">
            Nous l'avons bien reçu et vous répondrons dans les plus brefs délais.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
