import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode, FaComments, FaDownload, FaGraduationCap, FaHeart, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Escrevo código limpo, legível e maintível, seguindo as melhores práticas da indústria."
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Otimizo aplicações para máxima performance e experiência do usuário excepcional."
    },
    {
      icon: FaUsers,
      title: "Colaboração",
      description: "Trabalho bem em equipe, comunicação clara e metodologias ágeis."
    },
    {
      icon: FaLightbulb,
      title: "Inovação",
      description: "Sempre buscando novas tecnologias e soluções criativas para problemas complexos."
    }
  ];

  const stats = [
    { number: "3+", label: "Anos de Experiência" },
    { number: "20+", label: "Projetos Concluídos" },
    { number: "100%", label: "Dedicação" },
    { number: "∞", label: "Café Consumido" }
  ];

  return (
    <section
      name="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0] 
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sobre {' '}
            <span className="gradient-text">Mim</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={itemVariants}
        >
          
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <FaGraduationCap className="text-blue-400 mr-3" />
                Minha Jornada
              </motion.h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                  {t('description')}
                </motion.p>
                
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                  Como desenvolvedor full-stack, tenho paixão por criar soluções digitais que fazem a diferença. 
                  Especializado em React, Node.js e tecnologias modernas, transformo ideias em realidade digital.
                </motion.p>
                
                <motion.p 
                  className="text-lg"
                  variants={itemVariants}
                >
                  {t('dedication')}
                </motion.p>
              </div>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                className="text-xl font-semibold text-white mb-4 flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <FaHeart className="text-red-400 mr-2" />
                O que me motiva
              </motion.h4>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                {t('opportunities')}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Features & Stats */}
          <motion.div 
            className="space-y-12"
            variants={itemVariants}
          >
            
            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect p-6 rounded-xl group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="text-3xl text-blue-400 mb-4" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="glass-effect p-8 rounded-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                Alguns Números
              </h4>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tech Philosophy */}
            <motion.div 
              className="glass-effect p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-lg font-semibold text-white mb-4 flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <FaCode className="text-green-400 mr-2" />
                Filosofia de Desenvolvimento
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm leading-relaxed"
                variants={itemVariants}
              >
                "Código é poesia. Cada linha deve ter propósito, cada função deve contar uma história, 
                e cada projeto deve resolver um problema real de forma elegante e eficiente."
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-400 mb-6 text-lg"
            variants={itemVariants}
          >
            Interessado em saber mais sobre minha experiência?
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaComments className="group-hover:animate-pulse" />
              <span>Vamos Conversar</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;