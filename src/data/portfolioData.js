import CinePrime from "../assets/portfolio/CinePrime.png";
import EZDine from "../assets/portfolio/EZDine.png";
import PetWalk from "../assets/portfolio/PetWalk.png";
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

export const portfolioProjects = [
  {
    id: 1,
    title: "EZDine App",
    description: "Plataforma completa para restaurantes com sistema de pedidos online, gestão de cardápio e dashboard administrativo.",
    src: EZDine,
    demoLink: "https://www.ezdineapp.com",
    codeLink: "https://github.com/SimpliSoft/EZDine-landingpage.git",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
    ],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "CinePrime",
    description: "Aplicação de streaming com catálogo de filmes, sistema de favoritos e player integrado. Interface moderna e responsiva.",
    src: CinePrime,
    demoLink: "https://cine-prime-vue.vercel.app/#/",
    codeLink: "https://github.com/hyarlei/CinePrime_Vue.git",
    technologies: [
      { name: "Vue.js", icon: FaVuejs, color: "text-green-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" }
    ],
    category: "Frontend"
  },
  {
    id: 3,
    title: "PetWalk Pay",
    description: "Sistema de pagamento para aplicativo de passeio com pets. Gateway seguro com múltiplas formas de pagamento.",
    src: PetWalk,
    demoLink: "https://app.petwalk.com.br",
    codeLink: "https://github.com/hyarlei/petwalk-pay.git",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }
    ],
    category: "Full Stack"
  },
];
