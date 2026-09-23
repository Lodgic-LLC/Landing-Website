import Link from 'next/link'
import { FaChevronRight, FaHome, FaEnvelope } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#F8F6F2] pt-24 md:pt-36">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-sofia-bold text-8xl leading-none text-[#2E2B28] sm:text-9xl md:text-[10rem]">
          404
        </p>
        <div className="mx-auto mb-8 mt-4 h-1 w-24 bg-[#C2542D]" aria-hidden />

        <h1 className="mb-6 font-sofia-bold text-2xl text-[#2E2B28] sm:text-3xl md:text-4xl">
          Page introuvable
        </h1>
        <p className="mx-auto mb-12 max-w-2xl font-inter text-base leading-relaxed text-[#6B655D] sm:text-lg md:text-xl">
          Cette page n&apos;existe pas ou a été déplacée. Vérifiez l&apos;adresse saisie, ou
          repartez de l&apos;accueil.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-lg bg-[#C2542D] px-7 py-3.5 font-inter font-semibold text-white transition-colors hover:bg-[#A34322] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E2B28] focus-visible:ring-offset-2"
          >
            <FaHome className="mr-2" aria-hidden />
            Retour à l&apos;accueil
            <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-[#2E2B28]/20 bg-white px-7 py-3.5 font-inter font-semibold text-[#2E2B28] transition-colors hover:border-[#2E2B28]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E2B28] focus-visible:ring-offset-2"
          >
            <FaEnvelope className="mr-2" aria-hidden />
            Me contacter
          </Link>
        </div>

        <div className="mt-16 rounded-xl border border-[#E6E1D8] bg-white p-6">
          <p className="font-inter text-sm leading-relaxed text-[#6B655D]">
            Vous cherchez quelque chose de précis ?{' '}
            <Link href="/#services" className="font-semibold text-[#2E2B28] transition-colors hover:text-[#B54A26]">
              Découvrez mes services
            </Link>
            ,{' '}
            <Link href="/realisations" className="font-semibold text-[#2E2B28] transition-colors hover:text-[#B54A26]">
              mes réalisations
            </Link>{' '}
            ou{' '}
            <Link href="/contact" className="font-semibold text-[#2E2B28] transition-colors hover:text-[#B54A26]">
              écrivez-moi directement
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
