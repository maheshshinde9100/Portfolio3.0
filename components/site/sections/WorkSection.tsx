import SectionHead from '@/components/site/SectionHead'
import WorkGrid from '@/components/site/WorkGrid'

export default function WorkSection() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHead
          index="02"
          label="Work"
          title="Shipped, live, and on GitHub."
          lede="Client deliveries, developer tools, and open source packages. Every card links to a live build or the source."
        />
        <WorkGrid />
      </div>
    </section>
  )
}
