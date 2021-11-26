import React from "react";
import "./App.css"
import { useEffect } from "react";
import "aos/dist/aos.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import ExpAndCertf from "./components/ExpAndCertf/ExpAndCertf"
import Footer from "./components/Footer/Footer";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Hero />
      <About/>
      <Features />
      <Services/>
      <Projects/>
      <ExpAndCertf/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
