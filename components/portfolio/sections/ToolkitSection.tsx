'use client'

import { motion } from 'framer-motion'
import { toolkit } from '@/data/profile'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ToolkitSection() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-[1040px] flex-col justify-center px-6 py-10 md:px-10 md:py-14">
      <header className="mb-10">
        <p className="eyebrow mb-4">04 / Toolkit</p>
        <h2 className="max-w-[620px] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-4xl xl:text-[2.9rem]">
          Tools I reach for. Sharpened by use.
        </h2>
        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-muted">
          A working set across backend services, frontend systems, cloud, and connected hardware.
        </p>
      </header>

      <div className="grid gap-x-14 gap-y-9 border-t border-line pt-9 sm:grid-cols-2">
        {toolkit.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
          >
            <h3 className="text-[15px] font-medium tracking-[-0.01em] text-ink">{group.title}</h3>
            <p className="mt-1 text-xs text-muted">{group.note}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {group.items.map((item, itemIndex) => (
                <span key={item}>
                  <span className="text-ink/85">{item}</span>
                  {itemIndex < group.items.length - 1 && (
                    <span className="text-line-strong"> · </span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
