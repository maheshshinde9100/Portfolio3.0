'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { SectionId } from './sections-config'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Stage({ section, children }: { section: SectionId; children: ReactNode }) {
  return (
    <div className="relative h-full min-h-0 flex-1 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } }}
          exit={{ opacity: 0, y: -4, transition: { duration: 0.12, ease: EASE } }}
          className="no-scrollbar h-full w-full overflow-y-auto overflow-x-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
