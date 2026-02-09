"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed inset-0 z-40 pointer-events-none"
      >
        <div className="h-screen w-screen flex">
          <Stairs />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
