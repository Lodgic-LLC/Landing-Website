'use client'

import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedMetricProps = {
  value: number
  label: string
  suffix?: string
  duration?: number
}

export const AnimatedMetric = ({ value, label, suffix = '', duration = 1.4 }: AnimatedMetricProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, count, value, duration])

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div className="flex items-baseline gap-1">
        <motion.span className="text-3xl md:text-4xl font-bold text-[#001F45] tabular-nums">
          {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl font-bold text-[#001F45]">{suffix}</span>
      </div>
      <span className="mt-1 text-sm text-[#162869]/70">{label}</span>
    </div>
  )
}

type StaticMetricProps = {
  value: string
  label: string
}

export const StaticMetric = ({ value, label }: StaticMetricProps) => (
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-bold text-[#001F45]">{value}</span>
    <span className="mt-1 text-sm text-[#162869]/70">{label}</span>
  </div>
)
