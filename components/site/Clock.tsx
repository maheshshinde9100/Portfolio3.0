'use client'

import { useEffect, useState } from 'react'

export default function Clock({ className }: { className?: string }) {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    })

    const update = () => setTime(formatter.format(new Date()))
    update()
    const timer = window.setInterval(update, 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <span className={className} aria-label="Local time in Nashik, India">
      {time} IST
    </span>
  )
}
