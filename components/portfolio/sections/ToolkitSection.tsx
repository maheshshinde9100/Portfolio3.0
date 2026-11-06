'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import ShinyText from '@/components/ShinyText'
import SpotlightCard from '@/components/SpotlightCard'
import { marqueeSkills, toolkit } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ToolkitSection() {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme !== 'light'

  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1200px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <header className="mb-7">
        <p className="eyebrow mb-3">04 / Toolkit</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl xl:text-5xl">
            Tools I reach for. Sharpened by use.
          </h2>
          <ShinyText
            text="hands on"
            color={dark ? '#8f8fa6' : '#61616e'}
            shineColor={dark ? '#ebebf4' : '#121212'}
            speed={3.4}
            className="hidden font-mono text-[11px] sm:block"
          />
        </div>
        <p className="mt-3 max-w-[560px] text-sm text-muted md:text-base">
          A working set across backend services, frontend systems, cloud, and connected hardware.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {toolkit.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
          >
            <SpotlightCard
              theme={dark ? 'dark' : 'light'}
              spotlightColor={dark ? '#9fa3fc' : '#7065f0'}
              intensity={0.14}
              borderGlow={0.6}
              className="!h-full !p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">
                {group.title}
              </p>
              <p className="mt-1 text-xs text-muted">{group.note}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-surface-2/60 px-2 py-1 text-[11px] text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <div className="no-scrollbar mt-7 flex gap-2 overflow-hidden">
        {marqueeSkills.map((skill) => (
          <span
            key={skill}
            className="shrink-0 rounded-lg border border-line bg-surface/60 px-3 py-1.5 font-mono text-[11px] text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
