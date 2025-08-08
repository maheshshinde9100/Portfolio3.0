'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Github, ExternalLink, Filter } from 'lucide-react'
import type { Project } from '@/types/project'

type Props = {
  initialProjects?: Project[]
  initialShowCount?: number
}

const categories = ['all', 'personal', 'hackathon', 'open-source', 'client'] as const

export default function ProjectsGallery({
  initialProjects = [],
  initialShowCount = 6,
}: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('all')
  const [tech, setTech] = useState<string>('all')
  const [showCount, setShowCount] = useState(initialShowCount)

  const allTech = useMemo(() => {
    const t = new Set<string>()
    initialProjects.forEach((p) => p.tech?.forEach((x) => t.add(x)))
    return ['all', ...Array.from(t).sort()]
  }, [initialProjects])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return initialProjects.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (tech !== 'all' && !(p.tech || []).map((t) => t.toLowerCase()).includes(tech.toLowerCase())) return false
      if (!q) return true
      const hay = `${p.title} ${p.description} ${(p.tech || []).join(' ')}`.toLowerCase()
      return hay.includes(q)
    })
  }, [initialProjects, category, tech, query])

  const toShow = filtered.slice(0, showCount)

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((c) => {
            const active = category === c
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm uppercase tracking-wide transition-all border ${
                  active
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/40 text-cyan-200'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                {c.replace('-', ' ')}
              </button>
            )
          })}
        </div>

        <div className="flex gap-2">
          <div className="relative w-full md:w-72">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="bg-black/40 border-white/15 text-white placeholder:text-white/60"
              aria-label="Search projects"
            />
            <div className="pointer-events-none absolute inset-0 rounded-md blur-md opacity-0 focus-within:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,.22),transparent_40%)]" />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block text-white/60 text-sm">
              <Filter className="w-4 h-4 inline mr-1" />
              Tech
            </div>
            <Select value={tech} onValueChange={setTech}>
              <SelectTrigger className="w-36 bg-black/40 border-white/15 text-white">
                <SelectValue placeholder="Tech" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 text-white border-white/10 backdrop-blur-md">
                {allTech.map((t) => (
                  <SelectItem key={t} value={t} className="capitalize">
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {toShow.map((p, idx) => (
          <motion.div
            key={p.id || p.title + idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="group"
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all h-full overflow-hidden">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={p.image || "/placeholder.svg?height=220&width=420&query=futuristic+project+screenshot+placeholder"}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {p.award && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-yellow-500/20 border-yellow-400/50 text-yellow-300">🏆 {p.award}</Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="border-white/20 text-white/85 capitalize">
                    {p.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-cyan-300">{p.title}</CardTitle>
                <CardDescription className="text-white/80">{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(p.tech || []).map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="border-white/20 text-white/85 hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors"
                      onClick={() => window.open(p.github!, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {p.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-400/40 text-purple-300 hover:bg-purple-500 hover:text-black transition-colors"
                      onClick={() => window.open(p.demo!, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {filtered.length > showCount && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => setShowCount((c) => c + 6)}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
          >
            Load more
          </Button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center text-white/70 py-10">
          No projects match your filters.
        </div>
      )}
    </div>
  )
}
