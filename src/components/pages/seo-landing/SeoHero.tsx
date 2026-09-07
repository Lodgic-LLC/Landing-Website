"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import HeroVisual, { type HeroVisualName } from "./HeroVisuals";

interface SeoHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: ReactNode;
  badges: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: HeroVisualName;
}

export default function SeoHero({
  eyebrow,
  title,
  highlight,
  description,
  badges,
  primaryCta = { label: "Demander un devis", href: "/#contact" },
  secondaryCta = { label: "Voir nos réalisations", href: "/#realisations" },
  visual = "devices",
}: SeoHeroProps) {
  return (
    <section className="w-full min-h-screen bg-[#F8F6F2] pt-24 md:pt-36 pb-32 md:pb-44 overflow-hidden relative flex flex-col justify-center">
      {/* Decor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(194,84,45,0.08),transparent_60%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Left column */}
          <div className="lg:col-span-6 xl:col-span-6 pt-10">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#2E2B28]/15 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-inter font-semibold uppercase tracking-wider text-[#2E2B28]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2542D] shadow-[0_0_10px_rgba(194,84,45,0.9)]" />
              {eyebrow}
            </span>

            <h1
              className="font-sofia-bold heading text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.05] mt-6 mb-4 text-[#2E2B28]"
            >
              {title}
            </h1>

            <h2
              className="font-sofia-bold text-[#C2542D] text-2xl sm:text-3xl md:text-4xl mb-6 leading-tight"
            >
              {highlight}
            </h2>

            <div
              className="lead text-lg sm:text-xl max-w-2xl mb-8 text-[#2E2B28]"
            >
              {description}
            </div>

            <ul
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-1.5 border border-[#2E2B28]/10 text-sm font-inter text-[#2E2B28] shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C2542D]" />
                  {badge}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href={primaryCta.href}
                className="btn-primary inline-flex items-center gap-3"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center text-[#2E2B28] font-sofia-bold border border-[#2E2B28]/10 rounded-md px-5 py-3 hover:border-[#2E2B28]/30 hover:bg-[#2E2B28]/5 transition-smooth"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right column - visual */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative h-full min-h-[520px] w-full">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Glow halos */}

              <HeroVisual variant={visual} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
