import type { CSSProperties } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import Clock from './Clock'
import { GithubIcon, LeetCodeIcon, LinkedinIcon } from './BrandIcons'

const socials = [
  { href: profile.github, label: 'GitHub', Icon: GithubIcon },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: profile.leetcode, label: 'LeetCode', Icon: LeetCodeIcon },
]

const facts = [
  { label: 'Now', value: 'Backend Developer Intern at GolokaIT' },
  { label: 'Focus', value: 'Java, Spring Boot, React' },
  { label: 'Based', value: 'Nashik, Maharashtra, India' },
]

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="shell grid gap-12 pb-14 pt-28 md:pt-36 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16 lg:pb-16">
        <div className="flex flex-col justify-between gap-14">
          <div>
            <p className="hero-fade label flex items-center gap-2.5">
              <span className="live-dot" aria-hidden="true" />
              Software developer · Nashik, India
            </p>

            <h1 className="hero-fade display mt-6">Mahesh Shinde</h1>

            <p
              className="hero-fade mt-7 max-w-[33rem] text-[clamp(1.05rem,1.6vw,1.3rem)] font-light leading-[1.6] text-soft"
              style={{ '--delay': '0.18s' } as CSSProperties}
            >
              I build backend systems and the interfaces that sit on top of them. Java and
              Spring Boot on the server, React in the browser, shipped to real users.
            </p>

            <div
              className="hero-fade mt-9 flex flex-wrap items-center gap-3"
              style={{ '--delay': '0.26s' } as CSSProperties}
            >
              <a href="#work" className="btn btn-primary">
                Selected work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl
            className="hero-fade grid max-w-2xl gap-5 border-t border-line pt-6 sm:grid-cols-3"
            style={{ '--delay': '0.34s' } as CSSProperties}
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1.5 max-w-[15rem] text-[13px] leading-5 text-soft">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          className="hero-fade w-full max-w-[17rem] lg:max-w-none"
          style={{ '--delay': '0.24s' } as CSSProperties}
        >
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-m)] border border-line bg-surface-2">
              <Image
                src="/profile.jpg"
                alt="Portrait of Mahesh Shinde"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 19rem"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-4 text-[11px] leading-5 text-muted">
              <span>
                <span className="block text-[12.5px] font-medium text-fg">Mahesh Shinde</span>
                Full-stack developer
              </span>
              <span className="text-right">
                <Clock className="block tabular" />
                Nashik, IN
              </span>
            </figcaption>
          </figure>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
            <div className="flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} profile`}
                  className="grid h-8 w-8 place-items-center rounded-[3px] text-muted transition-colors duration-200 hover:bg-surface hover:text-fg"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="t-link text-[12px]"
            >
              <span className="link-text">Résumé</span>
              <ArrowUpRight className="link-arrow h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4 text-[10.5px] uppercase tracking-[0.16em] text-faint">
          <span className="inline-flex items-center gap-2">
            <span className="live-dot" aria-hidden="true" />
            {profile.status}
          </span>
          <a
            href="#profile"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-fg"
          >
            Scroll to profile
            <ArrowDown className="h-3 w-3" aria-hidden="true" />
          </a>
          <span>Portfolio 2026</span>
        </div>
      </div>
    </section>
  )
}
