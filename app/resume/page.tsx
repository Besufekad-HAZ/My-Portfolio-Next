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
  SiAdobephotoshop,
  SiAdobeindesign,
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
      duration: "2023 — PRESENT",
    },
    {
      company: "Ezra Seminary",
      position: "Full Stack Developer",
      duration: "2023 — 2024",
    },
    {
      company: "Ethiopia Adventist Press",
      position: "Graphics Designer and IT support",
      duration: "2018 — 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I have a solid educational foundation in computer science and graphic design, \
    having completed various programs that equipped me with the skills needed for full-stack development and design.",
  items: [
    {
      institution: "Microverse",
      degree: "Full Stack Developer Certificate",
      duration: "January 2023 — September 2023",
    },
    {
      institution: "Berhanena Selam Printing Enterprise",
      degree: "Graphics and Layout Design with Printing Technology",
      duration: "January 2019 — May 2019",
    },
    {
      institution: "Ambo University",
      degree: "BSc. Computer Science",
      duration: "November 2013 — July 2017",
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
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiAdobeindesign />,
      name: "InDesign",
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12
      xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row
        gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full mx-auto
          xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="w-full h-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-4 px-10 rounded-xl flex flex-col
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-lg max-w-[260px] min-h-[60px]
                          text-center lg:text-left" //the text can be xl based on the screen size ❗❗❗
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-4 px-10 rounded-xl flex flex-col
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-lg max-w-[260px] min-h-[60px]
                          text-center lg:text-left" //also this text can be xl based on the screen size ❗❗❗
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl flex
                            justify-center items-center group"
                            >
                              <div
                                className="text-5xl group-hover:text-accent transition-all
                              duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-slate-900 text-lg font-semibold">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent value="about" className="w-full ">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
