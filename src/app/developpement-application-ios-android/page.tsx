import PageSeo from '@/components/PageSeo'
import { buildSeoMetadata } from '@/lib/seo'

const PATH = '/developpement-application-ios-android'
const NAME = "Développement d'application iOS et Android"
const DESCRIPTION =
  "Publier une application sur l'App Store et Google Play : ce que ça implique, ce que je prends en charge, et ce que vous devrez garder à jour. Développeur indépendant à Toulouse, ingénieur en informatique."

export const metadata = buildSeoMetadata({
  path: PATH,
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    'développement application iOS Android',
    'publier application App Store',
    'publier application Google Play',
    'développeur iOS Toulouse',
    'développeur Android Toulouse',
    'validation App Store',
  ],
})

export default function Page() {
  return (
    <PageSeo
      path={PATH}
      name={NAME}
      description={DESCRIPTION}
      trackingKeyword="developpement_application_ios_android"
      hero={{
        eyebrow: 'App Store et Google Play · Toulouse',
        title: "Développement d'application iOS et Android",
        highlight: 'et tout ce qu’il faut pour être publié',
        description: (
          <>
            Développer l’application est une chose ; la faire accepter par Apple, la publier sur Google Play et la garder
            en ligne malgré les mises à jour des systèmes en est une autre. Voici ce que je prends en charge,{' '}
            <strong>de bout en bout</strong>.
          </>
        ),
        badges: ['App Store', 'Google Play', 'Validation Apple', 'Mises à jour iOS et Android', 'Toulouse et à distance'],
        visual: 'platforms',
      }}
      expertise={{
        eyebrow: 'Publier, et rester publié',
        heading: (
          <>
            Ce qui se passe entre « l’app est finie » et{' '}
            <span className="text-[#C2542D]">« l’app est dans le store »</span>.
          </>
        ),
        intro:
          'C’est l’étape que les devis oublient et qui fait perdre des semaines : comptes développeur, règles d’Apple, fiches, permissions, tests sur appareils. Je la connais et je la prends en charge.',
        cards: [
          {
            num: '01',
            title: 'Comptes développeur',
            body: 'Apple et Google exigent chacun un compte, avec des justificatifs d’entreprise et des frais. Je les crée à votre nom — l’application vous appartient, pas à moi — et je vous explique ce qu’il faut renouveler.',
            bullets: ['Compte Apple Developer (99 $ par an)', 'Compte Google Play (25 $ une fois)', 'Ouverts au nom de votre entreprise', 'Vous gardez tous les accès'],
          },
          {
            num: '02',
            title: 'Les règles d’Apple et de Google',
            body: 'Apple refuse des applications tous les jours : bouton de suppression de compte manquant, permissions mal expliquées, paiement hors des règles. Je conçois l’application pour passer du premier coup.',
            bullets: ['Règles de l’App Store appliquées dès la conception', 'Textes de permissions rédigés correctement', 'Paiement conforme aux règles des stores', 'Réponses aux refus, s’il y en a'],
          },
          {
            num: '03',
            title: 'iPhone et Android ne se ressemblent pas',
            body: 'Bouton retour, menus, notifications, partage : chaque système a ses habitudes. Je respecte celles de chacun, pour que l’application paraisse naturelle à vos utilisateurs des deux côtés.',
            bullets: ['Navigation propre à chaque système', 'Notifications configurées pour iOS et Android', 'Partage, appareil photo, fichiers', 'Tailles d’écran et tablettes'],
          },
          {
            num: '04',
            title: 'Tests sur de vrais appareils',
            body: 'Un simulateur ne dit pas si l’app rame sur un Android à 150 €. Je teste sur des téléphones réels, récents et anciens, et vous recevez une version test installable sur le vôtre.',
            bullets: ['Version test TestFlight et Android', 'Appareils anciens et récents', 'Réseau lent et mode avion', 'Suivi des plantages après publication'],
          },
          {
            num: '05',
            title: 'Fiche store et visibilité',
            body: 'Nom, captures d’écran, description, mots-clés : la fiche fait la moitié des téléchargements. Je la prépare avec vous, en pensant à ce que vos clients tapent réellement.',
            bullets: ['Captures d’écran par appareil', 'Description et mots-clés', 'Icône et visuels aux bons formats', 'Fiche en français, et en anglais si besoin'],
          },
          {
            num: '06',
            title: 'Rester en ligne dans deux ans',
            body: 'Chaque automne, iOS et Android changent. Une application jamais mise à jour finit par planter ou par être retirée. Je prévois ces mises à jour, et je vous dis à l’avance ce qu’elles coûtent.',
            bullets: ['Mises à jour annuelles iOS et Android', 'Dépendances tenues à jour', 'Alertes de plantage traitées', 'Forfait de suivi clair, sans surprise'],
          },
        ],
        closing: (
          <>
            <p>
              Je développe en <strong>React Native</strong>, ce qui me permet de livrer les deux versions à partir d’un
              seul code — le détail est sur la page dédiée. Le résultat : une application sur les deux stores à partir de{' '}
              <strong>6 000 €</strong>, en <strong>2 à 4 mois</strong>, avec un prix fixé par écrit avant de commencer.
            </p>
            <p>Basé à Toulouse, je travaille aussi bien sur place qu’à distance.</p>
          </>
        ),
        crossLinks: [
          { title: 'Développement d’application mobile à Toulouse', href: '/developpement-application-mobile-toulouse', description: 'Les six chantiers d’une application, du cadrage à la publication.' },
          { title: 'Développeur React Native à Toulouse', href: '/developpeur-react-native-toulouse', description: 'Pourquoi un seul code pour les deux plateformes, et quand je le déconseille.' },
          { title: 'Logiciel sur mesure à Toulouse', href: '/logiciel-sur-mesure-toulouse', description: 'Quand le besoin est un outil interne plutôt qu’une application publique.' },
        ],
      }}
      faqs={[
        {
          question: 'Combien de temps prend la validation par Apple ?',
          answer:
            'En général un à trois jours, parfois plus si Apple demande des précisions. Je prépare l’application pour éviter les motifs de refus les plus fréquents, et je réponds aux éventuelles demandes d’Apple à votre place.',
        },
        {
          question: 'Dois-je créer moi-même les comptes développeur ?',
          answer:
            'Non, je m’en charge, mais ils sont ouverts au nom de votre entreprise et vous en gardez les accès. Comptez 99 $ par an chez Apple et 25 $ une fois chez Google, réglés directement par vous.',
        },
        {
          question: 'Que se passe-t-il si Apple refuse l’application ?',
          answer:
            'Un refus indique précisément la règle concernée. Je corrige et je resoumets, sans coût supplémentaire pour vous quand le motif relève de mon travail. C’est rare quand les règles sont appliquées dès la conception.',
        },
        {
          question: 'Combien coûte le maintien d’une application chaque année ?',
          answer:
            'Cela dépend de l’application ; je le chiffre au cadrage et vous le connaissez avant de signer. Le suivi couvre les mises à jour iOS et Android annuelles, les dépendances et les corrections, plus les frais de compte Apple et Google.',
        },
      ]}
    />
  )
}
