import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/zeropointlabs.official/",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeeveshs1811/",
    Icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="zpl-footer">
      <style>{`
        .zpl-footer {
          --zpl-espresso: #211A15;
          --zpl-mocha: #30251E;
          --zpl-ivory: #F3EDE0;
          --zpl-beige: #C9B69B;
          --zpl-bronze: #A88960;

          position: relative;
          overflow: hidden;
          color: var(--zpl-ivory);
          /* Deeper near-black espresso for a noticeably darker footer */
          background: linear-gradient(145deg, #17110D 0%, #120D0A 58%, #0D0907 100%);
          border-top: 1px solid rgba(168, 137, 96, 0.28);
          font-family: Inter, Arial, sans-serif;
        }

        .zpl-footer *,
        .zpl-footer *::before,
        .zpl-footer *::after {
          box-sizing: border-box;
        }

        .zpl-footer-main {
          display: grid;
          grid-template-columns: minmax(240px, 1.35fr) repeat(2, minmax(150px, 0.85fr)) minmax(190px, 1fr);
          gap: clamp(28px, 4vw, 60px);
          width: min(1400px, 90%);
          margin: 0 auto;
          padding: 70px 0 58px;
        }

        .zpl-footer-brand img {
          display: block;
          width: 190px;
          height: 68px;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
          margin: -7px 0 18px;
          transition: filter 0.3s ease, transform 0.3s ease;
        }

        .zpl-footer-brand a:hover img {
          transform: translateY(-2px);
          filter: drop-shadow(0 5px 14px rgba(168, 137, 96, 0.18));
        }

        .zpl-footer-description {
          max-width: 340px;
          margin: 0;
          color: var(--zpl-beige);
          font-family: 'Lora', Georgia, serif;
          font-size: 13px;
          line-height: 1.95;
        }

        .zpl-footer-heading {
          margin: 5px 0 26px;
          color: var(--zpl-ivory);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .zpl-footer-heading::after {
          content: "";
          display: block;
          width: 30px;
          height: 1px;
          margin-top: 13px;
          background: var(--zpl-bronze);
        }

        .zpl-footer-list,
        .zpl-footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .zpl-footer-list a,
        .zpl-footer-contact a {
          color: var(--zpl-beige);
          font-size: 13px;
          line-height: 1.7;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .zpl-footer-list a:hover,
        .zpl-footer-contact a:not(.zpl-footer-cta):hover {
          color: var(--zpl-ivory);
          transform: translateX(3px);
        }

        .zpl-footer-socials {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 25px;
        }

        .zpl-footer-socials a {
          display: inline-flex;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(201, 182, 155, 0.28);
          border-radius: 50%;
          background: rgba(48, 37, 30, 0.72);
          color: var(--zpl-beige);
          text-decoration: none;
          transition:
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .zpl-footer-socials a:hover {
          color: var(--zpl-espresso);
          background: var(--zpl-beige);
          border-color: var(--zpl-beige);
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(168, 137, 96, 0.16);
        }

        .zpl-footer-socials svg {
          display: block;
          width: 17px;
          height: 17px;
        }

        .zpl-footer-contact p {
          margin: 0;
          color: var(--zpl-beige);
          font-family: 'Lora', Georgia, serif;
          font-size: 13px;
          line-height: 1.8;
        }

        .zpl-footer .zpl-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
          padding: 12px 21px;
          border: 1px solid rgba(168, 137, 96, 0.7);
          border-radius: 999px;
          background: rgba(168, 137, 96, 0.08);
          color: var(--zpl-ivory);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .zpl-footer .zpl-footer-cta:hover {
          color: var(--zpl-espresso);
          background: var(--zpl-beige);
          border-color: var(--zpl-beige);
          transform: translateY(-2px);
        }

        .zpl-footer-cta span {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .zpl-footer-cta:hover span {
          transform: translate(3px, -3px);
        }

        .zpl-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px 24px;
          width: 100%;
          padding: 22px 5%;
          border-top: 1px solid rgba(201, 182, 155, 0.12);
          background: rgba(0, 0, 0, 0.18);
          color: rgba(201, 182, 155, 0.72);
          font-size: 11px;
          line-height: 1.8;
        }

        .zpl-footer-bottom p {
          margin: 0;
        }

        .zpl-footer-accent {
          color: var(--zpl-bronze);
        }

        @media (max-width: 1050px) {
          .zpl-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 42px 50px;
            width: 88%;
            padding: 58px 0 48px;
          }
        }

        @media (max-width: 600px) {
          .zpl-footer-main {
            grid-template-columns: minmax(0, 1fr);
            gap: 36px;
            width: 86%;
            padding: 44px 0 38px;
          }

          .zpl-footer-brand img {
            width: 175px;
            height: 62px;
          }

          .zpl-footer-heading {
            margin-bottom: 21px;
          }

          .zpl-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 7%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zpl-footer *,
          .zpl-footer *::before,
          .zpl-footer *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="zpl-footer-main">
        {/* Brand and social links */}
        <div className="zpl-footer-brand">
          <Link to="/" aria-label="ZeroPoint Labs home">
            <img src="/zpl-logo.png" alt="ZeroPoint Labs" loading="lazy" />
          </Link>

          <p className="zpl-footer-description">
            We build digital experiences, create meaningful content, and develop
            smarter solutions that move businesses forward.
          </p>

          <div className="zpl-footer-socials" aria-label="Social media">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ZeroPoint Labs on ${name}`}
                title={name}
              >
                <Icon aria-hidden="true" focusable="false" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="zpl-footer-heading">Navigate</h3>
          <nav className="zpl-footer-list" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/#about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h3 className="zpl-footer-heading">What We Do</h3>
          <nav className="zpl-footer-list" aria-label="Our services">
            <Link to="/services">Websites &amp; Applications</Link>
            <Link to="/services">Digital Growth &amp; Marketing</Link>
            <Link to="/services">Content Creation</Link>
            <Link to="/services">Business Automation</Link>
            <Link to="/contact">Start a Project ↗</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="zpl-footer-contact">
          <h3 className="zpl-footer-heading">Contact</h3>
          <p>India</p>
          <a href="mailto:hello@zeropointlabs.com">jeeveshs18@gmail.com</a>
          <Link to="/contact" className="zpl-footer-cta">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="zpl-footer-bottom">
        <p>© {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.</p>
        <p>
          Build. Grow. Create. Automate.
          <span className="zpl-footer-accent"> ✦</span>
        </p>
      </div>
    </footer>
  );
}
