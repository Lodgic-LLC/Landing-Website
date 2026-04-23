'use client'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Combien de temps pour livrer un projet ?',
    answer:
      "Cela dépend de la complexité, mais la majorité des projets sont livrés entre 4 et 12 semaines. On commence par un cadrage rapide pour définir un planning réaliste et honnête, puis on avance par itérations courtes pour que vous voyiez des avancées chaque semaine.",
  },
  {
    question: 'Quel budget pour un projet avec Lodgic ?',
    answer:
      "Une application mobile ou un SaaS sur mesure démarre en général autour de 8 000 €. Pour un site vitrine, c'est plus léger. On s'adapte à votre budget en priorisant les fonctionnalités à fort impact — on n'est pas là pour vendre du superflu.",
  },
  {
    question: 'Comment se passe le processus concrètement ?',
    answer:
      "Premier échange sans engagement (30 min), puis cadrage écrit avec maquettes et planning, développement par sprints d'une à deux semaines avec démos régulières, et enfin mise en ligne + accompagnement post-lancement. Vous êtes impliqué·e à chaque étape.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--color-page)]">
      <div className="container-editorial max-w-3xl">
        <div className="mb-12 md:mb-14 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)] text-[13px] font-medium mb-4">
            Questions fréquentes
          </span>
          <h2 className="display-h2 text-balance">Vous vous demandez probablement…</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`card-std overflow-hidden transition-smooth ${
                  isOpen ? 'border-[var(--color-brand-100)]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] md:text-[17px] font-semibold text-[var(--color-ink)] tracking-tight">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-smooth ${
                      isOpen
                        ? 'bg-[var(--color-brand)] text-white'
                        : 'bg-[var(--color-brand-ink-50)] text-[var(--color-brand-ink)]'
                    }`}
                    aria-hidden
                  >
                    {isOpen ? <FaMinus className="h-3 w-3" /> : <FaPlus className="h-3 w-3" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
