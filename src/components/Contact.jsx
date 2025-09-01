import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { contactInfo } from '../data/contactData';
import SectionHeader from './ui/SectionHeader';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    // Validação
    if (!name || !email || !message) {
      toast.error("Por favor, preencha todos os campos!");
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Por favor, insira um email válido!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://getform.io/f/e36b057a-59af-4ec0-a66f-52bcd13b14e9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! 🚀");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente!");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Verifique sua conexão!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      name="contact"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-20 relative overflow-hidden"
      ref={ref}
    >
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#ffffff',
            border: '1px solid #374151'
          }
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          title="Vamos"
          highlightedText="Conversar"
          description="Tem uma ideia interessante? Quer colaborar em um projeto? Ou apenas quer trocar uma ideia sobre tecnologia? Estou sempre aberto para novas oportunidades e conversas!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                Entre em Contato
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Prefere um contato mais direto? Escolha a opção que mais se adequa ao seu estilo:
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gray-800/50 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{contact.title}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fun Message */}
            <motion.div 
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">💡</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Resposta Rápida Garantida!</h4>
                  <p className="text-gray-400 text-sm">
                    Geralmente respondo em até 24 horas. Se for sobre café e código, ainda mais rápido! ☕️
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6 flex items-center"
              variants={itemVariants}
            >
              <FaPaperPlane className="mr-3 text-purple-400" />
              Envie uma Mensagem
            </motion.h3>

            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome aqui..."
                  className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Conte-me sobre seu projeto, ideia ou apenas diga olá! 👋"
                  className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Bottom Message */}
            <motion.div 
              className="mt-6 text-center"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-sm font-mono">
                console.log("Aguardando sua mensagem! 🚀");
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;