import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import SectionHead from '@/components/site/SectionHead'
import ContactActions from '@/components/site/ContactActions'
import Clock from '@/components/site/Clock'
import {
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
  StackOverflowIcon,
} from '@/components/site/BrandIcons'
import { profile } from '@/data/profile'

const channels = [
  {
    label: 'GitHub',
    value: 'maheshshinde9100',
    href: profile.github,
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'in/maheshshinde9100',
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: 'LeetCode',
    value: 'code-with-mahesh',
    href: profile.leetcode,
    Icon: LeetCodeIcon,
  },
  {
    label: 'Stack Overflow',
    value: 'mahesh-shinde',
    href: profile.stackoverflow,
    Icon: StackOverflowIcon,
  },
]

export default function ContactSection() {
  const [emailUser, emailDomain] = profile.email.split('@')

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHead
          index="07"
          label="Contact"
          title="Have something worth building?"
          lede="Backend work, full-stack products, or a tricky integration. I reply to every serious message."
        />

        <div
          data-reveal
          className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20"
        >
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-block max-w-full"
              aria-label={`Email ${profile.email}`}
            >
              <span className="block text-[clamp(1.25rem,2.6vw,2.05rem)] font-light leading-[1.2] tracking-[-0.03em] text-soft underline decoration-transparent decoration-1 underline-offset-8 transition-colors duration-200 group-hover:text-accent group-hover:decoration-current">
                {emailUser}@
                <span className="block sm:inline">{emailDomain}</span>
              </span>
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ContactActions />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 text-[12px] text-muted">
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="t-link">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="link-text">{profile.phone}</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock />
              </span>
            </div>

            <p className="mt-8 flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.14em] text-muted">
              <span className="live-dot" aria-hidden="true" />
              {profile.status}
            </p>
          </div>

          <div>
            <p className="label">Elsewhere</p>
            <ul className="mt-4 border-b border-line">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="border-t border-line">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 py-4"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-faint transition-colors duration-200 group-hover:text-accent"
                      aria-hidden="true"
                    />
                    <span className="flex-1 text-[13px] text-soft transition-colors duration-200 group-hover:text-fg">
                      {label}
                    </span>
                    <span className="truncate text-[11.5px] text-faint">{value}</span>
                    <ArrowUpRight
                      className="link-arrow h-3.5 w-3.5 shrink-0 text-faint"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[12px] leading-6 text-faint">
              Based in Nashik. Usually replies within a day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
