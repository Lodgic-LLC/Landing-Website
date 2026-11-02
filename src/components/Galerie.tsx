'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

export interface Screen {
  src: string
  alt: string
  caption: string
}

interface ProjectGalleryProps {
  screens: Screen[]
  /** Adresse affichée dans la barre du navigateur simulé. */
  url?: string
  /** La première image du premier projet ne doit pas être différée. */
  priority?: boolean
}

/** Capture principale d'un projet, avec des vignettes pour changer de vue. */
export default function Galerie({ screens, url, priority = false }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0)
  const viewport = useRef<HTMLDivElement>(null)
  const screen = screens[current]

  function select(index: number) {
    const element = viewport.current
    if (!element) return
    element.scrollTo({ left: index * element.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  return (
    <figure className="project-gallery">
      <div className="overflow-hidden rounded-lg border border-[#DCE3E6]">
        {url && <p className="border-b border-[#DCE3E6] bg-white px-4 py-2 text-sm text-[#59666E]">{url}</p>}
        {/* A named scrollable region needs keyboard focus; thumbnails remain native buttons. */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
        <div ref={viewport} className="gallery-viewport w-full bg-[#F4F6F7]"
          role="region" aria-label="Captures du projet" tabIndex={0}
          onScroll={event => {
            const element = event.currentTarget
            setCurrent(Math.max(0, Math.min(screens.length - 1, Math.round(element.scrollLeft / element.clientWidth))))
          }}
          onKeyDown={event => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
            event.preventDefault()
            select(event.key === 'Home' ? 0 : event.key === 'End' ? screens.length - 1 : Math.max(0, Math.min(screens.length - 1, current + (event.key === 'ArrowRight' ? 1 : -1))))
          }}>
          {screens.map((item, index) => <div key={item.src} className="gallery-slide relative aspect-[2940/1604]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority && index === 0}
            sizes="(max-width: 1280px) 92vw, 1180px"
            className="object-contain object-top"
          />
          </div>)}
        </div>
        {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
      </div>

      <figcaption aria-live="polite" className="mt-2 text-sm text-[#59666E] font-body">{screen.caption}<span className="gallery-mobile-count">{current + 1} / {screens.length}</span></figcaption>

      {screens.length > 1 && (
        <div className="gallery-thumbnails mt-3 flex flex-wrap gap-2">
          {screens.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => select(i)}
              aria-label={item.caption}
              aria-pressed={i === current}
              className={`relative h-12 w-20 shrink-0 overflow-hidden rounded border transition-colors ${
                i === current
                  ? 'border-[#246B66] ring-1 ring-[#246B66]'
                  : 'border-[#DCE3E6] opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </figure>
  )
}
