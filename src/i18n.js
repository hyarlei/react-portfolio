// src/i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
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
          "description": "I am a passionate Information Technology student at the Federal University of Ceará (UFC), aiming to master various programming languages.",
          "skills": "Currently, I am enhancing my skills in Typescript, Nodejs, and React to become a FullStack Developer.",
          "dedication": "I am dedicated to my field, always seeking to collaborate and contribute with my experience. My goal is to develop innovative projects that positively impact lives.",
          "opportunities": "I am looking for opportunities to grow professionally and apply my knowledge in challenging projects, contributing to the evolution of Information Technology.",
          "hi": "Hi, I'm a",
          "fullStackDeveloper": "Full Stack Developer",
          "experienceDescription": "I am a full-stack developer with 3+ years of experience using NodeJS and 1 year using React. Check out if you want to know more!",
          "checkOutWork": "Check out some of my work right here",
          "demo": "Demo",
          "code": "Code",
          "experienceTitle": "Experience",
          "experienceDescription": "These are the technologies I've worked with",
          "contactTitle": "Contact",
          "contactDescription": "Submit the form below to get in touch with me",
          "enterName": "Enter your name",
          "yourEmail": "Your email address",
          "yourMessage": "Your message",
          "submit": "Submit",
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
          "description": "Sou um estudante apaixonado por Tecnologia da Informação na Universidade Federal do Ceará (UFC), com o objetivo de dominar várias linguagens de programação.",
          "skills": "Atualmente, estou aprimorando minhas habilidades em Typescript, Nodejs e React para me tornar um Desenvolvedor FullStack.",
          "dedication": "Sou dedicado à minha área, sempre buscando colaborar e contribuir com minha experiência. Meu objetivo é desenvolver projetos inovadores que impactem positivamente a vida das pessoas.",
          "opportunities": "Estou em busca de oportunidades para crescer profissionalmente e aplicar meu conhecimento em projetos desafiadores, contribuindo para a evolução da Tecnologia da Informação.",
          "hi": "Olá, eu sou um",
          "fullStackDeveloper": "Desenvolvedor Full Stack",
          "experienceDescription": "Sou um desenvolvedor full-stack com mais de 3 anos de experiência usando NodeJS e 1 ano usando React. Confira se você quiser saber mais!",
          "checkOutWork": "Confira alguns dos meus trabalhos aqui",
          "demo": "Demo",
          "code": "Código",
          "experienceTitle": "Experiência",
          "experienceDescription": "Estas são as tecnologias com as quais trabalhei",
          "contactTitle": "Contato",
          "contactDescription": "Envie o formulário abaixo para entrar em contato comigo",
          "enterName": "Digite seu nome",
          "yourEmail": "Seu endereço de email",
          "yourMessage": "Sua mensagem",
          "submit": "Enviar",
        }
      }
    }
  });

export default i18n;