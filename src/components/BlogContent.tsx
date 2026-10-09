import Link from 'next/link'
import { evaluate } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import * as runtime from 'react/jsx-runtime'
import type { ReactNode } from 'react'

function Callout({ title, type = 'info', children }: { title?: string; type?: string; children?: ReactNode }) {
  return <aside className="article-note my-8 rounded-lg border-l-4 border-[#246B66] bg-[#EDF4F3] px-5 py-4 text-[#34434A]" aria-label={title ?? type}>
    {title && <p className="mb-2 font-semibold text-[#17232A]">{title}</p>}
    {children}
  </aside>
}

// L'ancien formulaire de téléchargement n'existe plus : son appel à l'action
// mène au contact, sans promettre l'envoi automatique d'une ressource.
function CallToAction({ title, description }: { title?: string; description?: string }) {
  return <aside className="article-cta my-10 rounded-lg border border-[#DCE3E6] bg-[#F4F6F7] p-6">
    <p className="font-heading text-xl text-[#17232A]">{title ?? 'Une question sur votre projet ?'}</p>
    {description && <p className="mt-2 text-base text-[#59666E]">{description}</p>}
    <Link href="/contact" className="btn-primary mt-5">Parler de mon projet <span aria-hidden="true">↗</span></Link>
  </aside>
}

export default async function BlogContent({ content }: { content: string }) {
  const evaluated = await evaluate(content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    useMDXComponents: () => ({ Callout, CallToAction }),
  })
  const Content = evaluated.default

  return <div className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-headings:text-[#17232A] prose-p:leading-relaxed prose-a:text-[#246B66] prose-blockquote:border-[#246B66] prose-li:leading-relaxed prose-img:rounded-lg">
    <Content components={{ Callout, CallToAction }} />
  </div>
}
