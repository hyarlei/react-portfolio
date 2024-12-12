// src/components/Portfolio.jsx
import React from "react";
import { useTranslation } from 'react-i18next';
import CinePrime from "../assets/portfolio/CinePrime.png";
import EZDine from "../assets/portfolio/EZDine.png";
import PetWalk from "../assets/portfolio/PetWalk.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const portfolios = [
    {
      id: 1,
      src: EZDine,
      demoLink: "https://www.ezdineapp.com",
      codeLink: "https://github.com/SimpliSoft/EZDine-landingpage.git"
    },
    {
      id: 2,
      src: CinePrime,
      demoLink: "https://cine-prime-vue.vercel.app/#/",
      codeLink: "https://github.com/hyarlei/CinePrime_Vue.git"
    },
    {
      id: 3,
      src: PetWalk,
      demoLink: "https://app.petwalk.com.br",
      codeLink: "https://github.com/hyarlei/petwalk-pay.git"
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
            {t('portfolio')}
          </p>
          <p className="py-6">{t('checkOutWork')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="cv"
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
                >
                  {t('demo')}
                </a>
                <a
                  href={codeLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
                >
                  {t('code')}
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