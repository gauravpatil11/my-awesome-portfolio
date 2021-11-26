import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Wave } from "react-animated-text";
import "./About.css";

const About = () => {

  return (
    <section className="text-white bg-gray-800 body-font overflow-hidden px-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
            <Wave text="ABOUT ME" speed={10} delay={1.5} />
          </h1>
          <p>
            Hello , I'm a Web Developer pursuing BE from VPPCOE.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-12">
          <div
            className="p-8 md:w-1/2 flex flex-col items-center"
            data-aos="fade-right"
          >
            <img
              className="h-52 rounded-full border-4 border-purple-500 my-image"
              src="/images/profile.png"
              alt=""
            />
            <h2 className="text-2xl font-bold my-3">Who's this guy ?</h2>
            <p className="text-center">
              I'm a Web Developer from Mumbai,India. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div
            className="p-8 md:w-1/2 flex flex-col items-center sm:w-full w-full"
            data-aos="fade-left"
          >
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                HTML
              </span>
              <ProgressBar className="inline-block" progressPercentage={85} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                CSS
              </span>
              <ProgressBar className="inline-block" progressPercentage={80} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                JAVASCRIPT
              </span>
              <ProgressBar className="inline-block" progressPercentage={70} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                REACT
              </span>
              <ProgressBar className="inline-block" progressPercentage={70} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                NODE JS
              </span>
              <ProgressBar className="inline-block" progressPercentage={50} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                EXPRESS JS
              </span>
              <ProgressBar className="inline-block" progressPercentage={40} />
            </div>
            <div className="w-full flex items-center mb-7">
              <span className="bg-purple-600 w-40 font-semibold text-center">
                MONGO DB
              </span>
              <ProgressBar className="inline-block" progressPercentage={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
