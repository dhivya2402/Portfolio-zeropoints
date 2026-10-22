
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="zpl-footer">
      <style>{`
        .zpl-footer {
          background: #050e1a;
          color: #e5e7eb;
          border-top: 1px solid rgba(56, 189, 248, 0.12);
          font-family: Inter, sans-serif;
        }

        .zpl-footer-main {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1.2fr 1fr;
          gap: 48px;
          padding: 68px 5% 55px;
        }

        .zpl-footer-brand img {
          display: block;
          width: 150px;
          max-height: 65px;
          object-fit: contain;
          object-position: left center;
          margin-bottom: 22px;
        }

        .zpl-footer-description {
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.9;
          max-width: 330px;
          margin: 0;
        }

        .zpl-footer-heading {
          color: #f1f5f9;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          margin: 4px 0 27px;
        }

        .zpl-footer-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .zpl-footer-list a,
        .zpl-footer-contact a {
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.8;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color 0.25s ease;
        }

        .zpl-footer-list a:hover,
        .zpl-footer-contact a:hover {
          color: #38bdf8;
        }

        .zpl-footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 25px;
        }

        .zpl-footer-socials a {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(56, 189, 248, 0.16);
          background: rgba(56, 189, 248, 0.04);
          color: #e2e8f0;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .zpl-footer-socials a:hover {
          color: #38bdf8;
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          transform: translateY(-3px);
        }

        .zpl-footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .zpl-footer-contact p {
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        .zpl-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 7px;
          padding: 13px 22px;
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 40px;
          background: rgba(56, 189, 248, 0.05);
          color: #e2e8f0 !important;
          font-size: 13px !important;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .zpl-footer-cta:hover {
          background: #38bdf8;
          color: #050e1a !important;
          border-color: #38bdf8;
          transform: translateY(-2px);
        }

        .zpl-footer-cta span {
          transition: transform 0.25s ease;
        }

        .zpl-footer-cta:hover span {
          transform: translate(3px, -3px);
        }

        .zpl-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 23px 5%;
          border-top: 1px solid rgba(148, 163, 184, 0.12);
          color: #8493a8;
          font-size: 12px;
        }

        .zpl-footer-bottom p {
          margin: 0;
        }

        .zpl-footer-accent {
          color: #38bdf8;
        }

        @media (max-width: 1050px) {
          .zpl-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 42px;
            padding: 55px 6%;
          }
        }

        @media (max-width: 600px) {
          .zpl-footer-main {
            grid-template-columns: 1fr;
            gap: 35px;
            padding: 42px 7%;
          }

          .zpl-footer-heading {
            margin-bottom: 20px;
          }

          .zpl-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 7%;
            line-height: 1.8;
          }
        }
      `}</style>

      <div className="zpl-footer-main">
        {/* Brand */}
        <div className="zpl-footer-brand">
          <Link to="/" aria-label="ZeroPoint Labs home">
            <img src="/zpl-logo.png" alt="ZeroPoint Labs" />
          </Link>

          <p className="zpl-footer-description">
            We build digital experiences, create meaningful content,
            and develop smarter solutions that move businesses forward.
          </p>

          <div className="zpl-footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              ⌘
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="zpl-footer-heading">Navigate</h3>

          <nav className="zpl-footer-list">
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

          <nav className="zpl-footer-list">
            <Link to="/services">Websites & Applications</Link>
            <Link to="/services">Digital Growth & Marketing</Link>
            <Link to="/services">Content Creation</Link>
            <Link to="/services">Business Automation</Link>
            <Link to="/contact">Start a Project ↗</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="zpl-footer-contact">
          <h3 className="zpl-footer-heading">Contact</h3>

          <p>India</p>

          <a href="mailto:hello@zeropointlabs.com">
            hello@zeropointlabs.com
          </a>

          <Link to="/contact" className="zpl-footer-cta">
            Let's Talk <span>↗</span>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="zpl-footer-bottom">
        <p>
          © {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.
        </p>

        <p>
          Build. Grow. Create. Automate.
          <span className="zpl-footer-accent"> ✦</span>
        </p>
      </div>
    </footer>
  );
}
