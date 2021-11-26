import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-100 bg-gray-800 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center justify-center">
          <div class=" title-font text-gray-400">
            Made By <span className="text-purple-500">GAURAV PATIL</span>
          </div>

          <div class="flex justify-center ml-3">
            <a href="https://www.linkedin.com/in/gaurav-patil-11b283210/" class="ml-3 text-gray-100 text-2xl" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://github.com/gauravpatil11" class="ml-3 text-gray-100 text-2xl" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <ScrollToTop
          smooth
          component={<FaChevronUp />}
          style={{
            color: "white",
            background: "#8b5cf6",
            padding: "12px",
            boxShadow: "0px 0px 5px rgba(0,0,0,.5)",
            // marginRight: "px",
          }}
        />
      </footer>
    </div>
  );
};

export default Footer;
