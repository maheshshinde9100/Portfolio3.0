import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from '@/components/site/SectionHead'
import { achievements, contributions } from '@/data/profile'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section">
      <div className="shell">
        <SectionHead
          index="06"
          label="Recognition"
          title="Proof of the work."
          lede="Open source merges, contest streaks, cloud badges, and hackathon placements."
        />

        <div className="mt-12 border-b border-line">
          {achievements.map((item, index) => {
            const inner = (
              <>
                <span className="pr-3 text-[clamp(1.2rem,1.8vw,1.45rem)] font-medium leading-tight tracking-[-0.025em] tabular">
                  {item.metric}
                </span>
                <span>
                  <span className="block text-[14.5px] font-medium">{item.title}</span>
                  <span className="mt-1.5 block max-w-2xl text-[13px] leading-6 text-muted">
                    {item.detail}
                  </span>
                </span>
                <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-faint md:justify-end md:text-right">
                  {item.org}
                  {item.href && (
                    <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </span>
              </>
            )
            const className =
              'group grid gap-2.5 border-t border-line py-6 md:grid-cols-[11.5rem_minmax(0,1fr)_11rem] md:gap-8'
            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-reveal
                style={{ '--reveal-delay': `${Math.min(index, 5) * 45}ms` } as CSSProperties}
                className={className}
              >
                {inner}
              </a>
            ) : (
              <div
                key={item.title}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(index, 5) * 45}ms` } as CSSProperties}
                className={className}
              >
                {inner}
              </div>
            )
          })}
        </div>

        <div className="mt-20">
          <div
            className="flex flex-wrap items-baseline justify-between gap-3"
            data-reveal
          >
            <h3 className="text-[clamp(1.25rem,1.9vw,1.6rem)] font-medium tracking-[-0.02em]">
              Open source
            </h3>
            <span className="text-[10.5px] uppercase tracking-[0.14em] text-faint">
              Pull requests and issues
            </span>
          </div>

          <ul className="mt-6 border-b border-line">
            {contributions.map((item, index) => (
              <li
                key={item.href}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(index, 5) * 40}ms` } as CSSProperties}
                className="group border-t border-line"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid gap-2 py-4 md:grid-cols-[16rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
                >
                  <span className="flex items-baseline gap-2">
                    <span className="text-[13px] font-medium transition-colors duration-200 group-hover:text-accent">
                      {item.repo}
                    </span>
                    <span className="text-[11px] text-faint">{item.owner}</span>
                  </span>
                  <span className="text-[13px] leading-6 text-muted">{item.summary}</span>
                  <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.14em] text-faint">
                    {item.ref}
                    <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
