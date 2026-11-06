'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Code2, Cloud, GitPullRequest, GraduationCap, Trophy } from 'lucide-react'
import { achievements, contributions } from '@/data/profile'
import type { Achievement } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

const icons: Record<Achievement['icon'], typeof Code2> = {
  code: Code2,
  cloud: Cloud,
  trophy: Trophy,
  git: GitPullRequest,
  cap: GraduationCap,
  award: Award,
}

export default function AchievementsSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1200px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-7">
        <p className="eyebrow mb-3">05 / Achievements</p>
        <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl xl:text-5xl">
          Moments that moved the work forward.
        </h2>
        <p className="mt-3 max-w-[560px] text-sm text-muted md:text-base">
          Open source stewardship, problem solving streaks, cloud credentials, and hackathon results.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = icons[item.icon]
          return (
            <motion.a
              key={item.title}
              href={item.href ?? undefined}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 p-5 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/45"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(120% 120% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%)',
                }}
              />
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-lg font-semibold text-accent">{item.metric}</span>
              </div>
              <h3 className="mt-4 text-base font-medium tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-2">
                {item.org}
              </p>
              <p className="mt-2.5 text-[13px] leading-6 text-muted">{item.detail}</p>
              {item.href && (
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors duration-300 group-hover:text-accent">
                  View <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              )}
            </motion.a>
          )
        })}
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-lg font-medium tracking-[-0.01em] text-ink">Open source contributions</h3>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] text-muted">{contributions.length} merged</span>
        </div>
        <ul className="flex flex-col divide-y divide-[var(--line)] overflow-hidden rounded-2xl border border-line bg-surface/60">
          {contributions.map((item) => (
            <li key={`${item.owner}-${item.repo}`}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-1 px-5 py-4 transition-colors duration-300 hover:bg-accent-soft sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="flex min-w-0 items-baseline gap-2 sm:w-[38%]">
                  <span className="truncate text-sm font-medium text-ink">{item.repo}</span>
                  <span className="shrink-0 font-mono text-[11px] text-muted">{item.owner}</span>
                </span>
                <span className="flex-1 text-[13px] leading-6 text-muted">{item.summary}</span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-accent-2">
                    {item.ref}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
