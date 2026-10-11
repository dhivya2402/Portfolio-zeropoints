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
 * Logos are never cropped: every tile uses the image's exact aspect ratio
 * (`ratio`) and, as a safety net, the image's own background colour (`bg`,
 * sampled from the file's corners) so nothing letterboxes. Tiles share a
 * height scale but differ in width and vertical offset.
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
const logos = [
  { name: 'Paara', src: paaraLogo, ratio: 'aspect-square', bg: '#f7f7f7', size: 'h-[42vw] sm:h-[22vw] lg:h-[16vw]', offset: 'mt-0' },
  { name: 'Big Bites', src: bigBitesLogo, ratio: 'aspect-[556/449]', bg: '#f7f7f7', size: 'h-[34vw] sm:h-[18vw] lg:h-[13vw]', offset: 'mt-10 lg:mt-14' },
  { name: 'BK Homes', src: bkHomesLogo, ratio: 'aspect-[755/330]', bg: '#f7f7f7', size: 'h-[30vw] sm:h-[16vw] lg:h-[12vw]', offset: 'mt-4 lg:mt-6' },
  { name: 'KS Sports Arena', src: ksSportsLogo, ratio: 'aspect-[633/629]', bg: '#010103', size: 'h-[40vw] sm:h-[20vw] lg:h-[15vw]', offset: 'mt-12 lg:mt-16' },
]

function Group({ hidden = false }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="zs-marquee-group flex shrink-0 items-start gap-4 pr-4 sm:gap-6 sm:pr-6"
    >
      {logos.map((p) => (
        <div
          key={p.name}
          className={`group relative shrink-0 overflow-hidden rounded-[20px] border border-white/[0.09] shadow-[0_0_40px_-26px_rgba(64,184,239,0.55)] transition-[border-color,box-shadow] duration-500 hover:border-accent-bright/35 hover:shadow-[0_32px_80px_-30px_rgba(64,184,239,0.45)] ${p.size} ${p.ratio} ${p.offset}`}
          style={{ backgroundColor: p.bg }}
        >
          <img
            src={p.src}
            alt={hidden ? '' : p.name}
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
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
