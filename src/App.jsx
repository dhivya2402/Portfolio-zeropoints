
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SEO from "./components/SEO";
import Home from "./pages/home";
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
  <Route
    path="/"
    element={
      <>
        <SEO
          title="Web Development & Digital Solutions"
          description="ZeroPoint Labs builds websites, business software, digital content, and automation solutions to help businesses grow."
        />
        <Home />
      </>
    }
  />

  <Route
    path="/about"
    element={<Navigate to="/#about" replace />}
  />

  <Route
    path="/founder"
    element={
      <>
        <SEO
          title="Meet the Founder"
          description="Meet the founder behind ZeroPoint Labs and discover the vision driving our digital solutions."
        />
        <Founder />
      </>
    }
  />

  <Route
    path="/services"
    element={
      <>
        <SEO
          title="Our Services"
          description="Explore ZeroPoint Labs services in website development, business software, content creation, and automation."
        />
        <ZeroPointSequence />
      </>
    }
  />

  <Route
    path="/pricing"
    element={
      <>
        <SEO
          title="Pricing & Packages"
          description="Explore ZeroPoint Labs pricing and digital solutions tailored to your business needs."
        />
        <Pricing />
      </>
    }
  />

  <Route
    path="/contact"
    element={
      <>
        <SEO
          title="Contact Us"
          description="Contact ZeroPoint Labs to discuss your website, business software, content, or automation project."
        />
        <Contact />
      </>
    }
  />

  <Route
    path="*"
    element={<Navigate to="/" replace />}
  />
</Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
