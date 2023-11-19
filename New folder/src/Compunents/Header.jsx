import React from "react";
import { Slide } from "react-toastify";
import Slidemenue from "./SlideMenu";

const Header = () => {
  return (
    <div className="text-white flex items-center justify-between px-[15%] pt-8 ">
      <div className="text-[#e4e44a]  text-xl ">
        <p className="hover:text-gray-400 cursor-pointer ">Time Vault</p>
        <p className="bg-[#e4e44a] h-1 w-[4rem] mt-1"></p>
      </div>
      <ul className="font-semibold text-lg text-gray-400 md:flex items-center gap-x-6 hidden ">
        <li className="text-[#e4e44a] cursor-pointer">Home</li>
        <a href="#features">
          <li className="hover:text-[#e4e44a] cursor-pointer">Features</li>
        </a>
        <a href="#contact">
          <li className="hover:text-[#e4e44a] cursor-pointer">Contact</li>
        </a>
      </ul>
      <Slidemenue />
    </div>
  );
};

export default Header;
