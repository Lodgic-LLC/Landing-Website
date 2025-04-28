'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const tocRef = useRef<HTMLDivElement>(null) // Ref for the TOC container

  // --- Smooth Scrolling ---
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Calculate offset for fixed header (adjust '100' as needed)
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      // Optionally update URL hash without jumping
      // history.pushState(null, '', `#${id}`);
      // Temporarily set active state on click for immediate feedback
      setActiveId(id)
    }
  }

  // --- Intersection Observer for Active State ---
  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect()
    }

    // Options for the observer (which part of the viewport to consider)
    // rootMargin negative top margin means the heading needs to be below the sticky header
    const observerOptions = {
      rootMargin: '-100px 0px -50% 0px', // Adjust top margin based on header height
      threshold: 1.0, // Trigger when 100% visible
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe each heading element
    const headingElements = document.querySelectorAll(headings.map((h) => `#${h.id}`).join(', '))
    headingElements.forEach((el) => {
      if (el) {
        observer.current?.observe(el)
      }
    })

    // Cleanup function
    return () => {
      observer.current?.disconnect()
    }
  }, [headings]) // Re-run observer setup if headings change

  // --- Scroll TOC into view if active item is outside --- (Optional but good UX)
  useEffect(() => {
    if (activeId && tocRef.current) {
      const activeLink = tocRef.current.querySelector(`a[href="#${activeId}"]`) as HTMLAnchorElement
      if (activeLink) {
        // Basic check: if link is outside the visible TOC area, scroll it into view
        // This is a simplified check, more robust logic might be needed
        const tocRect = tocRef.current.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()

        if (linkRect.top < tocRect.top || linkRect.bottom > tocRect.bottom) {
          activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      }
    }
  }, [activeId])

  if (!headings || headings.length === 0) {
    return null // Don't render if no headings found
  }

  return (
    <div ref={tocRef} className="overflow-y-auto pr-4" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
      {' '}
      {/* Allow scrolling within TOC */}
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleLinkClick(e, heading.id)}
              className={`block transition-colors duration-200 hover:text-blue-600 ${activeId === heading.id
                ? 'text-blue-600 font-medium' // Active state style
                : 'text-gray-500' // Default state style
                }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
