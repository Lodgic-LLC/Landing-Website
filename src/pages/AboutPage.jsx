import React, { useEffect } from 'react';
import AOS from 'aos';
import PageTitle from '../components/PageTitle';

const AboutPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageTitle title="À propos de nous" description="Découvrez notre entreprise et notre équipe" />
            <div className="pt-16">
                {/* Section Hero À Propos */}
                <section className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-24 md:py-32">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                        {/* Texte - Côté gauche */}
                        <div className="w-full md:w-1/2 mb-12 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="font-inter-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                                Innovons ensemble pour<br />
                                votre succès digital
                            </h1>

                            <p className="font-inter-regular text-gray-600 mb-8 max-w-lg text-lg">
                                Depuis 2020, Lodgic accompagne les entreprises dans leur
                                transformation numérique. Notre expertise en développement web et
                                mobile nous permet de créer des solutions sur mesure qui propulsent
                                votre croissance.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/contact"
                                    className="font-inter-medium bg-[#2563EB] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Contactez-nous
                                </a>
                                <a
                                    href="/services"
                                    className="font-inter-medium border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Nos services
                                </a>
                            </div>
                        </div>

                        {/* Illustration - Côté droit */}
                        <div
                            className="w-full md:w-1/2 flex justify-center"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="relative w-full max-w-lg">
                                {/* Fond dégradé */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl transform rotate-2"></div>

                                {/* Contenu de l'illustration */}
                                <div className="relative bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl p-8 shadow-xl overflow-hidden">
                                    {/* SVG d'appareils connectés */}
                                    <div className="relative z-10 flex justify-center items-center">
                                        <svg className="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Ordinateur portable */}
                                            <rect x="150" y="100" width="200" height="120" rx="8" fill="#1F2937" />
                                            <rect x="160" y="110" width="180" height="100" rx="4" fill="#6366F1" />
                                            <rect x="170" y="220" width="160" height="10" rx="2" fill="#1F2937" />

                                            {/* Tablette */}
                                            <rect x="80" y="150" width="100" height="140" rx="8" fill="#1F2937" />
                                            <rect x="85" y="155" width="90" height="130" rx="4" fill="#8B5CF6" />

                                            {/* Smartphone */}
                                            <rect x="370" y="160" width="60" height="110" rx="8" fill="#1F2937" />
                                            <rect x="375" y="165" width="50" height="100" rx="4" fill="#EC4899" />
                                            <circle cx="400" cy="275" r="5" fill="#E5E7EB" />

                                            {/* Éléments de connexion */}

                                            <line x1="350" y1="160" x2="370" y2="180" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                                            {/* Cubes flottants */}
                                            <rect x="120" y="80" width="20" height="20" rx="2" fill="#60A5FA" opacity="0.8" />
                                            <rect x="360" y="120" width="20" height="20" rx="2" fill="#34D399" opacity="0.8" />
                                            <rect x="300" y="240" width="20" height="20" rx="2" fill="#F472B6" opacity="0.8" />
                                            <rect x="100" y="220" width="20" height="20" rx="2" fill="#FBBF24" opacity="0.8" />

                                            {/* Icônes de technologie */}
                                            <circle cx="250" y="70" r="15" fill="#F472B6" opacity="0.8" />
                                            <circle cx="400" y="100" r="10" fill="#34D399" opacity="0.8" />
                                            <circle cx="100" y="120" r="12" fill="#60A5FA" opacity="0.8" />
                                        </svg>
                                    </div>

                                    {/* Éléments flottants */}
                                    <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-md transform rotate-6 animate-float">
                                        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-10 left-10 bg-white p-2 rounded-lg shadow-md transform -rotate-3 animate-float-delayed">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="absolute top-1/4 left-10 bg-white p-2 rounded-lg shadow-md transform rotate-12 animate-float-delayed">
                                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-1/4 right-10 bg-white p-2 rounded-lg shadow-md transform -rotate-12 animate-float">
                                        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                    </div>

                                    {/* Notification flottante */}
                                    <div className="absolute top-1/3 right-5 z-10 bg-white p-3 rounded-xl shadow-lg transform rotate-3 animate-float-slow">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-inter-medium text-gray-800">Nouvelle mise à jour</p>
                                                <p className="text-xs text-gray-500">il y a 5 minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Nos Valeurs */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-center text-gray-900 mb-4" data-aos="fade-up">
                            Nos valeurs
                        </h2>
                        <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full mb-16" data-aos="fade-up" data-aos-delay="100"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            {/* Valeur 1 */}
                            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Innovation</h3>
                                <p className="text-gray-600">Toujours à la pointe des nouvelles technologies</p>
                            </div>

                            {/* Valeur 2 */}
                            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Transparence</h3>
                                <p className="text-gray-600">Une communication claire et honnête</p>
                            </div>

                            {/* Valeur 3 */}
                            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Qualité</h3>
                                <p className="text-gray-600">L'excellence dans chaque projet</p>
                            </div>

                            {/* Valeur 4 */}
                            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="500">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Engagement</h3>
                                <p className="text-gray-600">Dévoués à votre réussite</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Notre Histoire */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-inter-bold text-center text-gray-900 mb-4" data-aos="fade-up">
                                Notre histoire
                            </h2>
                            <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full mb-16" data-aos="fade-up" data-aos-delay="100"></div>

                            <div className="space-y-12">
                                {/* Étape 1 */}
                                <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="200">
                                    <div className="md:w-1/3">
                                        <div className="bg-[#2563EB] text-white text-xl font-inter-bold rounded-lg p-4 text-center">
                                            2020
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Création de Lodgic</h3>
                                        <p className="text-gray-600">
                                            Fondée par une équipe de développeurs passionnés, Lodgic naît avec l'ambition de rendre les technologies web accessibles à toutes les entreprises.
                                        </p>
                                    </div>
                                </div>

                                {/* Étape 2 */}
                                <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="300">
                                    <div className="md:w-1/3">
                                        <div className="bg-[#2563EB] text-white text-xl font-inter-bold rounded-lg p-4 text-center">
                                            2021
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Expansion de l'équipe</h3>
                                        <p className="text-gray-600">
                                            Face à une demande croissante, notre équipe s'agrandit et diversifie ses compétences pour offrir des solutions toujours plus complètes.
                                        </p>
                                    </div>
                                </div>

                                {/* Étape 3 */}
                                <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="400">
                                    <div className="md:w-1/3">
                                        <div className="bg-[#2563EB] text-white text-xl font-inter-bold rounded-lg p-4 text-center">
                                            2022
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Nouveaux services</h3>
                                        <p className="text-gray-600">
                                            Lancement de notre offre d'applications mobiles et de services d'optimisation pour répondre aux besoins évolutifs du marché.
                                        </p>
                                    </div>
                                </div>

                                {/* Étape 4 */}
                                <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="500">
                                    <div className="md:w-1/3">
                                        <div className="bg-[#2563EB] text-white text-xl font-inter-bold rounded-lg p-4 text-center">
                                            Aujourd'hui
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-xl font-inter-bold text-gray-900 mb-2">Leader du développement web</h3>
                                        <p className="text-gray-600">
                                            Avec plus de 100 projets réalisés et une équipe de 25 experts, Lodgic s'impose comme un partenaire de confiance pour la transformation digitale des entreprises.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Notre Équipe */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-center text-gray-900 mb-4" data-aos="fade-up">
                            Notre équipe
                        </h2>
                        <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full mb-16" data-aos="fade-up" data-aos-delay="100"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Membre 1 */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                                <div className="h-64 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Thomas Martin</h3>
                                    <p className="text-[#2563EB] font-inter-medium mb-4">Fondateur & CEO</p>
                                    <p className="text-gray-600">
                                        Expert en développement web avec plus de 15 ans d'expérience dans la création d'applications innovantes.
                                    </p>
                                </div>
                            </div>

                            {/* Membre 2 */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                                <div className="h-64 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Sophie Dubois</h3>
                                    <p className="text-[#2563EB] font-inter-medium mb-4">Directrice Technique</p>
                                    <p className="text-gray-600">
                                        Spécialiste en architecture logicielle et en optimisation des performances des applications web.
                                    </p>
                                </div>
                            </div>

                            {/* Membre 3 */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                                <div className="h-64 bg-gradient-to-r from-green-400 to-cyan-500"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-inter-bold text-gray-900 mb-1">Alexandre Chen</h3>
                                    <p className="text-[#2563EB] font-inter-medium mb-4">Lead Designer UX/UI</p>
                                    <p className="text-gray-600">
                                        Créateur d'interfaces utilisateur intuitives et esthétiques qui transforment l'expérience utilisateur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section CTA */}
                <section className="py-20 bg-gradient-to-r  from-blue-600 to-indigo-700 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-inter-bold mb-6" data-aos="fade-up">
                            Prêt à transformer votre vision en réalité ?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#2563EB] font-inter-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Contactez notre équipe
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage; 