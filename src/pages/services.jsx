import React, { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Plus,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   IMAGE PATHS

   public/
   └── images/
       ├── services/
       │   └── services-hero-bg.jpg
       │
       ├── results/
       │   ├── big-bites-website.png
       │   ├── big-bites-youtube.png
       │   ├── big-bites-instagram.png
       │   ├── big-bites-logo.png
       │   └── bk-homes.png
       │
       └── work/
           ├── paara-jewellery.jpg
           ├── ks-sports-arena.jpg
           ├── ak-builders.jpg
           └── big-bites.jpg
   ========================================================= */


/* =========================================================
   RESULTS THAT SPEAK
   ========================================================= */

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
      {
        value: "30+",
        label: "Franchise Enquiries",
      },
      {
        value: "5",
        label: "Conversions",
      },
      {
        value: "1 Month",
        label: "After Website Launch",
      },
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
      {
        value: "17K+",
        label: "Organic Subscribers",
      },
      {
        value: "15",
        label: "Shorts",
      },
      {
        value: "Organic",
        label: "Audience Growth",
      },
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
      {
        value: "3.5K+",
        label: "Organic Followers",
      },
      {
        value: "Organic",
        label: "Reach",
      },
      {
        value: "Audience",
        label: "Growth",
      },
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
      {
        value: "65+",
        label: "Home Enquiries",
      },
      {
        value: "₹564",
        label: "Meta Ad Spend",
      },
      {
        value: "₹8.68",
        label: "Cost / Enquiry",
      },
    ],

    description:
      "Generated 65+ direct enquiries from people interested in discussing their home construction requirements through a Meta Ads campaign.",
  },
];


/* =========================================================
   SELECTED WORK
   ========================================================= */

const selectedWork = [
  {
    number: "01",
    title: "Paara Jewellery",
    category: "E-COMMERCE WEBSITE",
    description:
      "A digital storefront designed to present jewellery products through a refined and conversion-focused shopping experience.",
    image: "/images/work/paara-jewellery.jpg",
    link: "https://paarajewellery.in",
    tag: "Web Development",
  },

  {
    number: "02",
    title: "KS Sports Arena",
    category: "SPORTS BOOKING PLATFORM",
    description:
      "A sports-focused booking platform built to help customers discover facilities and manage their bookings online.",
    image: "/images/work/ks-sports-arena.jpg",
    link: "https://www.kssportsarena.in/",
    tag: "Web Development",
  },

  {
    number: "03",
    title: "AK Builders",
    category: "BUSINESS WEBSITE",
    description:
      "A professional business website designed to establish a strong digital presence and communicate the company's services.",
    image: "/images/work/ak-builders.jpg",
    link: "https://ak-builders.vercel.app/",
    tag: "Web Development",
  },

  {
    number: "04",
    title: "Big Bites",
    category: "FOOD BUSINESS WEBSITE",
    description:
      "A modern digital presence for a food business, designed around brand visibility and franchise opportunities.",
    image: "/images/work/big-bites.jpg",
    link: "https://www.thebigbites.in/",
    tag: "Web Development",
  },
];


/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    number: "01",
    title: "BUILD",
    subtitle: "Websites & Web Applications",

    description:
      "Turn your business into a digital experience.",

    details:
      "Modern, responsive digital platforms designed around your actual business requirements.",

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

    process:
      "Understand → Design → Develop → Test → Launch",

    price: "₹19,999+",
  },

  {
    number: "02",
    title: "GROW",
    subtitle: "Digital Marketing & Performance",

    description:
      "Turn attention into business.",

    details:
      "Content strategy, social media management and performance marketing built around your business goals.",

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
  },

  {
    number: "03",
    title: "CREATE",
    subtitle: "Content Production",

    description:
      "Content that makes your business worth noticing.",

    details:
      "High-quality visual content for Instagram, YouTube, websites and advertising campaigns.",

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

    process:
      "Concept → Script → Shoot → Edit → Deliver",

    price: "₹5,000+",
  },

  {
    number: "04",
    title: "AUTOMATE",
    subtitle: "Business Software & Automation",

    description:
      "Replace manual work with smarter systems.",

    details:
      "Custom software solutions that organize operations and help businesses manage their work more efficiently.",

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

    process:
      "Understand → Architect → Develop → Test → Deploy → Support",

    price: "₹75,000+",
  },
];


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Services() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =====================================================
         HERO ANIMATION
         ===================================================== */

      gsap.from(".services-hero-element", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
      });


      /* =====================================================
         SERVICES CARD ANIMATION
         ===================================================== */

      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotateX: 8,
          duration: 1,
          delay: index * 0.05,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });


      /* =====================================================
         RESULTS HEADING
         ===================================================== */

      gsap.from(".results-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".results-section",
          start: "top 80%",
        },
      });


      /* =====================================================
         RESULTS CARDS
         ===================================================== */

      gsap.utils.toArray(".result-card").forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          delay: index * 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });


      /* =====================================================
         WORK HEADING
         ===================================================== */

      gsap.from(".work-heading", {
        y: 70,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: ".work-section",
          start: "top 80%",
        },
      });


      /* =====================================================
         WORK CARDS
         ===================================================== */

      gsap.utils.toArray(".work-card").forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: index * 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });


      /* =====================================================
         FINAL CTA
         ===================================================== */

      gsap.from(".final-cta", {
        y: 70,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: ".final-cta",
          start: "top 85%",
        },
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);


  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-[#05080b] text-white"
    >

      {/* =====================================================
          GLOBAL PAGE CSS
          ===================================================== */}

      <style>{`

        /* -------------------------------
           PREMIUM GRID
        -------------------------------- */

        .zpl-grid {
          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );

          background-size: 80px 80px;
        }


        /* -------------------------------
           NOISE
        -------------------------------- */

        .zpl-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E");
        }


        /* -------------------------------
           SERVICE CARD
        -------------------------------- */

        .service-parent {
          perspective: 1400px;
        }


        .service-card-inner {
          transform-style: preserve-3d;

          transition:
            transform 0.7s cubic-bezier(.2,.8,.2,1),
            box-shadow 0.7s ease,
            border-color 0.5s ease;
        }


        .service-parent:hover .service-card-inner {
          transform:
            rotate3d(1, -1, 0, 7deg)
            translateY(-8px);

          box-shadow:
            0 35px 80px rgba(0,0,0,.5),
            0 0 50px rgba(56,189,248,.07);
        }


        .service-glass {
          transform: translateZ(25px);

          transition:
            transform .7s cubic-bezier(.2,.8,.2,1);
        }


        .service-parent:hover .service-glass {
          transform: translateZ(45px);
        }


        .service-orb {
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1),
            opacity .5s ease;
        }


        .service-parent:hover .service-orb.one {
          transform:
            translate3d(18px,-12px,65px)
            scale(1.05);
        }


        .service-parent:hover .service-orb.two {
          transform:
            translate3d(-10px,10px,45px)
            scale(1.1);
        }


        /* -------------------------------
           RESULT CARDS
        -------------------------------- */

        .result-card {
          transition:
            transform .45s ease,
            border-color .45s ease,
            background .45s ease;
        }


        .result-card:hover {
          transform: translateY(-8px);

          border-color:
            rgba(56,189,248,.35);

          background:
            linear-gradient(
              145deg,
              rgba(15,35,48,.96),
              rgba(4,11,16,.98)
            );
        }


        .result-image {
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1);
        }


        .result-card:hover .result-image {
          transform: scale(1.045);
        }


        /* -------------------------------
           WORK CARDS
        -------------------------------- */

        .work-card {
          transition:
            transform .5s ease,
            border-color .4s ease;
        }


        .work-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(56,189,248,.35);
        }


        .work-image {
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1);
        }


        .work-card:hover .work-image {
          transform: scale(1.05);
        }


        /* -------------------------------
           PREMIUM TEXT
        -------------------------------- */

        .premium-text {
          background:
            linear-gradient(
              100deg,
              #ffffff 0%,
              #cbd5e1 45%,
              #64748b 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }


        /* -------------------------------
           MOBILE
        -------------------------------- */

        @media (max-width: 768px) {

          .service-parent:hover
          .service-card-inner {
            transform:
              translateY(-5px);
          }

        }

      `}</style>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[92vh]
          items-center
        "
      >

        {/* Background */}

        <div className="absolute inset-0">

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(3,8,12,.68), rgba(3,8,12,.96)), url('/images/services/services-hero-bg.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-[#05080b]/45" />

          <div className="absolute inset-0 zpl-grid" />

          <div className="absolute inset-0 zpl-noise" />


          {/* Glow */}

          <div
            className="
              absolute
              left-[10%]
              top-[20%]
              h-72
              w-72
              rounded-full
              bg-cyan-400/5
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              bottom-[15%]
              right-[8%]
              h-80
              w-80
              rounded-full
              bg-sky-500/5
              blur-[140px]
            "
          />

        </div>


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            py-32
            lg:px-10
          "
        >

          <div className="max-w-5xl">

            <div
              className="
                services-hero-element
                mb-7
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  h-px
                  w-12
                  bg-[#38bdf8]
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[.35em]
                  text-slate-400
                "
              >
                ZeroPoint Labs — Services
              </span>

            </div>


            <h1
              className="
                services-hero-element
                max-w-5xl
                text-5xl
                font-semibold
                leading-[.95]
                tracking-[-.055em]
                text-white
                sm:text-7xl
                lg:text-[7rem]
              "
            >

              Digital Solutions

              <br />

              <span className="premium-text">
                Built Around
              </span>

              <br />

              Your Business.

            </h1>


            <p
              className="
                services-hero-element
                mt-9
                max-w-2xl
                text-base
                leading-7
                text-slate-400
                sm:text-lg
              "
            >
              From building your digital presence to growing your audience
              and automating your operations, ZeroPoint Labs provides
              technology, marketing and creative solutions designed for
              growing businesses.
            </p>


            <div
              className="
                services-hero-element
                mt-8
                flex
                flex-wrap
                gap-3
                text-xs
                uppercase
                tracking-[.2em]
                text-slate-300
              "
            >

              <span>Build.</span>

              <span className="text-[#38bdf8]">
                Grow.
              </span>

              <span>Create.</span>

              <span>Automate.</span>

            </div>


            <div
              className="
                services-hero-element
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >

              <a
                href="#contact"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-[#38bdf8]
                "
              >
                Start a Project

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>


              <a
                href="#work"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  px-6
                  py-3.5
                  text-sm
                  text-white
                  transition
                  hover:border-[#38bdf8]/50
                  hover:bg-white/5
                "
              >
                View Our Work

                <ArrowRight size={17} />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section
        className="
          relative
          bg-[#05080b]
          px-6
          py-28
          lg:px-10
        "
      >

        <div
          className="
            absolute
            inset-0
            zpl-grid
            opacity-40
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-7xl
          "
        >

          <div className="mb-16 max-w-3xl">

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  text-[10px]
                  tracking-[.35em]
                  text-[#38bdf8]
                "
              >
                WHAT WE DO
              </span>

              <span
                className="
                  h-px
                  w-16
                  bg-white/10
                "
              />

            </div>


            <h2
              className="
                text-4xl
                font-semibold
                tracking-[-.04em]
                sm:text-6xl
              "
            >
              One digital partner.

              <br />

              <span className="text-slate-500">
                Multiple capabilities.
              </span>

            </h2>

          </div>


          <div
            className="
              grid
              gap-7
              lg:grid-cols-2
            "
          >

            {services.map((service) => (

              <div
                key={service.number}
                className="
                  service-parent
                  service-card
                  min-h-[470px]
                "
              >

                <article
                  className="
                    service-card-inner
                    relative
                    h-full
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#081118]
                    p-1
                  "
                >

                  {/* Decorative orb */}

                  <div
                    className="
                      service-orb
                      one
                      absolute
                      -right-20
                      -top-20
                      h-64
                      w-64
                      rounded-full
                      border
                      border-[#38bdf8]/10
                      bg-[#38bdf8]/5
                    "
                  />


                  <div
                    className="
                      service-orb
                      two
                      absolute
                      -bottom-24
                      -left-20
                      h-56
                      w-56
                      rounded-full
                      border
                      border-white/5
                      bg-white/[.025]
                    "
                  />


                  <div
                    className="
                      service-glass
                      relative
                      h-full
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/5
                      p-8
                      sm:p-10
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                      "
                    >

                      <div>

                        <span
                          className="
                            text-[10px]
                            tracking-[.35em]
                            text-[#38bdf8]
                          "
                        >
                          {service.number}
                        </span>


                        <h3
                          className="
                            mt-3
                            text-4xl
                            font-semibold
                            tracking-[-.04em]
                          "
                        >
                          {service.title}
                        </h3>

                      </div>


                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          text-slate-400
                        "
                      >
                        <ArrowUpRight size={18} />
                      </div>

                    </div>


                    <div className="mt-20">

                      <p
                        className="
                          text-xl
                          font-medium
                          text-white
                        "
                      >
                        {service.subtitle}
                      </p>


                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {service.description}
                      </p>


                      <p
                        className="
                          mt-4
                          max-w-lg
                          text-sm
                          leading-6
                          text-slate-400
                        "
                      >
                        {service.details}
                      </p>

                    </div>


                    <div
                      className="
                        mt-8
                        flex
                        flex-wrap
                        gap-2
                      "
                    >

                      {service.items
                        .slice(0, 4)
                        .map((item) => (

                          <span
                            key={item}
                            className="
                              rounded-full
                              border
                              border-white/10
                              px-3
                              py-1.5
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-slate-400
                            "
                          >
                            {item}
                          </span>

                        ))}

                    </div>


                    <div
                      className="
                        mt-9
                        flex
                        items-end
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                      "
                    >

                      <div>

                        <span
                          className="
                            block
                            text-[9px]
                            uppercase
                            tracking-[.25em]
                            text-slate-600
                          "
                        >
                          Starting from
                        </span>


                        <span
                          className="
                            mt-1
                            block
                            text-lg
                            font-medium
                            text-white
                          "
                        >
                          {service.price}
                        </span>

                      </div>


                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[.2em]
                          text-[#38bdf8]
                        "
                      >
                        Explore service →
                      </span>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ZEROPOINT LABS
          ===================================================== */}

      <section
        className="
          relative
          border-y
          border-white/5
          bg-[#030609]
          px-6
          py-24
          lg:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-14
              lg:grid-cols-[.8fr_1.2fr]
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[.35em]
                  text-[#38bdf8]
                "
              >
                WHY ZEROPOINT LABS?
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  tracking-[-.04em]
                  sm:text-6xl
                "
              >
                One Partner.

                <br />

                <span className="text-slate-500">
                  Multiple Digital Capabilities.
                </span>
              </h2>

            </div>


            <div
              className="
                grid
                gap-px
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/10
                sm:grid-cols-2
              "
            >

              {[
                [
                  "Technology",
                  "Modern websites, web applications and business systems.",
                ],
                [
                  "Creative",
                  "Professional content designed around your brand.",
                ],
                [
                  "Growth",
                  "Social media and performance marketing focused on business objectives.",
                ],
                [
                  "Automation",
                  "Systems that reduce manual work and organize your operations.",
                ],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="
                    bg-[#070c10]
                    p-7
                    transition
                    hover:bg-[#0b151c]
                  "
                >

                  <h3 className="text-lg font-medium">
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS THAT SPEAK
          ===================================================== */}

      <section
        className="
          results-section
          relative
          overflow-hidden
          bg-[#05080b]
          px-6
          py-32
          lg:px-10
        "
      >

        <div
          className="
            absolute
            inset-0
            zpl-grid
            opacity-30
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-[1450px]
          "
        >

          {/* Heading */}

          <div
            className="
              results-heading
              mx-auto
              mb-14
              max-w-4xl
              text-center
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[.4em]
                text-[#38bdf8]
              "
            >
              CLIENT RESULTS
            </span>


            <h2
              className="
                mt-5
                text-5xl
                font-semibold
                tracking-[-.05em]
                sm:text-7xl
              "
            >
              Results That Speak.
            </h2>


            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              We don't just build digital solutions. We focus on measurable
              outcomes — from generating business enquiries to growing
              audiences and helping businesses reach more customers.
            </p>

          </div>


          {/* Result Cards */}

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {resultCards.map((result) => (

              <article
                key={result.id}
                className="
                  result-card
                  group
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-[#080d11]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    m-2.5
                    h-[190px]
                    overflow-hidden
                    rounded-[15px]
                    border
                    border-white/5
                    bg-[#0d161c]
                  "
                >

                  {/* Placeholder */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-0
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#0d1d27]
                      via-[#081016]
                      to-[#030609]
                    "
                  >

                    <div className="text-center">

                      <div
                        className="
                          mx-auto
                          mb-3
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                        "
                      >

                        <span
                          className="
                            text-xs
                            text-slate-600
                          "
                        >
                          {result.id}
                        </span>

                      </div>


                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[.3em]
                          text-slate-600
                        "
                      >
                        Add project image
                      </span>

                    </div>

                  </div>


                  {/* ACTUAL IMAGE */}

                  <img
                    src={result.image}
                    alt={`${result.client} ${result.category}`}
                    className="
                      result-image
                      absolute
                      inset-0
                      z-10
                      h-full
                      w-full
                      object-cover
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />


                  {/* Dark overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      to-black/10
                      pointer-events-none
                    "
                  />


                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      z-30
                      rounded-full
                      border
                      border-white/10
                      bg-black/50
                      px-3
                      py-1
                      text-[9px]
                      tracking-[.2em]
                      text-slate-300
                      backdrop-blur-md
                    "
                  >
                    {result.id}
                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-5 pt-3">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[.22em]
                      text-slate-500
                    "
                  >

                    <span>
                      {result.client}
                    </span>

                    <span className="text-[#38bdf8]">
                      /
                    </span>

                    <span>
                      {result.category}
                    </span>

                  </div>


                  {/* Main number */}

                  <div className="mt-7">

                    <div
                      className="
                        text-[3.4rem]
                        font-semibold
                        leading-none
                        tracking-[-.07em]
                        text-white
                      "
                    >
                      {result.number}
                    </div>


                    <div
                      className="
                        mt-2
                        text-lg
                        font-medium
                        tracking-tight
                        text-slate-200
                      "
                    >
                      {result.label}
                    </div>

                  </div>


                  {/* Stats */}

                  <div
                    className="
                      mt-8
                      grid
                      grid-cols-3
                      border-y
                      border-white/10
                      py-5
                    "
                  >

                    {result.stats.map((stat, index) => (

                      <div
                        key={stat.label}
                        className={
                          index !== 0
                            ? "border-l border-white/10 pl-3"
                            : ""
                        }
                      >

                        <div
                          className="
                            text-base
                            font-medium
                            text-white
                          "
                        >
                          {stat.value}
                        </div>


                        <div
                          className="
                            mt-1
                            text-[9px]
                            leading-4
                            text-slate-500
                          "
                        >
                          {stat.label}
                        </div>

                      </div>

                    ))}

                  </div>


                  {/* Description */}

                  <p
                    className="
                      mt-5
                      min-h-[72px]
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    {result.description}
                  </p>


                  {/* Bottom */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/10
                      pt-4
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[.2em]
                        text-slate-600
                      "
                    >
                      Selected Result
                    </span>


                    <ArrowUpRight
                      size={16}
                      className="
                        text-[#38bdf8]
                        transition-transform
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* Disclaimer */}

          <p
            className="
              mt-10
              text-center
              text-[10px]
              leading-5
              text-slate-600
            "
          >
            Results shown are from selected client projects and may vary
            depending on business, market, campaign, budget and other factors.
          </p>

        </div>

      </section>


      {/* =====================================================
          RESULTS CTA
          ===================================================== */}

      <section
        className="
          relative
          border-y
          border-white/5
          bg-[#030609]
          px-6
          py-24
          lg:px-10
        "
      >

        <div
          className="
            final-cta
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[.4em]
              text-[#38bdf8]
            "
          >
            YOUR BUSINESS COULD BE NEXT
          </span>


          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-[-.045em]
              sm:text-6xl
            "
          >
            Let's Create Your

            <br />

            <span className="text-slate-500">
              Next Result.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
            "
          >
            Every business has a different goal. Let's build the right digital
            solution to help you achieve yours.
          </p>


          <div
            className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            <a
              href="#work"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-3.5
                text-sm
                font-medium
                text-black
                transition
                hover:bg-[#38bdf8]
              "
            >
              View Our Work

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />

            </a>


            <a
              href="#contact"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                px-7
                py-3.5
                text-sm
                text-white
                transition
                hover:border-[#38bdf8]/50
                hover:bg-white/5
              "
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
          ===================================================== */}

      <section
        id="work"
        className="
          work-section
          relative
          bg-[#05080b]
          px-6
          py-32
          lg:px-10
        "
      >

        <div
          className="
            absolute
            inset-0
            zpl-grid
            opacity-25
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-7xl
          "
        >

          <div
            className="
              work-heading
              mb-14
              flex
              flex-col
              justify-between
              gap-6
              lg:flex-row
              lg:items-end
            "
          >

            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[.4em]
                  text-[#38bdf8]
                "
              >
                SELECTED WORK
              </span>


              <h2
                className="
                  mt-5
                  text-5xl
                  font-semibold
                  tracking-[-.05em]
                  sm:text-7xl
                "
              >
                Built for

                <br />

                <span className="text-slate-500">
                  real businesses.
                </span>

              </h2>

            </div>


            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-slate-500
              "
            >
              A selection of websites and digital platforms we've built
              across different industries and business requirements.
            </p>

          </div>


          {/* Work cards */}

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >

            {selectedWork.map((work) => (

              <article
                key={work.number}
                className="
                  work-card
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[#080d11]
                "
              >

                {/* Image */}

                <div
                  className="
                    relative
                    m-3
                    h-[270px]
                    overflow-hidden
                    rounded-[18px]
                    bg-[#0d161c]
                  "
                >

                  {/* Placeholder */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-0
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#10212b]
                      via-[#091117]
                      to-[#030609]
                    "
                  >

                    <div className="text-center">

                      <span
                        className="
                          block
                          text-5xl
                          font-semibold
                          tracking-[-.05em]
                          text-white/10
                        "
                      >
                        {work.number}
                      </span>


                      <span
                        className="
                          mt-2
                          block
                          text-[9px]
                          uppercase
                          tracking-[.3em]
                          text-slate-600
                        "
                      >
                        Add project image
                      </span>

                    </div>

                  </div>


                  {/* Actual image */}

                  <img
                    src={work.image}
                    alt={work.title}
                    className="
                      work-image
                      absolute
                      inset-0
                      z-10
                      h-full
                      w-full
                      object-cover
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />


                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      to-black/10
                      pointer-events-none
                    "
                  />


                  {/* Tag */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      z-30
                      rounded-full
                      border
                      border-white/10
                      bg-black/60
                      px-3
                      py-1.5
                      text-[9px]
                      uppercase
                      tracking-[.2em]
                      text-slate-300
                      backdrop-blur-md
                    "
                  >
                    {work.tag}
                  </div>

                </div>


                {/* Content */}

                <div className="p-6 pt-3">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div>

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[.3em]
                          text-[#38bdf8]
                        "
                      >
                        {work.number}
                      </span>


                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-medium
                          tracking-[-.03em]
                        "
                      >
                        {work.title}
                      </h3>

                    </div>


                    <a
                      href={work.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-slate-400
                        transition
                        hover:border-[#38bdf8]/40
                        hover:text-[#38bdf8]
                      "
                      aria-label={`Visit ${work.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>

                  </div>


                  <div
                    className="
                      mt-4
                      text-[9px]
                      uppercase
                      tracking-[.25em]
                      text-slate-600
                    "
                  >
                    {work.category}
                  </div>


                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {work.description}
                  </p>


                  <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      uppercase
                      tracking-[.2em]
                      text-slate-400
                      transition
                      hover:text-[#38bdf8]
                    "
                  >
                    Visit Project

                    <ArrowUpRight size={14} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OTHER CAPABILITIES
          ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/5
          bg-[#030609]
          px-6
          py-28
          lg:px-10
        "
      >

        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-5
              lg:grid-cols-2
            "
          >

            {/* BUSINESS SOFTWARE */}

            <article
              className="
                group
                rounded-[25px]
                border
                border-white/10
                bg-[#070c10]
                p-8
                transition
                hover:border-[#38bdf8]/20
                sm:p-10
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[.35em]
                    text-[#38bdf8]
                  "
                >
                  Business Software
                </span>


                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                  "
                >

                  <Plus
                    size={17}
                    className="
                      text-slate-500
                      transition
                      group-hover:rotate-90
                      group-hover:text-[#38bdf8]
                    "
                  />

                </div>

              </div>


              <h3
                className="
                  mt-10
                  text-3xl
                  font-medium
                  tracking-[-.035em]
                "
              >
                Systems that make

                <br />

                <span className="text-slate-500">
                  business easier to manage.
                </span>

              </h3>


              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-slate-500
                "
              >
                We are currently developing a CRM & Business Management
                System designed to help businesses manage customers,
                operations and their day-to-day business activities more
                efficiently.
              </p>


              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {[
                  "CRM",
                  "Customer Management",
                  "Business Operations",
                  "Automation",
                ].map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      uppercase
                      tracking-wider
                      text-slate-500
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </article>


            {/* SOCIAL MEDIA */}

            <article
              className="
                group
                rounded-[25px]
                border
                border-white/10
                bg-[#070c10]
                p-8
                transition
                hover:border-[#38bdf8]/20
                sm:p-10
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[.35em]
                    text-[#38bdf8]
                  "
                >
                  Social Media & Content
                </span>


                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                  "
                >

                  <Plus
                    size={17}
                    className="
                      text-slate-500
                      transition
                      group-hover:rotate-90
                      group-hover:text-[#38bdf8]
                    "
                  />

                </div>

              </div>


              <h3
                className="
                  mt-10
                  text-3xl
                  font-medium
                  tracking-[-.035em]
                "
              >
                Content that gets

                <br />

                <span className="text-slate-500">
                  people to notice.
                </span>

              </h3>


              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-slate-500
                "
              >
                We handle content planning, scripting, shooting, editing,
                posting and performance marketing depending on the
                requirement.
              </p>


              <div
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-4
                  border-y
                  border-white/10
                  py-6
                "
              >

                <div>

                  <span
                    className="
                      block
                      text-3xl
                      font-semibold
                      tracking-[-.05em]
                    "
                  >
                    17K+
                  </span>


                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      uppercase
                      tracking-[.2em]
                      text-slate-600
                    "
                  >
                    YouTube Subscribers
                  </span>

                </div>


                <div
                  className="
                    border-l
                    border-white/10
                    pl-5
                  "
                >

                  <span
                    className="
                      block
                      text-3xl
                      font-semibold
                      tracking-[-.05em]
                    "
                  >
                    1K+
                  </span>


                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      uppercase
                      tracking-[.2em]
                      text-slate-600
                    "
                  >
                    Followers in ~2 Weeks
                  </span>

                </div>

              </div>


              <p
                className="
                  mt-5
                  text-xs
                  leading-5
                  text-slate-600
                "
              >
                On YouTube, through 11 videos, the channel reached 17K+
                subscribers and is still growing.
              </p>

            </article>

          </div>


          {/* Confidentiality */}

          <div
            className="
              mt-8
              rounded-[25px]
              border
              border-white/5
              bg-[#070c10]
              p-7
              text-center
            "
          >

            <p
              className="
                text-sm
                leading-6
                text-slate-500
              "
            >
              Some of our other projects cannot be publicly shared due to
              client confidentiality, but we can discuss those projects
              directly if required.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
          ===================================================== */}

      <section
        className="
          relative
          bg-[#05080b]
          px-6
          py-32
          lg:px-10
        "
      >

        <div
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[.4em]
              text-[#38bdf8]
            "
          >
            OUR APPROACH
          </span>


          <h2
            className="
              mt-5
              text-5xl
              font-semibold
              tracking-[-.05em]
              sm:text-7xl
            "
          >
            We don't start with

            <br />

            <span className="text-slate-500">
              a package.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
            "
          >
            We start with the problem.
          </p>


          <div
            className="
              mt-16
              grid
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {[
              "What are you trying to achieve?",
              "What isn't working currently?",
              "Where are you losing customers or time?",
              "What can technology or marketing improve?",
            ].map((question, index) => (

              <div
                key={question}
                className="
                  bg-[#070c10]
                  p-7
                  text-left
                  transition
                  hover:bg-[#0b151c]
                "
              >

                <span
                  className="
                    text-[9px]
                    tracking-[.25em]
                    text-[#38bdf8]
                  "
                >
                  0{index + 1}
                </span>


                <p
                  className="
                    mt-5
                    text-sm
                    leading-6
                    text-slate-300
                  "
                >
                  {question}
                </p>

              </div>

            ))}

          </div>


          <p
            className="
              mx-auto
              mt-10
              max-w-xl
              text-sm
              leading-7
              text-slate-500
            "
          >
            Then we recommend the appropriate solution.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section
        id="contact"
        className="
          relative
          overflow-hidden
          border-t
          border-white/5
          bg-[#030609]
          px-6
          py-32
          lg:px-10
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#38bdf8]/5
            blur-[140px]
          "
        />


        <div
          className="
            relative
            mx-auto
            max-w-5xl
            text-center
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[.4em]
              text-[#38bdf8]
            "
          >
            ZEROPOINT LABS
          </span>


          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              tracking-[-.055em]
              sm:text-7xl
              lg:text-8xl
            "
          >
            Let's Build

            <br />

            <span className="text-slate-500">
              Something That Works.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-slate-500
            "
          >
            Tell us what you're building, what you're struggling with, or
            what you want to improve. We'll help you identify the right
            digital solution.
          </p>


          <a
            href="mailto:hello@zeropointlabs.com"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-medium
              text-black
              transition
              hover:bg-[#38bdf8]
            "
          >
            Start a Conversation

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />

          </a>


          <div className="mt-20">

            <p
              className="
                font-serif
                text-2xl
                italic
                text-slate-700
              "
            >
              Code. Create. Elevate.
            </p>

         </div>

        </div>

      </section>

    </main>
  );
}