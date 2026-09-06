'use client'

import BookingWidget from './BookingWidget'
import {
  FaBolt,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronRight,
  FaEnvelope,
  FaFileAlt,
  FaHandshake,
  FaVideo,
} from 'react-icons/fa'
import Link from 'next/link'

const RendezVousRefonteContent = () => {
  const processSteps = [
    {
      title: 'Vous choisissez votre creneau',
      description: 'Selectionnez un horaire qui vous convient, sans aller-retour par email.',
      icon: FaCalendarAlt,
    },
    {
      title: 'On echange en visio',
      description: 'Nous cadrons vos objectifs, vos contraintes et vos priorites business.',
      icon: FaVideo,
    },
    {
      title: 'Vous recevez une vision claire',
      description: "Plan d'action, recommandations techniques et prochaines etapes concretes.",
      icon: FaFileAlt,
    },
  ]

  const highlights = [
    'Consultation strategique offerte et sans engagement',
    'Conseils orientes conversion, SEO et performance',
    'Vision realiste des delais et de la complexite',
    'Un interlocuteur technique qui parle aussi business',
  ]

  const faqItems = [
    {
      question: 'Combien de temps dure le rendez-vous ?',
      answer:
        "La session dure en moyenne 30 a 45 minutes, selon la complexite de votre besoin. L'objectif est de repartir avec des decisions claires.",
    },
    {
      question: 'Le rendez-vous est-il gratuit ?',
      answer:
        "Oui, cette premiere consultation est offerte. Elle nous permet de comprendre votre contexte et de vous orienter vers la meilleure strategie.",
    },
    {
      question: 'Comment se deroule le rendez-vous ?',
      answer:
        "Apres reservation, vous recevez automatiquement un lien de visioconference. Nous analysons vos objectifs et construisons un plan d'action adapte.",
    },
    {
      question: 'Puis-je modifier ou annuler ma reservation ?',
      answer:
        'Oui, le lien de confirmation recu par email permet de deplacer ou annuler facilement votre creneau.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#C2542D]/20" />
          <div className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-[#C2542D]/20" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-[#2E2B28]/10 bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#2E2B28] backdrop-blur">
              Appel de consultation
            </span>
            <h1 className="mt-6 font-sofia-bold text-4xl leading-tight text-[#2E2B28] sm:text-5xl lg:text-6xl">
              Reservez un rendez-vous strategique pour votre site web
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#243b5a] sm:text-xl">
              En un seul echange, nous clarifions vos objectifs, le bon perimetre fonctionnel et la meilleure
              approche pour livrer un site performant, moderne et pense pour convertir.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="#booking-widget" className="btn-primary inline-flex items-center gap-3">
                Planifier mon appel
                <FaChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#2E2B28]/15 bg-white/80 px-6 py-3 font-sofia-bold text-[#2E2B28] transition-smooth hover:border-[#2E2B28]/35 hover:bg-white"
              >
                Me contacter
                <FaEnvelope className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#2E2B28]/10 bg-white/85 p-6 shadow-[0_20px_60px_rgba(35,33,31,0.12)] backdrop-blur">
              <h2 className="font-sofia-bold text-2xl text-[#2E2B28]">Pourquoi prendre ce rendez-vous ?</h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#233a5a]">
                    <span className="mt-0.5 rounded-full bg-[#C2542D]/50 p-1.5 text-white">
                      <FaCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-[#C2542D]/20 bg-[#C2542D]/10 p-4">
                <p className="text-sm text-[#11406a]">
                  Chaque creneau est prepare avec soin pour vous donner des recommandations actionnables des le
                  premier echange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking-widget" className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="rounded-3xl border border-[#2E2B28]/10 bg-white p-7 shadow-[0_20px_60px_rgba(35,33,31,0.10)] lg:col-span-5 lg:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#C2542D]/45 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                <FaBolt className="h-3 w-3" />
                Processus simple
              </div>
              <h2 className="mt-4 font-sofia-bold text-3xl leading-tight text-[#2E2B28]">
                Comment se passe l'appel ?
              </h2>

              <div className="mt-8 space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <article key={step.title} className="rounded-2xl border border-[#2E2B28]/8 bg-[#f8fbff] p-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-white p-2 text-[#C2542D] shadow-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#C2542D]">
                            Etape {index + 1}
                          </p>
                          <h3 className="mt-1 font-sofia-bold text-lg text-[#2E2B28]">{step.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#2b4262]">{step.description}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="mt-7 rounded-2xl border border-[#2E2B28]/10 bg-white p-4">
                <p className="text-sm text-[#30496b]">
                  Si votre projet n'est pas encore totalement defini, ce rendez-vous est justement concu pour vous
                  aider a prioriser les bonnes decisions.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#2E2B28]/10 bg-white shadow-[0_20px_60px_rgba(35,33,31,0.12)] lg:col-span-7">
              <div className="border-b border-[#2E2B28]/8 bg-[#2E2B28] px-6 py-5 text-white">
                <h3 className="flex items-center gap-2 font-sofia-bold text-2xl">
                  <FaHandshake className="h-5 w-5 text-[#C2542D]" />
                  Reservez votre consultation
                </h3>
                <p className="mt-1 text-white/80">
                  Choisissez votre creneau en ligne et recevez la confirmation instantanement.
                </p>
              </div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-[#C2542D]/10" />
          <div className="absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[#C2542D]/15" />
        </div>
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="relative rounded-3xl border border-[#2E2B28]/10 bg-gradient-to-br from-[#f8fbff] via-white to-[#f2f7ff] px-6 py-10 text-center shadow-[0_20px_40px_rgba(35,33,31,0.06)] md:px-10">
            <span className="inline-flex items-center rounded-full border border-[#C2542D]/20 bg-white px-4 py-1.5 text-sm font-semibold text-[#C2542D]">
              Avant l'entretien
            </span>
            <h2 className="mt-4 font-sofia-bold text-3xl text-[#2E2B28] md:text-4xl">
              Ce qu'il faut savoir avant l'entretien
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#385170]">
              Les reponses essentielles pour arriver serein, preparer les bons sujets et tirer un maximum de valeur
              de votre appel.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="group rounded-2xl border border-[#2E2B28]/10 bg-white p-6 shadow-[0_10px_30px_rgba(35,33,31,0.06)] transition-smooth hover:-translate-y-0.5 hover:border-[#C2542D]/35 hover:shadow-[0_18px_40px_rgba(14,165,233,0.16)]"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#C2542D]/10 px-2 text-xs font-bold text-[#C2542D]">
                    {index + 1}
                  </span>
                  <h3 className="font-sofia-bold text-xl text-[#2E2B28]">{item.question}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-[#314968]">{item.answer}</p>
                <div className="mt-4 h-0.5 w-0 rounded bg-[#F8F6F2] transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default RendezVousRefonteContent
