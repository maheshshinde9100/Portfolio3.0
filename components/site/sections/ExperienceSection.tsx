import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from '@/components/site/SectionHead'
import { experiences } from '@/data/profile'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHead
          index="03"
          label="Experience"
          title="Five teams, five ways of working."
          lede="Internships and programs across backend engineering, open source, data science, and mobile development."
        />

        <ol className="mt-12 border-b border-line" data-reveal>
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.role}`}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index, 6) * 50}ms` } as CSSProperties}
              className="grid gap-3 border-t border-line py-7 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10"
            >
              <div className="flex items-center gap-2 self-start pt-1 text-[10.5px] uppercase tracking-[0.14em] text-faint">
                {item.highlight && <span className="live-dot" aria-hidden="true" />}
                {item.date}
              </div>

              <div>
                <h3 className="text-[clamp(1.05rem,1.5vw,1.25rem)] font-medium tracking-[-0.015em]">
                  {item.role}
                </h3>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-soft underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                  >
                    {item.company}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="mt-1.5 text-[13px] text-muted">{item.company}</p>
                )}

                <p className="mt-3 max-w-2xl text-[13.5px] leading-7 text-muted">{item.detail}</p>

                <p className="mt-3 text-[11px] leading-5 text-faint">{item.tags.join(' / ')}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
