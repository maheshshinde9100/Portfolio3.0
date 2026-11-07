'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
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
    <section className="mx-auto flex min-h-full w-full max-w-[1280px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-6">
        <p className="eyebrow mb-4">Work</p>
        <h2 className="max-w-[620px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
          Built to solve. Designed to last.
        </h2>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted">
          Client deliveries, developer tools, open source packages, and hackathon builds across the
          stack.
        </p>
      </header>

      <div className="sticky top-0 z-10 -mx-6 mb-5 flex flex-wrap items-center gap-x-7 border-b border-line bg-bg/85 px-6 backdrop-blur-md md:-mx-10 md:px-10">
        {filters.map((item) => {
          const active = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={active}
              className={cn(
                'relative py-3 text-[13px] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                active ? 'font-medium text-ink' : 'text-muted hover:text-ink',
              )}
            >
              {item.label}
              <span className="ml-1.5 text-[11px] tabular-nums text-muted">{counts[item.id]}</span>
              {active && (
                <motion.span
                  layoutId="work-filter"
                transition={{ duration: 0.24, ease: EASE }}
                  className="absolute inset-x-0 bottom-0 h-px bg-accent"
                />
              )}
            </button>
          )
        })}
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((project, index) => {
            const href = project.demo || project.github || ''
            const external = href.length > 0
            const year = project.date?.slice(0, 4) || 'Recent'
            return (
              <motion.a
                key={project.id}
                href={external ? href : undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: EASE, delay: Math.min(index, 4) * 0.02 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-strong hover:bg-surface"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
                  <Image
                    src={project.image || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
                    className="object-cover object-top transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-line bg-bg/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
                    {categoryLabel[project.category]}
                  </span>
                  {!external && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-bg/80 px-2 py-0.5 text-[10px] text-muted backdrop-blur-sm">
                      <Lock className="h-2.5 w-2.5" /> Private
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-[11px] tabular-nums text-muted">{year}</span>
                  </div>

                  {project.award && (
                    <span className="mt-2 text-[11px] font-medium text-accent-2">
                      {project.award}
                    </span>
                  )}

                  <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-muted">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] text-muted">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-muted">Nothing here yet.</p>
      )}
    </section>
  )
}
