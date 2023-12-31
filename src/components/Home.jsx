import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-1xl text-[#0097b2]">
          Welcome! My name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Husam Kassab
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Forging a path through the realm of new technologies, mastering them,
          and applying them effectively.
        </p>
        <div>
          <button className="text-white group border-2  flex items-center hover: hover:bg-[#0097b2] hover:border-[#0097b2]">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full px-6 py-4"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 hover:" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
