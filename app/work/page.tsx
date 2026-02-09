"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/work/project";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [direction, setDirection] = useState(0);
  const project = projects[activeIndex];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToProject = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (!isClient) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 xl:pt-32 pb-20"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h1 className="h2 mt-2">
            Selected <span className="text-gradient">Works</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
            Explore my projects — from full-stack platforms to creative
            front-end builds
          </p>
        </motion.div>

        {/* ─── Featured Project Showcase ─── */}
        <div className="mb-20">
          {/* Browser-style image preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-white/10
              shadow-2xl shadow-black/40 group"
          >
            {/* Browser top bar */}
            <div className="bg-[#1a1a24] border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div
                className="flex-1 mx-4 bg-white/5 rounded-lg px-4 py-1.5 text-white/40 text-xs
                  truncate border border-white/5"
              >
                {project.link}
              </div>
              <div className="flex gap-2">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10
                          flex items-center justify-center
                          hover:bg-accent hover:border-accent hover:text-primary
                          text-white/50 transition-all duration-300"
                      >
                        <BsArrowUpRight className="text-sm" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Visit Live</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10
                          flex items-center justify-center
                          hover:bg-accent hover:border-accent hover:text-primary
                          text-white/50 transition-all duration-300"
                      >
                        <BsGithub className="text-sm" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Source Code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Image area */}
            <div className="relative h-[260px] sm:h-[360px] xl:h-[480px] bg-[#0d0d14] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700
                      group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 1140px"
                    priority
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Project info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-accent text-xs font-bold tracking-wider uppercase
                          px-3 py-1 rounded-full bg-accent/10 border border-accent/30"
                      >
                        {project.category}
                      </span>
                      <span className="text-white/40 text-xs">
                        Project {project.num} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10
                  flex items-center justify-center text-white/70
                  hover:bg-accent hover:text-primary hover:border-accent
                  transition-all duration-300"
                aria-label="Previous project"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10
                  flex items-center justify-center text-white/70
                  hover:bg-accent hover:text-primary hover:border-accent
                  transition-all duration-300"
                aria-label="Next project"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>

            {/* Tech stack bar */}
            <div className="bg-[#12121a] border-t border-white/5 px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs text-accent/90 bg-accent/5
                          border border-accent/15 rounded-full whitespace-nowrap"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="px-3 py-1 text-xs text-white/40 bg-white/5 rounded-full">
                        +{project.stack.length - 6} more
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action links */}
              <div className="flex gap-2 flex-shrink-0">
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium
                    bg-accent text-primary rounded-lg
                    hover:bg-accent-hover transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]"
                >
                  <span className="hidden sm:inline">Live Demo</span>
                  <BsArrowUpRight className="text-sm" />
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium
                    bg-white/5 border border-white/10 text-white/70 rounded-lg
                    hover:border-accent/50 hover:text-accent transition-all duration-300"
                >
                  <BsGithub className="text-sm" />
                  <span className="hidden sm:inline">Code</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Project Thumbnail Grid ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold text-white/90">
              All Projects
            </h3>
            <span className="text-white/40 text-sm">
              {projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {projects.map((p, i) => (
              <motion.button
                key={i}
                onClick={() => goToProject(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300
                  cursor-pointer text-left
                  ${
                    i === activeIndex
                      ? "border-accent shadow-[0_0_20px_rgba(0,255,153,0.2)] ring-1 ring-accent/50"
                      : "border-white/10 hover:border-white/30"
                  }`}
              >
                {/* Thumbnail image */}
                <div className="relative h-28 sm:h-32 xl:h-36 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className={`object-cover object-top transition-all duration-500
                      ${
                        i === activeIndex
                          ? "scale-105"
                          : "group-hover:scale-110"
                      }`}
                    sizes="(max-width: 640px) 50vw, (max-width: 960px) 33vw, 20vw"
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-300
                      ${
                        i === activeIndex
                          ? "bg-accent/10"
                          : "bg-black/40 group-hover:bg-black/20"
                      }`}
                  />
                  {/* Number badge */}
                  <div
                    className={`absolute top-2 left-2 w-7 h-7 rounded-lg flex items-center justify-center
                      text-xs font-bold transition-all duration-300
                      ${
                        i === activeIndex
                          ? "bg-accent text-primary"
                          : "bg-black/60 text-white/60 group-hover:bg-accent/20 group-hover:text-accent"
                      }`}
                  >
                    {p.num}
                  </div>
                  {/* Active indicator */}
                  {i === activeIndex && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-3 bg-[#12121a]/80">
                  <p
                    className={`text-xs font-medium truncate transition-colors duration-300
                      ${
                        i === activeIndex
                          ? "text-accent"
                          : "text-white/70 group-hover:text-white"
                      }`}
                  >
                    {p.title}
                  </p>
                  <p className="text-[10px] text-white/30 mt-0.5">
                    {p.category}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
