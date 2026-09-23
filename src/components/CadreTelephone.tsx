import Image from 'next/image'

/** Une capture d'écran présentée dans un cadre de téléphone. */
export default function CadreTelephone({
  src,
  alt,
  caption = 'Sur téléphone',
  largeur = 220,
}: {
  src: string
  alt: string
  caption?: string
  largeur?: number
}) {
  return (
    <figure className="mx-auto w-full shrink-0" style={{ maxWidth: largeur }}>
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#23211F] bg-[#23211F] shadow-[0_24px_48px_-24px_rgba(35,33,31,0.5)]">
        <div className="relative aspect-[390/844] w-full overflow-hidden rounded-[1.6rem] bg-white">
          <Image src={src} alt={alt} fill sizes={`${largeur}px`} className="object-cover object-top" />
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-[#6B655D] font-inter">{caption}</figcaption>
    </figure>
  )
}
