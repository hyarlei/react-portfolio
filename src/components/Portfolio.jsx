import React from "react";
import CinePrime from "../assets/portfolio/CinePrime.png";
import EZDine from "../assets/portfolio/EZDine.png";
import PetWalk from "../assets/portfolio/PetWalk.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: EZDine,
      codeLink: "https://www.ezdineapp.com",
    },
    {
      id: 2,
      src: CinePrime,
      codeLink: "https://cine-prime-vue.vercel.app",
    },
    {
      id: 3,
      src: PetWalk,
      codeLink: "https://app.petwalk.com.br",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="cv"
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                  Demo
                </button>
                <a
                  href={codeLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;