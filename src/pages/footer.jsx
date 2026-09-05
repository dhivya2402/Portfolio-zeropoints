import { Link } from "react-router-dom";
import Icon from "../components/Icons.jsx";
import zplMark from "../assets/zpl-mark.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Founder", to: "/founder" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Twitter", icon: "twitter", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050e1a] text-[#eef6fb]">

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Grid */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.10]
          [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      {/* Top glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(64,184,239,0.12),transparent_68%)]
          blur-[90px]
        "
      />

      {/* Left glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[radial-gradient(circle,rgba(64,184,239,0.07),transparent_70%)]
          blur-[80px]
        "
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[1380px]">

        {/* =================================================
            TOP SYSTEM BAR
        ================================================= */}

        <div className="flex items-center justify-between border-b border-white/[0.07] py-4">

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-[#40b8ef] shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#607487]">
              Digital Systems & Software
            </span>

          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-[#607487] sm:block">
            ZPL / 2026
          </span>

        </div>

        {/* =================================================
            BRAND / CTA AREA
        ================================================= */}

        <div className="relative py-16 sm:py-20 lg:py-24">

          <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr]">

            {/* BRAND */}
            <div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-white/[0.03]
                    shadow-[0_0_40px_-15px_rgba(64,184,239,0.5)]
                  "
                >
                  <img
                    src={zplMark}
                    alt="ZeroPoint Labs"
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div>

                  <h2 className="text-[18px] font-semibold uppercase tracking-[0.25em] text-[#eef6fb]">
                    ZeroPoint
                  </h2>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.45em] text-[#40b8ef]">
                    Labs
                  </p>

                </div>

              </div>

              <h3
                className="
                  mt-10
                  max-w-4xl
                  text-[clamp(3rem,7vw,7.5rem)]
                  font-medium
                  leading-[0.85]
                  tracking-[-0.07em]
                  text-[#eef6fb]
                "
              >
                Build.
                <span className="text-[#40b8ef]"> Scale.</span>
                <br />
                Grow.
              </h3>

              <p className="mt-8 max-w-xl font-serif text-[16px] leading-[1.8] text-[#9fb1c1] sm:text-[18px]">
                Websites, software, and digital growth systems built around
                measurable business outcomes.
              </p>

            </div>

            {/* CTA */}
            <div className="lg:pb-2">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.09]
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-xl
                "
              >

                {/* corner */}
                <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-[#40b8ef]/50" />

                <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#40b8ef]/50" />

                <p className="text-[9px] uppercase tracking-[0.28em] text-[#607487]">
                  Have a project?
                </p>

                <h4 className="mt-4 text-2xl font-medium tracking-tight text-[#eef6fb]">
                  Let's build something
                  <span className="font-serif italic text-[#40b8ef]">
                    {" "}remarkable.
                  </span>
                </h4>

                <Link
                  to="/contact"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#40b8ef]
                    bg-[#40b8ef]
                    px-6
                    py-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#03101d]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#69c8f2]
                    hover:shadow-[0_12px_35px_-10px_rgba(64,184,239,0.65)]
                  "
                >
                  Start Your Project

                  <span className="text-sm">
                    →
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="relative flex items-center">

          <div className="h-px flex-1 bg-white/[0.08]" />

          <div className="mx-4 flex items-center gap-2">

            <span className="h-1 w-1 rounded-full bg-[#40b8ef]" />

            <span className="h-px w-10 bg-[#40b8ef]/30" />

            <span className="h-1 w-1 rounded-full bg-[#40b8ef]" />

          </div>

          <div className="h-px flex-1 bg-white/[0.08]" />

        </div>

        {/* =================================================
            NAVIGATION AREA
        ================================================= */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">

          {/* Navigation */}
          <div>

            <div className="flex items-center gap-3">

              <span className="text-[9px] text-[#40b8ef]">
                01
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#eef6fb]">
                Navigation
              </p>

            </div>

            <ul className="mt-6 space-y-3">

              {links.map((link, index) => (

                <li key={link.to}>

                  <Link
                    to={link.to}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      text-[13px]
                      text-[#718394]
                      transition-colors
                      duration-300
                      hover:text-[#eef6fb]
                    "
                  >

                    <span className="w-5 text-[8px] text-[#536575]">
                      0{index + 1}
                    </span>

                    <span className="relative">

                      {link.label}

                      <span
                        className="
                          absolute
                          -bottom-1
                          left-0
                          h-px
                          w-0
                          bg-[#40b8ef]
                          transition-all
                          duration-300
                          group-hover:w-full
                        "
                      />

                    </span>

                    <span className="ml-auto translate-x-[-5px] text-[#40b8ef] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* What we do */}
          <div>

            <div className="flex items-center gap-3">

              <span className="text-[9px] text-[#40b8ef]">
                02
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#eef6fb]">
                What We Build
              </p>

            </div>

            <div className="mt-6 space-y-3">

              {[
                "Websites",
                "Web Applications",
                "Automation Systems",
                "Digital Marketing",
                "Branding & Content",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-[13px] text-[#718394]"
                >

                  <span className="h-px w-4 bg-[#40b8ef]/40" />

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Social */}
          <div>

            <div className="flex items-center gap-3">

              <span className="text-[9px] text-[#40b8ef]">
                03
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#eef6fb]">
                Connect
              </p>

            </div>

            <div className="mt-6 flex gap-3">

              {socials.map((social) => (

                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="
                    group
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.09]
                    bg-white/[0.025]
                    text-[#718394]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#40b8ef]/40
                    hover:bg-[#40b8ef]/[0.07]
                    hover:text-[#40b8ef]
                    hover:shadow-[0_10px_35px_-15px_rgba(64,184,239,0.7)]
                  "
                >
                  <Icon name={social.icon} size={16} />
                </a>

              ))}

            </div>

            <p className="mt-6 max-w-xs text-[11px] leading-relaxed text-[#536575]">
              Follow ZeroPoint Labs for technology, design, marketing and
              digital growth insights.
            </p>

          </div>

        </div>

        {/* =================================================
            BOTTOM SYSTEM LINE
        ================================================= */}

        <div className="border-t border-white/[0.08] py-6">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[10px] uppercase tracking-[0.15em] text-[#536575]">
              © {new Date().getFullYear()} ZeroPoint Labs. All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#536575]">
                Designed for Growth
              </span>

              <span className="h-1 w-1 rounded-full bg-[#40b8ef]" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#536575]">
                Built with Purpose
              </span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}