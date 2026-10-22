
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
   { name: "Founder", path: "/founder" },
  { name: "Services", path: "/services" },
  
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');

        .zpl-header {
          --zpl-bg: #05080b;
          --zpl-navy: #050e1a;
          --zpl-cyan: #38bdf8;
          --zpl-white: #f1f5f9;
          --zpl-muted: #a5b4c5;

          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(5, 8, 11, 0.78);
          border-bottom: 1px solid rgba(56, 189, 248, 0.1);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: background 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .zpl-header *,
        .zpl-header *::before,
        .zpl-header *::after {
          box-sizing: border-box;
        }

        .zpl-header.scrolled {
          background: rgba(5, 14, 26, 0.96);
          border-bottom-color: rgba(56, 189, 248, 0.22);
          box-shadow: 0 8px 35px rgba(0, 0, 0, 0.25);
        }

        /* HEADER LAYOUT */

        .zpl-header .header-inner {
          width: min(1400px, 92%);
          height: 84px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        /* ORIGINAL ZPL LOGO */

        .zpl-header .zpl-logo {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }

        .zpl-header .zpl-logo-image {
          display: block;
          width: 165px;
          height: 52px;
          object-fit: contain;
          object-position: left center;
          transition: transform 0.3s ease,
                      filter 0.3s ease;
        }

        .zpl-header .zpl-logo:hover .zpl-logo-image {
          transform: scale(1.03);
          filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.2));
        }

        /* DESKTOP NAVIGATION */

        .zpl-header .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 2.5vw, 36px);
        }

        .zpl-header .nav-link {
          position: relative;
          padding: 10px 0;
          color: var(--zpl-muted);
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 500;
          font-style: italic;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .zpl-header .nav-link::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--zpl-cyan);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.45);
          transition: width 0.3s ease;
        }

        .zpl-header .nav-link:hover,
        .zpl-header .nav-link.active {
          color: var(--zpl-cyan);
        }

        .zpl-header .nav-link:hover::after,
        .zpl-header .nav-link.active::after {
          width: 100%;
        }

        /* LET'S TALK BUTTON */

        .zpl-header .header-cta,
        .zpl-header .mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px 17px;
          border: 1px solid rgba(56, 189, 248, 0.45);
          border-radius: 7px;
          color: var(--zpl-cyan);
          background: rgba(56, 189, 248, 0.06);
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          font-style: italic;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .zpl-header .header-cta:hover,
        .zpl-header .mobile-cta:hover {
          color: #04111c;
          background: var(--zpl-cyan);
          border-color: var(--zpl-cyan);
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.2);
        }

        .zpl-header .header-cta svg,
        .zpl-header .mobile-cta svg {
          transition: transform 0.3s ease;
        }

        .zpl-header .header-cta:hover svg,
        .zpl-header .mobile-cta:hover svg {
          transform: translate(2px, -2px);
        }

        /* MOBILE MENU BUTTON */

        .zpl-header .mobile-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          color: var(--zpl-cyan);
          background: rgba(56, 189, 248, 0.07);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 8px;
          cursor: pointer;
        }

        .zpl-header .mobile-nav {
          display: none;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .zpl-header .header-inner {
            gap: 18px;
          }

          .zpl-header .desktop-nav {
            gap: 18px;
          }

          .zpl-header .nav-link {
            font-size: 19px;
          }

          .zpl-header .zpl-logo-image {
            width: 145px;
            height: 48px;
          }
        }

        /* MOBILE NAVIGATION */

        @media (max-width: 760px) {
          .zpl-header .header-inner {
            width: 90%;
            height: 72px;
            gap: 12px;
          }

          .zpl-header .desktop-nav,
          .zpl-header .header-cta {
            display: none;
          }

          .zpl-header .zpl-logo-image {
            width: 140px;
            height: 46px;
          }

          .zpl-header .mobile-menu-btn {
            display: inline-flex;
          }

          .zpl-header .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 4px;
            max-height: 0;
            overflow: hidden;
            padding: 0 5%;
            background: rgba(5, 14, 26, 0.99);
            border-bottom: 1px solid transparent;
            transition: max-height 0.4s ease,
                        padding 0.4s ease,
                        border-color 0.3s ease;
          }

          .zpl-header .mobile-nav.open {
            max-height: 450px;
            padding-top: 12px;
            padding-bottom: 22px;
            border-bottom-color: rgba(56, 189, 248, 0.22);
          }

          .zpl-header .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 4px;
            color: var(--zpl-white);
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            font-family: 'Cormorant Garamond', serif;
            font-size: 22px;
            font-weight: 500;
            font-style: italic;
            text-decoration: none;
            opacity: 0;
            transform: translateY(8px);
            transition: color 0.25s ease,
                        opacity 0.3s ease,
                        transform 0.3s ease;
            transition-delay: 0ms;
          }

          .zpl-header .mobile-nav.open .mobile-nav-link {
            opacity: 1;
            transform: translateY(0);
            transition-delay: var(--delay);
          }

          .zpl-header .mobile-nav-link span {
            color: var(--zpl-cyan);
            font-family: Inter, sans-serif;
            font-size: 10px;
            font-style: normal;
            letter-spacing: 1px;
          }

          .zpl-header .mobile-nav-link svg {
            margin-left: auto;
            color: var(--zpl-cyan);
          }

          .zpl-header .mobile-nav-link:hover,
          .zpl-header .mobile-nav-link.active {
            color: var(--zpl-cyan);
          }

          .zpl-header .mobile-cta {
            width: 100%;
            margin-top: 15px;
            padding: 12px;
            font-size: 21px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zpl-header *,
          .zpl-header *::before,
          .zpl-header *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className={`zpl-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          {/* ZPL LOGO */}
          <Link
            to="/"
            className="zpl-logo"
            aria-label="ZeroPoint Labs Home"
          >
            <img
              src="/zpl-logo.png"
              alt="ZeroPoint Labs"
              className="zpl-logo-image"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link to="/contact" className="header-cta">
            Let's Talk <ArrowUpRight size={17} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          className={`mobile-nav ${menuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              style={{ "--delay": `${index * 60}ms` }}
            >
              <span>0{index + 1}</span>
              {link.name}
              <ArrowUpRight size={16} />
            </Link>
          ))}

          <Link to="/contact" className="mobile-cta">
            Start a Project <ArrowUpRight size={17} />
          </Link>
        </nav>
      </header>
    </>
  );
}
