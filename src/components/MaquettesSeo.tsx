/**
 * Maquettes décoratives des pages d'atterrissage.
 * Chaque page SEO en choisit une via la propriété `visual` de SeoHero.
 */

export type HeroVisualName =
  | "devices"
  | "platforms"
  | "react-native"
  | "tailored"
  | "agency";

export default function HeroVisual({ variant }: { variant: HeroVisualName }) {
  if (variant === "platforms") return <PlatformsVisual />;
  if (variant === "react-native") return <ReactNativeVisual />;
  if (variant === "tailored") return <TailoredVisual />;
  if (variant === "agency") return <AgencyVisual />;
  return <DevicesVisual />;
}

/* ----- VISUALS ----- */

const phoneFrame =
  "rounded-[36px] border-[3px] border-[#2E2B28] bg-white shadow-[0_30px_80px_-20px_rgba(35,33,31,0.35)] overflow-hidden";

function DevicesVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone */}
      <div
        className="absolute z-30 w-[210px] h-[420px]"
      >
        <div className={`${phoneFrame} h-full p-3`}>
          <div className="h-full rounded-[24px] bg-[#F8F6F2] p-3 flex flex-col">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-[#2E2B28]/40" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-16 rounded bg-[#2E2B28]/80" />
                <div className="mt-1.5 h-1.5 w-12 rounded bg-[#2E2B28]/30" />
              </div>
              <div className="h-7 w-7 rounded-full bg-[#2E2B28]" />
            </div>
            <div className="mt-4 rounded-2xl bg-[#2E2B28] p-3 text-white">
              <div className="h-1.5 w-10 rounded bg-white/40" />
              <div className="mt-2 h-3 w-20 rounded bg-white" />
              <div className="mt-1 h-1.5 w-14 rounded bg-white/30" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-xl bg-[#C2542D]/15" />
              <div className="h-14 rounded-xl bg-[#C2542D]/60" />
              <div className="h-14 rounded-xl bg-[#2E2B28]/10" />
              <div className="h-14 rounded-xl bg-[#2E2B28]/10" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded bg-[#2E2B28]/15" />
              <div className="h-2 w-3/4 rounded bg-[#2E2B28]/15" />
            </div>
            <div className="mt-auto flex justify-center gap-2 pb-2">
              <div className="h-1.5 w-6 rounded-full bg-[#2E2B28]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#2E2B28]/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#2E2B28]/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div
        className="absolute z-40 left-[-2%] top-[8%] rounded-2xl bg-white shadow-xl border border-[#2E2B28]/10 px-4 py-3 flex items-center gap-3"
      >
        <span className="h-9 w-9 rounded-xl bg-[#C2542D] flex items-center justify-center text-white font-sofia-bold">
          +1
        </span>
        <div>
          <div className="text-xs font-inter text-[#2E2B28]/60">
            Notifications
          </div>
          <div className="text-sm font-sofia-bold text-[#2E2B28]">
            Nouvel utilisateur
          </div>
        </div>
      </div>

      <div
        className="absolute z-40 right-[-4%] top-[18%] rounded-2xl bg-[#2E2B28] text-white shadow-xl px-4 py-3"
      >
        <div className="text-[10px] uppercase tracking-wider font-inter text-white/60">
          Performance
        </div>
        <div className="mt-1 text-2xl font-sofia-bold">
          98<span className="text-[#C2542D]">/100</span>
        </div>
      </div>

      <div
        className="absolute z-40 right-[-2%] bottom-[10%] rounded-2xl bg-white shadow-xl border border-[#2E2B28]/10 px-4 py-3 max-w-[180px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] uppercase tracking-wider font-inter text-[#2E2B28]/60">
            Live
          </span>
        </div>
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 50, 80, 55, 95, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-[#C2542D]"
              style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }}
            />
          ))}
        </div>
      </div>

      {/* Tablet behind */}
      <div
        className="absolute z-10 right-[6%] bottom-[2%] w-[260px] h-[180px] rounded-2xl border-[3px] border-[#2E2B28] bg-white shadow-xl rotate-[8deg] overflow-hidden p-3"
      >
        <div className="h-full rounded-xl bg-[#F8F6F2] p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E2B28]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E2B28]/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E2B28]/30" />
          </div>
          <div className="mt-2.5 h-2 w-20 rounded bg-[#2E2B28]" />
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            <div className="h-10 rounded bg-white border border-[#2E2B28]/10" />
            <div className="h-10 rounded bg-[#C2542D]/15" />
            <div className="h-10 rounded bg-white border border-[#2E2B28]/10" />
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded bg-[#2E2B28]/10" />
          <div className="mt-1 h-1.5 w-2/3 rounded bg-[#2E2B28]/10" />
        </div>
      </div>
    </div>
  );
}

function PlatformsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* iOS phone */}
      <div
        className="absolute z-20 left-[8%] top-[6%] w-[200px] h-[400px]"
      >
        <div className={`${phoneFrame} h-full p-3 relative`}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-[#2E2B28]" />
          <div className="h-full rounded-[24px] bg-[#F8F6F2] p-3 pt-7">
            <div className="text-[9px] font-inter font-bold text-[#2E2B28]/40 uppercase tracking-widest">
              iOS · Swift
            </div>
            <div className="mt-2 h-3 w-24 rounded bg-[#2E2B28]" />
            <div className="mt-1.5 h-1.5 w-16 rounded bg-[#2E2B28]/30" />
            <div className="mt-3 rounded-2xl bg-[#2E2B28] p-3">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1.5 h-2.5 w-16 rounded bg-white" />
              <div className="mt-3 flex justify-between">
                <div className="h-6 w-6 rounded-md bg-[#C2542D]" />
                <div className="h-6 w-6 rounded-md bg-white/20" />
                <div className="h-6 w-6 rounded-md bg-white/20" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg border border-[#2E2B28]/10 p-2">
                <div className="h-1.5 w-12 rounded bg-[#2E2B28]/60" />
                <div className="mt-1 h-1 w-20 rounded bg-[#2E2B28]/20" />
              </div>
              <div className="rounded-lg border border-[#2E2B28]/10 p-2">
                <div className="h-1.5 w-14 rounded bg-[#2E2B28]/60" />
                <div className="mt-1 h-1 w-16 rounded bg-[#2E2B28]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Android phone */}
      <div
        className="absolute z-30 right-[6%] top-[10%] w-[200px] h-[400px]"
      >
        <div className={`${phoneFrame} h-full p-3 relative`}>
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#2E2B28]" />
          <div className="h-full rounded-[24px] bg-[#F8F6F2] p-3 pt-6">
            <div className="text-[9px] font-inter font-bold text-emerald-700/70 uppercase tracking-widest">
              Android · Kotlin
            </div>
            <div className="mt-2 h-3 w-28 rounded bg-[#2E2B28]" />
            <div className="mt-1.5 h-1.5 w-20 rounded bg-[#2E2B28]/30" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-emerald-500/15 border border-emerald-500/20"
                />
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-[#2E2B28] p-3 text-white">
              <div className="text-[8px] uppercase tracking-wider opacity-60">
                Material You
              </div>
              <div className="mt-1 h-2 w-20 rounded bg-white" />
              <div className="mt-2 flex gap-1">
                <span className="h-1.5 flex-1 rounded bg-emerald-400" />
                <span className="h-1.5 flex-1 rounded bg-white/20" />
                <span className="h-1.5 flex-1 rounded bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute z-40 left-1/2 -translate-x-1/2 top-[2%] rounded-full bg-white shadow-xl border border-[#2E2B28]/10 px-4 py-2 flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-[#C2542D] shadow-[0_0_10px_rgba(194,84,45,0.9)]" />
        <span className="text-xs font-sofia-bold text-[#2E2B28]">
          iOS &amp; Android natifs
        </span>
      </div>

      {/* Connecting line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 110 220 Q 200 280 290 220"
          stroke="#C2542D"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

function ReactNativeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center atom logo */}
      <div
        className="absolute z-30"
      >
        <svg width="200" height="200" viewBox="-12 -12 24 24" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#C2542D" />
          <g stroke="#C2542D" strokeWidth="0.7" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
          <g>
            <circle cx="11" cy="0" r="0.8" fill="#C2542D" />
          </g>
        </svg>
      </div>

      {/* Phone left */}
      <div
        className="absolute z-20 left-[2%] bottom-[8%] w-[170px] h-[340px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#eaf0ff] to-white p-2.5">
            <div className="text-[9px] font-mono text-[#2E2B28]/50">
              {"<App />"}
            </div>
            <div className="mt-2 rounded-xl bg-[#2E2B28] p-2.5">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1 h-2 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#2E2B28]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#2E2B28]/15" />
              <div className="h-1.5 w-3/4 rounded bg-[#2E2B28]/15" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-[#C2542D]/15" />
              <div className="h-10 rounded bg-[#C2542D]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Phone right */}
      <div
        className="absolute z-20 right-[2%] bottom-[8%] w-[170px] h-[340px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#dffde8] to-white p-2.5">
            <div className="text-[9px] font-mono text-emerald-700/60">
              {"export default"}
            </div>
            <div className="mt-2 rounded-xl bg-emerald-600 p-2.5">
              <div className="h-1.5 w-10 rounded bg-white/30" />
              <div className="mt-1 h-2 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#2E2B28]/15" />
              <div className="h-1.5 w-3/4 rounded bg-[#2E2B28]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#2E2B28]/15" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-emerald-500/15" />
              <div className="h-10 rounded bg-[#C2542D]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Code snippet badge */}
      <div
        className="absolute z-40 top-[2%] left-1/2 -translate-x-1/2 rounded-xl bg-[#2E2B28] text-white px-4 py-2 shadow-xl font-mono text-xs"
      >
        <span className="text-[#C2542D]">const</span> app ={" "}
        <span className="text-[#C2542D]">React Native</span>
      </div>
    </div>
  );
}

function TailoredVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Blueprint sheet */}
      <div
        className="absolute z-10 w-[420px] h-[420px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-full h-full rounded-2xl bg-[#2E2B28] p-6 shadow-2xl relative overflow-hidden">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <div className="text-[10px] font-mono text-[#C2542D]/70 tracking-wider">
              PROJET-MOBILE / V1.0
            </div>
            <div className="mt-3 h-[2px] w-20 bg-[#C2542D]" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="rounded border border-white/20 bg-white/5 p-2"
                >
                  <div className="h-1.5 w-8 rounded bg-white/30" />
                  <div className="mt-2 h-12 rounded bg-white/10" />
                  <div className="mt-1.5 h-1 w-10 rounded bg-white/20" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <div className="rounded border border-[#C2542D]/40 bg-[#C2542D]/10 px-2 py-1 text-[10px] font-mono text-[#C2542D]">
                CADRAGE
              </div>
              <div className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-mono text-white/60">
                DESIGN
              </div>
              <div className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-mono text-white/60">
                BUILD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone overlay */}
      <div
        className="absolute z-30 right-[8%] bottom-[6%] w-[180px] h-[360px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-white p-2.5 flex flex-col">
            <div className="mx-auto h-1 w-10 rounded-full bg-[#2E2B28]/40" />
            <div className="mt-3 rounded-xl bg-gradient-to-br from-[#C2542D]/40 to-[#C2542D]/30 h-32 p-2 flex flex-col justify-between">
              <div className="text-[9px] font-sofia-bold text-[#2E2B28]">
                SUR MESURE
              </div>
              <div className="h-2 w-16 rounded bg-[#2E2B28]" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#2E2B28]/15" />
              <div className="h-1.5 w-2/3 rounded bg-[#2E2B28]/15" />
            </div>
            <div className="mt-auto rounded-xl bg-[#2E2B28] py-2 text-center text-[10px] font-sofia-bold text-white">
              Lancer
            </div>
          </div>
        </div>
      </div>

      {/* Floating measurement */}
      <div
        className="absolute z-40 top-[8%] left-[4%] rounded-lg bg-white shadow-xl border border-[#2E2B28]/10 px-3 py-2"
      >
        <div className="text-[9px] uppercase font-inter text-[#2E2B28]/50 tracking-wider">
          Sur mesure
        </div>
        <div className="text-sm font-sofia-bold text-[#2E2B28]">
          100% personnalisé
        </div>
      </div>
    </div>
  );
}

function AgencyVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Laptop / browser */}
      <div
        className="absolute z-20 left-1/2 -translate-x-1/2 top-[14%] w-[440px]"
      >
        <div className="rounded-2xl border-[3px] border-[#2E2B28] bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F8F6F2] border-b border-[#2E2B28]/10">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 h-2.5 w-40 rounded bg-white ring-1 ring-[#2E2B28]/10" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-32 rounded bg-[#2E2B28]" />
                <div className="mt-1.5 h-2 w-24 rounded bg-[#2E2B28]/30" />
              </div>
              <div className="h-8 w-24 rounded-md bg-[#2E2B28]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#2E2B28]/10 p-2.5"
                >
                  <div className="h-2 w-12 rounded bg-[#C2542D]" />
                  <div className="mt-1.5 h-3 w-10 rounded bg-[#2E2B28]" />
                  <div className="mt-1 h-1.5 w-14 rounded bg-[#2E2B28]/20" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-[#2E2B28]/10 p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C2542D]" />
                <div className="h-2 w-32 rounded bg-[#2E2B28]/30" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C2542D]" />
                <div className="h-2 w-24 rounded bg-[#2E2B28]/30" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <div className="h-2 w-28 rounded bg-[#2E2B28]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone overlay */}
      <div
        className="absolute z-30 right-[2%] bottom-[4%] w-[170px] h-[330px]"
      >
        <div className={`${phoneFrame} h-full p-2.5`}>
          <div className="h-full rounded-[22px] bg-gradient-to-b from-[#eaf0ff] to-white p-2.5">
            <div className="mx-auto h-1 w-10 rounded-full bg-[#2E2B28]/40" />
            <div className="mt-3 h-2 w-16 rounded bg-[#2E2B28]" />
            <div className="mt-1 h-1.5 w-12 rounded bg-[#2E2B28]/30" />
            <div className="mt-3 rounded-xl bg-[#2E2B28] p-2.5">
              <div className="h-1.5 w-8 rounded bg-white/30" />
              <div className="mt-1.5 h-2.5 w-14 rounded bg-white" />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="h-10 rounded bg-[#C2542D]/15" />
              <div className="h-10 rounded bg-[#C2542D]/50" />
              <div className="h-10 rounded bg-[#2E2B28]/10" />
              <div className="h-10 rounded bg-[#2E2B28]/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Stat badges */}
      <div
        className="absolute z-40 left-[2%] top-[6%] rounded-2xl bg-white shadow-xl border border-[#2E2B28]/10 px-3 py-2"
      >
        <div className="text-[10px] uppercase font-inter font-semibold text-[#6B655D] tracking-wider">
          Web
        </div>
        <div className="text-sm font-sofia-bold text-[#2E2B28]">
          Next.js + Prisma
        </div>
      </div>

      <div
        className="absolute z-40 left-[4%] bottom-[10%] rounded-2xl bg-[#2E2B28] text-white shadow-xl px-3 py-2"
      >
        <div className="text-[10px] uppercase font-inter font-semibold text-white/75 tracking-wider">
          Mobile
        </div>
        <div className="text-sm font-sofia-bold">React Native + Expo</div>
      </div>
    </div>
  );
}
