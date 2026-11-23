import type { CSSProperties } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
import SectionHead from '@/components/site/SectionHead'
import { profile, stats } from '@/data/profile'

const details = [
  { label: 'Currently', value: 'Backend Developer Intern, GolokaIT' },
  { label: 'Open to', value: 'Backend and full-stack roles' },
  { label: 'Stack', value: 'Java · Spring Boot · React' },
  { label: 'Location', value: 'Nashik, Maharashtra, India' },
]

export default function ProfileSection() {
  return (
    <section id="profile" className="section">
      <div className="shell">
        <SectionHead index="01" label="Profile" title="I care about what happens after launch." />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div className="max-w-[42rem] space-y-5" data-reveal>
            {profile.about.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={
                  index === 0
                    ? 'text-[16.5px] leading-[1.8] text-soft'
                    : 'body-copy'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
            <dl className="border-t border-line">
              {details.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-line py-3.5"
                >
                  <dt className="label pt-0.5">{row.label}</dt>
                  <dd className="text-[12.5px] leading-5 text-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <dl
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
          data-reveal
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(1.75rem,2.6vw,2.25rem)] font-medium leading-none tracking-[-0.03em] tabular">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="mt-2.5 block text-[11px] leading-4 text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-6" data-reveal>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
          <a href="#contact" className="t-link text-[13px]">
            <span className="link-text">Start a conversation</span>
            <ArrowUpRight className="link-arrow h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
