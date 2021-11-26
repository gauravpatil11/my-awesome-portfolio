import React from "react";
import { IoIosRocket } from "react-icons/io";
import { IoIosSpeedometer } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { Wave } from "react-animated-text";
import "./Features.css"

const Features = () => {
  return (
    <div>
      <section class="text-white bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
            <Wave text="FEATURES" speed={10} delay={1.5} />
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              All the websites I build will have these features.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 w-full sm:w-full md:w-1/2 lg:w-1/4  flex flex-col text-center items-center" data-aos="fade-right">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-4xl bg-purple-500 text-white mb-5 flex-shrink-0">
                <IoIosSpeedometer />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p class="leading-relaxed text-base">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </div>
            <div class="p-4 w-full sm:w-full md:w-1/2 lg:w-1/4    flex flex-col text-center items-center" data-aos="fade-right">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-4xl bg-purple-500 text-white mb-5 flex-shrink-0">
                <FaLightbulb />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Intuitive
                </h2>
                <p class="leading-relaxed text-base">
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
            </div>
            <div class="p-4 w-full sm:w-full md:w-1/2 lg:w-1/4  flex flex-col text-center items-center" data-aos="fade-left">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-4xl bg-purple-500 text-white mb-5 flex-shrink-0">
                <FaMobileAlt />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Responsive
                </h2>
                <p class="leading-relaxed text-base">
                  My layouts will work on any device, big or small.
                </p>
              </div>
            </div>
            <div class="p-4 w-full sm:w-full md:w-1/2 lg:w-1/4   flex flex-col text-center items-center" data-aos="fade-left">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-4xl bg-purple-500 text-white mb-5 flex-shrink-0">
                <IoIosRocket />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Dynamic
                </h2>
                <p class="leading-relaxed text-base">
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Features;
