import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Wave } from "react-animated-text";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ImEarth } from "react-icons/im";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      // delay:500
    });
  }, []);

  // --------------------------------------
  function getDifferenceInDays(birthDate, currDate) {
    const diffInMs = Math.abs(currDate - birthDate);
    return diffInMs / (1000 * 60 * 60 * 24);
    // return (Math.round((diffInMs / (1000 * 60 * 60 * 24)) * 100) / 100).toFixed(6);
  }
  const birthDate = new Date("11/03/2002");

  const [currDate, setCurrDate] = useState(new Date());
  const [diff, setDiff] = useState(getDifferenceInDays(birthDate, currDate));

  useEffect(() => {
    setInterval(() => {
      setCurrDate(new Date());
      setDiff(getDifferenceInDays(birthDate, currDate));
    }, 1000);
  }, [diff]);

  // --------------------------------------

  return (
    <section class="text-white bg-gray-800 body-font overflow-hidden px-6">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
            <Wave text="ABOUT ME" speed={10} delay={1.5} />
          </h1>
          <p>
            I'm a Web Developer, living on{" "}
            <ImEarth className="inline-block" /> since{" "}
            {getDifferenceInDays(birthDate, currDate)} days.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-12">
          <div
            class="p-8 md:w-1/2 flex flex-col items-center"
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
            class="p-8 md:w-1/2 flex flex-col items-center sm:w-full w-full"
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
