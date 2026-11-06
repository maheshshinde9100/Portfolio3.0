'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy } from 'lucide-react'
import { allProjects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { ProjectCategory } from '@/types/project'

const EASE = [0.22, 1, 0.36, 1] as const

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'client', label: 'Client' },
  { id: 'open-source', label: 'Open source' },
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'personal', label: 'Personal' },
]

const categoryLabel: Record<ProjectCategory, string> = {
  client: 'Client delivery',
  'open-source': 'Open source',
  hackathon: 'Hackathon',
  personal: 'Personal build',
}

export default function WorkSection() {
  const [filter, setFilter] = useState<Filter>('all')

  const projects = useMemo(() => {
    const sorted = [...allProjects].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    const seen = new Set<string>()
    return sorted.filter((project) => {
      const key = project.title.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [])

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      all: projects.length,
      client: 0,
      'open-source': 0,
      hackathon: 0,
      personal: 0,
    }
    projects.forEach((project) => {
      base[project.category] += 1
    })
    return base
  }, [projects])

  const shown = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">02 / Work</p>
          <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl xl:text-5xl">
            Built to solve. Designed to last.
          </h2>
          <p className="mt-3 max-w-[560px] text-sm text-muted md:text-base">
            Client deliveries, developer tools, open source packages, and hackathon builds across the
            stack.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-3xl font-semibold text-accent">
            {String(projects.length).padStart(2, '0')}
          </p>
          <p className="text-xs text-muted">projects shipped</p>
        </div>
      </header>

      <div className="sticky top-0 z-10 mb-6 -mx-6 flex flex-wrap items-center gap-2 bg-bg/80 px-6 py-2 backdrop-blur-md md:-mx-10 md:px-10">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              'relative rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              filter === item.id
                ? 'border-accent/50 bg-accent-soft text-ink'
                : 'border-line text-muted hover:border-accent/40 hover:text-ink',
            )}
          >
            {item.label}
            <span className="ml-1.5 font-mono text-[10px] text-muted">{counts[item.id]}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((project, index) => {
          const href = project.demo || project.github || ''
          const external = href.length > 0
          return (
            <motion.a
              key={project.id}
              href={external ? href : undefined}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: Math.min(index, 8) * 0.04 }}
              className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/80 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/45"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(120% 120% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%)',
                }}
              />

              <div className="relative h-36 overflow-hidden border-b border-line">
                <Image
                  src={project.image || '/placeholder.jpg'}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 45vw, 360px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute right-2 top-2 rounded-md border border-line bg-bg/80 px-2 py-0.5 font-mono text-[10px] text-accent backdrop-blur-sm">
                  {project.date?.slice(0, 4) || 'Recent'}
                </span>
                {project.award && (
                  <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-contrast">
                    <Trophy className="h-3 w-3" /> {project.award}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-2">
                  {categoryLabel[project.category]}
                </p>
                <h3 className="mt-1.5 text-base font-medium tracking-[-0.01em] text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-muted">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>

      {shown.length === 0 && (
        <p className="py-16 text-center text-sm text-muted">Nothing here yet.</p>
      )}
    </section>
  )
}
