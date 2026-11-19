import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import zplMark from '../assets/zpl-mark.png'

// ─────────────────────────────────────────────────────────────────────────
// SHARED SITE NAVBAR
// Used on every page via <RootLayout /> (see src/App.jsx). Do not import
// or render this component inside individual page files — it is already
// rendered once, above the routed page content.
//
// Every item below is a real, clickable route (see src/App.jsx). To add /
// rename / remove a nav item, edit this `links` array only.
// ─────────────────────────────────────────────────────────────────────────
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: null }, // intentionally non-navigating placeholder for now
  { label: 'Pricing', to: null }, // intentionally non-navigating placeholder for now
  { label: 'Blog', to: null }, // intentionally non-navigating placeholder for now
  { label: 'Founder', to: null }, // intentionally non-navigating placeholder for now
  { label: 'Contact', to: null }, // intentionally non-navigating placeholder for now
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on resize back to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
        scrolled || mobileOpen
          ? 'border-b border-hairline bg-bg-deep/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="zp-container flex h-16 items-center justify-between sm:h-20">
        <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
          <img src={zplMark} alt="ZeroPoint Labs" className="h-8 w-auto sm:h-9" />
          <span className="font-sans text-[13px] font-semibold uppercase tracking-widest2 text-ink-primary">
            ZeroPoint<span className="text-accent-bright"> Labs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
            link.to === null ? (
              <li key={link.label}>
                <span
                  role="link"
                  aria-disabled="true"
                  className="relative text-[13px] font-medium uppercase tracking-wider text-ink-secondary cursor-default"
                >
                  <span className="relative py-1">{link.label}</span>
                </span>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-[13px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative py-1">
                      {link.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px w-full bg-accent-bright transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile / tablet toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white/[0.02] text-ink-primary transition-colors duration-300 hover:border-accent/40 lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-hairline bg-bg-deep/95 backdrop-blur-md lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-radial-fade opacity-60"
            />
            <ul className="zp-container relative flex flex-col gap-1 py-6">
              {links.map((link, i) =>
                link.to === null ? (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      role="link"
                      aria-disabled="true"
                      className="block cursor-default rounded-xl px-3 py-3 text-[15px] font-medium uppercase tracking-wider text-ink-secondary"
                    >
                      {link.label}
                    </span>
                  </motion.li>
                ) : (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-3 text-[15px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? 'bg-white/[0.04] text-ink-primary'
                            : 'text-ink-secondary hover:bg-white/[0.03] hover:text-ink-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
