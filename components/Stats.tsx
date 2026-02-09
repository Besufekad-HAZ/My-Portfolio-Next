"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 6,
    suffix: "+",
    text: "Years of Experience",
    icon: "🎯",
  },
  {
    num: 80,
    suffix: "+",
    text: "Projects Completed",
    icon: "🚀",
  },
  {
    num: 20,
    suffix: "+",
    text: "Technologies Mastered",
    icon: "⚡",
  },
  {
    num: 2100,
    suffix: "+",
    text: "Code Commits",
    icon: "💻",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Stats = () => {
  return (
    <section className="py-12 xl:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card group cursor-default"
          >
            <div className="flex flex-col items-center text-center gap-3">
              {/* Icon */}
              <span className="text-3xl xl:text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>

              {/* Number */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl xl:text-5xl font-bold text-accent">
                  <CountUp
                    end={item.num}
                    duration={3}
                    delay={0.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="text-accent text-xl xl:text-2xl font-bold">
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-white/60 text-sm xl:text-base font-medium leading-tight">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
