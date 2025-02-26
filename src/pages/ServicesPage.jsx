import React, { useEffect } from 'react';
import AOS from 'aos';
import PageTitle from '../components/PageTitle';
import { FaCode, FaRocket, FaPlug, FaTools } from 'react-icons/fa';

const ServicesPage = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    // Définition des services principaux
    const mainServices = [
        {
            id: 1,
            icon: <FaCode className="h-8 w-8 text-blue-600" />,
            title: "Développement d'applications web",
            description: "Création d'applications web robustes et évolutives avec les dernières technologies pour optimiser vos processus métier.",
            color: "from-blue-200 to-indigo-300",
            delay: 100
        },
        {
            id: 2,
            icon: <FaRocket className="h-8 w-8 text-blue-600" />,
            title: "Refonte et optimisation",
            description: "Modernisation de vos applications existantes pour améliorer les performances et l'expérience utilisateur.",
            color: "from-purple-200 to-pink-300",
            delay: 200
        },
        {
            id: 3,
            icon: <FaPlug className="h-8 w-8 text-blue-600" />,
            title: "Intégration d'API",
            description: "Connexion et automatisation de vos systèmes via des API robustes pour une efficacité maximale.",
            color: "from-green-200 to-teal-300",
            delay: 300
        },
        {
            id: 4,
            icon: <FaTools className="h-8 w-8 text-blue-600" />,
            title: "Maintenance de site internet",
            description: "Service complet de maintenance technique, mises à jour de sécurité et support pour garantir la performance et la fiabilité de votre site.",
            color: "from-yellow-200 to-amber-300",
            delay: 400
        }
    ];

    return (
        <>
            <PageTitle
                title="Nos services"
                description="Solutions web sur mesure pour votre entreprise"
            />

            {/* Section d'introduction */}
            <section className="w-full bg-gradient-to-r pt-44 pb-20 from-blue-50 to-purple-50 ">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-inter-bold text-center text-gray-900 mb-4">
                        Solutions web sur mesure pour votre entreprise
                    </h1>
                    <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                        <p className="font-inter-regular text-gray-600 mb-8 text-lg">
                            Nous développons des applications web performantes et évolutives, parfaitement
                            adaptées aux besoins spécifiques de votre activité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section des services principaux */}
            {mainServices.map((service, index) => (
                <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                        {/* Texte - Alternance gauche/droite */}
                        <div
                            className={`w-full md:w-1/2 mb-12 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 order-1' : 'md:pl-12 order-2'}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-duration="1000"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    {service.icon}
                                </div>
                                <h2 className="font-inter-bold text-2xl md:text-3xl text-gray-900">
                                    {service.title}
                                </h2>
                            </div>

                            <p className="font-inter-regular text-gray-600 mb-8 text-lg">
                                {service.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {service.id === 1 && (
                                    <>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Sites web responsive et performants</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Applications web progressives (PWA)</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Interfaces utilisateur modernes et intuitives</p>
                                        </div>
                                    </>
                                )}

                                {service.id === 2 && (
                                    <>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Audit technique et recommandations</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Optimisation des performances</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Migration vers des technologies modernes</p>
                                        </div>
                                    </>
                                )}

                                {service.id === 3 && (
                                    <>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Développement d'API RESTful</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Intégration de services tiers</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Automatisation des flux de données</p>
                                        </div>
                                    </>
                                )}

                                {service.id === 4 && (
                                    <>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Mises à jour de sécurité régulières</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Surveillance des performances 24/7</p>
                                        </div>
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-gray-600">Support technique réactif</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            <a
                                href="/contact"
                                className="font-inter-medium bg-[#2563EB] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Discuter de votre projet
                            </a>
                        </div>

                        {/* Illustration - Alternance droite/gauche */}
                        <div
                            className={`w-full md:w-1/2 flex justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="relative w-full max-w-lg">
                                {/* Fond dégradé */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}></div>

                                {/* Contenu de l'illustration */}
                                <div className={`relative bg-gradient-to-br ${service.color} rounded-3xl p-8 shadow-xl overflow-hidden`}>
                                    {/* Illustration spécifique au service */}
                                    {service.id === 1 && (
                                        <div className="relative z-10 flex justify-center items-center">
                                            {/* Ordinateur avec code */}
                                            <svg className="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {/* Base de l'ordinateur */}
                                                <rect x="100" y="250" width="300" height="20" rx="5" fill="#374151" />
                                                <rect x="150" y="270" width="200" height="10" rx="2" fill="#1F2937" />

                                                {/* Écran de l'ordinateur */}
                                                <rect x="75" y="50" width="350" height="200" rx="8" fill="#1F2937" />
                                                <rect x="85" y="60" width="330" height="180" rx="4" fill="#6366F1" />

                                                {/* Contenu de l'écran (code) */}
                                                <rect x="100" y="80" width="200" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="100" width="180" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="120" width="220" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="140" width="150" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="160" width="190" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="180" width="170" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="100" y="200" width="210" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />

                                                {/* Éléments de code colorés */}
                                                <rect x="130" y="80" width="40" height="10" rx="2" fill="#F472B6" />
                                                <rect x="210" y="100" width="30" height="10" rx="2" fill="#34D399" />
                                                <rect x="150" y="120" width="50" height="10" rx="2" fill="#FBBF24" />
                                                <rect x="180" y="160" width="35" height="10" rx="2" fill="#60A5FA" />
                                                <rect x="120" y="200" width="45" height="10" rx="2" fill="#F472B6" />
                                            </svg>
                                        </div>
                                    )}

                                    {service.id === 2 && (
                                        <div className="relative z-10 flex justify-center items-center">
                                            {/* Illustration de refonte */}
                                            <svg className="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {/* Écran avant/après */}
                                                <rect x="50" y="75" width="180" height="200" rx="8" fill="#1F2937" />
                                                <rect x="60" y="85" width="160" height="180" rx="4" fill="#4B5563" />

                                                <rect x="270" y="75" width="180" height="200" rx="8" fill="#1F2937" />
                                                <rect x="280" y="85" width="160" height="180" rx="4" fill="#6366F1" />

                                                {/* Flèche de transformation */}
                                                <path d="M240 175 L260 175 L250 155 L240 175 Z" fill="#F472B6" />
                                                <rect x="230" y="175" width="40" height="10" rx="5" fill="#F472B6" />

                                                {/* Éléments d'interface ancienne */}
                                                <rect x="80" y="105" width="120" height="15" rx="2" fill="#9CA3AF" />
                                                <rect x="80" y="130" width="120" height="10" rx="2" fill="#9CA3AF" />
                                                <rect x="80" y="150" width="120" height="10" rx="2" fill="#9CA3AF" />
                                                <rect x="80" y="170" width="120" height="10" rx="2" fill="#9CA3AF" />
                                                <rect x="80" y="200" width="60" height="20" rx="4" fill="#9CA3AF" />

                                                {/* Éléments d'interface nouvelle */}
                                                <rect x="300" y="105" width="120" height="15" rx="8" fill="#F9FAFB" />
                                                <rect x="300" y="130" width="120" height="10" rx="5" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="300" y="150" width="120" height="10" rx="5" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="300" y="170" width="120" height="10" rx="5" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="300" y="200" width="60" height="20" rx="10" fill="#F472B6" />
                                            </svg>
                                        </div>
                                    )}

                                    {service.id === 3 && (
                                        <div className="relative z-10 flex justify-center items-center">
                                            {/* Illustration d'API */}
                                            <svg className="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {/* Serveurs et connexions */}
                                                <rect x="100" y="75" width="100" height="200" rx="8" fill="#1F2937" />
                                                <rect x="300" y="75" width="100" height="200" rx="8" fill="#1F2937" />

                                                {/* Connexions */}
                                                <path d="M200 125 L300 125" stroke="#60A5FA" strokeWidth="4" strokeDasharray="8 4" />
                                                <path d="M200 175 L300 175" stroke="#F472B6" strokeWidth="4" strokeDasharray="8 4" />
                                                <path d="M200 225 L300 225" stroke="#34D399" strokeWidth="4" strokeDasharray="8 4" />

                                                {/* Icônes de données */}
                                                <circle cx="250" cy="125" r="15" fill="#60A5FA" />
                                                <rect x="240" y="120" width="20" height="2" fill="white" />
                                                <rect x="240" y="125" width="20" height="2" fill="white" />
                                                <rect x="240" y="130" width="20" height="2" fill="white" />

                                                <circle cx="250" cy="175" r="15" fill="#F472B6" />
                                                <rect x="240" y="170" width="20" height="2" fill="white" />
                                                <rect x="240" y="175" width="20" height="2" fill="white" />
                                                <rect x="240" y="180" width="20" height="2" fill="white" />

                                                <circle cx="250" cy="225" r="15" fill="#34D399" />
                                                <rect x="240" y="220" width="20" height="2" fill="white" />
                                                <rect x="240" y="225" width="20" height="2" fill="white" />
                                                <rect x="240" y="230" width="20" height="2" fill="white" />

                                                {/* Détails serveurs */}
                                                <rect x="115" y="100" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="115" y="120" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="115" y="170" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="115" y="190" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="115" y="220" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="115" y="240" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />

                                                <rect x="315" y="100" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="315" y="120" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="315" y="170" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="315" y="190" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="315" y="220" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                                <rect x="315" y="240" width="70" height="10" rx="2" fill="#F9FAFB" opacity="0.7" />
                                            </svg>
                                        </div>
                                    )}

                                    {service.id === 4 && (
                                        <div className="relative z-10 flex justify-center items-center">
                                            {/* Illustration de maintenance */}
                                            <svg className="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {/* Écran d'ordinateur */}
                                                <rect x="100" y="50" width="300" height="200" rx="8" fill="#1F2937" />
                                                <rect x="110" y="60" width="280" height="180" rx="4" fill="#FBBF24" />

                                                {/* Outils de maintenance */}
                                                <circle cx="250" cy="150" r="60" fill="#1F2937" opacity="0.1" />

                                                {/* Engrenage principal */}
                                                <path d="M250 110C227.909 110 210 127.909 210 150C210 172.091 227.909 190 250 190C272.091 190 290 172.091 290 150C290 127.909 272.091 110 250 110ZM250 180C233.431 180 220 166.569 220 150C220 133.431 233.431 120 250 120C266.569 120 280 133.431 280 150C280 166.569 266.569 180 250 180Z" fill="#1F2937" />

                                                {/* Dents d'engrenage */}
                                                <rect x="248" y="90" width="4" height="20" fill="#1F2937" />
                                                <rect x="248" y="190" width="4" height="20" fill="#1F2937" />
                                                <rect x="290" y="148" width="20" height="4" fill="#1F2937" />
                                                <rect x="190" y="148" width="20" height="4" fill="#1F2937" />

                                                {/* Dents diagonales */}
                                                <rect x="277" y="113" width="4" height="20" transform="rotate(45 277 113)" fill="#1F2937" />
                                                <rect x="219" y="171" width="4" height="20" transform="rotate(45 219 171)" fill="#1F2937" />
                                                <rect x="219" y="113" width="4" height="20" transform="rotate(-45 219 113)" fill="#1F2937" />
                                                <rect x="277" y="171" width="4" height="20" transform="rotate(-45 277 171)" fill="#1F2937" />

                                                {/* Clé à molette */}
                                                <path d="M180 100C180 95.5817 183.582 92 188 92H192C196.418 92 200 95.5817 200 100V110C200 114.418 196.418 118 192 118H188C183.582 118 180 114.418 180 110V100Z" fill="#4B5563" />
                                                <rect x="185" y="118" width="10" height="40" rx="2" fill="#4B5563" />

                                                {/* Tournevis */}
                                                <rect x="320" y="100" width="8" height="40" rx="2" fill="#4B5563" />
                                                <path d="M320 100L328 100L324 80L320 100Z" fill="#F59E0B" />

                                                {/* Indicateurs de statut */}
                                                <circle cx="150" cy="200" r="10" fill="#10B981" />
                                                <circle cx="180" cy="200" r="10" fill="#F59E0B" />
                                                <circle cx="210" cy="200" r="10" fill="#EF4444" />

                                                {/* Base de l'ordinateur */}
                                                <rect x="150" y="250" width="200" height="20" rx="5" fill="#374151" />
                                                <rect x="200" y="270" width="100" height="10" rx="2" fill="#1F2937" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Éléments flottants */}
                                    <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-md transform rotate-6 animate-float">
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-10 left-10 bg-white p-2 rounded-lg shadow-md transform -rotate-3 animate-float-delayed">
                                        <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    {/* Notification flottante */}
                                    <div className="absolute top-1/3 right-5 z-10 bg-white p-3 rounded-xl shadow-lg transform rotate-3 animate-float-slow">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-inter-medium text-gray-800">
                                                    {service.id === 1 && "Site web déployé"}
                                                    {service.id === 2 && "Performance +80%"}
                                                    {service.id === 3 && "API connectée"}
                                                    {service.id === 4 && "Maintenance effectuée"}
                                                </p>
                                                <p className="text-xs text-gray-500">il y a 2 minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Section CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-inter-bold mb-6" data-aos="fade-up">
                        Prêt à transformer votre vision en réalité ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Discutons de votre projet et voyons comment notre expertise peut vous aider à atteindre vos objectifs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#2563EB] font-inter-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Contactez notre équipe
                        </a>
                        <a
                            href="/devis"
                            className="inline-block bg-blue-800 text-white border-2 border-white font-inter-medium px-8 py-4 rounded-full hover:bg-blue-900 transition-colors shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Demander un devis gratuit
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage; 