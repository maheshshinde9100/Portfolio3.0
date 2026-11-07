'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import SplitText from '@/components/SplitText'
import {
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
  StackOverflowIcon,
} from '@/components/portfolio/BrandIcons'
import { profile, stats } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

const socials = [
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'Stack Overflow', href: profile.stackoverflow, Icon: StackOverflowIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'LeetCode', href: profile.leetcode, Icon: LeetCodeIcon },
]

export default function AboutSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1160px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
          className="mx-auto w-full max-w-[340px] lg:mx-0"
        >
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[26px] border border-accent/30"
            />
            <div className="group overflow-hidden rounded-[26px] border border-line bg-surface">
              <div className="relative aspect-[4/5] bg-surface-2">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 340px, 340px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                <div className="leading-tight">
                  <p className="text-[13px] font-medium tracking-[-0.01em] text-ink">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-[11px] text-muted">{profile.role}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-[11px] text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to work
                </span>
              </figcaption>
            </div>
          </div>

          <div className="-ml-1 mt-6 flex flex-wrap items-center gap-1.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} profile`}
                title={label}
                className="grid h-10 w-10 place-items-center rounded-xl text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-surface-2 hover:text-accent focus-visible:bg-surface-2"
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
        </motion.figure>

        <div>
          <p className="eyebrow mb-5">About</p>

          <SplitText
            text={profile.tagline}
            tag="h1"
            trigger="load"
            effect="rise"
            splitType="words"
            delay={60}
          duration={0.55}
            textAlign="left"
            className="max-w-[640px] pb-1 text-4xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-5xl xl:text-[3.4rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
            className="mt-6 max-w-[560px] text-[15px] leading-7 text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity duration-300 hover:opacity-90 active:translate-y-px"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:text-ink active:translate-y-px"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </span>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.44 }}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-7 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tabular-nums tracking-[-0.02em] text-ink">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="mt-1 block text-xs leading-4 text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
