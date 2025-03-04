"use client"

import { useEffect, useRef } from "react"

export default function Process() {
    const progressLineRef = useRef(null);

    useEffect(() => {
        // Animation de la ligne de progression
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("w-full");
                        entry.target.classList.remove("w-0");
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (progressLineRef.current) {
            observer.observe(progressLineRef.current);
        }

        return () => {
            if (progressLineRef.current) {
                observer.unobserve(progressLineRef.current);
            }
        };
    }, []);

    const processSteps = [
        {
            id: 1,
            number: "01",
            title: "Analyse",
            description:
                "Nous analysons ensemble vos besoins et objectifs pour mieux vous accompagner dans votre projet.",
            icon: (
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 5H20M14 8H17M21 10V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V10ZM7.5 14C8.32843 14 9 13.3284 9 12.5C9 11.6716 8.32843 11 7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14ZM7.5 14L11 17.5L14.5 14L18 17.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            delay: 0,
        },
        {
            id: 2,
            number: "02",
            title: "Design",
            description:
                "Création des maquettes visuelles adaptées à votre image et aux besoins de vos utilisateurs.",
            icon: (
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 21C4.79086 21 3 19.2091 3 17C3 15.8492 3.46754 14.8153 4.22834 14.0921M7 21C7.87134 21 8.67944 20.7506 9.34236 20.3199M7 21H17M17 21C19.2091 21 21 19.2091 21 17C21 15.8492 20.5325 14.8153 19.7717 14.0921M17 21C16.1287 21 15.3206 20.7506 14.6576 20.3199M4.22834 14.0921C3.46754 13.3688 3 12.3349 3 11.1841C3 9.86289 3.77618 8.73159 4.88736 8.17085M4.22834 14.0921C4.93488 14.7961 5.90766 15.2542 6.98693 15.2542M19.7717 14.0921C20.5325 13.3688 21 12.3349 21 11.1841C21 9.86289 20.2238 8.73159 19.1126 8.17085M19.7717 14.0921C19.0651 14.7961 18.0923 15.2542 17.0131 15.2542M4.88736 8.17085C5.44718 7.88643 6.09299 7.72635 6.77778 7.72635C8.52778 7.72635 10.0556 8.63889 10.8889 10M4.88736 8.17085C4.6149 8.28777 4.35999 8.43041 4.12601 8.59548M19.1126 8.17085C18.5528 7.88643 17.907 7.72635 17.2222 7.72635C15.4722 7.72635 13.9444 8.63889 13.1111 10M19.1126 8.17085C19.3851 8.28777 19.64 8.43041 19.874 8.59548M10.8889 10C11.2346 10.5573 11.4679 11.1841 11.5504 11.8519C11.6296 12.5 11.5504 13.1481 11.3333 13.7407M10.8889 10C11.3056 9.25926 11.9815 8.67593 12.7778 8.37963M13.1111 10C12.7654 10.5573 12.5321 11.1841 12.4496 11.8519C12.3704 12.5 12.4496 13.1481 12.6667 13.7407M13.1111 10C12.6944 9.25926 12.0185 8.67593 11.2222 8.37963"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            delay: 100,
        },
        {
            id: 3,
            number: "03",
            title: "Développement",
            description:
                "Réalisation technique de votre application avec les technologies adaptées à vos besoins spécifiques.",
            icon: (
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 9L5 12L8 15M16 9L19 12L16 15M13 7L11 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            delay: 200,
        },
        {
            id: 4,
            number: "04",
            title: "Tests",
            description:
                "Vérification du bon fonctionnement de votre application.",
            icon: (
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            delay: 300,
        },
        {
            id: 5,
            number: "05",
            title: "Déploiement",
            description:
                "Lancement officiel de votre application.",
            icon: (
                <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 10V3L4 14H11V21L20 10H13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            delay: 400,
        },
    ];

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-gray-900 mb-6">
                        Notre processus de{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            développement
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Une approche structurée et transparente pour vous accompagner dans
                        votre projet.
                    </p>

                    {/* Trait horizontal sous le titre avec animation */}
                    <div className="relative h-1 w-24 mx-auto">
                        <div className="absolute inset-0 bg-[#2563EB] rounded-full"></div>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-0 transition-all duration-1500 ease-out"
                        ></div>
                    </div>
                </div>

                {/* Étapes du processus - Version Desktop */}
                <div className="hidden md:block relative mb-20">
                    {/* Barre horizontale de progression - REPOSITIONNÉE AU MILIEU DES CERCLES */}
                    <div className="absolute top-[60px] left-0 right-0 h-2 bg-gray-200 rounded-full z-0">
                        <div
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-0 transition-all duration-2000 ease-out"
                            ref={progressLineRef}
                        ></div>
                    </div>

                    <div className="flex justify-between relative">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className="flex flex-col items-center text-center w-1/5 relative z-10 group"
                                data-aos="fade-up"
                                data-aos-delay={step.delay}
                            >
                                {/* Cercle numéroté - AMÉLIORÉ AVEC EFFETS */}
                                <div className="w-[120px] h-[120px] flex items-center justify-center mb-8 relative">
                                    <div className="absolute w-20 h-20 bg-white rounded-full shadow-lg border-2 border-gray-100 group-hover:border-blue-200 transition-all duration-300 z-10"></div>
                                    <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white z-20 transform group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Numéro d'étape */}
                                <div className="text-3xl font-inter-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                                    {step.number}
                                </div>

                                {/* Titre et description */}
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 max-w-[220px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Étapes du processus - Version Mobile */}
                <div className="md:hidden space-y-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="flex items-start group"
                            data-aos="fade-up"
                            data-aos-delay={step.delay}
                        >
                            {/* Cercle numéroté avec ligne verticale */}
                            <div className="mr-6 flex flex-col items-center">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                                )}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 pt-2">
                                <div className="text-xl font-inter-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-inter-bold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
