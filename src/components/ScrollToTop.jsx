import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────
// SCROLL RESTORATION + HASH LINKS
// React Router does not reset scroll on navigation, and it does not scroll
// to #hash targets on its own. On every route/hash change this component:
//   • with a hash (e.g. /#work): waits for the target to exist on the new
//     page, scrolls to it, and re-checks briefly because pinned GSAP
//     sections add spacing a moment after the page mounts
//   • without a hash: jumps to the top of the new page (instantly — the
//     global `scroll-behavior: smooth` would otherwise animate the jump)
// Rendered once inside <BrowserRouter> in App.jsx.
// ─────────────────────────────────────────────────────────────────────────
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(null)

  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
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
  }, [pathname, hash])

  return null
}
