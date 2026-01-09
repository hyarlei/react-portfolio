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
          "experience": "Experience",
          "contact": "Contact",
          "language": "Language",
          "welcome": "Welcome to my portfolio",

          "What motivates me": "What motivates me",
          "Development Philosophy": "Development Philosophy",
          "Prase": "\"Quality software is not just about working, it's about being secure, scalable, and easy to maintain. I believe technical excellence is the foundation for products that transform users' lives.\"",
          "Years of Experience": "Years of Experience",
          "Projects Delivered": "Projects Delivered",
          "Focus on Quality": "Focus on Quality",
          "Commits Made": "Commits Made",
          "Some Numbers": "Some Numbers",
          "My Journey": "My Journey",
          "about1": "About",
          "me": "Me",
          "title1": "Clean Architecture",
          "description1": "I develop decoupled and testable systems, facilitating maintenance and long-term scalability.",
          "title2": "High Performance",
          "description2": "Focus on optimizing queries and low-latency APIs to ensure the best experience.",
          "title3": "Teamwork",
          "description3": "Experience with agile methodologies (Scrum) and collaborative code review (Code Review).",
          "title4": "Robust Solutions",
          "description4": "I use modern technologies like Docker and TypeScript to solve complex problems securely.",
          "Question": "Interested in learning more about my experience?",
          "Let's chat!": "Let's chat!",
          "Question1": "Interested in seeing more projects or discussing a collaboration?",
          
          "My": "My",
          "Portfolio1": "Portfolio",
          "description": "Software Developer with 4 years of hands-on market experience, specializing in building robust and scalable Backends. My journey combines the agility of development as a PJ/Freelancer with the theoretical foundation of a degree in Information Systems from UFC.",
          "skills": "I am an specialist in the JavaScript/TypeScript ecosystem (Node.js & NestJS), with strong expertise in Docker, software architecture (SOLID/Clean Code), and data integrity.",
          "dedication": "I don't just write code; I create solutions focused on performance and security, ensuring applications can handle growth and high demand.",
          "opportunities": "I seek complex technical challenges where I can apply advanced software engineering concepts—such as horizontal scalability, microservices, and API optimization. My focus is on generating real business value through cutting-edge technology.",

          "fullStackDeveloper": "Fullstack Developer",
          "prase2": "Mastery of the modern JavaScript ecosystem, with a strong foundation in software architecture and databases.",
          "experienceDescription": "Fullstack Developer with 4 years of experience building scalable applications. Specialist in NodeJS, React, and Docker.",
          "phrase3": "Focused on becoming a Software Engineer expert. 🚀",

          "checkOutWork": "Check out my recent projects focused on performance and architecture. Each project represents a challenge overcome and an innovative solution.",
          "demo": "Demo",
          "code": "Code",
          
          "experienceTitle": "Tech",
          "experienceTitle1": "Stack",
          "techDescription": "Mastery of the modern JavaScript ecosystem, with a strong foundation in Software Architecture and Databases.",
          
          "contactTitle": "Let's",
          "contactTitle1": "Work Together?",
          "contactDescription": "I'm ready to apply my NodeJS and React expertise to solve real-world problems. Let's schedule a conversation?",
          "contactTitle2": "Contact Channels",
          "enterName": "Name / Company",
          "Availability": "I am available for technical interviews and immediate onboarding.",
          "Availability1": "Availability",
          "yourEmail": "Professional Email",
          "yourMessage": "Message",
          "sendMessage": "Send Proposal",
          "sendMessage1": "Submit",
          "message": "We would like to schedule an interview...",
          "Prase2": "I always check my email. I respond to recruiters' requests with the highest priority.",

          "description5": "Fullstack Developer focused on creating scalable and secure solutions. Specialist in the JavaScript ecosystem and Software Architecture.",
          "prase3": "Ready to innovate?",
          "prase4": "Contact me now →",
          "socialMedia": "Social media",
          "navigation": "Navigation",
          "builtWith": "Built with",
        }
      },
      pt: {
        translation: {
          "home": "Início",
          "about": "Sobre",
          "portfolio": "Portfólio",
          "experience": "Experiência",
          "contact": "Contato",
          "language": "Idioma",
          "welcome": "Bem-vindo ao meu portfólio",

          "What motivates me": "O que me motiva",
          "Development Philosophy": "Filosofia de Desenvolvimento",
          "Prase": "\"Software de qualidade não é apenas sobre funcionar, é sobre ser seguro, escalável e fácil de manter. Acredito que a excelência técnica é a base para produtos que transformam a vida dos usuários.\"",
          "Years of Experience": "Anos de Experiência",
          "Projects Delivered": "Projetos Entregues",
          "Focus on Quality": "Foco na Qualidade",
          "Commits Made": "Commits Realizados",
          "Some Numbers": "Alguns Números",
          "My Journey": "Minha Jornada",
          "about1": "Sobre",
          "me": "Mim",
          "title1": "Arquitetura Limpa",
          "description1": "Desenvolvo sistemas desacoplados e testáveis, facilitando a manutenção e escalabilidade a longo prazo.",
          "title2": "Alta Performance",
          "description2": "Foco na otimização de consultas e APIs de baixa latência para garantir a melhor experiência.",
          "title3": "Trabalho em Equipe",
          "description3": "Experiência com metodologias ágeis (Scrum) e revisão colaborativa de código (Code Review).",
          "title4": "Soluções Robústas",
          "description4": "Utilizo tecnologias modernas como Docker e TypeScript para resolver problemas complexos com segurança.",
          "Question": "Interessado em saber mais sobre minha experiência?",
          "Let's chat!": "Vamos conversar!",

          "My": "Meu",
          "Portfolio1": "Portfólio",
          "description": "Desenvolvedor de Software com 4 anos de experiência prática no mercado, especializado na construção de Backends robustos e escaláveis. Minha trajetória une a agilidade do desenvolvimento como PJ/Freelance com a fundamentação teórica da graduação em Sistemas de Informação na UFC.",
          "skills": "Sou especialista no ecossistema JavaScript/TypeScript (Node.js & NestJS), com forte domínio em Docker, arquitetura de software (SOLID/Clean Code) e integridade de dados.",
          "dedication": "Não escrevo apenas código; crio soluções focadas em performance e segurança, garantindo que as aplicações suportem crescimento e alta demanda.",
          "opportunities": "Busco desafios técnicos complexos, onde eu possa aplicar conceitos avançados de engenharia de software — como escalabilidade horizontal, microsserviços e otimização de APIs. Meu foco é gerar valor real para o negócio através de tecnologia de ponta.",
          
          "fullStackDeveloper": "Desenvolvedor Fullstack",
          "experienceDescription": "Desenvolvedor de Software com 4 anos de experiência no mercado. Especialista em NodeJS, TypeScript e Docker.",
          "phrase3": "Focado em me tornar um especialista em Engenharia de Software. 🚀",


          "checkOutWork": "Confira meus projetos recentes focados em performance e arquitetura.",
          "demo": "Demo",
          "code": "Código",

          "experienceTitle": "Tecnológico",
          "experienceTitle1": "Stack",
          "techDescription": "Domínio do ecossistema JavaScript moderno, com forte base em Arquitetura de Software e Banco de Dados.",
          "availability": "Estou disponível para entrevistas técnicas e início imediato.",
          "contactTitle": "Vamos Trabalhar",
          "contactTitle1": "Juntos?",
          "contactTitle2": "Canais de Contato",
          "Availability1": "Disponibilidade",
          "Availability": "Estou disponível para entrevistas técnicas e integração imediata.",
          "contactDescription": "Estou pronto para aplicar minha experiência em NodeJS e TypeScript para resolver problemas reais. Vamos agendar uma conversa?",
          "enterName": "Nome / Empresa",
          "yourEmail": "Email Profissional",
          "yourMessage": "Mensagem",
          "submit": "Enviar Proposta",
          "sendMessage": "Enviar Proposta",
          "message": "Gostaríamos de agendar uma entrevista...",
          "Prase2": "Eu sempre verifico meu email. Respondo às solicitações dos recrutadores com a mais alta prioridade.",
          "Question1": "Interessado em ver mais projetos ou discutir uma colaboração?",
          "sendMessage1": "Enviar",

          "description5": "Desenvolvedor Fullstack focado em criar soluções escaláveis e seguras. Especialista no ecossistema JavaScript e Arquitetura de Software.",
          "prase3": "Pronto para inovar?",
          "prase4": "Entre em contato agora →",
          "socialMedia": "Redes sociais",
          "navigation": "Navegação",
          "builtWith": "Construído com",
        }
      }
    }
  });

export default i18n;