import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'
import zplMark from '../assets/zpl-mark.png'

// ─────────────────────────────────────────────────────────────────────────
// SHARED SITE FOOTER
// Used on every page via <RootLayout /> (see src/App.jsx). Do not import
// or render this component inside individual page files.
//
// Every Quick Link below is a real, clickable route matching the Navbar
// (see src/App.jsx). To add / rename / remove one, edit this `links`
// array only.
//
// No real contact details or social profile URLs exist anywhere in this
// project (see README), so none were invented here. The social icons
// below are wired to "#" placeholders — swap in the real profile URLs
// once they're confirmed, rather than adding fake ones now.
// ─────────────────────────────────────────────────────────────────────────
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: null }, // intentionally non-navigating placeholder — see Navbar.jsx
  { label: 'Pricing', to: null }, // intentionally non-navigating placeholder — see Navbar.jsx
  { label: 'Blog', to: null }, // intentionally non-navigating placeholder — see Navbar.jsx
  { label: 'Founder', to: null }, // intentionally non-navigating placeholder — see Navbar.jsx
  { label: 'Contact', to: null }, // intentionally non-navigating placeholder — see Navbar.jsx
]

const socials = [
  { label: 'Facebook', icon: 'facebook', href: '#' },
  { label: 'Twitter', icon: 'twitter', href: '#' },
  { label: 'LinkedIn', icon: 'linkedin', href: '#' },
  { label: 'Instagram', icon: 'instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.08),transparent_70%)] blur-[100px]"
      />

      <div className="zp-container relative py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand + description */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={zplMark} alt="ZeroPoint Labs" className="h-8 w-auto" />
              <span className="font-sans text-[13px] font-semibold uppercase tracking-widest2 text-ink-primary">
                ZeroPoint<span className="text-accent-bright"> Labs</span>
              </span>
            </Link>
            <p className="zp-body mt-4 text-[13px] leading-relaxed">
              Websites, software, and digital growth systems built around measurable
              business outcomes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="zp-label">Quick Links</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((link) =>
                link.to === null ? (
                  <li key={link.label}>
                    <span
                      role="link"
                      aria-disabled="true"
                      className="cursor-default text-[13px] font-medium text-ink-secondary"
                    >
                      {link.label}
                    </span>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] font-medium text-ink-secondary transition-colors duration-300 hover:text-ink-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="zp-label">Follow Us</p>
            <ul className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white/[0.02] text-ink-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent-bright hover:shadow-glow-sm"
                  >
                    <Icon name={social.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-hairline" />

        <div className="mt-8 flex justify-center sm:justify-start">
          <span className="text-[12px] text-ink-muted">
            © {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
