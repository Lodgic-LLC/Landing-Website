'use client'

import React, { useEffect } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Prism from 'prismjs'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'

interface MarkdownRendererProps {
  content: string
  className?: string
}

const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

const extractText = (children: React.ReactNode): string => {
  if (children == null || children === false) return ''
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(extractText).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return extractText(children.props.children)
  }
  return ''
}

const components: Components = {
  h2: ({ children }) => {
    const text = extractText(children)
    const id = text ? slugify(text) : undefined
    return <h2 id={id}>{children}</h2>
  },

  a: ({ href, children }) => {
    const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  },

  code: ({ className, children, ...props }) => {
    const isBlock = typeof className === 'string' && /language-/.test(className)
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    return <code {...props}>{children}</code>
  },

  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === 'string' ? src : undefined}
      alt={alt ?? ''}
      loading="lazy"
      className="block w-full h-auto mx-auto my-8 rounded-xl border border-gray-200 shadow-sm"
    />
  ),
}

const proseClasses = [
  'prose prose-lg max-w-none',
  'font-inter',

  // Body
  'prose-p:text-[#162869]/90 prose-p:leading-8 prose-p:my-5',

  // Headings
  'prose-headings:font-bricolage-grotesque-bold prose-headings:tracking-tight prose-headings:text-[#000f45]',
  'prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-10',
  'prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 prose-h2:scroll-mt-28',
  'prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-[#001F45] prose-h3:mt-10 prose-h3:mb-3 prose-h3:font-bricolage-grotesque-semibold',
  'prose-h4:text-lg md:prose-h4:text-xl prose-h4:text-[#001F45] prose-h4:mt-8 prose-h4:mb-2',

  // Links
  'prose-a:text-[#001F45] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:decoration-2 prose-a:decoration-[#DBFF00] prose-a:underline-offset-4 hover:prose-a:decoration-[#001F45] prose-a:transition-colors',

  // Emphasis
  'prose-strong:text-[#001F45] prose-strong:font-semibold',
  'prose-em:text-[#162869]',

  // Lists
  'prose-ul:my-5 prose-ul:pl-6 prose-ol:my-5 prose-ol:pl-6',
  'prose-li:my-1.5 prose-li:leading-8 prose-li:text-[#162869]/90',
  'marker:text-[#001F45]',

  // Blockquote
  'prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-[#DBFF00] prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:text-[#162869]/85 prose-blockquote:font-normal',
  'prose-blockquote:before:content-none prose-blockquote:after:content-none',

  // Inline code
  'prose-code:bg-gray-100 prose-code:text-[#001F45] prose-code:border prose-code:border-gray-200 prose-code:font-mono prose-code:text-[0.9em] prose-code:font-normal prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
  'prose-code:before:content-none prose-code:after:content-none',

  // Code block
  'prose-pre:bg-[#0f1b42] prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-7 prose-pre:overflow-x-auto prose-pre:text-sm prose-pre:leading-relaxed prose-pre:shadow-sm prose-pre:border prose-pre:border-[#001F45]/40',

  // Images
  'prose-img:rounded-xl prose-img:shadow-sm prose-img:border prose-img:border-gray-200 prose-img:my-8 prose-img:mx-auto',

  // HR
  'prose-hr:my-12 prose-hr:border-t prose-hr:border-gray-200',

  // Tables
  'prose-table:my-7 prose-table:overflow-hidden prose-table:rounded-lg prose-table:border prose-table:border-gray-200',
  'prose-thead:bg-gray-50 prose-thead:text-[#001F45]',
  'prose-th:py-3 prose-th:px-4 prose-th:font-semibold prose-th:text-left',
  'prose-td:py-3 prose-td:px-4 prose-td:border-t prose-td:border-gray-100 prose-td:align-top',

  // First paragraph as lead
  'prose-p:first-of-type:text-[17px] md:prose-p:first-of-type:text-lg prose-p:first-of-type:text-[#162869] prose-p:first-of-type:leading-8',
].join(' ')

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [content])

  return (
    <div className={`${proseClasses} ${className ?? ''}`.trim()}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
