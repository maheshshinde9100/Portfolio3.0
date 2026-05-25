'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, ChevronDown, Download, Code2 } from 'lucide-react'
import Image from 'next/image'
import { allProjects } from '@/data/projects'
import BackgroundFX from '@/components/background-fx'
import Reveal from '@/components/reveal'
import { useLeetcodeData } from '@/hooks/use-leetcode-data'
import SkillsMatrix from '@/components/skills-matrix'
import ExperienceTimeline from '@/components/experience-timeline'
import ProjectsGallery from '@/components/projects-gallery'
import AchievementsSection from '@/components/achievements-section'
import ContactForm from '@/components/contact-form'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const { leetcodeUserInfo, leetcodeStatsInfo } = useLeetcodeData('about')

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-950 via-[#18091e] to-[#0a0f2a] text-white antialiased overflow-x-hidden">
      <BackgroundFX />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
            >
              Mahesh.Dev
            </button>

            <div className="hidden md:flex items-center gap-10">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((label) => {
                const id = label.toLowerCase()
                const isActive = activeSection === id
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className={`relative text-sm uppercase tracking-wider transition-colors ${isActive ? 'text-cyan-400' : 'text-white/70 hover:text-white'}`}
                  >
                    <span className="relative z-10">{label}</span>
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 md:pt-35 min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-6">
          <div className="hero-enter mb-10">
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full pointer-events-none z-10 motion-safe:opacity-90 motion-reduce:opacity-70"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(34,211,238,.85), rgba(167,139,250,.85), rgba(236,72,153,.85), rgba(34,211,238,.85))',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), #000 0)',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), #000 0)',
                }}
              />
              <div className="absolute inset-0 rounded-full p-1 bg-black/80">
                <Image
                  src="/profile.jpg"
                  alt="Mahesh Shinde profile photo"
                  width={176}
                  height={176}
                  priority
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mahesh Shinde
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80">
              Full-Stack Developer • Android Developer • Java Developer
            </p>
          </div>

          <div className="hero-enter-delay-1 flex flex-wrap justify-center gap-4 mb-10">
            {['ReactJS', 'Java', 'Spring Boot', 'Android', 'Google Cloud'].map((chip) => (
              <Badge
                key={chip}
                variant="outline"
                className="border-white/20 text-white/90 bg-white/5 hover:bg-white/10 transition-colors"
              >
                {chip}
              </Badge>
            ))}
          </div>

          <div className="hero-enter-delay-2 flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/190ngRUJrSDnAvsPEN3Jy_t-JiI8POi8W/view?usp=drive_link',
                  '_blank'
                )
              }
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          <div className="hero-enter-delay-2 flex justify-center gap-6">
            {[
              { Icon: Github, url: 'https://github.com/maheshshinde9100' },
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/maheshshinde9100' },
              { Icon: Mail, url: 'mailto:contact.shindemahesh2112@gmail.com' },
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-transform"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce motion-reduce:animate-none">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      <section id="about" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Passionate Full Stack Developer crafting responsive, user-centric web and mobile experiences.
              I enjoy building performant interfaces and solving complex problems.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-8 space-y-6">
                  <p className="text-white/85 leading-relaxed">
                    I specialize in React, Spring Boot and MongoDB, with strong Java and Android experience. My journey
                    started in college and evolved through internships and hands-on projects.
                  </p>
                  <p className="text-white/85 leading-relaxed">
                    I also sharpen my DSA skills on LeetCode and GeeksforGeeks which helps me think algorithmically and
                    build efficient solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {leetcodeStatsInfo?.totalSubmissionNum?.[0] ? (
                      <Stat
                        number={`${leetcodeStatsInfo.totalSubmissionNum[0].submissions}+`}
                        label="LeetCode Submissions"
                        highlight="text-cyan-300"
                      />
                    ) : (
                      <Stat number="644+" label="LeetCode Submissions" highlight="text-purple-300" />
                    )}
                    {leetcodeStatsInfo ? (
                      <Stat
                        number={`${leetcodeStatsInfo.solvedProblem}+`}
                        label="Problems Solved"
                        highlight="text-cyan-300"
                      />
                    ) : (
                      <Stat number="298+" label="Problems Solved" highlight="text-cyan-300" />
                    )}
                    {leetcodeUserInfo && (
                      <>
                        <Stat
                          number={`${leetcodeUserInfo.ranking}`}
                          label="LeetCode Ranking"
                          highlight="text-yellow-300"
                        />
                        <Stat
                          number={`${leetcodeUserInfo.reputation}`}
                          label="Reputation"
                          highlight="text-pink-300"
                        />
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal className="space-y-5">
              <InfoRow Icon={MapPin} label="Location" value="Yeola, Maharashtra, India" accent="text-cyan-300" />
              <InfoRow Icon={Mail} label="Email" value="contact.shindemahesh2112@gmail.com" accent="text-purple-300" />
              <InfoRow Icon={Phone} label="Phone" value="+91 9529544681" accent="text-pink-300" />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills Matrix
            </h2>
            <p className="text-white/70">Core technologies I use to build full-stack products.</p>
          </Reveal>
          <SkillsMatrix />
        </div>
      </section>

      <section id="experience" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience Timeline
            </h2>
            <p className="text-white/70">Internships and hands-on industry experience.</p>
          </Reveal>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="projects" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects & Hackathons
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore my personal builds and hackathon projects. Use filters to narrow by category or tech.
            </p>
          </Reveal>
          <ProjectsGallery initialProjects={allProjects} initialShowCount={6} />
        </div>
      </section>

      <section id="achievements" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-10">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Achievements & Certifications
            </h3>
          </Reveal>
          <AchievementsSection solvedProblemCount={leetcodeStatsInfo?.solvedProblem} />
        </div>
      </section>

      <section id="contact" className="perf-section scroll-mt-32 md:scroll-mt-40 py-20 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Reach out for collaborations, opportunities, or just to say hello.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Reveal>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Send a message</CardTitle>
                  <CardDescription className="text-white/70">
                    This form builds a mailto link with reliable copy fallbacks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </Reveal>

            <Reveal className="space-y-6">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="w-6 h-6 text-cyan-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-300">Email</h3>
                      <p className="text-white/85">contact.shindemahesh2112@gmail.com</p>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    onClick={() => window.open('mailto:contact.shindemahesh2112@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-6 h-6 text-purple-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-purple-300">Phone</h3>
                      <p className="text-white/85">+91 9529544681</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-400/40 text-purple-300 hover:bg-purple-500 hover:text-black"
                    onClick={() => window.open('tel:+919529544681', '_blank')}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Social</CardTitle>
                  <CardDescription className="text-white/70">
                    Connect on my active platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'GitHub', url: 'https://github.com/maheshshinde9100', icon: Github },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maheshshinde9100', icon: Linkedin },
                    { name: 'Instagram', url: 'https://www.instagram.com/mahi_shinde01/', icon: Instagram },
                    { name: 'LeetCode', url: 'https://leetcode.com/u/code-with-mahesh/', icon: Code2 },
                  ].map((s, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="justify-start border-white/15 text-white/85 hover:bg-white/10"
                      onClick={() => window.open(s.url, '_blank')}
                    >
                      <s.icon className="w-5 h-5 mr-3" />
                      {s.name}
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">© 2026 Mahesh Shinde. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function Stat({ number, label, highlight = 'text-cyan-300' }: { number: string; label: string; highlight?: string }) {
  return (
    <div className="text-center p-5 bg-white/5 rounded-xl border border-white/10">
      <div className={`text-2xl font-extrabold ${highlight}`}>{number}</div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  )
}

function InfoRow({
  Icon,
  label,
  value,
  accent,
}: {
  Icon: React.ElementType
  label: string
  value: string
  accent?: string
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <Icon className={`w-6 h-6 ${accent ?? 'text-cyan-300'}`} />
      <div className="flex flex-col">
        <span className="text-white/60 text-sm">{label}</span>
        <span className="text-white/90 font-medium">{value}</span>
      </div>
    </div>
  )
}
