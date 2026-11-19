import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedRoleCards
 * ------------------
 * A structured grid of glass cards — NOT an arc/fan. Every card keeps its
 * fixed grid slot; only the "active" (focused) card changes, cycling
 * automatically through the grid one by one. The active card gets a
 * brighter glass surface, a slight scale-up and a higher z-index; the
 * rest stay exactly where they are but recede in opacity/brightness.
 *
 * Hovering the grid pauses the auto-cycle; moving away resumes it.
 * Clicking any card (or a progress dot below the grid) jumps focus to
 * it directly. Below `sm`, the same cards render as a horizontally
 * snapping strip so nothing overflows the viewport.
 */

const AUTO_ADVANCE_MS = 2800

export default function AnimatedRoleCards({ items, renderCard, initialIndex = 0 }) {
  const n = items.length
  const [active, setActive] = useState(initialIndex % n)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setActive((current) => (current + 1) % n), AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused, n])

  const card = (item, i) => (
    <motion.div
      key={item.title ?? i}
      layout
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="h-full cursor-pointer"
      onClick={() => setActive(i)}
      role="button"
      tabIndex={0}
      aria-label={`Show ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setActive(i)
      }}
    >
      {renderCard(item, i, i === active)}
    </motion.div>
  )

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* deep ambient glow behind the whole grid, keeps the glass feeling lit */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_50%_35%,rgba(56,189,248,0.14),transparent_72%)] blur-2xl"
      />

      {/* sm+: fixed grid, cards hold their position — only focus travels */}
      <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {items.map((item, i) => card(item, i))}
      </div>

      {/* below sm: horizontally-snapping strip so nothing overflows */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:hidden">
        {items.map((item, i) => (
          <div key={item.title ?? i} className="w-[72vw] shrink-0 snap-center">
            {card(item, i)}
          </div>
        ))}
      </div>

      {/* progress indicator, also clickable */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.title ?? i}
            type="button"
            aria-label={`Go to ${item.title}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-accent-bright' : 'w-1.5 bg-white/20 hover:bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
