import Icon from './Icons.jsx'

/**
 * ServiceCard
 * -----------
 * Visual face for a single slide of the Featured Services fan carousel —
 * a light "metallic" panel up top (numeral + icon badge, standing in for
 * imagery) over a dark content panel (label, title, description, CTA).
 * Title uses the primary heading font; description is Merriweather; the
 * numeral/label/CTA stay in the existing UI (sans) font. `active` drives
 * the premium-vs-understated treatment — the carousel handles position,
 * scale, rotation and motion.
 */
export default function ServiceCard({ title, description, icon = 'code', label, index = 0, active = false }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="relative flex h-[300px] w-[190px] flex-col overflow-hidden rounded-[20px] border border-accent-bright/[0.14] bg-bg-panel/60 backdrop-blur-xl transition-colors duration-500 hover:border-accent-bright/35 sm:h-[330px] sm:w-[218px]"
      style={{ boxShadow: '0 30px 60px -36px rgba(0,0,0,0.85), 0 0 40px -28px rgba(64,184,239,0.35)' }}
    >
      {/* top panel — dark, low-contrast, stands in for imagery */}
      <div className="relative h-[104px] shrink-0 overflow-hidden bg-gradient-to-b from-[#232a36] via-[#1a212b] to-[#141920] sm:h-[118px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-6 -top-10 h-28 w-28 rounded-full bg-white/10 opacity-60 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(64,184,239,0.10),transparent_65%)]"
        />

        <span className="relative mt-3.5 block pl-4 font-sans text-[13px] font-extrabold tracking-wide text-white/60 sm:mt-4 sm:pl-5">
          {num}
        </span>

        <span className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent-bright/20 bg-white/[0.03] text-accent-bright/80 backdrop-blur-sm sm:right-4 sm:top-4">
          <Icon name={icon} size={14} />
        </span>

        {/* decorative fading wireframe lines */}
        <div className="absolute inset-x-4 bottom-3.5 space-y-[5px] sm:inset-x-5 sm:bottom-4">
          <div className="h-px w-[80%] bg-gradient-to-r from-white/15 to-transparent" />
          <div className="h-px w-[50%] bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </div>

      {/* dark content panel */}
      <div className="relative flex flex-1 flex-col bg-bg-panel/80 px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5 sm:pt-4">
        <p className="text-[9px] font-bold uppercase tracking-widest2 text-accent-bright/70 sm:text-[10px]">
          {label}
        </p>

        <h3 className="zp-h3 relative mt-2 text-[14px] leading-snug text-ink-secondary sm:text-[15px]">
          {title}
        </h3>

        <p className="zp-refined relative mt-2 flex-1 text-[11px] text-ink-muted sm:text-[11.5px]">
          {description}
        </p>

        <div className="relative mt-3 flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-wider text-ink-muted sm:text-[10px]">
            Explore Service
          </span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent-bright/25 bg-white/[0.02] text-accent-bright/70 transition-all duration-500 sm:h-8 sm:w-8">
            <Icon name="arrowRight" size={12} className="-rotate-45" />
          </span>
        </div>
      </div>
    </div>
  )
}
