'use client'

import { useId, useState, type ReactNode } from 'react'

/** Collapsed on phones; the same content stays visible in the desktop layout. */
export default function MobileDisclosure({ label, children }: { label: string; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  const id = useId()

  return <div className="mobile-disclosure" data-expanded={expanded}>
    <button type="button" className="mobile-disclosure-toggle" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(value => !value)}>
      {label}<span aria-hidden="true">{expanded ? '−' : '+'}</span>
    </button>
    <div id={id} className="mobile-disclosure-content">{children}</div>
  </div>
}
