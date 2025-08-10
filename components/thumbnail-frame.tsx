"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  src?: string
  alt?: string
  className?: string
  children?: React.ReactNode
}

export default function ThumbnailFrame({ src, alt = "Project thumbnail", className, children }: Props) {
  const fallback = "/placeholder.svg?height=720&width=1280"

  return (
    <div
      className={cn(
        "relative aspect-video rounded-xl overflow-hidden group",
        "bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(34,211,238,.12),transparent_60%),radial-gradient(1000px_500px_at_110%_10%,rgba(167,139,250,.12),transparent_55%),linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.3))]",
        "ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,.6),inset_0_0_0_1px_rgba(255,255,255,.04)]",
        "transition-transform duration-300 ease-out will-change-transform",
        "hover:-translate-y-0.5",
        className,
      )}
    >
      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute -inset-2 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 bg-[conic-gradient(from_0deg,rgba(34,211,238,.15),rgba(167,139,250,.12),rgba(236,72,153,.12),rgba(34,211,238,.15))]" />

      {/* Browser-like chrome */}
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70 border border-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 border border-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70 border border-white/20" />
        </div>
      </div>

      {/* Image */}
      <img
        src={src || fallback}
        alt={alt}
        className={cn(
          "absolute inset-2 top-8 rounded-lg object-cover w-[calc(100%-1rem)] h-[calc(100%-1.5rem)]",
          "border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]",
          "transition-transform duration-500 group-hover:scale-[1.03]",
        )}
      />

      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,.14)_0%,transparent_20%,transparent_80%,rgba(255,255,255,.1)_100%)] opacity-[.15] group-hover:opacity-30 transition-opacity" />

      {/* Slot for badges/overlays */}
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
