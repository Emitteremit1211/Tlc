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
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import SkeletonCard from "./components/blog/SkeletonCard";
import Categories from "./components/blog/Categories";
import BlogCard from "./components/blog/BlogCard";
import BlogGrid from "./components/blog/BlogGrid";
import FeaturedPost from "./components/blog/FeaturedPost";
import EmptyState from "./components/blog/EmptyState";
import BlogHero from "./components/blog/BlogHero";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/bloghero" element={<BlogHero />} />
        <Route path="/empty" element={<EmptyState/>} />
        <Route path="/featured" element={<FeaturedPost/>} />
        <Route path="/bloggrid" element={<BlogGrid />} />
        <Route path="/blogcard" element={<BlogCard/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/skeleton" element={<SkeletonCard/>} />
        {/* <Route path="/bloghero" element={</>} /> */}



         <Route path="*" element={<NotFound />} />
      </Routes>

      {loading && <Loader onFinish={() => setLoading(false)} />}
    </>
  );
}

export default App;