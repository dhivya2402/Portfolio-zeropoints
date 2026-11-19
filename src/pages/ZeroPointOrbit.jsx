import React from "react";
import {
  Globe2,
  Smartphone,
  Code2,
  Megaphone,
  BriefcaseBusiness,
  PenLine,
  Video,
  BarChart3,
  FileText,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "WEBSITE",
    subtitle: "DEVELOPMENT",
    icon: Globe2,
  },
  {
    title: "MOBILE APP",
    subtitle: "DEVELOPMENT",
    icon: Smartphone,
  },
  {
    title: "WEB",
    subtitle: "APPLICATIONS",
    icon: Code2,
  },
  {
    title: "DIGITAL",
    subtitle: "MARKETING",
    icon: Megaphone,
  },
  {
    title: "BUSINESS",
    subtitle: "PROMOTION",
    icon: BriefcaseBusiness,
  },
  {
    title: "SCRIPT",
    subtitle: "WRITING",
    icon: PenLine,
  },
  {
    title: "SHOOTING &",
    subtitle: "EDITING",
    icon: Video,
  },
  {
    title: "SALES &",
    subtitle: "COPYWRITING",
    icon: BarChart3,
  },
  {
    title: "CONTENT",
    subtitle: "CREATION",
    icon: FileText,
  },
  {
    title: "BRANDING",
    subtitle: "",
    icon: Palette,
  },
];

export default function ZeroPointOrbit() {
  return (
    <div className="relative h-[500px] w-[500px] overflow-visible">

      {/* =====================================================
          ANIMATION CSS
      ===================================================== */}

      <style>{`
        @keyframes orbitRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes counterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 25px rgba(0, 160, 255, 0.5),
              0 0 70px rgba(0, 120, 255, 0.25),
              inset 0 0 25px rgba(0, 180, 255, 0.2);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.06);
            box-shadow:
              0 0 45px rgba(0, 200, 255, 0.9),
              0 0 110px rgba(0, 120, 255, 0.4),
              inset 0 0 40px rgba(0, 180, 255, 0.35);
          }
        }

        @keyframes nodePulse {
          0%,
          100% {
            box-shadow:
              0 0 10px rgba(0, 150, 255, 0.35),
              inset 0 0 12px rgba(0, 150, 255, 0.12);
          }

          50% {
            box-shadow:
              0 0 25px rgba(0, 210, 255, 0.85),
              0 0 45px rgba(0, 120, 255, 0.3),
              inset 0 0 20px rgba(0, 180, 255, 0.25);
          }
        }

        @keyframes dashMove {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.6);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        .orbit-rotate {
          animation: orbitRotate 32s linear infinite;
        }

        .counter-rotate {
          animation: counterRotate 32s linear infinite;
        }

        .core-pulse {
          animation: corePulse 3s ease-in-out infinite;
        }

        .node-pulse {
          animation: nodePulse 3s ease-in-out infinite;
        }

        .dash-move {
          stroke-dasharray: 8 15;
          animation: dashMove 5s linear infinite;
        }

        .twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

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
          bg-blue-600/10
          blur-[70px]
        "
      />

      {/* =====================================================
          STARS
      ===================================================== */}

      {[
        [10, 15],
        [25, 5],
        [50, 2],
        [76, 9],
        [91, 25],
        [96, 50],
        [85, 78],
        [70, 94],
        [47, 97],
        [20, 87],
        [4, 62],
        [5, 35],
      ].map(([x, y], index) => (
        <span
          key={index}
          className="
            twinkle
            absolute
            h-[3px]
            w-[3px]
            rounded-full
            bg-cyan-200
            shadow-[0_0_8px_#00D9FF]
          "
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${index * 0.25}s`,
          }}
        />
      ))}

      {/* =====================================================
          OUTER STATIC RING
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[88%]
          w-[88%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-500/20
        "
      />

      {/* =====================================================
          INNER STATIC RING
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[70%]
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/15
        "
      />

      {/* =====================================================
          ROTATING DASHED RING
      ===================================================== */}

      <div
        className="
          orbit-rotate
          absolute
          left-1/2
          top-1/2
          h-[88%]
          w-[88%]
          rounded-full
          border
          border-dashed
          border-cyan-400/30
        "
      />

      {/* =====================================================
          FUTURISTIC SVG NETWORK
      ===================================================== */}

      <svg
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="blueGlow">
            <feGaussianBlur
              stdDeviation="2.5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}

        <g
          fill="none"
          stroke="#159DFF"
          strokeWidth="1.3"
          opacity="0.55"
          filter="url(#blueGlow)"
        >
          <path
            className="dash-move"
            d="M250 250 C250 175 250 100 250 35"
          />

          <path
            className="dash-move"
            d="M250 250 C325 195 390 125 455 65"
          />

          <path
            className="dash-move"
            d="M250 250 C330 250 410 250 470 250"
          />

          <path
            className="dash-move"
            d="M250 250 C325 305 390 375 455 435"
          />

          <path
            className="dash-move"
            d="M250 250 C250 325 250 400 250 465"
          />

          <path
            className="dash-move"
            d="M250 250 C175 305 110 375 45 435"
          />

          <path
            className="dash-move"
            d="M250 250 C170 250 90 250 30 250"
          />

          <path
            className="dash-move"
            d="M250 250 C175 195 110 125 45 65"
          />
        </g>

        {/* Elliptical orbital paths */}

        <g
          fill="none"
          stroke="#087DDE"
          strokeWidth="1"
          opacity="0.35"
        >
          <ellipse
            cx="250"
            cy="250"
            rx="225"
            ry="70"
            transform="rotate(25 250 250)"
          />

          <ellipse
            cx="250"
            cy="250"
            rx="225"
            ry="70"
            transform="rotate(-25 250 250)"
          />

          <ellipse
            cx="250"
            cy="250"
            rx="175"
            ry="55"
            transform="rotate(65 250 250)"
          />
        </g>

        {/* Connection points */}

        {[
          [250, 35],
          [455, 65],
          [470, 250],
          [455, 435],
          [250, 465],
          [45, 435],
          [30, 250],
          [45, 65],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill="#C7F7FF"
            />

            <circle
              cx={cx}
              cy={cy}
              r="9"
              fill="none"
              stroke="#159DFF"
              opacity="0.45"
            />
          </g>
        ))}
      </svg>

      {/* =====================================================
          SERVICE ORBIT

          ALL 10 SERVICES MOVE AROUND THE CENTER
      ===================================================== */}

      <div
        className="
          orbit-rotate
          absolute
          left-1/2
          top-1/2
          h-[76%]
          w-[76%]
        "
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          const angle =
            index * (360 / services.length);

          return (
            <div
              key={service.title}
              className="
                absolute
                left-1/2
                top-1/2
              "
              style={{
                transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translateY(-190px)
                `,
              }}
            >
              {/* Counter rotation keeps text upright */}

              <div className="counter-rotate">

                <div
                  className="
                    flex
                    w-[85px]
                    flex-col
                    items-center
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      node-pulse
                      relative
                      flex
                      h-[62px]
                      w-[62px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-400/60
                      bg-[#021126]/95
                      backdrop-blur-md
                    "
                  >

                    {/* Inner ring */}

                    <div
                      className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border
                        border-blue-400/30
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-[12px]
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
                        drop-shadow-[0_0_10px_rgba(0,200,255,.9)]
                      "
                    />

                    {/* Center dot */}

                    <span
                      className="
                        absolute
                        h-[4px]
                        w-[4px]
                        rounded-full
                        bg-cyan-100
                        shadow-[0_0_10px_#00D9FF]
                      "
                    />

                  </div>

                  {/* SERVICE NAME */}

                  <div
                    className="
                      mt-2
                      whitespace-nowrap
                      text-center
                      text-[8px]
                      font-bold
                      leading-[1.2]
                      tracking-wide
                      text-white
                      drop-shadow-[0_0_8px_rgba(255,255,255,.5)]
                    "
                  >
                    <div>
                      {service.title}
                    </div>

                    {service.subtitle && (
                      <div>
                        {service.subtitle}
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          ZEROPOINT CENTER
      ===================================================== */}

      <div
        className="
          core-pulse
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
          bg-[radial-gradient(circle,rgba(5,75,150,.95),rgba(1,17,40,.98)_62%,#000713)]
        "
      >

        {/* Outer rings */}

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

        <div
          className="
            absolute
            -inset-[34px]
            rounded-full
            border
            border-blue-500/5
          "
        />

        {/* Logo */}

        <div className="relative z-10 text-center">

          <div
            className="
              text-[64px]
              font-black
              leading-none
              text-cyan-300
              drop-shadow-[0_0_22px_rgba(0,210,255,1)]
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
              mt-[2px]
              text-[7px]
              font-medium
              tracking-[.4em]
              text-blue-200
            "
          >
            LABS
          </div>

        </div>

        {/* Center glowing point */}

        <span
          className="
            absolute
            h-[5px]
            w-[5px]
            rounded-full
            bg-white
            shadow-[0_0_18px_#00D9FF]
          "
        />

      </div>

    </div>
  );
}