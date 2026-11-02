# Anand B R — Portfolio

Personal portfolio of **Anand B R**, Software Developer | AI & Generative AI Enthusiast, Trivandrum, Kerala.

Built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide icons. Dark-first design, responsive from phone to desktop, respects `prefers-reduced-motion`.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Name, headline, intro, animated particle network with a 3D-style orb, CTAs and social links |
| About | Professional summary, journey, technical interests, profile card with CV download |
| Skills | Six categories as interactive cards. No proficiency percentages |
| Experience | Vertical timeline for UST (January 2024 – Present) |
| Projects | Three project cards with features, tech tags, architecture pipeline and link placeholders |
| Certifications | Grid of credentials, each with a credential URL placeholder |
| Education | B.Tech CSE, Marian Engineering College, CGPA 7.64 |
| Currently Exploring | Animated topic cards. No completion percentages |
| Contact | Working contact form (Formspree-compatible) plus contact details |

## Quick start

Requirements: Node.js 20.19+ (or 22+) and npm.

```bash
npm install
npm run dev
```

Open the URL that Vite prints (usually http://localhost:5173).

**Windows PowerShell:** if you see `running scripts is disabled on this system`, Windows is blocking `npm.ps1`. Use `npm.cmd` instead, which runs the same commands:

```bash
npm.cmd install
npm.cmd run dev
```

Or run the commands from Command Prompt (`cmd`), where the block does not apply.

Other scripts:

```bash
npm run build     # type-check, then production build into dist/
npm run preview   # serve the production build locally
npm run typecheck # TypeScript only
```

## Before you publish: fill in your details

Everything personal lives in two files. Anything still set to a `[ADD ...]` value is shown as a disabled link, so nothing points at a made-up address.

1. **`src/data/profile.ts`**: email, LinkedIn URL, GitHub URL, resume path.
2. **`src/data/content.ts`**: each project's `githubUrl` and `demoUrl`, and each certification's `credentialUrl`.
3. **`index.html`**: replace the `[ADD YOUR SITE URL]` placeholders in the canonical and Open Graph tags.

### Assets to add (in `public/`)

| File | Purpose |
| --- | --- |
| `Anand_B_R_CV.pdf` | The file behind every "Download Resume" and "Download CV" button |
| `og-image.png` | 1200×630 social preview image (Open Graph and Twitter cards) |
| `favicon.svg` | Current placeholder "ABR" icon. Replace it if you like |

Until `Anand_B_R_CV.pdf` exists, the download buttons return a 404.

## Contact form setup

The form posts JSON to an endpoint you control. The site does not fake a success message. It only shows "Message sent" after the endpoint returns a successful response. Without an endpoint, the form stays disabled and shows a setup notice.

The example below uses [Formspree](https://formspree.io):

1. Create a free form at formspree.io and copy its endpoint (for example `https://formspree.io/f/abcd1234`). Formspree sends the submissions to the email address you register with it.
2. Create `.env.local` in the project root:

   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

3. Restart `npm run dev`. For production, add the same variable to your hosting provider's environment settings and rebuild.

Any service that accepts a JSON `POST` and returns a 2xx response will work. Spam protection is a hidden honeypot field. Add reCAPTCHA or Turnstile if you need stronger protection.

## Deployment

The output of `npm run build` is a static site in `dist/`.

**Vercel or Netlify (recommended)**

- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_FORMSPREE_ENDPOINT` under Environment Variables.

**GitHub Pages**

Set `base` in `vite.config.ts` to `'/<repository-name>/'`, then run `npm run build` and publish `dist/` (for example with the `gh-pages` package or a GitHub Actions workflow).

Remember to update the canonical and Open Graph URLs in `index.html` after you deploy.

## Project structure

```
src/
├── App.tsx                  # Page composition, MotionConfig (reduced motion)
├── index.css                # Theme tokens, glass / spotlight utilities
├── data/
│   ├── profile.ts           # Personal details and placeholder helpers
│   └── content.ts           # Skills, experience, projects, certifications, etc.
├── components/
│   ├── Navbar.tsx           # Sticky nav, animated active indicator, mobile menu
│   ├── Hero.tsx / hero/     # Hero text, particle canvas, orb visual
│   ├── About.tsx, Skills.tsx, Experience.tsx, Projects.tsx, …
│   ├── projects/            # ProjectCard, ArchitectureDiagram
│   └── ui/                  # Reveal, Magnetic, SpotlightCard, CursorGlow, SafeLink, ErrorBoundary
└── lib/utils.ts
```

## Accessibility and performance

- Semantic landmarks and headings, a skip link, and visible focus rings.
- Keyboard-operable navigation, with Escape closing the mobile menu.
- Reduced motion: Framer Motion uses `MotionConfig reducedMotion="user"`, and CSS animations are shortened under `prefers-reduced-motion`. The particle field renders a still frame.
- Cursor glow and magnetic buttons are enabled for mouse input on fine pointers only.
- The particle canvas pauses when it leaves the viewport or the tab is hidden, and caps particle count and device pixel ratio.
- SEO: title and description, Open Graph and Twitter tags, JSON-LD `Person` schema.

## Content notes

- Skills are grouped by area. They are not rated, because the page does not claim proficiency levels.
- Experience bullets come directly from the role description. No metrics or leadership claims are added.
- Architecture diagrams on project cards are conceptual overviews of each system's components.
