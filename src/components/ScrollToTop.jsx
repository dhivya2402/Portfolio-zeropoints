import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────
// SCROLL RESTORATION + HASH LINKS
// React Router does not reset scroll on navigation, and it does not scroll
// to #hash targets on its own. On every navigation this component:
//   • with a hash (e.g. /#work): waits for the target to exist on the new
//     page, scrolls to it, and re-checks briefly because pinned GSAP
//     sections add spacing a moment after the page mounts
//   • without a hash: jumps to the very top of the new page (instantly — the
//     global `scroll-behavior: smooth` would otherwise animate the jump)
// This covers link clicks, browser Back/Forward, reloads and direct loads.
// Rendered once inside <BrowserRouter> in App.jsx.
// ─────────────────────────────────────────────────────────────────────────

// The browser would otherwise restore its own remembered offset on Back/Forward
// and reload — which lands pages mid-scroll and fights this component.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Instant jump to the top. Forces `scroll-behavior: auto` for the call because
// the global `smooth` rule animates scrollTo, and older iOS Safari ignores
// `behavior: 'instant'`.
function jumpToTop() {
  const root = document.documentElement
  const prev = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
  root.scrollTop = 0
  document.body.scrollTop = 0
  root.style.scrollBehavior = prev
}

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  const prevPath = useRef(null)

  // Layout effect: runs after the new page is in the DOM but before it is
  // painted, and before the new page's own GSAP/ScrollTrigger setup measures
  // anything — so a page never flashes (or measures) at the old offset.
  // `key` changes on every navigation, so re-clicking the current page's link
  // also returns to the top.
  useLayoutEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname

    if (!hash) {
      jumpToTop()

      // Late layout shifts (pin spacers, web fonts, images, the mobile browser
      // toolbar resizing the viewport) can move the page after first paint.
      // Re-assert the top briefly — and stop the moment the visitor scrolls.
      let userMoved = false
      const stop = () => { userMoved = true }
      const inputs = ['wheel', 'touchstart', 'keydown', 'pointerdown']
      inputs.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }))
      const timers = [60, 250, 700].map((ms) =>
        window.setTimeout(() => {
          if (!userMoved && window.scrollY !== 0) jumpToTop()
        }, ms),
      )
      return () => {
        timers.forEach(window.clearTimeout)
        inputs.forEach((e) => window.removeEventListener(e, stop))
      }
    }

    const id = decodeURIComponent(hash.slice(1))
    const go = (behavior) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior, block: 'start' })
    }

    // Same page (e.g. Work link while already on Home): one smooth scroll.
    if (samePage) {
      go('smooth')
      return
    }

    // Arriving from another page: jump instantly, then re-check briefly
    // because pinned GSAP sections add spacing a moment after mount.
    const timers = [0, 150, 500, 1000].map((ms) => window.setTimeout(() => go('instant'), ms))
    return () => timers.forEach(window.clearTimeout)
  }, [pathname, hash, key])

  return null
}
