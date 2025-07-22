import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={24} />
        </>
      ),
      href: "https://www.linkedin.com/in/hyarlei-silva-b279b5250/",
      style: "rounded-tr-lg",
      bgColor: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={24} />
        </>
      ),
      href: "https://github.com/hyarlei",
      bgColor: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-600 hover:to-gray-700",
      shadowColor: "shadow-gray-500/20",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={24} />
        </>
      ),
      href: "mailto:hyarleysf@gmail.com",
      bgColor: "from-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-500 hover:to-purple-600",
      shadowColor: "shadow-purple-500/20",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={24} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-lg",
      download: true,
      bgColor: "from-emerald-600 to-emerald-700",
      hoverColor: "hover:from-emerald-500 hover:to-emerald-600",
      shadowColor: "shadow-emerald-500/20",
    },
  ];

  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="space-y-2">
        {links.map(({ id, child, href, style, download, bgColor, hoverColor, shadowColor }) => (
          <motion.li
            key={id}
            className="group"
            variants={itemVariants}
            whileHover={{ x: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className={`
                flex justify-between items-center w-40 h-14 px-4 
                bg-gradient-to-r ${bgColor} ${hoverColor}
                backdrop-blur-sm border border-white/10
                text-white font-medium
                shadow-lg ${shadowColor} hover:shadow-xl hover:${shadowColor.replace('/20', '/40')}
                transform -translate-x-24 hover:translate-x-0
                transition-all duration-300 ease-out
                ${style || ''}
                group-hover:border-white/20
              `}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="flex justify-between items-center w-full"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {child}
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute left-0 top-0 w-1 h-full bg-white/20 rounded-l-lg"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.li>
        ))}
      </ul>

      {/* Decorative Background */}
      <motion.div 
        className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-r-full blur-sm"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Indicator */}
      <motion.div 
        className="absolute -left-6 top-1/2 -translate-y-1/2"
        animate={{
          x: [0, 5, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;
