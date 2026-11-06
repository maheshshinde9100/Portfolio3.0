'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from 'lucide-react'
import BlurText from '@/components/BlurText'
import Magnet from '@/components/Magnet'
import SplitText from '@/components/SplitText'
import StarBorder from '@/components/StarBorder'
import { profile } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

const channels = [
  { label: 'GitHub', value: 'maheshshinde9100', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: 'in/maheshshinde9100', href: profile.linkedin, icon: Linkedin },
  { label: 'LeetCode', value: 'code-with-mahesh', href: profile.leetcode, icon: Code2 },
  { label: 'HackerRank', value: 'maheshshinde9100', href: profile.hackerrank, icon: Trophy },
]

export default function ContactSection() {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme !== 'light'
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
    <section className="mx-auto flex min-h-full w-full max-w-[1160px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="eyebrow mb-4">07 / Contact</p>

          <SplitText
            text="Let us build something worth keeping."
            tag="h2"
            trigger="load"
            effect="rise"
            splitType="words"
            delay={70}
            duration={0.8}
            textAlign="left"
            className="max-w-[620px] pb-1 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl xl:text-[3.5rem]"
          />

          <div className="mt-5 max-w-[520px]">
            <BlurText
              text="Open to backend and full stack roles, thoughtful product work, and collaborations that care about the details."
              animateBy="words"
              delay={22}
              direction="bottom"
              trigger="load"
              className="text-base leading-7 text-muted"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnet padding={16} magnetStrength={7} tilt={6}>
              <StarBorder
                as="a"
                href={`mailto:${profile.email}`}
                theme={dark ? 'dark' : 'light'}
                color={dark ? '#7065f0' : '#4f43d6'}
                trailColor={dark ? '#9fa3fc' : '#7065f0'}
                duration={5}
                thickness={1.4}
                radius={12}
                glow={0.7}
                sparkle
                className="!px-6 !py-3 text-sm font-semibold"
              >
                <span className="inline-flex items-center gap-2">
                  Email me <ArrowUpRight className="h-4 w-4" />
                </span>
              </StarBorder>
            </Magnet>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:text-ink active:translate-y-px"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              <span className="font-mono text-xs">{copied ? 'Copied' : profile.email}</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-ink"
            >
              <Phone className="h-4 w-4 text-accent" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </span>
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 hover:text-accent"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface/70 px-4 py-3.5 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/45"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-line text-accent">
                    <channel.icon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-muted">
                      {channel.label}
                    </span>
                    <span className="block text-[13px] font-medium text-ink">{channel.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
            className="rounded-2xl border border-line bg-surface/70 px-5 py-4"
          >
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.status}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted">
              Letters usually answered within a day. For quick questions, email works best.
            </p>
          </motion.div>

          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 rounded-2xl border border-accent/35 bg-accent-soft px-5 py-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/40 text-accent">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.14em] text-muted">
                Best way to reach me
              </span>
              <span className="block truncate font-mono text-[13px] text-ink">{profile.email}</span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 text-accent" />
          </a>
        </div>
      </div>
    </section>
  )
}
