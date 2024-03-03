import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a committed and passionate student in the area of Information Technology,
          currently enrolled in the Information System course at the Federal University of Ceará (UFC).
          My goal is to acquire vast knowledge in my area of expertise and, above all, to master different programming languages.
        </p>

        <br />

        <p className="text-xl">
          I am currently dedicating my efforts to improving my skills in
          Typescript, Nodejs and React. My goal is to become a FullStack Developer.
        </p>

        <br />

        <p className="text-xl">
          I am a person committed to my area of ​​knowledge and work,
          always looking to collaborate and contribute with my experience and skills.
          My biggest interest is to continue developing innovative projects that positively impact people's lives.
        </p>

        <br />

        <p className="text-xl">
          I am looking for opportunities to grow professionally and apply my knowledge in challenging projects,
          as I believe this will allow me to further expand my vision and skills.
          I believe that my motivation and determination are fundamental to achieving my goals and, above all,
          to contribute to the evolution of the Information Technology area.
        </p>
      </div>
    </div>
  );
};

export default About;
