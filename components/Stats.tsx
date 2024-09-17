"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 6,
    text: "Total Years of Experience",
  },
  {
    num: 50,
    text: "Projects completed",
  },
  {
    num: 12,
    text: "Technologies Mastered",
  },
  {
    num: 1800,
    text: "Code Commits",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          className="flex flex-wrap gap-6 max-w-[80vw] mx-auto
        xl:max-w-none"
        >
          {stats.map((item, index) => {
            return (
              <div className="flex-1 flex gap-4 items-center" key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
