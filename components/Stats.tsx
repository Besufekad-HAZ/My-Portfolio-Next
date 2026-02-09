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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Stats = () => {
  return (
    <section className="py-4 xl:py-6 mt-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card group cursor-default !p-4"
          >
            <div className="flex flex-col items-center text-center gap-1.5">
              {/* Icon */}
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>

              {/* Number */}
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl xl:text-4xl font-bold text-accent">
                  <CountUp
                    end={item.num}
                    duration={3}
                    delay={0.3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="text-accent text-lg xl:text-xl font-bold">
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-white/60 text-xs xl:text-sm font-medium leading-tight">
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
