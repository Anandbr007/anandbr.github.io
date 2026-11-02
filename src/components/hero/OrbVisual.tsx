import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { PointerEvent } from 'react'
import { Bot, Database, Sparkles } from 'lucide-react'
import ParticleField from './ParticleField'
import ErrorBoundary from '../ui/ErrorBoundary'

const floatingCards = [
  { icon: Bot, label: 'Agent graph', sub: 'LangGraph workflow', className: 'left-0 top-[18%]', delay: 0 },
  { icon: Database, label: 'Vector search', sub: 'Embeddings · RAG', className: 'right-0 top-[52%]', delay: 1.2 },
  { icon: Sparkles, label: 'LLM answer', sub: 'Grounded context', className: 'left-[8%] bottom-[6%]', delay: 2.4 },
]

/** Hero visual: particle network, a tilting orb with orbiting rings, and floating glass cards. */
export default function OrbVisual() {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 })
  const transform = useMotionTemplate`perspective(1100px) rotateX(${springX}deg) rotateY(${springY}deg)`
  const glowShift = useTransform(springX, [-12, 12], ['-6%', '6%'])

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 16)
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 16)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative mx-auto aspect-square w-full max-w-[560px] select-none"
    >
      {/* Ambient glow behind the orb */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowShift }}
        className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(34_197_94/0.22),rgb(74_222_128/0.12)_45%,transparent_70%)] blur-2xl"
      />

      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-line bg-surface/40">
        <ErrorBoundary>
          <ParticleField />
        </ErrorBoundary>
      </div>

      {/* 3D-inspired orb with rings */}
      <motion.div style={{ transform }} className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
        <div className="relative h-[46%] w-[46%]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#bbf7d0_0%,#16a34a_30%,#14532d_70%,#050505_100%)] shadow-[0_0_80px_-10px_rgb(22_163_74/0.7)]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgb(7_8_11/0.6)_100%)]" />

          {/* Tilt (rotateX/rotateY) and spin (rotate) are separate motion properties, so they compose. */}
          <motion.div
            aria-hidden="true"
            style={{ rotateX: 72 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[22%] rounded-full border border-accent/30"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_#22c55e]" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            style={{ rotateX: 64, rotateY: 18 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[34%] rounded-full border border-accent-3/30"
          >
            <span className="absolute bottom-0 right-[12%] h-2 w-2 rounded-full bg-accent-3 shadow-[0_0_12px_#4ade80]" />
          </motion.div>
          <motion.div
            aria-hidden="true"
            style={{ rotateX: 78, rotateY: -12 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[48%] rounded-full border border-accent-2/20"
          />
        </div>
      </motion.div>

      {floatingCards.map(({ icon: Icon, label, sub, className, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 + delay * 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute ${className}`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut' }}
            className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.9)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-accent">
              <Icon size={17} aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-medium text-white">{label}</span>
              <span className="block font-mono text-[11px] text-muted">{sub}</span>
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
