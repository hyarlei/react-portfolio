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
      url: "mailto:hyarlei@exemplo.com",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold font-mono gradient-text mb-4">
                &lt;Hyarlei Silva /&gt;
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras. 
                Transformando ideias em realidade através de código limpo e eficiente.
              </p>
            </div>
            
            {/* Tech Stack Showcase */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              variants={itemVariants}
            >
              {["React", "Node.js", "TypeScript", "Next.js", "MongoDB"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-gray-700/70 transition-colors duration-200"
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

          {/* Quick Links */}
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

          {/* Connect Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaCode className="mr-2 text-purple-400" />
              Conecte-se
            </h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-300 mb-2">Interessado em colaborar?</p>
              <Link
                to="contact"
                smooth
                duration={500}
                className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors duration-300"
              >
                Vamos conversar →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700/50 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>© {currentYear} Hyarlei Silva. Feito com</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#ec4899", "#ef4444"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>e muito ☕</span>
            </motion.div>

            <motion.div 
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-mono">console.log("Obrigado pela visita! 🚀")</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
    </motion.footer>
  );
};

export default Footer;