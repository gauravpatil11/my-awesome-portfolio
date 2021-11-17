import React from "react";
import { Wave } from "react-animated-text";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section class="text-white bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
              <Wave text="PROJECTS" speed={10} delay={1.5} />
            </h1>
            <p>
              In my spare time I like to tinker on side projects. These are some
              of the results.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div class="projects mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid md:space-y-0 md:gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div class="project-card w-full py-6 bg-purple-500">
              <div className="overlay">
                <span>ALAN NEWS APP</span>
                <a href="#">React / Alan AI / Firebase</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/newsApp.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
            <div class="project-card w-full py-6 bg-purple-500">
              <div className="overlay">
                <span>FOOD COURT</span>
                <a href="#">A restaurant website made using HTML,CSS and JS</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/FreshMeal.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
            <div class="project-card w-full  py-6 bg-purple-500">
              <div className="overlay">
                <span>PORTFOLIO</span>
                <a href="#">HTML / CSS / JS</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/portfolio.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
            <div class="project-card w-full  py-6 bg-purple-500">
              <div className="overlay">
                <span>BLOGGER</span>
                <a href="#">HTML / CSS / JS</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/blogger.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
            <div class="project-card w-full py-6 bg-purple-500">
              <div className="overlay">
                <span>Category</span>
                <a href="#">Web development</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/snakeGame.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
            <div class="project-card w-full py-6 bg-purple-500">
              <div className="overlay">
                <span>Category</span>
                <a href="#">Web development</a>
                <button className="bg-white text-purple-800 p-2 mt-4">
                  Know More
                </button>
              </div>
              <img
                src="/images/socialBook.jpg"
                alt="image"
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
