'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiences } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ExperienceSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1180px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-8">
        <p className="eyebrow mb-4">03 / Experience</p>
        <h2 className="max-w-[620px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
          Where the work took shape.
        </h2>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted">
          Internships and programs across backend engineering, open source, data science, and mobile
          development.
        </p>
      </header>

      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((item, index) => (
          <motion.li
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: index * 0.05 }}
            className="flex flex-col rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-strong hover:bg-surface"
          >
            <div className="flex items-center gap-2">
              {item.highlight && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
              <span className="text-[11px] tabular-nums text-muted">{item.date}</span>
            </div>

            <h3 className="mt-3 text-[15px] font-medium tracking-[-0.01em] text-ink">
              {item.role}
            </h3>

            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 self-start text-[13px] text-accent-2 underline-offset-4 hover:underline"
              >
                {item.company}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="mt-1 text-[13px] text-muted">{item.company}</span>
            )}

            <p className="mt-3 text-[13px] leading-6 text-muted">{item.detail}</p>

            <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[11px] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
