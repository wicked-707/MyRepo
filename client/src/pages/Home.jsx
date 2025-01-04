import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Curved from "./Curved";
import Projects from "./Projects";
import About from "./About";
import SkillsSection from "./SkillsSection";
import Contact from "./Contact";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import TestimonialsSection from "./TestimonialsSection";
import SaySomething from "./SaySomething";
import ResumeSection from "./ResumeSection";
import Curved from "./Curved";
// import ProjectUploadForm from "../components/UploadingSite";

const Home = () => {
  return (
    <div className="flex flex-col w-screen">
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
      
      <div>
        <Curved />
      </div>

      <div>
        <About />
      </div>

      

      <div className="">
        <Projects />
      </div>

      <div className="">
        <SkillsSection />
      </div>

      <div className="">
        <TestimonialsSection />
      </div>
      <div className="">
        <ResumeSection />
      </div>
      {/* <div className="">
        <BackofficeDashboard />
      </div> */}
      <div className="">
        <Contact />
      </div>
      <div className="">
        <SaySomething />
      </div>

      <div className="">
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
