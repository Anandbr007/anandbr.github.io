import { useRef, type PointerEvent, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

/** Glass card with a soft highlight that tracks the pointer. Updates CSS variables only, so it never re-renders React. */
export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!ref.current || event.pointerType !== 'mouse') return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    ref.current.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={cn('spotlight glass rounded-2xl', className)}>
      {children}
    </div>
  )
}
