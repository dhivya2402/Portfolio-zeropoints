import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * TeamCard
 * --------
 * Pass `member` as { name, role, image?, focus?, lines? }.
 *
 * `focus` ({ x, y }, fractions 0–1 of the photo, where the face sits) is
 * optional. When given, the crop is positioned so that point lands near the
 * middle of the portrait frame at whatever size the frame currently is, so
 * faces aren't cut off. Without it the photo is top-aligned as before.
 *
 * Front: portrait (falls back to the initials badge if no image), name, role.
 * Back:  role + a short 3-line description.
 *
 * Flip behaviour: on devices with a real hover (desktop) the card flips while
 * hovered; on touch devices it flips on tap. Enter / Space also toggles it for
 * keyboard users.
 */
export default function TeamCard({ member, delay = 0 }) {
  const [flipped, setFlipped] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const [focusPos, setFocusPos] = useState(null)
  const frameRef = useRef(null)
  const imgRef = useRef(null)

  const focus = member?.focus

  // Work out an object-position that puts the face at ~45% of the frame height.
  const updateFocus = useCallback(() => {
    const frame = frameRef.current
    const img = imgRef.current
    if (!focus || !frame || !img || !img.naturalWidth) return

    const fw = frame.clientWidth
    const fh = frame.clientHeight
    const scale = Math.max(fw / img.naturalWidth, fh / img.naturalHeight)
    const dw = img.naturalWidth * scale
    const dh = img.naturalHeight * scale

    const axis = (f, d, frameSize, target) => {
      const overflow = d - frameSize
      if (overflow <= 0) return 50
      const offset = Math.min(Math.max(f * d - target * frameSize, 0), overflow)
      return (offset / overflow) * 100
    }

    setFocusPos(`${axis(focus.x, dw, fw, 0.5).toFixed(1)}% ${axis(focus.y, dh, fh, 0.45).toFixed(1)}%`)
  }, [focus])

  useEffect(() => {
    const frame = frameRef.current
    if (!focus || !frame || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(updateFocus)
    ro.observe(frame)
    updateFocus()
    return () => ro.disconnect()
  }, [focus, updateFocus])

  const canHover =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(hover: hover)').matches
      : false

  const initials = member?.name
    ? member.name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
    : '—'

  const showImage = member?.image && !imgFailed

  // Backdrop blur is dropped on the faces (it misrenders inside a 3D flip),
  // so the panel tone is slightly more opaque to keep the same glass look.
  const faceStyle = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    background: 'rgba(9, 26, 45, 0.78)',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${member?.name ?? 'Team member'} — flip card`}
        className="group relative h-[390px] w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/60"
        style={{ perspective: '1100px' }}
        onMouseEnter={() => canHover && setFlipped(true)}
        onMouseLeave={() => canHover && setFlipped(false)}
        onClick={() => !canHover && setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* ── FRONT ───────────────────────────────────────────── */}
          <div
            className="zp-glass absolute inset-0 flex flex-col items-start border-accent/[0.08] p-5"
            style={faceStyle}
          >
            <div ref={frameRef} className="relative h-[250px] w-full overflow-hidden rounded-xl border border-accent-bright/25 bg-white/[0.04] shadow-[0_0_16px_-5px_rgba(64,184,239,0.55)] transition-all duration-500 group-hover:border-accent-bright/55 group-hover:shadow-[0_0_22px_-4px_rgba(64,184,239,0.75)]">
              {showImage ? (
                <img
                  ref={imgRef}
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  onLoad={updateFocus}
                  onError={() => setImgFailed(true)}
                  className={`h-full w-full object-cover ${focus ? '' : 'object-top'}`}
                  style={focus ? { objectPosition: focusPos ?? '50% 0%' } : undefined}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-sans text-[32px] font-semibold text-ink-secondary transition-colors duration-500 group-hover:text-accent-bright">
                    {initials}
                  </span>
                </div>
              )}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.08]"
              />
            </div>

            <p className="mt-4 font-script text-[16px] italic font-medium leading-snug text-ink-primary">
              {member?.name ?? 'Name pending'}
            </p>
            <p className="mt-0.5 font-elegant text-[10.5px] font-bold uppercase tracking-wider text-accent-bright/80">
              {member?.role ?? 'Role pending'}
            </p>
          </div>

          {/* ── BACK ────────────────────────────────────────────── */}
          <div
            className="zp-glass absolute inset-0 flex flex-col items-start justify-center border-accent/[0.08] p-7"
            style={{ ...faceStyle, transform: 'rotateY(180deg)' }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-bright/40 bg-white/[0.04] font-sans text-[13px] font-semibold text-accent-bright shadow-[0_0_20px_-5px_rgba(64,184,239,0.7)]">
              {initials}
            </span>

            <p className="mt-4 font-script text-[16px] italic font-medium leading-snug text-ink-primary">
              {member?.name ?? 'Name pending'}
            </p>
            <p className="mt-0.5 font-elegant text-[11px] font-bold uppercase tracking-wider text-accent-bright/90">
              {member?.role ?? 'Role pending'}
            </p>

            <div className="my-4 h-px w-full bg-gradient-to-r from-accent-bright/40 to-transparent" />

            <div className="space-y-1.5">
              {(member?.lines ?? []).slice(0, 3).map((line) => (
                <p
                  key={line}
                  className="font-elegant text-[12.5px] leading-relaxed text-ink-secondary"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
