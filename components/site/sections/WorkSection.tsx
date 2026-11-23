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
          lede="A curated sequence — a merged Mastercard library fix, production client platforms, and open source tooling I maintain."
        />
        <WorkGrid />
      </div>
    </section>
  )
}
