import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skillls";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="w-full  bg-[#232528] pt-[40px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
