
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Founder from "./pages/founder";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/contact";
import ZeroPointSequence from "./pages/services";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
       
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

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
