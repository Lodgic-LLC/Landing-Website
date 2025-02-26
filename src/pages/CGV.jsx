import React from 'react';
import { Helmet } from 'react-helmet';

const CGV = () => {
    return (
        <div className="bg-white pt-20">
            <Helmet>
                <title>Conditions Générales de Vente | Lodgic</title>
                <meta name="description" content="Conditions générales de vente de Lodgic pour les prestations de développement web et solutions digitales." />
            </Helmet>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 italic">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>

                    <h2>Article 1 - Objet et champ d'application</h2>
                    <p>
                        Les présentes conditions générales de vente (CGV) constituent le socle unique de la relation commerciale entre Lodgic et ses clients.
                        Elles s'appliquent, sans restriction ni réserve, à l'ensemble des ventes et prestations de services conclues par Lodgic auprès des clients,
                        quelles que soient les clauses pouvant figurer sur les documents du client.
                    </p>
                    <p>
                        Toute commande de prestations implique l'acceptation sans réserve par le client et son adhésion pleine et entière aux présentes CGV.
                    </p>

                    <h2>Article 2 - Commandes et devis</h2>
                    <p>
                        Les ventes de prestations ne sont parfaites qu'après établissement d'un devis par Lodgic et acceptation expresse et par écrit de la commande du client par Lodgic.
                    </p>
                    <p>
                        Les devis établis par Lodgic sont valables pendant une durée de 30 jours à compter de leur date d'émission.
                    </p>
                    <p>
                        Toute modification de la commande demandée par le client ne peut être prise en considération que si elle est parvenue par écrit avant le début d'exécution des prestations.
                    </p>

                    <h2>Article 3 - Tarifs</h2>
                    <p>
                        Les prestations de services sont fournies aux tarifs en vigueur au jour de la passation de la commande, selon le devis préalablement établi par Lodgic et accepté par le client.
                    </p>
                    <p>
                        Les tarifs s'entendent nets et HT ou TTC selon le régime fiscal applicable.
                    </p>
                    <p>
                        Une facture est établie par Lodgic et remise au client lors de chaque fourniture de services.
                    </p>

                    <h2>Article 4 - Conditions de paiement</h2>
                    <p>
                        Un acompte de 30% du prix total des prestations est exigé lors de la passation de la commande.
                    </p>
                    <p>
                        Le solde du prix est payable au comptant, au jour de la fourniture des prestations, dans les conditions définies à l'article "Modalités de fourniture des prestations".
                    </p>
                    <p>
                        Aucun escompte ne sera pratiqué par Lodgic pour paiement avant la date figurant sur la facture ou dans un délai inférieur à celui mentionné aux présentes CGV.
                    </p>
                    <p>
                        En cas de retard de paiement et de versement des sommes dues par le client au-delà du délai fixé, des pénalités de retard calculées au taux annuel de 12% du montant TTC du prix des prestations figurant sur ladite facture, seront automatiquement et de plein droit acquises à Lodgic, sans formalité aucune ni mise en demeure préalable.
                    </p>

                    <h2>Article 5 - Modalités de fourniture des prestations</h2>
                    <p>
                        Les prestations de services demandées par le client seront fournies dans les délais indiqués sur le devis.
                    </p>
                    <p>
                        Ce délai ne constitue pas un délai de rigueur et Lodgic ne pourra voir sa responsabilité engagée à l'égard du client en cas de retard n'excédant pas 30 jours.
                    </p>
                    <p>
                        En cas de retard supérieur à 30 jours, le client pourra demander la résolution de la vente. Les acomptes déjà versés lui seront alors restitués.
                    </p>

                    <h2>Article 6 - Responsabilité de Lodgic - Garantie</h2>
                    <p>
                        Lodgic garantit, conformément aux dispositions légales, le client contre tout défaut de conformité des prestations et tout vice caché, provenant d'un défaut de conception ou de réalisation des prestations fournies.
                    </p>
                    <p>
                        La responsabilité de Lodgic ne peut être engagée qu'en cas de faute ou de négligence prouvée et est limitée aux préjudices directs à l'exclusion de tout préjudice indirect, de quelque nature que ce soit.
                    </p>
                    <p>
                        Afin de faire valoir ses droits, le client devra, sous peine de déchéance de toute action s'y rapportant, informer Lodgic, par écrit, de l'existence des vices dans un délai maximum de 15 jours à compter de leur découverte.
                    </p>

                    <h2>Article 7 - Propriété intellectuelle</h2>
                    <p>
                        Lodgic reste propriétaire de tous les droits de propriété intellectuelle sur les études, dessins, modèles, prototypes, etc., réalisés (même à la demande du client) en vue de la fourniture des services au client.
                    </p>
                    <p>
                        Le client s'interdit donc toute reproduction ou exploitation desdites études, dessins, modèles et prototypes, etc., sans l'autorisation expresse, écrite et préalable de Lodgic qui peut la conditionner à une contrepartie financière.
                    </p>
                    <p>
                        Le transfert des droits de propriété intellectuelle pourra faire l'objet d'un contrat spécifique entre Lodgic et le client.
                    </p>

                    <h2>Article 8 - Droit applicable et litiges</h2>
                    <p>
                        Les présentes CGV et les opérations qui en découlent sont régies par le droit français.
                    </p>
                    <p>
                        Tous les litiges auxquels les présentes CGV pourraient donner lieu, concernant tant leur validité, leur interprétation, leur exécution, leur résiliation, leurs conséquences et leurs suites seront soumis aux tribunaux compétents de Toulouse.
                    </p>

                    <h2>Article 9 - Information précontractuelle - Acceptation du client</h2>
                    <p>
                        Le client reconnaît avoir eu communication, préalablement à la passation de sa commande, d'une manière lisible et compréhensible, des présentes CGV et de toutes les informations et renseignements visés aux articles L111-1 à L111-7 du Code de la consommation.
                    </p>

                    <h2>Article 10 - Contact</h2>
                    <p>
                        Pour toute question relative à ces CGV, vous pouvez nous contacter à l'adresse email : contact.lodgic@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CGV;