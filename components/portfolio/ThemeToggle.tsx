'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const dark = resolvedTheme !== 'light'

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'group flex items-center gap-3 rounded-xl border border-line bg-surface/70 px-3 py-2 text-xs font-medium text-muted backdrop-blur-md transition-colors duration-300 hover:border-accent/60 hover:text-ink active:translate-y-px',
        className,
      )}
    >
      <span
        className="relative block h-4 w-4 [transform-style:preserve-3d] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: dark ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <Sun className="backface-hidden absolute inset-0 h-4 w-4" />
        <Moon className="backface-hidden absolute inset-0 h-4 w-4 [transform:rotateY(180deg)]" />
      </span>
      <span className="hidden md:inline">{mounted ? (dark ? 'Dark' : 'Light') : 'Theme'}</span>
    </button>
  )
}
