'use client'

import { motion } from 'framer-motion'
import { PHASES } from './phases'

export { PHASES } from './phases'
export type { Phase } from './phases'

export const Timeline = () => {
  return (
    <div className="w-full">
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-[#f6f7fc] ring-1 ring-[#001F45]/10">
        {PHASES.map((phase, index) => (
          <motion.span
            key={phase.number}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            className={`${phase.color} h-full origin-left`}
            style={{ flex: index === 2 ? 3 : index === 1 ? 1.5 : 1 }}
            aria-hidden
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
        {PHASES.map((phase) => (
          <div key={phase.number} className="flex items-center gap-2">
            <span className={`inline-block h-2 w-2 rounded-full ${phase.color}`} aria-hidden />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-[#001F45]">{phase.name}</span>
              <span className="text-[11px] text-[#162869]/70">{phase.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
