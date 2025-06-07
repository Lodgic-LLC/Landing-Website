import { Metadata } from 'next'
import { FaChevronRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Lodgic',
  description:
    'Politique de Confidentialité pour Lodgic - Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
  alternates: {
    canonical: 'https://lodgic-dev.com/politique-confidentialite',
  },
  openGraph: {
    title: 'Politique de Confidentialité - Lodgic',
    description:
      'Politique de Confidentialité pour Lodgic - Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
    url: 'https://lodgic-dev.com/politique-confidentialite',
    siteName: 'Lodgic',
    images: [
      {
        url: 'https://lodgic-dev.com/FullLogo_Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Lodgic - Politique de Confidentialité',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  keywords: [
    'politique de confidentialité',
    'protection des données',
    'RGPD',
    'vie privée',
    'données personnelles',
    'Lodgic',
    'confidentialité',
    'droits des utilisateurs',
    'cookies',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de Confidentialité - Lodgic',
    description: 'Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
    images: ['https://lodgic-dev.com/FullLogo_Transparent.png'],
  },
}

export default function PolitiqueConfidentialite() {
  const lastUpdated = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="bg-[#FAF3E0] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Politique de Confidentialité</h1>
          <p className="text-sm text-[#374151]">Dernière mise à jour : {lastUpdated}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E67E22] to-[#E67E22]/70 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="bg-[#FFFFFF] p-8 sm:p-10 md:p-12 rounded-xl shadow-xl border border-gray-200 hover:border-[#E67E22]/50 transition-shadow duration-300 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              1. Collecte des données personnelles
            </h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              Lodgic peut collecter les données personnelles suivantes :
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Nom et prénom</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Adresse email</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Numéro de téléphone</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Informations relatives à votre entreprise</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Données de connexion et de navigation sur le site
                </span>
              </li>
            </ul>
            <p className="text-[#374151] leading-relaxed mb-4">Ces données sont collectées lorsque vous :</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Remplissez un formulaire de contact</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Prenez rendez-vous via notre site</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Vous inscrivez à notre newsletter</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Naviguez sur notre site (via les cookies)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              2. Utilisation des données
            </h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              Les données personnelles collectées sont utilisées pour :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Répondre à vos demandes de contact ou d'information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Gérer vos rendez-vous</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Vous envoyer des communications marketing (avec votre consentement)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Améliorer notre site et nos services</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Établir des statistiques de visite</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              3. Base légale du traitement
            </h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              Le traitement de vos données personnelles est fondé sur :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Votre consentement</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">L'exécution d'un contrat auquel vous êtes partie</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Notre intérêt légitime à développer et promouvoir nos activités
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Le respect de nos obligations légales</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              4. Destinataires des données
            </h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              Vos données personnelles sont destinées à notre équipe interne. Elles peuvent également être partagées
              avec des sous-traitants (hébergement, CRM, outils marketing) qui agissent selon nos instructions et pour
              notre compte.
            </p>
            <p className="text-[#374151] leading-relaxed">Nous ne vendons ni ne louons vos données à des tiers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              5. Durée de conservation
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Vos données personnelles sont conservées pour la durée nécessaire à la réalisation des finalités pour
              lesquelles elles ont été collectées, augmentée des délais légaux de prescription.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">6. Vos droits</h2>
            <p className="text-[#374151] leading-relaxed mb-4">
              Conformément à la réglementation applicable, vous disposez des droits suivants :
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit d'accès à vos données</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit de rectification</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit à l'effacement (droit à l'oubli)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit à la limitation du traitement</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit à la portabilité</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">Droit d'opposition</span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Droit de retirer votre consentement à tout moment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaChevronRight className="w-3 h-3 text-[#E67E22] mt-1.5 flex-shrink-0" />
                <span className="text-[#374151] leading-relaxed">
                  Droit d'introduire une réclamation auprès d'une autorité de contrôle
                </span>
              </li>
            </ul>
            <p className="text-[#374151] leading-relaxed">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse email :{' '}
              <a
                href="mailto:lodgicdev@gmail.com"
                className="text-[#E67E22] hover:text-[#E67E22]/80 transition-colors duration-300"
              >
                lodgicdev@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">7. Cookies</h2>
            <p className="text-[#374151] leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre
              navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">
              8. Modifications
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les
              modifications prendront effet dès leur publication sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6 pb-2 border-b border-gray-200">9. Contact</h2>
            <p className="text-[#374151] leading-relaxed">
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à l'adresse
              email :{' '}
              <a
                href="mailto:lodgicdev@gmail.com"
                className="text-[#E67E22] hover:text-[#E67E22]/80 transition-colors duration-300"
              >
                lodgicdev@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
