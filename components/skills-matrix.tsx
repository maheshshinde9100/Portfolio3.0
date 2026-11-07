"use client"

import Reveal from "@/components/reveal"

type Skill = {
  name: string
  level: number
  from: string
  to: string
}

const skills: Skill[] = [
  { name: "Java", level: 91, from: "#ef4444", to: "#f97316" },
  { name: "Spring Boot", level: 92, from: "#16a34a", to: "#22c55e" },
  { name: "Hibernate", level: 90, from: "#84cc16", to: "#a3e635" },
  { name: "JavaScript", level: 85, from: "#f59e0b", to: "#eab308" },
  { name: "React.js", level: 80, from: "#0ea5e9", to: "#7c3aed" },
  { name: "Tailwind CSS", level: 80, from: "#06b6d4", to: "#22d3ee" },
  { name: "Node.js", level: 70, from: "#10b981", to: "#14b8a6" },
  { name: "MongoDB", level: 89, from: "#22d3ee", to: "#818cf8" },
  { name: "Redis", level: 60, from: "#f43f5e", to: "#fb7185" },
  { name: "Docker", level: 65, from: "#2563eb", to: "#1d4ed8" },
  { name: "Git", level: 90, from: "#f43f5e", to: "#dc2626" },
  { name: "Postman", level: 95, from: "#f97316", to: "#f59e0b" },
  { name: "Google Cloud", level: 72, from: "#4285F4", to: "#34A853" },
  { name: "Maven", level: 75, from: "#FF5722", to: "#FF9800" },
  { name: "Android Studio", level: 86, from: "#3DDC84", to: "#00C853" },
]

export default function SkillsMatrix() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
      {skills.map((s) => (
        <Reveal key={s.name} className="group w-full flex justify-center">
          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden transition-transform duration-200 group-hover:-translate-y-0.5">
            <div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              style={{
                background: `conic-gradient(${s.from} ${s.level * 3.6}deg, rgba(255,255,255,0.06) 0deg)`,
                opacity: 0.85,
              }}
            />
            <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-black/90 to-black/80 border border-white/10" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <div
                className="mb-2 text-3xl font-extrabold tracking-tight"
                style={{
                  background: `linear-gradient(90deg, ${s.from}, ${s.to})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.level}%
              </div>
              <div className="text-white/85 font-semibold text-sm md:text-base">{s.name}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
