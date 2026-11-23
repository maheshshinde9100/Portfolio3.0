import SectionHead from '@/components/site/SectionHead'
import MiniProjects from '@/components/site/MiniProjects'

export default function MiniProjectsSection() {
  return (
    <section id="mini-projects" className="section">
      <div className="shell">
        <SectionHead
          index="03"
          label="Mini projects"
          title="The rest of the archive."
          lede="Earlier builds, coursework, and experiments, listed the way GitHub lists them. Every public repository opens straight to its source."
        />
        <MiniProjects />
      </div>
    </section>
  )
}
