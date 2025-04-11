'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const technologies = [
    {
        name: 'React Native',
        logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        description: "Permet de créer des applications mobiles qui fonctionnent aussi bien sur iPhone que sur Android avec un seul code",
        color: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        name: 'Expo',
        logo: 'https://cdn.worldvectorlogo.com/logos/expo-1.svg',
        description: "Simplifie la création et le partage d'applications mobiles, pour vous les faire tester rapidement et facilement",
        color: 'bg-gray-50',
        textColor: 'text-gray-800',
    },
    {
        name: 'Prisma',
        logo: 'https://cdn.worldvectorlogo.com/logos/prisma-4.svg',
        description: "Gère efficacement toutes vos données et informations, comme un bibliothécaire ultra-organisé pour votre application",
        color: 'bg-indigo-50',
        textColor: 'text-indigo-600',
    },
    {
        name: 'NestJS',
        logo: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
        description: "Crée l'intelligence derrière votre application, assurant sa rapidité, sa sécurité et sa capacité à évoluer",
        color: 'bg-red-50',
        textColor: 'text-red-600',
    },
]

export default function TechStack() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/services')
    }

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Notre stack technologique
                    </h2>
                    <div className="w-16 sm:w-20 h-1.5 bg-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                        Nous utilisons les outils les plus modernes pour créer vos applications mobiles,
                        ce qui garantit qu'elles seront rapides, fiables et faciles à faire évoluer avec vos besoins.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`${tech.color} rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-bl-[100px] -z-10 transition-all duration-300 group-hover:bg-white/30"></div>

                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
                                    <Image
                                        src={tech.logo}
                                        alt={`${tech.name} logo`}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className={`text-lg sm:text-xl font-bold ${tech.textColor} break-words`}>{tech.name}</h3>
                            </div>

                            <p className="text-sm sm:text-base text-gray-700">{tech.description}</p>

                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200/50 flex justify-between items-center cursor-pointer" onClick={handleClick}>
                                <span className={`text-xs sm:text-sm font-medium ${tech.textColor}`}>En savoir plus</span>
                                <svg
                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.textColor} transform group-hover:translate-x-1 transition-transform`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-16 bg-gray-50 rounded-xl p-4 sm:p-8 shadow-inner">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Un écosystème complet et intégré
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                Ces technologies fonctionnent parfaitement ensemble, comme les pièces d'un puzzle,
                                pour vous offrir des applications complètes et performantes, tout en réduisant le temps de développement.
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    "Une seule application qui fonctionne sur iPhone et Android à la fois",
                                    "Des services en ligne sécurisés et qui supportent de nombreux utilisateurs",
                                    "Une gestion intelligente et organisée de vos données",
                                    "Des mises à jour simples et rapides de votre application"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="relative h-48 sm:h-60 w-full md:h-80">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-xs mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-full blur-3xl"></div>
                                        <div className="relative h-full flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                                {technologies.map((tech) => (
                                                    <div
                                                        key={`icon-${tech.name}`}
                                                        className="bg-white p-3 sm:p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                                                    >
                                                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 mx-auto">
                                                            <Image
                                                                src={tech.logo}
                                                                alt={tech.name}
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 