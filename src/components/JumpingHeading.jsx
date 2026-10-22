import { useLayoutEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'

/**
 * JumpingHeading
 * --------------
 * Renders an EXISTING heading's text one letter at a time so every letter
 * can move on its own.
 *
 *  - Entrance: letters spring up from below with an overshoot, in a quick
 *    left-to-right cascade.
 *  - Hover (mouse / pen): letters near the pointer hop, squash and settle
 *    with an elastic landing. Each letter has a short cooldown so sweeping
 *    across the heading reads as a smooth wave, not jitter.
 *  - Click / tap: a ripple of hops spreads outward from the letter you hit.
 *    (Touch devices use this, because hover does not exist there.)
 *  - prefers-reduced-motion: the heading renders as plain text, no motion.
 *
 * `segments` keeps the heading's original styling hooks, e.g.
 *   [{ text: 'Building Digital ' }, { text: 'Growth', className: 'zp-script' }, { text: '.' }]
 * Segments that touch (no whitespace between them) stay in the same word, so
 * "Growth." never wraps between the word and its full stop.
 *
 * Accessibility: the heading carries the full sentence in aria-label and the
 * individual letters are aria-hidden, so screen readers read one heading.
 */

const WORD_STYLE = { display: 'inline-block', whiteSpace: 'nowrap' }
const LETTER_STYLE = { display: 'inline-block', transformOrigin: '50% 100%', willChange: 'transform' }

function tokenize(segments) {
  const tokens = []
  let word = null
  let n = 0
  segments.forEach((seg, s) => {
    for (const ch of seg.text) {
      if (/\s/.test(ch)) {
        word = null
        const last = tokens[tokens.length - 1]
        if (last && !last.space) tokens.push({ space: true, key: `sp-${tokens.length}` })
        continue
      }
      if (!word) {
        word = { letters: [], key: `w-${tokens.length}` }
        tokens.push(word)
      }
      word.letters.push({ ch, cls: seg.className || '', key: `l-${s}-${n}`, i: n })
      n += 1
    }
  })
  // drop a trailing space token so layout matches the original text
  if (tokens.length && tokens[tokens.length - 1].space) tokens.pop()
  return tokens
}

export default function JumpingHeading({
  segments,
  as: Tag = 'h1',
  className = '',
  delay = 0.15,
  ...rest
}) {
  const rootRef = useRef(null)
  const tokens = useMemo(() => tokenize(segments), [segments])
  const label = useMemo(() => segments.map((s) => s.text).join('').replace(/\s+/g, ' ').trim(), [segments])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const letters = Array.from(root.querySelectorAll('.zp-jl'))
    if (!letters.length) return

    let armed = false // interactions switch on once the entrance has landed
    let centers = []
    let fontSize = 64
    const timers = []

    const measure = () => {
      fontSize = parseFloat(getComputedStyle(root).fontSize) || 64
      // offsetLeft/Top ignore transforms, so this is safe mid-animation
      centers = letters.map((el) => ({
        x: el.offsetLeft + el.offsetWidth / 2,
        y: el.offsetTop + el.offsetHeight / 2,
      }))
    }

    const jump = (el, power = 1) => {
      if (el._zpJump) el._zpJump.kill()
      el._zpAt = performance.now()
      el._zpJump = gsap
        .timeline()
        .to(el, {
          yPercent: -24 * power,
          scaleY: 1 + 0.1 * power,
          scaleX: 1 - 0.07 * power,
          rotation: gsap.utils.random(-7, 7) * power,
          duration: 0.17,
          ease: 'power2.out',
        })
        .to(el, {
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          rotation: 0,
          duration: 1,
          ease: 'elastic.out(1.05, 0.3)',
        })
    }

    const local = (e) => {
      const r = root.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }

    const onMove = (e) => {
      if (!armed || e.pointerType === 'touch') return
      if (!centers.length) measure()
      const { x, y } = local(e)
      const radius = fontSize * 0.55
      const now = performance.now()
      letters.forEach((el, i) => {
        const c = centers[i]
        const d = Math.hypot(x - c.x, (y - c.y) * 0.85)
        if (d < radius && now - (el._zpAt || 0) > 420) jump(el, 0.55 + 0.5 * (1 - d / radius))
      })
    }

    const onDown = (e) => {
      if (!armed) return
      measure()
      const { x, y } = local(e)
      let nearest = 0
      let best = Infinity
      centers.forEach((c, i) => {
        const d = Math.hypot(x - c.x, y - c.y)
        if (d < best) {
          best = d
          nearest = i
        }
      })
      letters.forEach((el, i) => {
        const k = Math.abs(i - nearest)
        timers.push(gsap.delayedCall(k * 0.03, () => jump(el, Math.max(0.6, 1.2 - k * 0.03))))
      })
    }

    // Entrance: set the start state before first paint, then spring in.
    gsap.set(letters, { opacity: 0 })
    const intro = gsap.timeline({
      delay,
      onComplete: () => {
        measure()
        armed = true
      },
    })
    intro.fromTo(
      letters,
      { yPercent: 130, rotation: () => gsap.utils.random(-18, 18), scaleY: 1.3, scaleX: 0.8 },
      { yPercent: 0, rotation: 0, scaleY: 1, scaleX: 1, duration: 1.3, ease: 'elastic.out(1, 0.52)', stagger: 0.032 },
      0,
    )
    intro.to(letters, { opacity: 1, duration: 0.22, ease: 'none', stagger: 0.032 }, 0)

    const ro = new ResizeObserver(() => {
      if (armed) measure()
    })
    ro.observe(root)
    root.addEventListener('pointermove', onMove)
    root.addEventListener('pointerdown', onDown)

    return () => {
      root.removeEventListener('pointermove', onMove)
      root.removeEventListener('pointerdown', onDown)
      ro.disconnect()
      intro.kill()
      timers.forEach((t) => t.kill())
      letters.forEach((el) => {
        if (el._zpJump) el._zpJump.kill()
        delete el._zpJump
        delete el._zpAt
      })
      gsap.set(letters, { clearProps: 'all' })
    }
  }, [tokens, delay])

  return (
    <Tag
      ref={rootRef}
      className={className}
      aria-label={label}
      // TextReveal skips headings that already carry this flag, so the two
      // effects never wrap the same letters twice.
      data-zp-split="1"
      style={{ position: 'relative' }}
      {...rest}
    >
      {tokens.map((t) =>
        t.space ? (
          ' '
        ) : (
          <span key={t.key} aria-hidden="true" style={WORD_STYLE}>
            {t.letters.map((l) => (
              <span key={l.key} className={`zp-jl ${l.cls}`.trim()} style={LETTER_STYLE}>
                {l.ch}
              </span>
            ))}
          </span>
        ),
      )}
    </Tag>
  )
}
