import { motion } from 'framer-motion'

/**
 * HeroVisual
 * ----------
 * A glowing abstract "digital system" graphic for the hero's right side —
 * a floating console/panel with a data curve, orbiting rings and drifting
 * particles. Entirely vector/CSS (no stock imagery), kept to the
 * midnight + electric-blue palette.
 */
export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.22),transparent_65%)] blur-2xl"
      />

      {/* slow-rotating orbit rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[6%] animate-spin-slow rounded-full border border-accent-bright/[0.14]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[16%] animate-spin-slow-reverse rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-accent-bright/[0.10]"
      />

      {/* orbiting node dots */}
      <span className="pointer-events-none absolute left-[6%] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
      <span className="pointer-events-none absolute right-[10%] top-[12%] h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />

      {/* floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-accent-bright/70"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `${i % 2 === 0 ? 'float' : 'float-sm'} ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            filter: 'blur(0.3px)',
          }}
        />
      ))}

      {/* central floating console panel */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[13%] overflow-hidden rounded-[22px] border border-white/[0.10] bg-gradient-to-br from-bg-elevated/90 via-bg-panel/80 to-bg-deep/90 shadow-[0_40px_100px_-30px_rgba(64,184,239,0.35)] backdrop-blur-xl"
      >
        {/* faint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:22px_22px] opacity-[0.18]"
        />
        {/* top chrome bar */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-widest2 text-ink-muted">
            System.Live
          </span>
        </div>

        {/* body: data curve + bars */}
        <div className="relative flex h-[calc(100%-46px)] flex-col justify-between p-5">
          <svg viewBox="0 0 220 90" className="h-[46%] w-full" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="heroCurveFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(64,184,239,0.45)" />
                <stop offset="100%" stopColor="rgba(64,184,239,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0 65 C 30 55, 45 20, 70 30 S 120 65, 150 35 S 195 10, 220 22 V90 H0 Z"
              fill="url(#heroCurveFill)"
            />
            <path
              d="M0 65 C 30 55, 45 20, 70 30 S 120 65, 150 35 S 195 10, 220 22"
              fill="none"
              stroke="#40B8EF"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="150" cy="35" r="3" fill="#40B8EF" />
            <circle cx="150" cy="35" r="6" fill="none" stroke="#40B8EF" strokeOpacity="0.4" />
          </svg>

          <div className="flex items-end justify-between gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-accent/70 to-accent-bright/20"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-between text-ink-muted">
            <span className="text-[9px] uppercase tracking-widest2">Growth Index</span>
            <span className="font-sans text-[13px] font-semibold text-accent-bright">+64.2%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const bars = [14, 22, 17, 28, 20, 32, 24, 36, 26, 40]

const particles = [
  { left: '8%', top: '18%', size: 4, opacity: 0.7, duration: 5, delay: 0 },
  { left: '88%', top: '30%', size: 3, opacity: 0.6, duration: 6, delay: 0.5 },
  { left: '20%', top: '82%', size: 3, opacity: 0.55, duration: 5.5, delay: 1 },
  { left: '78%', top: '78%', size: 4, opacity: 0.65, duration: 4.5, delay: 0.3 },
  { left: '50%', top: '4%', size: 2.5, opacity: 0.5, duration: 6.5, delay: 0.8 },
  { left: '4%', top: '55%', size: 2.5, opacity: 0.5, duration: 5.2, delay: 1.4 },
]
