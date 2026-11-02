import Reveal from './Reveal'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  id: string
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ id, index, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-14 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span className="text-muted">{index}</span> / {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}
