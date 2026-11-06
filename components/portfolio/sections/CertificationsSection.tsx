'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { certifications } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

export default function CertificationsSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1100px] flex-col px-6 py-10 md:px-10 md:py-12">
      <header className="mb-7">
        <p className="eyebrow mb-3">06 / Certifications</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[680px] text-3xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-4xl xl:text-5xl">
            Credentials that back the craft.
          </h2>
          <p className="font-mono text-3xl font-semibold text-accent">
            {String(certifications.length).padStart(2, '0')}
          </p>
        </div>
        <p className="mt-3 max-w-[560px] text-sm text-muted md:text-base">
          Verified certifications and bootcamps across Java, React, full stack development, UX, and
          Google Cloud.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/80 px-5 py-4 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/45"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line text-accent">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-ink">{cert.title}</span>
              <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-accent-2">
                {cert.issuer}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
