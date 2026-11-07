"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import Reveal from "@/components/reveal"

type Experience = {
  title: string
  company: string
  duration: string
  description: string
  type: string
}

const experiences: Experience[] = [
  {
    title: "Backend Developer Intern",
    company: "GolokaIT",
    duration: "Dec 2025 – Mar 2026",
    description:
      "Completed a backend-focused internship building production web applications with Spring Boot, React, and Spring Security. Deployed client projects on Hostinger VPS (Nginx, PM2), including Fund For Bharat.",
    type: "Internship",
  },
  {
    title: "Android Application Development",
    company: "ATJOIN Pvt. Ltd",
    duration: "June 2023",
    description:
      "Developed and maintained Android apps. Strengthened Java + Android SDK. Hands-on debugging and testing.",
    type: "Internship",
  },
  {
    title: "Web Development",
    company: "CodeClause",
    duration: "April 2023",
    description:
      "End-to-end web development across frontend and backend. Collaboration and project workflows with HTML/CSS/JS.",
    type: "Internship",
  },
  {
    title: "Basics of ML with Python",
    company: "BeyonDegree Pvt. Ltd",
    duration: "May 2022",
    description:
      "Foundations of ML with Python. Numpy/Pandas/Matplotlib and essential ML concepts and techniques.",
    type: "Internship",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Center spine */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

      <div className="space-y-10">
        {experiences.map((exp, i) => {
          const alignRight = i % 2 === 0
          return (
            <Reveal
              key={i}
              className="relative grid md:grid-cols-2 gap-6 items-stretch"
            >
              {/* Dot */}
              <div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_28px_6px_rgba(34,211,238,.4)]"
              />

              {/* Spacer for alignment */}
              <div className={`${alignRight ? "md:col-start-1" : "md:col-start-2"}`} />

              {/* Card */}
              <Card
                className={`${
                  alignRight ? "md:col-start-2" : "md:col-start-1"
                } bg-white/5 border-white/10 hover:bg-white/10 transition-colors group`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-cyan-300">{exp.title}</CardTitle>
                      <CardDescription className="text-white/70 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company} • {exp.type}
                      </CardDescription>
                    </div>
                    <div className="text-purple-300">{exp.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/85 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
