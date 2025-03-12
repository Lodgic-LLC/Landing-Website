import ContactForm from '@/components/pages/contact/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lodgic - Contact',
  description: 'Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
  openGraph: {
    title: 'Lodgic - Contact',
    description: 'Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
    url: 'https://lodgic-dev.com/contact',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Contactez-nous',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Contact() {
  return <ContactForm />
}
