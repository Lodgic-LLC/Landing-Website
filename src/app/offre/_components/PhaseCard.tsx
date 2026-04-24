'use client'

import { motion } from 'framer-motion'

type PhaseCardProps = {
  index: number
  number: number
  name: string
  range: string
  description: string
  deliverables: string[]
  color: string
}

export const PhaseCard = ({
  index,
  number,
  name,
  range,
  description,
  deliverables,
  color,
}: PhaseCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-[#001F45]/10 bg-white p-6 md:p-7 transition-smooth hover:border-[#001F45]/20 hover:shadow-soft"
    >
      <div className="flex items-start gap-4 md:gap-5">
        <div
          className={`${color} flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white`}
          aria-hidden
        >
          {String(number).padStart(2, '0')}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-[#001F45]">{name}</h3>
            <span className="text-xs font-medium uppercase tracking-wider text-[#162869]/60">
              {range}
            </span>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-[#162869]/85">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {deliverables.map((item) => (
              <li
                key={item}
                className="inline-flex items-center rounded-full border border-[#001F45]/10 bg-[#f6f7fc] px-3 py-1 text-xs font-medium text-[#162869]/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
