import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icon from './Icons.jsx'

gsap.registerPlugin(ScrollTrigger)

/**
 * ServiceScrollStage
 * ------------------
 * Motion layer for the EXISTING Home → Services "4 Pillars" content.
 * Nothing about the cards changes: same data (passed in from home.jsx),
 * same markup/classes, same links. Only HOW they appear changes.
 *
 * Desktop (>=1024px, motion allowed): the stage pins under the navbar and
 * the pillars play one at a time as the user scrolls — 01 → 02 → 03 → 04.
 * The current card settles into focus, the previous one lifts away, the
 * next rises in, and the matching service photo wipes in beside it.
 *
 * Mobile / tablet / reduced-motion: no pinning. Pillars stack in normal
 * flow and each reveals as it scrolls into view.
 *
 * IMAGES: these are the same four photos the Services page already uses
 * for these services (see `image:` for Website, Digital Marketing,
 * Content Creation and Business Promotion in pages/services.jsx). They are
 * keyed by the pillar's existing `service` value, which is also the
 * `?service=` link target. If services.jsx ever changes an image, update
 * it here too (or export the array from there and import it).
 */
export const serviceImages = {
  Website:
    'https://t3.ftcdn.net/jpg/04/57/93/78/360_F_457937822_6guyVRMr4cCdCr36zPg7Er7WRaf0FbSn.jpg',
  'Digital Marketing':
    'https://thumbs.dreamstime.com/b/financial-stock-market-chart-candlestick-patterns-volume-bars-showing-trends-data-analysis-blue-background-image-370406401.jpg',
  'Content Creation':
    'https://www.industryandbusiness.ca/wp-content/uploads/2024/10/navigating-digital-world-roadmap.jpeg',
  'Business Promotion':
    'https://png.pngtree.com/background/20230314/original/pngtree-employee-in-career-promotion-concept-vector-picture-image_2133646.jpg',
}

const DESKTOP = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
const NAV_OFFSET = 100 // sticky navbar is 78–84px tall

function usePinnedMode() {
  const [pinned, setPinned] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(DESKTOP).matches,
  )
  useLayoutEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const onChange = () => setPinned(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return pinned
}

/* The existing pillar card — markup and classes copied unchanged from
   home.jsx (wrapper is <a> instead of <motion.a>; `transition-all` is narrowed so CSS
   transitions don't fight GSAP's scroll-driven transform, and the hover lift uses
   the independent `translate` property). */
function PillarCard({ p }) {
  return (
    <a
      href={`/services?service=${encodeURIComponent(p.service)}`}
      className="zs-card group relative flex flex-col overflow-hidden rounded-[20px] border border-white/[0.09] bg-bg-panel/45 p-6 shadow-[0_0_40px_-26px_rgba(64,184,239,0.55)] backdrop-blur-xl transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[5px] hover:border-accent-bright/30 hover:shadow-[0_32px_80px_-30px_rgba(64,184,239,0.45)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(64,184,239,0.08),transparent_75%)]"
      />

      <div className="relative flex items-center justify-between">
        <span className="font-sans text-[12px] font-extrabold tracking-wide text-white/40">
          {p.letter}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] text-accent-bright/80 transition-all duration-500 group-hover:border-accent-bright/50 group-hover:text-accent-bright group-hover:shadow-[0_0_24px_-6px_rgba(64,184,239,0.65)]">
          <Icon name={p.icon} size={18} />
        </span>
      </div>

      <h3 className="zp-h3 relative mt-5 text-[19px] tracking-wide text-ink-primary">{p.name}</h3>
      <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-wider text-accent-bright/70">
        {p.tagline}
      </p>
      <p className="zp-refined relative mt-3 flex-1 text-[12.5px] text-ink-muted">{p.description}</p>

      <div className="relative mt-5 flex items-center justify-between border-t border-hairline pt-4">
        <span className="text-[11.5px] font-semibold text-ink-secondary">{p.price}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent-bright/25 bg-white/[0.02] text-accent-bright/70 transition-all duration-500 group-hover:border-accent-bright/50 group-hover:text-accent-bright">
          <Icon name="arrowRight" size={12} className="-rotate-45" />
        </span>
      </div>
    </a>
  )
}

function PillarPhoto({ p }) {
  const src = serviceImages[p.service]
  return (
    <div className="zs-photo relative h-full min-h-[220px] w-full overflow-hidden rounded-[20px] border border-accent-bright/25 bg-bg-panel/60 shadow-[0_40px_100px_-40px_rgba(64,184,239,0.45)]">
      {src && (
        <img
          src={src}
          alt={p.service}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="zs-photo-img h-full w-full object-cover"
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-transparent to-bg-deep/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/[0.08]"
      />
    </div>
  )
}

export default function ServiceScrollStage({ pillars }) {
  const pinned = usePinnedMode()
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.zs-slide', root)

      /* ── Mobile / tablet / reduced motion: simple per-slide reveal ── */
      if (!pinned) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        slides.forEach((slide) => {
          const items = slide.querySelectorAll('.zs-card, .zs-photo')
          gsap.from(items, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: slide, start: 'top 85%', once: true },
          })
        })
        return
      }

      /* ── Desktop: pinned, scroll-scrubbed sequence ── */
      const bars = gsap.utils.toArray('.zs-bar', root)
      const nums = gsap.utils.toArray('.zs-num', root)
      const HOLD = 1.1

      // initial state: slide 0 in focus, the rest waiting below/behind
      slides.forEach((s, i) => {
        gsap.set(s, { autoAlpha: i === 0 ? 1 : 0 })
        gsap.set(s.querySelector('.zs-card'), { y: i === 0 ? 0 : 70, opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.96 })
        gsap.set(s.querySelector('.zs-photo'), { clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)' })
        gsap.set(s.querySelector('.zs-photo-img'), { scale: i === 0 ? 1 : 1.18 })
      })
      gsap.set(bars, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(bars[0], { scaleX: 1 })
      gsap.set(nums, { opacity: 0.35 })
      gsap.set(nums[0], { opacity: 1 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: root.querySelector('.zs-stage'),
          start: `top ${NAV_OFFSET}px`,
          end: () => `+=${Math.round(window.innerHeight * 0.85 * (slides.length - 1) * 1.4)}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      slides.forEach((slide, i) => {
        if (i === slides.length - 1) {
          tl.to({}, { duration: HOLD }) // final hold before the pin releases
          return
        }
        const next = slides[i + 1]
        const at = `step${i}`
        tl.to({}, { duration: HOLD }) // hold on the current service
        tl.addLabel(at)

        // current service moves away
        tl.to(slide.querySelector('.zs-card'), { y: -60, opacity: 0, scale: 0.97, duration: 1 }, at)
        tl.to(slide.querySelector('.zs-photo'), { clipPath: 'inset(0% 100% 0% 0%)', duration: 1 }, at)
        tl.to(slide.querySelector('.zs-photo-img'), { scale: 1.12, duration: 1 }, at)
        tl.to(slide, { autoAlpha: 0, duration: 0.01 }, `${at}+=1`)

        // next service enters
        tl.set(next, { autoAlpha: 1 }, at)
        tl.to(next.querySelector('.zs-card'), { y: 0, opacity: 1, scale: 1, duration: 1 }, `${at}+=0.2`)
        tl.to(next.querySelector('.zs-photo'), { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, `${at}+=0.1`)
        tl.to(next.querySelector('.zs-photo-img'), { scale: 1, duration: 1.2 }, `${at}+=0.1`)

        // progress rail
        tl.to(bars[i + 1], { scaleX: 1, duration: 1 }, at)
        tl.to(nums[i], { opacity: 0.35, duration: 0.6 }, at)
        tl.to(nums[i + 1], { opacity: 1, duration: 0.6 }, `${at}+=0.3`)
      })
    }, root)

    return () => ctx.revert()
  }, [pinned, pillars])

  return (
    <div ref={rootRef} className="mx-auto mt-14 max-w-5xl lg:mt-16">
      <div
        className={
          pinned
            ? 'zs-stage relative flex h-[min(640px,calc(100vh-150px))] min-h-[460px] flex-col'
            : 'zs-stage relative'
        }
      >
        {/* progress rail — reuses each pillar's existing number and name */}
        {pinned && (
          <div className="mb-6 grid shrink-0 grid-cols-4 gap-4">
            {pillars.map((p) => (
              <div key={p.name} className="zs-num">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-[12px] font-extrabold tracking-wide text-white/50">
                    {p.letter}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-secondary">
                    {p.name}
                  </span>
                </div>
                <div className="mt-3 h-px w-full bg-white/[0.12]">
                  <div className="zs-bar h-px w-full bg-accent-bright" />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={pinned ? 'relative min-h-0 flex-1' : 'space-y-10'}>
          {pillars.map((p) => (
            <div
              key={p.name}
              className={
                pinned
                  ? 'zs-slide absolute inset-0 grid items-stretch gap-8 lg:grid-cols-12'
                  : 'zs-slide grid items-stretch gap-5 sm:grid-cols-2'
              }
            >
              <div className={pinned ? 'flex lg:col-span-5 [&>a]:w-full' : 'flex [&>a]:w-full'}>
                <PillarCard p={p} />
              </div>
              <div className={pinned ? 'lg:col-span-7' : 'min-h-[220px]'}>
                <PillarPhoto p={p} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
