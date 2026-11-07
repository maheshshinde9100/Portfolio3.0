'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { certifications } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

export default function CertificationsSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1180px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-8">
        <p className="eyebrow mb-4">Certifications</p>
        <h2 className="max-w-[620px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
          Credentials that back the craft.
        </h2>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted">
          Verified certifications and bootcamps across Java, React, full stack development, UX, and
          Google Cloud.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.li
            key={cert.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE, delay: index * 0.025 }}
            className="flex"
          >
            <a
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full flex-col rounded-2xl border border-line bg-surface/50 p-5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-line-strong hover:bg-surface"
            >
              <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                {cert.issuer}
              </span>
              <span className="mt-2 text-[15px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent">
                {cert.title}
              </span>

              <span className="mt-auto flex items-center gap-2 pt-5 text-[11px] text-muted">
                Verify
                <ArrowUpRight className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-accent" />
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
