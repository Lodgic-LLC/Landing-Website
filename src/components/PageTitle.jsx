import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, description }) => {
    useEffect(() => {
        // Faire défiler vers le haut de la page quand le titre change
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <>
            <Helmet>
                <title>{title} | Lodgic</title>
                {description && <meta name="description" content={description} />}
            </Helmet>
        </>
    );
};

export default PageTitle; 