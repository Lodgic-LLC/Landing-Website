'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type Screen = {
  src: string
  alt: string
  caption: string
}

const PRIMARY = '#0D1B2A'
const PRIMARY_DEEP = '#07111c'
const ACCENT = '#4F9CF9'

export function ScreenshotGallery({ screens }: { screens: Screen[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + screens.length) % screens.length))
  }, [screens.length])

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % screens.length))
  }, [screens.length])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightbox, close, prev, next])

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screens.map((screen, idx) => (
          <button
            key={screen.src}
            type="button"
            onClick={() => setLightbox(idx)}
            className="group relative overflow-hidden rounded-2xl text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F9CF9]"
            style={{ background: `linear-gradient(160deg, ${PRIMARY} 0%, ${PRIMARY_DEEP} 100%)` }}
            aria-label={`Agrandir : ${screen.caption}`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full blur-2xl"
              style={{ backgroundColor: `${ACCENT}25` }}
            />
            <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#001F45] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="relative px-4 py-3 text-center text-sm font-sofia-bold text-white">
              {screen.caption}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal
          aria-label={`Aperçu : ${screens[lightbox].caption}`}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-6"
            aria-label="Image précédente"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screens[lightbox].src}
              alt={screens[lightbox].alt}
              width={1920}
              height={1080}
              className="h-auto max-h-[85vh] w-full object-contain"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
              <p className="text-center text-sm font-sofia-bold text-white">
                {screens[lightbox].caption}
              </p>
              <p className="mt-1 text-center text-xs text-white/50">
                {lightbox + 1} / {screens.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-6"
            aria-label="Image suivante"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === lightbox ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                aria-label={`Aller à l'image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
