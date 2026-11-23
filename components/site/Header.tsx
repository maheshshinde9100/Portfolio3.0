'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#profile', label: 'Profile', index: '01' },
  { href: '#work', label: 'Work', index: '02' },
  { href: '#experience', label: 'Experience', index: '03' },
  { href: '#contact', label: 'Contact', index: '07' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 16))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300',
          scrolled ? 'border-line' : 'border-transparent',
        )}
        style={{
          backgroundColor: scrolled ? 'rgba(244, 242, 236, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link href="/" className="flex items-baseline gap-2.5" aria-label="Mahesh Shinde, home">
            <span className="text-[14px] font-medium tracking-[-0.01em]">{profile.name}</span>
            <span className="hidden text-[11px] text-faint sm:inline">Backend & full-stack</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12.5px] text-muted transition-colors duration-200 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-muted lg:inline-flex">
              <span className="live-dot" aria-hidden="true" />
              Open to work
            </span>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden h-8 items-center gap-1.5 rounded-[3px] border border-line-strong px-3 text-[11.5px] font-medium transition-colors duration-200 hover:border-fg hover:bg-surface sm:inline-flex"
            >
              Résumé
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              className="grid h-9 w-9 place-items-center rounded-[3px] border border-line-strong text-fg md:hidden"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[80] flex flex-col bg-canvas"
          style={{ animation: 'menu-in 0.35s var(--ease-out) both' }}
        >
          <div className="shell flex h-16 items-center justify-between">
            <span className="text-[14px] font-medium">{profile.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-[3px] border border-line-strong text-fg"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center pb-16">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-t border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between gap-4 py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10.5px] tabular text-faint">{item.index}</span>
                      <span className="display text-[clamp(2rem,8vw,2.75rem)]">{item.label}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Email me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Résumé
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-muted">
              <span className="live-dot" aria-hidden="true" />
              {profile.status}
            </p>
          </nav>
        </div>
      )}
    </>
  )
}
