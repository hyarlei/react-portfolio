import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",
          "experience": "Stack",
          "contact": "Contact",
          "language": "Language",
          "welcome": "Welcome to my portfolio",
          
          "description": "I am an Information Systems student at UFC, passionate about transforming complex problems into efficient software. My solid academic foundation, combined with 4 years of market practice, allows me to navigate confidently between Backend and Frontend.",
          "skills": "Specialist in the JavaScript ecosystem (Node.js/NestJS) and container architecture (Docker). Total focus on clean code, scalability, and security.",
          "dedication": "I am dedicated to technical excellence, always seeking to collaborate with high-performance teams. My goal is to build robust systems that generate real value for the business.",
          "opportunities": "I am looking for opportunities to apply my knowledge in challenging projects, specifically in the financial sector (Fintechs) and large-scale systems.",
          
          "fullStackDeveloper": "Full Stack Developer",
          "experienceDescription": "Full Stack Developer with 4+ years of experience building scalable applications. Specialist in NodeJS, React, and Docker.",
          
          "checkOutWork": "Check out my recent projects focused on performance and architecture. Each project represents a challenge overcome and an innovative solution.",
          "demo": "Demo",
          "code": "Code",
          
          "experienceTitle": "Tech Stack",
          "techDescription": "Mastery of the modern JavaScript ecosystem, with a strong foundation in Software Architecture and Databases.",
          
          "contactTitle": "Let's Work Together?",
          "contactDescription": "I am ready to apply my experience in NodeJS and React to solve real problems. Let's schedule a chat?",
          "enterName": "Name / Company",
          "yourEmail": "Professional Email",
          "yourMessage": "Message",
          "submit": "Send Proposal",
        }
      },
      pt: {
        translation: {
          "home": "Início",
          "about": "Sobre",
          "portfolio": "Portfólio",
          "experience": "Stack",
          "contact": "Contato",
          "language": "Idioma",
          "welcome": "Bem-vindo ao meu portfólio",
          
          "description": "Sou estudante de Sistemas de Informação na UFC, apaixonado por transformar problemas complexos em software eficiente. Minha base acadêmica sólida, combinada com 4 anos de prática no mercado, me permite navegar com segurança entre Backend e Frontend.",
          "skills": "Especialista no ecossistema JavaScript (Node.js/NestJS) e arquitetura de contêineres (Docker). Foco total em código limpo, escalabilidade e segurança.",
          "dedication": "Sou dedicado à excelência técnica, sempre buscando colaborar com times de alta performance. Meu objetivo é construir sistemas robustos que gerem valor real para o negócio.",
          "opportunities": "Estou em busca de oportunidades para aplicar meu conhecimento em projetos desafiadores, especificamente no setor financeiro (Fintechs) e sistemas de larga escala.",
          
          "hi": "Olá, eu sou",
          "fullStackDeveloper": "Desenvolvedor Full Stack",
          "experienceDescription": "Desenvolvedor Full Stack com mais de 4 anos de experiência criando aplicações escaláveis. Especialista em NodeJS, React e Docker.",
          
          "checkOutWork": "Confira meus projetos recentes focados em performance e arquitetura.",
          "demo": "Demo",
          "code": "Código",
          
          "experienceTitle": "Stack Tecnológico",
          "techDescription": "Domínio do ecossistema JavaScript moderno, com forte base em Arquitetura de Software e Banco de Dados.",
          
          "contactTitle": "Vamos Trabalhar Juntos?",
          "contactDescription": "Estou pronto para aplicar minha experiência em NodeJS e React para resolver problemas reais. Vamos agendar uma conversa?",
          "enterName": "Nome / Empresa",
          "yourEmail": "Email Profissional",
          "yourMessage": "Mensagem",
          "submit": "Enviar Proposta",
        }
      }
    }
  });

export default i18n;