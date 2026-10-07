export type ConseilFaq = { question: string; answer: string }

/** Compléments pratiques aux articles, sans modifier leur texte d'origine. */
export const CONSEILS_FAQ: Record<string, ConseilFaq[]> = {
  'les-etapes-de-developpement-d-une-app': [
    { question: 'Faut-il commencer par les maquettes ou par le développement ?', answer: 'Commencez par décrire le besoin et le parcours principal. Les maquettes viennent ensuite pour vérifier l’enchaînement des écrans avec de futurs utilisateurs, avant d’engager le développement.' },
    { question: 'Que doit contenir une première version ?', answer: 'Elle doit permettre d’accomplir une action utile de bout en bout. Les fonctions qui ne sont pas indispensables à ce parcours peuvent attendre les premiers retours d’usage.' },
    { question: 'Une application interne suit-elle les mêmes étapes ?', answer: 'Le cadrage, les maquettes et les tests restent nécessaires. La différence concerne surtout les droits d’accès, la protection des données et la manière de distribuer l’application aux personnes autorisées.' },
  ],
  'ou-trouver-un-developpeur-application-mobile-2026': [
    { question: 'Comment comparer deux devis de développement mobile ?', answer: 'Envoyez le même brief aux deux prestataires, puis comparez les parcours inclus, les livrables, les tests et les exclusions. Un montant sans périmètre détaillé ne permet pas une comparaison fiable.' },
    { question: 'Que demander au sujet du code et des comptes ?', answer: 'Faites préciser qui détient le code source, les accès aux stores, l’hébergement et les données. Demandez aussi comment ces éléments vous seront transmis si la collaboration s’arrête.' },
    { question: 'Une maquette suffit-elle à juger un prestataire ?', answer: 'Elle montre une capacité de conception, pas forcément de développement ni de maintenance. Demandez quel rôle exact le prestataire a joué sur chaque projet présenté.' },
  ],
  'combien-coute-une-application-en-2026': [
    { question: 'Pourquoi deux applications avec le même nombre d’écrans coûtent-elles différemment ?', answer: 'Le prix dépend surtout des actions possibles derrière les écrans : comptes, rôles, synchronisation, paiements, notifications ou fonctionnement hors ligne. Deux interfaces similaires peuvent cacher des contraintes techniques très différentes.' },
    { question: 'Le prix de départ affiché est-il un devis ?', answer: 'Non. Le prix de départ donne un seuil de prestation, pas le coût de votre projet. Un devis crédible nécessite au minimum les utilisateurs visés, le parcours principal et les fonctions indispensables.' },
    { question: 'Quels frais prévoir après la mise en ligne ?', answer: 'Pensez à l’hébergement, aux éventuels services tiers, aux corrections et aux mises à jour. Séparez ces frais récurrents du budget de conception et de développement initial.' },
  ],
  'application-mobile-privee-sans-app-store-public': [
    { question: 'Une application réservée à une équipe doit-elle être visible publiquement ?', answer: 'Pas nécessairement. Le mode de diffusion dépend des appareils, de la plateforme et de la façon dont l’organisation gère ses utilisateurs. Il faut le choisir dès le cadrage.' },
    { question: 'Quels accès faut-il prévoir pour une application interne ?', answer: 'Listez les rôles, les informations visibles par chacun et la procédure de désactivation d’un compte. Prévoyez aussi le traitement des données lorsque quelqu’un quitte l’organisation.' },
    { question: 'Peut-on commencer par un site mobile ?', answer: 'Oui, si le parcours fonctionne bien dans un navigateur et n’a pas besoin des capacités propres au téléphone. Une application installée se justifie davantage pour un usage répété ou des contraintes de terrain particulières.' },
  ],
  'comment-application-mobile-augmenter-ventes-alimentaire': [
    { question: 'Une application augmente-t-elle automatiquement les ventes ?', answer: 'Non. Elle peut faciliter une commande récurrente ou un retrait, mais elle ne crée pas à elle seule une demande. Vérifiez d’abord qu’un problème concret freine vos clients actuels.' },
    { question: 'Quelle fonction tester en premier dans un commerce alimentaire ?', answer: 'Choisissez un parcours court, par exemple retrouver un panier habituel puis sélectionner un créneau de retrait. Testez-le avec des clients réguliers et vérifiez que la préparation en boutique suit.' },
    { question: 'Quels résultats faut-il mesurer ?', answer: 'Regardez les commandes terminées, les abandons, les retours des clients et le temps gagné par l’équipe. Le nombre de téléchargements seul ne dit pas si le service est utile.' },
  ],
  'comment-financer-une-application-mobile-partie-1': [
    { question: 'Que faut-il chiffrer avant de chercher un financement ?', answer: 'Chiffrez une première version cohérente, puis ajoutez les frais de fonctionnement et la marge de sécurité. Le devis doit détailler ce qui est inclus et ce qui ne l’est pas.' },
    { question: 'Pourquoi séparer création et maintenance ?', answer: 'La livraison ne met pas fin aux dépenses. Hébergement, corrections, mises à jour et accompagnement des utilisateurs peuvent nécessiter un budget après le lancement.' },
    { question: 'Un plan de financement doit-il être complexe ?', answer: 'Il doit surtout rendre visibles les besoins, les ressources disponibles et les financements envisagés. Les hypothèses doivent être explicites afin de pouvoir les ajuster.' },
  ],
  'comment-financer-une-application-mobile-partie-2': [
    { question: 'Prêt, aide ou investisseur : quelle différence principale ?', answer: 'Un prêt doit être remboursé ; un investisseur peut recevoir une part du capital ; une aide répond à des critères particuliers. Comparez les obligations et le calendrier avant de choisir.' },
    { question: 'Peut-on réduire le besoin de financement ?', answer: 'Oui, en limitant la première version à un parcours réellement utile ou en testant d’abord un pilote. Gardez toutefois une marge pour ne pas fragiliser l’activité courante.' },
    { question: 'Quelles preuves préparer pour un financeur ?', answer: 'Des entretiens utilisateurs, un prototype testé ou de premiers clients rendent le besoin plus concret. Présentez aussi ce que vous n’avez pas encore validé.' },
  ],
  'comment-utiliser-intelligence-artificielle-agence-immobiliere': [
    { question: 'Par quel usage de l’IA commencer en agence ?', answer: 'Choisissez une tâche à faible risque, comme préparer un brouillon à partir de données déjà vérifiées. Mesurez le temps gagné et les corrections nécessaires avant d’étendre l’usage.' },
    { question: 'Qui doit vérifier les textes produits par l’IA ?', answer: 'Une personne de l’agence doit contrôler les faits avant publication, notamment les caractéristiques du bien et les conditions annoncées. Une formulation convaincante ne garantit pas l’exactitude.' },
    { question: 'Peut-on transmettre un dossier client à un outil d’IA ?', answer: 'Examinez d’abord les données présentes, les paramètres et les conditions du service. Limitez les informations transmises et appliquez les recommandations de la CNIL pour les données personnelles.' },
  ],
  'de-matelas-gonflables-a-empire-mondial-les-lecons-d-airbnb-pour-votre-application': [
    { question: 'Quelle leçon retenir des débuts d’Airbnb ?', answer: 'Validez d’abord un échange complet entre un groupe d’offreurs et un groupe de demandeurs. Élargir trop tôt les profils et les lieux complique l’apprentissage.' },
    { question: 'Pourquoi la confiance compte-t-elle dans une marketplace ?', answer: 'Les deux parties doivent comprendre les règles, les informations présentées et la marche à suivre en cas de problème. Ce travail fait partie du produit, au même titre que la réservation.' },
    { question: 'Quel indicateur suivre avant d’ajouter des fonctions ?', answer: 'Observez les échanges réellement aboutis, les abandons et les réclamations. Les inscriptions seules ne prouvent pas qu’un marché fonctionne.' },
  ],
  'idee-app-sans-concurrence': [
    { question: 'Aucune application concurrente signifie-t-il que l’idée est bonne ?', answer: 'Non. Les futurs utilisateurs peuvent déjà résoudre le problème avec un tableur, des messages ou une procédure manuelle. Ces solutions sont des alternatives à étudier.' },
    { question: 'Quelle question poser en entretien utilisateur ?', answer: 'Demandez quand la difficulté s’est produite pour la dernière fois et comment la personne s’en est sortie. Un exemple vécu est plus utile qu’une promesse d’utiliser une future application.' },
    { question: 'Comment tester l’idée avant de développer ?', answer: 'Une maquette, une page de présentation ou un service manuel peuvent suffire. Définissez à l’avance quel retour confirmera l’intérêt et quel retour vous fera revoir le projet.' },
  ],
  'intelligence-artificielle-agence-immobiliere-10-cas-usages-concrets': [
    { question: 'Quels usages tester sans automatiser une décision ?', answer: 'Commencez par des brouillons, des résumés ou une recherche dans des procédures internes à jour. Gardez une validation humaine avant tout envoi ou publication.' },
    { question: 'Faut-il lancer les dix cas d’usage en même temps ?', answer: 'Non. Choisissez un usage mesurable, un responsable et un jeu de données adapté. Les erreurs constatées sur ce premier essai guideront la suite.' },
    { question: 'Comment limiter les risques liés aux données ?', answer: 'Identifiez les informations personnelles, réduisez ce qui est envoyé au service choisi et prévoyez une correction des réponses inexactes. Consultez les recommandations de la CNIL.' },
  ],
  'pourquoi-creer-une-application-mobile-pour-sa-marketplace': [
    { question: 'Quand une marketplace a-t-elle besoin d’une application ?', answer: 'Une app devient pertinente quand les utilisateurs répètent souvent une action sur téléphone, comme suivre une demande ou répondre à un message. Un usage ponctuel peut rester sur un site mobile.' },
    { question: 'Pourquoi tester les deux côtés du marché ?', answer: 'Un parcours simple pour l’acheteur ne suffit pas si le vendeur ne peut pas répondre ou mettre son offre à jour. Testez l’échange complet, y compris les exceptions.' },
    { question: 'Comment mesurer l’intérêt de l’application ?', answer: 'Suivez les échanges aboutis, le retour des utilisateurs et les abandons. Les installations seules ne montrent pas si l’outil améliore la relation.' },
  ],
  'pourquoi-nike-mise-autant-sur-le-mobile-et-ce-que-ca-change-pour-la-marque': [
    { question: 'Faut-il créer plusieurs applications comme Nike ?', answer: 'Pas forcément. L’important est de donner une promesse claire à chaque canal. Pour une petite marque, un seul parcours utile et bien entretenu peut être préférable.' },
    { question: 'Qu’est-ce qui donne envie de revenir dans une application de marque ?', answer: 'Un service répété et identifiable : suivi après achat, contenu utile ou avantage membre réellement apprécié. Les notifications ne doivent pas devenir une fin en soi.' },
    { question: 'Quel résultat comparer aux téléchargements ?', answer: 'Choisissez un indicateur lié à votre promesse, par exemple la répétition d’un achat, l’usage d’un service ou la satisfaction. Le téléchargement n’est que le début du parcours.' },
  ],
  'pourquoi-une-application-mobile-peut-transforme-une-boutique-de-cosmetiques': [
    { question: 'Quelle fonction mobile peut aider une boutique de cosmétiques ?', answer: 'Retrouver un produit déjà acheté, consulter sa disponibilité ou préparer un réassort peut simplifier un geste fréquent. Vérifiez que vos clients rencontrent réellement cette difficulté.' },
    { question: 'Comment présenter des conseils produit ?', answer: 'Privilégiez des informations compréhensibles sur l’usage et les ingrédients. Évitez de présenter une recommandation commerciale comme un diagnostic de santé.' },
    { question: 'Faut-il créer une application dès le départ ?', answer: 'Pas nécessairement. Améliorez d’abord les fiches produit et testez des favoris sur mobile. Une application devient plus intéressante si un usage récurrent se confirme.' },
  ],
  'pourquoi-une-application-mobile-peut-transformer-une-marque-de-vetements': [
    { question: 'Quels problèmes traiter avant de créer une application de mode ?', answer: 'Rendez les tailles, la disponibilité et les conditions de retour faciles à comprendre sur le site mobile. Une nouvelle application ne corrigera pas des informations produit incomplètes.' },
    { question: 'Quelle raison donner à un client pour installer l’application ?', answer: 'Une fonction qu’il utilisera plusieurs fois, comme des favoris utiles ou un suivi de commande simple. Cette valeur doit pouvoir se résumer clairement.' },
    { question: 'Quels coûts faut-il anticiper ?', answer: 'Au-delà de la création, prévoyez l’actualisation du catalogue, les contenus, les promotions et la compatibilité technique. L’équipe doit pouvoir entretenir ce canal.' },
  ],
  'pourquoi-zara-a-developpe-une-application-mobile': [
    { question: 'Que peut retenir une petite boutique du mode magasin de Zara ?', answer: 'Cherchez une information utile au moment où le client se trouve en boutique, comme une disponibilité ou une réservation. La fonction doit correspondre à ce que votre équipe peut réellement assurer.' },
    { question: 'Pourquoi la qualité des stocks est-elle essentielle ?', answer: 'Une promesse de retrait ou de disponibilité devient décevante si les données ne sont pas à jour. Vérifiez d’abord la fiabilité de l’information et l’organisation en magasin.' },
    { question: 'Faut-il reproduire toutes les fonctions d’une grande enseigne ?', answer: 'Non. Choisissez une seule fonction liée à un besoin local et à une donnée que vous savez maintenir. Un parcours simple et fiable vaut mieux qu’un catalogue de fonctions fragiles.' },
  ],
  'site-mobile-vs-application-mobile-ecommerce': [
    { question: 'Quand privilégier un site mobile pour vendre en ligne ?', answer: 'Il est accessible immédiatement depuis une recherche ou un lien, sans installation. Pour découvrir une marque ou acheter occasionnellement, cette simplicité est souvent décisive.' },
    { question: 'Quand une application e-commerce se justifie-t-elle ?', answer: 'Quand les clients reviennent souvent et tirent un bénéfice concret d’un parcours personnel ou d’une fonction du téléphone. Testez cet usage avant de créer un nouveau canal.' },
    { question: 'Comment comparer le coût des deux options ?', answer: 'Incluez la création, les tests, les mises à jour et l’animation du canal. Le coût initial seul ne reflète pas le travail nécessaire après le lancement.' },
  ],
  'trouver-une-idee-d-appli-et-creer-un-business-plan': [
    { question: 'Comment repérer une idée d’application utile ?', answer: 'Observez une difficulté répétée et la manière dont les personnes la contournent aujourd’hui. Un problème précis vaut mieux qu’une longue liste de fonctionnalités possibles.' },
    { question: 'Que tester avant d’écrire un plan détaillé ?', answer: 'Formulez pour qui vous travaillez, quelle action vous voulez simplifier et quel résultat vous attendez. Une maquette ou un service manuel peut mettre cette hypothèse à l’épreuve.' },
    { question: 'Comment présenter les revenus envisagés ?', answer: 'Distinguez les faits observés des hypothèses. Indiquez comment vous vérifierez ces dernières et séparez les dépenses de conception, de lancement et de fonctionnement.' },
  ],
}
