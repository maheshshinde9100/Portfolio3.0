import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import type { Project, ProjectCategory } from '@/types/project'

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
  const style = { '--delay': `${Math.min(index, 8) * 30}ms` } as CSSProperties

  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
      {content}
    </a>
  ) : (
    <div className={className} style={style}>
      {content}
    </div>
  )
}

export default function WorkGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id ?? project.title} project={project} index={index} />
      ))}
    </div>
  )
}
