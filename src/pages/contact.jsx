import React, { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Rocket,
  Lightbulb,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import zeropointsLogo from "../assets/logo.jpeg";

const Contact = () => {
  const form = useRef();
  const universeRef = useRef();

  /* =========================================================
     FOUNDER STYLE MOUSE + SCROLL MOVEMENT
     ========================================================= */

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!universeRef.current) return;

      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      universeRef.current.style.setProperty(
        "--mouse-x",
        `${x}`
      );

      universeRef.current.style.setProperty(
        "--mouse-y",
        `${y}`
      );
    };

    const handleScroll = () => {
      if (!universeRef.current) return;

      universeRef.current.style.setProperty(
        "--scroll-position",
        `${window.scrollY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     REVEAL ANIMATION
     ========================================================= */

  useEffect(() => {
    const elements =
      document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "contact-visible"
            );
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     CONTACT FORM
     ========================================================= */


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("EmailJS response:", result.status);

    toast.success(
      "Your message has been sent successfully!"
    );

    form.current.reset();
  } catch (error) {
    console.error("Contact Form Error:", error);

    toast.error(
      error?.text ||
        error?.message ||
        "Unable to send your message. Please try again."
    );
  }
};


  return (
    <div className="contact-page">

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #000718;
        }

        /* =====================================================
           CONTACT PAGE
           ===================================================== */

        .contact-page {
          min-height: 100vh;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(46,173,230,0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(46,173,230,0.06),
              transparent 30%
            ),
            #000718;

          color: #ffffff;

          font-family: 'Inter', sans-serif;

          overflow: hidden;

          position: relative;

          --mouse-x: 0;
          --mouse-y: 0;
          --scroll-position: 0px;
        }

        /* =====================================================
           FOUNDER STYLE UNIVERSE
           ===================================================== */

        .contact-universe {
          position: fixed;

          inset: 0;

          z-index: 1;

          pointer-events: none;

          overflow: hidden;

          --mouse-x: 0;
          --mouse-y: 0;
        }

        /* =====================================================
           MOVING GRID
           ===================================================== */

        .contact-grid {
          position: absolute;

          inset: -10%;

          background-image:
            linear-gradient(
              rgba(46,173,230,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(46,173,230,0.035) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          transform:
            translate(
              calc(var(--mouse-x) * -8px),
              calc(
                var(--mouse-y) * -8px -
                var(--scroll-position) * 0.025
              )
            );

          transition:
            transform 1s ease-out;

          animation:
            contactUniverseGrid 18s linear infinite;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 15%,
              black 85%,
              transparent
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 15%,
              black 85%,
              transparent
            );
        }

        @keyframes contactUniverseGrid {

          0% {
            background-position:
              0 0,
              0 0;
          }

          100% {
            background-position:
              70px 70px,
              70px 70px;
          }
        }

        /* =====================================================
           GLOWING ORBS
           ===================================================== */

        .contact-orb {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(80px);

          background: #2EADE6;
        }

        .contact-orb.one {
          width: 320px;
          height: 320px;

          left: -150px;
          top: 8%;

          opacity: 0.13;

          animation:
            contactOrbOne 12s ease-in-out infinite;
        }

        .contact-orb.two {
          width: 280px;
          height: 280px;

          right: -120px;
          top: 42%;

          opacity: 0.11;

          animation:
            contactOrbTwo 14s ease-in-out infinite;
        }

        .contact-orb.three {
          width: 230px;
          height: 230px;

          left: 38%;
          bottom: -100px;

          opacity: 0.08;

          animation:
            contactOrbThree 16s ease-in-out infinite;
        }

        @keyframes contactOrbOne {

          0%,
          100% {
            transform:
              translate(
                calc(var(--mouse-x) * 10px),
                calc(var(--mouse-y) * 10px)
              );
          }

          50% {
            transform:
              translate(
                calc(var(--mouse-x) * 20px + 35px),
                calc(var(--mouse-y) * 20px - 35px)
              );
          }
        }

        @keyframes contactOrbTwo {

          0%,
          100% {
            transform:
              translate(
                calc(var(--mouse-x) * -8px),
                calc(var(--mouse-y) * -8px)
              );
          }

          50% {
            transform:
              translate(
                calc(var(--mouse-x) * -15px - 30px),
                calc(var(--mouse-y) * -15px + 35px)
              );
          }
        }

        @keyframes contactOrbThree {

          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.05;
          }

          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        /* =====================================================
           ORBITAL RINGS
           ===================================================== */

        .contact-ring {
          position: absolute;

          border:
            1px solid
            rgba(46,173,230,0.08);

          border-radius: 50%;

          pointer-events: none;

          opacity: 0.55;
        }

        .contact-ring.one {
          width: 480px;
          height: 480px;

          left: -180px;
          top: 18%;

          transform:
            rotateX(68deg)
            rotateZ(15deg);

          animation:
            contactRingFloatOne 18s linear infinite;
        }

        .contact-ring.two {
          width: 620px;
          height: 620px;

          right: -260px;
          top: 20%;

          transform:
            rotateX(68deg)
            rotateZ(-20deg);

          animation:
            contactRingFloatTwo 22s linear infinite;
        }

        .contact-ring.three {
          width: 380px;
          height: 380px;

          left: 35%;
          bottom: -200px;

          transform:
            rotateX(70deg)
            rotateZ(25deg);

          animation:
            contactRingFloatThree 25s linear infinite;
        }

        @keyframes contactRingFloatOne {

          from {
            transform:
              rotateX(68deg)
              rotateZ(15deg)
              rotate(0deg)
              translate(
                calc(var(--mouse-x) * 8px),
                calc(var(--mouse-y) * 8px)
              );
          }

          to {
            transform:
              rotateX(68deg)
              rotateZ(15deg)
              rotate(360deg)
              translate(
                calc(var(--mouse-x) * 8px),
                calc(var(--mouse-y) * 8px)
              );
          }
        }

        @keyframes contactRingFloatTwo {

          from {
            transform:
              rotateX(68deg)
              rotateZ(-20deg)
              rotate(360deg);
          }

          to {
            transform:
              rotateX(68deg)
              rotateZ(-20deg)
              rotate(0deg);
          }
        }

        @keyframes contactRingFloatThree {

          from {
            transform:
              rotateX(70deg)
              rotateZ(25deg)
              rotate(0deg);
          }

          to {
            transform:
              rotateX(70deg)
              rotateZ(25deg)
              rotate(360deg);
          }
        }

        /* =====================================================
           LIGHT BEAM
           ===================================================== */

        .contact-light-beam {
          position: fixed;

          z-index: 2;

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
              rgba(46,173,230,0.055),
              transparent
            );

          transform: rotate(18deg);

          animation:
            contactLightBeam 11s ease-in-out infinite;
        }

        @keyframes contactLightBeam {

          0%,
          65% {
            left: -40%;
            opacity: 0;
          }

          72% {
            opacity: 1;
          }

          90% {
            left: 120%;
            opacity: 0;
          }

          100% {
            left: 120%;
            opacity: 0;
          }
        }

        /* =====================================================
           FLOATING SHAPES
           ===================================================== */

        .contact-shape {
          position: absolute;

          border:
            1px solid
            rgba(46,173,230,0.14);

          background:
            rgba(46,173,230,0.012);

          box-shadow:
            0 0 30px
            rgba(46,173,230,0.035);

          pointer-events: none;
        }

        .contact-shape-one {
          width: 170px;
          height: 100px;

          left: 5%;
          top: 24%;

          transform: rotate(-10deg);

          animation:
            contactShapeOne 15s ease-in-out infinite;
        }

        .contact-shape-two {
          width: 130px;
          height: 180px;

          right: 8%;
          top: 45%;

          transform: rotate(12deg);

          animation:
            contactShapeTwo 17s ease-in-out infinite;
        }

        .contact-shape-three {
          width: 210px;
          height: 120px;

          left: 38%;
          bottom: 8%;

          transform: rotate(-6deg);

          animation:
            contactShapeThree 19s ease-in-out infinite;
        }

        .contact-shape-four {
          width: 90px;
          height: 90px;

          right: 25%;
          top: 15%;

          border-radius: 50%;

          animation:
            contactShapeFour 13s ease-in-out infinite;
        }

        @keyframes contactShapeOne {

          0%,
          100% {
            transform:
              translate(-35px, 25px)
              rotate(-10deg)
              scale(0.85);

            opacity: 0;
          }

          18% {
            opacity: 0.35;
          }

          50% {
            transform:
              translate(75px, -35px)
              rotate(-2deg)
              scale(1);

            opacity: 0.2;
          }

          78% {
            opacity: 0.32;
          }

          100% {
            transform:
              translate(220px, -100px)
              rotate(8deg)
              scale(1.08);

            opacity: 0;
          }
        }

        @keyframes contactShapeTwo {

          0%,
          100% {
            transform:
              translate(45px, 70px)
              rotate(12deg)
              scale(0.8);

            opacity: 0;
          }

          20% {
            opacity: 0.28;
          }

          50% {
            transform:
              translate(-60px, -20px)
              rotate(3deg)
              scale(1);

            opacity: 0.18;
          }

          80% {
            opacity: 0.28;
          }

          100% {
            transform:
              translate(-200px, -100px)
              rotate(-8deg)
              scale(1.08);

            opacity: 0;
          }
        }

        @keyframes contactShapeThree {

          0%,
          100% {
            transform:
              translate(-70px, 40px)
              rotate(-6deg)
              scale(0.85);

            opacity: 0;
          }

          20% {
            opacity: 0.25;
          }

          50% {
            transform:
              translate(50px, -45px)
              rotate(4deg)
              scale(1);

            opacity: 0.16;
          }

          82% {
            opacity: 0.25;
          }

          100% {
            transform:
              translate(160px, -120px)
              rotate(10deg)
              scale(1.05);

            opacity: 0;
          }
        }

        @keyframes contactShapeFour {

          0%,
          100% {
            transform:
              translate(0, 0)
              scale(0.7);

            opacity: 0;
          }

          25% {
            opacity: 0.25;
          }

          50% {
            transform:
              translate(-40px, 45px)
              scale(1);

            opacity: 0.12;
          }

          75% {
            opacity: 0.25;
          }
        }

        /* =====================================================
           PARTICLES
           ===================================================== */

        .contact-particle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #2EADE6;

          box-shadow:
            0 0 8px #2EADE6,
            0 0 20px
            rgba(46,173,230,0.7);

          opacity: 0;

          pointer-events: none;
        }

        .particle-one {
          left: 8%;
          bottom: 10%;
          animation:
            particleFloatOne 8s ease-in-out infinite;
        }

        .particle-two {
          left: 17%;
          top: 40%;
          animation:
            particleFloatTwo 10s ease-in-out infinite 1s;
        }

        .particle-three {
          left: 27%;
          bottom: 18%;
          animation:
            particleFloatThree 9s ease-in-out infinite 2s;
        }

        .particle-four {
          left: 35%;
          top: 25%;
          animation:
            particleFloatOne 11s ease-in-out infinite 3s;
        }

        .particle-five {
          left: 45%;
          top: 12%;
          animation:
            particleFloatTwo 12s ease-in-out infinite 4s;
        }

        .particle-six {
          left: 55%;
          bottom: 22%;
          animation:
            particleFloatThree 9s ease-in-out infinite 5s;
        }

        .particle-seven {
          left: 64%;
          top: 18%;
          animation:
            particleFloatOne 10s ease-in-out infinite 2s;
        }

        .particle-eight {
          left: 73%;
          bottom: 28%;
          animation:
            particleFloatTwo 11s ease-in-out infinite 4s;
        }

        .particle-nine {
          left: 82%;
          top: 32%;
          animation:
            particleFloatThree 9s ease-in-out infinite 1s;
        }

        .particle-ten {
          right: 7%;
          bottom: 12%;
          animation:
            particleFloatOne 12s ease-in-out infinite 3s;
        }

        .particle-eleven {
          right: 18%;
          top: 15%;
          animation:
            particleFloatTwo 10s ease-in-out infinite 5s;
        }

        .particle-twelve {
          right: 28%;
          top: 55%;
          animation:
            particleFloatThree 13s ease-in-out infinite 2s;
        }

        .particle-thirteen {
          left: 22%;
          top: 15%;
          animation:
            particleFloatOne 9s ease-in-out infinite 4s;
        }

        .particle-fourteen {
          right: 40%;
          bottom: 10%;
          animation:
            particleFloatTwo 12s ease-in-out infinite 6s;
        }

        .particle-fifteen {
          right: 12%;
          top: 65%;
          animation:
            particleFloatThree 10s ease-in-out infinite 3s;
        }

        @keyframes particleFloatOne {

          0%,
          100% {
            transform:
              translate(0, 0)
              scale(0.5);

            opacity: 0;
          }

          25% {
            opacity: 0.8;
          }

          50% {
            transform:
              translate(25px, -60px)
              scale(1);

            opacity: 0.5;
          }

          75% {
            opacity: 0.8;
          }
        }

        @keyframes particleFloatTwo {

          0%,
          100% {
            transform:
              translate(0, 0)
              scale(0.4);

            opacity: 0;
          }

          30% {
            opacity: 0.7;
          }

          55% {
            transform:
              translate(-35px, -75px)
              scale(1.2);

            opacity: 0.4;
          }

          80% {
            opacity: 0.7;
          }
        }

        @keyframes particleFloatThree {

          0%,
          100% {
            transform:
              translate(0, 0)
              scale(0.5);

            opacity: 0;
          }

          30% {
            opacity: 0.7;
          }

          60% {
            transform:
              translate(30px, -55px)
              scale(1);

            opacity: 0.35;
          }

          85% {
            opacity: 0.7;
          }
        }

        /* =====================================================
           REVEAL ANIMATION
           ===================================================== */

        .contact-reveal {
          opacity: 0;

          transform:
            translateY(55px)
            scale(0.98);

          transition:
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-reveal.contact-visible {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =====================================================
           MAIN CONTENT
           ===================================================== */

        .contact-container {
          width: min(1180px, 92%);

          margin: auto;

          position: relative;

          z-index: 5;
        }

        /* =====================================================
           NAVBAR
           ===================================================== */

        .contact-navbar {
          height: 90px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);

          position: relative;

          z-index: 10;
        }

        .contact-logo {
          width: 52px;
          height: 52px;

          border-radius: 50%;

          object-fit: cover;

          border:
            1px solid
            rgba(46,173,230,0.45);

          box-shadow:
            0 0 25px
            rgba(46,173,230,0.12);

          transition: 0.3s ease;

          animation:
            contactLogoPulse 5s ease-in-out infinite;
        }

        @keyframes contactLogoPulse {

          0%,
          100% {
            box-shadow:
              0 0 20px
              rgba(46,173,230,0.08);
          }

          50% {
            box-shadow:
              0 0 35px
              rgba(46,173,230,0.22);
          }
        }

        .contact-logo:hover {
          transform: scale(1.06);

          box-shadow:
            0 0 30px
            rgba(46,173,230,0.3);
        }

        .contact-back {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #b7c3ce;

          text-decoration: none;

          font-size: 14px;

          transition: 0.3s ease;
        }

        .contact-back:hover {
          color: #2EADE6;

          transform: translateX(-4px);
        }

        /* =====================================================
           HERO
           ===================================================== */

        .contact-hero {
          padding: 100px 0 80px;

          max-width: 900px;
        }

        .contact-eyebrow {
          color: #2EADE6;

          font-size: 12px;

          letter-spacing: 4px;

          text-transform: uppercase;

          font-weight: 600;

          margin-bottom: 24px;
        }

        .contact-title {
          font-family:
            'Merriweather', serif;

          font-size:
            clamp(48px, 7vw, 88px);

          line-height: 0.98;

          font-weight: 400;

          margin: 0;

          letter-spacing: -3px;
        }

        .contact-title span {
          display: block;

          color: #2EADE6;

          font-family:
            'Cormorant Garamond', serif;

          font-style: italic;

          font-weight: 500;

          letter-spacing: -1px;
        }

        .contact-subtitle {
          margin-top: 32px;

          color: #8f9eaa;

          max-width: 650px;

          line-height: 1.9;

          font-size: 16px;

          font-weight: 300;
        }

        /* =====================================================
           MAIN CONTACT
           ===================================================== */

        .contact-main {
          display: grid;

          grid-template-columns:
            0.9fr 1.1fr;

          gap: 80px;

          padding-bottom: 100px;
        }

        .contact-info {
          padding-top: 10px;
        }

        .contact-info-title {
          font-family:
            'Merriweather', serif;

          font-size: 27px;

          font-weight: 400;

          margin-bottom: 30px;
        }

        .contact-detail {
          display: flex;

          align-items: flex-start;

          gap: 18px;

          margin-bottom: 28px;
        }

        .contact-icon {
          width: 44px;
          height: 44px;

          border-radius: 50%;

          border:
            1px solid
            rgba(46,173,230,0.25);

          display: flex;

          align-items: center;

          justify-content: center;

          color: #2EADE6;

          flex-shrink: 0;

          background:
            rgba(46,173,230,0.04);

          transition: 0.3s ease;
        }

        .contact-detail:hover
        .contact-icon {
          border-color: #2EADE6;

          box-shadow:
            0 0 20px
            rgba(46,173,230,0.12);

          transform: translateY(-3px);
        }

        .contact-detail-text small {
          display: block;

          color: #687985;

          text-transform: uppercase;

          letter-spacing: 2px;

          font-size: 10px;

          margin-bottom: 6px;
        }

        .contact-detail-text a,
        .contact-detail-text p {
          color: #d9e1e7;

          text-decoration: none;

          margin: 0;

          font-size: 15px;

          line-height: 1.6;

          transition: 0.3s ease;
        }

        .contact-detail-text a:hover {
          color: #2EADE6;
        }

        /* =====================================================
           SOCIALS
           ===================================================== */

        .contact-socials {
          display: flex;

          gap: 12px;

          margin-top: 35px;
        }

        .contact-social {
          width: 42px;
          height: 42px;

          border:
            1px solid
            rgba(255,255,255,0.1);

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #9ba8b2;

          transition: 0.3s ease;

          text-decoration: none;
        }

        .contact-social:hover {
          color: #2EADE6;

          border-color: #2EADE6;

          transform: translateY(-4px);

          box-shadow:
            0 0 20px
            rgba(46,173,230,0.12);
        }

        /* =====================================================
           FORM
           ===================================================== */

        .contact-form-wrapper {
          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.08);

          padding: 45px;

          position: relative;

          overflow: hidden;

          backdrop-filter: blur(2px);
        }

        .contact-form-wrapper::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 80px;
          height: 1px;

          background: #2EADE6;

          box-shadow:
            0 0 15px
            rgba(46,173,230,0.7);
        }

        .contact-form-title {
          font-family:
            'Merriweather', serif;

          font-size: 28px;

          font-weight: 400;

          margin:
            0 0 30px;
        }

        .contact-field {
          margin-bottom: 22px;
        }

        .contact-field label {
          display: block;

          color: #7f8d98;

          font-size: 11px;

          letter-spacing: 2px;

          text-transform: uppercase;

          margin-bottom: 9px;
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;

          background:
            rgba(0,0,0,0.18);

          border:
            1px solid
            rgba(255,255,255,0.1);

          color: #ffffff;

          padding: 15px 16px;

          font-family:
            'Inter', sans-serif;

          font-size: 14px;

          outline: none;

          transition: 0.3s ease;
        }

        .contact-field input {
          height: 52px;
        }

        .contact-field textarea {
          min-height: 145px;

          resize: vertical;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color:
            rgba(46,173,230,0.7);

          box-shadow:
            0 0 0 3px
            rgba(46,173,230,0.06);
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #4e5c67;
        }

        .contact-submit {
          width: 100%;

          height: 54px;

          border: none;

          background: #2EADE6;

          color: #000718;

          font-family:
            'Inter', sans-serif;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 1px;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          transition: 0.3s ease;

          position: relative;

          overflow: hidden;
        }

        .contact-submit::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80%;

          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.45),
              transparent
            );

          transform: skewX(-20deg);

          animation:
            contactButtonShine 5s ease-in-out infinite;
        }

        @keyframes contactButtonShine {

          0%,
          65% {
            left: -120%;
          }

          80% {
            left: 130%;
          }

          100% {
            left: 130%;
          }
        }

        .contact-submit:hover {
          background: #ffffff;

          transform: translateY(-2px);

          box-shadow:
            0 12px 35px
            rgba(46,173,230,0.15);
        }

        .contact-submit svg,
        .contact-submit {
          position: relative;
        }

        /* =====================================================
           MAP
           ===================================================== */

        .contact-map-section {
          padding: 20px 0 100px;
        }

        .contact-section-heading {
          margin-bottom: 30px;
        }

        .contact-section-heading small {
          color: #2EADE6;

          text-transform: uppercase;

          letter-spacing: 3px;

          font-size: 10px;
        }

        .contact-section-heading h2 {
          font-family:
            'Merriweather', serif;

          font-weight: 400;

          font-size: 34px;

          margin: 10px 0 0;
        }

        .contact-map {
          width: 100%;

          height: 380px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          filter:
            grayscale(100%)
            contrast(90%);

          opacity: 0.75;

          transition: 0.4s ease;
        }

        .contact-map:hover {
          opacity: 0.9;

          border-color:
            rgba(46,173,230,0.25);
        }

        /* =====================================================
           NEXT STEPS
           ===================================================== */

        .contact-next {
          padding: 0 0 100px;
        }

        .contact-steps {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 25px;
        }

        .contact-step {
          border:
            1px solid
            rgba(255,255,255,0.08);

          padding: 30px;

          background:
            rgba(255,255,255,0.018);

          transition: 0.3s ease;

          position: relative;

          overflow: hidden;
        }

        .contact-step::before {
          content: "";

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 1px;

          background: #2EADE6;

          transition: 0.5s ease;
        }

        .contact-step:hover::before {
          left: 0;
        }

        .contact-step:hover {
          border-color:
            rgba(46,173,230,0.35);

          transform: translateY(-5px);

          box-shadow:
            0 15px 40px
            rgba(46,173,230,0.04);
        }

        .contact-step-icon {
          color: #2EADE6;

          margin-bottom: 25px;
        }

        .contact-step-number {
          color: #42505a;

          font-size: 11px;

          letter-spacing: 2px;

          margin-bottom: 12px;
        }

        .contact-step h3 {
          font-family:
            'Merriweather', serif;

          font-size: 20px;

          font-weight: 400;

          margin:
            0 0 12px;
        }

        .contact-step p {
          color: #778590;

          font-size: 13px;

          line-height: 1.8;

          margin: 0;
        }

        /* =====================================================
           CORE
           ===================================================== */

        .contact-core {
          padding:
            30px 0 110px;

          text-align: center;
        }

        .contact-core-inner {
          position: relative;

          width: 330px;
          height: 330px;

          margin: auto;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .contact-core-circle {
          position: absolute;

          border:
            1px solid
            rgba(46,173,230,0.18);

          border-radius: 50%;
        }

        .contact-core-circle.one {
          width: 180px;
          height: 180px;

          animation:
            rotateCircle 18s linear infinite;
        }

        .contact-core-circle.two {
          width: 260px;
          height: 260px;

          border-style: dashed;

          animation:
            rotateCircle 25s linear infinite reverse;
        }

        .contact-core-circle.three {
          width: 320px;
          height: 320px;

          animation:
            rotateCircle 35s linear infinite;
        }

        @keyframes rotateCircle {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .contact-core-content {
          position: relative;

          z-index: 2;
        }

        .contact-core-content small {
          color: #2EADE6;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 3px;
        }

        .contact-core-content h2 {
          font-family:
            'Cormorant Garamond', serif;

          font-size: 48px;

          font-style: italic;

          font-weight: 500;

          margin: 8px 0;
        }

        .contact-core-content p {
          color: #667580;

          font-size: 11px;

          letter-spacing: 1px;
        }

        /* =====================================================
           FOOTER
           ===================================================== */

        .contact-footer {
          border-top:
            1px solid
            rgba(255,255,255,0.08);

          padding: 30px 0;
        }

        .contact-footer-bottom {
          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 0;

          color: #52616c;

          font-size: 11px;

          letter-spacing: 1px;
        }

        .contact-footer-bottom div {
          margin: 0;
        }

        /* =====================================================
           TOAST
           ===================================================== */

        .Toastify__toast {
          background: #000A1A !important;

          color: #ffffff !important;

          border:
            1px solid
            rgba(46,173,230,0.25);
        }

        .Toastify__progress-bar {
          background: #2EADE6 !important;
        }

        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 850px) {

          .contact-main {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .contact-steps {
            grid-template-columns: 1fr;
          }

          .contact-form-wrapper {
            padding: 30px;
          }

          .contact-shape {
            transform: scale(0.7);
          }

          .contact-ring {
            transform: scale(0.7);
          }
        }

        @media (max-width: 600px) {

          .contact-navbar {
            height: 75px;
          }

          .contact-logo {
            width: 45px;
            height: 45px;
          }

          .contact-hero {
            padding:
              70px 0 60px;
          }

          .contact-title {
            font-size: 48px;
          }

          .contact-subtitle {
            font-size: 14px;
          }

          .contact-form-wrapper {
            padding: 24px;
          }

          .contact-map {
            height: 280px;
          }

          .contact-core-inner {
            transform: scale(0.8);
          }

          .contact-footer-bottom {
            flex-direction: column;

            gap: 10px;

            text-align: center;
          }

          .contact-shape {
            transform: scale(0.55);
          }

          .contact-ring {
            transform: scale(0.5);
          }

          .contact-light-beam {
            width: 60%;
          }

          .contact-particle {
            width: 3px;
            height: 3px;
          }
        }

        /* =====================================================
           REDUCED MOTION
           ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .contact-grid,
          .contact-orb,
          .contact-ring,
          .contact-shape,
          .contact-light-beam,
          .contact-particle,
          .contact-core-circle,
          .contact-logo,
          .contact-submit::before {
            animation: none !important;
          }

          .contact-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* =====================================================
          FOUNDER STYLE ANIMATION LAYER
          ===================================================== */}

      <div
        ref={universeRef}
        className="contact-universe"
        aria-hidden="true"
      >

        <div className="contact-grid"></div>

        <div className="contact-orb one"></div>
        <div className="contact-orb two"></div>
        <div className="contact-orb three"></div>

        <div className="contact-ring one"></div>
        <div className="contact-ring two"></div>
        <div className="contact-ring three"></div>

        <div className="contact-light-beam"></div>

        <div className="contact-shape contact-shape-one"></div>
        <div className="contact-shape contact-shape-two"></div>
        <div className="contact-shape contact-shape-three"></div>
        <div className="contact-shape contact-shape-four"></div>

        <div className="contact-particle particle-one"></div>
        <div className="contact-particle particle-two"></div>
        <div className="contact-particle particle-three"></div>
        <div className="contact-particle particle-four"></div>
        <div className="contact-particle particle-five"></div>
        <div className="contact-particle particle-six"></div>
        <div className="contact-particle particle-seven"></div>
        <div className="contact-particle particle-eight"></div>
        <div className="contact-particle particle-nine"></div>
        <div className="contact-particle particle-ten"></div>
        <div className="contact-particle particle-eleven"></div>
        <div className="contact-particle particle-twelve"></div>
        <div className="contact-particle particle-thirteen"></div>
        <div className="contact-particle particle-fourteen"></div>
        <div className="contact-particle particle-fifteen"></div>

      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="contact-container">

        {/* NAVBAR */}

        <nav className="contact-navbar">

          <Link to="/">
            <img
              src={zeropointsLogo}
              alt="ZeroPoint Labs"
              className="contact-logo"
            />
          </Link>

          <Link
            to="/"
            className="contact-back"
          >

            <ArrowRight
              size={16}
              style={{
                transform: "rotate(180deg)",
              }}
            />

            Back to Home

          </Link>

        </nav>

        {/* HERO */}

        <section className="contact-hero">

          <div className="contact-eyebrow">
            Contact ZeroPoint Labs
          </div>

          <h1 className="contact-title">

            Let's build something.

            <span>
              Remarkable.
            </span>

          </h1>

          <p className="contact-subtitle">
            Have an idea, a challenge, or a project in mind?
            Tell us what you're working on. We'd love to understand
            your vision and explore how we can turn it into something
            meaningful.
          </p>

        </section>

        {/* MAIN CONTACT AREA */}

        <section className="contact-main">

          {/* CONTACT INFORMATION */}

          <div className="contact-info contact-reveal">

            <h2 className="contact-info-title">
              Let's talk.
            </h2>

            <div className="contact-detail">

              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div className="contact-detail-text">

                <small>
                  Email
                </small>

                <a href="mailto:jeeveshs18@gmail.com">
                  jeeveshs18@gmail.com
                </a>

              </div>

            </div>

            <div className="contact-detail">

              <div className="contact-icon">
                <Phone size={18} />
              </div>

              <div className="contact-detail-text">

                <small>
                  Phone
                </small>

                <a href="tel:+919025314278">
                  +91 90253 14278
                </a>

              </div>

            </div>

            <div className="contact-detail">

              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div className="contact-detail-text">

                <small>
                  Studio
                </small>

                <p>
                  Chennai, Tamil Nadu,
                  <br />
                  India
                </p>

              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://www.instagram.com/zeropointlabs_26"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <FaLinkedinIn size={17} />
              </a>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="contact-form-wrapper contact-reveal">

            <h2 className="contact-form-title">
              Start a conversation.
            </h2>

            <form
              ref={form}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-field">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help with?"
                  required
                />

              </div>

              <div className="contact-field">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell us a little about your project..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="contact-submit"
              >

                Send Message

                <Send size={16} />

              </button>

            </form>

          </div>

        </section>

        {/* MAP */}

        <section className="contact-map-section contact-reveal">

          <div className="contact-section-heading">

            <small>
              Find us
            </small>

            <h2>
              Based in Chennai.
            </h2>

          </div>

          <iframe
            className="contact-map"
            src="https://www.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed"
            title="ZeroPoint Labs Chennai Location"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </section>

        {/* WHAT HAPPENS NEXT */}

        <section className="contact-next contact-reveal">

          <div className="contact-section-heading">

            <small>
              What happens next?
            </small>

            <h2>
              Simple. Clear. Focused.
            </h2>

          </div>

          <div className="contact-steps">

            <div className="contact-step">

              <div className="contact-step-icon">
                <MessageCircle size={25} />
              </div>

              <div className="contact-step-number">
                01 — CONNECT
              </div>

              <h3>
                We listen.
              </h3>

              <p>
                We start by understanding your idea,
                requirements, goals, and the problem
                you're trying to solve.
              </p>

            </div>

            <div className="contact-step">

              <div className="contact-step-icon">
                <Lightbulb size={25} />
              </div>

              <div className="contact-step-number">
                02 — EXPLORE
              </div>

              <h3>
                We think.
              </h3>

              <p>
                Our team explores the right strategy,
                technology, and creative direction
                for your project.
              </p>

            </div>

            <div className="contact-step">

              <div className="contact-step-icon">
                <Rocket size={25} />
              </div>

              <div className="contact-step-number">
                03 — BUILD
              </div>

              <h3>
                We create.
              </h3>

              <p>
                Once the direction is clear, we turn
                the idea into a thoughtful and
                scalable digital experience.
              </p>

            </div>

          </div>

        </section>

        {/* CORE */}

        <section className="contact-core contact-reveal">

          <div className="contact-core-inner">

            <div className="contact-core-circle one"></div>

            <div className="contact-core-circle two"></div>

            <div className="contact-core-circle three"></div>

            <div className="contact-core-content">

              <small>
                ZeroPoint Labs
              </small>

              <h2>
                Think.
                <br />
                Build.
              </h2>

              <p>
                Beyond the obvious.
              </p>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="contact-footer">

          <div className="contact-footer-bottom">

            <div>
              © 2026 ZeroPoint Labs
            </div>

            <div>
              All rights reserved.
            </div>

          </div>

        </footer>

      </div>

      {/* TOAST */}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  );
};

export default Contact;