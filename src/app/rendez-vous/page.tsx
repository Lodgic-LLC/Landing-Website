import RendezVousContent from '@/components/pages/rendez-vous/RendezVousContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lodgic - Planifier un Rendez-vous',
  description:
    'Prenez rendez-vous avec notre équipe pour discuter de vos besoins numériques et obtenir des conseils personnalisés pour votre projet mobile ou web.',
  alternates: {
    canonical: 'https://lodgic-dev.com/rendez-vous',
  },
  keywords: [
    'rendez-vous',
    'consultation',
    'développement applications mobiles',
    'planification projet',
    'conseil numérique',
    'prise de rendez-vous',
    'consultation gratuite',
    'projet digital',
    'planification application',
    'développeur application mobile',
    'expert développement web',
    'réunion stratégique',
    'rendez-vous en ligne',
  ],
  openGraph: {
    title: 'Lodgic - Planifier un Rendez-vous',
    description:
      'Planifiez une consultation gratuite avec notre équipe pour discuter de votre projet numérique et obtenir des conseils d\'experts sur mesure.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Lodgic - Planifier un Rendez-vous',
    description:
      'Planifiez une consultation gratuite avec notre équipe pour discuter de votre projet numérique et obtenir des conseils d\'experts sur mesure.',
    images: ['https://lodgic-dev.com/FullLogo_Transparent_NoBuffer.png'],
  },
}

export default function RendezVous() {
  return (
    <>
      <RendezVousContent />
    </>
  )
}
