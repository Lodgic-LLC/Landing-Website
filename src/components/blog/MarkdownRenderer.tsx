import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'

import { CallToAction } from '@/components/blog/CallToAction'

interface MarkdownRendererProps {
  content: string
  className?: string
}

const proseClasses = [
  'prose prose-lg max-w-none',
  'font-inter',
  'prose-p:text-[#162869]/90 prose-p:leading-8 prose-p:my-5',
  'prose-headings:font-sofia-bold prose-headings:tracking-tight prose-headings:text-[#000f45]',
  'prose-h2:scroll-mt-28',
].join(' ')

export default async function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const evaluated = await evaluate(content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    development: process.env.NODE_ENV !== 'production',
    useMDXComponents: () => ({ CallToAction }),
  })

  const Content = evaluated.default

  return (
    <div className={`${proseClasses} ${className ?? ''}`.trim()}>
      <Content components={{ CallToAction }} />
    </div>
  )
}
