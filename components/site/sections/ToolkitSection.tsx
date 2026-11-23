import type { CSSProperties } from 'react'
import SectionHead from '@/components/site/SectionHead'
import { toolkit } from '@/data/profile'

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="section">
      <div className="shell">
        <SectionHead
          index="05"
          label="Toolkit"
          title="What I reach for."
          lede="A working set across backend services, frontend systems, cloud, and connected hardware."
        />

        <div className="mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2">
          {toolkit.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index, 4) * 50}ms` } as CSSProperties}
              className="border-t border-line pt-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[15px] font-medium">{group.title}</h3>
                <span className="text-right text-[11px] text-faint">{group.note}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-7 text-muted">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
