import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** Soft glow that follows the cursor. Desktop with a fine pointer only; never rendered on touch or for reduced motion. */
export default function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(query.matches && !reduceMotion)
    update()

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 160)
      y.set(event.clientY - 160)
    }

    query.addEventListener('change', update)
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      query.removeEventListener('change', update)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [reduceMotion, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(22_163_74/0.14),rgb(74_222_128/0.06)_40%,transparent_70%)] md:block"
    />
  )
}
