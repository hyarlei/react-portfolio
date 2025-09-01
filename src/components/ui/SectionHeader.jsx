import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionHeader = ({ 
  title, 
  highlightedText, 
  description, 
  centered = true,
  className = "" 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      className={`${centered ? 'text-center' : 'text-left'} mb-16 ${className}`}
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
        {title}{' '}
        <span className="gradient-text">{highlightedText}</span>
      </motion.h2>
      
      {description && (
        <motion.p 
          className={`text-gray-400 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
      
      <motion.div 
        className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 ${centered ? 'mx-auto' : ''} mt-6 rounded-full`}
        initial={{ width: 0 }}
        animate={inView ? { width: 96 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  );
};

export default SectionHeader;
