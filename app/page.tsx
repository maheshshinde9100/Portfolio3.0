'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Briefcase, Award, ChevronDown, Download, Code2 } from 'lucide-react'
import ProjectsGallery from '@/components/projects-gallery'
import { allProjects } from '@/data/projects'

type Skill = { name: string; level: number; from: string; to: string }
type Experience = { title: string; company: string; duration: string; description: string; type: string }
type Project = { title: string; description: string; tech: string[]; github: string; demo?: string | null; image: string }

export default function Portfolio() {
const [activeSection, setActiveSection] = useState('hero')
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

const skills: Skill[] = [
  { name: 'HTML', level: 95, from: '#22d3ee', to: '#a78bfa' },
  { name: 'CSS', level: 90, from: '#a78bfa', to: '#f472b6' },
  { name: 'JavaScript', level: 85, from: '#f59e0b', to: '#f472b6' },
  { name: 'ReactJS', level: 80, from: '#06b6d4', to: '#7c3aed' },
  { name: 'Java', level: 90, from: '#ef4444', to: '#f59e0b' },
  { name: 'C++', level: 85, from: '#8b5cf6', to: '#ec4899' },
  { name: 'SQL', level: 85, from: '#10b981', to: '#14b8a6' },
  { name: 'Python', level: 80, from: '#22c55e', to: '#06b6d4' },
  { name: 'MongoDB', level: 75, from: '#22c55e', to: '#84cc16' },
  { name: 'Firebase', level: 80, from: '#f59e0b', to: '#ef4444' },
]

const experiences: Experience[] = [
  {
    title: 'Android Application Development',
    company: 'ATJOIN Pvt. Ltd',
    duration: 'June 2023',
    description:
      'Developed and maintained Android apps. Strengthened Java + Android SDK. Hands-on debugging and testing.',
    type: 'Internship',
  },
  {
    title: 'Web Development',
    company: 'CodeClause',
    duration: 'April 2023',
    description:
      'End-to-end web development across frontend and backend. Collaboration and project workflows with HTML/CSS/JS.',
    type: 'Internship',
  },
  {
    title: 'Basics of ML with Python',
    company: 'BeyonDegree Pvt. Ltd',
    duration: 'May 2022',
    description:
      'Foundations of ML with Python. Numpy/Pandas/Matplotlib and essential ML concepts and techniques.',
    type: 'Internship',
  },
]

const achievements = [
  { title: 'LeetCode 50 Day Streak', platform: 'LeetCode' },
  { title: 'LeetCode 100 Problems', platform: 'LeetCode' },
  { title: 'Java Basics Certification', platform: 'HackerRank' },
  { title: 'React Basics Certification', platform: 'HackerRank' },
  { title: 'Full Stack Bootcamp', platform: 'GeeksforGeeks' },
  { title: 'UX Design Foundations', platform: 'Coursera' },
]

useEffect(() => {
  const handleScroll = () => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
    const scrollPosition = window.scrollY + 120
    for (const section of sections) {
      const el = document.getElementById(section)
      if (!el) continue
      const { offsetTop, offsetHeight } = el
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(section)
        break
      }
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Variants
const fadeUp = useMemo(
  () => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    viewport: { once: true, amount: 0.2 },
  }),
  []
)

return (
  <div className="min-h-screen relative bg-gradient-to-br from-gray-950 via-[#18091e] to-[#0a0f2a] text-white antialiased overflow-x-hidden">
    {/* Animated Background FX */}
    <BackgroundFX />

    {/* Navigation */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
          >
            Mahesh.Dev
          </motion.button>

          <div className="hidden md:flex items-center gap-10">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((label) => {
              const id = label.toLowerCase()
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative text-sm uppercase tracking-wider transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-white/70 hover:text-white'
                  }`}
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

    {/* Hero */}
    <section id="hero" className="pt-32 md:pt-40 min-h-screen flex items-center justify-center relative">
      <motion.div style={{ y }} className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          {/* Replace icon with your profile image */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-[conic-gradient(at_50%_50%,#22d3ee,45deg,#a78bfa,225deg,#ec4899,360deg)] animate-[spin_10s_linear_infinite]" />
            {/* Progress ring decorative */}
            <div
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: 'conic-gradient(#22d3ee 210deg, rgba(255,255,255,0.12) 0deg)',
              }}
            >
              <div className="w-full h-full rounded-full bg-black/70 backdrop-blur-xl p-1">
                <img
                  src="/profile.png"
                  alt="Mahesh Shinde profile photo"
                  className="w-full h-full rounded-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {['ReactJS', 'Java', 'Spring Boot', 'Android', 'Google Cloud'].map((chip) => (
            <Badge
              key={chip}
              variant="outline"
              className="border-white/20 text-white/90 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors"
            >
              {chip}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() =>
              window.open(
                'https://maheshshinde9100.hackerresume.io/cdbe784f-7325-4ca3-a047-9a2c4ec314cc',
                '_blank'
              )
            }
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center gap-6"
          transition={{ delay: 0.35 }}
        >
          {[
            { Icon: Github, url: 'https://github.com/maheshshinde9100' },
            { Icon: Linkedin, url: 'https://www.linkedin.com/in/maheshshinde9100' },
            { Icon: Mail, url: 'mailto:contact.shindemahesh2112@gmail.com' },
          ].map(({ Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/15 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <Icon className="w-6 h-6 transition-colors group-hover:text-cyan-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>

    {/* About */}
    <section id="about" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Passionate Full Stack Developer crafting responsive, user-centric web and mobile experiences.
            I enjoy building performant interfaces and solving complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all">
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
                  <Stat number="167+" label="LeetCode Days" highlight="text-purple-300" />
                  <Stat number="100+" label="Problems Solved" highlight="text-cyan-300" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="space-y-5"
          >
            <InfoRow Icon={MapPin} label="Location" value="Yeola, Maharashtra, India" accent="text-cyan-300" />
            <InfoRow Icon={Mail} label="Email" value="contact.shindemahesh2112@gmail.com" accent="text-purple-300" />
            <InfoRow Icon={Phone} label="Phone" value="+91 9529544681" accent="text-pink-300" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Skills - Futuristic Orbs */}
    <section id="skills" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills Matrix
          </h2>
          <p className="text-white/70">Futuristic radial orbs with animated glow and conic progress.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="group [perspective:1000px]"
            >
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_60px_-10px_rgba(167,139,250,.45)] group-hover:-translate-y-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Conic ring progress */}
                <div
                  className="absolute -inset-[2px] rounded-2xl"
                  style={{
                    background: `conic-gradient(${s.from} ${s.level * 3.6}deg, rgba(255,255,255,0.06) 0deg)`,
                    filter: 'blur(10px)',
                    opacity: 0.7,
                  }}
                />
                {/* Inner panel */}
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-black/60 to-black/40 border border-white/10" />
                {/* Glow blobs */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.5),transparent_60%)] blur-xl" />
                <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(167,139,250,.5),transparent_60%)] blur-xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div
                    className="mb-2 text-3xl font-extrabold tracking-tight"
                    style={{
                      background: `linear-gradient(90deg, ${s.from}, ${s.to})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {s.level}%
                  </div>
                  <div className="text-white/85 font-semibold">{s.name}</div>
                  <div
                    className="mt-2 h-px w-12"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${s.from}, ${s.to}, transparent)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Experience - Animated Timeline */}
    <section id="experience" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-white/70">Alternating glass cards along a neon spine.</p>
        </motion.div>

        <div className="relative">
          {/* Center spine */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const alignRight = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26, x: alignRight ? 24 : -24 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 items-stretch`}
                >
                  {/* Dot */}
                  <div
                    className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_28px_6px_rgba(34,211,238,.4)]`}
                  />

                  {/* Spacer for alignment */}
                  <div className={`${alignRight ? 'md:col-start-1' : 'md:col-start-2'}`} />

                  {/* Card */}
                  <Card
                    className={`${
                      alignRight ? 'md:col-start-2' : 'md:col-start-1'
                    } bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all group`}
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-cyan-300">{exp.title}</CardTitle>
                          <CardDescription className="text-white/70 flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.company} • {exp.type}
                          </CardDescription>
                        </div>
                        <div className="text-purple-300">{exp.duration}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/85 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects & Hackathons
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my personal builds and hackathon projects. Use filters to narrow by category or tech.
          </p>
        </motion.div>

        <ProjectsGallery initialProjects={allProjects} initialShowCount={6} />
      </div>
    </section>

    {/* Achievements (compact) */}
    <section id="achievements" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Achievements & Certifications
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <div className="text-cyan-200 font-semibold">{a.title}</div>
                  <div className="text-white/60 text-sm">{a.platform}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact - Enhanced glass form */}
    <section id="contact" className="scroll-mt-32 md:scroll-mt-40 py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form (frontend only) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 opacity-60 blur-2xl bg-[conic-gradient(at_50%_50%,#22d3ee,#a78bfa,#ec4899,#22d3ee)]" />
              </div>
              <CardHeader>
                <CardTitle className="text-cyan-300">Send a message</CardTitle>
                <CardDescription className="text-white/70">
                  This form builds a mailto link—no backend required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick contact links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all">
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

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all">
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

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all">
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
          </motion.div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-8 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/60">© 2025 Mahesh Shinde. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
)
}

/* ------------------------ Subcomponents ------------------------ */

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
Icon: any
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

function ContactForm() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!name || !email || !message) {
    alert('Please fill out all fields.')
    return
  }
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
  window.location.href = `mailto:contact.shindemahesh2112@gmail.com?subject=${subject}&body=${body}`
}

return (
  <form onSubmit={handleSubmit} className="grid gap-4">
    <div className="grid gap-2">
      <label className="text-sm text-white/70">Name</label>
      <div className="relative">
        <input
          className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Your name"
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg blur-md opacity-0 focus-within:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,.35),transparent_40%)]" />
      </div>
    </div>
    <div className="grid gap-2">
      <label className="text-sm text-white/70">Email</label>
      <div className="relative">
        <input
          type="email"
          className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your email"
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg blur-md opacity-0 focus-within:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,.35),transparent_40%)]" />
      </div>
    </div>
    <div className="grid gap-2">
      <label className="text-sm text-white/70">Message</label>
      <div className="relative">
        <textarea
          className="w-full min-h-[120px] rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all"
          placeholder="What would you like to build?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Your message"
        />
        <div className="pointer-events-none absolute inset-0 rounded-lg blur-md opacity-0 focus-within:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,.35),transparent_40%)]" />
      </div>
    </div>
    <Button
      type="submit"
      className="mt-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
    >
      Send
    </Button>
  </form>
)
}

function BackgroundFX() {
return (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Aurora blobs */}
    <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-cyan-500/40 rounded-full mix-blend-screen blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
    <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] bg-fuchsia-500/30 rounded-full mix-blend-screen blur-3xl animate-[pulse_10s_ease-in-out_infinite_2s]" />
    <div className="absolute top-32 left-24 w-[28rem] h-[28rem] bg-pink-500/20 rounded-full mix-blend-screen blur-3xl animate-[pulse_12s_ease-in-out_infinite_1s]" />

    {/* Neon grid overlay */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 40px 40px',
        maskImage:
          'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,.9), rgba(0,0,0,0) 70%)',
      }}
    />
    {/* Scanline shimmer */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0px,transparent_3px,rgba(255,255,255,0.02)_4px,transparent_5px)]" />
    {/* Twinkling particles */}
    <div className="absolute inset-0 [background-image:radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,.2),transparent),radial-gradient(2px_2px_at_80%_60%,rgba(255,255,255,.18),transparent),radial-gradient(2px_2px_at_40%_80%,rgba(255,255,255,.14),transparent)] animate-[pulse_6s_ease-in-out_infinite]" />
  </div>
)
}
