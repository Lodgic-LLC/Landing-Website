import React from "react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "NexusPay - Application Bancaire Mobile | Lodgic",
    description: "Découvrez comment nous avons développé NexusPay, une application bancaire mobile innovante pour la gestion financière et le paiement sécurisé.",
}

export default function NexusPayProject() {
    return (
        <>

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-6">
                            Mobile
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
                            NexusPay — Application Bancaire Mobile
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mb-10">
                            Application mobile de gestion financière et de paiement sécurisée pour particuliers et professionnels
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">React Native</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">TypeScript</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">Node.js</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">AWS</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium">Supabase</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image principale */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto -mt-32 relative z-20">
                        <div className="flex flex-wrap justify-center items-center">
                            {/* Téléphone 1 - légèrement incliné vers la gauche */}
                            <div className="transform -rotate-6 translate-y-4 md:-translate-x-4 z-10 hidden md:block">
                                <div className="w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                                    <img
                                        src="/images/banking-2.png"
                                        alt="Interface de gestion des budgets NexusPay"
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Téléphone principal - centré et plus grand */}
                            <div className="w-64 md:w-72 rounded-2xl overflow-hidden shadow-2xl bg-white p-3 z-20">
                                <img
                                    src="/images/banking-1.png"
                                    alt="Écran d'accueil de NexusPay"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>

                            {/* Téléphone 3 - légèrement incliné vers la droite */}
                            <div className="transform rotate-6 translate-y-4 md:translate-x-4 z-10 hidden md:block">
                                <div className="w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                                    <img
                                        src="/images/banking-4.png"
                                        alt="Analyse des dépenses NexusPay"
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Éléments décoratifs */}
                        <div className="absolute -left-10 top-1/3 w-24 h-24 bg-blue-50 rounded-full opacity-70 z-0"></div>
                        <div className="absolute -right-10 bottom-1/4 w-20 h-20 bg-indigo-50 rounded-full opacity-70 z-0"></div>
                        <div className="absolute left-1/4 -bottom-10 w-16 h-16 bg-blue-100 rounded-full opacity-50 z-0"></div>
                    </div>
                </div>
            </section>

            {/* Aperçu du projet */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Aperçu du projet</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            NexusPay est une application bancaire mobile innovante qui permet aux utilisateurs de gérer leurs finances personnelles et professionnelles en toute simplicité. Notre objectif était de créer une solution complète qui répond aux besoins des utilisateurs modernes en matière de gestion financière.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            L'application offre une expérience utilisateur fluide et intuitive, avec des fonctionnalités avancées de suivi des dépenses, de gestion des budgets, et de paiements sécurisés, le tout dans une interface élégante et facile à utiliser.
                        </p>
                    </div>
                </div>
            </section>

            {/* Le défi */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Le défi</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            NexusPay souhaitait développer une application bancaire mobile permettant de gérer les finances personnelles et professionnelles de ses utilisateurs. Il souhaitait également permettre aux utilisateurs de gérer leurs comptes bancaires, et de recevoir des notifications pour leurs transactions.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Les principaux défis techniques incluaient :
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                            <li>Création d'une interface utilisateur intuitive et élégante pour une expérience mobile optimale</li>
                            <li>Développement d'un système de gestion de comptes bancaires avec synchronisation en temps réel</li>
                            <li>Mise en place d'un moteur de notifications intelligent et personnalisable pour les transactions</li>
                            <li>Implémentation de mesures de sécurité robustes pour protéger les données financières sensibles</li>
                            <li>Conception d'une architecture évolutive capable de gérer un grand nombre d'utilisateurs et de transactions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Notre solution */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Notre solution</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous avons développé une application native multi-plateforme qui répond précisément à ces besoins : un tableau de bord unifié pour la gestion des finances personnelles et professionnelles, un système de gestion de comptes bancaires avec synchronisation en temps réel, et un moteur de notifications intelligent et personnalisable pour les transactions. L'interface a été conçue selon les principes du design centré utilisateur, avec des tests d'utilisabilité à chaque étape du développement.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Tableau de bord unifié</h3>
                                </div>
                                <p className="text-gray-700">
                                    Interface intuitive permettant aux utilisateurs de visualiser et de gérer leurs finances personnelles et professionnelles en un seul endroit.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Suivi des dépenses</h3>
                                </div>
                                <p className="text-gray-700">
                                    Outils avancés de suivi et d'analyse des dépenses, avec catégorisation automatique et visualisations graphiques pour une meilleure compréhension des habitudes financières.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Gestion de budget</h3>
                                </div>
                                <p className="text-gray-700">
                                    Système de budgétisation flexible permettant aux utilisateurs de définir des objectifs financiers et de suivre leurs progrès en temps réel.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Sécurité avancée</h3>
                                </div>
                                <p className="text-gray-700">
                                    Mesures de sécurité robustes, incluant l'authentification biométrique, le chiffrement des données et la détection des activités suspectes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galerie d'images */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center space-x-4 mb-12 justify-center">
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Aperçu de l'application</h2>
                            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/banking-1.png"
                                    alt="Écran d'accueil de NexusPay"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Dashboard principal avec aperçu des comptes</p>
                                </div>
                            </div>

                            <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/banking-2.png"
                                    alt="Fonctionnalité de gestion des budgets"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Page de gestion des budgets</p>
                                </div>
                            </div>

                            <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/banking-3.png"
                                    alt="Page de paramètres du compte"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Page de paramètres du compte</p>
                                </div>
                            </div>

                            <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/banking-4.png"
                                    alt="Analyse des dépenses"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Analyse des dépenses</p>
                                </div>
                            </div>

                            <div className="w-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/banking-5.png"
                                    alt="Page d'ajout de dépenses"
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-white">
                                    <p className="text-gray-700 font-medium">Page d'ajout de dépenses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Prêt à développer votre application mobile ?</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer une application mobile performante et intuitive.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Nous contacter
                            </Link>
                            <Link
                                href="/projets"
                                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-400 transition-colors shadow-lg"
                            >
                                Voir d'autres projets
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}