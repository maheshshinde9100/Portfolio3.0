/** Static background — no blur animations (scroll-friendly). */
export default function BackgroundFX() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 85% 10%, rgba(34,211,238,.18), transparent 55%), radial-gradient(ellipse 70% 45% at 10% 90%, rgba(167,139,250,.14), transparent 50%), linear-gradient(160deg, #030712 0%, #18091e 45%, #0a0f2a 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
