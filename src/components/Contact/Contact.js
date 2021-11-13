import React from "react";
import { Wave } from "react-animated-text";

const Contact = () => {
  return (
    <div>
      <section
        className="text-white bg-gray-900 body-font relative"
        id="contact"
      >
        <div className="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl tracking-wide text-2xl font-medium title-font mb-4">
            <Wave text="CONTACT ME" speed={10} delay={1.5} />
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
          </div>
        </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form method="POST">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-md text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2 md:1/2 lg:1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-md text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-md text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;