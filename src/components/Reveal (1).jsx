import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Icon from './Icons.jsx'

/**
 * ResultCard
 * ----------
 * Premium achievement panel. If `value` starts with a number, it animates
 * a simple count-up on first view; otherwise the value renders as-is
 * (e.g. "CRM · Billing", "Confidential"). No data is invented — this only
 * changes presentation of the exact values passed in.
 */
function useCountUp(target, active) {
  const [display, setDisplay] = useState('0')
  const match = /^([\d,]+)(\+?)$/.exec(target)

  useEffect(() => {
    if (!active || !match) {
      setDisplay(target)
      return
    }
    const end = parseInt(match[1].replace(/,/g, ''), 10)
    const suffix = match[2]
    const duration = 1100
    const start = performance.now()

    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = Math.round(end * eased)
      setDisplay(`${current.toLocaleString()}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return match ? display : target
}

export default function ResultCard({ value, label, sublabel, icon = 'growth', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const shown = useCountUp(value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="zp-glass zp-corner-br group flex h-full flex-col justify-between p-7 shadow-[0_0_42px_-30px_rgba(64,184,239,0.45)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="font-sans text-4xl font-bold leading-none tracking-tight text-ink-primary transition-colors duration-500 group-hover:text-accent-bright sm:text-5xl"
        >
          {shown}
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.10] bg-white/[0.04] text-ink-secondary/70 transition-all duration-500 group-hover:border-accent-bright/45 group-hover:text-accent-bright group-hover:shadow-[0_0_18px_-4px_rgba(64,184,239,0.5)]">
          <Icon name={icon} size={16} />
        </span>
      </div>
      <div className="mt-7">
        <p className="text-[15px] font-medium leading-snug text-ink-primary">{label}</p>
        {sublabel && <p className="mt-1.5 text-[13px] text-accent-bright">{sublabel}</p>}
      </div>
    </motion.div>
  )
}
