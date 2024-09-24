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
      { name: "HTML 5" },
      { name: "CSS 3" },
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
      { name: "HTML 5" },
      { name: "CSS 3" },
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
      { name: "HTML 5" },
      { name: "CSS 3" },
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
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Devise" },
    ],
    image: "/images/project5.png",
    link: "https://cash-buddy.onrender.com/",
    github: "https://github.com/Besufekad-HAZ/Budget-app",
  },
];

const Work = () => {
  return <div>Work Page</div>;
};

export default Work;
