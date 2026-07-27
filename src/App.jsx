import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./Components/Loader";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Appointment from "./Pages/Appointment";
import Faq from "./Pages/Faq";
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/body" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/faq" element={<Faq />} />


         <Route path="*" element={<NotFound />} />
      </Routes>

      {loading && <Loader onFinish={() => setLoading(false)} />}
    </>
  );
}

export default App;