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
                return 'Lodgic | Solutions Digitales';
            case 'Services':
                return 'Lodgic | Services de développement web et mobile professionnel';
            case 'À propos':
                return 'Lodgic | Experts en développement d\'applications';
            case 'Contact':
                return 'Lodgic | Demandez un devis pour votre projet web';
            case 'Contactez-nous':
                return 'Lodgic | Contactez-nous';
            default:
                return `${title} | Lodgic`;
        }
    };

    return (
        <>
            <Helmet>
                <title>{getFullTitle()}</title>
                <meta name="description" content={description || "Lodgic - Agence de développement d'applications web et mobile sur mesure pour les entreprises et startups."} />
            </Helmet>
        </>
    );
};

export default PageTitle; 