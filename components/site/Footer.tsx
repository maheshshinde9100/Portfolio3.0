import { ArrowUp } from 'lucide-react'
import { profile } from '@/data/profile'
import Clock from './Clock'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-8 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <p className="text-[15px] font-medium">{profile.name}</p>
          <p className="mt-1 text-[12px] text-muted">
            Backend and full-stack developer · Nashik, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
          <a href={`mailto:${profile.email}`} className="t-link">
            <span className="link-text">Email</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="t-link">
            <span className="link-text">GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="t-link">
            <span className="link-text">LinkedIn</span>
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="t-link">
            <span className="link-text">Résumé</span>
          </a>
          <a href="#top" className="t-link">
            <span className="link-text">Top</span>
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line py-5 text-[11px] text-faint">
        <span>© {new Date().getFullYear()} Mahesh Shinde. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <Clock className="tabular" />
          <span aria-hidden="true">·</span>
          Built with Next.js and Tailwind CSS
        </span>
      </div>
    </footer>
  )
}
