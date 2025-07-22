import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nestjs from "../assets/nestjs.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgresql.png";
import prisma from "../assets/prisma.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      category: "Frontend",
      level: "Avançado",
      color: "from-orange-400 to-orange-600",
      shadowColor: "shadow-orange-500/20",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      category: "Frontend",
      level: "Avançado",
      color: "from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      category: "Language",
      level: "Avançado",
      color: "from-yellow-400 to-yellow-600",
      shadowColor: "shadow-yellow-500/20",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      category: "Language",
      level: "Avançado",
      color: "from-blue-500 to-blue-700",
      shadowColor: "shadow-blue-600/20",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      category: "Frontend",
      level: "Avançado",
      color: "from-cyan-400 to-cyan-600",
      shadowColor: "shadow-cyan-500/20",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      category: "Frontend",
      level: "Avançado",
      color: "from-teal-400 to-teal-600",
      shadowColor: "shadow-teal-400/20",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      category: "Backend",
      level: "Avançado",
      color: "from-green-400 to-green-600",
      shadowColor: "shadow-green-500/20",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      category: "Tools",
      level: "Avançado",
      color: "from-gray-400 to-gray-600",
      shadowColor: "shadow-gray-400/20",
    },
    {
      id: 9,
      src: postgresql,
      title: "PostgreSQL",
      category: "Database",
      level: "Intermediário",
      color: "from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-400/20",
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      category: "Database",
      level: "Intermediário",
      color: "from-green-400 to-green-600",
      shadowColor: "shadow-green-400/20",
    },
    {
      id: 11,
      src: nestjs,
      title: "NestJS",
      category: "Backend",
      level: "Intermediário",
      color: "from-red-400 to-red-600",
      shadowColor: "shadow-red-600/20",
    },
    {
      id: 12,
      src: prisma,
      title: "Prisma",
      category: "Database",
      level: "Intermediário",
      color: "from-indigo-400 to-indigo-600",
      shadowColor: "shadow-indigo-400/20",
    },
  ];

  const categories = [
    { name: "Frontend", icon: "🎨", count: techs.filter(tech => tech.category === "Frontend").length },
    { name: "Backend", icon: "⚙️", count: techs.filter(tech => tech.category === "Backend").length },
    { name: "Database", icon: "🗄️", count: techs.filter(tech => tech.category === "Database").length },
    { name: "Tools", icon: "🛠️", count: techs.filter(tech => tech.category === "Tools").length },
    { name: "Language", icon: "💻", count: techs.filter(tech => tech.category === "Language").length },
  ];

  return (
    <section
      name="experience"
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
            Minhas {' '}
            <span className="gradient-text">Tecnologias</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('experienceDescription')} Aqui estão as principais tecnologias e ferramentas que domino.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Categories Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 rounded-xl p-4 text-center hover:bg-gray-800/60 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="text-white font-semibold text-sm">{category.name}</h3>
              <p className="text-gray-400 text-xs">{category.count} tecnologias</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`group bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-500 ${tech.shadowColor} hover:shadow-2xl`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Tech Icon */}
              <motion.div 
                className="relative mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-800/50 rounded-full p-4 border border-gray-600/30">
                  <img 
                    src={tech.src} 
                    alt={tech.title}
                    className="w-12 h-12 mx-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Tech Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-500 text-xs mb-2">{tech.category}</p>
                
                {/* Skill Level */}
                <motion.div 
                  className="flex items-center justify-center space-x-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${tech.color} text-white font-medium`}>
                    {tech.level}
                  </span>
                </motion.div>
              </motion.div>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
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
            Sempre aprendendo novas tecnologias e aprimorando minhas habilidades! 🚀
          </motion.p>
          <motion.div
            className="inline-flex items-center space-x-2 text-blue-400 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-mono">console.log("Always learning! 💻");</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;