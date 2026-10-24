import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * CircleHighlight
 *
 * Draws a hand-drawn style loop around a short word or phrase, like a
 * designer circling the important part of a heading. The text itself is
 * rendered untouched; the loop is a decorative, aria-hidden SVG layered on top.
 *
 * - The loop is generated from the measured size of the text (ResizeObserver),
 *   so it stays aligned at any font size, screen width, or after web fonts load.
 * - It draws itself once, the first time it scrolls into view.
 * - With prefers-reduced-motion it is simply shown, fully drawn.
 * - Stroke colour is the Services-page bronze (see `.zp-circle__path`).
 *
 * The wrapper is a custom element (<zp-circle>) on purpose: several page
 * stylesheets target `h1 span` / `h2 span` / `h2 em`, and a plain <span>
 * wrapper would inherit those rules. Browsers treat it as a neutral inline box.
 */

// Small fixed wobble so the loop looks hand drawn but is identical on every render.
const WOBBLE = [0.0, 0.018, -0.012, 0.02, -0.016, 0.01, -0.02, 0.014, -0.008, 0.016]

function buildLoopPath(w, h, padX, padY) {
  const cx = w / 2
  const cy = h / 2
  const rx = w / 2 + padX
  const ry = h / 2 + padY

  const STEPS = 22
  const TURNS = 1.07 // slightly more than one full turn, so the ends overlap
  const START = -0.62 * Math.PI // begin near the upper right and sweep around

  const pts = []
  for (let i = 0; i <= STEPS; i += 1) {
    const t = i / STEPS
    const a = START - t * TURNS * 2 * Math.PI // counter-clockwise, like a hand
    const wobble = WOBBLE[i % WOBBLE.length]
    const r = 1 + 0.045 * t + wobble // gentle outward spiral + wobble
    pts.push([cx + rx * r * Math.cos(a), cy + ry * r * Math.sin(a)])
  }

  // Catmull-Rom spline -> cubic Bezier segments for a smooth, pen-like curve.
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i += 1) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  }
  return d
}

const svgVariants = {
  hidden: {},
  visible: {},
}

export default function CircleHighlight({
  children,
  delay = 0.2,
  duration = 1.2,
  padX = 0.22, // horizontal breathing room, as a fraction of the text height
  padY = 0.16, // vertical breathing room, as a fraction of the text height
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const [box, setBox] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const measure = () => {
      const { width, height } = el.getBoundingClientRect()
      setBox((prev) =>
        Math.abs(prev.w - width) < 0.5 && Math.abs(prev.h - height) < 0.5
          ? prev
          : { w: width, h: height },
      )
    }
    measure()
    if (typeof ResizeObserver === 'undefined') return undefined
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const ready = box.w > 0 && box.h > 0
  const d = ready ? buildLoopPath(box.w, box.h, box.h * padX + 6, box.h * padY + 4) : ''

  return (
    <zp-circle ref={ref} class="zp-circle">
      {children}
      {ready && (
        <motion.svg
          className="zp-circle__svg"
          viewBox={`0 0 ${box.w} ${box.h}`}
          aria-hidden="true"
          focusable="false"
          variants={svgVariants}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.path
            className="zp-circle__path"
            d={d}
            style={{ strokeWidth: Math.max(2, Math.min(3.6, box.h * 0.032)) }}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: { duration, delay, ease: [0.65, 0, 0.35, 1] },
                  opacity: { duration: 0.01, delay },
                },
              },
            }}
          />
        </motion.svg>
      )}
    </zp-circle>
  )
}
