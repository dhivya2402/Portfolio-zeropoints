import { useRef } from 'react'
import gsap from 'gsap'
import paaraLogo from '../assets/paara-logo.jpeg'
import bigBitesLogo from '../assets/bigbites-logo.jpeg'
import bkHomesLogo from '../assets/bkhomes-logo.jpeg'
import ksSportsLogo from '../assets/kssportsarena-logo.jpeg'

/**
 * PhotoMarquee
 * ------------
 * Infinite, seamless horizontal loop of the four project logos
 * (Paara, Big Bites, BK Homes, KS Sports Arena) supplied for the Home page.
 *
 * Every tile is the same size (one fixed 4:3 frame at each breakpoint, see
 * TILE) and sits on the same baseline. Each logo is fitted inside its frame
 * with object-contain (never cropped), and the frame is filled with the
 * image's own background colour (`bg`, sampled from the file's corners) so
 * the letterboxing blends into the logo.
 *
 * How the loop is seamless: the four logos are rendered as one group, the
 * group is rendered four times (two per half), and the track slides exactly
 * -50% per cycle, so the restart point is visually identical to the start.
 * Each group is padded on the right by one gap so both halves are exactly
 * equal width. Sizes are viewport-relative so each half is always wider
 * than the screen.
 *
 * Hover: the loop eases down to a slow drift (not a hard stop) via the
 * animation's playbackRate, then eases back up. Reduced motion: no
 * movement; logos sit in a scrollable row.
 */
// One fixed frame for every tile (4:3), so width, height and spacing match.
const TILE = 'w-[62vw] h-[46.5vw] sm:w-[34vw] sm:h-[25.5vw] lg:w-[22vw] lg:h-[16.5vw]'

const logos = [
  { name: 'Paara', src: paaraLogo, bg: '#f7f7f7' },
  { name: 'Big Bites', src: bigBitesLogo, bg: '#f7f7f7' },
  { name: 'BK Homes', src: bkHomesLogo, bg: '#f7f7f7' },
  { name: 'KS Sports Arena', src: ksSportsLogo, bg: '#010103' },
]

function Group({ hidden = false }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="zs-marquee-group flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
    >
      {logos.map((p) => (
        <div
          key={p.name}
          className={`group relative shrink-0 overflow-hidden rounded-[20px] border border-white/[0.09] shadow-[0_0_40px_-26px_rgba(168, 137, 96,0.55)] transition-[border-color,box-shadow] duration-500 hover:border-accent-bright/35 hover:shadow-[0_32px_80px_-30px_rgba(168, 137, 96,0.45)] ${TILE}`}
          style={{ backgroundColor: p.bg }}
        >
          <img
            src={p.src}
            alt={hidden ? '' : p.name}
            decoding="async"
            draggable={false}
            className="h-full w-full object-contain p-[8%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/[0.08]"
          />
        </div>
      ))}
    </div>
  )
}

export default function PhotoMarquee() {
  const trackRef = useRef(null)

  const slowTo = (rate) => {
    const anim = trackRef.current?.getAnimations?.()[0]
    if (!anim) return
    const state = { r: anim.playbackRate }
    gsap.to(state, {
      r: rate,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: true,
      onUpdate: () => {
        anim.playbackRate = state.r
      },
    })
  }

  return (
    <section id="work" aria-label="Project logos" className="relative scroll-mt-24 overflow-hidden pb-16 pt-4 sm:pb-24">
      <style>{`
        @keyframes zs-marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        .zs-marquee-track { animation: zs-marquee 60s linear infinite; will-change: transform; }
        @media (max-width: 640px) { .zs-marquee-track { animation-duration: 45s; } }
        @media (prefers-reduced-motion: reduce) {
          .zs-marquee-track { animation: none; }
          .zs-marquee-viewport { overflow-x: auto; }
        }
      `}</style>

      <div
        className="zs-marquee-viewport overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        onMouseEnter={() => slowTo(0.2)}
        onMouseLeave={() => slowTo(1)}
      >
        <div ref={trackRef} className="zs-marquee-track flex w-max">
          {/* two groups per half: one group alone can be narrower than a wide
              desktop screen, which would leave a gap at the loop point */}
          <Group />
          <Group hidden />
          <Group hidden />
          <Group hidden />
        </div>
      </div>
    </section>
  )
}
