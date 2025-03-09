import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Conseil & Stratégie",
      description:
        "Ensemble, on définit ce que votre application doit faire, on établit un cahier des charges et on identifie tout ce dont on aura besoin pour votre application.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16V21M12 16L19 21M12 16L5 21M5 3L12 7L19 3V14.5C19 15.8807 17.8807 17 16.5 17H7.5C6.11929 17 5 15.8807 5 14.5V3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      shadowColor: "shadow-amber-200",
      link: "/services/conseil",
    },
    {
      id: 2,
      title: "Design & Prototypage",
      description:
        "Nous soignons l'apparence de votre application pour qu'elle soit à la fois professionnelle et intuitive. Nous vous présentons des maquettes afin que vous puissiez visualiser son design avant la réalisation.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L8.58579 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6332 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      shadowColor: "shadow-purple-200",
      link: "/services/ux-design",
    },
    {
      id: 3,
      title: "Développement de l'application",
      description:
        "C'est là que la magie opère ! Notre équipe code votre application avec soin, en restant flexible pour s'adapter à vos retours. On travaille par étapes pour vous montrer régulièrement les avancées.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      shadowColor: "shadow-blue-200",
      link: "/services/custom-solutions",
    },
    {
      id: 4,
      title: "Lancement & Évolution",
      description:
        "Votre application est prête à décoller ! Nous assurons sa mise en ligne et restons à vos côtés pour l'optimiser selon les retours des utilisateurs et vos nouvelles idées.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      shadowColor: "shadow-cyan-200",
      link: "/services/support",
    },
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Vague en haut pour transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,40 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Formes SVG en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Cercles et formes abstraites */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grand cercle central */}
          <circle cx="720" cy="400" r="300" fill="url(#gradient1)" fillOpacity="0.1" />

          {/* Cercle supérieur droit */}
          <circle cx="1100" cy="150" r="150" fill="url(#gradient2)" fillOpacity="0.1" />

          {/* Cercle inférieur gauche */}
          <circle cx="300" cy="650" r="200" fill="url(#gradient3)" fillOpacity="0.1" />

          {/* Forme abstraite 1 */}
          <path
            d="M-100,300 C100,200 300,600 500,500 C700,400 900,700 1100,600 C1300,500 1500,300 1700,400 L1700,800 L-100,800 Z"
            fill="url(#gradient4)"
            fillOpacity="0.05"
          />

          {/* Définition des dégradés */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-bold text-gray-900 mb-6">
            Nous vous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              accompagnons
            </span>{" "}
            à chaque étape de la réalisation de votre application
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception à la livraison, nous vous accompagnons à chaque étape pour concrétiser votre application.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`${feature.bgColor} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div className="w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center text-sm font-bold shadow-sm border border-gray-100">
                    {feature.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
              <div
                className={`h-1 w-full bg-gradient-to-r ${feature.color}`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Vague en bas pour transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '80px' }}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
