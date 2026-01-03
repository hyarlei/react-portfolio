import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaRocket } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const quickLinks = [
    { name: "Início", to: "home" },
    { name: "Sobre", to: "about" },
    { name: "Portfólio", to: "portfolio" },
    { name: "Experiência", to: "experience" },
    { name: "Contato", to: "contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/hyarlei",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/hyarlei",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:hyarleysf@gmail.com",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold font-mono gradient-text mb-4">
                &lt;Hyarlei Silva /&gt;
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Desenvolvedor Full Stack focado em criar soluções escaláveis e seguras. Especialista em ecossistema JavaScript e Arquitetura de Software.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              variants={itemVariants}
            >
              {["NestJS", "React", "Docker", "TypeScript", "Java"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 cursor-default"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaRocket className="mr-2 text-blue-400" />
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaCode className="mr-2 text-purple-400" />
              Redes Sociais
            </h4>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-500/10 rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-300 mb-2">Pronto para inovar?</p>
              <Link
                to="contact"
                smooth
                duration={500}
                className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors duration-300"
              >
                Contate-me agora →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-900 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2 text-gray-500 mb-4 md:mb-0 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>© {currentYear} Hyarlei Silva.</span>
              <span className="hidden sm:inline">|</span>
              <span>Construído com</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="text-red-900" />
              </motion.div>
              <span>e React</span>
            </motion.div>

            <motion.div 
              className="text-xs text-gray-600 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              console.log("End of process. Success! ✅")
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 opacity-50"></div>
    </motion.footer>
  );
};

export default Footer;