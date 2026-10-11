
import React, { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Plus,
  Code2,
  Sparkles,
  TrendingUp,
  Workflow,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTACT = "/contact";

const resultCards = [
  {
    id: "01",
    client: "BIG BITES",
    category: "WEBSITE DEVELOPMENT",
    number: "30+",
    label: "Franchise Enquiries",
    image: "/images/results/big-bites-website.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [
      { value: "30+", label: "Franchise Enquiries" },
      { value: "5", label: "Conversions" },
      { value: "1 Month", label: "After Website Launch" },
    ],
    description:
      "Website-driven franchise enquiries generated after the launch of the Big Bites website.",
  },
  {
    id: "02",
    client: "BIG BITES",
    category: "YOUTUBE",
    number: "17K+",
    label: "Organic Subscribers",
    image: "/images/results/big-bites-youtube.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [
      { value: "17K+", label: "Organic Subscribers" },
      { value: "15", label: "Shorts" },
      { value: "Organic", label: "Audience Growth" },
    ],
    description:
      "Short-form content strategy and social media management focused on organic audience growth.",
  },
  {
    id: "03",
    client: "BIG BITES",
    category: "INSTAGRAM",
    number: "3.5K+",
    label: "Organic Followers",
    image: "/images/results/big-bites-instagram.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [
      { value: "3.5K+", label: "Organic Followers" },
      { value: "Organic", label: "Reach" },
      { value: "Audience", label: "Growth" },
    ],
    description:
      "Short-form content and social media management focused on building organic reach and audience growth.",
  },
  {
    id: "04",
    client: "BK HOMES",
    category: "META ADS",
    number: "65+",
    label: "Home Enquiries",
    image: "/images/results/bk-homes.png",
    logo: "/images/results/bk-homes.png",
    stats: [
      { value: "65+", label: "Home Enquiries" },
      { value: "₹564", label: "Meta Ad Spend" },
      { value: "₹8.68", label: "Cost / Enquiry" },
    ],
    description:
      "Generated 65+ direct enquiries from people interested in discussing their home construction requirements through a Meta Ads campaign.",
  },
];

const selectedWork = [
  {
    number: "01",
    title: "Paara Jewellery",
    category: "E-COMMERCE WEBSITE",
    description:
      "A digital storefront designed to present jewellery products through a refined and conversion-focused shopping experience.",
    image: "/images/work/paara-jewellery.jpg",
    link: "https://paarajewellery.in",
  },
  {
    number: "02",
    title: "KS Sports Arena",
    category: "SPORTS BOOKING PLATFORM",
    description:
      "A sports-focused booking platform built to help customers discover facilities and manage their bookings online.",
    image: "/images/work/ks-sports-arena.jpg",
    link: "https://www.kssportsarena.in/",
  },
  {
    number: "03",
    title: "AK Builders",
    category: "BUSINESS WEBSITE",
    description:
      "A professional business website designed to establish a strong digital presence and communicate the company's services.",
    image: "/images/work/ak-builders.jpg",
    link: "https://ak-builders.vercel.app/",
  },
  {
    number: "04",
    title: "Big Bites",
    category: "FOOD BUSINESS WEBSITE",
    description:
      "A modern digital presence for a food business, designed around brand visibility and franchise opportunities.",
    image: "/images/work/big-bites.jpg",
    link: "https://www.thebigbites.in/",
  },
];

const services = [
  {
    number: "01",
    title: "BUILD",
    subtitle: "Websites & Web Applications",
    description: "Turn your business into a digital experience.",
    details:
      "We design and develop modern, responsive digital platforms that help businesses establish credibility, attract customers and simplify how they operate online.",
    items: [
      "Business Websites",
      "E-commerce Websites",
      "Booking & Appointment Systems",
      "Landing Pages",
      "Custom Web Applications",
      "Customer Portals",
      "Business Dashboards",
      "API & Third-party Integrations",
    ],
    process: "Understand → Design → Develop → Test → Launch",
    price: "₹19,999+",
    note:
      "Final pricing depends on project scope, features, integrations and complexity.",
    icon: Code2,
  },
  {
    number: "02",
    title: "GROW",
    subtitle: "Digital Marketing & Performance",
    description: "Turn attention into business.",
    details:
      "We help businesses create consistent content, reach the right audience and turn digital platforms into customer acquisition channels.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Instagram & YouTube Management",
      "Meta Ads",
      "Performance Marketing",
      "Lead Generation",
      "Campaign Management",
      "Content Planning",
      "Analytics & Reporting",
      "Basic SEO & Search Visibility",
    ],
    process:
      "Research → Strategy → Create → Publish → Promote → Analyse → Optimise",
    price: "₹12,000/month",
    note: "Advertising budget is separate from our management fee.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "CREATE",
    subtitle: "Content Production",
    description: "Content that makes your business worth noticing.",
    details:
      "We create high-quality visual content that can be used across Instagram, YouTube, websites and advertising campaigns.",
    items: [
      "Business Video Shoots",
      "Instagram Reels",
      "Short-form Video Content",
      "Product Videos",
      "Promotional Videos",
      "Brand Videos",
      "Product Photography",
      "Business Photography",
      "Social Media Content",
      "Content Production Days",
    ],
    process: "Concept → Script → Shoot → Edit → Deliver",
    price: "₹5,000+",
    note:
      "Final pricing depends on location, shooting duration, equipment, number of deliverables and production requirements.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "AUTOMATE",
    subtitle: "Business Software & Automation",
    description: "Replace manual work with smarter systems.",
    details:
      "We build custom software solutions that organize your operations and help you manage your business more efficiently.",
    items: [
      "Inventory Management Systems",
      "CRM Systems",
      "Customer Management Systems",
      "Billing Systems",
      "Booking Management Systems",
      "Business Dashboards",
      "Sales & Operations Systems",
      "Custom Business Software",
      "Business Automation",
      "API & System Integrations",
    ],
    process: "Understand → Architect → Develop → Test → Deploy → Support",
    price: "₹75,000+",
    note:
      "Final pricing depends on modules, users, workflows, integrations and technical complexity.",
    icon: Workflow,
  },
];

const buttonClass =
  "animated-button inline-flex items-center justify-center gap-3";

function AnimatedButton({ to = CONTACT, children, secondary = false }) {
  return (
    <Link
      to={to}
      className={`${buttonClass} ${
        secondary ? "animated-button-secondary" : ""
      }`}
    >
      <span className="button-circle" />
      <ArrowRight className="button-arrow button-arrow-left" size={18} />
      <span className="button-label">{children}</span>
      <ArrowUpRight className="button-arrow button-arrow-right" size={18} />
    </Link>
  );
}

function ProjectImage({ src, alt, number, className = "" }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className={`project-image ${className}`}>
      <div className="project-image-placeholder">
        <span className="placeholder-number">{number}</span>
        <span className="placeholder-label">PROJECT PREVIEW</span>
      </div>

      {!imageFailed && (
        <img
          src={src}
          alt={alt}
          className="project-image-content"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}

      <div className="project-image-shade" />
    </div>
  );
}

export default function Services() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          ".services-hero-element, .service-card, .results-heading, .result-card, .work-heading, .work-card, .final-cta, .approach-item",
          { clearProps: "all" }
        );
        return;
      }

      // Hero entrance
      gsap.from(".services-hero-element", {
        y: 36,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
      });

      // Premium ambient hero movement
      gsap.to(".hero-glow-one", {
        x: 45,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-two", {
        x: -35,
        y: 25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Services: scroll-triggered reveal
      gsap.from(".service-card", {
        y: 65,
        opacity: 0,
        rotateX: 5,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      // Section headings
      gsap.utils
        .toArray(".reveal-heading")
        .forEach((heading) => {
          gsap.from(heading, {
            y: 45,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        });

      // Results: one card at a time, 2 seconds apart.
      // All four remain part of the existing Results That Speak section.
      gsap.from(".result-card", {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        stagger: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".results-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Selected work
      gsap.from(".work-card", {
        y: 55,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      // Approach items
      gsap.from(".approach-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".approach-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".final-cta-content", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".final-cta",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="zpl-services relative min-h-screen overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@1,500;1,600;1,700&family=Merriweather:wght@400;700&display=swap');

        .zpl-services {
          --zpl-bg: #05080b;
          --zpl-navy: #050e1a;
          --zpl-cyan: #38bdf8;
          --zpl-ice: #e0f2fe;
          --zpl-muted: #8295a5;
          background: var(--zpl-bg);
          color: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        .zpl-services h1,
        .zpl-services h2,
        .zpl-services h3 {
          font-family: 'Inter', sans-serif;
        }

        .zpl-services p {
          text-wrap: pretty;
        }

        .zpl-services .serif-accent {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          color: var(--zpl-cyan);
        }

        .zpl-services .body-serif {
          font-family: 'Merriweather', serif;
        }

        .zpl-grid {
          background-image:
            linear-gradient(rgba(224,242,254,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(224,242,254,.035) 1px, transparent 1px);
          background-size: 76px 76px;
          pointer-events: none;
        }

        .zpl-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E");
          opacity: .18;
          pointer-events: none;
        }

        .premium-text {
          background: linear-gradient(100deg, #e0f2fe 0%, #cbd5e1 52%, #38bdf8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-image {
          background-position: center;
          background-size: cover;
          transform: scale(1.025);
        }

        .hero-rule {
          background: linear-gradient(90deg, var(--zpl-cyan), transparent);
        }

        /* Shared animated button, adapted to the ZPL cyan palette */
        .animated-button {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 54px;
          padding: 14px 24px;
          border: 1px solid rgba(56,189,248,.75);
          border-radius: 999px;
          color: var(--zpl-ice);
          background: rgba(5,14,26,.55);
          box-shadow: 0 0 0 1px rgba(56,189,248,.08);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .025em;
          transition: color .5s ease, border-radius .5s ease,
            box-shadow .5s ease, border-color .5s ease;
        }

        .animated-button .button-label,
        .animated-button .button-arrow {
          position: relative;
          z-index: 2;
          transition: transform .55s cubic-bezier(.23,1,.32,1), color .4s ease;
        }

        .animated-button .button-arrow-left {
          position: absolute;
          left: -28px;
        }

        .animated-button .button-arrow-right {
          margin-left: 2px;
        }

        .animated-button .button-circle {
          position: absolute;
          z-index: 0;
          width: 18px;
          height: 18px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: var(--zpl-cyan);
          opacity: 0;
          transition: width .65s cubic-bezier(.23,1,.32,1),
            height .65s cubic-bezier(.23,1,.32,1), opacity .4s ease;
        }

        .animated-button:hover {
          color: #04111c;
          border-radius: 14px;
          border-color: var(--zpl-cyan);
          box-shadow: 0 0 0 7px rgba(56,189,248,.055);
        }

        .animated-button:hover .button-circle {
          width: 340px;
          height: 220px;
          opacity: 1;
        }

        .animated-button:hover .button-arrow-left {
          left: 18px;
          transform: translateX(0);
        }

        .animated-button:hover .button-arrow-right {
          transform: translate(15px,-15px);
          opacity: 0;
        }

        .animated-button:hover .button-label {
          transform: translateX(10px);
        }

        .animated-button:active {
          transform: scale(.98);
        }

        .animated-button-secondary {
          background: transparent;
          border-color: rgba(226,232,240,.25);
          color: #e2e8f0;
        }

        .animated-button-secondary .button-circle {
          background: #e0f2fe;
        }

        /* 3D service cards */
        .service-parent {
          perspective: 1200px;
        }

        .service-card {
          min-width: 0;
          transform-style: preserve-3d;
        }

        .service-card-inner {
          isolation: isolate;
          transform-style: preserve-3d;
          transition: transform .65s cubic-bezier(.2,.8,.2,1),
            box-shadow .65s ease, border-color .4s ease;
        }

        .service-parent:hover .service-card-inner {
          transform: rotate3d(1,-1,0,5deg) translateY(-6px);
          border-color: rgba(56,189,248,.38);
          box-shadow: 0 30px 75px rgba(0,0,0,.35),
            0 0 45px rgba(56,189,248,.055);
        }

        .service-glass {
          transform: translateZ(18px);
          transition: transform .65s cubic-bezier(.2,.8,.2,1);
        }

        .service-parent:hover .service-glass {
          transform: translateZ(32px);
        }

        .service-orb {
          pointer-events: none;
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }

        .service-parent:hover .service-orb.one {
          transform: translate3d(-10px,12px,45px) scale(1.1);
        }

        .service-parent:hover .service-orb.two {
          transform: translate3d(12px,-10px,30px) scale(1.08);
        }

        .service-link {
          transition: color .3s ease, letter-spacing .3s ease;
        }

        .service-parent:hover .service-link {
          color: var(--zpl-cyan);
          letter-spacing: .08em;
        }

        /* Results cards */
        .result-card {
          min-width: 0;
          background: linear-gradient(155deg, #0c1c27, #070d12 70%);
          border: 1px solid rgba(226,232,240,.1);
          border-radius: 23px;
          transition: transform .45s ease, border-color .4s ease,
            box-shadow .45s ease;
        }

        .result-card:hover {
          transform: translateY(-7px);
          border-color: rgba(56,189,248,.38);
          box-shadow: 0 25px 65px rgba(0,0,0,.3);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg,#10232e,#05080b);
          isolation: isolate;
        }

        .project-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          background: linear-gradient(145deg,#10232e,#05080b);
        }

        .placeholder-number {
          color: rgba(224,242,254,.15);
          font-size: 52px;
          font-weight: 800;
          letter-spacing: -.07em;
        }

        .placeholder-label {
          color: #647b8e;
          font-size: 9px;
          letter-spacing: .28em;
        }

        .project-image-content {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .75s cubic-bezier(.2,.8,.2,1);
        }

        .result-card:hover .project-image-content,
        .work-card:hover .project-image-content {
          transform: scale(1.045);
        }

        .project-image-shade {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(0deg,rgba(3,8,12,.65),transparent 65%);
          pointer-events: none;
        }

        .work-card {
          border: 1px solid rgba(226,232,240,.1);
          border-radius: 24px;
          background: #080d11;
          transition: transform .45s ease, border-color .4s ease,
            box-shadow .45s ease;
        }

        .work-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56,189,248,.35);
          box-shadow: 0 24px 60px rgba(0,0,0,.25);
        }

        .result-stat {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .soft-divider {
          height: 1px;
          background: linear-gradient(90deg,rgba(56,189,248,.55),rgba(255,255,255,.04),transparent);
        }

        .approach-item {
          transition: background .3s ease, border-color .3s ease;
        }

        .approach-item:hover {
          background: #0b1720;
        }

        @media (max-width: 767px) {
          .service-parent:hover .service-card-inner {
            transform: translateY(-4px);
          }

          .animated-button {
            min-height: 49px;
            padding: 12px 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zpl-services *,
          .zpl-services *::before,
          .zpl-services *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#050e1a]">
        <div className="absolute inset-0">
          <div
            className="hero-image absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(5,14,26,.96) 0%,rgba(5,14,26,.82) 52%,rgba(5,14,26,.7) 100%),linear-gradient(0deg,#05080b,transparent 45%),url('/images/services/services-hero-bg.jpg')",
            }}
          />
          <div className="zpl-grid absolute inset-0" />
          <div className="zpl-noise absolute inset-0" />
          <div className="hero-glow-one absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-sky-400/10 blur-[120px]" />
          <div className="hero-glow-two absolute bottom-[12%] right-[12%] h-80 w-80 rounded-full bg-cyan-500/[.07] blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-5xl">
            <div className="services-hero-element mb-7 flex items-center gap-4">
              <span className="hero-rule h-px w-12" />
              <span className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#38bdf8] sm:text-xs">
                ZEROPOINT LABS / SERVICES
              </span>
            </div>

            <h1 className="services-hero-element text-5xl font-extrabold leading-[.92] tracking-[-.065em] text-[#e0f2fe] sm:text-7xl lg:text-[7.8rem]">
              Digital
              <br />
              <span className="premium-text">Solutions.</span>
            </h1>

            <p className="services-hero-element body-serif mt-8 max-w-2xl text-sm leading-7 text-[#8295a5] sm:text-base sm:leading-8">
              From building your digital presence to growing your audience
              and automating your operations, ZeroPoint Labs provides
              technology, marketing and creative solutions designed for
              growing businesses.{" "}
              <strong className="font-bold text-[#e0f2fe]">
                Every solution is designed around your actual business requirements.
              </strong>
            </p>

            <div className="services-hero-element mt-8 flex flex-wrap gap-3">
              {["BUILD", "GROW", "CREATE", "AUTOMATE"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#38bdf8]/20 px-4 py-2 text-[9px] font-semibold tracking-[.25em] text-[#8295a5] transition hover:border-[#38bdf8]/60 hover:text-[#e0f2fe]"
                >
                  <span className="mr-2 text-[#38bdf8]">•</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="services-hero-element mt-10 flex flex-wrap gap-4">
              <AnimatedButton>Start a Project</AnimatedButton>
              <AnimatedButton to="/services#work" secondary>
                View Our Work
              </AnimatedButton>
            </div>
          </div>

          <div className="services-hero-element mt-20 hidden items-center gap-4 text-[9px] uppercase tracking-[.3em] text-slate-600 sm:flex">
            <span>Strategy</span>
            <span className="text-[#38bdf8]">/</span>
            <span>Technology</span>
            <span className="text-[#38bdf8]">/</span>
            <span>Creative</span>
            <span className="text-[#38bdf8]">/</span>
            <span>Growth</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#05080b] px-6 py-24 sm:py-32 lg:px-10">
        <div className="zpl-grid absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <div className="reveal-heading mb-14 max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[10px] tracking-[.35em] text-[#38bdf8]">
                WHAT WE DO
              </span>
              <span className="h-px w-16 bg-white/10" />
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-.05em] text-[#e0f2fe] sm:text-6xl">
              One digital partner.
              <br />
              <span className="serif-accent text-5xl sm:text-7xl">
                Multiple capabilities.
              </span>
            </h2>

            <p className="body-serif mt-6 max-w-2xl text-sm leading-7 text-[#8295a5]">
              We don't start with a package. We understand your business,
              identify what needs to improve, and recommend the right solution.
            </p>
          </div>

          <div className="services-grid grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="service-parent service-card"
                >
                  <article className="service-card-inner relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-[#08131d] p-1">
                    <div className="service-orb one absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#38bdf8]/10 bg-[#38bdf8]/[.045]" />
                    <div className="service-orb two absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-white/5 bg-white/[.02]" />

                    <div className="service-glass relative h-full rounded-[26px] border border-white/[.035] p-7 sm:p-9">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] tracking-[.35em] text-[#38bdf8]">
                            {service.number} / ZPL SERVICES
                          </span>
                          <h3 className="mt-4 text-4xl font-extrabold tracking-[-.06em] text-[#e0f2fe] sm:text-5xl">
                            {service.title}
                          </h3>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/[.04] text-[#38bdf8] transition duration-500 group-hover:rotate-12">
                          <Icon size={21} strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="mt-12">
                        <p className="text-xl font-medium text-white sm:text-2xl">
                          {service.subtitle}
                        </p>
                        <p className="mt-3 text-sm font-medium text-[#38bdf8]">
                          {service.description}
                        </p>
                        <p className="body-serif mt-4 max-w-xl text-xs leading-7 text-[#8295a5] sm:text-sm">
                          {service.details}
                        </p>
                      </div>

                      <div className="mt-7">
                        <span className="text-[9px] uppercase tracking-[.3em] text-slate-600">
                          What we provide
                        </span>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/[.09] bg-black/10 px-3 py-2 text-[10px] text-slate-400 transition hover:border-[#38bdf8]/30 hover:text-[#e0f2fe]"
                            >
                              <Check size={11} className="text-[#38bdf8]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 rounded-xl border border-white/[.07] bg-black/15 p-4">
                        <span className="text-[9px] uppercase tracking-[.25em] text-slate-600">
                          Our process
                        </span>
                        <p className="mt-2 text-xs leading-6 text-slate-300">
                          {service.process}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <span className="block text-[9px] uppercase tracking-[.25em] text-slate-600">
                            {service.title === "GROW" ? "Plans from" : "Starting from"}
                          </span>
                          <span className="mt-2 block text-2xl font-semibold tracking-tight text-[#e0f2fe]">
                            {service.price}
                          </span>
                          <p className="mt-2 max-w-sm text-[10px] leading-5 text-slate-500">
                            {service.note}
                          </p>
                        </div>

                        <Link
                          to={CONTACT}
                          className="service-link inline-flex shrink-0 items-center gap-2 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#38bdf8]"
                        >
                          Discuss your project
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY ZEROPOINT LABS */}
      <section className="border-y border-white/5 bg-[#030609] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div className="reveal-heading">
            <span className="text-[10px] uppercase tracking-[.35em] text-[#38bdf8]">
              WHY ZEROPOINT LABS?
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em] text-[#e0f2fe] sm:text-6xl">
              One Partner.
              <br />
              <span className="serif-accent text-5xl sm:text-7xl">
                Multiple Capabilities.
              </span>
            </h2>
            <p className="body-serif mt-6 max-w-lg text-sm leading-7 text-[#8295a5]">
              Instead of working with separate teams for your website,
              marketing, content and business software, ZeroPoint Labs brings
              these capabilities together.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              {
                title: "Technology",
                description:
                  "Modern websites, web applications and business systems.",
                icon: Code2,
              },
              {
                title: "Creative",
                description:
                  "Professional content designed around your brand.",
                icon: Sparkles,
              },
              {
                title: "Growth",
                description:
                  "Social media and performance marketing focused on business objectives.",
                icon: TrendingUp,
              },
              {
                title: "Automation",
                description:
                  "Systems that reduce manual work and organize your operations.",
                icon: Workflow,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="bg-[#070c10] p-7 transition hover:bg-[#0b1720]"
                >
                  <Icon size={20} className="text-[#38bdf8]" />
                  <h3 className="mt-5 text-lg font-medium text-[#e0f2fe]">
                    {item.title}
                  </h3>
                  <p className="body-serif mt-3 text-xs leading-6 text-[#8295a5]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS THAT SPEAK — existing section, animated cards */}
      <section className="results-section relative overflow-hidden bg-[#05080b] px-6 py-24 sm:py-32 lg:px-10">
        <div className="zpl-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1450px]">
          <div className="results-heading reveal-heading mx-auto mb-14 max-w-4xl text-center">
            <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
              CLIENT RESULTS
            </span>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] text-[#e0f2fe] sm:text-7xl">
              Results That <span className="serif-accent">Speak.</span>
            </h2>
            <p className="body-serif mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#8295a5] sm:text-base">
              We don't just build digital solutions. We focus on measurable
              outcomes — from generating business enquiries to growing
              audiences and helping businesses reach more customers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {resultCards.map((result) => (
              <article key={result.id} className="result-card group overflow-hidden">
                <div className="relative m-2.5 h-[190px] rounded-[15px]">
                  <ProjectImage
                    src={result.image}
                    alt={`${result.client} ${result.category}`}
                    number={result.id}
                    className="h-full w-full rounded-[15px]"
                  />

                  <div className="absolute left-3 top-3 z-10 flex h-10 min-w-12 items-center justify-center rounded-lg border border-white/10 bg-black/55 px-2 backdrop-blur-md">
                    <img
                      src={result.logo}
                      alt={`${result.client} logo`}
                      loading="lazy"
                      className="max-h-7 max-w-16 object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <span className="absolute right-3 top-3 z-10 text-[9px] tracking-[.25em] text-white/50">
                    {result.id}
                  </span>
                </div>

                <div className="p-5 pt-3">
                  <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[.18em] text-slate-500">
                    <span>{result.client}</span>
                    <span className="text-[#38bdf8]">/</span>
                    <span>{result.category}</span>
                  </div>

                  <div className="mt-7">
                    <div className="text-[3.4rem] font-extrabold leading-none tracking-[-.075em] text-[#e0f2fe] sm:text-5xl">
                      {result.number}
                    </div>
                    <div className="mt-3 text-lg font-medium tracking-tight text-slate-200">
                      {result.label}
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 border-y border-white/10 py-5">
                    {result.stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className={`result-stat ${
                          index ? "border-l border-white/10 pl-3" : "pr-2"
                        }`}
                      >
                        <div className="text-sm font-semibold text-white sm:text-base">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[9px] leading-4 text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="body-serif mt-5 min-h-[85px] text-xs leading-6 text-[#8295a5]">
                    {result.description}
                  </p>

                  <div className="soft-divider mt-5" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[.2em] text-slate-600">
                      Selected client result
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-[#38bdf8] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="body-serif mt-9 text-center text-[10px] leading-5 text-slate-600">
            Results shown are from selected client projects and may vary
            depending on business, market, campaign, budget and other factors.
          </p>
        </div>
      </section>

      {/* RESULTS CTA */}
      <section className="final-cta relative overflow-hidden border-y border-white/5 bg-[#030609] px-6 py-24 lg:px-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38bdf8]/[.055] blur-[130px]" />

        <div className="final-cta-content relative mx-auto max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
            YOUR BUSINESS COULD BE NEXT
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] text-[#e0f2fe] sm:text-6xl">
            Let's Create Your
            <br />
            <span className="serif-accent text-5xl sm:text-7xl">
              Next Result.
            </span>
          </h2>

          <p className="body-serif mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#8295a5]">
            Every business has a different goal. Let's build the right digital
            solution to help you achieve yours.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/services#work" className="animated-button">
              <span className="button-circle" />
              <ArrowRight className="button-arrow button-arrow-left" size={18} />
              <span className="button-label">View Our Work</span>
              <ArrowUpRight className="button-arrow button-arrow-right" size={18} />
            </Link>
            <AnimatedButton>Start a Project</AnimatedButton>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="work-section relative bg-[#05080b] px-6 py-24 sm:py-32 lg:px-10"
      >
        <div className="zpl-grid absolute inset-0 opacity-25" />

        <div className="relative mx-auto max-w-7xl">
          <div className="work-heading reveal-heading mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
                SELECTED WORK
              </span>
              <h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] text-[#e0f2fe] sm:text-7xl">
                Built for
                <br />
                <span className="serif-accent text-6xl sm:text-8xl">
                  real businesses.
                </span>
              </h2>
            </div>

            <p className="body-serif max-w-md text-sm leading-7 text-[#8295a5]">
              A selection of websites and digital platforms we've built across
              different industries and business requirements.
            </p>
          </div>

          <div className="work-grid grid gap-5 md:grid-cols-2">
            {selectedWork.map((work) => (
              <article key={work.number} className="work-card group overflow-hidden">
                <div className="relative m-3 h-[240px] overflow-hidden rounded-[18px] sm:h-[300px]">
                  <ProjectImage
                    src={work.image}
                    alt={work.title}
                    number={work.number}
                    className="h-full w-full rounded-[18px]"
                  />

                  <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] uppercase tracking-[.2em] text-slate-200 backdrop-blur-md">
                    Web Development
                  </span>
                </div>

                <div className="p-6 pt-3 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-[.3em] text-[#38bdf8]">
                        {work.number}
                      </span>
                      <h3 className="mt-2 text-2xl font-medium tracking-[-.04em] text-[#e0f2fe]">
                        {work.title}
                      </h3>
                    </div>

                    <a
                      href={work.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${work.title}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#38bdf8]/50 hover:text-[#38bdf8]"
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>

                  <p className="mt-4 text-[9px] uppercase tracking-[.25em] text-slate-600">
                    {work.category}
                  </p>

                  <p className="body-serif mt-4 max-w-xl text-xs leading-7 text-[#8295a5] sm:text-sm">
                    {work.description}
                  </p>

                  <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-slate-400 transition hover:text-[#38bdf8]"
                  >
                    Visit Project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SOFTWARE & SOCIAL MEDIA */}
      <section className="border-t border-white/5 bg-[#030609] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="group rounded-[25px] border border-white/10 bg-[#070c10] p-7 transition hover:border-[#38bdf8]/25 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[.35em] text-[#38bdf8]">
                  BUSINESS SOFTWARE
                </span>
                <Workflow size={20} className="text-[#38bdf8]" />
              </div>

              <h3 className="mt-10 text-3xl font-medium tracking-[-.04em] text-[#e0f2fe]">
                Systems that make
                <br />
                <span className="serif-accent text-4xl sm:text-5xl">
                  business easier to manage.
                </span>
              </h3>

              <p className="body-serif mt-5 max-w-lg text-xs leading-7 text-[#8295a5] sm:text-sm">
                We are currently developing a CRM & Business Management System
                designed to help businesses manage customers, operations and
                their day-to-day business activities more efficiently.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "CRM",
                  "Customer Management",
                  "Business Operations",
                  "Automation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-[9px] uppercase tracking-wider text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to={CONTACT}
                className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#38bdf8]"
              >
                Discuss your requirements
                <ArrowUpRight size={15} />
              </Link>
            </article>

            <article className="group rounded-[25px] border border-white/10 bg-[#070c10] p-7 transition hover:border-[#38bdf8]/25 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[.35em] text-[#38bdf8]">
                  SOCIAL MEDIA & CONTENT
                </span>
                <Sparkles size={20} className="text-[#38bdf8]" />
              </div>

              <h3 className="mt-10 text-3xl font-medium tracking-[-.04em] text-[#e0f2fe]">
                Content that gets
                <br />
                <span className="serif-accent text-4xl sm:text-5xl">
                  people to notice.
                </span>
              </h3>

              <p className="body-serif mt-5 max-w-lg text-xs leading-7 text-[#8295a5] sm:text-sm">
                We handle content planning, scripting, shooting, editing,
                posting and performance marketing depending on the requirement.
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-white/10 py-6">
                <div>
                  <span className="block text-3xl font-bold tracking-[-.05em] text-[#e0f2fe]">
                    17K+
                  </span>
                  <span className="mt-2 block text-[9px] uppercase tracking-[.2em] text-slate-600">
                    YouTube Subscribers
                  </span>
                </div>

                <div className="border-l border-white/10 pl-5">
                  <span className="block text-3xl font-bold tracking-[-.05em] text-[#e0f2fe]">
                    ~1K
                  </span>
                  <span className="mt-2 block text-[9px] uppercase tracking-[.2em] text-slate-600">
                    Followers in ~2 Weeks
                  </span>
                </div>
              </div>

              <p className="body-serif mt-5 text-xs leading-6 text-slate-500">
                On YouTube, through 11 videos, the channel reached 17K+
                subscribers and is still growing.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-white/5 bg-[#070c10] p-6 text-center sm:p-8">
            <p className="body-serif text-xs leading-7 text-slate-500 sm:text-sm">
              Some of our other projects cannot be publicly shared due to
              client confidentiality, but we can discuss those projects
              directly if required.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#05080b] px-6 py-24 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="reveal-heading">
            <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
              OUR APPROACH
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] text-[#e0f2fe] sm:text-7xl">
              We don't start with
              <br />
              <span className="serif-accent text-6xl sm:text-8xl">
                a package.
              </span>
            </h2>
            <p className="body-serif mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#8295a5]">
              We start with the problem. Every business is different. Before
              recommending a service, we understand what you're trying to
              achieve and what needs to improve.
            </p>
          </div>

          <div className="approach-grid mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "What are you trying to achieve?",
              "What isn't working currently?",
              "Where are you losing customers or time?",
              "What can technology or marketing improve?",
            ].map((question, index) => (
              <div
                key={question}
                className="approach-item border border-transparent bg-[#070c10] p-6 text-left sm:p-7"
              >
                <span className="text-[9px] tracking-[.25em] text-[#38bdf8]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-sm leading-6 text-slate-300">
                  {question}
                </p>
              </div>
            ))}
          </div>

          <p className="body-serif mt-9 text-sm leading-7 text-[#8295a5]">
            Then we recommend the appropriate solution.
          </p>
        </div>
      </section>

      {/* SERVICE COMBINATIONS */}
      <section className="border-y border-white/5 bg-[#030609] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-heading mb-12">
            <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
              SERVICE COMBINATIONS
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-[#e0f2fe] sm:text-6xl">
              Need more than
              <br />
              <span className="serif-accent text-5xl sm:text-7xl">
                one service?
              </span>
            </h2>
            <p className="body-serif mt-5 max-w-2xl text-sm leading-7 text-[#8295a5]">
              Our services can work together as a complete digital growth
              system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["BUILD + GROW", "Launch your website and build your digital presence."],
              ["CREATE + GROW", "Produce consistent content and distribute it across your social channels."],
              ["BUILD + AUTOMATE", "Connect your website with the systems your business needs."],
              ["BUILD + CREATE + GROW", "Build your online presence, create content and actively grow your audience."],
              ["BUILD + GROW + AUTOMATE", "A complete digital infrastructure for businesses ready to scale."],
            ].map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-[#070c10] p-6 transition hover:border-[#38bdf8]/30 hover:bg-[#09141d] sm:p-7"
              >
                <span className="text-[10px] font-semibold tracking-[.12em] text-[#38bdf8]">
                  {title}
                </span>
                <p className="body-serif mt-4 text-xs leading-7 text-[#8295a5]">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <AnimatedButton>Talk to Our Team</AnimatedButton>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta relative overflow-hidden bg-[#050e1a] px-6 py-28 sm:py-36 lg:px-10">
        <div className="zpl-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38bdf8]/[.07] blur-[130px]" />

        <div className="final-cta-content relative mx-auto max-w-5xl text-center">
          <span className="text-[10px] uppercase tracking-[.4em] text-[#38bdf8]">
            ZEROPOINT LABS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-[-.06em] text-[#e0f2fe] sm:text-7xl lg:text-8xl">
            Let's Build
            <br />
            <span className="serif-accent">Something That Works.</span>
          </h2>

          <p className="body-serif mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#8295a5]">
            Tell us what you're building, what you're struggling with, or what
            you want to improve. We'll help you identify the right digital
            solution.
          </p>

          <div className="mt-10 flex justify-center">
            <AnimatedButton>Start a Conversation</AnimatedButton>
          </div>

          <div className="mt-20">
            <p className="serif-accent text-3xl">Code. Create. Elevate.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
