import { motion } from 'framer-motion'
import Icon from './Icons.jsx'

/**
 * WhyCard
 * -------
 * Dedicated card for the Home page "Why Choose Us" 2x2 grid. Kept
 * separate from ValueCard (used by About → Core Values) so this
 * section's styling never bleeds into other pages.
 *
 * Dark glass surface, thin elegant border, a subtle permanent blue
 * glow that gently intensifies with a slight lift on hover, a quiet
 * oversized index numeral, and a Merriweather (Font 3) description.
 */
export default function WhyCard({ index, title, description, icon = 'node', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="zp-glass group relative flex h-full flex-col p-7 shadow-[0_0_44px_-30px_rgba(64,184,239,0.45)] sm:p-8"
    >
      {/* subtle elegant index numeral — quiet by default, faintly warms on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 select-none font-sans text-[52px] font-bold leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-accent-bright/[0.10]"
      >
        {String(index).padStart(2, '0')}
      </span>

      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] text-accent-bright/85 transition-all duration-500 group-hover:border-accent-bright/45 group-hover:text-accent-bright group-hover:shadow-[0_0_20px_-4px_rgba(64,184,239,0.55)]">
        <Icon name={icon} size={20} />
      </span>

      <h3 className="zp-h3 relative mt-6 text-[16.5px] font-semibold sm:text-[17.5px]">
        {title}
      </h3>
      <p className="zp-refined relative mt-2.5 flex-1 text-[13.5px] sm:text-[14.5px]">
        {description}
      </p>
    </motion.div>
  )
}
