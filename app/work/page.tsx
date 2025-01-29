"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

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
    image: "/assets/work/project1.png",
    link: "https://mern-dashboard-client-37t0.onrender.com",
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
    image: "/assets/work/project2.png",
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
    image: "/assets/work/project3.png",
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
    image: "/assets/work/project4.png",
    link: "https://rent-motorcycles.onrender.com",
    github: "https://github.com/TamaraDimov/vespa-rentals-frontend",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "Ethio-Chat",
    description:
      "A full stack chat application built with React JS and Firebase. Users can create accounts, chat with friends, and send images. Authentication is handled by Firebase, chat images are stored in Firebase Storage, and messages are stored in Firestore Database for real-time updates.",
    stack: [
      { name: "React (Front-end)" },
      { name: "Firebase (Back-end)" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Firebase Storage for image uploads" },
    ],
    image: "/assets/work/chat-app.png",
    link: "https://chat-app-7q7.pages.dev",
    github: "https://github.com/Besufekad-HAZ/Chat-App",
  },
  {
    num: "06",
    category: "Full Stack",
    title: "Background removal",
    description:
      "Bg-removal is a versatile image editing tool built with the MERN stack. Upload an image, let our AI process it, and download the image with a transparent background. Experience seamless background removal and manage your credits with integrated online payment.",
    stack: [
      { name: "MongoDB" },
      { name: "Express" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Clerk" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: "/assets/work/bg-removal.png",
    link: "https://background-remover-app-ovof.vercel.app",
    github: "https://github.com/Besufekad-HAZ/background-remover-app",
  },
  {
    num: "07",
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
    image: "/assets/work/project5.png",
    link: "https://cash-buddy.onrender.com/",
    github: "https://github.com/Besufekad-HAZ/Budget-app",
  },
  {
    num: "08",
    category: "Front End",
    title: "Air Pollution Data Web App",
    description:
      "Air-Pollution-Data is a React Capstone Project that provides a simple interface for quickly displaying Air pollution data for different countries. In addition, it provides current, forecast, and historical air pollution data for any coordinates on the globe.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Webpack" },
      { name: "React" },
      { name: "Redux" },
      { name: "Redux Toolkit" },
    ],
    image: "/assets/work/project6.png",
    link: "https://airpollution-seven.vercel.app",
    github: "https://github.com/Besufekad-HAZ/React-Capstone-Air-Pollution",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client after component mounts
    setIsClient(true);
  }, []);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setProject(projects[swiper.activeIndex]);
  };

  if (!isClient) {
    // Avoid rendering markup on the server to prevent mismatch
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div
                className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
              >
                {project.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-2 md:gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-lg text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.link} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="h-[460px] relative group flex justify-center text-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                  w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
