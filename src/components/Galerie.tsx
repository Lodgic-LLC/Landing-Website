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
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const screen = screens[current]

  return (
    <figure className="project-gallery">
      <div className="overflow-hidden rounded-lg border border-[#DCE3E6]">
        {url && <p className="border-b border-[#DCE3E6] bg-white px-4 py-2 text-sm text-[#59666E]">{url}</p>}
        <div className="gallery-viewport relative aspect-[2940/1604] w-full bg-[#F4F6F7]" onTouchStart={event => {
          touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null
        }} onTouchCancel={() => { touchStart.current = null }} onTouchEnd={event => {
          const start = touchStart.current
          touchStart.current = null
          if (!start || !event.changedTouches[0]) return
          const dx = event.changedTouches[0].clientX - start.x
          const dy = event.changedTouches[0].clientY - start.y
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            setCurrent(index => (index + (dx < 0 ? 1 : -1) + screens.length) % screens.length)
          }
        }}>
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            priority={priority}
            sizes="(max-width: 1280px) 92vw, 1180px"
            className="gallery-image object-contain object-top"
            key={screen.src}
          />
        </div>
      </div>

      <figcaption aria-live="polite" className="mt-2 text-sm text-[#59666E] font-body">{screen.caption}<span className="gallery-mobile-count">{current + 1} / {screens.length}</span></figcaption>

      {screens.length > 1 && (
        <div className="gallery-thumbnails mt-3 flex flex-wrap gap-2">
          {screens.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={item.caption}
              aria-current={i === current}
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
