import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky top-0 z-50 w-full"
      style={{
        background: scrolled
          ? "rgba(5, 14, 26, 0.94)"
          : "#050e1a",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Top cyan line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(64,184,239,0.55), transparent)",
        }}
      />

      <nav
        className="
          mx-auto
          flex
          h-[78px]
          w-[calc(100%-32px)]
          max-w-[1380px]
          items-center
          justify-between
          lg:h-[84px]
        "
      >
        {/* =================================================
            LOGO
        ================================================= */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-lg
            "
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <img
              src={zplMark}
              alt="ZeroPoint Labs"
              className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="leading-none">
            <div
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.22em]
              "
              style={{ color: "#f1f6fa" }}
            >
              ZEROPOINT
            </div>

            <div
              className="
                mt-1
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
              "
              style={{ color: "#40b8ef" }}
            >
              LABS
            </div>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAV
        ================================================= */}
        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className="group relative block px-1 py-3"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className="
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                      "
                      style={{
                        color: isActive
                          ? "#f1f6fa"
                          : "#9aabba",
                      }}
                    >
                      {link.label}
                    </span>

                    {/* Active / hover line */}
                    <span
                      className="absolute bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        width: isActive ? "100%" : "0%",
                        background: "#40b8ef",
                        boxShadow:
                          "0 0 8px rgba(64,184,239,0.7)",
                      }}
                    />

                    {/* Hover */}
                    <span
                      className="
                        absolute
                        bottom-1
                        left-0
                        h-px
                        w-0
                        bg-[#40b8ef]
                        opacity-70
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                    {isActive && (
                      <span
                        className="
                          absolute
                          -right-1
                          top-1
                          h-1
                          w-1
                          rounded-full
                        "
                        style={{
                          background: "#40b8ef",
                          boxShadow:
                            "0 0 8px rgba(64,184,239,0.9)",
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* =================================================
            MOBILE BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="
            relative
            z-[60]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            lg:hidden
          "
          style={{
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.04)",
            color: "#f1f6fa",
          }}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <motion.span
              animate={
                mobileOpen
                  ? { y: 7, rotate: 45 }
                  : { y: 0, rotate: 0 }
              }
              className="h-px w-full bg-current"
            />

            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="h-px w-full bg-current"
            />

            <motion.span
              animate={
                mobileOpen
                  ? { y: -7, rotate: -45 }
                  : { y: 0, rotate: 0 }
              }
              className="h-px w-full bg-current"
            />
          </span>
        </button>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden lg:hidden"
            style={{
              background: "rgba(5,14,26,0.98)",
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="mx-auto w-[calc(100%-32px)] max-w-[1380px] py-6">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-px w-8"
                  style={{
                    background: "#40b8ef",
                  }}
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                  "
                  style={{
                    color: "#718394",
                  }}
                >
                  Navigation
                </span>
              </div>

              <ul>
                {links.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    style={{
                      borderBottom:
                        "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-4"
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-4">
                            <span
                              className="text-[9px] tracking-widest"
                              style={{
                                color: "#536575",
                              }}
                            >
                              0{index + 1}
                            </span>

                            <span
                              className="
                                text-[13px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                              "
                              style={{
                                color: isActive
                                  ? "#f1f6fa"
                                  : "#9aabba",
                              }}
                            >
                              {link.label}
                            </span>
                          </div>

                          <span
                            style={{
                              color: isActive
                                ? "#40b8ef"
                                : "#536575",
                            }}
                          >
                            →
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}