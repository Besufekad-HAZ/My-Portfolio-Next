"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
        }}
        className="relative"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-4 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,153,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hexagonal frame container */}
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px]">
          {/* Animated border hexagon */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <defs>
              <linearGradient
                id="hexGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff99" />
                <stop offset="50%" stopColor="#00ccff" />
                <stop offset="100%" stopColor="#00ff99" />
              </linearGradient>
            </defs>
            <polygon
              points="200,20 370,110 370,290 200,380 30,290 30,110"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </motion.svg>

          {/* Static inner hexagon border */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="200,35 355,118 355,282 200,365 45,282 45,118"
              fill="rgba(10, 10, 15, 0.8)"
              stroke="#00ff99"
              strokeWidth="2"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Image container with hexagon clip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.5, ease: "easeInOut" },
            }}
            className="absolute inset-[15%] overflow-hidden"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: "rgba(10, 10, 15, 0.3)",
            }}
          >
            <Image
              src="/assets/Profile.png"
              priority
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1200px) 320px, 420px"
              alt="Besufekad Alemu"
              className="object-cover object-center scale-110"
              style={{
                filter: "contrast(1.1) brightness(1.15) saturate(1.2)",
                mixBlendMode: "normal",
              }}
            />
            {/* Subtle overlay to blend edges */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 40%, rgba(10, 10, 15, 0.4) 100%)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Accent gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 70%, rgba(0,255,153,0.08) 100%)",
              }}
            />
          </motion.div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px rgba(0,255,153,0.5)",
                "0 0 20px rgba(0,255,153,0.8)",
                "0 0 10px rgba(0,255,153,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
