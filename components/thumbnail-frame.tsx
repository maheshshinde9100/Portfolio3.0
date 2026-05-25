"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
type Props = {
  src?: string
  alt?: string
  className?: string
  children?: React.ReactNode
  priority?: boolean
}

export default function ThumbnailFrame({
  src,
  alt = "Project thumbnail",
  className,
  children,
  priority = false,
}: Props) {
  const fallback = "/placeholder.svg?height=720&width=1280"
  const imageSrc = src || fallback

  return (
    <div
      className={cn(
        "relative aspect-video rounded-xl overflow-hidden",
        "bg-[linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.25))]",
        "ring-1 ring-white/10",
        className,
      )}
    >
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70 border border-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 border border-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70 border border-white/20" />
        </div>
      </div>

      <div className="absolute inset-2 top-8 rounded-lg overflow-hidden border border-white/10">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading={priority ? undefined : "lazy"}
          priority={priority}
          unoptimized={false}
        />
      </div>

      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
