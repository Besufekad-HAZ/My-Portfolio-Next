"use client";

// import framer motion
import { motion } from "framer-motion";
import { useState } from "react";

// import swiper react
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import Tooltips
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Admin Dashboard",
    description:
      "In this project I built and deployed a MERN Stack Admin Dashboard. For the frontend, I used Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit and Redux Toolkit Query. For backend, I used Node JS, Express Js, Mongoose, and MongoDB.",
    stack: [
      { name: "JavaScript" },
      { name: "Material UI" },
      { name: "Redux Toolkit" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/images/project1.png",
    link: "https://mern-dashboard-client-37t0.onrender.com/dashboard",
    github: "https://github.com/Besufekad-HAZ/MERN-Admin-Dashboard",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Ezra Seminary",
    description:
      "Ezra Seminary is a MERN stack Learning Management System (LMS) app to study the Bible online, get daily devotions, and study the quarterly Sabbath school.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/images/project2.png",
    link: "https://ezraseminary.org",
    github: "https://github.com/EzraSeminary",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Url Shortener",
    description:
      "URL shortener is a web application that takes a long URL and generates a shorter, unique URL that redirects to the original URL. This is useful for sharing long links, especially on platforms with character limits like social media.",
    stack: [
      { name: "Ruby on Rails" },
      { name: "PostgreSQL" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Heroku" },
      { name: "GitHub Actions" },
    ],
    image: "/images/project3.png",
    link: "https://url-shortner-bese-b983225bbc35.herokuapp.com/",
    github: "https://github.com/Besufekad-HAZ/URL-shortener",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Motorcycle Rental Store",
    description:
      "This project is for reserving motorcycles. Whether you're gearing up for a special occasion or event and need a trendy scooter, or if you own a luxurious Vespa and want to earn extra income by renting it out, our website is your ideal destination. Key features include user registration, motorcycle reservations, and the ability to list and manage your own Vespas for rent.",
    stack: [
      { name: "Ruby on Rails" },
      { name: "PostgreSQL" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Render" },
      { name: "GitHub Actions" },
    ],
    image: "/images/project4.png",
    link: "https://rent-motorcycles.onrender.com",
    github: "https://github.com/TamaraDimov/vespa-rentals-frontend",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "Cash-Buddy",
    description:
      "Cash-Buddy is a mobile web application that allows users to manage their budgets by keeping track of their transactions and associated categories. The app requires users to register and log in to ensure that their data is private. Users can add new transactions associated with categories and view the money spent on each category.",
    stack: [
      { name: "Ruby on Rails" },
      { name: "PostgreSQL" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Devise" },
    ],
    image: "/images/project5.png",
    link: "https://cash-buddy.onrender.com/",
    github: "https://github.com/Besufekad-HAZ/Budget-app",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div>
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {stack.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button  */}
                <Link href={project.link} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button  */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <div className="w-full xl:w-[50%]">slider</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
