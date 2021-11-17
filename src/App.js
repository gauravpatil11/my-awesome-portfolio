import React from "react";
import "./App.css"

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Features />
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
