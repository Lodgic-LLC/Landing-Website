import FAQ from '@/components/pages/home/FAQ'
import Features from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Process from '@/components/pages/home/Process'
import ProjectCTA from '@/components/pages/home/ProjectCTA'
import SuccessStories from '@/components/pages/home/SuccessStories'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agence de développement d'applications mobiles - Lodgic",
  description:
    'Lodgic est une agence de développement web et mobile spécialisée dans la création de sites et applications mobiles modernes, réactifs et performants.',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Process />
      <ProjectCTA />
      <SuccessStories />
      <FAQ />
    </div>
  )
}
