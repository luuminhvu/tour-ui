import { MdTour } from "react-icons/md";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-4 max-w-[1140px] py-8 w-full m-auto">
      <div className="flex text-center justify-center">
        <MdTour size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="font-bold text-xl text-gray-700">Tour Beauty</h1>
      </div>
    </div>
  );
};

export default Footer;
