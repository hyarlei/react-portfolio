import PetWalk from "../assets/portfolio/PetWalk.png";
import { FaDocker, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNestjs, SiPostgresql } from "react-icons/si";
import ticketBlastImg from "../assets/ticketblast.png";

export const portfolioProjects = [
  {
    id: 1,
    title: "TicketBlast - Plataforma de Vendas",
    category: "Full Stack",
    description:
      "Plataforma de alta performance para venda de ingressos. Arquitetura escalável com NestJS e Docker para suportar picos de acesso. Controle de concorrência com transações ACID no PostgreSQL.",
    src: ticketBlastImg,
    demoLink: "https://ticket-blast.vercel.app/",
    codeLink: "https://github.com/hyarlei/ticketblast",
    technologies: [
      { name: "NodeJS", icon: FaNodeJs, color: "text-green-600" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
    ],
  },
  {
    id: 2,
    title: "FasFeet - Gestão Logística",
    category: "Full Stack",
    description:"Sistema completo para controle de encomendas e entregadores. Desenvolvido com foco total em Clean Code e princípios SOLID. Backend robusto para gestão de destinatários e entregas em tempo real.",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    demoLink: "",
    codeLink: "https://github.com/hyarlei/fastfeet",
    technologies: [
      { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
      { name: "Prisma ORM", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
    ],
  },
  {
    id: 3,
    title: "PetWalk Pay",
    category: "Back end",
    description:
      "Sistema de pagamento para aplicativo de passeio com pets. Gateway seguro com múltiplas formas de pagamento.",
    src: PetWalk,
    demoLink: "https://app.petwalk.com.br",
    codeLink: "https://github.com/hyarlei/petwalk-pay.git",
    technologies: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    ],
  },
];
