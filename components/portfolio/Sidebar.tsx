'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { sections, type SectionId } from './sections-config'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navEase = [0.22, 1, 0.36, 1] as const

export default function Sidebar({
  active,
  onSelect,
}: {
  active: SectionId
  onSelect: (id: SectionId) => void
}) {
  return (
    <>
      {/* mobile: compact top bar */}
      <header className="relative z-20 order-1 flex shrink-0 items-center justify-between gap-3 border-b border-line bg-surface/60 px-4 py-2.5 backdrop-blur-md md:hidden">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src="/ms-mark.svg"
            alt="MS"
            width={32}
            height={32}
            priority
            className="h-8 w-8 shrink-0 rounded-[8px]"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[13px] font-medium tracking-[-0.01em] text-ink">
              {profile.name}
            </p>
            <p className="truncate text-[11px] text-muted">{profile.role}</p>
          </div>
        </div>
        <ThemeToggle className="h-9 w-9 shrink-0 justify-center gap-0 px-0" />
      </header>

      {/* desktop: vertical sidebar */}
      <aside className="relative z-20 order-1 hidden shrink-0 flex-col border-r border-line bg-surface/50 px-5 py-6 md:flex md:h-full md:w-[258px]">
        <div className="mb-9 flex items-center gap-3">
          <Image
            src="/ms-mark.svg"
            alt="MS"
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0 rounded-[8px]"
          />
          <div className="leading-tight">
            <p className="text-[13px] font-medium tracking-[-0.01em] text-ink">{profile.name}</p>
            <p className="text-[11px] text-muted">{profile.role}</p>
          </div>
        </div>

        <nav
          aria-label="Sections"
          className="no-scrollbar flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto"
        >
          {sections.map((section) => {
            const isActive = active === section.id
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative isolate flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isActive ? 'font-medium text-ink' : 'font-normal text-muted hover:text-ink',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ duration: 0.26, ease: navEase }}
                    className="absolute inset-0 -z-10 rounded-lg bg-accent-soft"
                  />
                )}
                <section.icon
                  className={cn('h-4 w-4 shrink-0', isActive ? 'text-accent' : 'text-muted')}
                  strokeWidth={1.75}
                />
                <span className="whitespace-nowrap">{section.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-6 flex flex-col gap-4">
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

      {/* mobile: bottom tab bar */}
      <nav
        aria-label="Sections"
        className="relative z-20 order-3 grid shrink-0 grid-cols-7 border-t border-line bg-surface/70 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 px-1 py-2.5 transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isActive ? 'text-accent' : 'text-muted hover:text-ink',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-tab"
                  transition={{ duration: 0.26, ease: navEase }}
                  className="absolute inset-x-3 top-0 h-[2px] rounded-full bg-accent"
                />
              )}
              <section.icon className="h-[18px] w-[18px]" strokeWidth={isActive ? 2 : 1.75} />
              <span className={cn('text-[10px] leading-none', isActive && 'font-medium')}>
                {section.short}
              </span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
