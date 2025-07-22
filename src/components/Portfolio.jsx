import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import CinePrime from "../assets/portfolio/CinePrime.png";
import EZDine from "../assets/portfolio/EZDine.png";
import PetWalk from "../assets/portfolio/PetWalk.png";

const Portfolio = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const portfolios = [
    {
      id: 1,
      title: "EZDine App",
      description: "Plataforma completa para restaurantes com sistema de pedidos online, gestão de cardápio e dashboard administrativo.",
      src: EZDine,
      demoLink: "https://www.ezdineapp.com",
      codeLink: "https://github.com/SimpliSoft/EZDine-landingpage.git",
      technologies: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
      ],
      category: "Full Stack"
    },
    {
      id: 2,
      title: "CinePrime",
      description: "Aplicação de streaming com catálogo de filmes, sistema de favoritos e player integrado. Interface moderna e responsiva.",
      src: CinePrime,
      demoLink: "https://cine-prime-vue.vercel.app/#/",
      codeLink: "https://github.com/hyarlei/CinePrime_Vue.git",
      technologies: [
        { name: "Vue.js", icon: FaVuejs, color: "text-green-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
      ],
      category: "Frontend"
    },
    {
      id: 3,
      title: "PetWalk Pay",
      description: "Sistema de pagamento para aplicativo de passeio com pets. Gateway seguro com múltiplas formas de pagamento.",
      src: PetWalk,
      demoLink: "https://app.petwalk.com.br",
      codeLink: "https://github.com/hyarlei/petwalk-pay.git",
      technologies: [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }
      ],
      category: "Full Stack"
    },
  ];

  return (
    <section
      name="portfolio"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meu {' '}
            <span className="gradient-text">Portfólio</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('checkOutWork')} Cada projeto representa um desafio superado e uma solução inovadora.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolios.map(({ id, title, description, src, demoLink, codeLink, technologies, category }, index) => (
            <motion.div
              key={id}
              className="group bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/80 text-white rounded-full backdrop-blur-sm">
                    {category}
                  </span>
                </motion.div>

                {/* Quick Action Buttons */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-gray-800/95 transition-colors duration-200 border border-gray-600/60"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="text-blue-400" size={16} />
                  </motion.a>
                  <motion.a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-gray-800/95 transition-colors duration-200 border border-gray-600/60"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-gray-300" size={16} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {description}
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-900/70 border border-gray-600/40 rounded-lg text-xs hover:bg-gray-800/80 hover:border-gray-500 transition-colors duration-200"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <tech.icon className={tech.color} />
                      <span className="text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Ver Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900/60 border border-gray-600/50 text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800/80 hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={12} />
                    <span>Código</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p 
            className="text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Interessado em ver mais projetos ou discutir uma colaboração?
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Vamos Conversar</span>
            <FaExternalLinkAlt size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;