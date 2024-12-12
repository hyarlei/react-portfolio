import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-lg sm:text-xl mt-10">
            I am a passionate Information Technology student at the Federal University of Ceará (UFC), aiming to master various programming languages.
          </p>

          <p className="text-lg sm:text-xl">
            Currently, I am enhancing my skills in Typescript, Nodejs, and React to become a FullStack Developer.
          </p>

          <p className="text-lg sm:text-xl">
            I am dedicated to my field, always seeking to collaborate and contribute with my experience. My goal is to develop innovative projects that positively impact lives.
          </p>

          <p className="text-lg sm:text-xl">
            I am looking for opportunities to grow professionally and apply my knowledge in challenging projects, contributing to the evolution of Information Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;