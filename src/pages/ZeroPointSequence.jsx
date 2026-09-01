import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Smartphone,
  Globe,
  Code2,
  Megaphone,
  PenLine,
  Video,
  BarChart3,
  FileText,
  Palette,
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);




const services = [
  {
    number: "01",
    title: "Website",
    category: "Websites that don't just look good — they work for your business",
    text: "We design and develop fast, responsive, and scalable websites tailored to your brand and goals. From business websites to complex web applications, we create experiences that are seamless across every device.",
    image:
      "https://t3.ftcdn.net/jpg/04/57/93/78/360_F_457937822_6guyVRMr4cCdCr36zPg7Er7WRaf0FbSn.jpg",
    features: [
      "Responsive, mobile-first websites",
      "Premium UI with smooth interactions",
      "SEO-friendly structure and performance",
      "Contact forms and business integrations",
      "Deployment and ongoing improvements",
    ],

  },

  {
    number: "02",
    title: "Mobile App Development",
    category: "Turn your idea into an application people love to use.",
    text: "We build intuitive and high-performance mobile applications designed around your users. Whether you're launching a new product or transforming an existing business, we help bring your app idea to life.",
    image:
      "https://img.freepik.com/premium-photo/nfc-technology-concept-illustration_839035-444823.jpg",
    features: [
      "Custom Android & iOS app experiences",
      "User-friendly mobile interfaces",
      "API and backend integration",
      "Authentication and secure data flow",
      "Testing, optimization and deployment",
    ],

  },

  {
    number: "03",
    title: "Web Applications",
    category: "Web Applications That Work As Hard As You Do.",
    text: "We build modern, secure, and responsive web applications designed to solve real business problems. From dashboards and management systems to customer platforms and custom web solutions, we create applications that are fast, intuitive, and built to scale.",
    image:
      "https://thumbs.dreamstime.com/z/programming-code-abstract-technology-background-software-deve-developer-computer-script-96434780.jpg",
    features: [
      "Custom dashboards and business systems",
      "Frontend and backend integration",
      "REST API development and integration",
      "Database-driven workflows",
      "Scalable architecture and deployment",
    ],

  },

  {
    number: "04",
    title: "Digital Marketing",
    category: "Turn Attention Into Real Business Growth.",
    text: "We create data-driven digital marketing strategies that help brands reach the right audience, build visibility, generate leads, and grow consistently across digital platforms.",
    image:
      "https://thumbs.dreamstime.com/b/financial-stock-market-chart-candlestick-patterns-volume-bars-showing-trends-data-analysis-blue-background-image-370406401.jpg",
    features: [
      "Social media campaign strategy",
      "Search and content-focused growth",
      "Audience and competitor research",
      "Campaign performance tracking",
      "Conversion-focused optimization",
    ],

  },

  {
    number: "05",
    title: "Branding",
    category: "Build A Brand People Remember.",
    text: "We create distinctive brand identities that communicate who you are, what you stand for, and why your audience should choose you.",
    image:
      "https://studyplex.org/wp-content/uploads/2024/01/Basic-Business-Branding-Masterclass-Course.webp",
    features: [
      "Brand identity and visual direction",
      "Logo and brand asset development",
      "Color, typography and style systems",
      "Social and digital brand assets",
      "Consistent brand guidelines",
    ],

  },

  {
    number: "06",
    title: "Content Creation",
    category: "Content That Captures Attention",
    text: "We create engaging and purposeful content designed to connect with your audience, communicate your message, and keep your brand relevant.",
    image:
      "https://www.industryandbusiness.ca/wp-content/uploads/2024/10/navigating-digital-world-roadmap.jpeg",
    features: [
      "Social media content concepts",
      "Creative posts and visual assets",
      "Short-form content ideas",
      "Content calendars and campaigns",
      "Audience-focused storytelling",
    ],

  },

  {
    number: "07",
    title: "Script Writing",
    category: "Every Great Video Starts With A Great Story.",
    text: "We turn ideas into compelling scripts that capture attention, communicate clearly, and keep audiences engaged from the first second to the last.",
    image:
      "https://img.freepik.com/premium-photo/abstract-creative-coding-illustration-with-world-map-man-hand-writing-diary-background_1002979-30187.jpg",
    features: [
      "Reels and short-video scripts",
      "Brand and promotional scripts",
      "Story structure and hooks",
      "Voiceover-ready writing",
      "Scripts tailored to your audience",
    ],

  },

  {
    number: "08",
    title: "Business Promotion",
    category: "put Your Business In Front Of The Right People.",
    text: "We create promotional strategies that increase brand visibility, attract potential customers, and turn attention into meaningful business opportunities.",
    image:
      "https://png.pngtree.com/background/20230314/original/pngtree-employee-in-career-promotion-concept-vector-picture-image_2133646.jpg",
    features: [
      "Promotional campaign concepts",
      "Launch and awareness strategies",
      "Social media promotion",
      "Audience-focused messaging",
      "Growth and visibility campaigns",
    ],

  },

  {
    number: "09",
    title: "Shooting & Editing",
    category: "Shoot It. Shape It. Make It Stand Out.",
    text: "From capturing the right moment to creating the final visual, we produce polished video content that brings your brand, products, and ideas to life.",
    image:
      "https://www.vrtonung.de/wp-content/uploads/vrtestung_a_sound_engineer_converting_stereo_sound_into_3D_soun_d679f8ac-b560-40b4-b3ed-420ab2e662fd.jpg",
    features: [
      "Video shooting planning",
      "Product and brand-focused visuals",
      "Professional video editing",
      "Reels and short-form edits",
      "Final exports for digital platforms",
    ],

  },

  {
    number: "10",
    title: "Sales & Copywriting",
    category: "Words That Persuade. Copy That Converts.",
    text: "Persuasive copy and communication designed to turn attention into action.",
    image:
      "https://wallpapercave.com/wp/wp2015619.jpg",
    features: [
      "Website and landing-page copy",
      "Conversion-focused sales messaging",
      "Product and service descriptions",
      "Ad and promotional copy",
      "Clear calls-to-action that drive response",
    ],

  },
];
export default function ZeroPointSequence() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  const [isServiceClosing, setIsServiceClosing] = useState(false);

  useEffect(() => {
    if (!activeService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeService]);

  const openService = (service) => {
    setIsServiceClosing(false);
    setActiveService(service);
  };

  const closeService = () => {
    if (!activeService || isServiceClosing) return;

    setIsServiceClosing(true);

    window.setTimeout(() => {
      setActiveService(null);
      setIsServiceClosing(false);
    }, 520);
  };

  const startProject = () => {
    window.location.href = "/contact";
  };
  const goToPricing = () => {
     window.location.href = "/Pricing";
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".zpl-card");

      /*
      -------------------------------------------------------
      INITIAL STATE
      All cards are stacked behind the first card.
      -------------------------------------------------------
      */

      gsap.set(cards, {
        x: 0,
        y: 90,
        scale: 0.65,
        rotation: 0,
        opacity: 0,
        zIndex: 1,
        filter: "blur(8px)",
      });

      // First card is already visible
      gsap.set(cards[0], {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        zIndex: 30,
        filter: "blur(0px)",
      });

      /*
      -------------------------------------------------------
      MASTER TIMELINE
      -------------------------------------------------------
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4200",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
      =======================================================
      PHASE 1
      HERO CONTENT MOVES AWAY
      =======================================================
      */

      tl.to(
        ".zpl-hero-content",
        {
          y: -150,
          scale: 0.75,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        ".zpl-hero-label",
        {
          opacity: 0,
          y: -30,
          duration: 0.5,
        },
        0
      );

      /*
      =======================================================
      PHASE 2
      CARD 02 + CARD 03
      COME FROM BEHIND CARD 01
      =======================================================
      */

      tl.to(
        cards[1],
        {
          x: -250,
          y: 15,
          scale: 0.78,
          rotation: -7,
          opacity: 1,
          zIndex: 20,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
        0.5
      );

      tl.to(
        cards[2],
        {
          x: 250,
          y: 15,
          scale: 0.78,
          rotation: 7,
          opacity: 1,
          zIndex: 20,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
        0.5
      );

      /*
      =======================================================
      PHASE 3
      CARD 04 + CARD 05
      =======================================================
      */

      tl.to(
        cards[3],
        {
          x: -440,
          y: 55,
          scale: 0.65,
          rotation: -10,
          opacity: 1,
          zIndex: 15,
          filter: "blur(1px)",
          duration: 0.7,
          ease: "power3.out",
        },
        1.15
      );

      tl.to(
        cards[4],
        {
          x: 440,
          y: 55,
          scale: 0.65,
          rotation: 10,
          opacity: 1,
          zIndex: 15,
          filter: "blur(1px)",
          duration: 0.7,
          ease: "power3.out",
        },
        1.15
      );

      /*
      =======================================================
      PHASE 4
      CARD 06 + CARD 07
      =======================================================
      */

      tl.to(
        cards[5],
        {
          x: -590,
          y: 105,
          scale: 0.55,
          rotation: -12,
          opacity: 1,
          zIndex: 10,
          filter: "blur(2px)",
          duration: 0.7,
          ease: "power3.out",
        },
        1.8
      );

      tl.to(
        cards[6],
        {
          x: 590,
          y: 105,
          scale: 0.55,
          rotation: 12,
          opacity: 1,
          zIndex: 10,
          filter: "blur(2px)",
          duration: 0.7,
          ease: "power3.out",
        },
        1.8
      );

      /*
      =======================================================
      PHASE 5
      CARD 08 + CARD 09
      =======================================================
      */

      tl.to(
        cards[7],
        {
          x: -700,
          y: 155,
          scale: 0.48,
          rotation: -14,
          opacity: 1,
          zIndex: 8,
          filter: "blur(3px)",
          duration: 0.7,
          ease: "power3.out",
        },
        2.45
      );

      tl.to(
        cards[8],
        {
          x: 700,
          y: 155,
          scale: 0.48,
          rotation: 14,
          opacity: 1,
          zIndex: 8,
          filter: "blur(3px)",
          duration: 0.7,
          ease: "power3.out",
        },
        2.45
      );

      /*
      =======================================================
      PHASE 6
      CARD 10
      =======================================================
      */

      tl.to(
        cards[9],
        {
          x: 0,
          y: 235,
          scale: 0.62,
          rotation: 0,
          opacity: 1,
          zIndex: 12,
          filter: "blur(1px)",
          duration: 0.8,
          ease: "power3.out",
        },
        3.05
      );

      /*
      =======================================================
      PHASE 7
      FINAL SERVICE GRID
      =======================================================
      */

      cards.forEach((card, index) => {
        const column = index % 5;
        const row = Math.floor(index / 5);

        const xPositions = [-460, -230, 0, 230, 460];

        tl.to(
          card,
          {
            x: xPositions[column],
            y: row === 0 ? -150 : 170,
            scale: 0.72,
            rotation: 0,
            filter: "blur(0px)",
            zIndex: 20,
            duration: 0.9,
            ease: "power3.inOut",
          },
          3.8
        );
      });

      /*
      =======================================================
      FINAL TEXT
      =======================================================
      */

      tl.to(
        ".zpl-final-heading",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        4.1
      );

      tl.to(
        ".zpl-progress-bar",
        {
          scaleX: 1,
          duration: 4.5,
          ease: "none",
        },
        0
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="zpl-page">
      
      <section
        ref={sectionRef}
        className="zpl-services-section"
      >
        {/* BACKGROUND */}
        <div className="zpl-background">
          <div className="zpl-glow zpl-glow-one" />
          <div className="zpl-glow zpl-glow-two" />

          <div className="zpl-grid" />
        </div>

        {/* PREMIUM RIGHT-SIDE ANIMATION */}
        <div className="zpl-right-animation" aria-hidden="true">
          <div className="zpl-ai-orbit zpl-ai-orbit-1" />
          <div className="zpl-ai-orbit zpl-ai-orbit-2" />
          <div className="zpl-ai-orbit zpl-ai-orbit-3" />

          <div className="zpl-ai-core">
            <div className="zpl-ai-core-glow" />
            <div className="zpl-ai-core-inner">
              <span>ZP</span>
            </div>
          </div>

          <div className="zpl-ai-particle zpl-ai-particle-1" />
          <div className="zpl-ai-particle zpl-ai-particle-2" />
          <div className="zpl-ai-particle zpl-ai-particle-3" />
          <div className="zpl-ai-particle zpl-ai-particle-4" />
          <div className="zpl-ai-particle zpl-ai-particle-5" />
          <div className="zpl-ai-particle zpl-ai-particle-6" />

          <div className="zpl-ai-scan" />
        </div>

        {/* TOP LABEL */}
        <div className="zpl-hero-label">
          <span>ZEROPOINT LABS</span>
          <span>SERVICES / 2026</span>
        </div>

        {/* HERO */}
        <div className="zpl-hero-content">
          <div className="zpl-kicker">
            DIGITAL SOLUTIONS
          </div>

          <h1>
            We build
            <br />
            <span>what's next.</span>
          </h1>

        

          <div className="zpl-scroll-indicator">
           

            <div className="zpl-scroll-arrow">
              ↓
            </div>
          </div>
        </div>

        {/* CENTER STAGE */}
        <div className="zpl-stage">

          {/* SERVICE CARDS */}
          {services.map((service, index) => (
            <div
              className={`zpl-card zpl-card-${index + 1}`}
              key={service.number}
              onClick={() => openService(service)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${service.title}`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openService(service);
                }
              }}
            >
              {/* IMAGE / VISUAL AREA */}
              <div className="zpl-card-visual">
               <img
               src={service.image}
               alt={service.title}
               className="zpl-service-image"
             />
             <div className="zpl-image-overlay" />

                <div className="zpl-card-gradient" />

                <div className="zpl-card-number">
                  {service.number}
                </div>
                <span className="zpl-card-index">
                     {String(index + 1).padStart(2, "0")}
                 </span>
                <div className="zpl-card-circle">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="zpl-card-lines">
                  <span />
                  <span />
                  <span />
                </div>

              </div>

              {/* CARD INFORMATION */}
              <div className="zpl-card-info">

                <div className="zpl-card-category">
                  {service.category}
                </div>

                
                <p>
                  {service.description}
                </p>

                <h2>
                  {service.title}
                </h2>


                <div className="zpl-card-bottom">

                  <span>
                    EXPLORE SERVICE
                  </span>

                  <span className="zpl-arrow">
                    ↗
                  </span>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* EXPANDED SERVICE OVERLAY */}
        {activeService && (
          <div
            className={`zpl-service-overlay ${isServiceClosing ? "zpl-service-overlay-closing" : ""}`}
            onClick={closeService}
            role="presentation"
          >
            <div
              className={`zpl-expanded-service ${isServiceClosing ? "zpl-expanded-service-closing" : ""}`}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeService.title} details`}
            >
              <button
                type="button"
                className="zpl-expanded-close"
                onClick={closeService}
                aria-label="Close service details"
              >
                ×
              </button>

              <div className="zpl-expanded-copy">
                <div className="zpl-expanded-meta">
                  <span>{activeService.number}</span>
                  <span>{activeService.category}</span>
                </div>

                <div className="zpl-expanded-kicker">SERVICE DETAILS</div>

                <h2>{activeService.title}</h2>

                <p className="zpl-expanded-description">
                  {activeService.text}
                </p>

                <div className="zpl-expanded-feature-label">
                  WHAT'S INCLUDED
                </div>

                <div className="zpl-expanded-features">
                  {activeService.features.map((feature) => (
                    <div className="zpl-feature-item" key={feature}>
                      <span className="zpl-feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="zpl-start-project"
                  onClick={startProject}
                >
                  <span>START YOUR PROJECT</span>
                  <span className="zpl-start-project-arrow">↗</span>
                </button>
  <button
                  type="button"
                  className="zpl-start-project"
                  onClick={goToPricing}
                >
                  <span>PRICING DETAILS</span>
                  <span className="zpl-start-project-arrow">↗</span>
                </button>
                
              </div>

              <div className="zpl-expanded-visual">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="zpl-expanded-image"
                />
                <div className="zpl-expanded-image-overlay" />
                <div className="zpl-expanded-image-number">
                  {activeService.number}
                </div>
                <div className="zpl-expanded-image-title">
                  {activeService.title}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FINAL HEADING */}
       

        {/* BOTTOM PROGRESS */}
        <div className="zpl-progress">
          <div className="zpl-progress-bar" />
        </div>
        <div className="zpl-final-heading">
  <span>10 SERVICES</span>

  <h2>
    Built around
    <br />
    <strong>your growth.</strong>
  </h2>
</div>

        <div className="zpl-progress-text">
          <span>01</span>
          <span>10</span>
        </div>
        
      </section>

      

<section className="zpl-next-section">

  <div className="zpl-next-content">

    <span className="zpl-next-label">
      ZEROPOINT LAB
    </span>

    <h2>
      Let's create
      <br />
      something
      <br />
      <strong>remarkable.</strong>
    </h2>

   <p className="zpl-next-description">
      We combine technology, creativity, and strategy to turn
      ambitious ideas into digital experiences that move
      businesses forward.
    </p>

    <div className="zpl-next-meta">
      <span>WEB</span>
      <span>APP</span>
      <span>BRANDING</span>
      <span>MARKETING</span>
    </div>

     <div className="zpl-next-orbit" aria-hidden="true">

    <div className="zpl-next-orbit-ring ring-one">
      <span className="orbit-dot dot-one"></span>
    </div>

    <div className="zpl-next-orbit-ring ring-two">
      <span className="orbit-dot dot-two"></span>
    </div>

    <div className="zpl-next-orbit-ring ring-three">
      <span className="orbit-dot dot-three"></span>
    </div>

    <div className="zpl-next-orbit-glow"></div>

    <div className="zpl-next-core">
      <span>ZPL</span>
    </div>

  </div>


  </div>

</section>

  


  
      {/* ==================================================
          CSS
      ================================================== */}

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600;700;800;900&family=Merriweather:wght@300;400;700&display=swap"); 
 
 
        * { 
          box-sizing: border-box; 
        } 
 
        html, 
        body { 
          margin: 0; 
          padding: 0; 
          background: #050e1a; 
        } 
 
        body { 
          overflow-x: hidden; 
 
          font-family: "Merriweather", serif; 
 
          color: #e2f3ff; 
        } 
 
 
        /* ================================================== 
           MAIN PAGE 
        ================================================== */ 
 
        .zpl-page { 
          width: 100%; 
          overflow: hidden; 
          background: #050e1a; 
        } 
 
 
        /* ================================================== 
           SCROLL SECTION 
        ================================================== */ 
 
        .zpl-services-section { 
          position: relative; 
 
          width: 100%; 
          height: 100vh; 
 
          overflow: hidden; 
 
          background: #050e1a; 
        } 
 
 
        /* ================================================== 
           BACKGROUND 
        ================================================== */ 
 
        .zpl-background { 
          position: absolute; 
 
          inset: 0; 
 
          overflow: hidden; 
 
          background: 
            radial-gradient( 
              circle at 50% 45%, 
              rgba(18, 88, 135, 0.18), 
              transparent 30% 
            ), 
 
            linear-gradient( 
              145deg, 
              #06101b, 
              #050e1a 55%, 
              #02070d 
            ); 
        } 
 
 
        .zpl-grid { 
          position: absolute; 
 
          inset: 0; 
 
          opacity: 0.08; 
 
          background-image: 
            linear-gradient( 
              rgba(226,243,255,.25) 1px, 
              transparent 1px 
            ), 
            linear-gradient( 
              90deg, 
              rgba(226,243,255,.25) 1px, 
              transparent 1px 
            ); 
 
          background-size: 80px 80px; 
 
          mask-image: 
            radial-gradient( 
              circle, 
              black 0%, 
              transparent 75% 
            ); 
        } 
 
 
        /* ================================================== 
           GLOW 
        ================================================== */ 
 
        .zpl-glow { 
          position: absolute; 
 
          border-radius: 50%; 
 
          filter: blur(100px); 
 
          pointer-events: none; 
        } 
 
 
        .zpl-glow-one { 
          width: 500px; 
          height: 500px; 
 
          left: -200px; 
          top: -200px; 
 
          background: 
            rgba(18, 120, 175, .13); 
        } 
 
 
        .zpl-glow-two { 
          width: 600px; 
          height: 600px; 
 
          right: -300px; 
          bottom: -300px; 
 
          background: 
            rgba(56, 189, 248, .09); 
        } 
 
 
        /* ================================================== 
           TOP LABEL 
        ================================================== */ 
 
        .zpl-hero-label { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
 
          top: 35px; 
          left: 50px; 
          right: 50px; 
 
          z-index: 100; 
 
          display: flex; 
 
          justify-content: space-between; 
 
          color: #668095; 
 
          font-size: 9px; 
 
          font-weight: 800; 
 
          letter-spacing: 3px; 
        } 
 
 
        /* ================================================== 
           HERO 
        ================================================== */ 
 
        .zpl-hero-content { 
          position: absolute; 
 
          z-index: 20; 
 
          top: 10%; 
 
          left: 50%; 
 
          width: 800px; 
          max-width: 90vw; 
 
          transform: 
            translateX(-50%); 
 
          text-align: center; 
 
          pointer-events: none; 
        } 
 
 
        .zpl-kicker { 
          font-family: "Inter", sans-serif; 
          display: inline-block; 
 
          padding: 8px 15px; 
 
          border: 
            1px solid 
            rgba(56,189,248,.2); 
 
          border-radius: 100px; 
 
          color: #38bdf8; 
 
          font-size: 9px; 
 
          font-weight: 800; 
 
          letter-spacing: 3px; 
 
          background: 
            rgba(56,189,248,.04); 
        } 
 
 
        .zpl-hero-content h1 { 
          font-family: "Inter", sans-serif; 
          margin: 25px 0; 
 
          color: #e2f3ff; 
 
          font-size: 
            clamp(55px, 8vw, 115px); 
 
          line-height: .82; 
 
          letter-spacing: -7px; 
 
          font-weight: 800; 
        } 
 
 
        .zpl-hero-content h1 span { 
          font-family: "Cormorant Garamond", serif; 
          font-style: italic; 
          font-weight: 600; 
          color: #38bdf8; 
 
          text-shadow: 
            0 0 40px 
            rgba(56,189,248,.15); 
        } 
 
 
        .zpl-hero-content p { 
          font-family: "Merriweather", serif; 
          margin: 0; 
 
          color: #71899f; 
 
          font-size: 15px; 
 
          line-height: 1.8; 
        } 
 
 
        /* ================================================== 
           SCROLL 
        ================================================== */ 
 
        .zpl-scroll-indicator { 
          font-family: "Inter", sans-serif; 
          margin-top: 30px; 
 
          color: #597287; 
 
          font-size: 8px; 
 
          font-weight: 800; 
 
          letter-spacing: 3px; 
        } 
 
 
        .zpl-scroll-arrow { 
          margin-top: 12px; 
 
          color: #38bdf8; 
 
          font-size: 20px; 
 
          animation: 
            zplBounce 1.5s infinite; 
        } 
 
 
        @keyframes zplBounce { 
 
          0%, 
          100% { 
            transform: translateY(0); 
          } 
 
          50% { 
            transform: translateY(8px); 
          } 
 
        } 
 
 
        /* ================================================== 
           CARD STAGE 
        ================================================== */ 
 
        .zpl-stage { 
          position: absolute; 
 
          inset: 0; 
 
          z-index: 10; 
 
          display: flex; 
 
          align-items: center; 
 
          justify-content: center; 
 
          pointer-events: none; 
        } 
 
 
        /* ================================================== 
           CARD 
        ================================================== */ 
 
        .zpl-card { 
          position: absolute; 
 
          width: 260px; 
 
          height: 390px; 
 
          overflow: hidden; 
 
          border-radius: 24px; 
 
          background: 
            linear-gradient( 
              145deg, 
              #86868b, 
              #424c55 45%, 
              #171f27 
            ); 
 
          border: 
            1px solid 
            rgba(226,243,255,.28); 
 
          box-shadow: 
 
            0 30px 80px 
            rgba(0,0,0,.6), 
 
            inset 0 1px 0 
            rgba(255,255,255,.25); 
 
          transform-origin: 
            center center; 
 
          will-change: 
            transform, 
            opacity, 
            filter; 
        } 
 
 
        /* ================================================== 
           CARD VISUAL 
        ================================================== */ 
 
        .zpl-card-visual { 
          position: relative; 
 
          height: 52%; 
 
          overflow: hidden; 
 
          background: 
            linear-gradient( 
              145deg, 
              #aeb5ba, 
              #646c72 48%, 
              #252e36 
            ); 
        } 
 
 
        .zpl-card-gradient { 
          position: absolute; 
 
          inset: 0; 
 
          background: 
            radial-gradient( 
              circle at 30% 20%, 
              rgba(255,255,255,.55), 
              transparent 22% 
            ), 
 
            linear-gradient( 
              135deg, 
              transparent 20%, 
              rgba(255,255,255,.08), 
              transparent 70% 
            ); 
        } 
 
 
        /* ================================================== 
           CARD NUMBER 
        ================================================== */ 
 
        .zpl-card-number { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
 
          top: 20px; 
          left: 20px; 
 
          color: rgba(255,255,255,.9); 
 
          font-size: 11px; 
 
          font-weight: 900; 
 
          letter-spacing: 2px; 
        } 
 
 
        .zpl-card-circle { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
 
          right: 20px; 
          top: 20px; 
 
          width: 38px; 
          height: 38px; 
 
          display: flex; 
 
          align-items: center; 
          justify-content: center; 
 
          border-radius: 50%; 
 
          border: 
            1px solid 
            rgba(255,255,255,.3); 
 
          color: white; 
 
          font-size: 8px; 
 
          backdrop-filter: blur(10px); 
        } 
 
 
        .zpl-card-lines { 
          position: absolute; 
 
          left: 20px; 
          right: 20px; 
          bottom: 20px; 
        } 
 
 
        .zpl-card-lines span { 
          display: block; 
 
          width: 100%; 
          height: 1px; 
 
          margin-top: 7px; 
 
          background: 
            rgba(255,255,255,.25); 
        } 
 
 
        .zpl-card-lines span:nth-child(2) { 
          width: 70%; 
        } 
 
 
        .zpl-card-lines span:nth-child(3) { 
          width: 45%; 
        } 
 
 
        /* ================================================== 
           CARD INFORMATION 
        ================================================== */ 
 
        .zpl-card-info { 
          height: 48%; 
 
          padding: 22px; 
 
          background: 
            linear-gradient( 
              145deg, 
              #202a33, 
              #0c141c 
            ); 
        } 
 
 
        .zpl-card-category { 
          font-family: "Inter", sans-serif; 
          color: #38bdf8; 
 
          font-size: 7px; 
 
          font-weight: 900; 
 
          letter-spacing: 2px; 
        } 
 
 
        .zpl-card-info h2 { 
          font-family: "Inter", sans-serif; 
          margin: 
            12px 0 10px; 
 
          color: #e2f3ff; 
 
          font-size: 22px; 
 
          line-height: 1; 
 
          letter-spacing: -1px; 
        } 
 
 
        .zpl-card-info p { 
          font-family: "Merriweather", serif; 
          margin: 0; 
 
          color: #738a9d; 
 
          font-size: 9px; 
 
          line-height: 1.6; 
        } 
 
 
        .zpl-card-bottom { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
 
          bottom: 18px; 
 
          width: 216px; 
 
          display: flex; 
 
          justify-content: space-between; 
 
          align-items: center; 
 
          color: #9fb3c2; 
 
          font-size: 7px; 
 
          font-weight: 900; 
 
          letter-spacing: 1.5px; 
        } 
 
 
        .zpl-arrow { 
          width: 28px; 
          height: 28px; 
 
          display: flex; 
 
          align-items: center; 
          justify-content: center; 
 
          border-radius: 50%; 
 
          color: #38bdf8; 
 
          border: 
            1px solid 
            rgba(56,189,248,.25); 
 
          background: 
            rgba(56,189,248,.06); 
 
          font-size: 14px; 
        } 
 
 
        /* ================================================== 
           INTERACTIVE SERVICE EXPANSION 
        ================================================== */ 
 
        .zpl-card { 
          pointer-events: auto; 
          cursor: pointer; 
        } 
 
        .zpl-card:focus-visible { 
          outline: 2px solid #38bdf8; 
          outline-offset: 5px; 
        } 
 
        .zpl-service-overlay { 
          position: fixed; 
          inset: 0; 
          z-index: 2000; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          padding: 30px; 
          background: rgba(2, 7, 13, 0.76); 
          backdrop-filter: blur(14px); 
          -webkit-backdrop-filter: blur(14px); 
          cursor: pointer; 
          perspective: 1600px; 
          animation: zplOverlayIn 0.28s ease forwards; 
        } 
 
        .zpl-expanded-service { 
          position: relative; 
          display: grid; 
          grid-template-columns: 1.15fr 0.85fr; 
          width: min(1120px, 92vw); 
          min-height: 620px; 
          max-height: 88vh; 
          overflow: hidden; 
          border: 1px solid rgba(226, 243, 255, 0.24); 
          border-radius: 28px; 
          background: linear-gradient(145deg, #202a33, #0b131b 60%, #050e17); 
          box-shadow: 
            0 50px 140px rgba(0, 0, 0, 0.72), 
            inset 0 1px 0 rgba(255, 255, 255, 0.16); 
          cursor: default; 
          transform-style: preserve-3d; 
          animation: zplServiceFlipIn 0.68s cubic-bezier(.2,.8,.2,1) forwards; 
        } 
 
        .zpl-expanded-copy { 
          position: relative; 
          z-index: 2; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          padding: 56px 54px 48px; 
          overflow-y: auto; 
        } 
 
        .zpl-expanded-meta { 
          font-family: "Inter", sans-serif; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          gap: 20px; 
          color: #6f879a; 
          font-size: 9px; 
          font-weight: 900; 
          letter-spacing: 2.5px; 
        } 
 
        .zpl-expanded-meta span:last-child { 
          color: #38bdf8; 
        } 
 
        .zpl-expanded-kicker { 
          font-family: "Inter", sans-serif; 
          margin-top: 45px; 
          color: #38bdf8; 
          font-size: 9px; 
          font-weight: 900; 
          letter-spacing: 3px; 
        } 
 
        .zpl-expanded-copy h2 { 
          font-family: "Inter", sans-serif; 
          margin: 14px 0 18px; 
          color: #e2f3ff; 
          font-size: clamp(38px, 5vw, 70px); 
          line-height: 0.92; 
          letter-spacing: -4px; 
          font-weight: 800; 
        } 
 
        .zpl-expanded-description { 
          font-family: "Merriweather", serif; 
          max-width: 590px; 
          margin: 0; 
          color: #8ca2b2; 
          font-size: 14px; 
          line-height: 1.8; 
        } 
 
        .zpl-expanded-feature-label { 
          font-family: "Inter", sans-serif; 
          margin-top: 30px; 
          margin-bottom: 14px; 
          color: #587184; 
          font-size: 8px; 
          font-weight: 900; 
          letter-spacing: 2.5px; 
        } 
 
        .zpl-expanded-features { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 11px 22px; 
          max-width: 650px; 
        } 
 
        .zpl-feature-item { 
          font-family: "Merriweather", serif; 
          display: flex; 
          align-items: flex-start; 
          gap: 9px; 
          color: #c4d5df; 
          font-size: 10px; 
          line-height: 1.5; 
        } 
 
        .zpl-feature-check { 
          flex: 0 0 auto; 
          color: #38bdf8; 
          font-weight: 900; 
        } 
 
        .zpl-start-project { 
          font-family: "Inter", sans-serif; 
          width: fit-content; 
          margin-top: 32px; 
          padding: 13px 17px 13px 20px; 
          display: inline-flex; 
          align-items: center; 
          gap: 22px; 
          border: 1px solid rgba(56, 189, 248, 0.35); 
          border-radius: 999px; 
          background: rgba(56, 189, 248, 0.08); 
          color: #e2f3ff; 
          font-size: 8px; 
          font-weight: 900; 
          letter-spacing: 2px; 
          cursor: pointer; 
          transition: 
            transform 0.25s ease, 
            background 0.25s ease, 
            border-color 0.25s ease; 
        } 
 
        .zpl-start-project:hover { 
          transform: translateY(-2px); 
          border-color: rgba(56, 189, 248, 0.7); 
          background: rgba(56, 189, 248, 0.15); 
        } 
 
        .zpl-start-project-arrow { 
          width: 25px; 
          height: 25px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border-radius: 50%; 
          color: #38bdf8; 
          border: 1px solid rgba(56, 189, 248, 0.3); 
          font-size: 13px; 
        } 
 
        .zpl-close-hint { 
          font-family: "Inter", sans-serif; 
          margin-top: 16px; 
          color: #43596b; 
          font-size: 7px; 
          font-weight: 800; 
          letter-spacing: 1.8px; 
        } 
 
        .zpl-expanded-close { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
          top: 20px; 
          right: 20px; 
          z-index: 10; 
          width: 40px; 
          height: 40px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border: 1px solid rgba(226, 243, 255, 0.22); 
          border-radius: 50%; 
          background: rgba(3, 10, 16, 0.42); 
          color: #e2f3ff; 
          font-size: 26px; 
          line-height: 1; 
          cursor: pointer; 
          backdrop-filter: blur(10px); 
          transition: 
            transform 0.2s ease, 
            background 0.2s ease; 
        } 
 
        .zpl-expanded-close:hover { 
          transform: rotate(90deg); 
          background: rgba(56, 189, 248, 0.12); 
        } 
 
        .zpl-expanded-visual { 
          position: relative; 
          min-height: 100%; 
          overflow: hidden; 
          background: #101a23; 
        } 
 
        .zpl-expanded-image { 
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block; 
          transform: scale(1.04); 
        } 
 
        .zpl-expanded-image-overlay { 
          position: absolute; 
          inset: 0; 
          background: 
            linear-gradient(180deg, rgba(3, 10, 16, 0.04), rgba(3, 10, 16, 0.72)), 
            linear-gradient(90deg, rgba(5, 14, 26, 0.08), rgba(5, 14, 26, 0.3)); 
        } 
 
        .zpl-expanded-image-number { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
          top: 28px; 
          left: 28px; 
          color: rgba(255, 255, 255, 0.9); 
          font-size: 12px; 
          font-weight: 900; 
          letter-spacing: 2px; 
        } 
 
        .zpl-expanded-image-title { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
          left: 30px; 
          right: 30px; 
          bottom: 28px; 
          color: white; 
          font-size: clamp(18px, 2.2vw, 32px); 
          line-height: 1; 
          letter-spacing: -1.5px; 
          font-weight: 800; 
        } 
 
        @keyframes zplOverlayIn { 
          from { opacity: 0; } 
          to { opacity: 1; } 
        } 
 
        .zpl-service-overlay-closing { 
          animation: zplOverlayOut 0.52s ease forwards; 
        } 
 
        .zpl-expanded-service-closing { 
          animation: zplServiceFlipOut 0.52s cubic-bezier(.4,0,.7,.2) forwards; 
        } 
 
        @keyframes zplOverlayOut { 
          from { opacity: 1; } 
          to { opacity: 0; } 
        } 
 
        @keyframes zplServiceFlipIn { 
          0% { 
            opacity: 0; 
            transform: rotateY(-88deg) scale(0.68); 
          } 
          62% { 
            opacity: 1; 
            transform: rotateY(8deg) scale(1.015); 
          } 
          100% { 
            opacity: 1; 
            transform: rotateY(0deg) scale(1); 
          } 
        } 
 
        @keyframes zplServiceFlipOut { 
          0% { 
            opacity: 1; 
            transform: rotateY(0deg) scale(1); 
          } 
          100% { 
            opacity: 0; 
            transform: rotateY(88deg) scale(0.68); 
          } 
        } 
 
\n\n        /* =========================================================\n           ZEROPOINT RIGHT-SIDE PREMIUM AI ANIMATION\n           ADDITIVE ONLY — DOES NOT CHANGE EXISTING LAYOUT\n        ========================================================= */\n\n        .zpl-right-animation {\n          position: absolute;\n          top: 0;\n          right: 0;\n          width: min(46vw, 760px);\n          height: 100%;\n          overflow: hidden;\n          pointer-events: none;\n          isolation: isolate;\n          mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 18%, black 42%, black 100%);\n          -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 18%, black 42%, black 100%);\n        }\n\n        .zpl-ai-core {\n          position: absolute;\n          top: 50%;\n          left: 58%;\n          width: clamp(90px, 10vw, 155px);\n          aspect-ratio: 1;\n          transform: translate(-50%, -50%);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 50%;\n          border: 1px solid rgba(226,243,255,.22);\n          background: radial-gradient(circle, rgba(56,189,248,.10), rgba(8,15,25,.55) 55%, rgba(3,8,14,.85));\n          box-shadow: 0 0 35px rgba(56,189,248,.12), 0 0 100px rgba(85,70,255,.10), inset 0 0 35px rgba(255,255,255,.035);\n          z-index: 5;\n          animation: zplAiCoreFloat 6s ease-in-out infinite;\n        }\n\n        .zpl-ai-core-inner {\n          width: 48%;\n          aspect-ratio: 1;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 50%;\n          border: 1px solid rgba(56,189,248,.38);\n          background: radial-gradient(circle, rgba(56,189,248,.20), rgba(30,20,70,.20), transparent 72%);\n          box-shadow: 0 0 20px rgba(56,189,248,.20), inset 0 0 20px rgba(56,189,248,.08);\n        }\n\n        .zpl-ai-core-inner span {\n          font-family: "Inter", sans-serif;\n          color: rgba(226,243,255,.9);\n          font-size: clamp(11px, 1vw, 16px);\n          font-weight: 800;\n          letter-spacing: 4px;\n          margin-left: 4px;\n          text-shadow: 0 0 18px rgba(56,189,248,.65);\n        }\n\n        @keyframes zplAiCoreFloat {\n          0%, 100% { transform: translate(-50%, -50%) scale(1); }\n          50% { transform: translate(-50%, -53%) scale(1.045); }\n        }\n\n        .zpl-ai-core-glow {\n          position: absolute;\n          inset: -80%;\n          border-radius: 50%;\n          background: radial-gradient(circle, rgba(56,189,248,.18) 0%, rgba(75,70,255,.09) 28%, transparent 68%);\n          filter: blur(25px);\n          z-index: -1;\n          animation: zplAiGlow 5s ease-in-out infinite;\n        }\n\n        @keyframes zplAiGlow {\n          0%, 100% { opacity: .45; transform: scale(.85); }\n          50% { opacity: .9; transform: scale(1.12); }\n        }\n\n        .zpl-ai-orbit {\n          position: absolute;\n          top: 50%;\n          left: 58%;\n          border-radius: 50%;\n          transform: translate(-50%, -50%) rotate(0deg);\n          border: 1px solid rgba(226,243,255,.08);\n          z-index: 3;\n        }\n\n        .zpl-ai-orbit-1 {\n          width: clamp(170px, 20vw, 300px);\n          aspect-ratio: 1;\n          border-top-color: rgba(56,189,248,.60);\n          border-right-color: rgba(56,189,248,.16);\n          animation: zplAiOrbit1 15s linear infinite;\n        }\n\n        .zpl-ai-orbit-2 {\n          width: clamp(250px, 29vw, 430px);\n          aspect-ratio: 1;\n          border-bottom-color: rgba(115,85,255,.42);\n          border-left-color: rgba(56,189,248,.20);\n          animation: zplAiOrbit2 22s linear infinite;\n        }\n\n        .zpl-ai-orbit-3 {\n          width: clamp(340px, 39vw, 580px);\n          aspect-ratio: 1;\n          border-top-color: rgba(226,243,255,.16);\n          border-right-color: rgba(115,85,255,.25);\n          animation: zplAiOrbit3 30s linear infinite;\n        }\n\n        @keyframes zplAiOrbit1 {\n          from { transform: translate(-50%, -50%) rotate(0deg) rotateX(63deg); }\n          to { transform: translate(-50%, -50%) rotate(360deg) rotateX(63deg); }\n        }\n\n        @keyframes zplAiOrbit2 {\n          from { transform: translate(-50%, -50%) rotate(360deg) rotateY(60deg); }\n          to { transform: translate(-50%, -50%) rotate(0deg) rotateY(60deg); }\n        }\n\n        @keyframes zplAiOrbit3 {\n          from { transform: translate(-50%, -50%) rotate(0deg) rotateX(68deg) rotateY(12deg); }\n          to { transform: translate(-50%, -50%) rotate(360deg) rotateX(68deg) rotateY(12deg); }\n        }\n\n        .zpl-ai-particle {\n          position: absolute;\n          width: clamp(3px, .35vw, 6px);\n          aspect-ratio: 1;\n          border-radius: 50%;\n          background: rgba(226,243,255,.9);\n          box-shadow: 0 0 7px rgba(226,243,255,.8), 0 0 20px rgba(56,189,248,.55);\n          z-index: 6;\n        }\n\n        .zpl-ai-particle-1 { top: 22%; left: 62%; animation: zplAiParticle1 7s ease-in-out infinite; }\n        .zpl-ai-particle-2 { top: 32%; right: 13%; animation: zplAiParticle2 9s ease-in-out infinite; }\n        .zpl-ai-particle-3 { top: 67%; right: 19%; animation: zplAiParticle3 8s ease-in-out infinite; }\n        .zpl-ai-particle-4 { bottom: 17%; left: 55%; animation: zplAiParticle4 10s ease-in-out infinite; }\n        .zpl-ai-particle-5 { top: 48%; right: 7%; animation: zplAiParticle5 6s ease-in-out infinite; }\n        .zpl-ai-particle-6 { top: 75%; left: 74%; animation: zplAiParticle6 11s ease-in-out infinite; }\n\n        @keyframes zplAiParticle1 {\n          0%, 100% { transform: translate(0,0); opacity: .25; }\n          50% { transform: translate(25px,-30px); opacity: 1; }\n        }\n        @keyframes zplAiParticle2 {\n          0%, 100% { transform: translate(0,0); opacity: .3; }\n          50% { transform: translate(-30px,22px); opacity: .95; }\n        }\n        @keyframes zplAiParticle3 {\n          0%, 100% { transform: translate(0,0); opacity: .2; }\n          50% { transform: translate(-25px,-35px); opacity: 1; }\n        }\n        @keyframes zplAiParticle4 {\n          0%, 100% { transform: translate(0,0); opacity: .25; }\n          50% { transform: translate(35px,-20px); opacity: .9; }\n        }\n        @keyframes zplAiParticle5 {\n          0%, 100% { transform: translate(0,0); opacity: .2; }\n          50% { transform: translate(-20px,35px); opacity: 1; }\n        }\n        @keyframes zplAiParticle6 {\n          0%, 100% { transform: translate(0,0); opacity: .25; }\n          50% { transform: translate(-30px,-25px); opacity: .9; }\n        }\n\n        .zpl-ai-scan {\n          position: absolute;\n          top: 12%;\n          left: 30%;\n          width: 1px;\n          height: 76%;\n          background: linear-gradient(to bottom, transparent, rgba(56,189,248,.45), transparent);\n          filter: blur(.5px);\n          opacity: .35;\n          animation: zplAiScan 7s ease-in-out infinite;\n        }\n\n        @keyframes zplAiScan {\n          0% { transform: translateX(0); opacity: 0; }\n          30% { opacity: .4; }\n          70% { opacity: .4; }\n          100% { transform: translateX(180px); opacity: 0; }\n        }\n\n        @media (max-width: 1200px) {\n          .zpl-right-animation { width: 42vw; }\n          .zpl-ai-core, .zpl-ai-orbit { left: 60%; }\n        }\n\n        @media (max-width: 900px) {\n          .zpl-right-animation { width: 40vw; opacity: .72; }\n          .zpl-ai-core, .zpl-ai-orbit { left: 62%; }\n          .zpl-ai-orbit-3 { width: 360px; }\n        }\n\n        @media (max-width: 700px) {\n          .zpl-right-animation {\n            width: 100%;\n            height: 52%;\n            top: auto;\n            bottom: 0;\n            opacity: .38;\n            mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.45) 25%, black 60%, black 100%);\n            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.45) 25%, black 60%, black 100%);\n          }\n          .zpl-ai-core, .zpl-ai-orbit { top: 58%; left: 68%; }\n          .zpl-ai-orbit-3 { width: 300px; }\n          .zpl-ai-particle-1, .zpl-ai-particle-4 { display: none; }\n        }\n\n        @media (max-width: 420px) {\n          .zpl-right-animation { height: 48%; opacity: .30; }\n          .zpl-ai-core { top: 58%; left: 70%; width: 85px; }\n          .zpl-ai-orbit-1 { width: 160px; }\n          .zpl-ai-orbit-2 { width: 220px; }\n          .zpl-ai-orbit-3 { width: 280px; }\n          .zpl-ai-particle-5, .zpl-ai-particle-6 { display: none; }\n        }\n\n        @media (prefers-reduced-motion: reduce) {\n          .zpl-right-animation *, .zpl-right-animation { animation: none !important; }\n        }\n 
        /* ================================================== 
           FINAL HEADING 
        ================================================== */ 
 
        .zpl-final-heading { 
  position: absolute; 
 
  left: 50%; 
  bottom: -75px; 
 
  z-index: 120; 
 
  transform: translateX(-50%); 
 
  text-align: center; 
 
  width: 100%; 
 
  pointer-events: none; 
} 
.zpl-final-heading span { 
          font-family: "Inter", sans-serif; 
  display: block; 
 
  margin-bottom: 8px; 
 
  color: #38bdf8; 
 
  font-size: 8px; 
 
  font-weight: 900; 
 
  letter-spacing: 4px; 
} 
 
 
        .zpl-final-heading h2 { 
          font-family: "Inter", sans-serif; 
  margin: 0; 
 
  color: #e2f3ff; 
 
  font-size: 30px; 
 
  line-height: 0.95; 
 
  letter-spacing: -1.5px; 
} 
 
 
 
        .zpl-final-heading strong { 
          font-family: "Cormorant Garamond", serif; 
          font-style: italic; 
          font-weight: 600; 
          color: #38bdf8; 
        } 
          .zpl-final-heading strong { 
  color: #38bdf8; 
} 
       .zpl-service-image { 
  position: absolute; 
  inset: 0; 
 
  width: 100%; 
  height: 100%; 
 
  object-fit: cover; 
 
  display: block; 
} 
 
.zpl-image-overlay { 
  position: absolute; 
  inset: 0; 
 
  z-index: 1; 
 
  background: 
    linear-gradient( 
      180deg, 
      rgba(0, 0, 0, 0.05), 
      rgba(0, 0, 0, 0.5) 
    ); 
} 
 
.zpl-card-number, 
.zpl-card-index { 
  z-index: 3; 
} 
 
        /* ================================================== 
           PROGRESS 
        ================================================== */ 
 
        .zpl-progress { 
          position: absolute; 
 
          left: 50px; 
          right: 50px; 
 
          bottom: 25px; 
 
          z-index: 100; 
 
          height: 1px; 
 
          background: 
            rgba(255,255,255,.1); 
        } 
 
 
        .zpl-progress-bar { 
          width: 100%; 
          height: 100%; 
 
          transform: 
            scaleX(0); 
 
          transform-origin: 
            left center; 
 
          background: 
            #38bdf8; 
 
          box-shadow: 
            0 0 15px 
            rgba(56,189,248,.7); 
        } 
 
 
        .zpl-progress-text { 
          font-family: "Inter", sans-serif; 
          position: absolute; 
 
          bottom: 32px; 
 
          left: 50px; 
          right: 50px; 
 
          z-index: 101; 
 
          display: flex; 
 
          justify-content: space-between; 
 
          color: #50687b; 
 
          font-size: 7px; 
 
          font-weight: 900; 
 
          letter-spacing: 2px; 
        } 
 
 
        /* ================================================== 
           NEXT SECTION 
        ================================================== */ 
 
        .zpl-next-section { 
          min-height: 100vh; 
 
          padding: 12vw 8vw; 
 
          display: flex; 
 
          flex-direction: column; 
 
          justify-content: center; 
 
          background: 
            #050e1a; 
        } 
 
 
        .zpl-next-section > span { 
          font-family: "Inter", sans-serif; 
          color: #38bdf8; 
 
          font-size: 10px; 
 
          font-weight: 900; 
 
          letter-spacing: 4px; 
        } 
 
 
        .zpl-next-section h2 { 
          font-family: "Inter", sans-serif; 
          margin: 30px 0 0; 
 
          color: #e2f3ff; 
 
          font-size: 
            clamp(60px, 9vw, 140px); 
 
          line-height: .82; 
 
          letter-spacing: -8px; 
        } 
 
 
        .zpl-next-section strong { 
          font-family: "Cormorant Garamond", serif; 
          font-style: italic; 
          font-weight: 600; 
          color: #38bdf8; 
        } 
 
 
        /* ================================================== 
           TABLET 
        ================================================== */ 
 
        @media (max-width: 1100px) { 
 
          .zpl-card { 
            width: 220px; 
            height: 340px; 
          } 
 
        } 
 
 
        /* ================================================== 
           MOBILE 
        ================================================== */ 
 
        @media (max-width: 700px) { 
 
          .zpl-hero-label { 
            left: 20px; 
            right: 20px; 
            top: 22px; 
          } 
 
 
          .zpl-hero-content { 
            top: 13%; 
          } 
 
 
          .zpl-hero-content h1 { 
            font-size: 17vw; 
 
            letter-spacing: -5px; 
          } 
 
 
          .zpl-hero-content p { 
            font-size: 12px; 
          } 
 
 
          .zpl-card { 
            width: 180px; 
            height: 280px; 
 
            border-radius: 18px; 
          } 
 
 
          .zpl-card-info { 
            padding: 15px; 
          } 
 
 
          .zpl-card-info h2 { 
            font-size: 17px; 
          } 
 
 
          .zpl-card-info p { 
            font-size: 8px; 
          } 
 
 
          .zpl-card-bottom { 
            width: 150px; 
          } 
 
 
          .zpl-progress { 
            left: 20px; 
            right: 20px; 
          } 
 
 
          .zpl-progress-text { 
            left: 20px; 
            right: 20px; 
          } 
 
          .zpl-service-overlay { 
            padding: 14px; 
          } 
 
          .zpl-expanded-service { 
            grid-template-columns: 1fr; 
            width: 94vw; 
            min-height: 0; 
            max-height: 92vh; 
            border-radius: 20px; 
          } 
 
          .zpl-expanded-copy { 
            min-height: 57vh; 
            padding: 30px 23px 25px; 
          } 
 
          .zpl-expanded-kicker { 
            margin-top: 30px; 
          } 
 
          .zpl-expanded-copy h2 { 
            font-size: 34px; 
            letter-spacing: -2.5px; 
          } 
 
          .zpl-expanded-description { 
            font-size: 11px; 
          } 
 
          .zpl-expanded-features { 
            grid-template-columns: 1fr; 
            gap: 8px; 
          } 
 
          .zpl-feature-item { 
            font-size: 9px; 
          } 
 
          .zpl-start-project { 
            margin-top: 25px; 
          } 
 
          .zpl-expanded-visual { 
            min-height: 200px; 
            order: -1; 
          } 
 
          .zpl-expanded-image-title { 
            font-size: 21px; 
          } 
 
          .zpl-expanded-close { 
            top: 12px; 
            right: 12px; 
            width: 36px; 
            height: 36px; 
          } 
        } /* close @media (max-width: 700px) */

  @keyframes zp-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes zp-spin-reverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes zp-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: .75;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes zp-glow {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(0, 150, 255, .45),
              inset 0 0 20px rgba(0, 150, 255, .12);
          }

          50% {
            box-shadow:
              0 0 45px rgba(0, 190, 255, .9),
              0 0 90px rgba(0, 100, 255, .35),
              inset 0 0 30px rgba(0, 180, 255, .25);
          }
        }

        @keyframes zp-dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .zp-orbit-1 {
          animation: zp-spin 28s linear infinite;
        }

        .zp-orbit-2 {
          animation: zp-spin-reverse 38s linear infinite;
        }

        .zp-core {
          animation: zp-glow 3s ease-in-out infinite;
        }

        .zp-node {
          animation: zp-pulse 3s ease-in-out infinite;
        }

        .zp-dash {
          stroke-dasharray: 7 14;
          animation: zp-dash 4s linear infinite;
        }
      /* =========================================================
   ZEROPOINT LABS
   PREMIUM RIGHT-SIDE INTELLIGENCE ORBIT
   ADDITIVE ONLY
========================================================= */

.zpl-next-section {
  position: relative;
  overflow: hidden;
}

/* -----------------------------------------
   ANIMATION CONTAINER
----------------------------------------- */

.zpl-remarkable-orbit {
  position: absolute;
  top: 50%;
  right: 5%;
  width: min(48vw, 650px);
  height: min(48vw, 650px);

  transform: translateY(-50%);

  pointer-events: none;
  z-index: 1;

  perspective: 1200px;
  transform-style: preserve-3d;
}

/* -----------------------------------------
   ATMOSPHERIC GLOW
----------------------------------------- */

.zpl-remarkable-atmosphere {
  position: absolute;

  top: 50%;
  left: 50%;

  width: 55%;
  height: 55%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(56, 189, 248, .16) 0%,
      rgba(70, 80, 255, .09) 30%,
      rgba(56, 189, 248, .025) 55%,
      transparent 75%
    );

  filter: blur(25px);

  animation:
    zplAtmospherePulse 5s ease-in-out infinite;
}

@keyframes zplAtmospherePulse {

  0%,
  100% {
    transform: translate(-50%, -50%) scale(.85);
    opacity: .55;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 1;
  }

}

/* -----------------------------------------
   ORBIT RINGS
----------------------------------------- */

.zpl-remarkable-ring {
  position: absolute;

  top: 50%;
  left: 50%;

  border-radius: 50%;

  border: 1px solid rgba(56, 189, 248, .13);

  transform-style: preserve-3d;

  box-shadow:
    0 0 15px rgba(56, 189, 248, .025);

  will-change: transform;
}

/* Small orbit */

.zpl-remarkable-ring-1 {

  width: 32%;
  height: 32%;

  margin-left: -16%;
  margin-top: -16%;

  border-top-color: rgba(56, 189, 248, .75);
  border-right-color: rgba(56, 189, 248, .15);

  animation:
    zplRemarkableOrbit1 12s linear infinite;
}

/* Medium orbit */

.zpl-remarkable-ring-2 {

  width: 52%;
  height: 32%;

  margin-left: -26%;
  margin-top: -16%;

  border-bottom-color: rgba(92, 80, 255, .65);
  border-left-color: rgba(56, 189, 248, .18);

  animation:
    zplRemarkableOrbit2 18s linear infinite;
}

/* Large orbit */

.zpl-remarkable-ring-3 {

  width: 70%;
  height: 42%;

  margin-left: -35%;
  margin-top: -21%;

  border-top-color: rgba(226, 243, 255, .18);
  border-right-color: rgba(56, 189, 248, .40);

  animation:
    zplRemarkableOrbit3 25s linear infinite;
}

/* Deep 3D orbit */

.zpl-remarkable-ring-4 {

  width: 84%;
  height: 48%;

  margin-left: -42%;
  margin-top: -24%;

  border-bottom-color: rgba(75, 70, 255, .28);
  border-left-color: rgba(226, 243, 255, .08);

  animation:
    zplRemarkableOrbit4 32s linear infinite;
}


/* -----------------------------------------
   3D RING MOTION
----------------------------------------- */

@keyframes zplRemarkableOrbit1 {

  from {
    transform:
      rotateX(68deg)
      rotateZ(0deg);
  }

  to {
    transform:
      rotateX(68deg)
      rotateZ(360deg);
  }

}


@keyframes zplRemarkableOrbit2 {

  from {
    transform:
      rotateY(62deg)
      rotateZ(360deg);
  }

  to {
    transform:
      rotateY(62deg)
      rotateZ(0deg);
  }

}


@keyframes zplRemarkableOrbit3 {

  from {
    transform:
      rotateX(64deg)
      rotateY(18deg)
      rotateZ(0deg);
  }

  to {
    transform:
      rotateX(64deg)
      rotateY(18deg)
      rotateZ(360deg);
  }

}


@keyframes zplRemarkableOrbit4 {

  from {
    transform:
      rotateX(70deg)
      rotateY(-22deg)
      rotateZ(360deg);
  }

  to {
    transform:
      rotateX(70deg)
      rotateY(-22deg)
      rotateZ(0deg);
  }

}


/* -----------------------------------------
   ZP CORE
----------------------------------------- */

.zpl-remarkable-core {

  position: absolute;

  top: 50%;
  left: 50%;

  width: clamp(85px, 9vw, 125px);
  aspect-ratio: 1;

  transform:
    translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(56, 189, 248, .17),
      rgba(7, 17, 29, .86) 58%,
      rgba(3, 8, 15, .96)
    );

  border:
    1px solid rgba(226, 243, 255, .22);

  box-shadow:
    0 0 25px rgba(56, 189, 248, .15),
    0 0 70px rgba(56, 189, 248, .08),
    inset 0 0 25px rgba(56, 189, 248, .08);

  z-index: 10;

  animation:
    zplCoreBreathing 4s ease-in-out infinite;

}


@keyframes zplCoreBreathing {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      scale(1);

    box-shadow:
      0 0 25px rgba(56, 189, 248, .15),
      0 0 70px rgba(56, 189, 248, .08),
      inset 0 0 25px rgba(56, 189, 248, .08);
  }

  50% {
    transform:
      translate(-50%, -50%)
      scale(1.06);

    box-shadow:
      0 0 35px rgba(56, 189, 248, .28),
      0 0 100px rgba(70, 80, 255, .14),
      inset 0 0 35px rgba(56, 189, 248, .13);
  }

}


/* -----------------------------------------
   CORE INNER CIRCLE
----------------------------------------- */

.zpl-core-circle {

  width: 47%;
  height: 47%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border:
    1px solid rgba(56, 189, 248, .45);

  background:
    radial-gradient(
      circle,
      rgba(56, 189, 248, .20),
      rgba(45, 30, 100, .12),
      transparent 72%
    );

  box-shadow:
    0 0 20px rgba(56, 189, 248, .22),
    inset 0 0 20px rgba(56, 189, 248, .10);
}


.zpl-core-circle span {

  font-family: "Inter", sans-serif;

  color: #e2f3ff;

  font-size: clamp(11px, 1vw, 15px);

  font-weight: 800;

  letter-spacing: 4px;

  margin-left: 4px;

  text-shadow:
    0 0 12px rgba(56, 189, 248, .8),
    0 0 25px rgba(56, 189, 248, .35);
}


/* -----------------------------------------
   CORE HALO
----------------------------------------- */

.zpl-core-halo {

  position: absolute;

  width: 180%;
  height: 180%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(56, 189, 248, .12),
      rgba(70, 80, 255, .05) 35%,
      transparent 70%
    );

  filter: blur(15px);

  animation:
    zplHaloPulse 4s ease-in-out infinite;

  z-index: -1;
}


@keyframes zplHaloPulse {

  0%,
  100% {
    transform: scale(.8);
    opacity: .4;
  }

  50% {
    transform: scale(1.15);
    opacity: .9;
  }

}


/* -----------------------------------------
   ORBIT NODES
----------------------------------------- */

.zpl-orbit-node {

  position: absolute;

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #e2f3ff;

  box-shadow:
    0 0 8px rgba(226, 243, 255, .9),
    0 0 22px rgba(56, 189, 248, .85);

}


/* node positions */

.node-1 {
  top: 8%;
  left: 72%;
}

.node-2 {
  top: 74%;
  left: 8%;
}

.node-3 {
  top: 12%;
  right: 18%;
}

.node-4 {
  bottom: 4%;
  left: 55%;
}


/* -----------------------------------------
   FLOATING PARTICLES
----------------------------------------- */

.zpl-remarkable-particle {

  position: absolute;

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: #e2f3ff;

  box-shadow:
    0 0 7px rgba(226, 243, 255, .9),
    0 0 18px rgba(56, 189, 248, .65);

  opacity: .45;

}


.particle-1 {
  top: 17%;
  left: 67%;

  animation:
    zplParticle1 7s ease-in-out infinite;
}

.particle-2 {
  top: 30%;
  right: 4%;

  animation:
    zplParticle2 9s ease-in-out infinite;
}

.particle-3 {
  bottom: 18%;
  right: 14%;

  animation:
    zplParticle3 8s ease-in-out infinite;
}

.particle-4 {
  bottom: 28%;
  left: 14%;

  animation:
    zplParticle4 10s ease-in-out infinite;
}

.particle-5 {
  top: 52%;
  right: 1%;

  animation:
    zplParticle5 6s ease-in-out infinite;
}


/* -----------------------------------------
   PARTICLE MOVEMENT
----------------------------------------- */

@keyframes zplParticle1 {

  0%,
  100% {
    transform: translate(0, 0);
    opacity: .2;
  }

  50% {
    transform: translate(35px, -25px);
    opacity: 1;
  }

}


@keyframes zplParticle2 {

  0%,
  100% {
    transform: translate(0, 0);
    opacity: .25;
  }

  50% {
    transform: translate(-35px, 30px);
    opacity: 1;
  }

}


@keyframes zplParticle3 {

  0%,
  100% {
    transform: translate(0, 0);
    opacity: .2;
  }

  50% {
    transform: translate(-30px, -35px);
    opacity: 1;
  }

}


@keyframes zplParticle4 {

  0%,
  100% {
    transform: translate(0, 0);
    opacity: .2;
  }

  50% {
    transform: translate(25px, -30px);
    opacity: .9;
  }

}


@keyframes zplParticle5 {

  0%,
  100% {
    transform: translate(0, 0);
    opacity: .2;
  }

  50% {
    transform: translate(-25px, 25px);
    opacity: 1;
  }

}


/* =========================================================
   RESPONSIVE
========================================================= */

/* Desktop */

@media (max-width: 1200px) {

  .zpl-remarkable-orbit {
    right: 1%;
    width: 48vw;
    height: 48vw;
  }

}


/* Tablet */

@media (max-width: 900px) {

  .zpl-remarkable-orbit {
    right: -4%;
    width: 50vw;
    height: 50vw;

    opacity: .72;
  }

}


/* Mobile */

@media (max-width: 700px) {

  .zpl-next-section {
    min-height: 100vh;
  }

  .zpl-remarkable-orbit {

    width: 85vw;
    height: 85vw;

    right: -18%;
    top: 72%;

    transform: translateY(-50%);

    opacity: .30;
  }

}


/* Small mobile */

@media (max-width: 420px) {

  .zpl-remarkable-orbit {

    width: 78vw;
    height: 78vw;

    right: -14%;

    opacity: .24;
  }

}


/* Accessibility */

@media (prefers-reduced-motion: reduce) {

  .zpl-remarkable-orbit *,
  .zpl-remarkable-orbit {
    animation: none !important;
  }

}

/* =========================================================
   ZEROPOINT LABS — NEXT SECTION
   DESKTOP + LAPTOP + TABLET + MOBILE
========================================================= */

.zpl-next-section {
  position: relative !important;

  width: 100% !important;
  min-height: 100vh !important;

  height: 100vh !important;

  overflow: hidden !important;

  display: flex !important;
  align-items: center !important;

  padding: 80px 7vw !important;

  background:
    radial-gradient(
      circle at 75% 50%,
      rgba(18, 88, 135, 0.16),
      transparent 32%
    ),
    linear-gradient(
      145deg,
      #06101b,
      #050e1a 55%,
      #02070d
    ) !important;

  color: #e2f3ff;
}


/* GRID */

.zpl-next-section::before {
  content: "";

  position: absolute;

  inset: 0;

  pointer-events: none;

  opacity: 0.06;

  background-image:
    linear-gradient(
      rgba(226,243,255,.3) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(226,243,255,.3) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  mask-image:
    radial-gradient(
      circle at 70% 50%,
      black,
      transparent 70%
    );
}


/* =========================================================
   LEFT CONTENT
========================================================= */

.zpl-next-content {
  position: relative;

  z-index: 10;

  width: min(620px, 48vw);

  display: flex;

  flex-direction: column;

  align-items: flex-start;
}


/* SMALL LABEL */

.zpl-next-label {
  font-family: "Inter", sans-serif;

  margin-bottom: 30px;

  color: #38bdf8;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 4px;
}


/* MAIN HEADING */

.zpl-next-content h2 {
  font-family: "Inter", sans-serif;

  margin: 0;

  color: #e2f3ff;

  font-size: clamp(
    58px,
    7vw,
    115px
  );

  line-height: 0.84;

  letter-spacing: -7px;

  font-weight: 800;
}


/* ITALIC WORD */

.zpl-next-content h2 strong {
  font-family: "Cormorant Garamond", serif;

  font-style: italic;

  font-weight: 600;

  color: #38bdf8;

  letter-spacing: -2px;

  text-shadow:
    0 0 40px
    rgba(56,189,248,.18);
}


/* DESCRIPTION */

.zpl-next-description {
  font-family: "Merriweather", serif;

  max-width: 500px;

  margin: 38px 0 0;

  color: #71899f;

  font-size: 13px;

  line-height: 1.9;
}


/* =========================================================
   META SERVICES
========================================================= */

.zpl-next-meta {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 35px;
}


.zpl-next-meta span {
  font-family: "Inter", sans-serif;

  padding: 9px 14px;

  border: 1px solid
    rgba(56,189,248,.18);

  border-radius: 100px;

  background:
    rgba(56,189,248,.035);

  color: #668095;

  font-size: 7px;

  font-weight: 800;

  letter-spacing: 2px;

  backdrop-filter: blur(10px);

  transition:
    color .3s ease,
    border-color .3s ease,
    background .3s ease;
}


.zpl-next-meta span:hover {
  color: #38bdf8;

  border-color:
    rgba(56,189,248,.55);

  background:
    rgba(56,189,248,.08);
}


/* =========================================================
   RIGHT ORBIT CONTAINER
========================================================= */

.zpl-next-orbit {

  position: absolute;

  z-index: 3;

  top: 50%;

  left: 73%;

  width: min(520px, 42vw);

  height: min(520px, 42vw);

  transform:
    translate(-50%, -50%);

  perspective: 1000px;

  pointer-events: none;
}


/* =========================================================
   ORBIT RINGS
========================================================= */

.zpl-next-orbit-ring {

  position: absolute;

  top: 50%;

  left: 50%;

  width: 100%;

  height: 100%;

  border-radius: 50%;

  border: 1px solid
    rgba(226,243,255,.08);

  transform:
    translate(-50%, -50%);

  transform-style: preserve-3d;
}


/* INNER */

.ring-one {

  width: 42%;

  height: 42%;

  border-top-color:
    rgba(56,189,248,.65);

  border-right-color:
    rgba(56,189,248,.15);

  animation:
    zplOrbitOne
    12s
    linear
    infinite;
}


/* MIDDLE */

.ring-two {

  width: 68%;

  height: 68%;

  border-bottom-color:
    rgba(56,189,248,.45);

  border-left-color:
    rgba(115,85,255,.35);

  animation:
    zplOrbitTwo
    18s
    linear
    infinite;
}


/* OUTER */

.ring-three {

  width: 100%;

  height: 100%;

  border-top-color:
    rgba(226,243,255,.18);

  border-right-color:
    rgba(115,85,255,.30);

  animation:
    zplOrbitThree
    25s
    linear
    infinite;
}


/* =========================================================
   ORBIT ANIMATIONS
========================================================= */

@keyframes zplOrbitOne {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(65deg)
      rotateZ(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(65deg)
      rotateZ(360deg);
  }

}


@keyframes zplOrbitTwo {

  from {
    transform:
      translate(-50%, -50%)
      rotateY(62deg)
      rotateZ(360deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateY(62deg)
      rotateZ(0deg);
  }

}


@keyframes zplOrbitThree {

  from {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateY(12deg)
      rotateZ(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotateX(68deg)
      rotateY(12deg)
      rotateZ(360deg);
  }

}


/* =========================================================
   CORE GLOW
========================================================= */

.zpl-next-orbit-glow {

  position: absolute;

  top: 50%;

  left: 50%;

  width: 45%;

  height: 45%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(56,189,248,.22),
      rgba(75,70,255,.10) 35%,
      transparent 70%
    );

  filter: blur(35px);

  animation:
    zplNextGlow
    4s
    ease-in-out
    infinite;
}


@keyframes zplNextGlow {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      scale(.85);

    opacity: .45;
  }

  50% {
    transform:
      translate(-50%, -50%)
      scale(1.15);

    opacity: .9;
  }

}


/* =========================================================
   ZP CORE
========================================================= */

.zpl-next-core {

  position: absolute;

  top: 50%;

  left: 50%;

  width: 125px;

  height: 125px;

  transform:
    translate(-50%, -50%);

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  border: 1px solid
    rgba(56,189,248,.38);

  background:
    radial-gradient(
      circle,
      rgba(56,189,248,.16),
      rgba(7,15,25,.88) 65%
    );

  box-shadow:

    0 0 30px
    rgba(56,189,248,.20),

    0 0 100px
    rgba(56,189,248,.08),

    inset 0 0 30px
    rgba(56,189,248,.08);

  animation:
    zplCoreFloat
    5s
    ease-in-out
    infinite;
}


.zpl-next-core::before {

  content: "";

  position: absolute;

  inset: 13px;

  border-radius: 50%;

  border: 1px solid
    rgba(56,189,248,.20);

  box-shadow:
    inset 0 0 20px
    rgba(56,189,248,.12);
}


.zpl-next-core span {

  position: relative;

  z-index: 2;

  font-family: "Inter", sans-serif;

  color: #e2f3ff;

  font-size: 18px;

  font-weight: 800;

  letter-spacing: 5px;

  margin-left: 5px;

  text-shadow:
    0 0 20px
    rgba(56,189,248,.8);
}


@keyframes zplCoreFloat {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      scale(1);
  }

  50% {
    transform:
      translate(-50%, -53%)
      scale(1.06);
  }

}


/* =========================================================
   ORBIT DOTS
========================================================= */

.orbit-dot {

  position: absolute;

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: #38bdf8;

  box-shadow:
    0 0 10px #38bdf8,
    0 0 25px rgba(56,189,248,.7);
}


.dot-one {

  top: 8%;

  left: 50%;

  transform: translateX(-50%);
}


.dot-two {

  right: 12%;

  top: 50%;

  transform: translateY(-50%);
}


.dot-three {

  bottom: 7%;

  left: 50%;

  transform: translateX(-50%);
}


/* =========================================================
   DESKTOP
========================================================= */

@media (min-width: 1400px) {

  .zpl-next-section {
    padding-left: 9vw !important;
  }

  .zpl-next-orbit {
    left: 74%;
    width: 600px;
    height: 600px;
  }

}


/* =========================================================
   LAPTOP
========================================================= */

@media (min-width: 901px) and (max-width: 1200px) {

  .zpl-next-content {
    width: 52vw;
  }

  .zpl-next-content h2 {
    font-size: 7vw;
  }

  .zpl-next-orbit {
    left: 76%;

    width: 430px;
    height: 430px;
  }

  .zpl-next-core {
    width: 105px;
    height: 105px;
  }

}


/* =========================================================
   TABLET
========================================================= */

@media (min-width: 701px) and (max-width: 900px) {

  .zpl-next-section {
    min-height: 100vh !important;

    padding:
      80px 6vw !important;
  }

  .zpl-next-content {
    width: 60%;
  }

  .zpl-next-content h2 {
    font-size: 9vw;

    letter-spacing: -5px;
  }

  .zpl-next-orbit {

    left: 78%;

    width: 360px;
    height: 360px;

    opacity: .65;
  }

  .zpl-next-core {
    width: 90px;
    height: 90px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {

  .zpl-next-section {

    min-height: 100svh !important;

    height: auto !important;

    padding:
      100px 24px 70px !important;

    display: block !important;
  }


  .zpl-next-content {

    width: 100%;

    position: relative;

    z-index: 10;
  }


  .zpl-next-label {
    margin-bottom: 24px;

    font-size: 8px;

    letter-spacing: 3px;
  }


  .zpl-next-content h2 {

    font-size: 16vw;

    line-height: .86;

    letter-spacing: -4px;
  }


  .zpl-next-description {

    max-width: 90%;

    margin-top: 30px;

    font-size: 10px;

    line-height: 1.8;
  }


  .zpl-next-meta {

    margin-top: 25px;

    gap: 7px;
  }


  .zpl-next-meta span {

    padding: 7px 10px;

    font-size: 6px;
  }


  .zpl-next-orbit {

    position: absolute;

    top: auto;

    bottom: -80px;

    left: 70%;

    width: 330px;

    height: 330px;

    opacity: .45;
  }


  .zpl-next-core {

    width: 80px;

    height: 80px;
  }


  .zpl-next-core span {

    font-size: 13px;

    letter-spacing: 3px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 420px) {

  .zpl-next-content h2 {

    font-size: 17vw;

    letter-spacing: -4px;
  }


  .zpl-next-orbit {

    width: 280px;

    height: 280px;

    bottom: -55px;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .zpl-next-orbit *,
  .zpl-next-orbit {

    animation: none !important;
  }

}

     /* =========================================================
   FINAL CONTENT POSITION FIX
   Desktop = LEFT
   Mobile = CENTER
   Animation/content unchanged
========================================================= */

/* =========================
   DESKTOP
========================= */

@media (min-width: 701px) {

  .zpl-next-section {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding-left: 7vw !important;
    padding-right: 7vw !important;
  }

  .zpl-next-content {
    width: 100% !important;
    max-width: 620px !important;

    margin-left: 0 !important;
    margin-right: auto !important;

    text-align: left !important;

    align-items: flex-start !important;

    /*
      Important:
      This allows the orbit to use the section
      instead of shifting the text position.
    */
    position: static !important;
  }

  .zpl-next-label {
    text-align: left !important;
  }

  .zpl-next-content h2 {
    text-align: left !important;
  }

  .zpl-next-description {
    text-align: left !important;
  }

  .zpl-next-meta {
    justify-content: flex-start !important;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  .zpl-next-section {
    display: flex !important;
    flex-direction: column !important;

    align-items: center !important;
    justify-content: flex-start !important;

    text-align: center !important;

    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .zpl-next-content {
    width: 100% !important;
    max-width: 100% !important;

    margin: 0 auto !important;

    text-align: center !important;

    align-items: center !important;

    position: relative !important;

    z-index: 10 !important;
  }

  .zpl-next-label {
    width: 100%;
    text-align: center !important;
  }

  .zpl-next-content h2 {
    width: 100%;
    text-align: center !important;
  }

  .zpl-next-description {
    margin-left: auto !important;
    margin-right: auto !important;

    text-align: center !important;
  }

  .zpl-next-meta {
    width: 100%;

    justify-content: center !important;
    align-items: center !important;
  }

}
 

      `}</style> 
    </div> 
    
  ); 
}  