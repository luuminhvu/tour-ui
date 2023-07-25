import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { MdTour } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="px-2 py-4 items-center flex justify-between">
      <div className="flex items-center">
        <MdTour size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="font-bold text-xl text-gray-700">Tour Beauty</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="text-[var(--primary-dark)] mr-2"
          />
          <p className="text-sm text-gray-700">8:00 - 18:00</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2" />
          <p className="text-sm text-gray-700">+1 234 567 89</p>
        </div>
        <button>Đăng ký Tour</button>
      </div>
    </div>
  );
};

export default Topbar;
