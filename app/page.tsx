'use client'

import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import ClickSpark from '@/components/ClickSpark'
import Background from '@/components/portfolio/Background'
import Sidebar from '@/components/portfolio/Sidebar'
import Stage from '@/components/portfolio/Stage'
import AboutSection from '@/components/portfolio/sections/AboutSection'
import WorkSection from '@/components/portfolio/sections/WorkSection'
import ExperienceSection from '@/components/portfolio/sections/ExperienceSection'
import ToolkitSection from '@/components/portfolio/sections/ToolkitSection'
import AchievementsSection from '@/components/portfolio/sections/AchievementsSection'
import CertificationsSection from '@/components/portfolio/sections/CertificationsSection'
import ContactSection from '@/components/portfolio/sections/ContactSection'
import type { SectionId } from '@/components/portfolio/sections-config'

export default function Portfolio() {
  const [active, setActive] = useState<SectionId>('about')

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <ClickSpark
        sparkColor={['#7065f0', '#9fa3fc', '#ebebf4']}
        sparkCount={8}
        sparkRadius={22}
        sparkSize={8}
        duration={520}
        easing="ease-out"
        shape="streak"
        glow={0.6}
        className="h-[100dvh] w-full"
      >
        <Background />
        <div className="flex h-[100dvh] w-full flex-col md:flex-row">
          <Sidebar active={active} onSelect={setActive} />
          <main className="relative min-h-0 flex-1">
            <Stage section={active}>
              {active === 'about' && <AboutSection />}
              {active === 'work' && <WorkSection />}
              {active === 'experience' && <ExperienceSection />}
              {active === 'toolkit' && <ToolkitSection />}
              {active === 'achievements' && <AchievementsSection />}
              {active === 'certifications' && <CertificationsSection />}
              {active === 'contact' && <ContactSection />}
            </Stage>
          </main>
        </div>
      </ClickSpark>
    </MotionConfig>
  )
}
