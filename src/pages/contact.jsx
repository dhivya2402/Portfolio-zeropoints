import React from "react";
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
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import zeropointsLogo from "../assets/zeropoints_logo.png";

function Contact() {
  return (
    <div className="contact-page">

      <style>{`

        /* =====================================================
           FONT IMPORT
        ===================================================== */

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Inter:wght@400;500;600;700&family=Merriweather:wght@300;400&display=swap');


        /* =====================================================
           GLOBAL
        ===================================================== */

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

        .contact-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          color: #F5F7FA;

          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(46, 173, 230, 0.10),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(46, 173, 230, 0.07),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 80%,
              rgba(25, 100, 150, 0.06),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #000718 0%,
              #000A1A 45%,
              #000718 100%
            );

          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Helvetica Neue",
            Arial,
            sans-serif;
        }


        /* =====================================================
           BACKGROUND GRID
        ===================================================== */

        .contact-page::before {
          content: "";

          position: fixed;
          inset: 0;

          pointer-events: none;

          opacity: 0.08;

          background-image:
            linear-gradient(
              rgba(120, 190, 225, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(120, 190, 225, 0.045) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );

          animation:
            contactGridMove
            18s linear
            infinite;
        }

        @keyframes contactGridMove {

          from {
            background-position:
              0 0,
              0 0;
          }

          to {
            background-position:
              70px 70px,
              70px 70px;
          }

        }


        .contact-page a {
          text-decoration: none;
          color: inherit;
        }


        /* =====================================================
           BACKGROUND ORBS
        ===================================================== */

        .contact-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
          z-index: 0;
        }

        .contact-orb-one {

          width: 480px;
          height: 480px;

          top: -220px;
          right: -160px;

          background:
            radial-gradient(
              circle,
              rgba(46, 173, 230, 0.10),
              transparent 70%
            );

          animation:
            contactOrbOne
            10s ease-in-out
            infinite;
        }

        .contact-orb-two {

          width: 380px;
          height: 380px;

          left: -200px;
          bottom: -100px;

          background:
            radial-gradient(
              circle,
              rgba(35, 105, 175, 0.08),
              transparent 70%
            );

          animation:
            contactOrbTwo
            12s ease-in-out
            infinite;
        }

        @keyframes contactOrbOne {

          0%, 100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(-35px, 35px)
              scale(1.08);
          }

        }

        @keyframes contactOrbTwo {

          0%, 100% {
            transform:
              translate(0, 0)
              scale(1);
          }

          50% {
            transform:
              translate(35px, -30px)
              scale(1.1);
          }

        }


        /* =====================================================
           FLOATING PARTICLES
        ===================================================== */

        .contact-particle {

          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #2EADE6;

          opacity: 0.35;

          pointer-events: none;

          box-shadow:
            0 0 12px
            rgba(46, 173, 230, 0.75);

          animation:
            contactParticleFloat
            var(--duration)
            ease-in-out
            infinite;

          animation-delay:
            var(--delay);

          z-index: 1;
        }

        @keyframes contactParticleFloat {

          0%, 100% {

            transform:
              translate3d(0, 0, 0)
              scale(0.7);

            opacity: 0.15;
          }

          50% {

            transform:
              translate3d(
                var(--move-x),
                var(--move-y),
                0
              )
              scale(1.5);

            opacity: 0.75;
          }

        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .contact-nav {

          position: relative;
          z-index: 20;

          width: min(
            1200px,
            calc(100% - 48px)
          );

          margin: 0 auto;

          padding: 22px 0;

          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        /* =====================================================
           ZEROPOINT LABS BRAND
        ===================================================== */

        .contact-brand {

          display: flex;

          align-items: center;

          gap: 12px;

          color: #F5F7FA;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }


        .contact-brand-mark {

          width: 46px;
          height: 46px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(0, 12, 30, 0.78);

          border:
            1px solid
            rgba(46, 173, 230, 0.18);

          backdrop-filter:
            blur(14px);

          overflow: hidden;

          animation:
            brandPulse
            4s ease-in-out
            infinite;
        }

        .contact-brand-mark img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          display: block;
        }

        @keyframes brandPulse {

          0%, 100% {

            box-shadow:
              0 0 0
              rgba(46, 173, 230, 0);
          }

          50% {

            box-shadow:
              0 0 25px
              rgba(46, 173, 230, 0.14);
          }

        }


        .contact-brand-name {

          display: inline-flex;

          align-items: center;

          gap: 4px;

          white-space: nowrap;
        }

        .contact-brand-name .brand-zero {

          color: #F5F7FA;
        }

        .contact-brand-name .brand-labs {

          color: #2EADE6;
        }


        .contact-back {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 10px 16px;

          border:
            1px solid
            rgba(180, 220, 245, 0.12);

          border-radius: 999px;

          color: #91A9BE;

          font-size: 12px;

          transition:
            transform 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .contact-back:hover {

          transform:
            translateY(-3px);

          color: #F5F7FA;

          border-color:
            rgba(46, 173, 230, 0.5);

          background:
            rgba(46, 173, 230, 0.07);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {

          position: relative;

          z-index: 2;

          padding:
            90px 24px
            70px;

          text-align: center;
        }

        .contact-eyebrow {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #2EADE6;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          animation:
            contactReveal 0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .contact-eyebrow-line {

          width: 30px;
          height: 1px;

          background: #2EADE6;

          animation:
            linePulse
            2.5s ease-in-out
            infinite;
        }

        @keyframes linePulse {

          0%, 100% {
            width: 20px;
            opacity: 0.5;
          }

          50% {
            width: 45px;
            opacity: 1;
          }

        }


        .contact-title {

          margin:
            28px 0 22px;

          font-family:
            "Inter",
            sans-serif;

          font-size:
            clamp(
              58px,
              9vw,
              110px
            );

          line-height: 0.9;

          letter-spacing: -0.075em;

          font-weight: 600;

          animation:
            contactReveal 1s
            0.12s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }


        .contact-title span {

          display: block;

          color: #2EADE6;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-style: italic;

          font-weight: 500;

          letter-spacing: -0.045em;

          animation:
            titleGlow
            4s ease-in-out
            infinite;
        }

        @keyframes titleGlow {

          0%, 100% {

            text-shadow:
              0 0 0
              rgba(46, 173, 230, 0);
          }

          50% {

            text-shadow:
              0 0 35px
              rgba(46, 173, 230, 0.22);
          }

        }


        .contact-subtitle {

          max-width: 620px;

          margin: 0 auto;

          color: #9AA9BE;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 15px;

          line-height: 1.9;

          animation:
            contactReveal 1s
            0.25s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .contact-container {

          position: relative;

          z-index: 3;

          width: min(
            1150px,
            calc(100% - 48px)
          );

          margin: 0 auto;

          padding:
            20px 0
            110px;
        }

        .contact-grid {

          display: grid;

          grid-template-columns:
            0.85fr 1.15fr;

          gap: 24px;

          align-items: stretch;
        }


        /* =====================================================
           CONTACT INFORMATION
        ===================================================== */

        .contact-info {

          padding: 36px;

          border:
            1px solid
            rgba(150, 200, 230, 0.11);

          background:
            rgba(1, 15, 34, 0.68);

          backdrop-filter:
            blur(15px);

          animation:
            contactReveal 1s
            0.35s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;

          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .contact-info:hover {

          transform:
            translateY(-6px);

          border-color:
            rgba(46, 173, 230, 0.25);
        }

        .contact-section-label {

          margin-bottom: 16px;

          color: #2EADE6;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.2em;

          text-transform: uppercase;
        }

        .contact-info h2 {

          margin: 0 0 18px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 36px;

          line-height: 1;

          letter-spacing: -0.05em;

          font-weight: 500;
        }

        .contact-info-description {

          margin: 0 0 35px;

          color: #91A9BE;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 13px;

          line-height: 1.9;
        }


        /* =====================================================
           CONTACT DETAILS
        ===================================================== */

        .contact-detail {

          display: flex;

          align-items: flex-start;

          gap: 15px;

          padding: 18px 0;

          border-top:
            1px solid
            rgba(150, 200, 230, 0.07);

          transition:
            transform 0.35s ease;
        }

        .contact-detail:hover {

          transform:
            translateX(7px);
        }

        .contact-detail-icon {

          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #2EADE6;

          border:
            1px solid
            rgba(46, 173, 230, 0.19);

          background:
            rgba(46, 173, 230, 0.06);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .contact-detail:hover
        .contact-detail-icon {

          transform:
            rotate(8deg)
            scale(1.08);

          box-shadow:
            0 0 20px
            rgba(46, 173, 230, 0.12);
        }

        .contact-detail-content span {

          display: block;

          margin-bottom: 5px;

          color: #61778B;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .contact-detail-content a,
        .contact-detail-content p {

          margin: 0;

          color: #D0DCE6;

          font-size: 14px;

          line-height: 1.5;
        }

        .contact-detail-content a:hover {

          color: #2EADE6;
        }


        /* =====================================================
           SOCIALS
        ===================================================== */

        .contact-social-title {

          margin-top: 30px;

          margin-bottom: 13px;

          color: #61778B;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .contact-socials {

          display: flex;

          gap: 10px;
        }

        .contact-social {

          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(150, 200, 230, 0.12);

          color: #7F96AA;

          font-size: 12px;

          font-weight: 700;

          transition:
            transform 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .contact-social:hover {

          transform:
            translateY(-7px)
            rotate(-4deg);

          color: #2EADE6;

          border-color:
            #2EADE6;

          background:
            rgba(46, 173, 230, 0.07);

          box-shadow:
            0 10px 30px
            rgba(46, 173, 230, 0.09);
        }


        /* =====================================================
           FORM
        ===================================================== */

        .contact-form-card {

          padding: 36px;

          border:
            1px solid
            rgba(150, 200, 230, 0.11);

          background:
            rgba(1, 13, 30, 0.75);

          backdrop-filter:
            blur(15px);

          animation:
            contactReveal 1s
            0.45s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;

          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .contact-form-card:hover {

          transform:
            translateY(-6px);

          border-color:
            rgba(46, 173, 230, 0.25);
        }

        .contact-form-title {

          margin: 0 0 8px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 27px;

          font-weight: 500;

          letter-spacing: -0.04em;
        }

        .contact-form-description {

          margin: 0 0 28px;

          color: #8197AA;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 12px;

          line-height: 1.8;
        }

        .contact-form {

          display: flex;

          flex-direction: column;

          gap: 18px;
        }

        .contact-field {

          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .contact-field label {

          color: #9AAFC0;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.13em;

          text-transform: uppercase;
        }

        .contact-field input,
        .contact-field textarea {

          width: 100%;

          border:
            1px solid
            rgba(150, 200, 230, 0.11);

          outline: none;

          background:
            rgba(0, 7, 24, 0.72);

          color: #EDF5FA;

          padding: 14px 15px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 13px;

          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .contact-field textarea {

          min-height: 130px;

          resize: vertical;
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {

          color: #52697D;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {

          border-color:
            rgba(46, 173, 230, 0.55);

          background:
            rgba(2, 15, 34, 0.85);

          box-shadow:
            0 0 0 3px
            rgba(46, 173, 230, 0.055),

            0 0 25px
            rgba(46, 173, 230, 0.05);

          transform:
            translateY(-2px);
        }


        /* =====================================================
           SUBMIT BUTTON
        ===================================================== */

        .contact-submit {

          margin-top: 5px;

          width: max-content;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 14px 21px;

          border: none;

          border-radius: 999px;

          background: #2EADE6;

          color: #00101C;

          font-family:
            "Inter",
            sans-serif;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .contact-submit:hover {

          transform:
            translateY(-5px)
            scale(1.02);

          background: #48BFFF;

          box-shadow:
            0 15px 40px
            rgba(46, 173, 230, 0.20);
        }


        /* =====================================================
           MAP
        ===================================================== */

        .contact-map-section {

          margin-top: 24px;

          animation:
            contactReveal 1s
            0.55s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .contact-map-header {

          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 14px;
        }

        .contact-map-title {

          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size: 22px;

          font-weight: 500;

          letter-spacing: -0.03em;
        }

        .contact-map-location {

          display: flex;

          align-items: center;

          gap: 7px;

          color: #8197AA;

          font-size: 12px;
        }

        .contact-map {

          width: 100%;

          height: 350px;

          border:
            1px solid
            rgba(150, 200, 230, 0.11);

          overflow: hidden;

          background: #000A1A;

          transition:
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .contact-map:hover {

          border-color:
            rgba(46, 173, 230, 0.25);

          box-shadow:
            0 0 40px
            rgba(46, 173, 230, 0.055);
        }

        .contact-map iframe {

          width: 100%;

          height: 100%;

          border: 0;

          filter:
            grayscale(0.35)
            contrast(1.05)
            brightness(0.75);
        }


        /* =====================================================
           WHAT HAPPENS NEXT
        ===================================================== */

        .contact-next-section {

          position: relative;

          margin-top: 130px;

          padding: 110px 0;

          overflow: hidden;

          text-align: center;
        }

        .contact-next-glow {

          position: absolute;

          width: 600px;
          height: 300px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          background:
            radial-gradient(
              ellipse,
              rgba(46, 173, 230, 0.08),
              transparent 70%
            );

          pointer-events: none;

          animation:
            nextGlow
            7s ease-in-out
            infinite;
        }

        @keyframes nextGlow {

          0%, 100% {

            transform:
              translate(-50%, -50%)
              scale(0.9);

            opacity: 0.5;
          }

          50% {

            transform:
              translate(-50%, -50%)
              scale(1.15);

            opacity: 1;
          }

        }

        .contact-next-heading {

          position: relative;

          z-index: 2;

          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size:
            clamp(
              42px,
              6vw,
              72px
            );

          line-height: 0.95;

          letter-spacing: -0.06em;

          font-weight: 500;
        }

        .contact-next-heading span {

          color: #2EADE6;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-style: italic;

          font-weight: 500;
        }

        .contact-next-description {

          position: relative;

          z-index: 2;

          max-width: 570px;

          margin: 22px auto 0;

          color: #8197AA;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 13px;

          line-height: 1.9;
        }


        /* =====================================================
           STEPS
        ===================================================== */

        .contact-steps {

          position: relative;

          z-index: 3;

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;

          margin-top: 65px;

          text-align: left;
        }

        .contact-step {

          position: relative;

          min-height: 250px;

          padding: 30px;

          border:
            1px solid
            rgba(150, 200, 230, 0.10);

          background:
            rgba(1, 15, 34, 0.63);

          backdrop-filter:
            blur(12px);

          overflow: hidden;

          transition:
            transform 0.5s ease,
            border-color 0.5s ease,
            background 0.5s ease;

          animation:
            stepFloat
            6s ease-in-out
            infinite;
        }

        .contact-step:nth-child(2) {
          animation-delay: -2s;
        }

        .contact-step:nth-child(3) {
          animation-delay: -4s;
        }

        @keyframes stepFloat {

          0%, 100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-10px);
          }

        }

        .contact-step:hover {

          transform:
            translateY(-16px)
            scale(1.015);

          border-color:
            rgba(46, 173, 230, 0.38);

          background:
            rgba(3, 23, 44, 0.76);

          animation-play-state:
            paused;

          box-shadow:
            0 20px 60px
            rgba(0, 0, 0, 0.18);
        }

        .contact-step-number {

          position: absolute;

          top: 20px;

          right: 22px;

          color:
            rgba(46, 173, 230, 0.16);

          font-size: 48px;

          font-weight: 700;

          letter-spacing: -0.08em;
        }

        .contact-step-icon {

          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #2EADE6;

          border:
            1px solid
            rgba(46, 173, 230, 0.19);

          background:
            rgba(46, 173, 230, 0.06);

          margin-bottom: 30px;

          animation:
            iconFloat
            4s ease-in-out
            infinite;
        }

        @keyframes iconFloat {

          0%, 100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-5px)
              rotate(4deg);
          }

        }

        .contact-step h3 {

          margin: 0 0 10px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 21px;

          font-weight: 500;

          letter-spacing: -0.03em;
        }

        .contact-step p {

          margin: 0;

          color: #8197AA;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 11px;

          line-height: 1.9;
        }

        .contact-step-line {

          position: absolute;

          top: 55px;

          right: -20px;

          width: 40px;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              rgba(46, 173, 230, 0.45),
              transparent
            );

          animation:
            energyLine
            2s ease-in-out
            infinite;
        }

        @keyframes energyLine {

          0%, 100% {
            opacity: 0.2;
            transform:
              translateX(0);
          }

          50% {
            opacity: 1;
            transform:
              translateX(8px);
          }

        }


        /* =====================================================
           ZEROPOINT CORE
        ===================================================== */

        .contact-core-section {

          position: relative;

          min-height: 650px;

          margin-top: 50px;

          display: flex;

          align-items: center;

          justify-content: center;

          overflow: hidden;

          text-align: center;
        }

        .contact-core-grid {

          position: absolute;

          inset: 0;

          opacity: 0.16;

          background-image:
            linear-gradient(
              rgba(46, 173, 230, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(46, 173, 230, 0.055) 1px,
              transparent 1px
            );

          background-size:
            55px 55px;

          mask-image:
            radial-gradient(
              circle at center,
              black,
              transparent 70%
            );

          animation:
            coreGridMove
            15s linear
            infinite;
        }

        @keyframes coreGridMove {

          from {
            transform:
              translate(0, 0);
          }

          to {
            transform:
              translate(55px, 55px);
          }

        }

        .contact-core {

          position: relative;

          width: 220px;
          height: 220px;

          display: flex;

          align-items: center;

          justify-content: center;

          z-index: 4;
        }

        .contact-core-center {

          position: relative;

          width: 105px;
          height: 105px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(46, 173, 230, 0.18),
              rgba(0, 10, 26, 0.96) 68%
            );

          border:
            1px solid
            rgba(46, 173, 230, 0.52);

          box-shadow:
            0 0 40px
            rgba(46, 173, 230, 0.13),

            inset 0 0 30px
            rgba(46, 173, 230, 0.07);

          z-index: 5;

          animation:
            corePulse
            4s ease-in-out
            infinite;
        }

        @keyframes corePulse {

          0%, 100% {

            transform:
              scale(1);

            box-shadow:
              0 0 30px
              rgba(46, 173, 230, 0.10),

              inset 0 0 25px
              rgba(46, 173, 230, 0.05);
          }

          50% {

            transform:
              scale(1.08);

            box-shadow:
              0 0 65px
              rgba(46, 173, 230, 0.23),

              inset 0 0 35px
              rgba(46, 173, 230, 0.11);
          }

        }

        .contact-core-center span {

          color: #2EADE6;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: 0.12em;
        }


        /* =====================================================
           ORBITS
        ===================================================== */

        .contact-orbit {

          position: absolute;

          border:
            1px solid
            rgba(46, 173, 230, 0.15);

          border-radius: 50%;

          pointer-events: none;
        }

        .contact-orbit-one {

          width: 220px;
          height: 220px;

          animation:
            orbitRotate
            18s linear
            infinite;
        }

        .contact-orbit-two {

          width: 330px;
          height: 330px;

          animation:
            orbitRotateReverse
            24s linear
            infinite;
        }

        .contact-orbit-three {

          width: 450px;
          height: 450px;

          animation:
            orbitRotate
            30s linear
            infinite;
        }

        @keyframes orbitRotate {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }

        }

        @keyframes orbitRotateReverse {

          from {
            transform:
              rotate(360deg);
          }

          to {
            transform:
              rotate(0deg);
          }

        }


        /* =====================================================
           ORBIT DOTS
        ===================================================== */

        .orbit-dot {

          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #2EADE6;

          box-shadow:
            0 0 15px
            rgba(46, 173, 230, 0.75);
        }

        .orbit-dot-one {

          top: 8px;

          left: 50%;

          transform:
            translateX(-50%);
        }

        .orbit-dot-two {

          right: 5px;

          top: 50%;

          transform:
            translateY(-50%);
        }

        .orbit-dot-three {

          bottom: 15px;

          left: 50%;

          transform:
            translateX(-50%);
        }


        /* =====================================================
           ORBIT WORDS
        ===================================================== */

        .orbit-word {

          position: absolute;

          color: #71889C;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.16em;

          text-transform: uppercase;

          white-space: nowrap;

          animation:
            wordGlow
            4s ease-in-out
            infinite;
        }

        .orbit-word-one {

          top: 40px;

          left: 50%;

          transform:
            translateX(-50%);
        }

        .orbit-word-two {

          right: -5px;

          top: 50%;

          transform:
            translateY(-50%);
        }

        .orbit-word-three {

          bottom: 40px;

          left: 50%;

          transform:
            translateX(-50%);
        }

        .orbit-word-four {

          left: -15px;

          top: 50%;

          transform:
            translateY(-50%);
        }

        @keyframes wordGlow {

          0%, 100% {
            opacity: 0.45;
          }

          50% {

            opacity: 1;

            color: #2EADE6;

            text-shadow:
              0 0 15px
              rgba(46, 173, 230, 0.25);
          }

        }


        /* =====================================================
           CORE TEXT
        ===================================================== */

        .contact-core-content {

          position: absolute;

          bottom: 30px;

          left: 50%;

          transform:
            translateX(-50%);

          width: 100%;

          z-index: 5;
        }

        .contact-core-label {

          color: #2EADE6;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          margin-bottom: 14px;
        }

        .contact-core-title {

          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size:
            clamp(
              34px,
              5vw,
              55px
            );

          line-height: 1;

          letter-spacing: -0.055em;

          font-weight: 500;
        }

        .contact-core-title span {

          color: #2EADE6;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-style: italic;

          font-weight: 500;
        }

        .contact-core-text {

          max-width: 520px;

          margin: 18px auto 0;

          color: #8197AA;

          font-family:
            "Merriweather",
            Georgia,
            serif;

          font-size: 11px;

          line-height: 1.9;
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        .contact-footer {

          position: relative;

          z-index: 3;

          width: min(
            1200px,
            calc(100% - 48px)
          );

          margin: 0 auto;

          padding: 28px 0;

          display: flex;

          align-items: center;

          justify-content: space-between;

          border-top:
            1px solid
            rgba(150, 200, 230, 0.09);

          color: #52697D;

          font-size: 11px;
        }


        /* =====================================================
           REVEAL
        ===================================================== */

        @keyframes contactReveal {

          from {

            opacity: 0;

            transform:
              translateY(30px);
          }

          to {

            opacity: 1;

            transform:
              translateY(0);
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-steps {
            grid-template-columns: 1fr;
          }

          .contact-step-line {
            display: none;
          }

          .contact-core-section {
            min-height: 600px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .contact-nav {
            width:
              calc(100% - 32px);
          }

          .contact-brand {
            font-size: 13px;
          }

          .contact-brand-mark {
            width: 40px;
            height: 40px;
          }

          .contact-back {
            padding:
              9px 12px;
          }

          .contact-hero {
            padding:
              70px 16px
              55px;
          }

          .contact-title {
            font-size:
              clamp(
                52px,
                16vw,
                75px
              );
          }

          .contact-subtitle {
            font-size: 14px;
          }

          .contact-container {
            width:
              calc(100% - 32px);

            padding-bottom:
              80px;
          }

          .contact-info,
          .contact-form-card {
            padding: 25px;
          }

          .contact-info h2 {
            font-size: 31px;
          }

          .contact-map-header {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap: 8px;
          }

          .contact-map {
            height: 280px;
          }

          .contact-next-section {
            margin-top: 70px;

            padding:
              80px 0;
          }

          .contact-next-heading {
            font-size: 43px;
          }

          .contact-steps {
            margin-top: 45px;
          }

          .contact-step {
            min-height: 220px;
          }

          .contact-core-section {
            min-height: 570px;
            margin-top: 10px;
          }

          .contact-core {
            transform:
              scale(0.72);
          }

          .contact-core-content {
            bottom: 20px;
          }

          .contact-core-title {
            font-size: 34px;
          }

          .contact-core-text {
            padding: 0 15px;
          }

          .contact-orbit-three {
            width: 390px;
            height: 390px;
          }

          .contact-footer {
            width:
              calc(100% - 32px);

            flex-direction:
              column;

            gap: 10px;

            text-align:
              center;
          }

        }

      `}</style>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="contact-orb contact-orb-one"></div>

      <div className="contact-orb contact-orb-two"></div>


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div
        className="contact-particle"
        style={{
          top: "12%",
          left: "10%",
          "--duration": "7s",
          "--delay": "0s",
          "--move-x": "35px",
          "--move-y": "45px",
        }}
      ></div>

      <div
        className="contact-particle"
        style={{
          top: "25%",
          left: "82%",
          "--duration": "9s",
          "--delay": "-2s",
          "--move-x": "-45px",
          "--move-y": "55px",
        }}
      ></div>

      <div
        className="contact-particle"
        style={{
          top: "48%",
          left: "15%",
          "--duration": "8s",
          "--delay": "-4s",
          "--move-x": "50px",
          "--move-y": "-40px",
        }}
      ></div>

      <div
        className="contact-particle"
        style={{
          top: "63%",
          left: "88%",
          "--duration": "10s",
          "--delay": "-3s",
          "--move-x": "-40px",
          "--move-y": "-55px",
        }}
      ></div>

      <div
        className="contact-particle"
        style={{
          top: "78%",
          left: "25%",
          "--duration": "8s",
          "--delay": "-5s",
          "--move-x": "40px",
          "--move-y": "35px",
        }}
      ></div>

      <div
        className="contact-particle"
        style={{
          top: "88%",
          left: "72%",
          "--duration": "9s",
          "--delay": "-1s",
          "--move-x": "-55px",
          "--move-y": "-35px",
        }}
      ></div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="contact-nav">

        <Link
          to="/"
          className="contact-brand"
        >

          {/* ACTUAL ZEROPOINT LABS LOGO */}

          <div className="contact-brand-mark">

            <img
              src={zeropointsLogo}
              alt="ZeroPoint Labs Logo"
            />

          </div>


          {/* COMPANY NAME ONLY — ALL CAPS */}

          <span className="contact-brand-name">

            <span className="brand-zero">
              ZEROPOINT
            </span>

            <span className="brand-labs">
              LABS
            </span>

          </span>

        </Link>


        <Link
          to="/"
          className="contact-back"
        >

          Back

          <ArrowRight size={15} />

        </Link>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-eyebrow">

          <span className="contact-eyebrow-line"></span>

          GET IN TOUCH

        </div>


        <h1 className="contact-title">

          Let's build

          <span>
            something.
          </span>

        </h1>


        <p className="contact-subtitle">

          Have an idea, a project, or simply want
          to start a conversation? We'd love to
          hear from you.

        </p>

      </section>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="contact-container">

        <div className="contact-grid">


          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <div className="contact-info">

            <div className="contact-section-label">
              CONTACT
            </div>


            <h2>
              Start a conversation.
            </h2>


            <p className="contact-info-description">

              Whether you're building something new,
              exploring an idea, or looking for a
              technology partner, reach out.

            </p>


            {/* EMAIL */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Mail size={19} />
              </div>

              <div className="contact-detail-content">

                <span>
                  EMAIL
                </span>

                <a href="mailto:jeeveshs18@gmail.com">
                  jeeveshs18@gmail.com
                </a>

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Phone size={19} />
              </div>

              <div className="contact-detail-content">

                <span>
                  PHONE
                </span>

                <a href="tel:+919025314278">
                  +91 90253 14278
                </a>

              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <MapPin size={19} />
              </div>

              <div className="contact-detail-content">

                <span>
                  LOCATION
                </span>

                <p>
                  Chennai, Tamil Nadu, India
                </p>

              </div>

            </div>


            {/* SOCIALS */}

            <div className="contact-social-title">
              FOLLOW ZEROPOINT
            </div>


            <div className="contact-socials">

              <a
                href="https://www.instagram.com/zeropointlabs_26"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                aria-label="Instagram"
              >

                <FaInstagram size={19} />

              </a>


              <a
                href="https://github.com/webxzeropoints-devs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                aria-label="GitHub"
              >

                <FaGithub size={19} />

              </a>

            </div>

          </div>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="contact-form-card">

            <h2 className="contact-form-title">
              Tell us about your idea.
            </h2>


            <p className="contact-form-description">

              Fill in the details below and we'll
              get back to you.

            </p>


            <form
              className="contact-form"
              action="mailto:jeeveshs18@gmail.com"
              method="POST"
              encType="text/plain"
            >

              <div className="contact-field">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
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
                  name="Email"
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
                  name="Subject"
                  placeholder="What can we help with?"
                  required
                />

              </div>


              <div className="contact-field">

                <label>
                  Message
                </label>

                <textarea
                  name="Message"
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

        </div>


        {/* =====================================================
            MAP
        ===================================================== */}

        <section className="contact-map-section">

          <div className="contact-map-header">

            <h2 className="contact-map-title">
              Find us
            </h2>

            <div className="contact-map-location">

              <MapPin size={14} />

              Chennai, Tamil Nadu, India

            </div>

          </div>


          <div className="contact-map">

            <iframe
              title="ZeroPoint Labs Location"
              src="https://www.google.com/maps?q=Chennai,Tamil Nadu,India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </section>


        {/* =====================================================
            WHAT HAPPENS NEXT
        ===================================================== */}

        <section className="contact-next-section">

          <div className="contact-next-glow"></div>


          <div className="contact-section-label">
            THE PROCESS
          </div>


          <h2 className="contact-next-heading">

            What happens

            <span>
              next?
            </span>

          </h2>


          <p className="contact-next-description">

            From the first message to the final product,
            we keep the process simple, focused,
            and purposeful.

          </p>


          <div className="contact-steps">


            {/* STEP 01 */}

            <div className="contact-step">

              <div className="contact-step-number">
                01
              </div>

              <div className="contact-step-icon">
                <MessageCircle size={22} />
              </div>

              <h3>
                You reach out.
              </h3>

              <p>
                Tell us about your idea, challenge,
                or project. No complicated process.
                Just start the conversation.
              </p>

              <div className="contact-step-line"></div>

            </div>


            {/* STEP 02 */}

            <div className="contact-step">

              <div className="contact-step-number">
                02
              </div>

              <div className="contact-step-icon">
                <Lightbulb size={22} />
              </div>

              <h3>
                We connect.
              </h3>

              <p>
                We understand your requirements,
                discuss possibilities, and find
                the right direction together.
              </p>

              <div className="contact-step-line"></div>

            </div>


            {/* STEP 03 */}

            <div className="contact-step">

              <div className="contact-step-number">
                03
              </div>

              <div className="contact-step-icon">
                <Rocket size={22} />
              </div>

              <h3>
                We build.
              </h3>

              <p>
                Ideas become experiences, products,
                and technology designed to create
                meaningful impact.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            ZEROPOINT CORE
        ===================================================== */}

        <section className="contact-core-section">

          <div className="contact-core-grid"></div>


          <div className="contact-core">


            <div className="contact-orbit contact-orbit-three">

              <div className="orbit-dot orbit-dot-one"></div>

              <div className="orbit-word orbit-word-one">
                IDEA
              </div>

            </div>


            <div className="contact-orbit contact-orbit-two">

              <div className="orbit-dot orbit-dot-two"></div>

              <div className="orbit-word orbit-word-two">
                DESIGN
              </div>

            </div>


            <div className="contact-orbit contact-orbit-one">

              <div className="orbit-dot orbit-dot-three"></div>

              <div className="orbit-word orbit-word-three">
                BUILD
              </div>

              <div className="orbit-word orbit-word-four">
                IMPACT
              </div>

            </div>


            <div className="contact-core-center">

              <span>
                ZP
              </span>

            </div>

          </div>


          <div className="contact-core-content">

            <div className="contact-core-label">
              ZEROPOINT LABS
            </div>


            <h2 className="contact-core-title">

              Your idea

              <span>
                starts here.
              </span>

            </h2>


            <p className="contact-core-text">

              Every meaningful product begins with
              a simple idea. Let's give yours a
              direction, a purpose, and a future.

            </p>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">

        <div>
          © 2026 ZeroPoint Labs
        </div>

        <div>
          Crafted with intention.
        </div>

      </footer>

    </div>
  );
}

export default Contact;