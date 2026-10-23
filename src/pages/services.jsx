import React, { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight, ArrowRight, ExternalLink, Code2, Sparkles,
  TrendingUp, Workflow, Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONTACT = "/contact";

const resultCards = [
  {
    id: "01", client: "BIG BITES", category: "WEBSITE DEVELOPMENT",
    number: "30+", label: "Franchise Enquiries",
    image: "/images/results/big-bites-website.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [{ value: "30+", label: "Franchise Enquiries" }, { value: "5", label: "Conversions" }, { value: "1 Month", label: "After Website Launch" }],
    description: "Website-driven franchise enquiries generated after the launch of the Big Bites website.",
  },
  {
    id: "02", client: "BIG BITES", category: "YOUTUBE",
    number: "17K+", label: "Organic Subscribers",
    image: "/images/results/big-bites-youtube.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [{ value: "17K+", label: "Organic Subscribers" }, { value: "15", label: "Shorts" }, { value: "Organic", label: "Audience Growth" }],
    description: "Short-form content strategy and social media management focused on organic audience growth.",
  },
  {
    id: "03", client: "BIG BITES", category: "INSTAGRAM",
    number: "3.5K+", label: "Organic Followers",
    image: "/images/results/big-bites-instagram.png",
    logo: "/images/results/big-bites-logo.png",
    stats: [{ value: "3.5K+", label: "Organic Followers" }, { value: "Organic", label: "Reach" }, { value: "Audience", label: "Growth" }],
    description: "Short-form content and social media management focused on building organic reach and audience growth.",
  },
  {
    id: "04", client: "BK HOMES", category: "META ADS",
    number: "65+", label: "Home Enquiries",
    image: "/images/results/bk-homes.png", logo: "/images/results/bk-homes.png",
    stats: [{ value: "65+", label: "Home Enquiries" }, { value: "₹564", label: "Meta Ad Spend" }, { value: "₹8.68", label: "Cost / Enquiry" }],
    description: "Generated 65+ direct enquiries from people interested in discussing their home construction requirements through a Meta Ads campaign.",
  },
];

const selectedWork = [
  { number: "01", title: "Paara Jewellery", category: "E-COMMERCE WEBSITE", description: "A digital storefront designed to present jewellery products through a refined and conversion-focused shopping experience.", image: "/images/work/paara-jewellery.jpg", link: "https://paarajewellery.in" },
  { number: "02", title: "KS Sports Arena", category: "SPORTS BOOKING PLATFORM", description: "A sports-focused booking platform built to help customers discover facilities and manage their bookings online.", image: "/images/work/ks-sports-arena.jpg", link: "https://www.kssportsarena.in/" },
  { number: "03", title: "AK Builders", category: "BUSINESS WEBSITE", description: "A professional business website designed to establish a strong digital presence and communicate the company's services.", image: "/images/work/ak-builders.jpg", link: "https://ak-builders.vercel.app/" },
  { number: "04", title: "Big Bites", category: "FOOD BUSINESS WEBSITE", description: "A modern digital presence for a food business, designed around brand visibility and franchise opportunities.", image: "/images/work/big-bites.jpg", link: "https://www.thebigbites.in/" },
];

const services = [
  { number: "01", title: "BUILD", subtitle: "Websites & Web Applications", description: "Turn your business into a digital experience.", details: "We design and develop modern, responsive digital platforms that help businesses establish credibility, attract customers and simplify how they operate online.", items: ["Business Websites", "E-commerce Websites", "Booking & Appointment Systems", "Landing Pages", "Custom Web Applications", "Customer Portals", "Business Dashboards", "API & Third-party Integrations"], process: "Understand → Design → Develop → Test → Launch", price: "₹19,999+", note: "Final pricing depends on project scope, features, integrations and complexity.", icon: Code2 },
  { number: "02", title: "GROW", subtitle: "Digital Marketing & Performance", description: "Turn attention into business.", details: "We help businesses create consistent content, reach the right audience and turn digital platforms into customer acquisition channels.", items: ["Social Media Management", "Content Strategy", "Instagram & YouTube Management", "Meta Ads", "Performance Marketing", "Lead Generation", "Campaign Management", "Content Planning", "Analytics & Reporting", "Basic SEO & Search Visibility"], process: "Research → Strategy → Create → Publish → Promote → Analyse → Optimise", price: "₹12,000/month", note: "Advertising budget is separate from our management fee.", icon: TrendingUp },
  { number: "03", title: "CREATE", subtitle: "Content Production", description: "Content that makes your business worth noticing.", details: "We create high-quality visual content that can be used across Instagram, YouTube, websites and advertising campaigns.", items: ["Business Video Shoots", "Instagram Reels", "Short-form Video Content", "Product Videos", "Promotional Videos", "Brand Videos", "Product Photography", "Business Photography", "Social Media Content", "Content Production Days"], process: "Concept → Script → Shoot → Edit → Deliver", price: "₹5,000+", note: "Final pricing depends on location, shooting duration, equipment, number of deliverables and production requirements.", icon: Sparkles },
  { number: "04", title: "AUTOMATE", subtitle: "Business Software & Automation", description: "Replace manual work with smarter systems.", details: "We build custom software solutions that organize your operations and help you manage your business more efficiently.", items: ["Inventory Management Systems", "CRM Systems", "Customer Management Systems", "Billing Systems", "Booking Management Systems", "Business Dashboards", "Sales & Operations Systems", "Custom Business Software", "Business Automation", "API & System Integrations"], process: "Understand → Architect → Develop → Test → Deploy → Support", price: "₹75,000+", note: "Final pricing depends on modules, users, workflows, integrations and technical complexity.", icon: Workflow },
];

const buttonClass = "animated-button inline-flex items-center justify-center gap-3";

function AnimatedButton({ to = CONTACT, children, secondary = false }) {
  return <Link to={to} className={`${buttonClass} ${secondary ? "animated-button-secondary" : ""}`}>
    <span className="button-circle" />
    <ArrowRight className="button-arrow button-arrow-left" size={18} />
    <span className="button-label">{children}</span>
    <ArrowUpRight className="button-arrow button-arrow-right" size={18} />
  </Link>;
}

function ProjectImage({ src, alt, number, className = "" }) {
  const [imageFailed, setImageFailed] = React.useState(false);
  return <div className={`project-image ${className}`}>
    <div className="project-image-placeholder">
      <span className="placeholder-number">{number}</span>
      <span className="placeholder-label">PROJECT PREVIEW</span>
    </div>
    {!imageFailed && <img src={src} alt={alt} className="project-image-content" loading="lazy" onError={() => setImageFailed(true)} />}
    <div className="project-image-shade" />
  </div>;
}

export default function Services() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set(".services-hero-element, .service-card, .results-heading, .result-card, .work-heading, .work-card, .final-cta, .approach-item", { clearProps: "all" });
        return;
      }
      // Scroll choreography adapted from the reference: a clearing hero veil,
      // layered parallax, scroll-scrubbed image drift and focus-led card reveals.
      gsap.from(".services-hero-element", { y: 42, opacity: 0, filter: "blur(8px)", duration: 1.1, stagger: 0.13, ease: "power4.out", clearProps: "filter,transform" });
      gsap.to(".hero-glow-one", { x: 45, y: -20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-glow-two", { x: -35, y: 25, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const heroScroll = gsap.timeline({ scrollTrigger: { trigger: ".zpl-services > section:first-of-type", start: "top top", end: "bottom top", scrub: 0.8 } });
      heroScroll.to(".hero-image", { yPercent: 4, ease: "none" }, 0)
        .to(".hero-dust", { yPercent: -28, opacity: 0, ease: "none" }, 0);
      gsap.from(".service-card", { y: 70, opacity: 0, rotateX: 4, duration: 0.95, stagger: 0.14, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".services-grid", start: "top 82%", toggleActions: "play none none reverse" } });
      gsap.utils.toArray(".reveal-heading").forEach((heading) => gsap.from(heading, { y: 42, opacity: 0, filter: "blur(5px)", duration: 0.9, ease: "power3.out", clearProps: "filter,transform", scrollTrigger: { trigger: heading, start: "top 86%", toggleActions: "play none none reverse" } }));
      gsap.from(".result-card", { y: 58, opacity: 0, scale: 0.96, duration: 0.8, stagger: 0.14, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".results-section", start: "top 75%", toggleActions: "play none none reverse" } });
      // Each result subtly comes into focus as it crosses the viewport's centre.
      gsap.utils.toArray(".result-card").forEach((card) => gsap.fromTo(card,
        { scale: 0.975, opacity: 0.78 },
        { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: card, start: "top 82%", end: "center 52%", scrub: 0.6 } }
      ));
      // Reference-inspired mission reel: selected work travels horizontally on desktop,
      // with the card nearest the viewport centre becoming sharp and fully lit.
      const workMedia = gsap.matchMedia();
      workMedia.add("(min-width: 900px)", () => {
        const viewport = pageRef.current?.querySelector(".work-reel-viewport");
        const track = pageRef.current?.querySelector(".work-track");
        if (!viewport || !track) return;
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
        gsap.to(track, {
          x: () => -distance(), ease: "none",
          scrollTrigger: {
            trigger: ".work-reel", start: "top top+=100", end: () => `+=${distance() + window.innerHeight * 0.35}`,
            pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
          },
        });
        gsap.utils.toArray(".work-card").forEach((card) => {
          gsap.fromTo(card, { scale: 0.88, opacity: 0.38, filter: "blur(3px)" }, {
            scale: 1, opacity: 1, filter: "blur(0px)", ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: gsap.getTweensOf(track)[0], start: "left 88%", end: "center 52%", scrub: true },
          });
        });
      });
      workMedia.add("(max-width: 899px)", () => {
        gsap.from(".work-card", { y: 52, opacity: 0, duration: 0.85, stagger: 0.13, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: ".work-track", start: "top 82%", toggleActions: "play none none reverse" } });
      });
      gsap.from(".approach-item", { y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power2.out", clearProps: "transform", scrollTrigger: { trigger: ".approach-grid", start: "top 85%", toggleActions: "play none none reverse" } });
      gsap.utils.toArray(".final-cta-content").forEach((content) => gsap.from(content, { y: 42, opacity: 0, duration: 0.95, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: content.closest(".final-cta"), start: "top 82%", toggleActions: "play none none reverse" } }));
      gsap.utils.toArray(".project-image").forEach((frame) => {
        const image = frame.querySelector(".project-image-content");
        if (image) {
          gsap.fromTo(image, { objectPosition: "50% 42%" }, { objectPosition: "50% 58%", ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.65 } });
        }
      });
    }, pageRef);
    return () => context.revert();
  }, []);

  return <main ref={pageRef} className="zpl-services relative min-h-screen overflow-hidden">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

      .zpl-services {
        --zpl-bg: #211A15;
        --zpl-navy: #211A15;
        --zpl-cyan: #A88960;
        --zpl-ice: #FFFFFF;
        --zpl-muted: #C9B69B;
        --zpl-mocha: #30251E;
        --zpl-ivory: #F3EDE0;
        --zpl-beige: #C9B69B;
        --zpl-bronze: #A88960;
        --zpl-white: #FFFFFF;
        background: var(--zpl-bg);
        color: var(--zpl-white);
        font-family: 'Montserrat', sans-serif;
      }
      .zpl-services h1,.zpl-services h2,.zpl-services h3,.zpl-services h4,
      .zpl-services button,.zpl-services a { font-family: 'Montserrat', sans-serif; }
      .zpl-services p,.zpl-services .body-serif { font-family: 'Lora', serif; }
      .zpl-services .serif-accent { font-family: 'Lora',serif; font-style: italic; font-weight: 600; color: var(--zpl-bronze); }
      .zpl-services p { text-wrap: pretty; }
      .hero-dust { opacity:.22; background:linear-gradient(180deg,rgba(20,15,12,.12),rgba(20,15,12,.42)); mix-blend-mode:normal; will-change:transform,opacity; pointer-events:none; }
      .zpl-grid { display:none !important; pointer-events:none; }
      .zpl-noise { display:none !important; pointer-events:none; }
      .premium-text { background:linear-gradient(100deg,#FFFFFF 0%,#F3EDE0 52%,#C9B69B 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }
      .hero-image {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: none;
        will-change: background-position;
      }
      @media (max-width: 768px) {
        .hero-image { background-position: center center; background-size: cover; }
      }
      @media (min-width: 769px) and (max-width: 1200px) {
        .hero-image { background-position: center center; background-size: cover; }
      }
      .hero-rule { background:linear-gradient(90deg,var(--zpl-bronze),transparent); }
      .animated-button { position:relative; isolation:isolate; overflow:hidden; min-height:54px; padding:14px 24px; border:1px solid rgba(168,137,96,.8); border-radius:999px; color:var(--zpl-ivory); background:rgba(48,37,30,.72); box-shadow:0 0 0 1px rgba(168,137,96,.08); font-size:12px; font-weight:600; letter-spacing:.025em; transition:color .5s ease,border-radius .5s ease,box-shadow .5s ease,border-color .5s ease; }
      .animated-button .button-label,.animated-button .button-arrow { position:relative; z-index:2; transition:transform .55s cubic-bezier(.23,1,.32,1),color .4s ease; }
      .animated-button .button-arrow-left { position:absolute; left:-28px; }
      .animated-button .button-arrow-right { margin-left:2px; }
      .animated-button .button-circle { position:absolute; z-index:0; width:18px; height:18px; top:50%; left:50%; transform:translate(-50%,-50%); border-radius:50%; background:var(--zpl-bronze); opacity:0; transition:width .65s cubic-bezier(.23,1,.32,1),height .65s cubic-bezier(.23,1,.32,1),opacity .4s ease; }
      .animated-button:hover { color:#211A15; border-radius:14px; border-color:var(--zpl-bronze); box-shadow:0 0 0 7px rgba(168,137,96,.08); }
      .animated-button:hover .button-circle { width:340px; height:220px; opacity:1; }
      .animated-button:hover .button-arrow-left { left:18px; transform:translateX(0); }
      .animated-button:hover .button-arrow-right { transform:translate(15px,-15px); opacity:0; }
      .animated-button:hover .button-label { transform:translateX(10px); }
      .animated-button:active { transform:scale(.98); }
      .animated-button-secondary { background:transparent; border-color:rgba(243,237,224,.3); color:#F3EDE0; }
      .animated-button-secondary .button-circle { background:#F3EDE0; }
      .service-parent { perspective:1200px; }
      .service-card { min-width:0; transform-style:preserve-3d; }
      .service-card-inner { isolation:isolate; transform-style:preserve-3d; background:#30251E; box-shadow:0 18px 45px rgba(0,0,0,.16); transition:transform .65s cubic-bezier(.2,.8,.2,1),box-shadow .65s ease,border-color .4s ease; }
      .service-parent:hover .service-card-inner { transform:translateY(-7px) rotateX(1deg); border-color:rgba(168,137,96,.55); box-shadow:0 30px 75px rgba(0,0,0,.32),0 0 45px rgba(168,137,96,.08); }
      .service-glass { position:relative; z-index:1; background:#30251E; transition:transform .65s cubic-bezier(.2,.8,.2,1); }
      .service-parent:hover .service-glass { transform:translateY(-2px); }
      .service-card-inner::after { content:""; position:absolute; inset:0; z-index:0; pointer-events:none; background:linear-gradient(135deg,rgba(201,182,155,.035),transparent 42%,rgba(168,137,96,.035)); }
      .service-card-inner:focus-within { border-color:rgba(168,137,96,.65); box-shadow:0 0 0 3px rgba(168,137,96,.1); }
      .service-orb { pointer-events:none; transition:transform .7s cubic-bezier(.2,.8,.2,1); }
      .service-parent:hover .service-orb.one { transform:translate3d(-10px,12px,45px) scale(1.1); }
      .service-parent:hover .service-orb.two { transform:translate3d(12px,-10px,30px) scale(1.08); }
      .service-link { transition:color .3s ease,letter-spacing .3s ease; }
      .service-parent:hover .service-link { color:var(--zpl-bronze); letter-spacing:.08em; }
      .result-card { min-width:0; background:linear-gradient(155deg,#30251E,#211A15 70%); border:1px solid rgba(201,182,155,.18); border-radius:23px; transition:transform .45s ease,border-color .4s ease,box-shadow .45s ease; }
      .result-card:hover { transform:translateY(-7px); border-color:rgba(168,137,96,.55); box-shadow:0 25px 65px rgba(0,0,0,.25); }
      .project-image { position:relative; overflow:hidden; background:linear-gradient(145deg,#30251E,#211A15); isolation:isolate; }
      .project-image-placeholder { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:8px; background:linear-gradient(145deg,#30251E,#211A15); }
      .placeholder-number { color:rgba(243,237,224,.17); font-size:52px; font-weight:800; letter-spacing:-.07em; }
      .placeholder-label { color:#C9B69B; font-size:9px; letter-spacing:.28em; }
      .project-image-content { position:absolute; inset:0; z-index:1; width:100%; height:100%; object-fit:cover; will-change:transform; transition:transform 1s cubic-bezier(.2,.8,.2,1),filter .7s ease; }
      .result-card:hover .project-image-content,.work-card:hover .project-image-content { transform:scale(1.075); filter:saturate(1.08); }
      .project-image::after { content:""; position:absolute; inset:0; z-index:3; pointer-events:none; border:1px solid rgba(243,237,224,.05); border-radius:inherit; }
      .work-card:focus-within,.result-card:focus-within { border-color:rgba(168,137,96,.65); }
      .zpl-services a:focus-visible { outline:2px solid #A88960; outline-offset:4px; }
      .zpl-services .service-parent, .zpl-services .result-card, .zpl-services .work-card { backface-visibility:hidden; }
      @media(hover:none) { .service-parent:hover .service-card-inner { transform:none; } .service-parent:hover .service-glass { transform:none; } }
      .project-image-shade { position:absolute; inset:0; z-index:2; background:linear-gradient(0deg,rgba(33,26,21,.65),transparent 65%); pointer-events:none; }
      .work-reel-viewport { overflow:hidden; }
      .work-track { display:grid; grid-template-columns:minmax(0,1fr); gap:20px; }
      .work-card { transform-origin:center center; }
      @media(min-width:900px) {
        .work-reel { position:relative; }
        .work-reel-viewport { overflow:visible; width:100%; }
        .work-track { display:flex; width:max-content; gap:24px; padding:8px 5vw 26px 0; }
        .work-card { width:min(68vw,760px); min-height:500px; }
        .work-card .project-image { min-height:280px; }
        .work-heading { margin-bottom:36px; }
      }
      @media(max-width:899px) { .work-reel-viewport { overflow:visible; } .work-track { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); } }
      @media(max-width:639px) { .work-track { grid-template-columns:minmax(0,1fr); } }
      .work-card { border:1px solid rgba(201,182,155,.18); border-radius:24px; background:#30251E; transition:transform .45s ease,border-color .4s ease,box-shadow .45s ease; }
      .work-card:hover { transform:translateY(-6px); border-color:rgba(168,137,96,.5); box-shadow:0 24px 60px rgba(0,0,0,.22); }
      .result-stat { min-width:0; overflow-wrap:anywhere; }
      .soft-divider { height:1px; background:linear-gradient(90deg,rgba(168,137,96,.65),rgba(255,255,255,.08),transparent); }
      .approach-item { transition:background .3s ease,border-color .3s ease; }
      .approach-item:hover { background:#30251E; }
      @media(max-width:767px) { .service-parent:hover .service-card-inner { transform:translateY(-4px); } .animated-button { min-height:49px; padding:12px 19px; } .service-orb { opacity:.65; } }
      @media(min-width:768px) { .result-card,.work-card,.service-card-inner { will-change:transform; } }
      @media(prefers-reduced-motion:reduce) { .hero-glow-one,.hero-glow-two { animation:none!important; } }
      @media(prefers-reduced-motion:reduce) { .zpl-services *,.zpl-services *::before,.zpl-services *::after { scroll-behavior:auto!important; animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; } }
    `}</style>

    {/* HERO */}
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#211A15]">
      <div className="absolute inset-0">
        <div className="hero-image absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg,rgba(20,15,12,.98) 0%,rgba(20,15,12,.94) 55%,rgba(20,15,12,.88) 100%),linear-gradient(0deg,#211A15 0%,rgba(33,26,21,.35) 70%,rgba(33,26,21,.2) 100%),url('/images/services/services-hero-bg.png')" }} />
        <div className="zpl-grid absolute inset-0" /><div className="zpl-noise absolute inset-0" />
        <div className="hero-glow-one absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-[#A88960]/10 blur-[120px]" />
        <div className="hero-glow-two absolute bottom-[12%] right-[12%] h-80 w-80 rounded-full bg-[#C9B69B]/[.07] blur-[140px]" />
        <div className="hero-dust pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
        <div className="max-w-5xl">
          <div className="services-hero-element mb-7 flex items-center gap-4"><span className="hero-rule h-px w-12" /><span className="text-[10px] font-semibold uppercase tracking-[.4em] text-[#A88960] sm:text-xs">ZEROPOINT LABS / SERVICES</span></div>
          <h1 className="services-hero-element text-5xl font-extrabold leading-[.92] tracking-[-.065em] text-white sm:text-7xl lg:text-[7.8rem]">Digital<br /><span className="premium-text">Solutions.</span></h1>
          <p className="services-hero-element body-serif mt-8 max-w-2xl text-sm leading-7 text-[#C9B69B] sm:text-base sm:leading-8">From building your digital presence to growing your audience and automating your operations, ZeroPoint Labs provides technology, marketing and creative solutions designed for growing businesses. <strong className="font-bold text-white">Every solution is designed around your actual business requirements.</strong></p>
          <div className="services-hero-element mt-8 flex flex-wrap gap-3">{["BUILD","GROW","CREATE","AUTOMATE"].map(item => <span key={item} className="rounded-full border border-[#C9B69B]/25 px-4 py-2 text-[9px] font-semibold tracking-[.25em] text-[#C9B69B] transition hover:border-[#A88960]/70 hover:text-white"><span className="mr-2 text-[#A88960]">•</span>{item}</span>)}</div>
          <div className="services-hero-element mt-10 flex flex-wrap gap-4"><AnimatedButton>Start a Project</AnimatedButton><AnimatedButton to="/services#work" secondary>View Our Work</AnimatedButton></div>
        </div>
        <div className="services-hero-element mt-20 hidden items-center gap-4 text-[9px] uppercase tracking-[.3em] text-[#C9B69B]/60 sm:flex"><span>Strategy</span><span className="text-[#A88960]">/</span><span>Technology</span><span className="text-[#A88960]">/</span><span>Creative</span><span className="text-[#A88960]">/</span><span>Growth</span></div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="relative bg-[#211A15] px-6 py-24 sm:py-32 lg:px-10">
      <div className="zpl-grid absolute inset-0 opacity-50" /><div className="relative mx-auto max-w-7xl">
        <div className="reveal-heading mb-14 max-w-4xl"><div className="mb-5 flex items-center gap-3"><span className="text-[10px] tracking-[.35em] text-[#A88960]">WHAT WE DO</span><span className="h-px w-16 bg-white/10" /></div>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-.05em] text-white sm:text-6xl">One digital partner.<br /><span className="serif-accent text-5xl sm:text-7xl">Multiple capabilities.</span></h2>
          <p className="body-serif mt-6 max-w-2xl text-sm leading-7 text-[#C9B69B]">We don't start with a package. We understand your business, identify what needs to improve, and recommend the right solution.</p>
        </div>
        <div className="services-grid grid gap-6 lg:grid-cols-2">
          {services.map(service => { const Icon = service.icon; return <div key={service.number} className="service-parent service-card">
            <article className="service-card-inner relative h-full overflow-hidden rounded-[30px] border border-[#C9B69B]/20 bg-[#30251E] p-1">
              <div className="service-orb one absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#A88960]/15 bg-[#A88960]/[.045]" /><div className="service-orb two absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-white/5 bg-white/[.02]" />
              <div className="service-glass relative h-full rounded-[26px] border border-[#C9B69B]/10 bg-[#30251E] p-7 sm:p-9">
                <div className="flex items-start justify-between"><div><span className="text-[10px] tracking-[.35em] text-[#A88960]">{service.number} / ZPL SERVICES</span><h3 className="mt-4 text-4xl font-extrabold tracking-[-.06em] text-white sm:text-5xl">{service.title}</h3></div><div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A88960]/30 bg-[#A88960]/[.07] text-[#A88960] transition duration-500"><Icon size={21} strokeWidth={1.5} /></div></div>
                <div className="mt-12"><p className="text-xl font-medium text-white sm:text-2xl">{service.subtitle}</p><p className="mt-3 text-sm font-medium text-[#A88960]">{service.description}</p><p className="body-serif mt-4 max-w-xl text-xs leading-7 text-[#C9B69B] sm:text-sm">{service.details}</p></div>
                <div className="mt-7"><span className="text-[9px] uppercase tracking-[.3em] text-[#C9B69B]/60">What we provide</span><div className="mt-4 flex flex-wrap gap-2">{service.items.map(item => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#C9B69B]/15 bg-[#211A15] px-3 py-2 text-[10px] text-[#C9B69B] transition hover:border-[#A88960]/40 hover:text-white"><Check size={11} className="text-[#A88960]" />{item}</span>)}</div></div>
                <div className="mt-8 rounded-xl border border-[#C9B69B]/15 bg-[#211A15] p-4"><span className="text-[9px] uppercase tracking-[.25em] text-[#C9B69B]/60">Our process</span><p className="mt-2 text-xs leading-6 text-[#F3EDE0]">{service.process}</p></div>
                <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="block text-[9px] uppercase tracking-[.25em] text-[#C9B69B]/60">{service.title === "GROW" ? "Plans from" : "Starting from"}</span><span className="mt-2 block text-2xl font-semibold tracking-tight text-white">{service.price}</span><p className="mt-2 max-w-sm text-[10px] leading-5 text-[#C9B69B]/75">{service.note}</p></div><Link to={CONTACT} className="service-link inline-flex shrink-0 items-center gap-2 py-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#A88960]">Discuss your project <ArrowUpRight size={15} /></Link></div>
              </div>
            </article>
          </div>; })}
        </div>
      </div>
    </section>

    {/* WHY ZEROPOINT LABS */}
    <section className="border-y border-[#C9B69B]/10 bg-[#30251E] px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div className="reveal-heading"><span className="text-[10px] uppercase tracking-[.35em] text-[#A88960]">WHY ZEROPOINT LABS?</span><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em] text-white sm:text-6xl">One Partner.<br /><span className="serif-accent text-5xl sm:text-7xl">Multiple Capabilities.</span></h2><p className="body-serif mt-6 max-w-lg text-sm leading-7 text-[#C9B69B]">Instead of working with separate teams for your website, marketing, content and business software, ZeroPoint Labs brings these capabilities together.</p></div>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[#C9B69B]/15 bg-[#C9B69B]/15 sm:grid-cols-2">{[{title:"Technology",description:"Modern websites, web applications and business systems.",icon:Code2},{title:"Creative",description:"Professional content designed around your brand.",icon:Sparkles},{title:"Growth",description:"Social media and performance marketing focused on business objectives.",icon:TrendingUp},{title:"Automation",description:"Systems that reduce manual work and organize your operations.",icon:Workflow}].map(item=>{const Icon=item.icon;return <article key={item.title} className="bg-[#211A15] p-7 transition hover:bg-[#30251E]"><Icon size={20} className="text-[#A88960]"/><h3 className="mt-5 text-lg font-medium text-white">{item.title}</h3><p className="body-serif mt-3 text-xs leading-6 text-[#C9B69B]">{item.description}</p></article>;})}</div>
    </div></section>

    {/* RESULTS THAT SPEAK */}
    <section className="results-section relative overflow-hidden bg-[#211A15] px-6 py-24 sm:py-32 lg:px-10"><div className="zpl-grid absolute inset-0 opacity-30"/><div className="relative mx-auto max-w-[1450px]">
      <div className="results-heading reveal-heading mx-auto mb-14 max-w-4xl text-center"><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">CLIENT RESULTS</span><h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] text-white sm:text-7xl">Results That <span className="serif-accent">Speak.</span></h2><p className="body-serif mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#C9B69B] sm:text-base">We don't just build digital solutions. We focus on measurable outcomes — from generating business enquiries to growing audiences and helping businesses reach more customers.</p></div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{resultCards.map(result=><article key={result.id} className="result-card group overflow-hidden">
        <div className="relative m-2.5 h-[190px] rounded-[15px]"><ProjectImage src={result.image} alt={`${result.client} ${result.category}`} number={result.id} className="h-full w-full rounded-[15px]"/><div className="absolute left-3 top-3 z-10 flex h-10 min-w-12 items-center justify-center rounded-lg border border-white/10 bg-black/55 px-2 backdrop-blur-md"><img src={result.logo} alt={`${result.client} logo`} loading="lazy" className="max-h-7 max-w-16 object-contain" onError={event=>{event.currentTarget.style.display="none";}}/></div><span className="absolute right-3 top-3 z-10 text-[9px] tracking-[.25em] text-white/70">{result.id}</span></div>
        <div className="p-5 pt-3"><div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#C9B69B]/70"><span>{result.client}</span><span className="text-[#A88960]">/</span><span>{result.category}</span></div><div className="mt-7"><div className="text-[3.4rem] font-extrabold leading-none tracking-[-.075em] text-white sm:text-5xl">{result.number}</div><div className="mt-3 text-lg font-medium tracking-tight text-[#F3EDE0]">{result.label}</div></div>
        <div className="mt-7 grid grid-cols-3 border-y border-[#C9B69B]/15 py-5">{result.stats.map((stat,index)=><div key={stat.label} className={`result-stat ${index?"border-l border-[#C9B69B]/15 pl-3":"pr-2"}`}><div className="text-sm font-semibold text-white sm:text-base">{stat.value}</div><div className="mt-1 text-[9px] leading-4 text-[#C9B69B]/70">{stat.label}</div></div>)}</div><p className="body-serif mt-5 min-h-[85px] text-xs leading-6 text-[#C9B69B]">{result.description}</p><div className="soft-divider mt-5"/><div className="mt-4 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.2em] text-[#C9B69B]/60">Selected client result</span><ArrowUpRight size={17} className="text-[#A88960] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"/></div></div>
      </article>)}</div>
      <p className="body-serif mt-9 text-center text-[10px] leading-5 text-[#C9B69B]/65">Results shown are from selected client projects and may vary depending on business, market, campaign, budget and other factors.</p>
    </div></section>

    {/* RESULTS CTA */}
    <section className="final-cta relative overflow-hidden border-y border-[#C9B69B]/10 bg-[#30251E] px-6 py-24 lg:px-10"><div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A88960]/[.08] blur-[130px]"/><div className="final-cta-content relative mx-auto max-w-4xl text-center"><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">YOUR BUSINESS COULD BE NEXT</span><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] text-white sm:text-6xl">Let's Create Your<br/><span className="serif-accent text-5xl sm:text-7xl">Next Result.</span></h2><p className="body-serif mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#C9B69B]">Every business has a different goal. Let's build the right digital solution to help you achieve yours.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link to="/services#work" className="animated-button"><span className="button-circle"/><ArrowRight className="button-arrow button-arrow-left" size={18}/><span className="button-label">View Our Work</span><ArrowUpRight className="button-arrow button-arrow-right" size={18}/></Link><AnimatedButton>Start a Project</AnimatedButton></div></div></section>

    {/* SELECTED WORK */}
    <section id="work" className="work-section relative bg-[#211A15] px-6 py-24 sm:py-32 lg:px-10"><div className="zpl-grid absolute inset-0 opacity-25"/><div className="relative mx-auto max-w-7xl">
      <div className="work-heading reveal-heading mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">SELECTED WORK</span><h2 className="mt-5 text-5xl font-semibold tracking-[-.06em] text-white sm:text-7xl">Built for<br/><span className="serif-accent text-6xl sm:text-8xl">real businesses.</span></h2></div><p className="body-serif max-w-md text-sm leading-7 text-[#C9B69B]">A selection of websites and digital platforms we've built across different industries and business requirements.</p></div>
      <div className="work-reel"><div className="work-reel-viewport"><div className="work-track">{selectedWork.map(work=><article key={work.number} className="work-card group overflow-hidden"><div className="relative m-3 h-[220px] overflow-hidden rounded-[18px] sm:h-[280px]"><ProjectImage src={work.image} alt={work.title} number={work.number} className="h-full w-full rounded-[18px]"/><span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] uppercase tracking-[.2em] text-[#F3EDE0] backdrop-blur-md">Web Development</span></div><div className="p-5 pt-3 sm:p-6"><div className="flex items-center justify-between gap-4"><div><span className="text-[9px] uppercase tracking-[.3em] text-[#A88960]">{work.number}</span><h3 className="mt-2 text-2xl font-medium tracking-[-.04em] text-white">{work.title}</h3></div><a href={work.link} target="_blank" rel="noreferrer" aria-label={`Visit ${work.title}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9B69B]/20 text-[#C9B69B] transition hover:border-[#A88960]/60 hover:text-[#A88960]"><ExternalLink size={17}/></a></div><p className="mt-4 text-[9px] uppercase tracking-[.25em] text-[#C9B69B]/60">{work.category}</p><p className="body-serif mt-4 max-w-xl text-xs leading-7 text-[#C9B69B] sm:text-sm">{work.description}</p><a href={work.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#C9B69B] transition hover:text-[#A88960]">Visit Project <ArrowUpRight size={15}/></a></div></article>)}</div></div></div>
    </div></section>

    {/* BUSINESS SOFTWARE & SOCIAL MEDIA */}
    <section className="border-t border-[#C9B69B]/10 bg-[#30251E] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-5 lg:grid-cols-2">
      <article className="group rounded-[25px] border border-[#C9B69B]/15 bg-[#211A15] p-7 transition hover:border-[#A88960]/35 sm:p-10"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.35em] text-[#A88960]">BUSINESS SOFTWARE</span><Workflow size={20} className="text-[#A88960]"/></div><h3 className="mt-10 text-3xl font-medium tracking-[-.04em] text-white">Systems that make<br/><span className="serif-accent text-4xl sm:text-5xl">business easier to manage.</span></h3><p className="body-serif mt-5 max-w-lg text-xs leading-7 text-[#C9B69B] sm:text-sm">We are currently developing a CRM & Business Management System designed to help businesses manage customers, operations and their day-to-day business activities more efficiently.</p><div className="mt-8 flex flex-wrap gap-2">{["CRM","Customer Management","Business Operations","Automation"].map(item=><span key={item} className="rounded-full border border-[#C9B69B]/20 px-3 py-2 text-[9px] uppercase tracking-wider text-[#C9B69B]">{item}</span>)}</div><Link to={CONTACT} className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#A88960]">Discuss your requirements <ArrowUpRight size={15}/></Link></article>
      <article className="group rounded-[25px] border border-[#C9B69B]/15 bg-[#211A15] p-7 transition hover:border-[#A88960]/35 sm:p-10"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.35em] text-[#A88960]">SOCIAL MEDIA & CONTENT</span><Sparkles size={20} className="text-[#A88960]"/></div><h3 className="mt-10 text-3xl font-medium tracking-[-.04em] text-white">Content that gets<br/><span className="serif-accent text-4xl sm:text-5xl">people to notice.</span></h3><p className="body-serif mt-5 max-w-lg text-xs leading-7 text-[#C9B69B] sm:text-sm">We handle content planning, scripting, shooting, editing, posting and performance marketing depending on the requirement.</p><div className="mt-8 grid grid-cols-2 border-y border-[#C9B69B]/15 py-6"><div><span className="block text-3xl font-bold tracking-[-.05em] text-white">17K+</span><span className="mt-2 block text-[9px] uppercase tracking-[.2em] text-[#C9B69B]/65">YouTube Subscribers</span></div><div className="border-l border-[#C9B69B]/15 pl-5"><span className="block text-3xl font-bold tracking-[-.05em] text-white">~1K</span><span className="mt-2 block text-[9px] uppercase tracking-[.2em] text-[#C9B69B]/65">Followers in ~2 Weeks</span></div></div><p className="body-serif mt-5 text-xs leading-6 text-[#C9B69B]/80">On YouTube, through 11 videos, the channel reached 17K+ subscribers and is still growing.</p></article>
    </div><div className="mt-6 rounded-2xl border border-[#C9B69B]/10 bg-[#211A15] p-6 text-center sm:p-8"><p className="body-serif text-xs leading-7 text-[#C9B69B]/80 sm:text-sm">Some of our other projects cannot be publicly shared due to client confidentiality, but we can discuss those projects directly if required.</p></div></div></section>

    {/* OUR APPROACH */}
    <section className="bg-[#211A15] px-6 py-24 sm:py-32 lg:px-10"><div className="mx-auto max-w-5xl text-center"><div className="reveal-heading"><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">OUR APPROACH</span><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] text-white sm:text-7xl">We don't start with<br/><span className="serif-accent text-6xl sm:text-8xl">a package.</span></h2><p className="body-serif mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#C9B69B]">We start with the problem. Every business is different. Before recommending a service, we understand what you're trying to achieve and what needs to improve.</p></div>
      <div className="approach-grid mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#C9B69B]/15 bg-[#C9B69B]/15 sm:grid-cols-2 lg:grid-cols-4">{["What are you trying to achieve?","What isn't working currently?","Where are you losing customers or time?","What can technology or marketing improve?"].map((question,index)=><div key={question} className="approach-item border border-transparent bg-[#30251E] p-6 text-left sm:p-7"><span className="text-[9px] tracking-[.25em] text-[#A88960]">0{index+1}</span><p className="mt-5 text-sm leading-6 text-[#F3EDE0]">{question}</p></div>)}</div><p className="body-serif mt-9 text-sm leading-7 text-[#C9B69B]">Then we recommend the appropriate solution.</p>
    </div></section>

    {/* SERVICE COMBINATIONS */}
    <section className="border-y border-[#C9B69B]/10 bg-[#30251E] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="reveal-heading mb-12"><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">SERVICE COMBINATIONS</span><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl">Need more than<br/><span className="serif-accent text-5xl sm:text-7xl">one service?</span></h2><p className="body-serif mt-5 max-w-2xl text-sm leading-7 text-[#C9B69B]">Our services can work together as a complete digital growth system.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[["BUILD + GROW","Launch your website and build your digital presence."],["CREATE + GROW","Produce consistent content and distribute it across your social channels."],["BUILD + AUTOMATE","Connect your website with the systems your business needs."],["BUILD + CREATE + GROW","Build your online presence, create content and actively grow your audience."],["BUILD + GROW + AUTOMATE","A complete digital infrastructure for businesses ready to scale."]].map(([title,description])=><article key={title} className="rounded-2xl border border-[#C9B69B]/15 bg-[#211A15] p-6 transition hover:border-[#A88960]/40 hover:bg-[#30251E] sm:p-7"><span className="text-[10px] font-semibold tracking-[.12em] text-[#A88960]">{title}</span><p className="body-serif mt-4 text-xs leading-7 text-[#C9B69B]">{description}</p></article>)}</div><div className="mt-10"><AnimatedButton>Talk to Our Team</AnimatedButton></div>
    </div></section>

    {/* FINAL CTA */}
    <section className="final-cta relative overflow-hidden bg-[#211A15] px-6 py-28 sm:py-36 lg:px-10"><div className="zpl-grid absolute inset-0 opacity-40"/><div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A88960]/[.07] blur-[130px]"/><div className="final-cta-content relative mx-auto max-w-5xl text-center"><span className="text-[10px] uppercase tracking-[.4em] text-[#A88960]">ZEROPOINT LABS</span><h2 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-[-.06em] text-white sm:text-7xl lg:text-8xl">Let's Build<br/><span className="serif-accent">Something That Works.</span></h2><p className="body-serif mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#C9B69B]">Tell us what you're building, what you're struggling with, or what you want to improve. We'll help you identify the right digital solution.</p><div className="mt-10 flex justify-center"><AnimatedButton>Start a Conversation</AnimatedButton></div><div className="mt-20"><p className="serif-accent text-3xl">Code. Create. Elevate.</p></div></div></section>
  </main>;
}
