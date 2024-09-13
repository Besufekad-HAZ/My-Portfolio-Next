import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const getReverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return {
    /* render 6 motion divs, each representing a step of stairs.
        each div will have the same animation defined by the stairsAnimation object. (dynamically)
        The delay for each div is calculated dynamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step.
        */
    0: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
    1: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
    2: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
    3: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
    4: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
    5: <motion.div className="w-full h-1/6" variants={stairAnimation} />,
  };
};

export default Stairs;
