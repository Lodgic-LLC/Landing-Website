'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'

// Import languages you want to support
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
// Add more languages as needed: import 'prismjs/components/prism-python';

interface CodeBlockHighlighterProps {
    htmlContent: string
}

const CodeBlockHighlighter: React.FC<CodeBlockHighlighterProps> = ({
    htmlContent,
}) => {
    useEffect(() => {
        // Check if Prism is available (it might not be in SSR initial render pass)
        if (typeof window !== 'undefined') {
            Prism.highlightAll()
        }
    }, [htmlContent]) // Re-run highlighting if content changes

    return (
        <div
            className="prose prose-lg lg:prose-xl max-w-none mx-auto
                 prose-headings:scroll-mt-24 prose-headings:text-gray-800 prose-headings:font-semibold
                 prose-p:text-gray-700 prose-p:leading-relaxed
                 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:transition-colors
                 prose-strong:text-gray-800
                 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-1
                 prose-img:rounded-md prose-img:shadow-sm prose-img:border prose-img:border-gray-100
                 /* Removed prose-pre and prose-code styles as Prism theme will handle them */
                 prose-code:before:content-none prose-code:after:content-none /* Keep removing quotes from inline code */
                "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    )
}

export default CodeBlockHighlighter 