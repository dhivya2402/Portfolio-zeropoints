
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Founder from "./pages/founder";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/contact";
import ZeroPointSequence from "./pages/services";
import Pricing from "./pages/Pricing";
import LoadingIntro from "./pages/LoadingIntro";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About: now part of Home. Old /about links redirect to the About anchor on Home */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />

        {/* Founder */}
        <Route path="/founder" element={<Founder />} />

        {/* Services */}
        <Route path="/services" element={<ZeroPointSequence />} />

        {/* Pricing */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Unknown URLs fall back to Home instead of a blank page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
