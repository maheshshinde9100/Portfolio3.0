'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { achievements, contributions } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

const CARD =
  'flex w-full flex-col rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-strong hover:bg-surface'

export default function AchievementsSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1180px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-8">
        <p className="eyebrow mb-4">05 / Achievements</p>
        <h2 className="max-w-[620px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
          Moments that moved the work forward.
        </h2>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted">
          Open source stewardship, problem solving streaks, cloud credentials, and hackathon results.
        </p>
      </header>

      <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: index * 0.04 }}
            className="flex"
          >
            <motion.a
              href={item.href ?? undefined}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noreferrer' : undefined}
              className={`group ${CARD}`}
            >
              <span className="text-xl font-semibold tabular-nums tracking-[-0.02em] text-accent">
                {item.metric}
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.org}
              </span>

              <h3 className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-muted">{item.detail}</p>

              {item.href && (
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[11px] font-medium text-accent-2">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-accent" />
                </span>
              )}
            </motion.a>
          </motion.li>
        ))}
      </ol>

      <div className="mt-12">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">
            Open source contributions
          </h3>
          <span className="text-[11px] text-muted">{contributions.length} merged</span>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {contributions.map((item, index) => (
            <motion.li
              key={`${item.owner}-${item.repo}-${item.ref}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: index * 0.04 }}
              className="flex"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`group ${CARD}`}
              >
                <span className="flex items-baseline gap-2">
                  <span className="text-[13px] font-medium text-ink">{item.repo}</span>
                  <span className="text-[11px] text-muted">{item.owner}</span>
                </span>

                <p className="mt-2 text-[13px] leading-6 text-muted">{item.summary}</p>

                <span className="mt-auto flex items-center gap-2 pt-4">
                  <span className="text-[11px] tabular-nums text-accent-2">{item.ref}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-colors duration-300 group-hover:text-accent" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
