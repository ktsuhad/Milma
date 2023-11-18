import React from "react";
import milmaLogo from "../assets/milmaLogo.svg";
import facebookIcon from "../assets/frame1.svg";
import youtubeIcon from "../assets/frame2.svg";
import linkedinIcon from "../assets/frame3.svg";
import instagramIcon from "../assets/frame4.svg";

const Footer = () => {
  return (
    <div className="w-full h-[462px] bg-royalblue flex justify-center md:justify-between items-center flex-wrap px-14 md:px-24 mt-24">
      <img src={milmaLogo} alt="milma logo" />
      <div className="flex flex-col text-white gap-4 items-end">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Follow us</span>
          <div className="flex items-center gap-3">
            <img src={facebookIcon} alt="facebook" />
            <img src={youtubeIcon} alt="youtube" />
            <img src={linkedinIcon} alt="linkdein" />
            <img src={instagramIcon} alt="instagram" />
          </div>
        </div>
        <div>
          <span className="text-sm font-normal text-center">
            © Milmaicecream. All rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
