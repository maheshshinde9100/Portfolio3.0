import type { ReactNode } from 'react'

export default function SectionHead({
  index,
  label,
  title,
  lede,
}: {
  index: string
  label: string
  title: ReactNode
  lede?: ReactNode
}) {
  return (
    <header
      data-reveal
      className="grid gap-4 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12"
    >
      <p className="label h-fit pt-1.5">
        <span className="tabular text-faint">{index}</span>
        <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
        {label}
      </p>
      <div>
        <h2 className="h2 max-w-[26ch]">{title}</h2>
        {lede && <p className="lede mt-4">{lede}</p>}
      </div>
    </header>
  )
}
