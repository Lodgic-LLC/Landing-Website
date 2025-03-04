import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lodgic - A Propos",
    description: "Découvrez notre expertise, notre histoire et notre vision pour votre transformation digitale",
};

export default function APropos() {
    return (
        <div className="pt-16" >
            <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
                    {/* Texte - Côté gauche */}
                    <div
                        className="w-full md:w-1/2 mb-12 md:mb-0"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h1 className="font-inter-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                            Des solutions numériques
                            <br />
                            <span className="text-blue-600">qui vous ressemblent</span>
                        </h1>

                        <p className="font-inter-regular text-gray-700 mb-8 max-w-lg text-lg leading-relaxed">
                            Nous créons des applications web et mobiles simples à utiliser,
                            adaptées à vos besoins et qui évoluent avec votre entreprise.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="font-inter-medium bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Contactez-nous
                            </a>
                            <Link
                                href="/services"
                                className="font-inter-medium border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Nos services
                            </Link>
                        </div>
                    </div>

                    {/* Illustration - Côté droit */}
                    <div
                        className="w-full md:w-1/2 flex justify-center"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-inter-bold text-gray-900 mb-4">
                                    Un accompagnement de confiance
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    Nous vous guidons à chaque étape de votre projet, avec
                                    transparence et simplicité.
                                </p>

                                <div className="grid grid-cols-3 gap-4 w-full mb-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Écoute</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Efficacité</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                            <svg
                                                className="w-5 h-5 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                                                    clipRule="evenodd"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">Support</span>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 inline-flex items-center">
                                    <svg
                                        className="w-5 h-5 text-blue-600 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                                        <path d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zM8 7a1 1 0 000 2h2a1 1 0 000-2H8z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-800">
                                        Cahier des charges gratuit
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Nos Valeurs */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div
                        className="text-center max-w-3xl mx-auto mb-16"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                            Nos valeurs fondamentales
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            Ces principes guident chacune de nos actions et façonnent notre
                            approche pour vous offrir un service d'excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Valeur 1 - Transparence */}
                        <div
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">
                                Transparence
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nous privilégions une communication claire et honnête à chaque
                                étape de votre projet, garantissant une collaboration basée
                                sur la confiance.
                            </p>
                        </div>

                        {/* Valeur 2 - Simplicité */}
                        <div
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">
                                Simplicité
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nous privilégions des solutions faciles à comprendre et à
                                utiliser, en évitant les complications inutiles pour vous
                                offrir une expérience agréable.
                            </p>
                        </div>

                        {/* Valeur 3 - Engagement */}
                        <div
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-inter-bold text-gray-900 mb-3 text-center">
                                Engagement
                            </h3>
                            <p className="text-gray-600 text-center">
                                Nous sommes pleinement investis dans la réussite de votre
                                projet, avec une approche personnalisée qui va au-delà de vos
                                attentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Notre Approche */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Contenu texte */}
                            <div className="lg:w-1/2" data-aos="fade-right">
                                <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                                    Notre approche{" "}
                                </h2>
                                <div className="w-24 h-1 bg-blue-600 rounded-full mb-6"></div>

                                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                    Chez Lodgic, nous abordons chaque projet avec une
                                    méthodologie structurée mais flexible, conçue pour maximiser
                                    l'impact de votre transformation digitale.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <svg
                                                    className="w-4 h-4 text-blue-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-inter-bold text-gray-900 mb-1">
                                                Découverte de votre projet
                                            </h3>
                                            <p className="text-gray-600">
                                                Nous prenons le temps de comprendre vos objectifs,
                                                votre marché et vos défis spécifiques pour créer une
                                                solution parfaitement adaptée.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <svg
                                                    className="w-4 h-4 text-blue-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-inter-bold text-gray-900 mb-1">
                                                Conception centrée utilisateur
                                            </h3>
                                            <p className="text-gray-600">
                                                Nous plaçons l'expérience utilisateur au cœur de notre
                                                processus de conception pour créer des interfaces
                                                intuitives et engageantes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <svg
                                                    className="w-4 h-4 text-blue-600"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-inter-bold text-gray-900 mb-1">
                                                Amélioration continue
                                            </h3>
                                            <p className="text-gray-600">
                                                Nous ne nous contentons pas de livrer un produit
                                                final. Nous analysons les performances et optimisons
                                                constamment pour maximiser les résultats.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Illustration */}
                            <div
                                className="lg:w-1/2"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    <div className="flex flex-col items-center mb-6">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <svg
                                                className="w-8 h-8 text-blue-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-inter-bold text-gray-900">
                                            Notre méthode
                                        </h3>
                                        <p className="text-gray-600 text-center mt-2">
                                            Une approche structurée en 4 étapes pour garantir le
                                            succès de votre projet
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                <span className="text-blue-600 font-bold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-inter-bold text-gray-900">
                                                    Analyse des besoins
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Compréhension approfondie de vos objectifs
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                <span className="text-blue-600 font-bold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-inter-bold text-gray-900">
                                                    Conception
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Design centré sur l'expérience utilisateur
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                <span className="text-blue-600 font-bold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-inter-bold text-gray-900">
                                                    Développement
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Création avec des technologies modernes
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                <span className="text-blue-600 font-bold">4</span>
                                            </div>
                                            <div>
                                                <h4 className="font-inter-bold text-gray-900">
                                                    Suivi & Optimisation
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    Amélioration continue des performances
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Notre Équipe - Version améliorée */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div
                        className="text-center max-w-3xl mx-auto mb-12"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                            Qui sommes-nous ?
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">
                            Une équipe à taille humaine, proche de vous et de vos besoins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Yann Roquie - Version améliorée */}
                        <div
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="8" r="5" fill="currentColor" />
                                        <path
                                            d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-inter-bold text-gray-900">
                                        Yann Roquie
                                    </h3>
                                    <p className="text-blue-600 font-inter-medium text-sm">
                                        Développeur & Contact Client
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-3 text-sm">
                                Yann vous accompagne de A à Z dans votre projet numérique. Il
                                traduit vos besoins en solutions concrètes et reste votre
                                interlocuteur privilégié.
                            </p>
                        </div>

                        {/* Mathéo Katbie - Version améliorée */}
                        <div
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <svg
                                        className="w-8 h-8 text-indigo-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="8" r="5" fill="currentColor" />
                                        <path
                                            d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-inter-bold text-gray-900">
                                        Mathéo Katbie
                                    </h3>
                                    <p className="text-indigo-600 font-inter-medium text-sm">
                                        Développeur Full-Stack
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-3 text-sm">
                                Mathéo donne vie à votre projet avec des solutions techniques
                                robustes et intuitives. Il veille à ce que votre application
                                soit à la fois performante et facile à utiliser.
                            </p>
                        </div>
                    </div>

                    {/* Ajout d'un appel à l'action secondaire */}
                    <div
                        className="text-center mt-10"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <p className="text-gray-600 mb-4">
                            Envie d'en savoir plus sur notre façon de travailler ?
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-inter-medium"
                        >
                            <span>Découvrir nos services</span>
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    )
}
