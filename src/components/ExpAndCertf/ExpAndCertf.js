import { Wave } from "react-animated-text";
import "./ExpAndCertf.css";

const Projects = () => {
  return (
    <div>
      <section class="text-white bg-gray-800 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
              <Wave text="EXP & CERTIFS" speed={10} delay={1.5} />
            </h1>
            <p>My experience and course certifications.</p>
            <div class="flex mt-6 justify-center">
              <div class="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div class="flex relative bg-gray-100 border-4 ec-card border-transparent border-purple-700">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full object-contain h-full"
                  src="/images/intern1.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-2 border-gray-200 bg-purple-500 opacity-0 hover:opacity-100">
                  <h1 class="title-font text-xl font-bold text-gray-900 mb-3">
                    GenieGradz
                  </h1>
                  <p class="leading-relaxed">
                    Internship at GenieGradz as a web developer. Worked with React Js on frontend of the website.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div class="flex relative bg-gray-100 border-4 ec-card border-transparent border-purple-700">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full object-contain h-full"
                  src="/images/cert1.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-2 border-gray-200 bg-purple-500 opacity-0 hover:opacity-100">
                  <h1 class="title-font text-xl font-bold text-gray-900 mb-3">
                    Responsive Web Design
                  </h1>
                  <p class="leading-relaxed">
                    Learnt HTML ,CSS and a lot of things about responsive designs. Also made some projects.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div class="flex relative bg-gray-100 border-4 ec-card border-transparent border-purple-700">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full object-contain h-full"
                  src="/images/intern2.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-2 border-gray-200 bg-purple-500 opacity-0 hover:opacity-100">
                  <h1 class="title-font text-xl font-bold text-gray-900 mb-3">
                    The Sparks Foundation
                  </h1>
                  <p class="leading-relaxed">
                    Selected as an Intern at Sparks Foundation for the function Web Development & Designing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
