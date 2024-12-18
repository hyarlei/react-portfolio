// src/components/NavBar.jsx
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdown(false); // Fecha o dropdown após a seleção
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl ml-2 font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          &lt;Hyarlei Silva /&gt;
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {t(link)}
            </Link>
          </li>
        ))}
        <li className="relative px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          <button onClick={() => setDropdown(!dropdown)}>{t('language')}</button>
          {dropdown && (
            <ul className="absolute top-8 left-0 bg-gray-700 text-white rounded-md shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-600" onClick={() => changeLanguage('en')}>EN</li>
              <li className="px-4 py-2 hover:bg-gray-600" onClick={() => changeLanguage('pt')}>PT</li>
            </ul>
          )}
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {t(link)}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={() => changeLanguage('en')}>EN</button>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button onClick={() => changeLanguage('pt')}>PT</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;