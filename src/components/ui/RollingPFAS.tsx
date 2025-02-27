'use client'

import { RollingText } from './RollingText'
import { pfasAcronyms } from '@/data/pfas'

interface RollingPFASProps {
  className?: string
  duration?: number  // Total duration in seconds
}

export function RollingPFAS({ 
  className = "",
  duration = 10  // 10 seconds total duration
}: RollingPFASProps) {
  return (
    <div className={className}>
      <RollingText 
        words={pfasAcronyms}
        duration={duration}
        className="font-mono text-lg font-bold"
      />
    </div>
  )
} 