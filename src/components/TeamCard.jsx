import { motion } from 'framer-motion'

/**
 * TeamCard
 * --------
 * Pass `member` as { name, role, description? }. Per the approved color
 * discipline, every member uses the same monochrome blue/white avatar
 * treatment — no per-person color tinting. The circular initials placeholder
 * stands in for a real portrait; swapping in a photo later only means
 * replacing this inner element with an <img>. The frame carries a thin,
 * permanent blue glow so it reads as an intentional portrait slot even
 * before a photo is dropped in.
 */
export default function TeamCard({ member, delay = 0 }) {
  const initials = member?.name
    ? member.name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
    : '—'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="zp-glass group flex h-full flex-col items-start border-accent/[0.08] p-6"
    >
      {/* circular portrait placeholder — thin elegant frame, permanent soft glow */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent-bright/25 bg-white/[0.04] shadow-[0_0_16px_-5px_rgba(64,184,239,0.55)] backdrop-blur-sm transition-all duration-500 group-hover:border-accent-bright/55 group-hover:shadow-[0_0_22px_-4px_rgba(64,184,239,0.75)]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.10),transparent_60%)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.08]"
        />
        <span className="font-sans text-[13px] font-semibold text-ink-secondary transition-colors duration-500 group-hover:text-accent-bright">
          {initials}
        </span>
      </div>

      <p className="mt-4 font-script text-[16px] italic font-medium leading-snug text-ink-primary">
        {member?.name ?? 'Name pending'}
      </p>
      <p className="mt-0.5 font-elegant text-[10.5px] font-bold uppercase tracking-wider text-accent-bright/80">
        {member?.role ?? 'Role pending'}
      </p>
      {member?.description && (
        <p className="mt-2.5 font-elegant text-[12.5px] leading-relaxed text-ink-secondary">
          {member.description}
        </p>
      )}
    </motion.div>
  )
}
