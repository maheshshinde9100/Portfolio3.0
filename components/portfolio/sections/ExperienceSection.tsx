'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import BlurText from '@/components/BlurText'
import ShinyText from '@/components/ShinyText'
import { experiences } from '@/data/profile'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ExperienceSection() {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme !== 'light'

  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1100px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <header className="mb-7">
        <p className="eyebrow mb-3">03 / Experience</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl xl:text-5xl">
            Where the work took shape.
          </h2>
          <ShinyText
            text={`${String(experiences.length).padStart(2, '0')} chapters`}
            color={dark ? '#8f8fa6' : '#61616e'}
            shineColor={dark ? '#ebebf4' : '#121212'}
            speed={3.4}
            className="hidden font-mono text-[11px] sm:block"
          />
        </div>
        <div className="mt-3 max-w-[560px]">
          <BlurText
            text="Internships and programs across backend engineering, open source, data science, and mobile development."
            animateBy="words"
            delay={22}
            direction="bottom"
            trigger="load"
            className="text-sm leading-6 text-muted md:text-base"
          />
        </div>
      </header>

      <ol className="relative flex flex-col gap-4">
        <span className="absolute bottom-4 left-[9px] top-4 w-px bg-line" aria-hidden />
        {experiences.map((item, index) => (
          <motion.li
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
            className="relative pl-8"
          >
            <span
              className={cn(
                'absolute left-0 top-6 grid h-[19px] w-[19px] place-items-center rounded-full border bg-bg',
                item.highlight ? 'border-accent' : 'border-accent/45',
              )}
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>

            <div
              className={cn(
                'relative overflow-hidden rounded-2xl border bg-surface/80 px-5 py-4 transition-colors duration-500',
                item.highlight ? 'border-accent/40' : 'border-line hover:border-accent/35',
              )}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-medium tracking-[-0.01em] text-ink">
                  {item.role} <span className="text-muted">at</span>{' '}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent-2 underline-offset-4 hover:underline"
                    >
                      {item.company}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    item.company
                  )}
                </h3>
                <span className="font-mono text-[11px] text-accent">{item.date}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-line px-2 py-0.5 text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
