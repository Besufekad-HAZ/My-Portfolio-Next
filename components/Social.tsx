"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Besufekad-HAZ",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/besufekadalemu",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@besufekadalemu8443",
    label: "YouTube",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/besufekad77",
    label: "Instagram",
  },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({
  containerStyles = "flex gap-4",
  iconStyles = "w-10 h-10 border border-accent/50 rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-300",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
        >
          <Link
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Social;
