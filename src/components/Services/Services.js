import React from "react";
import { Wave } from "react-animated-text";
import "./Services.css"

const Services = () => {
  return (
    <div>
      <section class="services text-gray-100 bg-gray-800 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
              <Wave text="SERVICES" speed={10} delay={1.5} />
            </h1>
            <p>Different services I provide to my clients.</p>
            <div class="flex mt-6 justify-center">
              <div class="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class=" p-4 md:w-1/3 sm:w-full" data-aos="flip-left">
              <div class="service-card h-full bg-transparent border-2 border-purple-500 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-2xl title-font font-medium mb-4">
                  Landing Pages
                </h2>
                <p class="leading-relaxed text-base">
                  I deliver landing pages that will definitely grab visitors
                  attention.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-full" data-aos="flip-up">
              <div class="service-card h-full bg-transparent border-2 border-purple-500 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-2xl title-font font-medium mb-4">
                  Portfolio Websites
                </h2>
                <p class="leading-relaxed text-base">
                  Build portfolio websites for various domains, which will help
                  you to showcase your skills.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-full" data-aos="flip-right">
              <div className="service-card h-full bg-transparent border-2 border-purple-500 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-center relative">
                <h2 className="text-2xl title-font font-medium mb-4">
                  Figma, Sketch, XD to HTML/ReactJS
                </h2>
                <p class="leading-relaxed text-base">
                  I can convert your designs to HTML5, CSS3 and also React Js
                  coded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
