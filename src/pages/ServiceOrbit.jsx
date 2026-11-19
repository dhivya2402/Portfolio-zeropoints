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

const services = [
  {
    title: "WEBSITE",
    subtitle: "DEVELOPMENT",
    icon: Globe2,
    position: "top",
    delay: "0s",
  },
  {
    title: "WEB",
    subtitle: "APPLICATIONS",
    icon: Code2,
    position: "topRight",
    delay: "0.8s",
  },
  {
    title: "DIGITAL",
    subtitle: "MARKETING",
    icon: Megaphone,
    position: "right",
    delay: "1.6s",
  },
  {
    title: "SCRIPT",
    subtitle: "WRITING",
    icon: PenLine,
    position: "bottomRight",
    delay: "2.4s",
  },
  {
    title: "SHOOTING &",
    subtitle: "EDITING",
    icon: Video,
    position: "bottom",
    delay: "3.2s",
  },
  {
    title: "SALES &",
    subtitle: "COPYWRITING",
    icon: BarChart3,
    position: "bottomLeft",
    delay: "4s",
  },
  {
    title: "CONTENT",
    subtitle: "CREATION",
    icon: FileText,
    position: "leftBottom",
    delay: "4.8s",
  },
  {
    title: "BRANDING",
    subtitle: "",
    icon: Palette,
    position: "left",
    delay: "5.6s",
  },
  {
    title: "MOBILE APP",
    subtitle: "DEVELOPMENT",
    icon: Smartphone,
    position: "topLeft",
    delay: "6.4s",
  },
];

const positions = {
  top: "left-1/2 top-[2%] -translate-x-1/2",
  topRight: "right-[12%] top-[15%]",
  right: "right-[4%] top-1/2 -translate-y-1/2",
  bottomRight: "right-[12%] bottom-[13%]",
  bottom: "left-1/2 bottom-[2%] -translate-x-1/2",
  bottomLeft: "left-[13%] bottom-[13%]",
  leftBottom: "left-[4%] top-[62%] -translate-y-1/2",
  left: "left-[2%] top-[42%] -translate-y-1/2",
  topLeft: "left-[13%] top-[15%]",
};

function ServiceNode({ service }) {
  const Icon = service.icon;

  return (
    <div
      className={`absolute z-30 flex w-[112px] flex-col items-center sm:w-[135px] md:w-[155px] ${positions[service.position]}`}
      style={{ animationDelay: service.delay }}
    >
      <div className="node-pulse relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-cyan-400/60 bg-[#031329]/90 shadow-[0_0_20px_rgba(0,136,255,.55),inset_0_0_18px_rgba(0,132,255,.22)] sm:h-[100px] sm:w-[100px] md:h-[112px] md:w-[112px]">
        <div className="absolute inset-[7px] rounded-full border border-blue-400/40" />
        <div className="absolute inset-[15px] rounded-full border border-cyan-400/20" />
        <Icon
          strokeWidth={1.6}
          className="relative z-10 h-9 w-9 text-cyan-200 drop-shadow-[0_0_10px_rgba(0,183,255,.9)] sm:h-11 sm:w-11 md:h-12 md:w-12"
        />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_#00c8ff]" />
      </div>

      <div className="mt-2 text-center font-sans text-[10px] font-bold leading-[1.15] tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,.35)] sm:text-xs md:text-sm">
        <div>{service.title}</div>
        {service.subtitle && <div>{service.subtitle}</div>}
      </div>
    </div>
  );
}

export default function ZeroPointServicesOrbit() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#010817] text-white">
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: .2; transform: scale(.7); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes orbitRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes reverseRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes nodePulse {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 0 15px rgba(0,136,255,.35),
              inset 0 0 15px rgba(0,132,255,.18);
          }
          50% {
            transform: scale(1.035);
            box-shadow:
              0 0 32px rgba(0,174,255,.8),
              inset 0 0 24px rgba(0,132,255,.35);
          }
        }

        @keyframes corePulse {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(0,122,255,.65),
              0 0 75px rgba(0,122,255,.3),
              inset 0 0 35px rgba(0,155,255,.28);
          }
          50% {
            box-shadow:
              0 0 55px rgba(0,190,255,.95),
              0 0 120px rgba(0,122,255,.45),
              inset 0 0 50px rgba(0,155,255,.42);
          }
        }

        @keyframes travel {
          0% { stroke-dashoffset: 1200; opacity: .25; }
          50% { opacity: .9; }
          100% { stroke-dashoffset: 0; opacity: .25; }
        }

        @keyframes floatNode {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .orbit-ring {
          animation: orbitRotate 28s linear infinite;
        }

        .orbit-ring-reverse {
          animation: orbitRotate 38s linear infinite reverse;
        }

        .orbit-content {
          animation: reverseRotate 28s linear infinite;
        }

        .orbit-content-reverse {
          animation: reverseRotate 38s linear infinite reverse;
        }

        .node-pulse {
          animation: nodePulse 3.4s ease-in-out infinite, floatNode 5s ease-in-out infinite;
        }

        .core-pulse {
          animation: corePulse 3.2s ease-in-out infinite;
        }

        .travel-line {
          stroke-dasharray: 12 18;
          animation: travel 5s linear infinite;
        }

        .star {
          animation: starTwinkle 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,91,190,.24),transparent_34%),radial-gradient(circle_at_50%_50%,#03142b_0%,#010817_57%,#00040b_100%)]" />

      {/* Small animated stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 55 }).map((_, i) => {
          const left = (i * 47) % 100;
          const top = (i * 71) % 100;
          const size = i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1;
          return (
            <span
              key={i}
              className="star absolute rounded-full bg-cyan-200"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                animationDelay: `${(i % 9) * 0.35}s`,
              }}
            />
          );
        })}
      </div>

      {/* Fine futuristic grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,155,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,155,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          maskImage: "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* Main responsive canvas */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center justify-center px-2 py-10 sm:px-6 md:px-10">
        <div className="relative aspect-square w-[min(96vw,900px)]">

          {/* Outer atmospheric glow */}
          <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px]" />

          {/* Static orbital tracks */}
          <div className="absolute left-1/2 top-1/2 h-[87%] w-[87%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20" />
          <div className="absolute left-1/2 top-1/2 h-[73%] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20" />
          <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25" />

          {/* Rotating dashed rings */}
          <div className="orbit-ring absolute left-1/2 top-1/2 h-[87%] w-[87%] rounded-full border border-dashed border-cyan-500/30" />
          <div className="orbit-ring-reverse absolute left-1/2 top-1/2 h-[69%] w-[69%] rounded-full border border-dashed border-blue-400/30" />

          {/* SVG network lines */}
          <svg
            viewBox="0 0 1000 1000"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="blueGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g
              fill="none"
              stroke="#169cff"
              strokeWidth="2"
              opacity=".8"
              filter="url(#blueGlow)"
            >
              <path className="travel-line" d="M500 500 C500 360 500 205 500 90" />
              <path className="travel-line" d="M500 500 C620 390 745 260 850 190" />
              <path className="travel-line" d="M500 500 C710 500 835 500 920 500" />
              <path className="travel-line" d="M500 500 C650 610 760 750 850 830" />
              <path className="travel-line" d="M500 500 C500 650 500 780 500 910" />
              <path className="travel-line" d="M500 500 C350 610 235 750 150 830" />
              <path className="travel-line" d="M500 500 C290 500 165 500 80 500" />
              <path className="travel-line" d="M500 500 C370 390 250 260 150 190" />
            </g>

            {/* orbit curves */}
            <g fill="none" stroke="#0d7de0" opacity=".42">
              <ellipse cx="500" cy="500" rx="450" ry="145" transform="rotate(24 500 500)" />
              <ellipse cx="500" cy="500" rx="450" ry="145" transform="rotate(-27 500 500)" />
              <ellipse cx="500" cy="500" rx="330" ry="105" transform="rotate(8 500 500)" />
            </g>

            {/* Connection points */}
            {[
              [500, 90], [850, 190], [920, 500], [850, 830],
              [500, 910], [150, 830], [80, 500], [150, 190],
              [610, 365], [720, 650], [310, 650], [275, 350]
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="5" fill="#b8f4ff" />
                <circle cx={cx} cy={cy} r="13" fill="none" stroke="#159dff" opacity=".5" />
              </g>
            ))}
          </svg>

          {/* Service nodes */}
          {services.map((service) => (
            <ServiceNode key={service.title + service.subtitle} service={service} />
          ))}

          {/* Central ZeroPoint Labs core */}
          <div className="absolute left-1/2 top-1/2 z-40 flex h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 bg-blue-500/5 blur-[1px]" />
            <div className="absolute -inset-[7%] rounded-full border border-blue-500/20" />
            <div className="absolute -inset-[15%] rounded-full border border-blue-500/10" />

            <div className="core-pulse relative flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-cyan-300/60 bg-[radial-gradient(circle,rgba(4,62,125,.85),rgba(1,15,38,.96)_62%,rgba(0,5,15,1))]">
              <div className="absolute inset-[7%] rounded-full border border-cyan-300/25" />
              <div className="absolute inset-[15%] rounded-full border border-blue-300/15" />

              {/* ZeroPoint mark */}
              <div className="relative z-10 text-[clamp(3rem,8vw,6.5rem)] font-black leading-none text-cyan-300 drop-shadow-[0_0_22px_rgba(0,190,255,1)]">
                ø
              </div>

              <div className="relative z-10 mt-1 text-center font-sans text-[clamp(.7rem,1.8vw,1.35rem)] font-bold tracking-wide text-white">
                ZEROPOINT
              </div>
              <div className="relative z-10 text-[clamp(.45rem,1.2vw,.85rem)] font-medium tracking-[.28em] text-blue-200">
                LABS
              </div>

              <div className="absolute h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_18px_#00d9ff]" />
            </div>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.3)_75%,rgba(0,0,0,.75)_100%)]" />
    </section>
  );
}
