import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from '@/components/site/SectionHead'
import { certifications } from '@/data/profile'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="shell">
        <SectionHead
          index="06"
          label="Certifications"
          title="Verified learning."
          lede="Certificates and bootcamps that back the day to day work."
        />

        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <li
              key={item.href}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index, 5) * 40}ms` } as CSSProperties}
              className="border-t border-line"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span>
                  <span className="block text-[13.5px] font-medium transition-colors duration-200 group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[10.5px] uppercase tracking-[0.14em] text-faint">
                    {item.issuer}
                  </span>
                </span>
                <ArrowUpRight
                  className="link-arrow h-3.5 w-3.5 shrink-0 text-faint"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
