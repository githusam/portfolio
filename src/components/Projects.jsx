import React from "react";
import weatherapp from "../assets/weatherapp.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#0097b2]">
            Projects
          </p>
          <p className="py-4">// Take a look at some of my recent projects!</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid items */}
          <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                React JS Weather
              </span>
              <div className="py-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                    {/* Grid items */}
                    <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                React JS Weather
              </span>
              <div className="py-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                    {/* Grid items */}
                    <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-center font-bold text-white tracking-wider">
                React JS Weather
              </span>
              <div className="py-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0097b2] text-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
