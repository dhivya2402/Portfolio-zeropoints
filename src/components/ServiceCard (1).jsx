import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────────────
// SCROLL RESTORATION
// React Router does not reset scroll position on navigation by default —
// without this, clicking a Navbar link (e.g. "About") while scrolled down
// on the current page opens the new page in the middle instead of at the
// top. This component scrolls the window to the top on every route change.
// Rendered once inside <BrowserRouter> in App.jsx.
// ─────────────────────────────────────────────────────────────────────────
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
