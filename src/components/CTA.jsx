import { motion } from 'framer-motion'

/**
 * CTA
 * ---
 * Final call-to-action panel. Shares the exact design system as Home's
 * FinalCTA — permanent midnight glass panel, ambient corner glow orbs,
 * a faint grid, drifting light particles and illuminated corner
 * brackets — so Home and About end on the same visual note. Only used
 * on the About page.
 */
export default function CTA({ heading, highlight, text, primaryLabel = 'Start Your Project' }) {
  // Split the heading around the highlighted word so it can be rendered
  // in Font 2, exactly like the Home CTA's treatment of "Website".
  let headingNode = heading
  if (highlight && typeof heading === 'string' && heading.includes(highlight)) {
    const [before, after] = heading.split(highlight)
    headingNode = (
      <>
        {before}
        <span className="zp-script">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <section className="zp-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-fade opacity-50"
      />
      <div className="zp-container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-bg-panel/45 px-6 py-16 text-center shadow-[0_0_70px_-28px_rgba(64,184,239,0.45)] backdrop-blur-xl sm:px-12 sm:py-20"
        >
          {/* deep ambient glow orbs — permanent, subtle depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.16),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.12),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-[0.08] [mask-image:radial-gradient(55%_55%_at_50%_40%,#000_0%,transparent_100%)]"
          />

          {/* subtle floating light particles */}
          <span className="pointer-events-none absolute left-[16%] top-[24%] h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
          <span className="pointer-events-none absolute right-[18%] top-[32%] h-1 w-1 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
          <span className="pointer-events-none absolute left-[28%] bottom-[22%] h-1 w-1 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />

          {/* corner brackets for the same premium UI-frame language used elsewhere */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 top-5 h-4 w-4 border-l border-t border-accent-bright/40"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b border-r border-accent-bright/40"
          />

          <h2 className="zp-h2 relative mx-auto max-w-2xl">{headingNode}</h2>
          <p className="zp-refined relative mx-auto mt-6 max-w-lg text-center">{text}</p>
          <div className="relative mt-9">
            <a href="#contact" className="zp-btn-primary">
              {primaryLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
