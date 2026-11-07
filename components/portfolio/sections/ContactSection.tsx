'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Trophy,
} from 'lucide-react'
import { profile } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

const channels = [
  { label: 'GitHub', value: 'maheshshinde9100', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: 'maheshshinde9100', href: profile.linkedin, icon: Linkedin },
  { label: 'LeetCode', value: 'code-with-mahesh', href: profile.leetcode, icon: Code2 },
  { label: 'HackerRank', value: 'maheshshinde9100', href: profile.hackerrank, icon: Trophy },
  { label: 'GeeksforGeeks', value: 'coder_mahi', href: profile.gfg, icon: Code2 },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1040px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: EASE }}
        >
          <p className="eyebrow mb-5">Contact</p>

          <h2 className="max-w-[560px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
            Let us build something worth keeping.
          </h2>

          <p className="mt-5 max-w-[480px] text-[15px] leading-7 text-muted">
            Open to backend and full stack roles, thoughtful product work, and collaborations that
            care about the details.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity duration-300 hover:opacity-90 active:translate-y-px"
            >
              Email me <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:text-ink active:translate-y-px"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              <span className="text-xs">{copied ? 'Copied' : 'Copy email'}</span>
            </button>
          </div>

          <dl className="mt-10 border-t border-line pt-6">
            <div className="flex items-baseline justify-between gap-4 py-2">
              <dt className="text-xs text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[13px] text-ink transition-colors duration-300 hover:text-accent"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2">
              <dt className="text-xs text-muted">Phone</dt>
              <dd>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-[13px] text-ink transition-colors duration-300 hover:text-accent"
                >
                  <Phone className="h-3.5 w-3.5 text-muted" /> {profile.phone}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2">
              <dt className="text-xs text-muted">Location</dt>
              <dd className="inline-flex items-center gap-2 text-[13px] text-ink">
                <MapPin className="h-3.5 w-3.5 text-muted" /> {profile.location}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2">
              <dt className="text-xs text-muted">Resume</dt>
              <dd>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-ink transition-colors duration-300 hover:text-accent"
                >
                  <Download className="h-3.5 w-3.5 text-muted" /> Download
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: EASE, delay: 0.05 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.14em] text-muted">Elsewhere</p>
          <ul className="border-t border-line">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-line">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5"
                >
                  <span className="flex items-center gap-3">
                    <channel.icon className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent" />
                    <span className="text-[13px] text-ink">{channel.label}</span>
                  </span>
                  <span className="flex items-center gap-2 text-[11px] text-muted">
                    {channel.value}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-accent" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
