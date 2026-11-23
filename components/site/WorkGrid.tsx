'use client'

import Image from 'next/image'
import { useMemo, useState, type CSSProperties } from 'react'
import { ArrowUpRight, Lock, Minus, Plus } from 'lucide-react'
import { allProjects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project, ProjectCategory } from '@/types/project'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All work' },
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.demo || project.github || ''
  const year = project.date?.slice(0, 4)
  const isExternal = href.length > 0

  const content = (
    <>
      <div className="project-media relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        <Image
          src={project.image || '/placeholder.jpg'}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 30vw"
          className="object-cover object-top transition-transform duration-500 ease-[var(--ease-out)]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[15.5px] font-medium tracking-[-0.012em]">{project.title}</h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-faint transition-colors duration-200 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>

        {project.award && (
          <p className="mt-1.5 text-[11.5px] font-medium text-accent">{project.award}</p>
        )}

        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-muted">{project.description}</p>

        <p className="mb-5 mt-3 text-[11px] leading-5 text-faint">
          {project.tech.slice(0, 3).join(' · ')}
          {project.tech.length > 3 && ` · +${project.tech.length - 3}`}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-3.5">
          <span className="text-[10.5px] uppercase tracking-[0.12em] text-faint">
            {categoryLabel[project.category]}
          </span>
          <span className="flex items-center gap-3 text-[10.5px] text-faint">
            {!isExternal && (
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-2.5 w-2.5" aria-hidden="true" />
                Private
              </span>
            )}
            {year && <span className="tabular">{year}</span>}
          </span>
        </div>
      </div>
    </>
  )

  const className =
    'fade-in group card project-card flex flex-col overflow-hidden text-left'

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={{ '--delay': `${Math.min(index, 8) * 30}ms` } as CSSProperties}
    >
      {content}
    </a>
  ) : (
    <div
      className={className}
      style={{ '--delay': `${Math.min(index, 8) * 30}ms` } as CSSProperties}
    >
      {content}
    </div>
  )
}

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState(false)

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
  const showAll = expanded || filter !== 'all'
  const visible = showAll ? shown : shown.slice(0, 9)

  return (
    <div className="mt-10">
      <div className="border-b border-line md:flex md:items-end md:justify-between" data-reveal>
        <div
          role="group"
          aria-label="Filter projects by type"
          className="no-scrollbar -mb-px flex gap-6 overflow-x-auto"
        >
          {filters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={active}
                className={cn(
                  'shrink-0 border-b-2 pb-3 pt-2 text-[12.5px] transition-colors duration-200',
                  active
                    ? 'border-fg text-fg'
                    : 'border-transparent text-muted hover:text-fg',
                )}
              >
                {item.label}
                <span className="ml-1.5 text-[10px] tabular text-faint">{counts[item.id]}</span>
              </button>
            )
          })}
        </div>
        <p
          className="hidden pb-3.5 text-[10.5px] uppercase tracking-[0.14em] text-faint md:block"
          aria-live="polite"
        >
          {showAll
            ? `${shown.length} ${shown.length === 1 ? 'project' : 'projects'}`
            : `${visible.length} of ${shown.length} projects`}
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={project.id ?? project.title} project={project} index={index} />
        ))}
      </div>

      {filter === 'all' && shown.length > 9 && (
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[12.5px] text-muted transition-colors duration-200 hover:text-fg"
          >
            {expanded ? (
              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {expanded ? 'Show fewer projects' : `Show all ${shown.length} projects`}
          </button>
        </div>
      )}
    </div>
  )
}
