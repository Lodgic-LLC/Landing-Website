import ContactForm from '@/components/pages/contact/ContactForm'
import { Metadata } from 'next'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaChevronRight, FaRocket } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { TrackingSection, TrackingLink } from '@/components/analytics/AnalyticsProvider'
import { PageTracker } from '@/components/analytics/PageTracker'

export const metadata: Metadata = {
  title: 'Contact - Lodgic',
  description: 'Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
  alternates: {
    canonical: 'https://lodgic-dev.com/contact',
  },
  openGraph: {
    title: 'Contact - Lodgic',
    description: 'Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
    url: 'https://lodgic-dev.com/contact',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Contactez-nous - Lodgic',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'contact',
    'Lodgic',
    'agence développement',
    'développeur mobile',
    'nous contacter',
    'devis application mobile',
    'projet numérique',
    'demande information',
    'consultation projet',
    'Toulouse développeur',
    'développement application',
    'formulaire contact',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Lodgic',
    description: 'Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider',
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

export default function Contact() {
  return (
    <>
      <PageTracker 
        pageName="Contact" 
        pageCategory="contact_page"
        additionalData={{
          page_type: 'contact',
          conversion_goal: 'lead_generation',
          form_available: true
        }}
      />
      {/* Hero Section */}
      <TrackingSection sectionName="contact_hero" trackOnView={true} trackTimeSpent={true} className="w-full bg-[#FFFFFF] pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden relative">
        {/* Formes abstraites en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="100" r="300" fill="#E67E22" fillOpacity="0.05" />
            <circle cx="1200" cy="700" r="250" fill="#E67E22" fillOpacity="0.05" />
            <path d="M-200 400 Q400 200 720 400 T1600 400" stroke="#E67E22" strokeOpacity="0.03" strokeWidth="100" />
            {/* Points lumineux */}
            <g opacity="0.8">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={`hero-dot-contact-${i}`}
                  cx={Math.random() * 1440}
                  cy={Math.random() * 800}
                  r={Math.random() * 2 + 1}
                  fill="#2C3E50"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6">
                Entrons en <span className="text-[#E67E22]">contact</span>
              </h1>

              <p className="text-[#374151] text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Nous sommes à votre écoute pour échanger sur votre projet et répondre à toutes vos questions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <TrackingLink
                  href="/rendez-vous"
                  className="bg-[#E67E22] text-[#FFFFFF] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#E67E22]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center text-lg"
                  conversionType="cta_click"
                  elementId="hero_booking_cta"
                  category="conversion"
                >
                  <FaCalendarAlt className="w-5 h-5 mr-2.5" />
                  Prendre un Rendez-vous
                </TrackingLink>
                <Link
                  href="/services"
                  className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#2C3E50]/10 hover:border-[#2C3E50] transition-all flex items-center group text-lg"
                >
                  Nos Services
                  <FaChevronRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-2/5 mt-10 lg:mt-0 hidden lg:block">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/svg/contact-us.svg"
                    alt="Contactez Lodgic pour vos projets digitaux"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    priority
                  />
                </div>
                {/* Éléments décoratifs supplémentaires */}
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#E67E22]/20 rounded-full blur-md animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-[#E67E22]/30 rounded-full animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Forme de transition vers le contenu suivant */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: '100px', transform: 'translateY(1px)' }}
        >
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0,50 C360,0 1080,120 1440,50 L1440,100 L0,100 Z" fill="#FAF3E0" />
          </svg>
        </div>
      </TrackingSection>

      {/* Section Principale */}
      <TrackingSection sectionName="contact_main" trackOnView={true} trackTimeSpent={true} className="py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Carte de contact - Colonne Gauche */}
            <div className="lg:col-span-1">
              <div className="bg-[#FFFFFF] rounded-xl shadow-xl p-8 border border-gray-200 hover:border-[#E67E22]/50 hover:shadow-2xl transition-shadow duration-300 sticky top-24">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mr-3 rounded-full"></div>
                      Nos coordonnées
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 flex items-center justify-center transition-colors duration-300">
                          <FaEnvelope className="w-5 h-5 text-[#E67E22]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#111827]">Email</h3>
                        <TrackingLink
                          href="mailto:lodgicdev@gmail.com"
                          className="text-[#E67E22] hover:text-[#E67E22]/80 transition-colors duration-300 break-all"
                          conversionType="email_click"
                          elementId="contact_email"
                          category="conversion"
                        >
                          lodgicdev@gmail.com
                        </TrackingLink>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 flex items-center justify-center transition-colors duration-300">
                          <FaPhone className="w-5 h-5 text-[#E67E22]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#111827]">Téléphone</h3>
                        <p className="text-[#374151]">Disponible sur rendez-vous</p>
                        <TrackingLink
                          href="/rendez-vous"
                          className="text-[#E67E22] hover:text-[#E67E22]/80 transition-colors duration-300 inline-flex items-center mt-1 font-medium"
                          conversionType="cta_click"
                          elementId="phone_booking_cta"
                          category="conversion"
                        >
                          Prendre rendez-vous
                          <svg
                            className="w-4 h-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </TrackingLink>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 flex items-center justify-center transition-colors duration-300">
                          <FaMapMarkerAlt className="w-5 h-5 text-[#E67E22]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#111827]">Localisation</h3>
                        <p className="text-[#374151]">Toulouse, France</p>
                        <p className="text-[#374151]/80 text-sm mt-1">
                          Travail à distance sur toute la France et à l'international
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-[#E67E22]/10 group-hover:bg-[#E67E22]/20 flex items-center justify-center transition-colors duration-300">
                          <FaClock className="w-5 h-5 text-[#E67E22]" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-[#111827]">Horaires</h3>
                        <p className="text-[#374151]">Lundi - Vendredi : 9h - 18h</p>
                        <p className="text-[#374151]/80 text-sm mt-1">Réponse sous 24h ouvrées</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#111827] mb-4">Retrouvez-nous</h3>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md border border-gray-300">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.0598028624!2d1.3629132758433282!3d43.60080324959764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1692440665349!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact - Colonne Droite */}
            <div className="lg:col-span-2">
              <ContactForm />

              {/* Section FAQ */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-[#111827] mb-10 flex items-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mr-3 rounded-full"></div>
                  Questions fréquentes
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#FFFFFF] rounded-lg p-6 border border-gray-200 hover:border-[#E67E22]/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <h3 className="font-semibold text-lg text-[#111827] mb-2">
                      Quels types de projets acceptez-vous ?
                    </h3>
                    <p className="text-[#374151]">
                      Nous développons principalement des applications web et mobile sur-mesure pour les particuliers,
                      entreprises et startups. Nous travaillons avec des projets de toutes tailles, du site vitrine à
                      l'application complexe avec backend et API.
                    </p>
                  </div>

                  <div className="bg-[#FFFFFF] rounded-lg p-6 border border-gray-200 hover:border-[#E67E22]/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <h3 className="font-semibold text-lg text-[#111827] mb-2">
                      Comment se déroule une collaboration ?
                    </h3>
                    <p className="text-[#374151]">
                      Après un premier contact, nous organisons un appel découverte pour comprendre votre projet. Nous
                      vous présentons ensuite une proposition détaillée incluant planning, budget et méthodologie. Une
                      fois validée, nous commençons le développement avec des points réguliers.
                    </p>
                  </div>

                  <div className="bg-[#FFFFFF] rounded-lg p-6 border border-gray-200 hover:border-[#E67E22]/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <h3 className="font-semibold text-lg text-[#111827] mb-2">
                      Quels sont vos délais moyens de réalisation ?
                    </h3>
                    <p className="text-[#374151]">
                      Les délais varient selon la complexité du projet. Un site vitrine peut être réalisé en quelques
                      jours/semaines, tandis qu'une application complète nécessite plus de temps. Nous établissons
                      ensemble un planning réaliste dès le début du projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TrackingSection>

      {/* Section CTA */}
      <TrackingSection sectionName="contact_cta" trackOnView={true} trackTimeSpent={true} className="py-20 md:py-28 bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="720" cy="250" r="300" fill="#FFFFFF" />
            <circle cx="100" cy="100" r="150" fill="#FFFFFF" />
            <circle cx="1300" cy="400" r="200" fill="#FFFFFF" />
          </svg>
          {/* Points lumineux */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#FFFFFF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-[#FFFFFF]/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#FFFFFF]/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
            Vous préférez programmer un appel ?
          </h2>
          <p className="text-[#FFFFFF]/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Nous proposons également des créneaux de rendez-vous téléphoniques pour discuter plus en détail de votre
            projet.
          </p>
          <TrackingLink
            href="/rendez-vous"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FFFFFF] text-[#2C3E50] rounded-lg font-semibold hover:bg-[#FAF3E0] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            conversionType="cta_click"
            elementId="bottom_booking_cta"
            category="conversion"
          >
            <FaPhone className="w-5 h-5 mr-2.5" />
            Planifier un rendez-vous
          </TrackingLink>
        </div>
      </TrackingSection>
    </>
  )
}
