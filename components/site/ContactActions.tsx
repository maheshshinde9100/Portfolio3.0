'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

export default function ContactActions() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={`mailto:${profile.email}`} className="btn btn-primary">
        <Mail className="h-4 w-4" aria-hidden="true" />
        Email me
      </a>
      <button type="button" onClick={copyEmail} className="btn btn-ghost" aria-live="polite">
        {copied ? (
          <Check className="h-4 w-4 text-live" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? 'Copied' : 'Copy address'}
      </button>
    </div>
  )
}
