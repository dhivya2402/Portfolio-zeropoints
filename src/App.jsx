import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ZeroPointSequence from "./pages/ZeroPointSequence";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<ZeroPointSequence />}
        />

        {/* Services */}
        <Route
          path="/services"
          element={<ZeroPointSequence />}
        />

        {/* Pricing */}
        <Route
          path="/pricing"
          element={<Pricing />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;