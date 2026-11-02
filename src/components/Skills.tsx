import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { skillGroups } from '../data/content'

const accents = ['text-accent', 'text-accent-2', 'text-accent-3', 'text-accent', 'text-accent-2', 'text-accent-3']

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        id="skills-heading"
        index="02"
        eyebrow="Technical skills"
        title="Tools I work with, grouped by area."
        description="Skills are grouped by area of work and learning. I don’t list proficiency levels, so the tags show what I have used or am studying, not how expert I am in each."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <SpotlightCard className="group h-full p-6 transition-colors duration-500 hover:border-white/15">
                <div className="mb-6 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 ${accents[i]}`}>
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2" aria-label={`${group.title} tags`}>
                  {group.items.map((skill, j) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + j * 0.04 }}
                      whileHover={{ y: -2, borderColor: 'rgb(34 197 94 / 0.5)' }}
                      className="cursor-default rounded-lg border border-line bg-white/[0.03] px-2.5 py-1.5 font-mono text-[12px] text-[#cfd5e0] transition-colors hover:bg-white/[0.07] hover:text-white"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
