import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate only once
    });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy-statement' element={<Privacy />} />
      <Route path='/terms-of-service' element={<Terms />} />
    </Routes>
  );
}

export default App;
