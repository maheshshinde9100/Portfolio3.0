import type { CSSProperties } from 'react'
import { ArrowUpRight, Github, Lock } from 'lucide-react'
import { miniProjects } from '@/data/projects'
import { profile } from '@/data/profile'
import type { Project } from '@/types/project'

const languageColor: Record<string, string> = {
  Java: '#b07219',
  TypeScript: '#3178c6',
  JavaScript: '#b8a000',
  Python: '#3572a5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Kotlin: '#a97bff',
  PHP: '#4f5d95',
}

function languageFor(tech: string[]): string | null {
  const direct = tech.find((item) => item in languageColor)
  if (direct) return direct
  if (tech.some((item) => /Spring|Android/.test(item))) return 'Java'
  if (tech.some((item) => /FastAPI|Python/.test(item))) return 'Python'
  if (tech.some((item) => /React|Next\.js|Node\.js|Express|MERN/.test(item))) return 'JavaScript'
  return null
}

function parseRepo(url?: string) {
  if (!url) return null
  const parts = url.replace(/\/+$/, '').split('/')
  const name = parts.pop()
  const owner = parts.pop()
  return name && owner ? { owner, name } : null
}

function RepoCard({ project, index }: { project: Project; index: number }) {
  const href = project.github || project.demo || ''
  const repo = parseRepo(project.github)
  const language = languageFor(project.tech)
  const year = project.date?.slice(0, 4)

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 text-[13px]">
          <Github className="h-3.5 w-3.5 shrink-0 text-faint" aria-hidden="true" />
          {repo && <span className="hidden truncate text-faint sm:inline">{repo.owner} /</span>}
          <span className="truncate font-medium transition-colors duration-200 group-hover:text-accent">
            {repo?.name ?? project.title}
          </span>
        </span>
        <span className="mt-0.5 shrink-0 rounded-full border border-line px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-muted">
          {href ? 'Public' : 'Private'}
        </span>
      </div>

      <p className="mt-2.5 line-clamp-2 text-[12.5px] leading-6 text-muted">{project.description}</p>

      <div className="mt-auto flex items-center gap-4 pt-4 text-[10.5px] text-faint">
        {language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: languageColor[language] }}
              aria-hidden="true"
            />
            {language}
          </span>
        )}
        {year && <span className="tabular">{year}</span>}
        <span className="ml-auto inline-flex items-center gap-1">
          {href ? 'Source' : 'Closed'}
          {href ? (
            <ArrowUpRight
              className="h-3 w-3 text-faint transition-all duration-200 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-accent"
              aria-hidden="true"
            />
          ) : (
            <Lock className="h-3 w-3" aria-hidden="true" />
          )}
        </span>
      </div>
    </>
  )

  const className =
    'fade-in group card project-card flex flex-col p-5 text-left'
  const style = { '--delay': `${Math.min(index, 8) * 30}ms` } as CSSProperties

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
      {content}
    </a>
  ) : (
    <div className={className} style={style}>
      {content}
    </div>
  )
}

export default function MiniProjects() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {miniProjects.map((project, index) => (
          <RepoCard key={project.id ?? project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-9 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="t-link group text-[12.5px]"
        >
          <span className="link-text">Browse every repository on GitHub</span>
          <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
