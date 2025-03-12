import RendezVousContent from '@/components/pages/rendez-vous/RendezVousContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lodgic - Rendez-vous',
  description:
    'Prenez rendez-vous avec notre équipe pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
  openGraph: {
    title: 'Lodgic - Rendez-vous',
    description:
      'Prenez rendez-vous avec notre équipe pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
    url: 'https://lodgic-dev.com/rendez-vous',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Prendre rendez-vous',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RendezVous() {
  return <RendezVousContent />
}
