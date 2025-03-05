import Link from "next/link";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Conseil & Stratégie",
      description:
        "On prend le temps de vous écouter et de comprendre votre projet. Ensemble, on définit ce que votre application doit faire, on établit un calendrier qui vous convient et on identifie tout ce dont on aura besoin pour réussir.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      shadowColor: "shadow-amber-200",
      link: "/services/conseil",
    },
    {
      id: 2,
      title: "Design & Prototypage",
      description:
        "Nos designers créent l'apparence de votre application pour qu'elle soit à la fois belle et facile à utiliser. Vous pourrez tester des maquettes interactives avant même que le développement ne commence.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
          className="w-8 h-8 text-white"
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
      shadowColor: "shadow-blue-200",
      link: "/services/custom-solutions",
    },
    {
      id: 4,
      title: "Lancement & Évolution",
      description:
        "Votre application est prête à conquérir le monde ! On s'occupe de la mise en ligne et on reste à vos côtés pour l'améliorer en fonction des retours de vos utilisateurs et de vos nouvelles idées.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      shadowColor: "shadow-cyan-200",
      link: "/services/support",
    },
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
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
            De la conception à la mise en production, notre équipe d'experts
            vous guide à chaque étape pour transformer votre vision en une
            solution digitale performante.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl ${feature.shadowColor} transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group relative`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {feature.id}
              </div>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
