import React from "react";
import { Wave } from "react-animated-text";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section className="text-white bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-purple-500 tracking-wide text-3xl md:text-4xl lg:text-4xl font-bold  mb-4">
              <Wave text="PROJECTS" speed={10} delay={1.5} />
            </h1>
            <p>
              In my spare time I like to tinker on side projects. These are some
              of the results.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="glow-shadow w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div className="projects mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid md:space-y-0 md:gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div
              className="project-card w-full py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>ALAN NEWS APP</span>
                <p>
                  A voice controlled News App using React / Alan AI / Firebase
                </p>
                <a
                  href="https://github.com/gauravpatil11/alan_ai_news_application_final"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/newsApp.jpg"
                alt="NewsApp"
                className="object-contain h-full"
              />
            </div>
            <div
              className="project-card w-full py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>FOOD COURT</span>
                <p>A restaurant website using HTML / CSS / JavaScript</p>
                <a
                  href="https://github.com/gauravpatil11/FoodWebsite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/FreshMeal.jpg"
                alt="Food Court"
                className="object-contain h-full"
              />
            </div>
            <div
              className="project-card w-full  py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>PERSONAL PORTFOLIO</span>
                <p>A portfolio website using HTML / CSS / JavaScript</p>
                <a
                  href="https://github.com/gauravpatil11/PersonalPortfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/portfolio.jpg"
                alt="Personal Portfolio"
                className="object-contain h-full"
              />
            </div>
            <div
              className="project-card w-full  py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>BLOGGER</span>
                <p>
                  A blog wesite made with HTML / CSS / JS and also used AOS
                  library.
                </p>
                <a
                  href="https://github.com/gauravpatil11/Blogger"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/blogger.jpg"
                alt="Blogger"
                className="object-contain h-full"
              />
            </div>
            <div
              className="project-card w-full py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>SNAKE MANIA</span>
                <p>A snake game using HTML / CSS / JS</p>
                <a
                  href="https://github.com/gauravpatil11/Snake-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/snakeGame.jpg"
                alt="Snake Mania"
                className="object-contain h-full"
              />
            </div>
            <div
              className="project-card w-full py-6 bg-purple-500"
              data-aos="zoom-in"
            >
              <div className="overlay">
                <span>SOCIAL BOOK</span>
                <p>A social media website using HTML / CSS / JS</p>
                <a
                  href="https://github.com/gauravpatil11/SocialBook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-purple-800 p-2 mt-4">
                    Know More
                  </button>
                </a>
              </div>
              <img
                src="/images/socialBook.jpg"
                alt="Social Book"
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
