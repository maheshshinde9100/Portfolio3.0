'use client'

import { useEffect, useState } from 'react'
import {
  getLeetcodeInfo,
  getLeetcodeStats,
  type LeetCodeProfile,
  type LeetCodeStats,
} from '@/app/leetcode'

/** Fetches LeetCode data only when the about section enters the viewport. */
export function useLeetcodeData(sectionId = 'about') {
  const [leetcodeUserInfo, setLeetcodeUserInfo] = useState<LeetCodeProfile | null>(null)
  const [leetcodeStatsInfo, setLeetcodeStatsInfo] = useState<LeetCodeStats | null>(null)

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    let fetched = false

    const load = () => {
      if (fetched) return
      fetched = true
      void Promise.all([getLeetcodeInfo(), getLeetcodeStats()]).then(([user, stats]) => {
        if (user) setLeetcodeUserInfo(user)
        if (stats) setLeetcodeStatsInfo(stats)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load()
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionId])

  return { leetcodeUserInfo, leetcodeStatsInfo }
}
