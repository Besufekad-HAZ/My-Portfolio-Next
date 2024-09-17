"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    text: "I develop and design websites with a focus on performance and user experience. I am well versed in HTML, CSS, and JavaScript. I also have experience with React and Next.js.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Mobile App Development",
    text: "I develop and design mobile apps with a focus on performance and user experience. I am well versed in HTML, CSS, and JavaScript. I also have experience with React and Next.js.",
    href: "/mobile-development",
  },
  {
    num: "03",
    title: "Game Development",
    text: "I develop and design games with a focus on performance and user experience. I am well versed in HTML, CSS, and JavaScript. I also have experience with React and Next.js.",
    href: "/game-development",
  },
  {
    num: "04",
    title: "AI Development",
    text: "I develop and design AI with a focus on performance and user experience. I am well versed in HTML, CSS, and JavaScript. I also have experience with React and Next.js.",
    href: "/ai-development",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">services page</div>
    </section>
  );
};

export default Services;
