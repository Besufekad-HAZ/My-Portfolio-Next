"use client";

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
  SiDocker,
  SiPython,
  SiPhp,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I'm a Fullstack developer with a passion for building dynamic and responsive web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Besufekad Alemu" },
    { fieldName: "Phone", fieldValue: "(+251) 923027215" },
    { fieldName: "Experience", fieldValue: "6+ years" },
    { fieldName: "Nationality", fieldValue: "Ethiopian" },
    { fieldName: "Email", fieldValue: "Besurye@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Amharic, English" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I have a diverse background in full-stack development and graphic design, with experience in various industries and a strong focus on creating efficient and scalable web applications.",
  items: [
    {
      company: "Safaricom Ethiopia",
      position: "Full Stack Developer",
      duration: "August 2025 — Present",
    },
    {
      company: "Amen Devs",
      position: "Full Stack Developer",
      duration: "2023 — 2025",
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

const education = {
  title: "My Education",
  description:
    "I have a solid educational foundation in computer science and graphic design, having completed various programs that equipped me with the skills needed for full-stack development and design.",
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

const skills = {
  title: "My Skills",
  description: "A comprehensive list of my technical skills and tools I use.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRuby />, name: "Ruby" },
    { icon: <SiRubyonrails />, name: "Ruby on Rails" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiAdobeindesign />, name: "InDesign" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 xl:pt-32 pb-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-12"
        >
          {/* Sidebar */}
          <div className="w-full xl:w-[280px] xl:flex-shrink-0">
            <TabsList className="w-full max-w-md mx-auto xl:max-w-none">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="h2 mb-4">
                    <span className="text-gradient">{experience.title}</span>
                  </h3>
                  <p className="text-white/60 max-w-2xl">
                    {experience.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="card"
                    >
                      <span className="text-accent text-sm font-medium">
                        {item.duration}
                      </span>
                      <h4 className="text-xl font-semibold text-white mt-2">
                        {item.position}
                      </h4>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="h2 mb-4">
                    <span className="text-gradient">{education.title}</span>
                  </h3>
                  <p className="text-white/60 max-w-2xl">
                    {education.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="card"
                    >
                      <span className="text-accent text-sm font-medium">
                        {item.duration}
                      </span>
                      <h4 className="text-lg font-semibold text-white mt-2">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="h2 mb-4">
                    <span className="text-gradient">{skills.title}</span>
                  </h3>
                  <p className="text-white/60 max-w-2xl">
                    {skills.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className="card flex flex-col items-center justify-center
                              h-24 cursor-pointer group hover:border-accent/50"
                            >
                              <div
                                className="text-4xl text-white/70
                                group-hover:text-accent transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-semibold">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="h2 mb-4">
                    <span className="text-gradient">{about.title}</span>
                  </h3>
                  <p className="text-white/60 max-w-2xl">{about.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {about.info.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 card"
                    >
                      <span className="text-white/60 text-sm min-w-[100px]">
                        {item.fieldName}
                      </span>
                      <span className="text-accent font-medium">
                        {item.fieldValue}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
