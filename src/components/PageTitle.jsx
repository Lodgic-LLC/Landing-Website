import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, description }) => {
    useEffect(() => {
        // Faire défiler vers le haut de la page quand le titre change
        window.scrollTo(0, 0);
    }, [title]);

    // Créer un titre plus descriptif pour chaque page
    const getFullTitle = () => {
        switch (title) {
            case 'Accueil':
                return 'Lodgic  | Développement d\'applications web sur mesure';
            case 'Services':
                return 'Lodgic | Services de développement web professionnel  ';
            case 'À propos':
                return 'Lodgic | Experts en développement d\'applications';
            case 'Contact':
                return ' Lodgic | Demandez un devis pour votre projet web';
            case 'Contactez-nous':
                return 'Lodgic | Contactez-nous';
            default:
                return `${title} | Lodgic `;
        }
    };

    return (
        <>
            <Helmet>
                <title>{getFullTitle()}</title>
                <meta name="description" content={description || "Lodgic Dev - Agence de développement d'applications web sur mesure pour les entreprises et startups."} />
            </Helmet>
        </>
    );
};

export default PageTitle; 