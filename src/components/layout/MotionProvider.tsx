'use client'
import { useEffect, useState } from 'react'

/**
 * We removed Framer Motion provider as per the request to remove all animations permanently.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // Directly just render the children without motion
  return <>{children}</>;
}
