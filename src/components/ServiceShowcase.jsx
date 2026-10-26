import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icon from './Icons.jsx'
import './ServiceShowcase.css'
// pillar visuals (gold artwork; each already carries its name, label and arrow)
import buildImage from '../assets/pillar-build.webp'
import createImage from '../assets/pillar-create.webp'
import automateImage from '../assets/pillar-automate.webp'
import growImage from '../assets/pillar-grow.webp'

gsap.registerPlugin(ScrollTrigger)

/**
 * ServiceShowcase
 * ---------------
 * Full-screen, scroll-driven tour of the four ZeroPoint Labs services
 * (replaces the old photo + card layout on Home).
 *
 * The stage pins under the navbar. Scrolling plays the services one by one:
 * the current scene lifts away in layers (background, subject and floating
 * fragments travel at different speeds), the next scene is revealed with its
 * own shape (rising sun, lens iris, linear wipe) and its name springs in
 * letter by letter. Scroll snaps to each scene so one is always settled and
 * clickable.
 *
 * Every scene is a real <Link> to that service's card on the existing
 * /services page (`/services#service-<name>`), so the router, navbar and
 * browser Back button behave exactly as for any other link.
 *
 * Artwork: src/assets/pillar-<slug>.webp - one gold visual per service, shown whole
 * (never cropped or stretched) with its own name, label and arrow.
 *
 * Reduced motion: no pinning or movement. Scenes stack as ordinary full-width
 * panels (same artwork, same links).
 */

// Keyed by the pillar's existing `name` in home.jsx.
const SCENES = {
  BUILD: {
    slug: 'build',
    image: buildImage,
    label: 'Website Development',
    accent: '#C9A06A',
    bg: '#211A15',
    reveal: null,
  },
  GROW: {
    slug: 'grow',
    image: growImage,
    label: 'Digital Marketing',
    accent: '#D9B26F',
    bg: '#211A15',
    // a sun rising from the bottom edge
    reveal: { from: 'circle(0% at 50% 100%)', to: 'circle(150% at 50% 100%)' },
  },
  CREATE: {
    slug: 'create',
    image: createImage,
    label: 'Content Creation',
    accent: '#C99370',
    bg: '#211A15',
    // a lens iris opening from the centre
    reveal: { from: 'circle(0% at 50% 52%)', to: 'circle(76% at 50% 52%)' },
  },
  AUTOMATE: {
    slug: 'automate',
    image: automateImage,
    label: 'Business Software',
    accent: '#BBA77D',
    bg: '#211A15',
    // a clean linear wipe, like a process advancing
    reveal: { from: 'inset(0% 100% 0% 0%)', to: 'inset(0% 0% 0% 0%)' },
  },
}

const HOLD = 0.55 // timeline units a scene rests, fully settled
const TRANS = 1.3 // timeline units one scene takes to hand over to the next
const PX_PER_UNIT = 0.5 // viewport heights of scroll per timeline unit

const MOTION_OK = '(prefers-reduced-motion: no-preference)'

function useMotionOk() {
  const [ok, setOk] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(MOTION_OK).matches,
  )
  useLayoutEffect(() => {
    const mq = window.matchMedia(MOTION_OK)
    const onChange = () => setOk(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return ok
}

function Scene({ p, cfg, active, animated }) {
  const word = [...p.name]
  return (
    <Link
      to={`/services#service-${p.name.toLowerCase()}`}
      className="zsh-scene"
      aria-label={`${cfg.label}. ${p.tagline}`}
      data-scene={cfg.slug}
      data-art=""
      // only the settled scene is a tab stop; the others are reached with the rail
      tabIndex={!animated || active ? 0 : -1}
      style={{ '--accent': cfg.accent, '--zsh-bg': cfg.bg, '--n': word.length }}
    >
      <div className="zsh-layer zsh-bg" aria-hidden="true">
        <div className="zsh-px">
          <img src={cfg.image} alt="" draggable="false" decoding="async" />
        </div>
      </div>

      <div className="zsh-word" aria-hidden="true">
        <span className="zsh-word-inner">
          {word.map((ch, i) => (
            <span key={i} className="zsh-l">
              {ch}
            </span>
          ))}
        </span>
      </div>

      <div className="zsh-layer zsh-mid" aria-hidden="true">
        <div className="zsh-px">
        </div>
      </div>

      {/* outline copy drawn over the subject so the word stays readable through the artwork */}
      <div className="zsh-word zsh-word--front" aria-hidden="true">
        <span className="zsh-word-inner">
          {word.map((ch, i) => (
            <span key={i} className="zsh-l">
              {ch}
            </span>
          ))}
        </span>
      </div>

      <div className="zsh-layer zsh-fg" aria-hidden="true">
        <div className="zsh-px">
        </div>
      </div>

      <div className="zsh-cap">
        <span className="zsh-tag">{p.tagline}</span>
        <span className="zsh-go" aria-hidden="true">
          <Icon name="arrowRight" size={20} className="-rotate-45" />
        </span>
      </div>
    </Link>
  )
}

export default function ServiceShowcase({ pillars }) {
  const items = pillars.filter((p) => SCENES[p.name])
  const motionOk = useMotionOk()
  const rootRef = useRef(null)
  const stRef = useRef(null)
  const tlRef = useRef(null)
  const activeRef = useRef(0)
  const jumpingRef = useRef(false) // true while a rail jump is scrolling (snap stands down)
  const [active, setActive] = useState(0)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || !motionOk || !items.length) return

    const cleanups = []
    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray('.zsh-scene', root)
      const pick = (s, sel) => s.querySelector(sel)
      const parts = scenes.map((s) => ({
        s,
        bg: pick(s, '.zsh-bg'),
        mid: pick(s, '.zsh-mid'),
        fg: pick(s, '.zsh-fg'),
        letters: gsap.utils.toArray('.zsh-word:not(.zsh-word--front) .zsh-l', s),
        lettersF: gsap.utils.toArray('.zsh-word--front .zsh-l', s),
        cap: pick(s, '.zsh-cap'),
        cfg: SCENES[items[scenes.indexOf(s)].name],
      }))
      const prompt = root.querySelector('.zsh-prompt')

      // ---- resting state: scene 0 settled, the rest waiting off-stage ----
      parts.forEach((a, i) => {
        const first = i === 0
        gsap.set(a.s, { autoAlpha: first ? 1 : 0, clipPath: first || !a.cfg.reveal ? 'none' : a.cfg.reveal.from })
        // y: 0 is set alongside yPercent so no stray pixel offset survives a scene's hand-over
        gsap.set(a.bg, { y: 0, yPercent: first ? 0 : 6, scale: first ? 1 : 1.12 })
        gsap.set(a.mid, { y: 0, yPercent: first ? 0 : 16, scale: first ? 1 : 0.9, opacity: first ? 1 : 0 })
        gsap.set(a.fg, { y: 0, yPercent: first ? 0 : 36, scale: first ? 1 : 0.82, opacity: first ? 1 : 0 })
        gsap.set([a.letters, a.lettersF], { y: 0, yPercent: first ? 0 : 118 })
        gsap.set(a.cap, { autoAlpha: first ? 1 : 0, y: first ? 0 : 24 })
      })

      // ---- the scroll-scrubbed timeline ----
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      // explicit from/to on every tween keeps scrubbing deterministic in both directions
      const ft = (target, from, to, at) => tl.fromTo(target, from, { ...to, immediateRender: false }, at)
      const mids = []

      parts.forEach((a, i) => {
        tl.addLabel(`s${i}`, tl.duration())
        tl.to({}, { duration: HOLD }) // rest on this service

        if (i === 0 && prompt) {
          // "Scroll to Explore" fades as soon as exploring starts
          tl.fromTo(prompt, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -14, duration: 0.5, immediateRender: false }, 0.05)
        }

        const b = parts[i + 1]
        if (!b) return
        const t0 = tl.duration()
        mids.push(t0 + TRANS / 2)

        // outgoing: lifts away in layers, letters rise out through their mask
        ;[a.letters, a.lettersF].forEach((L) => ft(L, { y: 0, yPercent: 0 }, { y: 0, yPercent: -118, duration: TRANS * 0.55, ease: 'power2.in', stagger: 0.05 }, t0))
        ft(a.cap, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -24, duration: TRANS * 0.35, ease: 'power1.in' }, t0)
        ft(a.bg, { y: 0, yPercent: 0, scale: 1 }, { y: 0, yPercent: -3, scale: 1.06, duration: TRANS }, t0)
        ft(a.mid, { y: 0, yPercent: 0, scale: 1, opacity: 1 }, { y: 0, yPercent: -10, scale: 1.08, opacity: 0, duration: TRANS, ease: 'power1.in' }, t0)
        ft(a.fg, { y: 0, yPercent: 0, scale: 1, opacity: 1 }, { y: 0, yPercent: -22, scale: 1.16, opacity: 0, duration: TRANS * 0.85, ease: 'power1.in' }, t0)

        // incoming: revealed with its own shape, layers settle at different speeds
        ft(b.s, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.001 }, t0)
        if (b.cfg.reveal) {
          ft(b.s, { clipPath: b.cfg.reveal.from }, { clipPath: b.cfg.reveal.to, duration: TRANS * 0.75, ease: 'power2.inOut' }, t0 + TRANS * 0.12)
        }
        ft(b.bg, { y: 0, yPercent: 6, scale: 1.12 }, { y: 0, yPercent: 0, scale: 1, duration: TRANS * 0.9, ease: 'power2.out' }, t0 + TRANS * 0.1)
        ft(b.mid, { y: 0, yPercent: 16, scale: 0.9, opacity: 0 }, { y: 0, yPercent: 0, scale: 1, opacity: 1, duration: TRANS * 0.8, ease: 'power3.out' }, t0 + TRANS * 0.2)
        ft(b.fg, { y: 0, yPercent: 36, scale: 0.82, opacity: 0 }, { y: 0, yPercent: 0, scale: 1, opacity: 1, duration: TRANS * 0.85, ease: 'power3.out' }, t0 + TRANS * 0.28)
        ;[b.letters, b.lettersF].forEach((L) => ft(L, { y: 0, yPercent: 118 }, { y: 0, yPercent: 0, duration: TRANS * 0.6, ease: 'back.out(1.8)', stagger: 0.06 }, t0 + TRANS * 0.38))
        ft(b.cap, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: TRANS * 0.3, ease: 'power2.out' }, t0 + TRANS * 0.72)
        ft(a.s, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.001 }, t0 + TRANS)
        tl.to({}, { duration: 0 }, t0 + TRANS) // pad the timeline to the end of the hand-over
      })
      tl.addLabel('end', tl.duration())
      tlRef.current = tl

      // ---- snap: always come to rest on a settled scene ----
      // Directional (a scroll gesture advances one scene) with a small dead zone,
      // so arriving at the stage or nudging the wheel does not skip a scene.
      const stops = [...parts.map((_, i) => `s${i}`), 'end'].map((k) => tl.labels[k] / tl.duration())
      const snapTo = (value, self) => {
        if (jumpingRef.current) return value
        let lo = 0
        stops.forEach((s, i) => {
          if (s <= value + 1e-6) lo = i
        })
        const next = Math.min(lo + 1, stops.length - 1)
        if (next === lo || Math.abs(value - stops[lo]) < 1e-6) return stops[lo]
        const into = (value - stops[lo]) / (stops[next] - stops[lo])
        if (self.direction >= 0) return into > 0.12 ? stops[next] : stops[lo]
        return into < 0.88 ? stops[lo] : stops[next]
      }

      // ---- pin + scrub + snap ----
      const st = ScrollTrigger.create({
        animation: tl,
        trigger: root.querySelector('.zsh-pin'),
        start: 'top top',
        end: () => `+=${Math.round(window.innerHeight * PX_PER_UNIT * tl.duration())}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo,
          // decide from where the scroll actually rests, not from a velocity projection
          inertia: false,
          duration: { min: 0.3, max: 0.8 },
          delay: 0.18,
          ease: 'power2.inOut',
        },
        onUpdate: () => {
          const t = tl.time()
          const idx = mids.filter((m) => t > m).length
          if (idx !== activeRef.current) {
            activeRef.current = idx
            setActive(idx)
          }
        },
      })
      stRef.current = st

      // ---- pointer parallax (mouse only): layers drift at different depths ----
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const depth = { bg: 8, mid: 18, fg: 34 }
        const movers = parts.map((a) =>
          ['bg', 'mid', 'fg'].map((k) => {
            const el = a[k].querySelector('.zsh-px')
            return {
              d: depth[k],
              x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),
              y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),
            }
          }),
        )
        const pin = root.querySelector('.zsh-pin')
        const onMove = (e) => {
          const nx = (e.clientX / window.innerWidth - 0.5) * 2
          const ny = (e.clientY / window.innerHeight - 0.5) * 2
          movers.forEach((m) => m.forEach((q) => { q.x(-nx * q.d); q.y(-ny * q.d) }))
        }
        const onLeave = () => movers.forEach((m) => m.forEach((q) => { q.x(0); q.y(0) }))
        pin.addEventListener('pointermove', onMove)
        pin.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          pin.removeEventListener('pointermove', onMove)
          pin.removeEventListener('pointerleave', onLeave)
        })
      }
    }, root)

    return () => {
      cleanups.forEach((fn) => fn())
      ctx.revert()
      stRef.current = null
      tlRef.current = null
      activeRef.current = 0
      setActive(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionOk, pillars])

  // rail buttons: jump to a scene (also the keyboard route through the pinned tour).
  // Driven by a GSAP tween through ScrollTrigger's own scroll setter: the scroll keeps
  // updating every frame, so snap never fires mid-flight (native smooth scroll pauses it).
  const goTo = useCallback((i) => {
    const st = stRef.current
    const tl = tlRef.current
    if (!st || !tl) return
    const progress = tl.labels[`s${i}`] / tl.duration()
    const target = st.start + (st.end - st.start) * progress
    const pos = { y: window.scrollY }
    jumpingRef.current = true // snap stands down so it cannot fight the jump
    const stop = () => {
      jumpingRef.current = false
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
    }
    const tween = gsap.to(pos, {
      y: target,
      duration: 1.1,
      ease: 'power2.inOut',
      overwrite: true,
      onUpdate: () => st.scroll(pos.y),
      onComplete: stop,
    })
    // the visitor can take over at any time
    function cancel() {
      tween.kill()
      stop()
    }
    window.addEventListener('wheel', cancel, { passive: true })
    window.addEventListener('touchstart', cancel, { passive: true })
  }, [])

  if (!items.length) return null

  const accent = SCENES[items[Math.min(active, items.length - 1)].name].accent

  return (
    <div
      ref={rootRef}
      className={`zsh ${motionOk ? 'zsh--pinned' : 'zsh--static'}`}
      role="region"
      aria-label="Our services"
      style={{ '--accent': accent }}
    >
      <div className="zsh-pin">
        {items.map((p, i) => (
          <Scene key={p.name} p={p} cfg={SCENES[p.name]} active={i === active} animated={motionOk} />
        ))}

        {motionOk && (
          <>
            <div className="zsh-prompt" aria-hidden="true">
              <span>Scroll to Explore</span>
              <span className="zsh-prompt-line" />
            </div>

            <nav className="zsh-rail" aria-label="Services">
              {items.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  className="zsh-rail-btn"
                  aria-current={i === active ? 'true' : undefined}
                  aria-label={`Show ${SCENES[p.name].label}`}
                  onClick={() => goTo(i)}
                >
                  <span className="zsh-rail-num">{p.letter}</span>
                  <span className="zsh-rail-bar" />
                </button>
              ))}
            </nav>
          </>
        )}
      </div>
    </div>
  )
}
