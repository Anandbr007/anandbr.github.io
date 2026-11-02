/**
 * Personal details used across the site.
 *
 * Anything wrapped in "[ADD ...]" is a placeholder. Links with a placeholder
 * are rendered as disabled, so nothing points at a made-up URL.
 */
export const PLACEHOLDER_PREFIX = '[ADD'

export const isPlaceholder = (value: string) => value.startsWith(PLACEHOLDER_PREFIX)

export const profile = {
  name: 'Anand B R',
  title: 'Software Developer | AI & Generative AI Enthusiast',
  shortTitle: 'Software Developer | AI Enthusiast',
  location: 'Trivandrum, Kerala, India',
  company: 'UST',
  experience: 'Approximately 3 years',
  email: 'anandbijumohan2001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anand-b-r-724640172/',
  github: 'https://github.com/Anandbr007',
  // Place the real CV at public/Anand_B_R_CV.pdf (see README).
  resumeUrl: `${import.meta.env.BASE_URL}Anand_B_R_CV.pdf`,
  initials: 'ABR',
} as const

export const emailHref = isPlaceholder(profile.email) ? profile.email : `mailto:${profile.email}`
