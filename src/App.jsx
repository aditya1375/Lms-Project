import React from "react";
import Navbar from "./landingpage/Navbar";
import Hero from "./landingpage/Hero";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import PopularCourse from "./landingpage/PopularCourse";
import Teachers from "./landingpage/Teachers";
import Trust from "./landingpage/Trust";
import Footer from "./landingpage/Footer";
import About from "./landingpage/About";
import Course from "./landingpage/Course";
import BlogSection from "./BlogSection";
import Contact from "./landingpage/Contact";
import LandingLayout from "./landingpage/LandingLayout";
import Landing from "./landingpage/Landing";
import Logo from "./landingpage/Logo";

function App() {
  return (
    <div>
      
      <BrowserRouter>

        
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<LandingLayout />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="blog" element={<BlogSection />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
