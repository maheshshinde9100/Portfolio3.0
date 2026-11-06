'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { SectionId } from './sections-config'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Stage({ section, children }: { section: SectionId; children: ReactNode }) {
  return (
    <div className="scene-3d relative h-full min-h-0 flex-1 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 16, rotateY: -6 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          exit={{ opacity: 0, y: -10, rotateY: 4 }}
          transition={{ duration: 0.34, ease: EASE }}
          className="preserve-3d no-scrollbar h-full w-full overflow-y-auto overflow-x-hidden [will-change:transform,opacity]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
