import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal'
import SafeLink from './ui/SafeLink'
import SectionHeading from './ui/SectionHeading'
import Magnetic from './ui/Magnetic'
import { emailHref, isPlaceholder, profile } from '../data/profile'

type Status = 'idle' | 'sending' | 'success' | 'error'

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const endpointReady = Boolean(endpoint && endpoint.startsWith('https://'))

const fieldClass =
  'w-full rounded-xl border border-line bg-surface-2/80 px-4 py-3 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!endpointReady || !endpoint) return

    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: bots tend to fill every field, so silently drop those submissions.
    if (data.get('website')) return

    const subject = String(data.get('subject') ?? '')
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      subject,
      message: String(data.get('message') ?? ''),
      _subject: `Portfolio contact: ${subject}`,
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => null)
        const reason = body?.errors?.map((e: { message: string }) => e.message).join(' ')
        throw new Error(reason || `Request failed with status ${response.status}`)
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: emailHref },
    { icon: Linkedin, label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: profile.github, href: profile.github },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="contact-heading"
            index="08"
            eyebrow="Contact"
            title="Have an interesting idea? Let’s build something meaningful."
            description="Whether it’s an AI project, a role, or a question about my work, send a message and I’ll get back to you."
          />

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const pending = isPlaceholder(value)
                const content = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{label}</span>
                      <span className={pending ? 'block truncate text-sm text-muted' : 'block truncate text-sm text-white'}>{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <SafeLink href={href} className="group flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.045] aria-disabled:cursor-not-allowed">
                        {content}
                      </SafeLink>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="glass relative rounded-3xl p-6 sm:p-8" aria-describedby="form-status">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-muted">Name</span>
                <input name="name" type="text" required autoComplete="name" maxLength={120} placeholder="Your name" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-muted">Email</span>
                <input name="email" type="email" required autoComplete="email" maxLength={200} placeholder="you@example.com" className={fieldClass} />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-medium text-muted">Subject</span>
              <input name="subject" type="text" required maxLength={150} placeholder="What would you like to discuss?" className={fieldClass} />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-medium text-muted">Message</span>
              <textarea name="message" required rows={6} maxLength={5000} placeholder="Tell me a little about what you have in mind." className={`${fieldClass} resize-y`} />
            </label>

            {/* Honeypot field, hidden from people and screen readers. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label>
                Website
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {endpointReady ? (
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-shadow hover:shadow-[0_0_36px_-6px_rgb(34_197_94/0.6)] disabled:cursor-wait disabled:opacity-70"
                  >
                    <Send size={15} aria-hidden="true" />
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                </Magnetic>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-muted"
                >
                  <Send size={15} aria-hidden="true" />
                  Send message
                </button>
              )}

              <p id="form-status" aria-live="polite" className="min-h-5 text-sm">
                <AnimatePresence mode="wait">
                  {!endpointReady && (
                    <motion.span key="unconfigured" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-muted">
                      <AlertTriangle size={15} className="text-accent-3" aria-hidden="true" />
                      Form not connected yet. Set VITE_FORMSPREE_ENDPOINT (see README).
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-accent">
                      <CheckCircle2 size={15} aria-hidden="true" />
                      Message sent. Thank you, I’ll reply soon.
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span key="error" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-300">
                      <AlertTriangle size={15} aria-hidden="true" />
                      Could not send: {errorMessage}
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
