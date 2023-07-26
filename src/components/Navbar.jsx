import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] text-white absolute z-10 flex justify-between items-center bg-gray-700/80">
      <ul className="hidden sm:flex">
        <li>
          <a href="/">Trang Chủ</a>
        </li>
        <li>
          <a href="/gallery">Thư Viện</a>
        </li>
        <li>
          <a href="#deals">Đặt phòng</a>
        </li>
        <li>
          <a href="/contact">Liên Hệ</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF size={20} className="mx-4  " />
        <FaTwitter size={20} className="mx-4" />
        <FaGooglePlusG size={20} className="mx-4" />
        <FaInstagram size={20} className="mx-4" />
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Nav */}
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
        onClick={handleNav}
      >
        <ul className="h-full w-full text-center pt-12">
          <li>
            <a href="/">Trang Chủ</a>
          </li>
          <li>
            <a href="/gallery">Thư Viện</a>
          </li>
          <li>
            <a href="/deals">Giá</a>
          </li>
          <li>
            <a href="/contact">Liên Hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
