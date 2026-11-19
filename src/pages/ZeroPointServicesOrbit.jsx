import React from "react";
import {
  Smartphone,
  Globe2,
  Code2,
  Megaphone,
  PenLine,
  Video,
  BarChart3,
  FileText,
  Palette,
  CircleDot,
} from "lucide-react";

/*
  ZeroPoint Labs — animated services orbit
  Requirements:
  - React + Tailwind CSS
  - lucide-react for external SVG icons
  - No separate CSS file required
*/

function ZeroPointOrbit() {
  const services = [
    {
      title: "WEBSITE",
      subtitle: "DEVELOPMENT",
      icon: Globe2,
      angle: 0,
    },
    {
      title: "WEB",
      subtitle: "APPLICATIONS",
      icon: Code2,
      angle: 40,
    },
    {
      title: "DIGITAL",
      subtitle: "MARKETING",
      icon: Megaphone,
      angle: 80,
    },
    {
      title: "SCRIPT",
      subtitle: "WRITING",
      icon: PenLine,
      angle: 120,
    },
    {
      title: "SHOOTING &",
      subtitle: "EDITING",
      icon: Video,
      angle: 160,
    },
    {
      title: "SALES &",
      subtitle: "COPYWRITING",
      icon: BarChart3,
      angle: 200,
    },
    {
      title: "CONTENT",
      subtitle: "CREATION",
      icon: FileText,
      angle: 240,
    },
    {
      title: "BRANDING",
      subtitle: "",
      icon: Palette,
      angle: 280,
    },
    {
      title: "MOBILE APP",
      subtitle: "DEVELOPMENT",
      icon: Smartphone,
      angle: 320,
    },
  ];

  return (
    <>
      <style>{`

        /* =========================================
           MAIN ORBIT
        ========================================= */

        @keyframes zpOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }


        /* =========================================
           KEEP ICONS/TEXT UPRIGHT
        ========================================= */

        @keyframes zpCounterOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(-360deg);
          }
        }


        /* =========================================
           CENTRAL CORE
        ========================================= */

        @keyframes zpCorePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow:
              0 0 25px rgba(0, 150, 255, 0.55),
              0 0 60px rgba(0, 100, 255, 0.25),
              inset 0 0 25px rgba(0, 160, 255, 0.2);
          }

          50% {
            transform: scale(1.05);
            box-shadow:
              0 0 45px rgba(0, 190, 255, 0.9),
              0 0 100px rgba(0, 120, 255, 0.4),
              inset 0 0 40px rgba(0, 180, 255, 0.35);
          }
        }


        /* =========================================
           SERVICE NODE PULSE
        ========================================= */

        @keyframes zpNodePulse {
          0%,
          100% {
            box-shadow:
              0 0 12px rgba(0, 150, 255, 0.35),
              inset 0 0 10px rgba(0, 150, 255, 0.1);
          }

          50% {
            box-shadow:
              0 0 28px rgba(0, 190, 255, 0.75),
              inset 0 0 18px rgba(0, 160, 255, 0.2);
          }
        }


        /* =========================================
           ORBIT DOT
        ========================================= */

        @keyframes zpDotPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }


        .zp-orbit {
          animation: zpOrbit 30s linear infinite;
        }

        .zp-counter {
          animation: zpCounterOrbit 30s linear infinite;
        }

        .zp-core {
          animation: zpCorePulse 3s ease-in-out infinite;
        }

        .zp-node {
          animation: zpNodePulse 3s ease-in-out infinite;
        }

        .zp-dot {
          animation: zpDotPulse 2s ease-in-out infinite;
        }

      `}</style>


      {/* =====================================================
          ANIMATION AREA

          This is designed to sit inside the EMPTY
          RIGHT SIDE of your Services page.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-40px]
          top-1/2
          z-10
          h-[430px]
          w-[430px]
          -translate-y-1/2

          sm:right-[-30px]
          sm:h-[500px]
          sm:w-[500px]

          lg:right-[-20px]
          lg:h-[580px]
          lg:w-[580px]

          xl:right-[0px]
          xl:h-[650px]
          xl:w-[650px]
        "
      >

        {/* =================================================
            ATMOSPHERIC GLOW
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[65%]
            w-[65%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[80px]
          "
        />


        {/* =================================================
            STATIC ORBIT RINGS
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[82%]
            w-[82%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/20
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[67%]
            w-[67%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/15
          "
        />


        {/* =================================================
            ROTATING ORBIT
        ================================================= */}

        <div
          className="
            zp-orbit
            absolute
            left-1/2
            top-1/2
            h-[82%]
            w-[82%]
            rounded-full
            border
            border-dashed
            border-cyan-400/25
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[55%]
            w-[55%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-400/20
          "
        />


        {/* =================================================
            SERVICE ORBIT

            ALL SERVICES ACTUALLY MOVE AROUND CENTER
        ================================================= */}

        <div
          className="
            zp-orbit
            absolute
            left-1/2
            top-1/2
            h-[78%]
            w-[78%]
          "
        >

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${service.angle}deg)
                    translateY(-${index % 2 === 0 ? "155px" : "155px"})
                  `,
                }}
              >

                {/* Counter rotation keeps content upright */}
                <div className="zp-counter">

                  <div className="flex w-[85px] flex-col items-center sm:w-[100px]">

                    {/* ICON */}
                    <div
                      className="
                        zp-node
                        relative
                        flex
                        h-[62px]
                        w-[62px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-400/60
                        bg-[#031329]/95
                        backdrop-blur-md

                        sm:h-[75px]
                        sm:w-[75px]
                      "
                    >

                      {/* Inner rings */}
                      <div
                        className="
                          absolute
                          inset-[6px]
                          rounded-full
                          border
                          border-blue-400/30
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-[13px]
                          rounded-full
                          border
                          border-cyan-400/15
                        "
                      />

                      <Icon
                        strokeWidth={1.5}
                        className="
                          relative
                          z-10
                          h-6
                          w-6
                          text-cyan-200

                          drop-shadow-[0_0_10px_rgba(0,190,255,.9)]

                          sm:h-7
                          sm:w-7
                        "
                      />

                      {/* Center light */}
                      <span
                        className="
                          zp-dot
                          absolute
                          h-1
                          w-1
                          rounded-full
                          bg-cyan-100
                          shadow-[0_0_10px_#00D9FF]
                        "
                      />

                    </div>


                    {/* TEXT */}
                    <div
                      className="
                        mt-2
                        text-center
                        text-[7px]
                        font-bold
                        leading-[1.2]
                        tracking-wide
                        text-white
                        drop-shadow-[0_0_7px_rgba(255,255,255,.4)]

                        sm:text-[9px]
                      "
                    >
                      <div>{service.title}</div>

                      {service.subtitle && (
                        <div>{service.subtitle}</div>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* =================================================
            CENTRAL ZEROPOINT LABS
        ================================================= */}

        <div
          className="
            zp-core
            absolute
            left-1/2
            top-1/2
            z-50
            flex
            h-[145px]
            w-[145px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/60

            bg-[radial-gradient(circle,rgba(5,70,145,.95),rgba(1,15,38,.98)_65%,#000713)]

            sm:h-[165px]
            sm:w-[165px]
          "
        >

          {/* Outer core rings */}

          <div
            className="
              absolute
              -inset-[8px]
              rounded-full
              border
              border-cyan-400/20
            "
          />

          <div
            className="
              absolute
              -inset-[20px]
              rounded-full
              border
              border-blue-400/10
            "
          />


          {/* Center content */}

          <div className="relative z-10 text-center">

            <div
              className="
                text-[65px]
                font-black
                leading-none
                text-cyan-300
                drop-shadow-[0_0_22px_rgba(0,200,255,1)]
              "
            >
              ø
            </div>

            <div
              className="
                mt-1
                text-[11px]
                font-bold
                tracking-wide
                text-white
              "
            >
              ZEROPOINT
            </div>

            <div
              className="
                text-[7px]
                font-medium
                tracking-[.35em]
                text-blue-200
              "
            >
              LABS
            </div>

          </div>

        </div>


        {/* =================================================
            ORBITAL LIGHT POINTS
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[9%]
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-cyan-100
            shadow-[0_0_18px_#00CFFF]
          "
        />

        <div
          className="
            absolute
            bottom-[9%]
            left-1/2
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-cyan-100
            shadow-[0_0_18px_#00CFFF]
          "
        />

      </div>
    </>
  );
}