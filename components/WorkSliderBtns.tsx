"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtnsProps = {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
};

const WorkSliderBtns = ({
  containerStyles = "flex gap-2",
  btnStyles = "w-11 h-11 rounded-full bg-accent text-primary flex justify-center items-center transition-all duration-300 hover:bg-accent-hover",
  iconsStyles = "text-lg",
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
