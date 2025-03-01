import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import {
  FaCode,
  FaRocket,
  FaPlug,
  FaTools,
  FaChevronRight,
  FaMobile,
} from "react-icons/fa";

const ServicesPage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Définition des services principaux avec contenu enrichi
  const mainServices = [
    {
      id: 1,
      icon: <FaMobile className="h-8 w-8 text-blue-600" />,
      title: "Création d'applications IOS et Android",
      description:
        "Nous concevons des applications pour iPhone et Android qui répondent parfaitement à vos besoins, simples à utiliser et adaptées à tous les téléphones mobiles.",
      color: "from-blue-200 to-indigo-300",
      delay: 100,
      features: [
        "Applications pour iPhone (iOS)",
        "Applications pour Android",
        "Interface intuitive et agréable à utiliser",
        "Utilisation des fonctionnalités de votre téléphone (appareil photo, localisation)",
        "Publication sur l'App Store et Google Play",
      ],
    },
    {
      id: 2,
      icon: <FaCode className="h-8 w-8 text-blue-600" />,
      title: "Création de sites web interactifs",
      description:
        "Nous développons des sites web modernes qui s'adaptent à tous les écrans (ordinateur, tablette, téléphone) et qui permettent à vos utilisateurs d'interagir facilement avec votre entreprise.",
      color: "from-purple-200 to-pink-300",
      delay: 200,
      features: [
        "Sites web qui s'adaptent à tous les appareils",
        "Sites rapides et fluides à utiliser",
        "Design moderne et attrayant",
        "Facile à mettre à jour et à faire évoluer",
        "Optimisé pour être bien référencé sur Google",
      ],
    },
    {
      id: 3,
      icon: <FaPlug className="h-8 w-8 text-blue-600" />,
      title: "Connexion de vos outils numériques",
      description:
        "Nous relions vos différents logiciels et services pour qu'ils communiquent entre eux, automatisant ainsi vos tâches quotidiennes et rendant votre travail plus efficace.",
      color: "from-green-200 to-teal-300",
      delay: 300,
      features: [
        "Connexion entre vos différents logiciels",
        "Intégration avec des services externes (paiement, réservation, etc.)",
        "Automatisation de l'échange d'informations",
        "Documentation claire pour comprendre les connexions",
        "Vérification régulière du bon fonctionnement",
      ],
    },
    {
      id: 4,
      icon: <FaTools className="h-8 w-8 text-blue-600" />,
      title: "Assistance et amélioration continue",
      description:
        "Nous prenons soin de vos applications et sites web après leur création, en assurant leur bon fonctionnement, leur sécurité et en les faisant évoluer selon vos besoins.",
      color: "from-yellow-200 to-amber-300",
      delay: 400,
      features: [
        "Protection contre les risques de sécurité",
        "Surveillance permanente du bon fonctionnement",
        "Assistance rapide en cas de problème",
        "Sauvegarde régulière de vos données",
        "Rapports mensuels sur l'état de vos outils numériques",
      ],
    },
  ];

  // Composant pour les points forts (extrait pour réutilisation)
  const FeaturePoint = ({ text }) => (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <FaChevronRight className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
      </div>
      <p className="ml-2 md:ml-3 text-sm md:text-base text-gray-600">{text}</p>
    </div>
  );

  return (
    <>
      <PageTitle
        title="Nos services"
        description="Solutions web sur mesure pour votre entreprise"
      />

      {/* Section d'introduction améliorée */}
      <section className="w-full bg-gradient-to-r pt-24 md:pt-32 pb-16 md:pb-20 from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Des outils numériques{" "}
              <span className="text-blue-600">sur mesure</span> pour votre
              entreprise
            </h1>
            <p className="font-inter-regular text-gray-600 mb-6 md:mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
              Nous créons des applications mobiles et des sites web adaptés à
              vos besoins avec un accompagnement personnalisé chaque étape de
              votre projet.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-10">
              <Link
                to="/contact"
                className="font-inter-medium bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discuter de mon projet
              </Link>
              <Link
                to="/a-propos"
                className="font-inter-medium bg-white text-blue-600 border border-blue-200 px-6 md:px-8 py-3 rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                En savoir plus sur Lodgic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section des services principaux */}
      {mainServices.map((service, index) => (
        <section
          key={service.id}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
            {/* Texte - Alternance gauche/droite */}
            <div
              className={`w-full md:w-1/2 mb-12 md:mb-0 ${
                index % 2 === 0 ? "md:pr-12 order-1" : "md:pl-12 order-2"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4 md:mr-5 shadow-md">
                  {service.icon}
                </div>
                <h2 className="font-inter-bold text-xl md:text-2xl lg:text-3xl text-gray-900">
                  {service.title}
                </h2>
              </div>

              <p className="font-inter-regular text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {service.features.map((feature, i) => (
                  <FeaturePoint key={i} text={feature} />
                ))}
              </div>

              <Link
                to="/rendez-vous"
                className="font-inter-medium bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg inline-flex items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Discuter de votre projet
                <FaChevronRight className="ml-2 h-3 w-3" />
              </Link>
            </div>

            {/* Illustration - Alternance droite/gauche */}
            <div
              className={`w-full md:w-1/2 flex justify-center ${
                index % 2 === 0 ? "order-2" : "order-1 mb-12 md:mb-0"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-sm md:max-w-lg">
                {/* Fond dégradé */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    service.color
                  } rounded-2xl transform ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } shadow-xl`}
                ></div>

                {/* Contenu de l'illustration */}
                <div
                  className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden border border-gray-100`}
                >
                  {/* Illustration spécifique au service - conservé tel quel */}
                  {service.id === 1 && (
                    <div className="relative z-10 flex justify-center items-center">
                      {/* Illustration d'applications mobiles - plus simple et intuitive */}
                      <svg
                        className="w-full h-auto max-w-md"
                        viewBox="0 0 500 350"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Smartphone principal */}
                        <rect
                          x="180"
                          y="50"
                          width="140"
                          height="250"
                          rx="20"
                          fill="#1F2937"
                        />
                        <rect
                          x="190"
                          y="70"
                          width="120"
                          height="210"
                          rx="5"
                          fill="#60A5FA"
                        />

                        {/* Écran du smartphone */}
                        <rect
                          x="200"
                          y="80"
                          width="100"
                          height="15"
                          rx="3"
                          fill="white"
                          opacity="0.9"
                        />

                        {/* Icônes d'applications */}
                        <rect
                          x="205"
                          y="105"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#F472B6"
                        />
                        <rect
                          x="235"
                          y="105"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#34D399"
                        />
                        <rect
                          x="265"
                          y="105"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#FBBF24"
                        />

                        <rect
                          x="205"
                          y="135"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#3B82F6"
                        />
                        <rect
                          x="235"
                          y="135"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#EC4899"
                        />
                        <rect
                          x="265"
                          y="135"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#10B981"
                        />

                        <rect
                          x="205"
                          y="165"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#8B5CF6"
                        />
                        <rect
                          x="235"
                          y="165"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#F59E0B"
                        />
                        <rect
                          x="265"
                          y="165"
                          width="20"
                          height="20"
                          rx="5"
                          fill="#EF4444"
                        />

                        {/* Barre de navigation */}
                        <rect
                          x="205"
                          y="230"
                          width="90"
                          height="20"
                          rx="10"
                          fill="white"
                          opacity="0.6"
                        />

                        {/* Bouton home */}
                        <circle cx="250" cy="240" r="5" fill="white" />

                        {/* Smartphone secondaire (légèrement décalé) */}
                        <rect
                          x="100"
                          y="80"
                          width="120"
                          height="220"
                          rx="15"
                          fill="#1F2937"
                        />
                        <rect
                          x="110"
                          y="95"
                          width="100"
                          height="190"
                          rx="5"
                          fill="#8B5CF6"
                        />

                        {/* Éléments d'interface */}
                        <rect
                          x="120"
                          y="110"
                          width="80"
                          height="40"
                          rx="5"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="120"
                          y="160"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="120"
                          y="180"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="120"
                          y="200"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="120"
                          y="240"
                          width="40"
                          height="15"
                          rx="7"
                          fill="#F472B6"
                        />

                        {/* Smartphone tertiaire */}
                        <rect
                          x="280"
                          y="90"
                          width="120"
                          height="210"
                          rx="15"
                          fill="#1F2937"
                        />
                        <rect
                          x="290"
                          y="105"
                          width="100"
                          height="180"
                          rx="5"
                          fill="#10B981"
                        />

                        {/* Carte/widget */}
                        <rect
                          x="300"
                          y="115"
                          width="80"
                          height="60"
                          rx="5"
                          fill="white"
                          opacity="0.8"
                        />
                        <circle cx="320" cy="135" r="8" fill="#3B82F6" />
                        <rect
                          x="335"
                          y="130"
                          width="35"
                          height="5"
                          rx="2"
                          fill="#3B82F6"
                          opacity="0.8"
                        />
                        <rect
                          x="335"
                          y="140"
                          width="25"
                          height="5"
                          rx="2"
                          fill="#3B82F6"
                          opacity="0.8"
                        />

                        {/* Éléments d'interface */}
                        <rect
                          x="300"
                          y="185"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="300"
                          y="205"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="300"
                          y="225"
                          width="80"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="300"
                          y="250"
                          width="40"
                          height="15"
                          rx="7"
                          fill="#F472B6"
                        />
                      </svg>
                    </div>
                  )}

                  {service.id === 2 && (
                    <div className="relative z-10 flex justify-center items-center">
                      {/* Illustration de site web - plus intuitive */}
                      <svg
                        className="w-full h-auto max-w-md"
                        viewBox="0 0 500 350"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Écran d'ordinateur */}
                        <rect
                          x="75"
                          y="50"
                          width="350"
                          height="220"
                          rx="10"
                          fill="#1F2937"
                        />
                        <rect
                          x="85"
                          y="60"
                          width="330"
                          height="200"
                          rx="5"
                          fill="white"
                        />

                        {/* Barre de navigation */}
                        <rect
                          x="85"
                          y="60"
                          width="330"
                          height="40"
                          rx="5"
                          fill="#3B82F6"
                        />

                        {/* Logo */}
                        <circle cx="110" cy="80" r="10" fill="white" />

                        {/* Liens de navigation */}
                        <rect
                          x="140"
                          y="75"
                          width="30"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="180"
                          y="75"
                          width="30"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="220"
                          y="75"
                          width="30"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="260"
                          y="75"
                          width="30"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />

                        {/* Bouton de contact */}
                        <rect
                          x="350"
                          y="72"
                          width="50"
                          height="16"
                          rx="8"
                          fill="#F472B6"
                        />
                        <rect
                          x="360"
                          y="78"
                          width="30"
                          height="4"
                          rx="1"
                          fill="white"
                        />

                        {/* Image principale */}
                        <rect
                          x="100"
                          y="120"
                          width="200"
                          height="120"
                          rx="5"
                          fill="#E5E7EB"
                        />
                        <circle cx="150" cy="150" r="20" fill="#60A5FA" />
                        <rect
                          x="180"
                          y="140"
                          width="100"
                          height="8"
                          rx="2"
                          fill="#60A5FA"
                        />
                        <rect
                          x="180"
                          y="155"
                          width="80"
                          height="8"
                          rx="2"
                          fill="#60A5FA"
                        />
                        <rect
                          x="180"
                          y="170"
                          width="60"
                          height="20"
                          rx="5"
                          fill="#F472B6"
                        />

                        {/* Sidebar */}
                        <rect
                          x="320"
                          y="120"
                          width="80"
                          height="120"
                          rx="5"
                          fill="#F3F4F6"
                        />
                        <rect
                          x="330"
                          y="130"
                          width="60"
                          height="8"
                          rx="2"
                          fill="#6B7280"
                        />
                        <rect
                          x="330"
                          y="145"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />
                        <rect
                          x="330"
                          y="155"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />
                        <rect
                          x="330"
                          y="165"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />
                        <rect
                          x="330"
                          y="185"
                          width="60"
                          height="8"
                          rx="2"
                          fill="#6B7280"
                        />
                        <rect
                          x="330"
                          y="200"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />
                        <rect
                          x="330"
                          y="210"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />
                        <rect
                          x="330"
                          y="220"
                          width="60"
                          height="5"
                          rx="1"
                          fill="#9CA3AF"
                        />

                        {/* Base de l'ordinateur */}
                        <path
                          d="M175 270 L325 270 L315 290 L185 290 L175 270 Z"
                          fill="#1F2937"
                        />
                        <rect
                          x="225"
                          y="270"
                          width="50"
                          height="5"
                          rx="2"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                  )}

                  {service.id === 3 && (
                    <div className="relative z-10 flex justify-center items-center">
                      {/* Illustration de connexion d'outils - plus intuitive */}
                      <svg
                        className="w-full h-auto max-w-md"
                        viewBox="0 0 500 350"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Appareil 1 - Smartphone */}
                        <rect
                          x="80"
                          y="100"
                          width="100"
                          height="180"
                          rx="15"
                          fill="#1F2937"
                        />
                        <rect
                          x="90"
                          y="110"
                          width="80"
                          height="160"
                          rx="5"
                          fill="#60A5FA"
                        />
                        <rect
                          x="100"
                          y="120"
                          width="60"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="100"
                          y="140"
                          width="60"
                          height="40"
                          rx="5"
                          fill="white"
                          opacity="0.6"
                        />
                        <rect
                          x="100"
                          y="190"
                          width="60"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="100"
                          y="210"
                          width="60"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="100"
                          y="230"
                          width="30"
                          height="20"
                          rx="5"
                          fill="#F472B6"
                        />

                        {/* Appareil 2 - Ordinateur */}
                        <rect
                          x="320"
                          y="100"
                          width="140"
                          height="100"
                          rx="5"
                          fill="#1F2937"
                        />
                        <rect
                          x="330"
                          y="110"
                          width="120"
                          height="80"
                          rx="3"
                          fill="#10B981"
                        />
                        <rect
                          x="340"
                          y="120"
                          width="100"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="340"
                          y="140"
                          width="100"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="340"
                          y="160"
                          width="60"
                          height="20"
                          rx="5"
                          fill="#F472B6"
                        />
                        <path
                          d="M350 200 L430 200 L420 220 L360 220 L350 200 Z"
                          fill="#1F2937"
                        />

                        {/* Appareil 3 - Tablette */}
                        <rect
                          x="300"
                          y="230"
                          width="120"
                          height="90"
                          rx="8"
                          fill="#1F2937"
                        />
                        <rect
                          x="305"
                          y="235"
                          width="110"
                          height="80"
                          rx="5"
                          fill="#8B5CF6"
                        />
                        <rect
                          x="315"
                          y="245"
                          width="90"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="315"
                          y="265"
                          width="90"
                          height="10"
                          rx="2"
                          fill="white"
                          opacity="0.8"
                        />
                        <rect
                          x="315"
                          y="285"
                          width="50"
                          height="20"
                          rx="5"
                          fill="#F472B6"
                        />

                        {/* Connexions */}
                        <path
                          d="M180 150 L320 130"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray="5 5"
                        />
                        <path
                          d="M180 180 L300 250"
                          stroke="#8B5CF6"
                          strokeWidth="3"
                          strokeDasharray="5 5"
                        />
                        <path
                          d="M320 180 L300 230"
                          stroke="#10B981"
                          strokeWidth="3"
                          strokeDasharray="5 5"
                        />

                        {/* Icônes de données */}
                        <circle cx="250" cy="140" r="15" fill="#3B82F6" />
                        <rect
                          x="245"
                          cy="135"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="245"
                          cy="140"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="245"
                          cy="145"
                          width="10"
                          height="2"
                          fill="white"
                        />

                        <circle cx="240" cy="215" r="15" fill="#8B5CF6" />
                        <rect
                          x="235"
                          cy="210"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="235"
                          cy="215"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="235"
                          cy="220"
                          width="10"
                          height="2"
                          fill="white"
                        />

                        <circle cx="310" cy="205" r="15" fill="#10B981" />
                        <rect
                          x="305"
                          cy="200"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="305"
                          cy="205"
                          width="10"
                          height="2"
                          fill="white"
                        />
                        <rect
                          x="305"
                          cy="210"
                          width="10"
                          height="2"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}

                  {service.id === 4 && (
                    <div className="relative z-10 flex justify-center items-center">
                      {/* Illustration d'assistance - plus intuitive */}
                      <svg
                        className="w-full h-auto max-w-md"
                        viewBox="0 0 500 350"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Écran principal */}
                        <rect
                          x="100"
                          y="50"
                          width="300"
                          height="200"
                          rx="10"
                          fill="#1F2937"
                        />
                        <rect
                          x="110"
                          y="60"
                          width="280"
                          height="180"
                          rx="5"
                          fill="#F3F4F6"
                        />

                        {/* Éléments d'interface */}
                        <rect
                          x="130"
                          y="80"
                          width="240"
                          height="40"
                          rx="5"
                          fill="white"
                        />
                        <rect
                          x="140"
                          y="95"
                          width="150"
                          height="10"
                          rx="2"
                          fill="#6B7280"
                        />
                        <circle cx="350" cy="100" r="10" fill="#10B981" />
                        <path
                          d="M345 100 L350 105 L355 95"
                          stroke="white"
                          strokeWidth="2"
                        />

                        {/* Graphique de performance */}
                        <rect
                          x="130"
                          y="130"
                          width="240"
                          height="90"
                          rx="5"
                          fill="white"
                        />
                        <path
                          d="M140 200 L360 200"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                        />
                        <path
                          d="M140 170 L360 170"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                        />
                        <path
                          d="M140 140 L360 140"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                        />

                        <path
                          d="M150 190 L180 160 L210 180 L240 130 L270 150 L300 140 L330 170 L350 150"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                        />
                        <circle cx="150" cy="190" r="4" fill="#3B82F6" />
                        <circle cx="180" cy="160" r="4" fill="#3B82F6" />
                        <circle cx="210" cy="180" r="4" fill="#3B82F6" />
                        <circle cx="240" cy="130" r="4" fill="#3B82F6" />
                        <circle cx="270" cy="150" r="4" fill="#3B82F6" />
                        <circle cx="300" cy="140" r="4" fill="#3B82F6" />
                        <circle cx="330" cy="170" r="4" fill="#3B82F6" />
                        <circle cx="350" cy="150" r="4" fill="#3B82F6" />

                        {/* Éléments de support */}
                        <circle
                          cx="400"
                          cy="120"
                          r="30"
                          fill="#F472B6"
                          opacity="0.2"
                        />
                        <circle
                          cx="400"
                          cy="120"
                          r="20"
                          fill="#F472B6"
                          opacity="0.4"
                        />
                        <circle cx="400" cy="120" r="10" fill="#F472B6" />

                        <circle
                          cx="80"
                          cy="200"
                          r="25"
                          fill="#10B981"
                          opacity="0.2"
                        />
                        <circle
                          cx="80"
                          cy="200"
                          r="15"
                          fill="#10B981"
                          opacity="0.4"
                        />
                        <circle cx="80" cy="200" r="8" fill="#10B981" />

                        {/* Icônes de notification */}
                        <circle
                          cx="400"
                          cy="200"
                          r="20"
                          fill="#FBBF24"
                          opacity="0.2"
                        />
                        <rect
                          x="395"
                          y="195"
                          width="10"
                          height="10"
                          rx="2"
                          fill="#FBBF24"
                        />
                        <path
                          d="M400 190 L400 185"
                          stroke="#FBBF24"
                          strokeWidth="2"
                        />
                        <path
                          d="M400 215 L400 210"
                          stroke="#FBBF24"
                          strokeWidth="2"
                        />
                        <path
                          d="M390 200 L385 200"
                          stroke="#FBBF24"
                          strokeWidth="2"
                        />
                        <path
                          d="M415 200 L410 200"
                          stroke="#FBBF24"
                          strokeWidth="2"
                        />

                        {/* Base de l'écran */}
                        <rect
                          x="200"
                          y="250"
                          width="100"
                          height="10"
                          rx="3"
                          fill="#1F2937"
                        />
                        <rect
                          x="175"
                          y="260"
                          width="150"
                          height="5"
                          rx="2"
                          fill="#4B5563"
                        />
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
              Notre façon de travailler avec vous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthode simple et efficace pour réaliser votre projet en toute
              tranquillité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Écoute",
                description:
                  "Nous prennons ensemble le temps de comprendre vos besoins, vos objectifs et vos contraintes pour vous proposer la solution la plus adaptée a votre projet.",
                color: "#2563EB", // Bleu
              },
              {
                step: "02",
                title: "Proposition",
                description:
                  "Nous vous présentons un cahier des charges complet ainsi qu'une maquette de votre futur outil.",
                color: "#4361EE", // Bleu-indigo
              },
              {
                step: "03",
                title: "Création",
                description:
                  "Nous réalisons ensemble votre projet étape par étape, en vous impliquant dans les choix importants de votre projet.",
                color: "#5E60CE", // Indigo-violet
              },
              {
                step: "04",
                title: "Accompagnement",
                description:
                  "Nous vous formons à l'utilisation de votre nouvel outil et restons disponibles pour vous aider au quotidien.",
                color: "#7B2CBF", // Violet
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ backgroundColor: phase.color }}
                ></div>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: phase.color }}
                >
                  {phase.step}
                </div>
                <h3 className="text-xl font-inter-bold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Éléments décoratifs subtils */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white opacity-5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-3/5" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter-bold text-white mb-4 leading-tight">
                Besoin d'une solution numérique pour votre entreprise ?
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl">
                Nous créons des outils numériques adaptés à vos besoins
                spécifiques. Discutons ensemble de votre projet pour trouver la
                solution la plus efficace et la plus simple à utiliser.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-inter-medium shadow-md hover:shadow-lg transition-all flex items-center text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Prendre rendez-vous
                  <FaChevronRight className="ml-2 h-3 w-3" />
                </Link>
                <Link
                  to="/a-propos"
                  className="bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-inter-medium transition-all text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Notre approche
                </Link>
              </div>
            </div>

            <div className="w-full md:w-2/5" data-aos="fade-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M13 10H11V12H9V14H11V16H13V14H15V12H13V10Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-inter-bold text-lg mb-1">
                      Assistance technique
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Support réactif et maintenance régulière de vos
                      applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-inter-bold text-lg mb-1">
                      Délais maîtrisés
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Livraison de votre projet dans les temps convenus ensemble
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11Z"
                        fill="#2563EB"
                      />
                      <path
                        d="M7.41 11.59L6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-inter-bold text-lg mb-1">
                      Sécurité garantie
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Protection de vos données et mises à jour de sécurité
                      régulières
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="w-full bg-white text-blue-700 hover:bg-blue-50 py-3 rounded-lg font-inter-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    Contactez-nous
                    <FaChevronRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
