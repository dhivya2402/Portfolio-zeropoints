import React, { useEffect, useState } from "react";
import logo from "../assets/logooo.png";

const LoadingIntro = () => {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 4 + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);
        }, 500);
      }

      setProgress(value);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (finished) return null;

  return (
    <>
      <div className={`zpl-loader ${finished ? "loader-finished" : ""}`}>
        {/* Background glow */}
        <div className="zpl-background-glow"></div>

        {/* Center content */}
        <div className="zpl-loader-content">
          {/* Logo */}
          <div className="zpl-logo-container">
            <div className="zpl-logo-glow"></div>

            <img
              src={logo}
              alt="ZeroPoint Labs"
              className="zpl-loader-logo"
            />
          </div>

          {/* Progress bar */}
          <div className="zpl-progress-container">
            <div className="zpl-progress-track">
              <div
                className="zpl-progress"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="zpl-loading-text">
            LOADING ZEROPOINT LABS
          </div>
        </div>
      </div>

      <style>{`
        /* =========================================
           ZPL LOADER
        ========================================= */

        .zpl-loader {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          background: #05070a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          overflow: hidden;
          animation: loaderAppear 0.5s ease forwards;
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .zpl-background-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(0, 120, 255, 0.07) 0%,
            rgba(0, 100, 255, 0.025) 35%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .zpl-loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 2;
        }

        /* =========================================
           LOGO
        ========================================= */

        .zpl-logo-container {
          position: relative;
          width: 190px;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: logoAppear 1.1s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .zpl-loader-logo {
          position: relative;
          width: 170px;
          height: 170px;
          object-fit: contain;
          z-index: 2;
          filter:
            drop-shadow(0 0 5px rgba(0, 150, 255, 0.9))
            drop-shadow(0 0 15px rgba(0, 130, 255, 0.65))
            drop-shadow(0 0 35px rgba(0, 100, 255, 0.35));
          animation: logoPulse 2.2s ease-in-out infinite;
        }

        /* =========================================
           BLUE GLOW BEHIND LOGO
        ========================================= */

        .zpl-logo-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0, 130, 255, 0.22);
          filter: blur(55px);
          z-index: 0;
          animation: glowPulse 2s ease-in-out infinite;
        }

        /* =========================================
           PROGRESS BAR
        ========================================= */

        .zpl-progress-container {
          width: 200px;
          margin-top: 18px;
          opacity: 0;
          animation: progressAppear 0.6s ease 0.5s forwards;
        }

        .zpl-progress-track {
          width: 100%;
          height: 7px;
          border-radius: 10px;
          background: #1d1d1d;
          overflow: hidden;
          position: relative;
        }

        .zpl-progress {
          position: relative;
          height: 100%;
          border-radius: 10px;
          background: #168cff;
          box-shadow:
            0 0 8px rgba(22, 140, 255, 0.9),
            0 0 18px rgba(22, 140, 255, 0.5);
          transition: width 0.08s linear;
        }

        /* Small light at end of progress */

        .zpl-progress::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 50%;
          width: 5px;
          height: 5px;
          transform: translateY(-50%);
          border-radius: 50%;
          background: white;
          box-shadow:
            0 0 7px white,
            0 0 14px #168cff;
        }

        /* =========================================
           LOADING TEXT
        ========================================= */

        .zpl-loading-text {
          margin-top: 22px;
          color: rgba(255, 255, 255, 0.55);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 5px;
          text-align: center;
          opacity: 0;
          animation: textAppear 0.7s ease 0.8s forwards;
        }

        /* =========================================
           LOGO ENTER
        ========================================= */

        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(0.65) translateY(20px);
            filter: blur(8px);
          }

          60% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        /* =========================================
           LOGO PULSE
        ========================================= */

        @keyframes logoPulse {
          0%,
          100% {
            filter:
              drop-shadow(0 0 5px rgba(0, 150, 255, 0.8))
              drop-shadow(0 0 15px rgba(0, 130, 255, 0.5));
          }

          50% {
            filter:
              drop-shadow(0 0 10px rgba(0, 170, 255, 1))
              drop-shadow(0 0 30px rgba(0, 130, 255, 0.85))
              drop-shadow(0 0 50px rgba(0, 100, 255, 0.4));
          }
        }

        /* =========================================
           GLOW PULSE
        ========================================= */

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.15);
          }
        }

        /* =========================================
           PROGRESS APPEAR
        ========================================= */

        @keyframes progressAppear {
          from {
            opacity: 0;
            transform: scaleX(0.7);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        /* =========================================
           TEXT APPEAR
        ========================================= */

        @keyframes textAppear {
          from {
            opacity: 0;
            transform: translateY(8px);
            letter-spacing: 2px;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 5px;
          }
        }

        /* =========================================
           LOADER ENTER
        ========================================= */

        @keyframes loaderAppear {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .zpl-logo-container {
            width: 150px;
            height: 150px;
          }

          .zpl-loader-logo {
            width: 135px;
            height: 135px;
          }

          .zpl-logo-glow {
            width: 120px;
            height: 120px;
          }

          .zpl-progress-container {
            width: 170px;
          }

          .zpl-loading-text {
            font-size: 11px;
            letter-spacing: 3px;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingIntro;