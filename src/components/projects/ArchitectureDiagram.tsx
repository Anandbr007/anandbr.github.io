import { motion } from 'framer-motion'

interface ArchitectureDiagramProps {
  steps: string[]
  label: string
}

/**
 * Vertical pipeline showing a project's main components. A light pulse travels
 * down the rail; it is static for reduced-motion users.
 */
export default function ArchitectureDiagram({ steps, label }: ArchitectureDiagramProps) {
  return (
    <figure className="rounded-2xl border border-line bg-surface-2/70 p-5 sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Architecture</span>
        <span className="font-mono text-[11px] text-accent/80">{label}</span>
      </figcaption>

      <ol className="relative space-y-2.5">
        <span aria-hidden="true" className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-accent/50 via-accent-2/40 to-accent-3/50" />
        <motion.span
          aria-hidden="true"
          animate={{ top: ['6%', '94%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[17px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_#22c55e]"
        />

        {steps.map((step, i) => (
          <li key={step} className="relative flex items-center gap-4">
            <span className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-xl border border-line bg-ink font-mono text-[11px] text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 rounded-xl border border-line bg-white/[0.025] px-4 py-2.5 text-sm text-[#d4d9e3] transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.05] hover:text-white">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
