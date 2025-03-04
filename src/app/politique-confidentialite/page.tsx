import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lodgic - Politique de Confidentialité",
    description: "Politique de Confidentialité pour Lodgic",
};

export default function PolitiqueConfidentialite() {
    return (
        <div className="bg-white pt-20">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 italic">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>

                    <h2>1. Collecte des données personnelles</h2>
                    <p>
                        Lodgic peut collecter les données personnelles suivantes :
                    </p>
                    <ul>
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Informations relatives à votre entreprise</li>
                        <li>Données de connexion et de navigation sur le site</li>
                    </ul>
                    <p>
                        Ces données sont collectées lorsque vous :
                    </p>
                    <ul>
                        <li>Remplissez un formulaire de contact</li>
                        <li>Prenez rendez-vous via notre site</li>
                        <li>Vous inscrivez à notre newsletter</li>
                        <li>Naviguez sur notre site (via les cookies)</li>
                    </ul>

                    <h2>2. Utilisation des données</h2>
                    <p>
                        Les données personnelles collectées sont utilisées pour :
                    </p>
                    <ul>
                        <li>Répondre à vos demandes de contact ou d'information</li>
                        <li>Gérer vos rendez-vous</li>
                        <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                        <li>Améliorer notre site et nos services</li>
                        <li>Établir des statistiques de visite</li>
                    </ul>

                    <h2>3. Base légale du traitement</h2>
                    <p>
                        Le traitement de vos données personnelles est fondé sur :
                    </p>
                    <ul>
                        <li>Votre consentement</li>
                        <li>L'exécution d'un contrat auquel vous êtes partie</li>
                        <li>Notre intérêt légitime à développer et promouvoir nos activités</li>
                        <li>Le respect de nos obligations légales</li>
                    </ul>

                    <h2>4. Destinataires des données</h2>
                    <p>
                        Vos données personnelles sont destinées à notre équipe interne. Elles peuvent également être partagées avec des sous-traitants (hébergement, CRM, outils marketing) qui agissent selon nos instructions et pour notre compte.
                    </p>
                    <p>
                        Nous ne vendons ni ne louons vos données à des tiers.
                    </p>

                    <h2>5. Durée de conservation</h2>
                    <p>
                        Vos données personnelles sont conservées pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, augmentée des délais légaux de prescription.
                    </p>

                    <h2>6. Vos droits</h2>
                    <p>
                        Conformément à la réglementation applicable, vous disposez des droits suivants :
                    </p>
                    <ul>
                        <li>Droit d'accès à vos données</li>
                        <li>Droit de rectification</li>
                        <li>Droit à l'effacement (droit à l'oubli)</li>
                        <li>Droit à la limitation du traitement</li>
                        <li>Droit à la portabilité</li>
                        <li>Droit d'opposition</li>
                        <li>Droit de retirer votre consentement à tout moment</li>
                        <li>Droit d'introduire une réclamation auprès d'une autorité de contrôle</li>
                    </ul>
                    <p>
                        Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : contact.lodgic@gmail.com
                    </p>

                    <h2>7. Cookies</h2>
                    <p>
                        Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés.
                    </p>

                    <h2>8. Modifications</h2>
                    <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
                    </p>

                    <h2>9. Contact</h2>
                    <p>
                        Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à l'adresse email : contact.lodgic@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}


