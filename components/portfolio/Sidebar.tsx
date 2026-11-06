'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Magnet from '@/components/Magnet'
import ThemeToggle from './ThemeToggle'
import { sections, type SectionId } from './sections-config'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navEase = [0.22, 1, 0.36, 1] as const

const cubeFaces = [
  'translateZ(18px)',
  'rotateY(180deg) translateZ(18px)',
  'rotateY(90deg) translateZ(18px)',
  'rotateY(-90deg) translateZ(18px)',
  'rotateX(90deg) translateZ(18px)',
  'rotateX(-90deg) translateZ(18px)',
]

export default function Sidebar({
  active,
  onSelect,
}: {
  active: SectionId
  onSelect: (id: SectionId) => void
}) {
  return (
    <aside className="relative z-20 flex shrink-0 items-center gap-4 border-b border-line bg-surface/60 px-4 py-3 md:h-full md:w-[258px] md:flex-col md:items-stretch md:gap-0 md:border-b-0 md:border-r md:px-5 md:py-6">
      <div className="flex items-center gap-3 md:mb-8">
        <div className="scene-3d h-9 w-9 shrink-0">
          <div className="preserve-3d animate-cube relative h-9 w-9">
            {cubeFaces.map((transform) => (
              <span
                key={transform}
                style={{ transform }}
                className="absolute inset-0 grid place-items-center rounded-[3px] border border-accent/45 bg-surface/90 font-mono text-[10px] font-semibold text-accent backface-hidden"
              >
                MS
              </span>
            ))}
          </div>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-medium tracking-[-0.01em] text-ink">{profile.name}</p>
          <p className="text-[11px] text-muted">{profile.role}</p>
        </div>
      </div>

      <nav
        aria-label="Sections"
        className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto md:min-h-0 md:flex-col md:items-stretch md:gap-1 md:overflow-y-auto md:overflow-x-hidden"
      >
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <Magnet
              key={section.id}
              padding={8}
              magnetStrength={6}
              tilt={3}
              className="block w-full"
              wrapperClassName="block shrink-0 md:w-full"
            >
              <button
                type="button"
                onClick={() => onSelect(section.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative isolate flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isActive ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ duration: 0.4, ease: navEase }}
                    className="absolute inset-0 -z-10 rounded-lg border border-accent/40 bg-accent-soft"
                  />
                )}
                <section.icon
                  className={cn('h-4 w-4 shrink-0', isActive && 'text-accent')}
                  strokeWidth={1.75}
                />
                <span className="whitespace-nowrap md:inline">{section.label}</span>
                <span className="ml-auto hidden font-mono text-[10px] text-muted md:inline">
                  {section.index}
                </span>
              </button>
            </Magnet>
          )
        })}
      </nav>

      <ThemeToggle className="md:hidden" />

      <div className="hidden md:mt-6 md:flex md:flex-col md:gap-4">
        <ThemeToggle className="w-full justify-between" />
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid h-9 flex-1 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 hover:border-accent/60 hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-9 flex-1 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 hover:border-accent/60 hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="grid h-9 flex-1 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 hover:border-accent/60 hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="flex items-center gap-2 text-[11px] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </p>
      </div>
    </aside>
  )
}
