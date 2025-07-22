import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdown(false);
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold font-mono gradient-text hover:scale-105 transition-transform duration-300">
              &lt;Hyarlei Silva /&gt;
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(({ id, link }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                className="relative px-4 py-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 group"
              >
                <span className="relative z-10 font-medium">{t(link)}</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGlobe />
                <span className="font-medium">{i18n.language.toUpperCase()}</span>
              </button>
              
              {dropdown && (
                <div className="absolute top-full right-0 mt-2 glass-effect rounded-lg shadow-xl border border-white/20 overflow-hidden">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => changeLanguage('pt')}
                    className="block w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    🇧🇷 Português
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        nav ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute top-full left-0 w-full glass-effect border-t border-white/10">
          <div className="px-4 pt-6 pb-8 space-y-4">
            {links.map(({ id, link }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
                className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {t(link)}
              </Link>
            ))}
            
            <div className="border-t border-white/20 pt-4 mt-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => { changeLanguage('en'); setNav(false); }}
                  className="flex-1 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center"
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => { changeLanguage('pt'); setNav(false); }}
                  className="flex-1 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center"
                >
                  🇧🇷 PT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;