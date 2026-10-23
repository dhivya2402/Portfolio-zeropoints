import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Founder", path: "/founder" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash, location.key]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');

        .zpl-header {
          --zpl-espresso: #17120E;
          --zpl-mocha: #30251E;
          --zpl-ivory: #F3EDE0;
          --zpl-beige: #C9B69B;
          --zpl-bronze: #A88960;
          position: fixed;
          inset: 0 0 auto;
          width: 100%;
          z-index: 1000;
          background: linear-gradient(180deg, #15100D 0%, #17120E 52%, #181310 100%);
          border-bottom: 1px solid rgba(201, 182, 155, 0.15);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
          transition: background .35s ease, border-color .35s ease, box-shadow .35s ease, backdrop-filter .35s ease;
        }

        .zpl-header *, .zpl-header *::before, .zpl-header *::after { box-sizing: border-box; }

        /* Match the dark brown gradient from the supplied colour reference. */
        .zpl-header.home-header:not(.scrolled) {
          background: linear-gradient(180deg, #15100D 0%, #17120E 52%, #181310 100%);
          border-bottom-color: rgba(201, 182, 155, 0.15);
          box-shadow: none;
          -webkit-backdrop-filter: none;
          backdrop-filter: none;
        }

        .zpl-header.scrolled {
          background: linear-gradient(180deg, #15100D 0%, #17120E 52%, #181310 100%);
          border-bottom-color: rgba(168, 137, 96, 0.32);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.23);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }

        .zpl-header .header-inner {
          width: min(1500px, 92%);
          min-height: 112px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(14px, 2vw, 30px);
        }

        /* Larger logo with a responsive image box. */
        .zpl-header .zpl-logo {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: flex-start;
          min-width: 0;
          text-decoration: none;
          line-height: 0;
        }

        .zpl-header .zpl-logo-image {
          display: block;
          width: clamp(220px, 20vw, 300px);
          height: 104px;
          max-width: none;
          object-fit: contain;
          object-position: left center;
          flex-shrink: 0;
          transition: transform .35s ease, filter .35s ease;
        }

        .zpl-header .zpl-logo:hover .zpl-logo-image {
          transform: scale(1.035);
          filter: drop-shadow(0 0 8px rgba(168, 137, 96, .25));
        }

        .zpl-header .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 2.5vw, 38px);
          margin-left: auto;
        }

        .zpl-header .nav-link {
          position: relative;
          padding: 12px 0;
          color: var(--zpl-beige);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 1.35vw, 22px);
          font-weight: 500;
          font-style: italic;
          text-decoration: none;
          white-space: nowrap;
          transition: color .25s ease;
        }

        .zpl-header .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 0;
          height: 1px;
          background: var(--zpl-bronze);
          transition: width .3s ease;
        }

        .zpl-header .nav-link:hover,
        .zpl-header .nav-link.active { color: var(--zpl-ivory); }
        .zpl-header .nav-link:hover::after,
        .zpl-header .nav-link.active::after { width: 100%; }

        .zpl-header .header-cta,
        .zpl-header .mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          border: 1px solid rgba(168, 137, 96, .7);
          border-radius: 8px;
          color: var(--zpl-ivory);
          background: rgba(168, 137, 96, .08);
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 500;
          font-style: italic;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color .3s ease, background .3s ease, border-color .3s ease, transform .3s ease;
        }

        .zpl-header .header-cta:hover,
        .zpl-header .mobile-cta:hover {
          color: var(--zpl-espresso);
          background: var(--zpl-beige);
          border-color: var(--zpl-beige);
          transform: translateY(-2px);
        }

        .zpl-header .header-cta svg,
        .zpl-header .mobile-cta svg { transition: transform .3s ease; }
        .zpl-header .header-cta:hover svg,
        .zpl-header .mobile-cta:hover svg { transform: translate(3px, -3px); }

        .zpl-header .mobile-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          color: var(--zpl-beige);
          background: var(--zpl-mocha);
          border: 1px solid rgba(201, 182, 155, .25);
          border-radius: 8px;
          cursor: pointer;
        }

        .zpl-header .mobile-nav { display: none; }

        /* Compact desktop/laptop screens */
        @media (max-width: 1100px) and (min-width: 761px) {
          .zpl-header .header-inner { width: 94%; gap: 16px; min-height: 98px; }
          .zpl-header .zpl-logo-image { width: 195px; height: 88px; }
          .zpl-header .desktop-nav { gap: 17px; }
          .zpl-header .nav-link { font-size: 19px; }
          .zpl-header .header-cta { padding: 10px 13px; font-size: 19px; }
        }

        @media (max-width: 760px) {
          .zpl-header .header-inner {
            width: 90%;
            min-height: 86px;
            gap: 12px;
          }

          .zpl-header .zpl-logo-image {
            width: clamp(165px, 43vw, 195px);
            height: 76px;
          }

          .zpl-header .desktop-nav,
          .zpl-header .header-cta { display: none; }

          .zpl-header .mobile-menu-btn { display: inline-flex; margin-left: auto; }

          .zpl-header .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 4px;
            max-height: 0;
            overflow: hidden;
            padding: 0 5%;
            background: linear-gradient(180deg, #15100D 0%, #17120E 52%, #181310 100%);
            border-bottom: 1px solid transparent;
            transition: max-height .4s ease, padding .4s ease, border-color .3s ease;
          }

          .zpl-header .mobile-nav.open {
            max-height: 460px;
            padding-top: 12px;
            padding-bottom: 22px;
            border-bottom-color: rgba(168, 137, 96, .35);
          }

          .zpl-header .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 4px;
            color: var(--zpl-ivory);
            border-bottom: 1px solid rgba(201, 182, 155, .12);
            font-family: 'Cormorant Garamond', serif;
            font-size: 23px;
            font-weight: 500;
            font-style: italic;
            text-decoration: none;
            opacity: 0;
            transform: translateY(8px);
            transition: color .25s ease, opacity .3s ease, transform .3s ease;
            transition-delay: 0ms;
          }

          .zpl-header .mobile-nav.open .mobile-nav-link {
            opacity: 1;
            transform: translateY(0);
            transition-delay: var(--delay);
          }

          .zpl-header .mobile-nav-link span {
            color: var(--zpl-bronze);
            font-family: Inter, sans-serif;
            font-size: 10px;
            font-style: normal;
            letter-spacing: 1px;
          }

          .zpl-header .mobile-nav-link svg { margin-left: auto; color: var(--zpl-beige); }
          .zpl-header .mobile-nav-link:hover,
          .zpl-header .mobile-nav-link.active { color: var(--zpl-beige); }

          .zpl-header .mobile-cta {
            width: 100%;
            margin-top: 15px;
            padding: 12px;
            font-size: 22px;
          }
        }

        @media (max-width: 380px) {
          .zpl-header .header-inner { width: 92%; min-height: 80px; }
          .zpl-header .zpl-logo-image { width: 150px; height: 70px; }
          .zpl-header .mobile-menu-btn { width: 41px; height: 41px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .zpl-header *, .zpl-header *::before, .zpl-header *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>

      <header
        className={`zpl-header ${isHome ? "home-header" : "inner-header"} ${scrolled ? "scrolled" : ""}`}
      >
        <div className="header-inner">
          <Link to="/" className="zpl-logo" aria-label="ZeroPoint Labs Home">
            <img
              src="/zpl-logo.png"
              alt="ZeroPoint Labs"
              className="zpl-logo-image"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="header-cta">
            Let's Talk <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <nav
          className={`mobile-nav ${menuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
              style={{ "--delay": `${index * 60}ms` }}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              <span>0{index + 1}</span>
              {link.name}
              <ArrowUpRight size={16} />
            </Link>
          ))}

          <Link to="/contact" className="mobile-cta" tabIndex={menuOpen ? 0 : -1}>
            Start a Project <ArrowUpRight size={17} />
          </Link>
        </nav>
      </header>
    </>
  );
}
