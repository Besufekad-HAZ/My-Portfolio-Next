"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
