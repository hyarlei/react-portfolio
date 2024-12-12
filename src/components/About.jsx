// src/components/About.jsx
import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t('about')}
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-lg sm:text-xl mt-10">
            {t('description')}
          </p>

          <p className="text-lg sm:text-xl">
            {t('skills')}
          </p>

          <p className="text-lg sm:text-xl">
            {t('dedication')}
          </p>

          <p className="text-lg sm:text-xl">
            {t('opportunities')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;