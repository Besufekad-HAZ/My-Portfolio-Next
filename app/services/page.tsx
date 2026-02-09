"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    text: "I develop and design websites with a focus on performance and user experience. I am well versed in HTML, CSS, and JavaScript. I also have experience with React and Next.js.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Mobile App Development",
    text: "I develop and design mobile apps with a focus on performance and user experience. I am well versed in React Native and have experience building cross-platform applications.",
    href: "/contact",
  },
  {
    num: "03",
    title: "System Administration",
    text: "I provide system administration and IT support, ensuring smooth operation and security of IT systems.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Graphic Design",
    text: "I design various web and print graphics, focusing on aesthetics and effective communication.",
    href: "/contact",
  },
  {
    num: "05",
    title: "IT Support",
    text: "I offer IT support services to improve network efficiency and maintain IT infrastructure.",
    href: "/contact",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="min-h-screen pt-24 xl:pt-32 pb-12">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            What I Offer
          </span>
          <h1 className="h2 mt-2">
            My <span className="text-gradient">Services</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            I provide comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              {/* Top section */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="text-5xl xl:text-6xl font-extrabold text-transparent
                  bg-clip-text bg-gradient-to-r from-white/20 to-white/5
                  group-hover:from-accent/40 group-hover:to-accent/20
                  transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-14 h-14 rounded-full border border-white/20 bg-white/5
                    flex justify-center items-center
                    group-hover:bg-accent group-hover:border-accent
                    transition-all duration-500"
                >
                  <BsArrowDownRight
                    className="text-white text-xl group-hover:text-primary
                      group-hover:-rotate-45 transition-all duration-500"
                  />
                </Link>
              </div>

              {/* Title */}
              <h2
                className="text-2xl xl:text-3xl font-bold text-white mb-4
                group-hover:text-accent transition-all duration-500"
              >
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
