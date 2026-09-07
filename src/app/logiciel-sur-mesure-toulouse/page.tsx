import SeoLandingPage from '@/components/pages/seo-landing/SeoLandingPage'
import { buildSeoMetadata } from '@/lib/seo'

const PATH = '/logiciel-sur-mesure-toulouse'
const NAME = 'Logiciel sur mesure à Toulouse'
const DESCRIPTION =
  "Développeur indépendant à Toulouse : je conçois le logiciel métier qui remplace vos tableurs et vos ressaisies — planning, suivi de dossiers, devis, tableau de bord. À partir de 4 000 €, connecté à vos outils actuels."

export const metadata = buildSeoMetadata({
  path: PATH,
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    'logiciel sur mesure Toulouse',
    'développement logiciel sur mesure',
    'logiciel métier Toulouse',
    'application web sur mesure Toulouse',
    'outil de gestion sur mesure',
    'développeur logiciel Toulouse',
  ],
})

export default function Page() {
  return (
    <SeoLandingPage
      path={PATH}
      name={NAME}
      description={DESCRIPTION}
      trackingKeyword="logiciel_sur_mesure_toulouse"
      hero={{
        eyebrow: 'Logiciel métier · Toulouse',
        title: 'Logiciel sur mesure à Toulouse',
        highlight: 'l’outil qui fait exactement ce que votre activité demande',
        description: (
          <>
            Vous gérez votre activité avec trois tableurs, des mails et une bonne mémoire. Ça marche, jusqu’au jour où ça
            ne marche plus. Je développe l’outil qui correspond à <strong>votre façon de travailler</strong> — pas un
            logiciel générique auquel il faudrait vous adapter.
          </>
        ),
        badges: ['À partir de 4 000 €', 'Remplace les tableurs', 'Connecté à vos outils', 'Accessible partout', 'Toulouse et à distance'],
        visual: 'tailored',
      }}
      expertise={{
        eyebrow: 'Ce que comprend un logiciel métier',
        heading: (
          <>
            Du tableur partagé à <span className="text-[#C2542D]">l’outil qui tient la route</span>.
          </>
        ),
        intro:
          'Un logiciel sur mesure n’est pas réservé aux grandes entreprises. Une TPE de cinq personnes qui perd deux heures par jour en ressaisies rentabilise le sien en quelques mois. Voici comment je procède.',
        cards: [
          {
            num: '01',
            title: 'Comprendre votre façon de travailler',
            body: 'Je commence par observer comment vous faites aujourd’hui — les fichiers, les étapes, les cas particuliers. L’outil doit épouser votre process, pas l’inverse.',
            bullets: ['Observation de l’existant', 'Liste des tâches répétitives', 'Cas particuliers identifiés dès le départ', 'Périmètre écrit et validé'],
          },
          {
            num: '02',
            title: 'Un outil web, accessible partout',
            body: 'Le logiciel s’ouvre dans un navigateur, au bureau, chez un client ou depuis le téléphone. Rien à installer, et tout le monde voit les mêmes données à jour.',
            bullets: ['Aucune installation', 'Bureau, tablette, téléphone', 'Données à jour pour tous, en temps réel', 'Version mobile si le terrain l’exige'],
          },
          {
            num: '03',
            title: 'Connecté à ce que vous utilisez déjà',
            body: 'Comptabilité, agenda, e-mail, outil de devis : le logiciel échange avec vos outils actuels au lieu de vous faire tout ressaisir.',
            bullets: ['Import de vos fichiers existants', 'Export vers votre comptable', 'Envoi automatique d’e-mails et de documents', 'Connexion aux services que vous utilisez'],
          },
          {
            num: '04',
            title: 'Qui voit quoi',
            body: 'Un salarié ne voit pas les mêmes choses qu’un associé ; un client encore moins. Je définis avec vous les rôles et je les applique côté serveur, pas seulement à l’écran.',
            bullets: ['Rôles et droits d’accès', 'Espace client séparé si besoin', 'Historique de qui a modifié quoi', 'Données personnelles conformes au RGPD'],
          },
          {
            num: '05',
            title: 'Voir clair dans votre activité',
            body: 'Combien de dossiers en cours, lesquels traînent, ce qui a été facturé ce mois : un tableau de bord qui répond aux questions que vous vous posez vraiment, et des exports pour le reste.',
            bullets: ['Tableau de bord sur vos indicateurs', 'Exports Excel et PDF', 'Alertes sur les retards', 'Recherche et filtres rapides'],
          },
          {
            num: '06',
            title: 'Évoluer sans tout casser',
            body: 'Votre activité change, l’outil doit suivre. Je construis le logiciel pour qu’on puisse y ajouter une fonction dans un an sans toucher au reste — et vous en êtes propriétaire.',
            bullets: ['Ajouts par étapes, chiffrés à chaque fois', 'Code documenté, reprenable par un autre', 'Vous êtes propriétaire du code et des données', 'Sauvegardes automatiques'],
          },
        ],
        closing: (
          <>
            <p>
              Un logiciel métier démarre à <strong>4 000 €</strong> pour un outil simple — un suivi de dossiers avec
              quelques écrans, par exemple. Le prix exact est fixé par écrit après le cadrage. Je livre par étapes : vous
              utilisez une première version utile rapidement, et on complète ensuite.
            </p>
            <p>
              <strong>BewasBeen</strong>, une plateforme pour enseignants avec gestion de classes, exercices et suivi par
              élève, montre ce type de construction : des rôles distincts, des données structurées, des exports — et un
              usage quotidien par des gens qui ne sont pas informaticiens.
            </p>
          </>
        ),
        crossLinks: [
          { title: 'Création de site internet à Toulouse', href: '/creation-site-internet-toulouse', description: 'Pour être trouvé et contacté, avant d’outiller l’interne.' },
          { title: 'Développement d’application mobile à Toulouse', href: '/developpement-application-mobile-toulouse', description: 'Quand vos équipes ont besoin de l’outil sur le terrain, dans la poche.' },
        ],
      }}
      faqs={[
        {
          question: 'Un logiciel sur mesure, n’est-ce pas trop cher pour une petite entreprise ?',
          answer:
            'Un outil simple démarre à 4 000 €. Si vous ou vos salariés perdez une heure par jour en ressaisies, en recherches dans des tableurs ou en erreurs à rattraper, faites le calcul sur un an : c’est souvent rentabilisé en quelques mois.',
        },
        {
          question: 'Pourquoi ne pas prendre un logiciel du commerce ?',
          answer:
            'Si un logiciel existant fait 90 % de ce qu’il vous faut, prenez-le — je vous le dirai au premier échange. Le sur mesure se justifie quand votre façon de travailler ne rentre dans aucune case, ou quand les abonnements cumulés coûtent plus cher qu’un outil à vous.',
        },
        {
          question: 'Combien de temps faut-il ?',
          answer:
            'Quelques semaines pour une première version utile, selon le périmètre. Je livre par étapes pour que vous commenciez à vous en servir tôt, et le cadrage fixe le calendrier précis avant de démarrer.',
        },
        {
          question: 'Que devient le logiciel si vous arrêtez ?',
          answer:
            'Il continue de fonctionner : vous êtes propriétaire du code, des données et des accès à l’hébergement. Le code est documenté et construit avec des technologies répandues, pour qu’un autre développeur puisse le reprendre.',
        },
      ]}
    />
  )
}
