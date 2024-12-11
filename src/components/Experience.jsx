import React from "react";

import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nestjs from "../assets/nestjs.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import postgresql from "../assets/postgrees.png";
import prisma from "../assets/prisma.png";
import reactImage from "../assets/react.png";
import sqlite from "../assets/sqlite.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import vue from "../assets/vuejs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: nestjs,
      title: "NestJS",
      style: "shadow-red-600",
    },
    {
      id: 12,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 13,
      src: prisma,
      title: "Prisma",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: sqlite,
      title: "SQLite",
      style: "shadow-blue-400",
    },
    {
      id: 15,
      src: vue,
      title: "Vue.js",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;