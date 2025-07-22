import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('fullStackDeveloper');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  return (
    <div
      name="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        <motion.div 
          className="flex flex-col justify-center h-full space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <motion.h1 
              className="text-lg md:text-xl text-blue-400 font-mono mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hi')} Hyarlei Silva 👋
            </motion.h1>
            
            {/* Main Title */}
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Sou{' '}
              <span className="gradient-text relative">
                {displayText}
                <span className="animate-ping absolute -right-1 text-blue-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">|</span>
              </span>
            </motion.h2>
            
            {/* Subtitle */}
          </motion.div>

          {/* Description */}
          <motion.div className="max-w-2xl" variants={itemVariants}>
            <p className="text-gray-400 text-lg leading-relaxed text-center md:text-left">
              {t('experienceDescription')}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group glass-effect text-white px-8 py-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 glow-effect"
              >
                <FaCode className="mr-2" />
                {t('portfolio')}
                <MdKeyboardArrowRight 
                  size={25} 
                  className="ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                />
              </Link>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              download
              className="group bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdDownload className="mr-2 group-hover:animate-bounce" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center md:justify-start space-x-6 pt-4"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/hyarlei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/hyarlei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Floating Code Block */}
        <motion.div 
          className="hidden lg:flex items-center justify-center mt-16 md:mt-0 md:ml-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="glass-effect p-6 rounded-2xl font-mono text-sm text-green-400 max-w-md"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400">portfolio.js</span>
            </div>
            <pre className="text-xs leading-relaxed">
{`const developer = {
  name: "Hyarlei Silva",
  skills: ["React", "Node.js", "TypeScript"],
  passionate: true,
  coffee: "☕ essential",
  
  code() {
    return "Clean & Efficient";
  }
};

console.log(developer.code());`}
            </pre>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth duration={500} className="cursor-pointer">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;