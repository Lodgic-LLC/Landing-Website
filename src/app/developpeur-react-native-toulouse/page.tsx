import PageSeo from '@/components/PageSeo'
import { buildSeoMetadata } from '@/lib/seo'

const PATH = '/developpeur-react-native-toulouse'
const NAME = 'Développeur React Native à Toulouse'
const DESCRIPTION =
  "Ingénieur indépendant à Toulouse, spécialisé React Native et Expo : une application iPhone et Android à partir d'un seul code. Je vous explique ce que ça vous fait gagner, et les cas où je vous le déconseille."

export const metadata = buildSeoMetadata({
  path: PATH,
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    'développeur React Native Toulouse',
    'freelance React Native Toulouse',
    'application React Native',
    'développeur Expo Toulouse',
    'application cross-platform Toulouse',
    'reprise application React Native',
  ],
})

export default function Page() {
  return (
    <PageSeo
      path={PATH}
      name={NAME}
      description={DESCRIPTION}
      trackingKeyword="developpeur_react_native_toulouse"
      hero={{
        eyebrow: 'React Native · Toulouse',
        title: 'Développeur React Native à Toulouse',
        highlight: 'une application, deux plateformes, un seul code',
        description: (
          <>
            React Native permet de développer <strong>une seule fois</strong> pour iPhone et Android. C’est ce que
            j’utilise pour la plupart des applications que je livre — et je vous explique ici pourquoi, ce que ça vous
            fait gagner, et les rares cas où je vous le déconseillerais.
          </>
        ),
        badges: ['React Native · Expo', 'TypeScript', 'iPhone et Android', 'Correctifs sans passer par les stores', 'Reprise d’app existante'],
        visual: 'react-native',
      }}
      expertise={{
        eyebrow: 'Pourquoi React Native',
        heading: (
          <>
            Ce que React Native change pour vous, <span className="text-[#C2542D]">concrètement</span>.
          </>
        ),
        intro:
          'Ce n’est pas un choix de développeur pour se faire plaisir : c’est ce qui divise le budget et le délai par presque deux, tout en gardant une application que vos utilisateurs ne distinguent pas d’une app classique.',
        cards: [
          {
            num: '01',
            title: 'Un code pour les deux',
            body: 'Chaque écran est développé une fois et fonctionne sur iPhone et Android. Une correction ou une nouvelle fonction sort des deux côtés le même jour.',
            bullets: ['Budget et délai réduits', 'Mêmes fonctions sur les deux stores', 'Une seule base à maintenir', 'Sorties simultanées'],
          },
          {
            num: '02',
            title: 'Correctifs en quelques minutes',
            body: 'Avec Expo, je peux corriger un texte ou un bug sans repasser par la validation d’Apple, qui prend parfois plusieurs jours. Vos utilisateurs ont la correction à la prochaine ouverture.',
            bullets: ['Petits correctifs déployés sans attente', 'Retour en arrière possible', 'Versions store pour les gros changements', 'Historique de chaque publication'],
          },
          {
            num: '03',
            title: 'Ce que vos utilisateurs voient',
            body: 'Boutons, listes, transitions : React Native utilise les composants réels de chaque système. L’application se comporte comme une app iPhone sur iPhone et comme une app Android sur Android.',
            bullets: ['Composants natifs, pas une page web déguisée', 'Gestes et animations fluides', 'Règles de chaque plateforme respectées', 'Fonctionne hors connexion'],
          },
          {
            num: '04',
            title: 'Accès à tout le téléphone',
            body: 'Appareil photo, GPS, notifications, Bluetooth, Face ID : tout ce que le téléphone sait faire est accessible. Quand un besoin très précis sort du cadre, j’écris le pont natif nécessaire.',
            bullets: ['Caméra, GPS, notifications, biométrie', 'Paiement intégré', 'Modules natifs sur mesure si besoin', 'Compatible tablettes'],
          },
          {
            num: '05',
            title: 'Quand je le déconseille',
            body: 'Jeu en 3D, traitement vidéo lourd, application très liée à une seule plateforme : là, le développement natif pur est plus adapté. Je vous le dirai au cadrage, et je vous orienterai vers la bonne personne.',
            bullets: ['Jeux et 3D en temps réel', 'Traitement vidéo ou audio intensif', 'Intégrations système très spécifiques', 'Je vous oriente plutôt que de forcer'],
          },
          {
            num: '06',
            title: 'Reprise d’une app React Native',
            body: 'Vous avez déjà une application React Native développée par quelqu’un d’autre ? Je l’audite, je mets à jour ses dépendances et je reprends la maintenance — ou je vous dis honnêtement si elle est à refaire.',
            bullets: ['Audit du code et des versions', 'Mise à jour Expo et React Native', 'Reprise de la publication sur les stores', 'Documentation pour la suite'],
          },
        ],
        closing: (
          <>
            <p>
              Je développe en <strong>React Native et TypeScript</strong>, avec un serveur Node.js et PostgreSQL derrière
              quand l’application en a besoin. C’est la même stack que sur le web : je peux livrer une application et son
              espace d’administration avec une seule logique, et un seul interlocuteur.
            </p>
            <p>
              Une application React Native démarre à <strong>6 000 €</strong> et se livre en <strong>2 à 4 mois</strong>. Le
              prix est fixé par écrit au cadrage.
            </p>
          </>
        ),
        crossLinks: [
          { title: 'Développement d’application mobile à Toulouse', href: '/developpement-application-mobile-toulouse', description: 'Les six chantiers d’une application, du cadrage à la publication.' },
          { title: 'Application iOS et Android', href: '/developpement-application-ios-android', description: 'Comptes développeur, règles d’Apple, fiche store : ce qu’il faut pour être publié.' },
          { title: 'Création de site internet à Toulouse', href: '/creation-site-internet-toulouse', description: 'Quand un site bien fait suffit, avant de penser application.' },
        ],
      }}
      faqs={[
        {
          question: 'React Native, c’est moins bien qu’une « vraie » application ?',
          answer:
            'Non. React Native produit une application installée depuis les stores, qui utilise les composants réels du téléphone. Des applications utilisées par des millions de personnes sont construites ainsi. La différence se joue sur des cas très spécifiques — jeux 3D, traitement vidéo lourd — que je vous signale au cadrage.',
        },
        {
          question: 'Peut-on publier sur l’App Store et Google Play avec React Native ?',
          answer:
            'Oui, exactement comme n’importe quelle application. Je m’occupe des comptes développeur, de la fiche et de la validation d’Apple. Les mises à jour importantes passent par les stores ; les petits correctifs peuvent être déployés directement.',
        },
        {
          question: 'Que se passe-t-il quand Apple ou Google change quelque chose ?',
          answer:
            'Chaque année, les systèmes évoluent et une application doit suivre pour rester en ligne. Je prévois ces mises à jour dans le suivi, et je vous dis à l’avance ce qu’elles coûtent. Rien ne vous tombe dessus sans prévenir.',
        },
        {
          question: 'Un autre développeur pourra-t-il reprendre l’application ?',
          answer:
            'Oui. React Native et TypeScript sont parmi les technologies les plus répandues : le code est lisible, documenté, et vous en êtes propriétaire. Votre application ne dépend pas de moi pour exister.',
        },
      ]}
    />
  )
}
