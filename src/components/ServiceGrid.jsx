import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceCard from './ServiceCard.jsx'

/**
 * ServiceGrid
 * -----------
 * Featured Services now lives in a fixed 5x2 grid (10 services) at all
 * times — no carousel, no drag, no auto-advance, no click-to-move. The
 * only motion is a one-time entrance: when the section scrolls into
 * view, each card animates in from the center of the grid (scale +
 * fade + an inward-to-outward translate) with a per-card stagger keyed
 * to its distance from center, so cards feel like they're being placed
 * into their final slots one after another, radiating outward. A brief
 * glow rides along with the motion and fades once the card settles.
 * After the entrance finishes, cards are simply static grid children —
 * nothing moves again on subsequent scroll/hover.
 */
export default function ServiceGrid({ services }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-14 w-full max-w-[1180px] lg:mt-16"
    >
      {/* subtle ambient glow behind the grid, matches prior stage glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.10),transparent_70%)] blur-[90px]"
      />

      <div className="relative grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-5">
        {services.map((service, i) => {
          // Distance from the visual center of the final 5x2 grid, used
          // only to vary each card's stagger delay and initial
          // displacement so the motion reads as "outward from center"
          // rather than uniform. Center sits between cards 5/6 (index
          // 4.5) on a 5-wide row.
          const col = i % 5
          const row = Math.floor(i / 5)
          const colOffset = col - 2 // -2, -1, 0, 1, 2
          const rowOffset = row - 0.5 // -0.5, 0.5
          const dist = Math.sqrt(colOffset * colOffset + rowOffset * rowOffset)

          return (
            <motion.div
              key={service.title}
              className="relative"
              initial={{
                opacity: 0,
                scale: 0.5,
                x: -colOffset * 34,
                y: -rowOffset * 30 + 22,
              }}
              animate={
                inView
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : { opacity: 0, scale: 0.5, x: -colOffset * 34, y: -rowOffset * 30 + 22 }
              }
              transition={{
                duration: 0.75,
                delay: 0.12 + dist * 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* traveling glow, only visible while the card is still settling */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-[radial-gradient(circle,rgba(64,184,239,0.35),transparent_70%)] blur-xl"
                initial={{ opacity: 0.9 }}
                animate={inView ? { opacity: 0 } : { opacity: 0.9 }}
                transition={{
                  duration: 0.9,
                  delay: 0.12 + dist * 0.14 + 0.25,
                  ease: 'easeOut',
                }}
              />

              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                label={service.label}
                index={i}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
