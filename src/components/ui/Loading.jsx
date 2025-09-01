import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Componente de carregamento/loading para transição entre páginas
 */
const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Desaparece após 1.5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gray-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-6">
          <motion.div 
            className="w-4 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mx-1"
            animate={{ 
              height: [16, 32, 16],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0
            }}
          />
          <motion.div 
            className="w-4 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mx-1"
            animate={{ 
              height: [16, 32, 16],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <motion.div 
            className="w-4 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mx-1"
            animate={{ 
              height: [16, 32, 16],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.4
            }}
          />
        </div>
        <motion.h2 
          className="text-white font-mono text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Carregando...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
