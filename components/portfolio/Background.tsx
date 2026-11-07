'use client'

export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* soft periwinkle ambience, kept as cheap radial gradients (no blur filters) */}
      <div
        className="absolute -right-40 -top-40 h-[46rem] w-[46rem] animate-drift"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in srgb, var(--accent) 22%, transparent), transparent)',
        }}
      />
      <div
        className="absolute -bottom-56 -left-40 h-[42rem] w-[42rem] animate-drift [animation-delay:-12s]"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in srgb, var(--accent) 14%, transparent), transparent)',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in srgb, var(--accent-3) 8%, transparent), transparent)',
        }}
      />

      {/* masked grid */}
      <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      {/* film grain keeps the flat canvas from reading as plastic */}
      <div className="grain absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  )
}
