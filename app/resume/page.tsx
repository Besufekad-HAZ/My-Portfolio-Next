"use client";

import { time } from "console";
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

const Resume = () => {
  return <div>Resume Page</div>;
};

export default Resume;
