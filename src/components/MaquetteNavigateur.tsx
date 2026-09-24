/**
 * Cadre de navigateur simple, utilisé comme illustration sur les pages de service.
 * Neutre volontairement : le contenu réel est montré dans les études de cas.
 */
export default function MaquetteNavigateur() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-[#DCE3E6] bg-white shadow-[0_20px_50px_-20px_rgba(35,33,31,0.25)]">
        <div className="flex items-center gap-1.5 border-b border-[#DCE3E6] bg-[#F4F6F7] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#17232A]/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#17232A]/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#17232A]/15" />
          <div className="mx-3 h-5 flex-1 rounded bg-white" />
        </div>

        <div className="space-y-5 p-6">
          <div className="h-7 w-3/5 rounded bg-[#17232A]/10" />
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-[#17232A]/6" />
            <div className="h-3 w-11/12 rounded bg-[#17232A]/6" />
            <div className="h-3 w-4/5 rounded bg-[#17232A]/6" />
          </div>
          <div className="h-9 w-40 rounded-lg bg-[#246B66]" />

          <div className="grid grid-cols-3 gap-3 pt-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-[#DCE3E6] p-3">
                <div className="h-6 w-6 rounded bg-[#EDF4F3]" />
                <div className="mt-3 h-2.5 w-full rounded bg-[#17232A]/8" />
                <div className="mt-1.5 h-2.5 w-2/3 rounded bg-[#17232A]/6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Téléphone en surimpression : le même site sur mobile */}
      <div className="absolute -bottom-6 -right-2 w-28 overflow-hidden rounded-[1.25rem] border-4 border-[#17232A] bg-white shadow-xl sm:w-32">
        <div className="space-y-2 p-2.5">
          <div className="h-1.5 w-8 rounded bg-[#17232A]/20" />
          <div className="h-12 rounded bg-[#EDF4F3]" />
          <div className="h-1.5 w-full rounded bg-[#17232A]/8" />
          <div className="h-1.5 w-3/4 rounded bg-[#17232A]/8" />
          <div className="h-5 rounded bg-[#246B66]" />
        </div>
      </div>
    </div>
  )
}
