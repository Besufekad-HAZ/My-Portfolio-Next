"use client";

import { time } from "console";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// about me data
const about = {
  title: "About me",
  Description:
    "I'm a Fullstack developer with a passion for building dynamic and responsive web applications. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Besufekad Alemu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+251) 923027215",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopian",
    },
    {
      fieldName: "Email",
      fieldValue: "Besurye@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Amharic, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have a diverse background in full-stack development and graphic design, \
    with experience in various industries and a strong focus on creating efficient and scalable web applications.",
  items: [
    {
      company: "Amen Devs",
      position: "Full Stack Developer",
      duration: "SEPTEMBER 2023 — PRESENT",
    },
    {
      company: "Ezra Seminary",
      position: "Full Stack Developer",
      duration: "OCTOBER 2023 — SEPTEMBER 2024",
    },
    {
      company: "Ethiopia Adventist Press",
      position: "Graphics Designer and IT support",
      duration: "JANUARY 2018 — OCTOBER 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I have a diverse background in full-stack development and graphic design, \
    with experience in various industries and a strong focus on creating efficient and scalable web applications.",
  items: [
    {
      institution: "Microverse",
      degree: "Full Stack Developer Certificate",
      duration: "JANUARY 2023 — SEPTEMBER 2023",
    },
    {
      institution: "Berhanena Selam Printing Enterprise",
      degree: "Graphics and layout design with printing techonology",
      duration: "JANUARY 2019 — MAY 2019",
    },
    {
      institution: "Ambo University",
      degree: "BSc. Computer Science",
      duration: "NOVEMBER 2013 — JULY 2017",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "A comprehensive list of my technical skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiRuby />,
      name: "Ruby",
    },
    {
      icon: <SiRubyonrails />,
      name: "Ruby on Rails",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  return <div>Resume Page</div>;
};

export default Resume;
