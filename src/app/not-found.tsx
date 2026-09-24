import Link from 'next/link'
import { FaChevronRight, FaHome, FaEnvelope } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#F4F6F7] pt-24 md:pt-36">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-heading text-8xl leading-none text-[#17232A] sm:text-9xl md:text-[10rem]">
          404
        </p>
        <div className="mx-auto mb-8 mt-4 h-1 w-24 bg-[#246B66]" aria-hidden />

        <h1 className="mb-6 font-heading text-2xl text-[#17232A] sm:text-3xl md:text-4xl">
          Page introuvable
        </h1>
        <p className="mx-auto mb-12 max-w-2xl font-body text-base leading-relaxed text-[#59666E] sm:text-lg md:text-xl">
          Cette page n&apos;existe pas ou a été déplacée. Vérifiez l&apos;adresse saisie, ou
          repartez de l&apos;accueil.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-lg bg-[#246B66] px-7 py-3.5 font-body font-semibold text-white transition-colors hover:bg-[#1C5753] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17232A] focus-visible:ring-offset-2"
          >
            <FaHome className="mr-2" aria-hidden />
            Retour à l&apos;accueil
            <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-[#17232A]/20 bg-white px-7 py-3.5 font-body font-semibold text-[#17232A] transition-colors hover:border-[#17232A]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17232A] focus-visible:ring-offset-2"
          >
            <FaEnvelope className="mr-2" aria-hidden />
            Me contacter
          </Link>
        </div>

        <div className="mt-16 rounded-xl border border-[#DCE3E6] bg-white p-6">
          <p className="font-body text-sm leading-relaxed text-[#59666E]">
            Vous cherchez quelque chose de précis ?{' '}
            <Link href="/#services" className="font-semibold text-[#17232A] transition-colors hover:text-[#246B66]">
              Découvrez mes services
            </Link>
            ,{' '}
            <Link href="/realisations" className="font-semibold text-[#17232A] transition-colors hover:text-[#246B66]">
              mes réalisations
            </Link>{' '}
            ou{' '}
            <Link href="/contact" className="font-semibold text-[#17232A] transition-colors hover:text-[#246B66]">
              écrivez-moi directement
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
