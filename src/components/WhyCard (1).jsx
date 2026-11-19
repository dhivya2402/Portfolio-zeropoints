import { motion } from 'framer-motion'
import Icon from './Icons.jsx'

/**
 * ValueCard
 * ---------
 * Shared glass panel used by "Core Values". `icon` picks a monochrome
 * line icon; `large` gives it a taller, asymmetric footprint for a
 * featured slot in a grid. `compact` renders a visually quieter version
 * (smaller type, muted by default, brightens on hover).
 *
 * The oversized index numeral is deliberately drawn as an outlined
 * (stroke-only) numeral tucked into the corner — a controlled, on-brand
 * accent rather than a flat drop-shadow — and brightens gently on hover.
 */
export default function ValueCard({
  index,
  title,
  description,
  icon = 'node',
  delay = 0,
  large = false,
  compact = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`zp-glass group relative flex flex-col overflow-hidden border-accent/[0.08] opacity-95 shadow-[0_0_46px_-32px_rgba(64,184,239,0.65)] transition-opacity duration-500 hover:opacity-100 ${
        compact ? 'p-5 sm:p-6' : 'p-7 sm:p-8'
      } ${large ? 'sm:col-span-2 sm:row-span-1' : ''}`}
    >
      {/* ambient corner glow, always faintly present */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.14),transparent_72%)] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* oversized outlined index numeral — intentional corner mark, not a shadow */}
      <span
        aria-hidden
        className={`pointer-events-none absolute select-none font-sans font-extrabold leading-none text-transparent [-webkit-text-stroke:1px_var(--zp-num-stroke)] [--zp-num-stroke:rgba(64,184,239,0.16)] transition-[--zp-num-stroke] duration-500 group-hover:[--zp-num-stroke:rgba(64,184,239,0.4)] ${
          compact ? '-right-1 -top-2 text-[62px]' : '-right-2 -top-3 text-[88px]'
        }`}
      >
        {String(index).padStart(2, '0')}
      </span>

      <div className="relative flex items-center gap-3">
        <span
          className={`flex shrink-0 items-center justify-center rounded-lg border border-hairline bg-white/[0.03] text-ink-secondary transition-colors duration-500 group-hover:border-accent-bright/40 group-hover:text-accent-bright ${
            compact ? 'h-8 w-8' : 'h-9 w-9'
          }`}
        >
          <Icon name={icon} size={compact ? 14 : 16} />
        </span>
        <span className="font-sans text-[11px] font-bold uppercase tracking-widest2 text-accent-bright/70">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <h3 className={`zp-h3 relative mb-1.5 font-semibold ${compact ? 'mt-4 text-[15px] sm:text-[16px]' : 'mt-5 text-[17px] sm:text-[18px]'}`}>
        {title}
      </h3>
      <p
        className={`relative font-elegant leading-[1.7] text-ink-secondary ${
          compact ? 'text-[12.5px]' : 'text-[13.5px]'
        }`}
      >
        {description}
      </p>
    </motion.div>
  )
}
