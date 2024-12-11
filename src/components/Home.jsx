import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white text-center md:text-left">
            Hi, I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Full Stack Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-center md:text-left">
            I am a full-stack developer with 3+ years of experience using NodeJS and 1 year using React.
            Check out if you want to know more!
          </p>

          <div className="justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
