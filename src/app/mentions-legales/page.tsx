import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lodgic - Mentions Légales",
    description: "Mentions Légales pour Lodgic",
};

export default function MentionsLegales() {
    return (
        <div className="bg-white pt-20">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

                <div className="prose prose-lg max-w-none">
                    <h2>1. Informations légales</h2>
                    <p>
                        Le site Lodgic est édité par la société Lodgic, SARL au capital de [montant] euros,
                        immatriculée au Registre du Commerce et des Sociétés de Toulouse sous le numéro [numéro RCS],
                        dont le siège social est situé à [adresse complète], Toulouse, France.
                    </p>
                    <p>
                        Numéro de TVA intracommunautaire : [numéro TVA]<br />
                        Directeur de la publication : [Nom du directeur]
                    </p>

                    <h2>2. Hébergement</h2>
                    <p>
                        Le site Lodgic est hébergé par Hostinger, [forme juridique] au capital de [montant] euros,
                        immatriculée au RCS de [ville] sous le numéro [numéro RCS],
                        dont le siège social est situé [adresse complète].
                    </p>

                    <h2>3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble des éléments constituant le site Lodgic (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.)
                        est la propriété exclusive de Lodgic ou de ses partenaires. Ces éléments sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                        est interdite, sauf autorisation écrite préalable de Lodgic.
                    </p>

                    <h2>4. Liens hypertextes</h2>
                    <p>
                        Le site Lodgic peut contenir des liens hypertextes vers d'autres sites internet. Lodgic n'exerce aucun contrôle sur ces sites et décline toute responsabilité
                        quant à leur contenu.
                    </p>

                    <h2>5. Données personnelles</h2>
                    <p>
                        Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre Politique de Confidentialité.
                    </p>

                    <h2>6. Droit applicable et juridiction compétente</h2>
                    <p>
                        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                    </p>

                    <h2>7. Contact</h2>
                    <p>
                        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse email : contact.lodgic@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}


