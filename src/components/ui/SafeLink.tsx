import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { isPlaceholder } from '../../data/profile'

interface SafeLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
}

/**
 * Renders a real link for real URLs. For "[ADD ...]" placeholders it renders a
 * disabled element instead, so the page never links to a made-up address.
 */
export default function SafeLink({ href, children, ...rest }: SafeLinkProps) {
  if (isPlaceholder(href)) {
    return (
      <span
        aria-disabled="true"
        title="Add this URL in src/data/profile.ts or src/data/content.ts"
        className={rest.className}
      >
        {children}
      </span>
    )
  }

  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
