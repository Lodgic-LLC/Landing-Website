// ... existing code ...
import React, { useEffect } from 'react';
import AOS from 'aos';
import PageTitle from '../components/PageTitle';
import { FaCode, FaRocket, FaPlug, FaTools, FaChevronRight } from 'react-icons/fa';

const ServicesPage = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    // Définition des services principaux avec contenu enrichi
    const mainServices = [
        {
            id: 1,
            icon: <FaCode className="h-8 w-8 text-blue-600" />,
            title: "Développement d'applications web",
            description: "Création d'applications web robustes et évolutives avec les dernières technologies pour optimiser vos processus métier et améliorer votre présence digitale.",
            color: "from-blue-200 to-indigo-300",
            delay: 100,
            features: [
                "Sites web responsive et performants",
                "Applications web progressives (PWA)",
                "Interfaces utilisateur modernes et intuitives",
                "Architecture évolutive et maintenable",
                "Optimisation SEO intégrée"
            ]
        },
        // ... existing code ...
        {
            id: 2,
            icon: <FaRocket className="h-8 w-8 text-blue-600" />,
            title: "Refonte et optimisation",
            description: "Modernisation de vos applications existantes pour améliorer les performances, l'expérience utilisateur et la sécurité de vos solutions digitales.",
            color: "from-purple-200 to-pink-300",
            delay: 200,
            features: [
                "Audit technique et recommandations",
                "Optimisation des performances",
                "Migration vers des technologies modernes",
                "Amélioration de l'expérience utilisateur",
                "Renforcement de la sécurité"
            ]
        },
        {
            id: 3,
            icon: <FaPlug className="h-8 w-8 text-blue-600" />,
            title: "Intégration d'API",
            description: "Connexion et automatisation de vos systèmes via des API robustes pour une efficacité maximale et une meilleure interopérabilité de vos outils.",
            color: "from-green-200 to-teal-300",
            delay: 300,
            features: [
                "Développement d'API RESTful",
                "Intégration de services tiers",
                "Automatisation des flux de données",
                "Documentation complète des API",
                "Tests et monitoring des endpoints"
            ]
        },
        {
            id: 4,
            icon: <FaTools className="h-8 w-8 text-blue-600" />,
            title: "Maintenance de site internet",
            description: "Service complet de maintenance technique, mises à jour de sécurité et support pour garantir la performance et la fiabilité de votre site sur le long terme.",
            color: "from-yellow-200 to-amber-300",
            delay: 400,
            features: [
                "Mises à jour de sécurité régulières",
                "Surveillance des performances 24/7",
                "Support technique réactif",
                "Sauvegardes automatisées",
                "Rapports d'activité mensuels"
            ]
        }
    ];

    // Composant pour les points forts (extrait pour réutilisation)
    const FeaturePoint = ({ text }) => (
        <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
                <FaChevronRight className="w-4 h-4 text-blue-600" />
            </div>
            <p className="ml-3 text-gray-600">{text}</p>
        </div>
    );

    return (
        <>
            <PageTitle
                title="Nos services"
                description="Solutions web sur mesure pour votre entreprise"
            />

            {/* Section d'introduction améliorée */}
            <section className="w-full bg-gradient-to-r pt-32 pb-20 from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl font-inter-bold text-gray-900 mb-6 leading-tight">
                            Solutions web <span className="text-blue-600">sur mesure</span> pour votre entreprise
                        </h1>
                        <p className="font-inter-regular text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
                            Nous développons des applications web performantes et évolutives, parfaitement
                            adaptées aux besoins spécifiques de votre activité pour vous aider à atteindre vos objectifs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <a
                                href="/rendez-vous"
                                className="font-inter-medium bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Prendre rendez-vous
                            </a>
                            <a
                                href="/contact"
                                className="font-inter-medium bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section des services principaux */}
            {mainServices.map((service, index) => (
                <section key={service.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
                        {/* Texte - Alternance gauche/droite */}
                        <div
                            className={`w-full md:w-1/2 mb-12 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 order-1' : 'md:pl-12 order-2'}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-duration="1000"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-5 shadow-md">
                                    {service.icon}
                                </div>
                                <h2 className="font-inter-bold text-2xl md:text-3xl text-gray-900">
                                    {service.title}
                                </h2>
                            </div>

                            <p className="font-inter-regular text-gray-600 mb-8 text-lg leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                {service.features.map((feature, i) => (
                                    <FeaturePoint key={i} text={feature} />
                                ))}
                            </div>

                            <a
                                href="/rendez-vous"
                                className="font-inter-medium bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg inline-flex items-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Discuter de votre projet
                                <FaChevronRight className="ml-2 h-3 w-3" />
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
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} shadow-xl`}></div>

                                {/* Contenu de l'illustration */}
                                <div className={`relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden border border-gray-100`}>
                                    {/* Illustration spécifique au service - conservé tel quel */}
                                    {/* ... existing code ... */}

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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Section Méthodologie */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                            Notre approche méthodologique
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un processus éprouvé pour garantir le succès de votre projet digital
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Analyse",
                                description: "Nous étudions vos besoins et objectifs pour définir une stratégie adaptée.",
                                color: "blue"
                            },
                            {
                                step: "02",
                                title: "Conception",
                                description: "Nous élaborons une architecture et des maquettes détaillées de votre solution.",
                                color: "indigo"
                            },
                            {
                                step: "03",
                                title: "Développement",
                                description: "Nous développons votre solution avec les technologies les plus adaptées.",
                                color: "purple"
                            },
                            {
                                step: "04",
                                title: "Déploiement",
                                description: "Nous mettons en ligne votre solution et assurons son bon fonctionnement.",
                                color: "pink"
                            }
                        ].map((phase, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`absolute top-0 left-0 w-2 h-full bg-${phase.color}-600`}></div>
                                <div className={`text-4xl font-bold text-${phase.color}-600 mb-4`}>{phase.step}</div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-3">{phase.title}</h3>
                                <p className="text-gray-600">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Témoignages */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-inter-bold text-gray-900 mb-4">
                            Ce que nos clients disent
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez les retours d'expérience de nos clients satisfaits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "L'équipe a parfaitement compris nos besoins et a livré une application qui a transformé notre façon de travailler.",
                                author: "Marie Dupont",
                                position: "Directrice Marketing, TechCorp",
                                delay: 0
                            },
                            {
                                quote: "Un travail d'une qualité exceptionnelle, livré dans les délais et avec un support irréprochable.",
                                author: "Jean Martin",
                                position: "CEO, StartupInnovation",
                                delay: 100
                            },
                            {
                                quote: "La refonte de notre site a considérablement amélioré nos conversions et l'expérience de nos utilisateurs.",
                                author: "Sophie Legrand",
                                position: "Responsable Digital, E-Commerce Plus",
                                delay: 200
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
                                data-aos="fade-up"
                                data-aos-delay={testimonial.delay}
                            >
                                <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1 0.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1 0.9-2 2-2V8z" />
                                </svg>
                                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-blue-600 font-bold">{testimonial.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-inter-bold text-gray-900">{testimonial.author}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;