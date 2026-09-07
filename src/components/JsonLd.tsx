/**
 * Données structurées Schema.org (JSON-LD) lues par Google.
 *
 *   <JsonLd data={...} />                    un bloc quelconque
 *   <JsonLd data={filAriane([...])} />       un fil d'Ariane
 *   <JsonLd data={faq([...])} />             une FAQ
 */

type Donnees = Record<string, unknown> | Record<string, unknown>[]

export default function JsonLd({ data, id }: { data: Donnees; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // Le < est échappé pour qu'un contenu ne puisse pas fermer la balise.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

/** Fil d'Ariane : la suite de pages menant à celle-ci. */
export const filAriane = (pages: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: pages.map((page, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: page.name,
    item: page.url,
  })),
})

/** Questions fréquentes, affichables directement dans les résultats Google. */
export const faq = (questions: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
})
