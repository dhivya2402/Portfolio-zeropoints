
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Founder from "./pages/founder";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Contact from "./pages/contact";
import ZeroPointSequence from "./pages/services";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
