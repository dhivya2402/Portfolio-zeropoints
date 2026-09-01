
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/*
  ZEROPOINT LABS — PRICING PAGE
  Same visual language as the Services page:
  - #050e1a background
  - #e2f3ff primary text
  - #38bdf8 accent
  - Inter + Cormorant Garamond + Merriweather
  - Premium glow / grid / reveal / hover animations
*/

const websitePlans = [
  {
    id: "launch",
    number: "01",
    name: "Launch",
    price: "₹15,000",
    suffix: "starting from",
    description:
      "Perfect for startups and small businesses looking to establish their digital presence.",
    ideal:
      "Restaurants, Clinics, Salons, Retail Stores, Startups",
    icon: "rocket",
    features: [
      "Professional Business Website",
      "Up to 5 Pages",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "1 Month Support",
    ],
  },
  {
    id: "growth",
    number: "02",
    name: "Growth",
    price: "₹35,000",
    suffix: "starting from",
    description:
      "Designed for growing businesses that need more than just a website.",
    ideal:
      "Construction Companies, Gyms, Sports Academies, Educational Institutes",
    icon: "chart",
    featured: true,
    features: [
      "Custom Website",
      "CMS Integration",
      "Blog",
      "SEO Optimization",
      "Performance Optimization",
      "Social Media Integration",
      "Lead Forms",
      "Analytics Setup",
      "2 Months Support",
    ],
  },
  {
    id: "business",
    number: "03",
    name: "Business+",
    price: "₹75,000",
    suffix: "starting from",
    description:
      "Powerful business solutions with custom functionality.",
    ideal:
      "Growing Businesses, Multi-Branch Companies, Service Providers",
    icon: "layers",
    features: [
      "Custom Web Application",
      "Admin Dashboard",
      "CRM Integration",
      "User Authentication",
      "Reporting",
      "API Integration",
      "Business Automation",
      "Training",
      "3 Months Support",
    ],
  },
  {
    id: "enterprise",
    number: "04",
    name: "Enterprise",
    price: "Custom Pricing",
    suffix: "",
    description:
      "Tailored solutions for businesses with unique operational requirements.",
    ideal: "Medium & Large Businesses",
    icon: "orbit",
    features: [
      "CRM",
      "Inventory Management",
      "Billing Software",
      "ERP Modules",
      "HR Management",
      "Role-Based Access",
      "Cloud Deployment",
      "Priority Support",
      "Long-Term Maintenance",
    ],
  },
];

const marketingPlans = [
  {
    id: "starter",
    number: "01",
    name: "Starter",
    price: "₹12,000",
    suffix: "/month",
    description:
      "A focused starting point for businesses building a consistent digital presence.",
    ideal: "Businesses starting their social media journey",
    icon: "spark",
    features: [
      "Social Media Management",
      "Content Calendar",
      "Graphic Design",
      "Reels & Posts",
      "Monthly Performance Report",
    ],
  },
  {
    id: "marketing-growth",
    number: "02",
    name: "Growth",
    price: "₹20,000",
    suffix: "/month",
    description:
      "A stronger performance system built around content, advertising and lead generation.",
    ideal: "Businesses ready to scale their online reach",
    icon: "chart",
    featured: true,
    features: [
      "Everything in Starter",
      "Meta Ads Management",
      "Advanced Content Strategy",
      "Lead Generation Campaigns",
      "Competitor Analysis",
    ],
  },
  {
    id: "performance",
    number: "03",
    name: "Performance",
    price: "Custom Pricing",
    suffix: "",
    description:
      "A complete multi-platform marketing system focused on measurable growth.",
    ideal: "Businesses needing a dedicated performance strategy",
    icon: "target",
    features: [
      "Multi-platform Marketing",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Funnel Strategy",
      "Performance Tracking",
      "Dedicated Account Manager",
    ],
  },
];

const maintenancePlans = [
  { name: "Basic", price: "₹2,500/month" },
  { name: "Standard", price: "₹5,000/month" },
  { name: "Premium", price: "Custom" },
];

function PlanIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "rocket") {
    return (
      <svg {...common}>
        <path d="M14.5 4.5c2.8-2.1 5.1-2.2 5.1-2.2s.1 2.3-2.2 5.1c-1.8 2.1-4.1 3.6-6.5 4.2l-3-3c.6-2.4 2.1-4.7 4.2-6.5Z" />
        <path d="m8 8-3.2.8-1.9 2.8 4.1.7" />
        <path d="m16 16-.8 3.2-2.8 1.9-.7-4.1" />
        <path d="M9.3 14.7 6 18l-2 .3.3-2 3.3-3.3" />
        <circle cx="15.3" cy="8.7" r="1.2" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />
        <path d="M15 6h3v3" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg {...common}>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 17 8 4 8-4" />
      </svg>
    );
  }

  if (type === "orbit") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2.4" />
        <ellipse cx="12" cy="12" rx="9" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <circle cx="20" cy="9" r="1" />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg {...common}>
        <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
        <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m15 9-3 3" />
        <path d="M20 4 16 8" />
        <path d="M20 4h-4" />
        <path d="M20 4v4" />
      </svg>
    );
  }

  return null;
}

function FloatingOrb() {
  return (
    <div className="pricing-visual" aria-hidden="true">
      <div className="pricing-orbit orbit-a">
        <span />
      </div>

      <div className="pricing-orbit orbit-b">
        <span />
      </div>

      <div className="pricing-orbit orbit-c">
        <span />
      </div>

      <div className="pricing-core">
        <div className="pricing-core-inner">
          <span>ZPL</span>
        </div>
      </div>

      <div className="pricing-visual-word">VALUE</div>
      <div className="pricing-visual-line line-a" />
      <div className="pricing-visual-line line-b" />
    </div>
  );
}

function PricingCard({ plan, index }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;

    if (!card || window.innerWidth < 800) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className={`pricing-card ${plan.featured ? "is-featured" : ""}`}
      style={{ "--delay": `${index * 180}ms` }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="pricing-card-glow" />

      {plan.featured && (
        <div className="pricing-featured-badge">
          MOST POPULAR
        </div>
      )}

      <div className="pricing-card-top">
        <div className="pricing-number">{plan.number}</div>

        <div className="pricing-icon">
          <PlanIcon type={plan.icon} />
        </div>
      </div>

      <div className="pricing-card-title-row">
        <h3>{plan.name}</h3>
        <span className="pricing-arrow">↗</span>
      </div>

      <div className="pricing-price">
        <span className="pricing-price-main">{plan.price}</span>

        {plan.suffix && (
          <span className="pricing-price-suffix">
            {plan.suffix}
          </span>
        )}
      </div>

      <p className="pricing-card-description">
        {plan.description}
      </p>

      <div className="pricing-divider" />

      <div className="pricing-includes-label">
        INCLUDES
      </div>

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="pricing-check">+</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-ideal">
        <span>IDEAL FOR</span>
        <p>{plan.ideal}</p>
      </div>

      <Link to="/contact" className="pricing-card-button">
        <span>DISCUSS THIS PLAN</span>
        <span>↗</span>
      </Link>
    </article>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <div className={`pricing-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("website");

  /* NEW:
     Reference for the pricing card area */
  const pricingCardsRef = useRef(null);

  /* NEW:
     Controls the automatic stacked card entrance */
  const [cardsActive, setCardsActive] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".pricing-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeTab]);

  /* ==========================================================
     NEW CARD ANIMATION

     The user does NOT have to scroll between cards.

     Once the card section enters the viewport:
       Card 01 → comes forward
       Card 02 → comes from behind
       Card 03 → comes from behind
       Card 04 → comes from behind

     The animation then finishes automatically.
     ========================================================== */
  useEffect(() => {
    const section = pricingCardsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <main className="pricing-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@300;400;700&display=swap");

        .pricing-page,
        .pricing-page * {
          box-sizing: border-box;
        }

        .pricing-page {
          --pricing-bg: #050e1a;
          --pricing-text: #e2f3ff;
          --pricing-blue: #38bdf8;
          --pricing-muted: #71879a;
          --pricing-line: rgba(56,189,248,.16);

          min-height: 100vh;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 12%,
              rgba(56,189,248,.075),
              transparent 25%
            ),
            radial-gradient(
              circle at 12% 65%,
              rgba(56,189,248,.035),
              transparent 28%
            ),
            #050e1a;

          color: var(--pricing-text);
          font-family: "Merriweather", serif;
        }

        .pricing-page a {
          color: inherit;
          text-decoration: none;
        }

        /* =====================================================
           HERO
           ===================================================== */

        .pricing-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 130px 8vw 100px;
          isolation: isolate;
        }

        .pricing-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          opacity: .34;

          background-image:
            linear-gradient(
              rgba(56,189,248,.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(56,189,248,.055) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );
        }

        .pricing-grid::after {
          content: "";
          position: absolute;
          inset: -20%;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(56,189,248,.09),
              transparent 35%
            );

          animation:
            pricingGridPulse
            6s
            ease-in-out
            infinite;
        }

        @keyframes pricingGridPulse {
          0%,100% {
            transform: scale(.92);
            opacity: .45;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .pricing-hero-content {
          position: relative;
          width: min(760px, 68vw);
          z-index: 5;
        }

        .pricing-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;

          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 5px;
        }

        .pricing-kicker::before {
          content: "";
          width: 28px;
          height: 1px;

          background: var(--pricing-blue);

          box-shadow:
            0 0 12px rgba(56,189,248,.8);
        }

        .pricing-hero h1 {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: clamp(72px, 10vw, 150px);
          line-height: .8;
          letter-spacing: -9px;
          font-weight: 800;
        }

        .pricing-hero h1 span {
          display: block;

          color: var(--pricing-blue);

          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -4px;

          transform: translateX(8%);
        }

        .pricing-hero-copy {
          max-width: 610px;
          margin: 48px 0 0;

          color: #7890a3;
          font-size: 13px;
          line-height: 1.9;
        }

        .pricing-hero-copy strong {
          color: var(--pricing-text);
          font-weight: 400;
        }

        .pricing-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 30px;
        }

        .pricing-hero-tag {
          padding: 9px 14px;

          border: 1px solid var(--pricing-line);
          border-radius: 999px;

          color: #6e8496;

          font-family: "Inter", sans-serif;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 2px;

          background: rgba(5,14,26,.45);
        }

        .pricing-hero-tag::before {
          content: "•";
          margin-right: 7px;
          color: var(--pricing-blue);
        }

        /* =====================================================
           ORBIT
           ===================================================== */

        .pricing-visual {
          position: absolute;
          width: 620px;
          height: 620px;
          right: -65px;
          top: 50%;

          transform: translateY(-50%);

          z-index: 1;
          pointer-events: none;
        }

        .pricing-orbit {
          position: absolute;
          left: 50%;
          top: 50%;

          width: 100%;
          height: 42%;

          border: 1px solid rgba(56,189,248,.2);
          border-radius: 50%;

          transform:
            translate(-50%, -50%)
            rotate(-18deg);
        }

        .pricing-orbit span {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--pricing-blue);

          box-shadow:
            0 0 10px var(--pricing-blue),
            0 0 28px rgba(56,189,248,.75);
        }

        .pricing-orbit span::after {
          content: "";
          position: absolute;
          inset: -6px;

          border: 1px solid rgba(56,189,248,.16);
          border-radius: 50%;
        }

        .orbit-a {
          animation:
            pricingOrbitA
            11s
            linear
            infinite;
        }

        .orbit-b {
          width: 82%;
          height: 57%;

          transform:
            translate(-50%, -50%)
            rotate(55deg);

          animation:
            pricingOrbitB
            15s
            linear
            infinite
            reverse;
        }

        .orbit-c {
          width: 92%;
          height: 31%;

          transform:
            translate(-50%, -50%)
            rotate(105deg);

          animation:
            pricingOrbitC
            18s
            linear
            infinite;

          opacity: .55;
        }

        .orbit-a span {
          top: -4px;
          left: 50%;
        }

        .orbit-b span {
          right: 7%;
          top: 50%;
        }

        .orbit-c span {
          left: 18%;
          bottom: -4px;
        }

        @keyframes pricingOrbitA {
          to {
            transform:
              translate(-50%, -50%)
              rotate(342deg);
          }
        }

        @keyframes pricingOrbitB {
          to {
            transform:
              translate(-50%, -50%)
              rotate(-305deg);
          }
        }

        @keyframes pricingOrbitC {
          to {
            transform:
              translate(-50%, -50%)
              rotate(465deg);
          }
        }

        .pricing-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 145px;
          height: 145px;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          display: grid;
          place-items: center;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.2),
              rgba(7,15,25,.96) 67%
            );

          border: 1px solid rgba(56,189,248,.26);

          box-shadow:
            0 0 35px rgba(56,189,248,.16),
            0 0 110px rgba(56,189,248,.08),
            inset 0 0 30px rgba(56,189,248,.09);

          animation:
            pricingCoreFloat
            5s
            ease-in-out
            infinite;
        }

        .pricing-core::before,
        .pricing-core::after {
          content: "";
          position: absolute;

          border-radius: 50%;
          border: 1px solid rgba(56,189,248,.14);
        }

        .pricing-core::before {
          inset: 13px;
        }

        .pricing-core::after {
          inset: -18px;
          opacity: .35;
        }

        .pricing-core-inner {
          position: relative;
          z-index: 2;

          width: 78%;
          height: 78%;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.12),
              transparent 68%
            );
        }

        .pricing-core-inner span {
          font-family: "Inter", sans-serif;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: 6px;
          margin-left: 6px;

          color: var(--pricing-text);

          text-shadow:
            0 0 20px rgba(56,189,248,.85);
        }

        @keyframes pricingCoreFloat {
          0%,100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -53%)
              scale(1.045);
          }
        }

        .pricing-visual-word {
          position: absolute;

          right: 5%;
          bottom: 16%;

          color: rgba(56,189,248,.16);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 6px;
        }

        .pricing-visual-line {
          position: absolute;

          width: 90px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(56,189,248,.4)
            );
        }

        .line-a {
          right: 0;
          top: 30%;
          transform: rotate(24deg);
        }

        .line-b {
          left: 2%;
          bottom: 24%;
          transform: rotate(-22deg);
        }

        /* =====================================================
           PRICING SECTION
           ===================================================== */

        .pricing-section {
          position: relative;
          padding: 120px 7vw;
        }

        .pricing-section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 60px;
        }

        .pricing-section-kicker {
          margin-bottom: 18px;

          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .pricing-section h2 {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: clamp(42px, 6vw, 82px);
          line-height: .9;
          letter-spacing: -5px;
          font-weight: 800;
        }

        .pricing-section h2 em {
          color: var(--pricing-blue);

          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -2px;
        }

        .pricing-section-description {
          width: min(420px, 100%);

          color: #647b8e;

          font-size: 11px;
          line-height: 1.9;
        }

        .pricing-switch-wrap {
          display: flex;
          justify-content: center;
          margin: 0 0 55px;
        }

        .pricing-switch {
          position: relative;

          display: inline-flex;

          padding: 5px;

          border: 1px solid rgba(56,189,248,.15);
          border-radius: 999px;

          background: rgba(3,10,18,.7);

          box-shadow:
            inset 0 0 25px rgba(56,189,248,.025);
        }

        .pricing-switch::before {
          content: "";

          position: absolute;

          top: 5px;
          bottom: 5px;

          width: calc(50% - 5px);

          border-radius: 999px;

          background: rgba(56,189,248,.1);

          border: 1px solid rgba(56,189,248,.3);

          box-shadow:
            0 0 24px rgba(56,189,248,.07);

          transition:
            transform .45s
            cubic-bezier(.2,.8,.2,1);

          transform: translateX(
            ${activeTab === "marketing" ? "100%" : "0"}
          );
        }

        .pricing-switch button {
          position: relative;
          z-index: 2;

          min-width: 160px;
          padding: 12px 20px;

          border: 0;
          background: transparent;

          color: #61798b;

          cursor: pointer;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .pricing-switch button.active {
          color: var(--pricing-text);
        }

        /* =====================================================
           CARD GRID
           ===================================================== */

        .pricing-grid-cards {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 16px;

          perspective: 1400px;
        }

        .pricing-grid-cards.marketing-grid {
          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          max-width: 1100px;
          margin: 0 auto;
        }

        /* =====================================================
           NEW STACKED CARD ANIMATION

           IMPORTANT:
           Cards initially appear behind the previous card.

           When the card container enters the viewport,
           the entire sequence automatically plays.

           There is NO scroll trigger for each individual card.
           ===================================================== */

        .pricing-grid-cards > .pricing-card {
          opacity: 0;

          transform:
            translate3d(-48px, 42px, -90px)
            scale(.94)
            rotateY(-8deg)
            rotateZ(-1deg);

          transform-origin: center center;

          animation: none;
        }

        /* Card 01 */
        .pricing-grid-cards > .pricing-card:nth-child(1) {
          z-index: 4;
        }

        /* Card 02 */
        .pricing-grid-cards > .pricing-card:nth-child(2) {
          z-index: 3;
        }

        /* Card 03 */
        .pricing-grid-cards > .pricing-card:nth-child(3) {
          z-index: 2;
        }

        /* Card 04 */
        .pricing-grid-cards > .pricing-card:nth-child(4) {
          z-index: 1;
        }

        /*
          Animation starts only after the pricing card section
          becomes visible.
        */
        .pricing-grid-cards.pricing-stack-active
          > .pricing-card {
          animation:
            pricingCardStackReveal
            1.15s
            cubic-bezier(.16, 1, .3, 1)
            forwards;

          animation-delay:
            calc(var(--delay) + .15s);
        }

        @keyframes pricingCardStackReveal {

          /* Behind the previous card */
          0% {
            opacity: 0;

            transform:
              translate3d(-48px, 42px, -90px)
              scale(.94)
              rotateY(-8deg)
              rotateZ(-1deg);
          }

          /* Card becomes visible while lifting */
          28% {
            opacity: 1;
          }

          /* Lift out of the stack and move right */
          55% {
            opacity: 1;

            transform:
              translate3d(25px, -22px, 45px)
              scale(1.025)
              rotateY(2deg)
              rotateZ(.7deg);
          }

          /* Small settling movement */
          78% {
            transform:
              translate3d(-5px, 5px, 10px)
              scale(1.008)
              rotateY(-.4deg)
              rotateZ(-.15deg);
          }

          /* Final position */
          100% {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              scale(1)
              rotateY(0deg)
              rotateZ(0deg);
          }
        }

        /* =====================================================
           CARD
           ===================================================== */

        .pricing-card {
          --rx: 0deg;
          --ry: 0deg;

          position: relative;

          min-height: 690px;

          padding: 28px 24px 22px;

          display: flex;
          flex-direction: column;

          overflow: hidden;

          border:
            1px solid rgba(56,189,248,.13);

          border-radius: 3px;

          background:
            linear-gradient(
              145deg,
              rgba(10,24,38,.9),
              rgba(4,12,21,.96)
            );

          transform:
            perspective(1000px)
            rotateX(var(--rx))
            rotateY(var(--ry));

          transition:
            transform .5s
            cubic-bezier(.2,.8,.2,1),
            border-color .35s ease,
            box-shadow .35s ease;

          box-shadow:
            inset 0 0 40px rgba(56,189,248,.018);
        }

        .pricing-card:hover {
          border-color:
            rgba(56,189,248,.34);

          box-shadow:
            0 20px 70px rgba(0,0,0,.28),
            0 0 35px rgba(56,189,248,.055),
            inset 0 0 50px rgba(56,189,248,.035);
        }

        .pricing-card::before {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(56,189,248,.035) 50%,
              transparent 80%
            );

          transform:
            translateX(-120%);

          transition:
            transform .9s ease;
        }

        .pricing-card:hover::before {
          transform:
            translateX(120%);
        }

        .pricing-card-glow {
          position: absolute;

          width: 170px;
          height: 170px;

          left: var(--mx, 50%);
          top: var(--my, 30%);

          transform:
            translate(-50%, -50%);

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.1),
              transparent 68%
            );

          pointer-events: none;
          opacity: .7;
        }

        .pricing-card.is-featured {
          border-color:
            rgba(56,189,248,.35);

          background:
            linear-gradient(
              145deg,
              rgba(10,30,46,.96),
              rgba(4,13,23,.98)
            );

          box-shadow:
            0 0 50px rgba(56,189,248,.055),
            inset 0 0 60px rgba(56,189,248,.035);
        }

        .pricing-featured-badge {
          position: absolute;

          top: 0;
          right: 0;

          padding: 8px 11px;

          background:
            rgba(56,189,248,.11);

          border-left:
            1px solid rgba(56,189,248,.2);

          border-bottom:
            1px solid rgba(56,189,248,.2);

          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .pricing-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pricing-number {
          color: #3e5669;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .pricing-icon {
          width: 42px;
          height: 42px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(56,189,248,.16);

          border-radius: 50%;

          color: var(--pricing-blue);

          background:
            rgba(56,189,248,.035);

          transition:
            transform .45s ease,
            background .45s ease;
        }

        .pricing-card:hover .pricing-icon {
          transform:
            rotate(12deg)
            scale(1.08);

          background:
            rgba(56,189,248,.09);
        }

        .pricing-card-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 42px;
        }

        .pricing-card h3 {
          margin: 0;

          color: var(--pricing-text);

          font-family: "Inter", sans-serif;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .pricing-arrow {
          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 20px;

          transition:
            transform .35s ease;
        }

        .pricing-card:hover .pricing-arrow {
          transform:
            translate(4px, -4px);
        }

        .pricing-price {
          display: flex;
          align-items: baseline;

          gap: 7px;

          min-height: 80px;

          margin-top: 22px;
        }

        .pricing-price-main {
          color: var(--pricing-text);

          font-family: "Inter", sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
          letter-spacing: -2px;
        }

        .pricing-price-suffix {
          color: #536b7d;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .pricing-card-description {
          min-height: 73px;

          margin: 0;

          color: #657d8f;

          font-size: 10px;
          line-height: 1.75;
        }

        .pricing-divider {
          width: 100%;
          height: 1px;

          margin: 23px 0;

          background:
            linear-gradient(
              90deg,
              rgba(56,189,248,.22),
              transparent
            );
        }

        .pricing-includes-label,
        .pricing-ideal > span {
          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .pricing-features {
          display: grid;
          gap: 11px;

          margin: 18px 0 0;
          padding: 0;

          list-style: none;
        }

        .pricing-features li {
          display: flex;
          align-items: flex-start;

          gap: 9px;

          color: #8ca0af;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.4;
        }

        .pricing-check {
          flex: 0 0 auto;

          color: var(--pricing-blue);

          font-size: 13px;
          line-height: 10px;
        }

        .pricing-ideal {
          margin-top: auto;
          padding-top: 25px;
        }

        .pricing-ideal p {
          margin: 8px 0 0;

          color: #637a8c;

          font-size: 9px;
          line-height: 1.55;
        }

        .pricing-card-button {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 20px;
          padding: 13px 14px;

          border:
            1px solid rgba(56,189,248,.17);

          color: #89a0b0;

          font-family: "Inter", sans-serif;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.6px;

          transition:
            .35s ease;
        }

        .pricing-card-button:hover {
          border-color:
            rgba(56,189,248,.5);

          color: var(--pricing-text);

          background:
            rgba(56,189,248,.06);
        }

        /* =====================================================
           MARKETING
           ===================================================== */

        .pricing-marketing-intro {
          max-width: 680px;

          margin: -15px auto 45px;

          text-align: center;

          color: #687f91;

          font-size: 11px;
          line-height: 1.9;
        }

        /* =====================================================
           MAINTENANCE
           ===================================================== */

        .pricing-maintenance {
          max-width: 900px;
          margin: 90px auto 0;
        }

        .pricing-maintenance-head {
          display: flex;
          align-items: end;
          justify-content: space-between;

          gap: 30px;

          margin-bottom: 30px;
        }

        .pricing-maintenance h3 {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 28px;
          letter-spacing: -1px;
        }

        .pricing-maintenance-head p {
          max-width: 350px;

          margin: 0;

          color: #61788a;

          font-size: 10px;
          line-height: 1.7;
        }

        .pricing-maintenance-table {
          width: 100%;

          border-collapse: collapse;

          border:
            1px solid rgba(56,189,248,.12);

          background:
            rgba(4,12,21,.55);
        }

        .pricing-maintenance-table th,
        .pricing-maintenance-table td {
          padding: 18px 20px;

          border-bottom:
            1px solid rgba(56,189,248,.09);

          text-align: left;
        }

        .pricing-maintenance-table th {
          color: #3f596c;

          font-family: "Inter", sans-serif;
          font-size: 7px;
          letter-spacing: 2px;
        }

        .pricing-maintenance-table td {
          color: #9aabb8;

          font-family: "Inter", sans-serif;
          font-size: 10px;
        }

        .pricing-maintenance-table td:last-child {
          color: var(--pricing-blue);
          text-align: right;
        }

        /* =====================================================
           NOTE
           ===================================================== */

        .pricing-note {
          position: relative;

          margin-top: 100px;
          padding: 70px;

          overflow: hidden;

          border:
            1px solid rgba(56,189,248,.12);

          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(56,189,248,.08),
              transparent 32%
            ),
            rgba(3,11,19,.72);
        }

        .pricing-note::before {
          content: "ZP";

          position: absolute;

          right: 7%;
          top: 50%;

          transform:
            translateY(-50%);

          color: rgba(56,189,248,.045);

          font-family: "Inter", sans-serif;
          font-size: 170px;
          font-weight: 900;
          letter-spacing: -15px;
        }

        .pricing-note-label {
          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .pricing-note h3 {
          max-width: 700px;

          margin: 20px 0;

          font-family: "Inter", sans-serif;
          font-size: clamp(35px, 5vw, 65px);
          line-height: .95;
          letter-spacing: -4px;
        }

        .pricing-note p {
          max-width: 720px;

          margin: 0;

          color: #6d8496;

          font-size: 11px;
          line-height: 1.9;
        }

        /* =====================================================
           VISION
           ===================================================== */

        .pricing-vision {
          position: relative;

          min-height: 70vh;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 130px 7vw;

          text-align: center;

          overflow: hidden;
        }

        .pricing-vision::before {
          content: "";

          position: absolute;

          width: 700px;
          height: 700px;

          border-radius: 50%;

          border:
            1px solid rgba(56,189,248,.08);

          box-shadow:
            0 0 120px rgba(56,189,248,.035),
            inset 0 0 120px rgba(56,189,248,.025);

          animation:
            pricingVisionPulse
            8s
            ease-in-out
            infinite;
        }

        @keyframes pricingVisionPulse {
          0%,100% {
            transform: scale(.94);
            opacity: .55;
          }

          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }

        .pricing-vision-content {
          position: relative;

          z-index: 2;

          max-width: 1000px;
        }

        .pricing-vision-label {
          color: var(--pricing-blue);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .pricing-vision h2 {
          margin: 25px 0 35px;

          font-family: "Inter", sans-serif;
          font-size: clamp(48px, 8vw, 105px);
          line-height: .87;
          letter-spacing: -7px;
        }

        .pricing-vision h2 em {
          color: var(--pricing-blue);

          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -3px;
        }

        .pricing-vision-copy {
          max-width: 620px;

          margin: 0 auto;

          color: #657d90;

          font-size: 11px;
          line-height: 1.9;
        }

        .pricing-cta {
          display: inline-flex;
          align-items: center;

          gap: 35px;

          margin-top: 35px;

          padding: 16px 20px;

          border:
            1px solid rgba(56,189,248,.25);

          color: var(--pricing-text);

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;

          transition:
            .4s ease;
        }

        .pricing-cta:hover {
          gap: 55px;

          border-color:
            var(--pricing-blue);

          background:
            rgba(56,189,248,.06);

          box-shadow:
            0 0 30px rgba(56,189,248,.07);
        }

        /* =====================================================
           REVEAL
           ===================================================== */

        .pricing-reveal {
          opacity: 0;

          transform:
            translateY(35px);

          transition:
            opacity .8s ease,
            transform .9s
            cubic-bezier(.2,.75,.2,1);
        }

        .pricing-reveal.is-visible {
          opacity: 1;

          transform:
            translateY(0);
        }

        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 1200px) {

          .pricing-visual {
            width: 500px;
            height: 500px;
            right: -100px;
          }

          .pricing-grid-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .pricing-card {
            min-height: 650px;
          }
        }

        @media (max-width: 900px) {

          .pricing-hero {
            min-height: 100svh;

            padding:
              120px 6vw 90px;
          }

          .pricing-hero-content {
            width: 72%;
          }

          .pricing-visual {
            width: 420px;
            height: 420px;
            right: -145px;
            opacity: .65;
          }

          .pricing-section {
            padding: 90px 6vw;
          }

          .pricing-section-header {
            display: block;
          }

          .pricing-section-description {
            margin-top: 25px;
          }

          .pricing-grid-cards.marketing-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {

          .pricing-hero {
            min-height: 100svh;

            display: flex;
            justify-content: center;
            align-items: center;

            padding:
              105px 24px 70px;

            text-align: center;
          }

          .pricing-grid {
            background-size: 48px 48px;
          }

          .pricing-hero-content {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .pricing-kicker {
            font-size: 8px;
            letter-spacing: 3px;
          }

          .pricing-hero h1 {
            font-size: 18vw;
            line-height: .84;
            letter-spacing: -5px;
          }

          .pricing-hero h1 span {
            transform: none;
            letter-spacing: -2px;
          }

          .pricing-hero-copy {
            max-width: 95%;

            margin-top: 32px;

            font-size: 9px;
            line-height: 1.8;
          }

          .pricing-hero-tags {
            justify-content: center;
            max-width: 320px;
          }

          .pricing-hero-tag {
            font-size: 6px;
            padding: 8px 10px;
          }

          .pricing-visual {
            width: 330px;
            height: 330px;

            right: 50%;
            top: 58%;

            transform:
              translate(50%, -50%);

            opacity: .28;
            z-index: -1;
          }

          .pricing-core {
            width: 90px;
            height: 90px;
          }

          .pricing-core-inner span {
            font-size: 13px;
            letter-spacing: 3px;
            margin-left: 3px;
          }

          .pricing-section {
            padding: 80px 20px;
          }

          .pricing-section-header {
            text-align: center;
            margin-bottom: 45px;
          }

          .pricing-section h2 {
            font-size: 13vw;
            letter-spacing: -4px;
          }

          .pricing-section-description {
            margin: 25px auto 0;
            font-size: 9px;
          }

          .pricing-switch {
            width: 100%;
            max-width: 350px;
          }

          .pricing-switch button {
            min-width: 0;
            width: 50%;
            padding: 11px 7px;
            font-size: 7px;
          }

          .pricing-grid-cards,
          .pricing-grid-cards.marketing-grid {
            grid-template-columns: 1fr;
          }

          /*
            Mobile:
            Keep the stacked motion but make it softer.
          */
          .pricing-grid-cards > .pricing-card {
            transform:
              translate3d(-25px, 25px, -40px)
              scale(.97)
              rotateY(-4deg);
          }

          .pricing-grid-cards.pricing-stack-active
            > .pricing-card {
            animation:
              pricingCardStackRevealMobile
              1s
              cubic-bezier(.16, 1, .3, 1)
              forwards;

            animation-delay:
              calc(var(--delay) + .15s);
          }

          @keyframes pricingCardStackRevealMobile {

            0% {
              opacity: 0;

              transform:
                translate3d(-25px, 25px, -40px)
                scale(.97)
                rotateY(-4deg);
            }

            30% {
              opacity: 1;
            }

            58% {
              transform:
                translate3d(15px, -12px, 20px)
                scale(1.015)
                rotateY(1deg);
            }

            80% {
              transform:
                translate3d(-3px, 3px, 5px)
                scale(1.005);
            }

            100% {
              opacity: 1;

              transform:
                translate3d(0, 0, 0)
                scale(1)
                rotateY(0deg);
            }
          }

          .pricing-card {
            min-height: auto;

            padding:
              25px 20px 20px;
          }

          .pricing-card h3 {
            font-size: 24px;
          }

          .pricing-price-main {
            font-size: 34px;
          }

          .pricing-card-description {
            min-height: auto;
          }

          .pricing-note {
            margin-top: 65px;

            padding:
              45px 25px;

            text-align: center;
          }

          .pricing-note::before {
            font-size: 100px;

            right: 50%;
            top: 50%;

            transform:
              translate(50%, -50%);
          }

          .pricing-note h3 {
            font-size: 11vw;
            letter-spacing: -3px;
          }

          .pricing-note p {
            font-size: 9px;
          }

          .pricing-maintenance {
            margin-top: 65px;
          }

          .pricing-maintenance-head {
            display: block;
            text-align: center;
          }

          .pricing-maintenance-head p {
            margin: 15px auto 0;
          }

          .pricing-maintenance-table th,
          .pricing-maintenance-table td {
            padding: 14px 12px;
          }

          .pricing-maintenance-table td {
            font-size: 8px;
          }

          .pricing-vision {
            min-height: 75svh;
            padding: 90px 20px;
          }

          .pricing-vision::before {
            width: 350px;
            height: 350px;
          }

          .pricing-vision h2 {
            font-size: 14vw;
            letter-spacing: -4px;
          }

          .pricing-vision-copy {
            font-size: 9px;
          }

          .pricing-cta {
            gap: 20px;
            font-size: 7px;
          }
        }

        @media (max-width: 420px) {

          .pricing-hero h1 {
            font-size: 19vw;
          }

          .pricing-card {
            padding:
              22px 17px 18px;
          }

          .pricing-switch button {
            font-size: 6px;
            letter-spacing: 1.2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .pricing-page *,
          .pricing-page *::before,
          .pricing-page *::after {

            animation-duration:
              .01ms !important;

            animation-iteration-count:
              1 !important;

            scroll-behavior:
              auto !important;

            transition-duration:
              .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="pricing-hero">
        <div className="pricing-grid" />

        <div className="pricing-hero-content">

          <div className="pricing-kicker">
            ZEROPOINT LABS / PRICING
          </div>

          <h1>
            Digital
            <span>solutions.</span>
          </h1>

          <p className="pricing-hero-copy">
            Transparent starting points for businesses ready to build,
            modernize, and grow.{" "}
            <strong>
              Every solution is designed around
              your actual business requirements.
            </strong>
          </p>

          <div className="pricing-hero-tags">

            <span className="pricing-hero-tag">
              WEBSITES
            </span>

            <span className="pricing-hero-tag">
              SOFTWARE
            </span>

            <span className="pricing-hero-tag">
              MARKETING
            </span>

            <span className="pricing-hero-tag">
              AUTOMATION
            </span>

          </div>
        </div>

        <FloatingOrb />
      </section>

      {/* WEBSITE PRICING */}

      <section className="pricing-section">

        <Reveal>

          <div className="pricing-section-header">

            <div>

              <div className="pricing-section-kicker">
                01 / WEBSITE + SOFTWARE
              </div>

              <h2>
                Choose your
                <br />
                <em>growth level.</em>
              </h2>

            </div>

            <p className="pricing-section-description">
              From a first professional digital presence to advanced
              operational software, choose the level that best matches
              where your business is today.
            </p>

          </div>

        </Reveal>

        <div className="pricing-switch-wrap">

          <div className="pricing-switch">

            <button
              className={
                activeTab === "website"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("website")
              }
            >
              WEBSITE & SOFTWARE
            </button>

            <button
              className={
                activeTab === "marketing"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("marketing")
              }
            >
              DIGITAL MARKETING
            </button>

          </div>

        </div>

        {activeTab === "website" ? (

          <div
            ref={pricingCardsRef}
            className={`pricing-grid-cards ${
              cardsActive
                ? "pricing-stack-active"
                : ""
            }`}
          >

            {websitePlans.map(
              (plan, index) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  index={index}
                />
              )
            )}

          </div>

        ) : (

          <>

            <p className="pricing-marketing-intro">
              Performance-focused plans for businesses
              that want stronger visibility, better content
              systems, lead generation and measurable
              digital growth.
            </p>

            <div
              ref={pricingCardsRef}
              className={`pricing-grid-cards marketing-grid ${
                cardsActive
                  ? "pricing-stack-active"
                  : ""
              }`}
            >

              {marketingPlans.map(
                (plan, index) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    index={index}
                  />
                )
              )}

            </div>

          </>
        )}

        {/* MAINTENANCE */}

        <Reveal className="pricing-maintenance">

          <div className="pricing-maintenance-head">

            <div>

              <div className="pricing-section-kicker">
                02 / CONTINUITY
              </div>

              <h3>
                Website Maintenance
              </h3>

            </div>

            <p>
              Keep your digital presence maintained
              after launch with a plan that fits your
              level of support.
            </p>

          </div>

          <table className="pricing-maintenance-table">

            <thead>

              <tr>

                <th>PLAN</th>

                <th
                  style={{
                    textAlign: "right",
                  }}
                >
                  PRICE
                </th>

              </tr>

            </thead>

            <tbody>

              {maintenancePlans.map(
                (plan) => (

                  <tr key={plan.name}>

                    <td>
                      {plan.name}
                    </td>

                    <td>
                      {plan.price}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </Reveal>

        {/* IMPORTANT NOTE */}

        <Reveal>

          <div className="pricing-note">

            <div className="pricing-note-label">
              IMPORTANT NOTE
            </div>

            <h3>
              Every business is unique.
            </h3>

            <p>
              The prices shown above are starting
              estimates. Final pricing depends on your
              project requirements, features,
              integrations, and timeline. After
              understanding your needs, we'll provide a
              detailed proposal with transparent pricing.
            </p>

          </div>

        </Reveal>

      </section>

      {/* FINAL VISION */}

      <section className="pricing-vision">

        <div className="pricing-vision-content">

          <div className="pricing-vision-label">
            ZEROPOINT LABS / VISION
          </div>

          <h2>
            We're not building
            <br />
            <em>projects.</em>
            <br />
            We're building
            <br />
            <em>partnerships.</em>
          </h2>

          <p className="pricing-vision-copy">
            Let's create digital solutions that help your
            business grow. Whether you're launching your
            first website, improving business systems, or
            looking for long-term digital growth, we'll
            build around the goals that matter.
          </p>

          <Link
            to="/contact"
            className="pricing-cta"
          >
            START A CONVERSATION
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}
