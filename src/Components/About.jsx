import React from "react";
import milkShakeImg from "../assets/milkshakesettable-1@2x.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center p-10 md:p-24">
      <img
        src={milkShakeImg}
        alt="milk-Shake-Img"
        className="w-full sm:w-[300px] md:max-w-[449px] h-auto"
      />

      <div className="w-full md:w-[588px] text-base md:text-lg leading-[1.5] font-light text-left mt-4 md:mt-0 ">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis
      </div>
    </div>
  );
};

export default About;
