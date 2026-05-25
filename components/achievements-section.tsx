"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import Reveal from "@/components/reveal"

type Props = {
  solvedProblemCount?: number
}

export default function AchievementsSection({ solvedProblemCount }: Props) {
  const achievements = [
    { title: "LeetCode 50 Days Streak 2024", platform: "LeetCode" },
    { title: "LeetCode 50 Days Streak 2025", platform: "LeetCode" },
    { title: "LeetCode 100 Days Streak 2025", platform: "LeetCode" },
    {
      title: solvedProblemCount
        ? `LeetCode ${solvedProblemCount} + Problems Solved`
        : "298+ Problems Solved",
      platform: "LeetCode",
    },
    { title: "Google Cloud Skill Boost 28 Badges", platform: "Google Cloud" },
    { title: "Java Basics Certification", platform: "HackerRank" },
    { title: "React Basics Certification", platform: "HackerRank" },
    { title: "Full Stack Bootcamp 6 Weeks", platform: "GeeksforGeeks" },
    { title: "UX Design Foundations", platform: "Coursera" },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((a) => (
        <Reveal key={a.title}>
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
            <CardContent className="p-6 text-center">
              <Award className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
              <div className="text-cyan-200 font-semibold">{a.title}</div>
              <div className="text-white/60 text-sm">{a.platform}</div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
