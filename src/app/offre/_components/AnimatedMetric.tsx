'use client'
import { useEffect, useRef } from 'react'

type AnimatedMetricProps = {
  value: number
  label: string
  suffix?: string
  duration?: number
}

export const AnimatedMetric = ({ value, label, suffix = '' }: AnimatedMetricProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-bold text-[#001F45] tabular-nums">
          {value}
        </span>
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
