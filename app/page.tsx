import Header from '@/components/site/Header'
import Hero from '@/components/site/Hero'
import Reveal from '@/components/site/Reveal'
import Footer from '@/components/site/Footer'
import ProfileSection from '@/components/site/sections/ProfileSection'
import WorkSection from '@/components/site/sections/WorkSection'
import ExperienceSection from '@/components/site/sections/ExperienceSection'
import ToolkitSection from '@/components/site/sections/ToolkitSection'
import AchievementsSection from '@/components/site/sections/AchievementsSection'
import CertificationsSection from '@/components/site/sections/CertificationsSection'
import ContactSection from '@/components/site/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div>
          <ProfileSection />
          <WorkSection />
          <ExperienceSection />
          <ToolkitSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
