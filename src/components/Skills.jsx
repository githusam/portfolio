import React from "react";

import htmlcss from "../assets/htmlcss.png";
import php from "../assets/php.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#0097b2] text-gray-300">
            Skills
          </p>
          <p className="py-4">
            // Below are some of the technologies that I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={htmlcss}
              alt="HTMLCSS icon"
            ></img>
            <p className="my-4">HTML/CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={php} alt="PHP icon"></img>
            <p className="my-6">PHP Laravel </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="Javascript icon"
            ></img>
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 my-5 mx-auto"
              src={react}
              alt="React icon"
            ></img>
            <p className="my-5">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={java} alt="Java icon"></img>
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sql} alt="SQL icon"></img>
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
