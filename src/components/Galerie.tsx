'use client'

import { useState } from 'react'
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
  const screen = screens[current]

  return (
    <figure>
      <div className="overflow-hidden rounded-lg border border-[#E6E1D8]">
        <div className="flex items-center gap-1.5 border-b border-[#E6E1D8] bg-[#F8F6F2] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
          <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
          <span className="h-2 w-2 rounded-full bg-[#2E2B28]/15" />
          <div className="mx-2 flex-1 truncate rounded bg-white px-3 py-0.5 mono text-[9px] text-[#6B655D]">
            {url}
          </div>
        </div>
        <div className="relative aspect-[2940/1604] w-full bg-[#F8F6F2]">
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 92vw, 45vw"
            className="object-contain object-top"
          />
        </div>
      </div>

      <figcaption className="mt-2 text-xs text-[#6B655D] font-inter">{screen.caption}</figcaption>

      {screens.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {screens.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={item.caption}
              aria-current={i === current}
              className={`relative h-12 w-20 shrink-0 overflow-hidden rounded border transition-colors ${
                i === current
                  ? 'border-[#C2542D] ring-1 ring-[#C2542D]'
                  : 'border-[#E6E1D8] opacity-70 hover:opacity-100'
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
