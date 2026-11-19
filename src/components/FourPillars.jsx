import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    word: "BUILD",
    title: "Websites & Web Applications",
  },
  {
    number: "02",
    word: "GROW",
    title: "Digital Marketing & Performance",
  },
  {
    number: "03",
    word: "CREATE",
    title: "Content Production",
  },
  {
    number: "04",
    word: "AUTOMATE",
    title: "Business Software & Automation",
  },
];

export default function FourPillars() {
  return (
    <>
      <style>{`

        /* =========================================
           FOUR PILLARS
        ========================================= */

        .zpl-four-pillars {
          position: relative;
          padding: 140px 0;
          background: #050e1a;
          overflow: hidden;
        }

        .zpl-four-pillars::before {
          content: "";

          position: absolute;

          width: 800px;
          height: 600px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.08),
            transparent 68%
          );

          pointer-events: none;
        }


        /* =========================================
           CONTAINER
        ========================================= */

        .zpl-four-container {
          position: relative;

          z-index: 2;

          width: min(1200px, 92%);

          margin: auto;
        }


        /* =========================================
           HEADER
        ========================================= */

        .zpl-four-header {
          max-width: 700px;

          margin-bottom: 70px;
        }

        .zpl-four-eyebrow {
          display: block;

          margin-bottom: 20px;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.2em;

          color: #38bdf8;
        }

        .zpl-four-header h2 {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: clamp(45px, 6vw, 75px);

          line-height: 0.95;

          letter-spacing: -0.06em;

          font-weight: 800;

          color: #e2f3ff;
        }

        .zpl-four-header h2 span {
          display: block;

          font-family: "Cormorant Garamond", serif;

          font-style: italic;

          font-weight: 600;

          color: #38bdf8;
        }

        .zpl-four-header p {
          max-width: 520px;

          margin-top: 28px;

          font-family: "Merriweather", serif;

          font-size: 14px;

          line-height: 1.9;

          color: #7890a3;
        }


        /* =========================================
           PILLAR AREA
        ========================================= */

        .zpl-four-track {
          position: relative;

          min-height: 420px;

          overflow: hidden;

          border-top: 1px solid rgba(56, 189, 248, 0.16);

          border-bottom: 1px solid rgba(56, 189, 248, 0.16);
        }


        /* =========================================
           PILLARS
        ========================================= */

        .zpl-four-pillar {
          position: absolute;

          top: 0;

          left: 0;

          width: 100%;

          height: 100%;

          padding: 45px;

          box-sizing: border-box;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          background:
            linear-gradient(
              135deg,
              rgba(8, 27, 43, 0.98),
              rgba(5, 14, 26, 0.99)
            );

          border-left: 1px solid rgba(56, 189, 248, 0.2);

          border-right: 1px solid rgba(56, 189, 248, 0.2);

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45),
            inset 0 0 50px rgba(56, 189, 248, 0.025);

          /*
            Automatic left → right animation
          */

          animation: zplPillarSlide 16s infinite;
        }


        /*
          Each pillar gets its own delay.
        */

        .zpl-four-pillar:nth-child(1) {
          animation-delay: 0s;
        }

        .zpl-four-pillar:nth-child(2) {
          animation-delay: 4s;
        }

        .zpl-four-pillar:nth-child(3) {
          animation-delay: 8s;
        }

        .zpl-four-pillar:nth-child(4) {
          animation-delay: 12s;
        }


        /* =========================================
           MAIN ANIMATION
        ========================================= */

        @keyframes zplPillarSlide {

          /*
            Start outside left
          */

          0% {
            transform: translateX(-110%);
            opacity: 0;
          }

          /*
            Move into screen
          */

          8% {
            transform: translateX(-20%);
            opacity: 0.5;
          }

          /*
            Fully visible
          */

          15% {
            transform: translateX(0);
            opacity: 1;
          }

          /*
            Stay visible
          */

          25% {
            transform: translateX(0);
            opacity: 1;
          }

          /*
            Move toward right
          */

          35% {
            transform: translateX(110%);
            opacity: 0;
          }

          /*
            Wait outside
          */

          100% {
            transform: translateX(110%);
            opacity: 0;
          }
        }


        /* =========================================
           NUMBER
        ========================================= */

        .zpl-four-number {
          position: relative;

          z-index: 3;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.15em;

          color: #3e5669;
        }


        /* =========================================
           CONTENT
        ========================================= */

        .zpl-four-content {
          position: relative;

          z-index: 3;

          margin-top: auto;
        }

        .zpl-four-word {
          font-family: "Cormorant Garamond", serif;

          font-style: italic;

          font-weight: 600;

          font-size: clamp(75px, 10vw, 135px);

          line-height: 0.75;

          letter-spacing: -0.04em;

          color: #38bdf8;

          text-shadow:
            0 0 30px rgba(56, 189, 248, 0.12);
        }

        .zpl-four-content h3 {
          margin: 25px 0 0;

          font-family: "Inter", sans-serif;

          font-size: clamp(22px, 3vw, 34px);

          font-weight: 700;

          letter-spacing: -0.035em;

          color: #e2f3ff;
        }


        /* =========================================
           ARROW
        ========================================= */

        .zpl-four-arrow {
          position: absolute;

          right: 45px;

          bottom: 40px;

          width: 55px;

          height: 55px;

          display: flex;

          align-items: center;

          justify-content: center;

          border: 1px solid rgba(56, 189, 248, 0.25);

          border-radius: 50%;

          font-family: "Inter", sans-serif;

          font-size: 21px;

          color: #38bdf8;

          z-index: 3;
        }


        /* =========================================
           GLOW LINE
        ========================================= */

        .zpl-four-glow {
          position: absolute;

          left: 0;

          bottom: 0;

          width: 100%;

          height: 2px;

          background: #38bdf8;

          box-shadow:
            0 0 15px rgba(56, 189, 248, 0.8),
            0 0 40px rgba(56, 189, 248, 0.4);
        }


        /* =========================================
           MOVING LIGHT
        ========================================= */

        .zpl-four-pillar::after {
          content: "";

          position: absolute;

          top: 0;

          left: -30%;

          width: 25%;

          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(56, 189, 248, 0.08),
            transparent
          );

          transform: skewX(-20deg);

          animation: zplLightMove 4s linear infinite;

          pointer-events: none;
        }

        @keyframes zplLightMove {

          0% {
            left: -30%;
          }

          100% {
            left: 130%;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .zpl-four-pillars {
            padding: 100px 0;
          }

          .zpl-four-header {
            margin-bottom: 50px;
          }

          .zpl-four-track {
            min-height: 340px;
          }

          .zpl-four-pillar {
            padding: 28px;
          }

          .zpl-four-word {
            font-size: 65px;
          }

          .zpl-four-content h3 {
            font-size: 20px;

            max-width: 75%;
          }

          .zpl-four-arrow {
            right: 25px;

            bottom: 25px;

            width: 42px;

            height: 42px;
          }

        }

      `}</style>


      <section className="zpl-four-pillars">

        <div className="zpl-four-container">

          {/* HEADER */}

          <motion.div
            className="zpl-four-header"

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <span className="zpl-four-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Four Pillars.
              <span>One Direction.</span>
            </h2>

            <p>
              From building digital experiences to driving
              growth and automation, every service we offer
              is connected to one goal — moving your business
              forward.
            </p>

          </motion.div>


          {/* ANIMATING PILLARS */}

          <div className="zpl-four-track">

            {pillars.map((pillar) => (

              <div
                key={pillar.number}
                className="zpl-four-pillar"
              >

                <div className="zpl-four-number">
                  {pillar.number}
                </div>


                <div className="zpl-four-content">

                  <div className="zpl-four-word">
                    {pillar.word}
                  </div>

                  <h3>
                    {pillar.title}
                  </h3>

                </div>


                <div className="zpl-four-arrow">
                  ↗
                </div>


                <div className="zpl-four-glow" />

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}