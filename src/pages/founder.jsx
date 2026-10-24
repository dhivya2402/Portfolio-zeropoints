import React, { useEffect, useRef } from "react";
import CircleHighlight from "../components/CircleHighlight.jsx";
import {
  ArrowRight,
  Code2,
  Palette,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";

import founderImg from "../assets/Founder.jpeg";

function Founder() {
  const universeRef = useRef(null);

  useEffect(() => {
    const page = universeRef.current;
    if (!page) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      page.style.setProperty("--mouse-x", `${x}`);
      page.style.setProperty("--mouse-y", `${y}`);
    };

    const handleScroll = () => {
      page.style.setProperty("--scroll-position", `${window.scrollY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".founder-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("founder-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="founder-page" ref={universeRef}>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #17110D;
          font-family: "Montserrat", sans-serif;
        }

        .founder-page {
          --mouse-x: 0;
          --mouse-y: 0;
          --scroll-position: 0px;

          position: relative;
          min-height: 100vh;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(168, 137, 96, 0.10),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 137, 96, 0.07),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #17110D 0%,
              #211A15 45%,
              #17110D 100%
            );

          color: #f8fafc;
          font-family: "Montserrat", sans-serif;
        }

        .founder-page a {
          text-decoration: none;
          color: inherit;
        }

        .founder-page::before {
          content: "";

          position: fixed;
          inset: -100px;

          pointer-events: none;
          z-index: 0;

          opacity: 0.12;

          background-image:
            linear-gradient(
              rgba(243, 237, 224, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(243, 237, 224, 0.055) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          transform:
            translate(
              calc(var(--mouse-x) * -12px),
              calc(
                var(--mouse-y) * -12px +
                var(--scroll-position) * -0.025
              )
            );

          animation: universeGrid 18s linear infinite;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );
        }

        @keyframes universeGrid {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 70px 70px;
          }
        }

        .founder-universe {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .founder-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(168, 137, 96, 0.8);
          box-shadow: 0 0 12px rgba(168, 137, 96, 0.65);
          opacity: 0.5;
        }

        .particle-1 {
          left: 8%;
          top: 20%;
          animation: particleFloat1 12s infinite ease-in-out;
        }

        .particle-2 {
          left: 18%;
          top: 70%;
          animation: particleFloat2 16s infinite ease-in-out;
        }

        .particle-3 {
          left: 29%;
          top: 35%;
          animation: particleFloat3 13s infinite ease-in-out;
        }

        .particle-4 {
          left: 41%;
          top: 18%;
          animation: particleFloat4 18s infinite ease-in-out;
        }

        .particle-5 {
          left: 53%;
          top: 76%;
          animation: particleFloat5 15s infinite ease-in-out;
        }

        .particle-6 {
          left: 64%;
          top: 31%;
          animation: particleFloat6 11s infinite ease-in-out;
        }

        .particle-7 {
          left: 73%;
          top: 65%;
          animation: particleFloat7 17s infinite ease-in-out;
        }

        .particle-8 {
          left: 83%;
          top: 22%;
          animation: particleFloat8 14s infinite ease-in-out;
        }

        .particle-9 {
          left: 92%;
          top: 54%;
          animation: particleFloat9 19s infinite ease-in-out;
        }

        .particle-10 {
          left: 12%;
          top: 48%;
          animation: particleFloat3 15s infinite ease-in-out;
        }

        .particle-11 {
          left: 36%;
          top: 82%;
          animation: particleFloat1 17s infinite ease-in-out;
        }

        .particle-12 {
          left: 58%;
          top: 12%;
          animation: particleFloat6 13s infinite ease-in-out;
        }

        .particle-13 {
          left: 79%;
          top: 84%;
          animation: particleFloat2 16s infinite ease-in-out;
        }

        .particle-14 {
          left: 95%;
          top: 15%;
          animation: particleFloat4 18s infinite ease-in-out;
        }

        .particle-15 {
          left: 5%;
          top: 88%;
          animation: particleFloat7 14s infinite ease-in-out;
        }

        @keyframes particleFloat1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }

          50% {
            transform: translate(55px, -80px) scale(1.8);
            opacity: 0.9;
          }
        }

        @keyframes particleFloat2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-70px, -50px) scale(1.5);
          }
        }

        @keyframes particleFloat3 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(80px, 45px);
          }
        }

        @keyframes particleFloat4 {
          0%, 100% {
            transform: translate(0, 0) scale(0.8);
          }

          50% {
            transform: translate(-60px, 75px) scale(1.7);
          }
        }

        @keyframes particleFloat5 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(50px, -100px);
          }
        }

        @keyframes particleFloat6 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-80px, 60px) scale(1.9);
          }
        }

        @keyframes particleFloat7 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(75px, 35px);
          }
        }

        @keyframes particleFloat8 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-50px, -75px);
          }
        }

        @keyframes particleFloat9 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-100px, 20px) scale(1.6);
          }
        }

        .founder-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);

          transform:
            translate(
              calc(var(--mouse-x) * 18px),
              calc(var(--mouse-y) * 18px)
            );
        }

        .founder-orb-one {
          width: 500px;
          height: 500px;
          top: -220px;
          right: -170px;

          background:
            radial-gradient(
              circle,
              rgba(168, 137, 96, 0.14),
              transparent 70%
            );

          animation: founderOrbOne 10s ease-in-out infinite;
        }

        .founder-orb-two {
          width: 380px;
          height: 380px;
          left: -190px;
          top: 45%;

          background:
            radial-gradient(
              circle,
              rgba(168, 137, 96, 0.10),
              transparent 70%
            );

          animation: founderOrbTwo 12s ease-in-out infinite;
        }

        .founder-orb-three {
          width: 320px;
          height: 320px;
          right: 10%;
          bottom: -170px;

          background:
            radial-gradient(
              circle,
              rgba(168, 137, 96, 0.09),
              transparent 70%
            );

          animation: founderOrbThree 9s ease-in-out infinite;
        }

        @keyframes founderOrbOne {
          0%, 100% {
            transform:
              translate(
                calc(var(--mouse-x) * 18px),
                calc(var(--mouse-y) * 18px)
              )
              scale(1);
          }

          50% {
            transform:
              translate(
                calc(var(--mouse-x) * 18px - 40px),
                calc(var(--mouse-y) * 18px + 35px)
              )
              scale(1.08);
          }
        }

        @keyframes founderOrbTwo {
          0%, 100% {
            transform:
              translate(
                calc(var(--mouse-x) * -15px),
                calc(var(--mouse-y) * -15px)
              );
          }

          50% {
            transform:
              translate(
                calc(var(--mouse-x) * -15px + 40px),
                calc(var(--mouse-y) * -15px - 35px)
              );
          }
        }

        @keyframes founderOrbThree {
          0%, 100% {
            transform:
              translate(
                calc(var(--mouse-x) * 12px),
                calc(var(--mouse-y) * 12px)
              );
          }

          50% {
            transform:
              translate(
                calc(var(--mouse-x) * 12px - 30px),
                calc(var(--mouse-y) * 12px - 35px)
              );
          }
        }

        .founder-ring {
          position: absolute;
          border: 1px solid rgba(168, 137, 96, 0.12);
          border-radius: 50%;
          transform-style: preserve-3d;
          animation: ringFloat 18s linear infinite;
        }

        .founder-ring-one {
          width: 360px;
          height: 360px;
          top: 8%;
          left: 5%;
          transform: rotateX(65deg) rotateY(20deg);
        }

        .founder-ring-two {
          width: 250px;
          height: 250px;
          right: 5%;
          top: 45%;
          animation-duration: 14s;
          transform: rotateX(60deg) rotateY(-25deg);
        }

        .founder-ring-three {
          width: 480px;
          height: 480px;
          left: 35%;
          bottom: -260px;
          opacity: 0.5;
          animation-duration: 24s;
        }

        @keyframes ringFloat {
          0% {
            transform: rotateX(65deg) rotateY(20deg) rotateZ(0deg);
          }

          50% {
            transform:
              rotateX(65deg)
              rotateY(20deg)
              rotateZ(180deg)
              scale(1.08);
          }

          100% {
            transform: rotateX(65deg) rotateY(20deg) rotateZ(360deg);
          }
        }

        .founder-shape {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(168, 137, 96, 0.18);
          opacity: 0.45;
          animation: shapeFloat 12s ease-in-out infinite;
        }

        .founder-shape-one {
          top: 28%;
          left: 17%;
          transform: rotate(45deg);
        }

        .founder-shape-two {
          top: 62%;
          right: 17%;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          animation-delay: -4s;
        }

        .founder-shape-three {
          top: 12%;
          right: 29%;
          width: 15px;
          height: 15px;
          transform: rotate(45deg);
          animation-delay: -7s;
        }

        .founder-shape-four {
          bottom: 20%;
          left: 28%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation-delay: -2s;
        }

        @keyframes shapeFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }

          50% {
            transform: translate(35px, -55px) rotate(180deg);
          }
        }

        .founder-light-beam {
          position: fixed;
          z-index: 1;
          top: -20%;
          left: -30%;
          width: 45%;
          height: 140%;
          pointer-events: none;
          opacity: 0;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.055),
              transparent
            );

          transform: rotate(18deg);
          animation: lightBeam 11s ease-in-out infinite;
        }

        @keyframes lightBeam {
          0%, 65% {
            left: -40%;
            opacity: 0;
          }

          72% {
            opacity: 1;
          }

          90%, 100% {
            left: 120%;
            opacity: 0;
          }
        }

        .founder-nav {
          position: relative;
          z-index: 20;
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .founder-nav-right {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .founder-nav-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 17px;
          border: 1px solid rgba(243, 237, 224, 0.14);
          border-radius: 999px;
          color: #A39380;
          font-size: 12px;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .founder-nav-button:hover {
          transform: translateY(-3px);
          color: #ffffff;
          border-color: rgba(168, 137, 96, 0.5);
          background: rgba(168, 137, 96, 0.08);
          box-shadow: 0 0 25px rgba(168, 137, 96, 0.08);
        }

        .founder-hero {
          position: relative;
          z-index: 2;
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 130px;
        }

        .founder-hero-content {
          width: min(1050px, 100%);
          margin: 0 auto;
          text-align: center;
          position: relative;
        }

        .founder-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #A88960;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;

          animation:
            founderReveal 1s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .founder-eyebrow-line {
          width: 30px;
          height: 1px;
          background: #A88960;
          position: relative;
          overflow: hidden;
        }

        .founder-eyebrow-line::after {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: white;
          animation: lineScan 3s ease-in-out infinite;
        }

        @keyframes lineScan {
          0%, 60% {
            left: -100%;
          }

          80%, 100% {
            left: 100%;
          }
        }

        .founder-title {
          margin: 28px 0;
          font-size: clamp(62px, 10vw, 125px);
          line-height: 0.86;
          letter-spacing: -0.075em;
          font-weight: 600;
          font-family: "Montserrat", sans-serif;

          animation:
            founderReveal 1.1s
            0.12s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;

          text-shadow: 0 0 60px rgba(168, 137, 96, 0.04);
        }

        .founder-title span {
          display: block;
          color: #A88960;
          position: relative;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.035em;
        }

        .founder-title span::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -15px;
          width: 180px;
          height: 1px;
          transform: translateX(-50%);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.65),
              transparent
            );

          animation: titleGlow 4s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% {
            opacity: 0.25;
            width: 120px;
          }

          50% {
            opacity: 1;
            width: 260px;
          }
        }

        .founder-subtitle {
          max-width: 620px;
          margin: 0 auto;
          color: #A39380;
          font-size: 18px;
          line-height: 1.8;
          font-family: "Lora", Georgia, serif;

          animation:
            founderReveal 1s
            0.25s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .founder-hero-buttons {
          margin-top: 42px;
          display: flex;
          justify-content: center;
          gap: 13px;

          animation:
            founderReveal 1s
            0.38s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .founder-primary-button {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 22px;
          border-radius: 999px;
          background: #A88960;
          color: #211A15;
          font-size: 13px;
          font-weight: 700;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .founder-primary-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          transform: skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255,0.65),
              transparent
            );

          animation: buttonShine 4s ease-in-out infinite;
        }

        @keyframes buttonShine {
          0%, 65% {
            left: -120%;
          }

          85%, 100% {
            left: 150%;
          }
        }

        .founder-primary-button svg,
        .founder-primary-button {
          isolation: isolate;
        }

        .founder-primary-button:hover {
          transform: translateY(-5px) scale(1.02);
          background: #A88960;

          box-shadow:
            0 15px 40px rgba(168, 137, 96, 0.25),
            0 0 30px rgba(168, 137, 96, 0.12);
        }

        .founder-section {
          position: relative;
          z-index: 2;
          padding: 120px 0;
        }

        .founder-container {
          width: min(1150px, calc(100% - 48px));
          margin: 0 auto;
        }

        .founder-section-label {
          margin-bottom: 20px;
          color: #A88960;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .founder-section-title {
          margin: 0 0 25px;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 600;
          font-family: "Montserrat", sans-serif;
        }

        .founder-section-title span {
          color: #A88960;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .founder-text {
          color: #A39380;
          font-size: 16px;
          line-height: 1.85;
          font-family: "Lora", Georgia, serif;
        }

        .founder-reveal {
          opacity: 0;
          transform: translateY(55px) scale(0.98);

          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .founder-reveal.founder-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .biography-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 55px;
          text-align: center;
        }

        .founder-photo {
          width: min(100%, 520px);
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;

          border: 1px solid rgba(168, 137, 96, 0.18);
          border-radius: 30px;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(168, 137, 96, 0.12),
              transparent 48%
            ),
            linear-gradient(
              145deg,
              rgba(52, 40, 32, 0.52),
              rgba(34, 26, 21, 0.78)
            );

          position: relative;
          overflow: hidden;

          transition:
            border-color 0.5s ease,
            transform 0.5s ease,
            box-shadow 0.5s ease;

          animation: photoFloat 7s ease-in-out infinite;

          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.28),
            0 0 55px rgba(168, 137, 96, 0.07);
        }

        .founder-photo:hover {
          transform: translateY(-10px) scale(1.01);
          border-color: rgba(168, 137, 96, 0.42);

          box-shadow:
            0 30px 90px rgba(120, 92, 62, 0.16),
            0 0 55px rgba(168, 137, 96, 0.12);
        }

        .founder-photo::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(168, 137, 96, 0.18),
              transparent 68%
            );

          animation: photoGlow 6s ease-in-out infinite;
        }

        .founder-photo::after {
          content: "";
          position: absolute;
          width: 160%;
          height: 1px;
          left: -30%;
          top: 50%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.35),
              transparent
            );

          animation: photoScan 5s linear infinite;
        }

        .founder-photo-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .founder-photo-image {
          position: relative;
          width: min(100%, 410px);
          height: 450px;
          margin: 0 auto 22px;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(168, 137, 96, 0.32);
          background: #211A15;

          box-shadow:
            0 20px 55px rgba(0, 0, 0, 0.38),
            0 0 35px rgba(168, 137, 96, 0.10);

          animation: founderImageFloat 7s ease-in-out infinite;
        }

        .founder-photo-image::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(31, 24, 19, 0.45)
            );
        }

        .founder-photo-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;

          transition:
            transform 0.7s ease,
            filter 0.7s ease;
        }

        .founder-photo:hover .founder-photo-image img {
          transform: scale(1.035);
          filter: brightness(1.05);
        }

        @keyframes founderImageFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes photoFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes photoGlow {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.12);
          }
        }

        @keyframes photoScan {
          0% {
            left: -130%;
          }

          100% {
            left: 130%;
          }
        }

        .founder-photo-content p {
          margin: 0;
          color: #F3EDE0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .founder-photo-content span {
          display: block;
          margin-top: 7px;
          color: #A88960;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .biography-content {
          width: min(720px, 100%);
          max-width: 720px;
          text-align: center;
          margin: 0 auto;
        }

        .biography-content .founder-text {
          margin-bottom: 22px;
        }

        .quote-box {
          margin-top: 35px;
          padding: 25px;
          border-left: 2px solid #A88960;
          background: rgba(168, 137, 96, 0.06);
          color: #F3EDE0;
          font-size: 17px;
          line-height: 1.7;
          font-family: "Lora", Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .quote-box::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.04),
              transparent
            );

          animation: quoteSweep 5s ease-in-out infinite;
        }

        @keyframes quoteSweep {
          0%, 65% {
            left: -100%;
          }

          90%, 100% {
            left: 130%;
          }
        }

        .journey-section {
          background:
            linear-gradient(
              180deg,
              rgba(32, 24, 19, 0),
              rgba(41, 31, 25, 0.45),
              rgba(32, 24, 19, 0)
            );
        }

        .journey-header {
          max-width: 700px;
          margin-bottom: 65px;
        }

        .journey-list {
          position: relative;
        }

        .journey-list::before {
          content: "";
          position: absolute;
          left: 18px;
          top: 0;
          bottom: 0;
          width: 1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(168, 137, 96, 0.4),
              transparent
            );
        }

        .journey-list::after {
          content: "";
          position: absolute;
          left: 15px;
          top: -10px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #A88960;

          box-shadow:
            0 0 10px #A88960,
            0 0 25px rgba(168, 137, 96, 0.7);

          animation: timelineEnergy 8s linear infinite;
        }

        @keyframes timelineEnergy {
          0% {
            top: 0;
            opacity: 0;
          }

          8%, 92% {
            opacity: 1;
          }

          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .journey-item {
          position: relative;
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 25px;
          margin-bottom: 48px;
          transition: transform 0.5s ease;
        }

        .journey-item:hover {
          transform: translateX(8px);
        }

        .journey-number {
          position: relative;
          z-index: 2;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(168, 137, 96, 0.35);
          background: #211A15;
          color: #A88960;
          font-size: 11px;
          font-weight: 700;

          transition:
            box-shadow 0.4s ease,
            transform 0.4s ease;
        }

        .journey-item:hover .journey-number {
          transform: scale(1.12);
          box-shadow: 0 0 25px rgba(168, 137, 96, 0.15);
        }

        .journey-year {
          margin-bottom: 8px;
          color: #A88960;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .journey-item h3 {
          margin: 0 0 10px;
          font-size: 25px;
          font-weight: 500;
          letter-spacing: -0.03em;
          font-family: "Montserrat", sans-serif;
        }

        .journey-item p {
          max-width: 650px;
          margin: 0;
          color: #A39380;
          font-size: 15px;
          line-height: 1.75;
          font-family: "Lora", Georgia, serif;
        }

        .philosophy-section {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(168, 137, 96, 0.06),
              transparent 55%
            );
        }

        .philosophy-section::before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(168, 137, 96, 0.05);
          border-radius: 50%;
          animation: philosophyOrbit 20s linear infinite;
        }

        @keyframes philosophyOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .philosophy-intro {
          max-width: 650px;
          margin-bottom: 55px;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          position: relative;
          z-index: 2;
        }

        .philosophy-card {
          position: relative;
          min-height: 240px;
          padding: 30px;
          overflow: hidden;
          border: 1px solid rgba(243, 237, 224, 0.12);
          background: rgba(39, 30, 24, 0.58);
          backdrop-filter: blur(12px);

          transition:
            transform 0.5s ease,
            border-color 0.5s ease,
            background 0.5s ease,
            box-shadow 0.5s ease;

          animation: philosophyFloat 6s ease-in-out infinite;
        }

        .philosophy-card:nth-child(2) {
          animation-delay: -2s;
        }

        .philosophy-card:nth-child(3) {
          animation-delay: -4s;
        }

        @keyframes philosophyFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .philosophy-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 70%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.8),
              transparent
            );

          animation: philosophySweep 5s ease-in-out infinite;
        }

        .philosophy-card:nth-child(2)::before {
          animation-delay: -1.7s;
        }

        .philosophy-card:nth-child(3)::before {
          animation-delay: -3.4s;
        }

        @keyframes philosophySweep {
          0%, 55% {
            left: -100%;
          }

          80%, 100% {
            left: 130%;
          }
        }

        .philosophy-card:hover {
          transform: translateY(-14px) scale(1.015);
          border-color: rgba(168, 137, 96, 0.38);
          background: rgba(45, 34, 28, 0.72);
          box-shadow: 0 25px 70px rgba(120, 92, 62, 0.10);
        }

        .philosophy-card span {
          display: block;
          margin-bottom: 40px;
          color: #A88960;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .philosophy-card h3 {
          margin: 0 0 12px;
          font-size: 25px;
          font-weight: 500;
          letter-spacing: -0.03em;
          font-family: "Montserrat", sans-serif;
        }

        .philosophy-card p {
          margin: 0;
          color: #A39380;
          font-size: 14px;
          line-height: 1.7;
          font-family: "Lora", Georgia, serif;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 55px;
        }

        .skill-card {
          min-height: 210px;
          padding: 28px;
          border: 1px solid rgba(243, 237, 224, 0.12);
          background: rgba(41, 31, 25, 0.55);
          position: relative;
          overflow: hidden;

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            background 0.4s ease,
            box-shadow 0.4s ease;

          animation: cardFloat 7s ease-in-out infinite;
        }

        .skill-card:nth-child(2) {
          animation-delay: -1.5s;
        }

        .skill-card:nth-child(3) {
          animation-delay: -3s;
        }

        .skill-card:nth-child(4) {
          animation-delay: -4.5s;
        }

        .skill-card::after,
        .achievement-card::after {
          content: "";
          position: absolute;
          width: 150%;
          height: 1px;
          left: -150%;
          top: 0;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(168, 137, 96, 0.55),
              transparent
            );

          animation: cardLight 6s ease-in-out infinite;
        }

        @keyframes cardLight {
          0%, 60% {
            left: -150%;
          }

          85%, 100% {
            left: 150%;
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .skill-card:hover {
          transform: translateY(-12px) scale(1.015);
          border-color: rgba(168, 137, 96, 0.4);
          background: rgba(48, 36, 29, 0.65);
          box-shadow: 0 20px 60px rgba(120, 92, 62, 0.09);
        }

        .skill-icon {
          width: 45px;
          height: 45px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A88960;
          border: 1px solid rgba(168, 137, 96, 0.2);
          background: rgba(168, 137, 96, 0.07);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .skill-card:hover .skill-icon {
          transform: rotate(-6deg) scale(1.08);
          box-shadow: 0 0 25px rgba(168, 137, 96, 0.12);
        }

        .skill-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 500;
          font-family: "Montserrat", sans-serif;
        }

        .skill-card p {
          margin: 0;
          color: #A39380;
          font-size: 13px;
          line-height: 1.6;
          font-family: "Lora", Georgia, serif;
        }

        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 55px;
        }

        .achievement-card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border: 1px solid rgba(243, 237, 224, 0.12);
          background: rgba(39, 30, 24, 0.55);

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;

          animation: cardFloat 8s ease-in-out infinite;
        }

        .achievement-card:nth-child(2) {
          animation-delay: -2.5s;
        }

        .achievement-card:nth-child(3) {
          animation-delay: -5s;
        }

        .achievement-card:hover {
          transform: translateY(-12px);
          border-color: rgba(168, 137, 96, 0.35);
          box-shadow: 0 20px 60px rgba(120, 92, 62, 0.09);
        }

        .achievement-icon {
          color: #A88960;
          margin-bottom: 25px;

          transition:
            transform 0.5s ease,
            filter 0.5s ease;
        }

        .achievement-card:hover .achievement-icon {
          transform: rotate(8deg) scale(1.12);

          filter:
            drop-shadow(
              0 0 10px rgba(168, 137, 96, 0.35)
            );
        }

        .achievement-card h3 {
          margin: 0 0 10px;
          font-size: 20px;
          font-weight: 500;
          font-family: "Montserrat", sans-serif;
        }

        .achievement-card p {
          margin: 0;
          color: #A39380;
          font-size: 14px;
          line-height: 1.7;
          font-family: "Lora", Georgia, serif;
        }

        @keyframes founderReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 900px) {
          .biography-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .biography-content {
            max-width: 700px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .achievement-grid {
            grid-template-columns: 1fr;
          }

          .philosophy-grid {
            grid-template-columns: 1fr;
          }

          .philosophy-card {
            min-height: 200px;
          }
        }

        @media (max-width: 600px) {
          .founder-nav {
            width: calc(100% - 32px);
          }

          .founder-nav-right {
            margin-top: 0;
          }

          .founder-nav-button {
            padding: 9px 13px;
            font-size: 11px;
          }

          .founder-hero {
            min-height: 82vh;
            padding: 100px 16px 80px;
          }

          .founder-title {
            font-size: clamp(55px, 17vw, 80px);
          }

          .founder-subtitle {
            font-size: 15px;
          }

          .founder-hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .founder-primary-button {
            width: max-content;
          }

          .founder-section {
            padding: 90px 0;
          }

          .founder-container {
            width: calc(100% - 32px);
          }

          .founder-photo {
            min-height: 350px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .journey-item {
            grid-template-columns: 50px 1fr;
            gap: 15px;
          }

          .journey-list::before {
            left: 18px;
          }

          .philosophy-grid {
            gap: 14px;
          }

          .philosophy-card {
            min-height: 210px;
            padding: 25px;
          }

          .founder-ring-one {
            width: 220px;
            height: 220px;
          }

          .founder-ring-two {
            width: 170px;
            height: 170px;
          }

          .founder-ring-three {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .biography-grid {
            gap: 38px;
          }

          .founder-photo {
            width: min(100%, 390px);
            min-height: 470px;
            padding: 25px 18px;
          }

          .founder-photo-image {
            width: 100%;
            max-width: 340px;
            height: 390px;
          }
        }

      `}</style>

      {/* DIGITAL UNIVERSE */}

      <div className="founder-universe">
        <div className="founder-orb founder-orb-one"></div>
        <div className="founder-orb founder-orb-two"></div>
        <div className="founder-orb founder-orb-three"></div>

        <div className="founder-ring founder-ring-one"></div>
        <div className="founder-ring founder-ring-two"></div>
        <div className="founder-ring founder-ring-three"></div>

        <div className="founder-shape founder-shape-one"></div>
        <div className="founder-shape founder-shape-two"></div>
        <div className="founder-shape founder-shape-three"></div>
        <div className="founder-shape founder-shape-four"></div>

        <div className="founder-particle particle-1"></div>
        <div className="founder-particle particle-2"></div>
        <div className="founder-particle particle-3"></div>
        <div className="founder-particle particle-4"></div>
        <div className="founder-particle particle-5"></div>
        <div className="founder-particle particle-6"></div>
        <div className="founder-particle particle-7"></div>
        <div className="founder-particle particle-8"></div>
        <div className="founder-particle particle-9"></div>
        <div className="founder-particle particle-10"></div>
        <div className="founder-particle particle-11"></div>
        <div className="founder-particle particle-12"></div>
        <div className="founder-particle particle-13"></div>
        <div className="founder-particle particle-14"></div>
        <div className="founder-particle particle-15"></div>

        <div className="founder-light-beam"></div>
      </div>

      {/* NAVIGATION — LOGO REMOVED */}

      <nav className="founder-nav">
        <div className="founder-nav-right">
          <Link to="/contact" className="founder-nav-button">
            Contact
            <ArrowRight size={15} />
          </Link>
        </div>
      </nav>

      {/* HERO */}

      <section className="founder-hero">
        <div className="founder-hero-content">
          <div className="founder-eyebrow">
            <span className="founder-eyebrow-line"></span>
            ZEROPOINT LABS
          </div>

          <h1 className="founder-title">
            The mind
            <span>behind ZeroPoint.</span>
          </h1>

          <p className="founder-subtitle">
            Meet the founder building ideas, technology, and people into
            something meaningful.
          </p>

          <div className="founder-hero-buttons">
            <a href="#biography" className="founder-primary-button">
              Discover the journey
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}

      <section id="biography" className="founder-section">
        <div className="founder-container">
          <div className="biography-grid">
            <div className="founder-photo founder-reveal">
              <div className="founder-photo-content">
                <div className="founder-photo-image">
                  <img
                    src={founderImg}
                    alt="S. Jeevesh - Founder of ZeroPoint Labs"
                  />
                </div>

                <p>S. JEEVESH</p>
                <span>FOUNDER &amp; CEO</span>
              </div>
            </div>

            <div className="biography-content founder-reveal">
              <div className="founder-section-label">BIOGRAPHY</div>

              <h2 className="founder-section-title">
                Building with
                <span> purpose.</span>
              </h2>

              <p className="founder-text">
                S. Jeevesh is the founder of ZeroPoint Labs, driven by a
                passion for technology, innovation, and creating digital
                experiences that solve meaningful problems.
              </p>

              <p className="founder-text">
                His approach combines engineering thinking with creativity —
                turning complex ideas into simple, purposeful, and scalable
                solutions.
              </p>

              <div className="quote-box">
                "The best ideas are not just built. They are given a purpose."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}

      <section className="founder-section journey-section">
        <div className="founder-container">
          <div className="journey-header founder-reveal">
            <div className="founder-section-label">THE JOURNEY</div>

            <h2 className="founder-section-title">
              From idea
              <span> to impact.</span>
            </h2>

            <p className="founder-text">
              Every chapter brought a new challenge, a new lesson, and another
              reason to keep building.
            </p>
          </div>

          <div className="journey-list">
            <div className="journey-item founder-reveal">
              <div className="journey-number">01</div>

              <div>
                <div className="journey-year">BEGINNING</div>
                <h3>Curiosity became direction.</h3>
                <p>
                  A fascination with technology evolved into a desire to
                  create solutions rather than simply use them.
                </p>
              </div>
            </div>

            <div className="journey-item founder-reveal">
              <div className="journey-number">02</div>

              <div>
                <div className="journey-year">EXPLORATION</div>
                <h3>Learning through building.</h3>
                <p>
                  Projects, experiments, failures, and constant learning
                  shaped the foundation for a stronger technical and creative
                  mindset.
                </p>
              </div>
            </div>

            <div className="journey-item founder-reveal">
              <div className="journey-number">03</div>

              <div>
                <div className="journey-year">ZEROPOINT</div>
                <h3>ZeroPoint Labs was born.</h3>
                <p>
                  A place where technology, design, innovation, and ambitious
                  ideas come together to create meaningful digital products.
                </p>
              </div>
            </div>

            <div className="journey-item founder-reveal">
              <div className="journey-number">04</div>

              <div>
                <div className="journey-year">FUTURE</div>
                <h3>Building what comes next.</h3>
                <p>
                  The journey continues with a focus on ambitious products,
                  intelligent systems, and technology that creates real-world
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZEROPOINT PHILOSOPHY */}

      <section className="founder-section philosophy-section">
        <div className="founder-container">
          <div className="philosophy-intro founder-reveal">
            <div className="founder-section-label">
              THE ZEROPOINT PHILOSOPHY
            </div>

            <h2 className="founder-section-title">
              Start from
              <span> <CircleHighlight>zero.</CircleHighlight></span>
            </h2>

            <p className="founder-text">
              ZeroPoint represents the moment where every idea begins. No
              assumptions. No limits. Just curiosity, experimentation, and the
              freedom to build something better.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card founder-reveal">
              <span>01</span>
              <h3>Question</h3>
              <p>
                Challenge the ordinary and ask better questions before
                building the solution.
              </p>
            </div>

            <div className="philosophy-card founder-reveal">
              <span>02</span>
              <h3>Build</h3>
              <p>
                Turn ideas into real products, experiences, and technology
                that people can use.
              </p>
            </div>

            <div className="philosophy-card founder-reveal">
              <span>03</span>
              <h3>Evolve</h3>
              <p>
                Learn from every experiment, adapt continuously, and keep
                moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-reveal">
            <div className="founder-section-label">EXPERTISE</div>

            <h2 className="founder-section-title">
              Ideas meet
              <span> execution.</span>
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card founder-reveal">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>
              <h3>Technology</h3>
              <p>
                Building modern digital experiences and scalable technical
                solutions.
              </p>
            </div>

            <div className="skill-card founder-reveal">
              <div className="skill-icon">
                <Palette size={22} />
              </div>
              <h3>Design</h3>
              <p>
                Creating clean, premium, intuitive experiences with purpose.
              </p>
            </div>

            <div className="skill-card founder-reveal">
              <div className="skill-icon">
                <TrendingUp size={22} />
              </div>
              <h3>Strategy</h3>
              <p>
                Turning ideas into clear products, systems, and actionable
                direction.
              </p>
            </div>

            <div className="skill-card founder-reveal">
              <div className="skill-icon">
                <Users size={22} />
              </div>
              <h3>Leadership</h3>
              <p>
                Bringing people together around ambitious ideas and meaningful
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-reveal">
            <div className="founder-section-label">MILESTONES</div>

            <h2 className="founder-section-title">
              Creating
              <span> momentum.</span>
            </h2>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card founder-reveal">
              <Award className="achievement-icon" size={30} />
              <h3>Innovation</h3>
              <p>
                Exploring new approaches to technology and digital product
                development.
              </p>
            </div>

            <div className="achievement-card founder-reveal">
              <Rocket className="achievement-icon" size={30} />
              <h3>ZeroPoint Labs</h3>
              <p>
                Building a technology-driven platform focused on meaningful
                digital innovation.
              </p>
            </div>

            <div className="achievement-card founder-reveal">
              <Target className="achievement-icon" size={30} />
              <h3>Purpose</h3>
              <p>
                Keeping technology focused on solving real problems and
                creating lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER REMOVED */}

    </div>
  );
}

export default Founder;