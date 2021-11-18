import React from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";
import particlesConfig from "../../config/particle-config";
import "./Hero.css"
const Hero = () => {
  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="h-screen w-screen bg-gray-900">
        <div className="grid place-content-center h-screen  w-screen">
          <div className="z-10 text-white flex flex-col items-center justify-center" data-aos="zoom-in" >
            <img
              src="/images/profile.png"
              className="w-40 rounded-full border-4 border-purple-500"
              alt=""
            />
            <h1 className="font-bold text-4xl text-purple-500">GAURAV PATIL</h1>
            <div className="flex items-center">
              <span className="text-xl mr-2">I Am A</span>{" "}
              <div className="text-purple-500 text-xl font-semibold">
                <Typewriter
                  options={{
                    strings: [                      
                      "Web Developer",
                      "Programmer",
                      "Learner"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
