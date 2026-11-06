'use client'

import { useTheme } from 'next-themes'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import BlurText from '@/components/BlurText'
import CountUp from '@/components/CountUp'
import GlareHover from '@/components/GlareHover'
import Magnet from '@/components/Magnet'
import ProfileCard from '@/components/ProfileCard'
import SplitText from '@/components/SplitText'
import StarBorder from '@/components/StarBorder'
import { profile, stats } from '@/data/profile'

const floatingChips = [
  { label: 'Spring Boot', className: '-left-6 top-10' },
  { label: 'React', className: '-right-4 top-28' },
  { label: 'PostgreSQL', className: 'bottom-16 -left-8' },
]

export default function AboutSection() {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme !== 'light'

  return (
    <section className="scene-3d mx-auto flex min-h-full w-full max-w-[1200px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">01 / About</p>

          <SplitText
            text={profile.tagline}
            tag="h1"
            trigger="load"
            effect="rise"
            splitType="words"
            delay={70}
            duration={0.8}
            textAlign="left"
            className="max-w-[620px] pb-1 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl xl:text-6xl"
          />

          <div className="mt-5 max-w-[560px]">
            <BlurText
              text={profile.intro}
              animateBy="words"
              delay={22}
              direction="bottom"
              trigger="load"
              className="text-base leading-7 text-muted"
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Magnet padding={14} magnetStrength={8} tilt={6}>
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
                  Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
                </span>
              </StarBorder>
            </Magnet>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/60 hover:text-ink active:translate-y-px"
            >
              <Download className="h-4 w-4" /> Resume
            </a>

            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </span>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <GlareHover
                key={stat.label}
                width="100%"
                height="100%"
                background="color-mix(in srgb, var(--surface) 88%, transparent)"
                borderColor="var(--line)"
                borderRadius="14px"
                glareColor={dark ? '#9fa3fc' : '#7065f0'}
                glareOpacity={0.3}
                glareAngle={-30}
                variant="streak"
                intro={index === 0}
                transitionDuration={700}
              >
                <div className="w-full px-4 py-4 text-left">
                  <p className="font-mono text-2xl font-semibold text-accent">
                    <CountUp to={stat.value} duration={1.4} trigger="load" />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs leading-4 text-muted">{stat.label}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>

        <div className="scene-3d relative mx-auto flex w-full max-w-[360px] items-center justify-center pt-6 lg:pt-0">
          {floatingChips.map((chip) => (
            <span
              key={chip.label}
              className={`animate-float pointer-events-none absolute z-10 hidden rounded-lg border border-line bg-surface/85 px-3 py-1.5 font-mono text-[11px] text-accent-2 shadow-[0_18px_40px_-26px_var(--glow)] backdrop-blur-md lg:block ${chip.className}`}
            >
              {chip.label}
            </span>
          ))}

          <ProfileCard
            avatarUrl="/profile.jpg"
            name={profile.name}
            title={profile.role}
            handle="maheshshinde9100"
            status={profile.status}
            statusColor="#7065f0"
            contactText="Get in touch"
            onContactClick={() => {
              window.location.href = `mailto:${profile.email}`
            }}
            theme={dark ? 'dark' : 'light'}
            backdropColor={dark ? '#191919' : '#f2f2f7'}
            radius={18}
            enableTilt
            tiltStrength={6}
            parallax={2}
          />
        </div>
      </div>
    </section>
  )
}
