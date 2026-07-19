'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

type HeroSectionProps = {
  onContact: () => void
  onScrollDown?: () => void
}

const techChips = ['ReactJS', 'Java', 'Spring Boot', 'Android', 'Google Cloud'] as const

const socialLinks = [
  { Icon: Github, url: 'https://github.com/maheshshinde9100', label: 'GitHub' },
  { Icon: Linkedin, url: 'https://www.linkedin.com/in/maheshshinde9100', label: 'LinkedIn' },
  { Icon: Mail, url: 'mailto:maheshshinde9100@gmail.com', label: 'Email' },
] as const

const RESUME_URL =
  'https://drive.google.com/file/d/1PpuquTY-7sI5yoY53pmoPAbmjhozfLCa/view?usp=sharing'

export default function HeroSection({ onContact, onScrollDown }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Hero spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(34,211,238,.14), transparent 65%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(167,139,250,.1), transparent 55%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Status pill */}
          {/* <div className="hero-enter mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-100/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span>Open to opportunities</span>
          </div> */}

          {/* Profile */}
          <div className="hero-enter mb-8">
            <div className="hero-profile group relative mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52">
              {/* Outer glow */}
              <div
                className="absolute -inset-3 rounded-full opacity-70 motion-reduce:opacity-50"
                style={{
                  background:
                    'radial-gradient(circle, rgba(34,211,238,.35) 0%, rgba(167,139,250,.2) 45%, transparent 70%)',
                }}
              />

              {/* Gradient ring */}
              <div
                className="absolute inset-0 rounded-full p-[3px]"
                style={{
                  background:
                    'linear-gradient(135deg, #22d3ee 0%, #a78bfa 45%, #ec4899 75%, #22d3ee 100%)',
                }}
              >
                <div className="h-full w-full rounded-full bg-[#0a0a12] p-[3px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,.45),0_0_0_1px_rgba(255,255,255,.08)_inset]">
                    <Image
                      src="/profile.jpg"
                      alt="Mahesh Shinde — Full-Stack Developer"
                      width={208}
                      height={208}
                      priority
                      className="h-full w-full object-cover object-[center_18%] scale-[1.02] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Soft top highlight */}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-black/25" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="hero-enter-delay-1 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                Mahesh Shinde
              </span>
            </h1>
            <p className="mt-4 text-base text-white/75 sm:text-lg md:text-xl md:leading-relaxed">
              Full-Stack Developer crafting{' '}
              <span className="text-cyan-300/95">scalable web apps</span>,{' '}
              <span className="text-purple-300/95">Android experiences</span>, and{' '}
              <span className="text-pink-300/95">robust backends</span> with Java &amp; Spring Boot.
            </p>
          </div>

          {/* Tech chips */}
          <div className="hero-enter-delay-1 mt-8 flex flex-wrap justify-center gap-2.5">
            {techChips.map((chip) => (
              <Badge
                key={chip}
                variant="outline"
                className="rounded-full border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/85 sm:text-sm"
              >
                {chip}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-enter-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              onClick={onContact}
              size="lg"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-purple-500 hover:shadow-cyan-500/30"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/25 bg-white/5 px-8 text-white hover:border-white/40 hover:bg-white/10"
              onClick={() => window.open(RESUME_URL, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Social */}
          <div className="hero-enter-delay-2 mt-8 flex items-center justify-center gap-3">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,.15)]"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={onScrollDown}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70 motion-reduce:animate-none motion-safe:animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}
