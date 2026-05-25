"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Trim values
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    // Validations
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill out all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)
    
    try {
      const emailAddress = "contact.shindemahesh2112@gmail.com"
      const subject = encodeURIComponent(`Portfolio Inquiry from ${trimmedName}`)
      const body = encodeURIComponent(`${trimmedMessage}\n\nFrom: ${trimmedName}\nEmail: ${trimmedEmail}`)
      
      // Copy to clipboard fallback
      await navigator.clipboard.writeText(emailAddress)

      // Open mailto in new tab/window
      const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`
      window.open(mailtoUrl, "_blank")

      toast.success("Opening your email client!", {
        description: "Email address has also been copied to your clipboard as a backup.",
        duration: 6000,
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error("Failed to copy email to clipboard:", err)
      toast.error("Something went wrong, but you can email directly at contact.shindemahesh2112@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Name</label>
        <input
          className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all text-white"
          placeholder="Your name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          aria-label="Your name"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Email</label>
        <input
          type="email"
          className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all text-white"
          placeholder="you@example.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          aria-label="Your email"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Message</label>
        <textarea
          className="w-full min-h-[120px] rounded-lg bg-black/40 border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all text-white"
          placeholder="What would you like to build?"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          aria-label="Your message"
          required
          disabled={isSubmitting}
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 font-semibold"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}
