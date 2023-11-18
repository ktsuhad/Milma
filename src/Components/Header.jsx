import React from "react";
import milmaLogo from "../assets/milmaLogo.svg";
import Charecter from "../assets/Charecter.png";
import celebrateLogo from "../assets/Frames.png";

const Header = () => {
  return (
    <div className="w-screen h-[650px]  background-image bg-royalblue flex items-end justify-center p-10  md:p-0 ">
      <div>
        <img src={milmaLogo} alt="milmaLogo" className="w-[100px] md:w-[162px] fixed top-5 left-5" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <img src={Charecter} alt="" className="w-full md:w-[350px] lg:w-[447px] h-auto" />
        <img
          src={celebrateLogo}
          alt="charecter-logo"
          className="w-full  md:w-[300px] lg:w-[441px] h-auto"
        />
      </div>
    </div>
  );
};

export default Header;
