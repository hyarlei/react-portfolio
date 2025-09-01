/**
 * Configuração global do aplicativo
 */

export const AppConfig = {
  // Informações básicas
  name: "Hyarlei Silva",
  title: "Full Stack Developer",
  email: "hyarlei@exemplo.com",
  
  // Redes sociais
  socialLinks: {
    github: "https://github.com/hyarlei",
    linkedin: "https://linkedin.com/in/hyarlei",
    twitter: "https://twitter.com/hyarlei",
  },
  
  // Configurações de API
  api: {
    formSubmissionUrl: "https://getform.io/f/e36b057a-59af-4ec0-a66f-52bcd13b14e9",
  },
  
  // Habilidades técnicas - podem ser exibidas em diferentes partes do site
  skills: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "TailwindCSS", level: 95 },
  ],
  
  // Configurações de metadados
  siteMetadata: {
    title: "Hyarlei Silva | Full Stack Developer",
    description: "Portfólio pessoal de Hyarlei Silva, desenvolvedor Full Stack com experiência em React, Node.js e TypeScript.",
    siteUrl: "https://hyarlei.dev",
    keywords: "desenvolvedor, full stack, react, node.js, portfolio"
  },
};
